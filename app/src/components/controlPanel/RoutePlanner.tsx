import { useState, useEffect } from "react";
import { Filter, ArrowUpDown, ChevronDown, ChevronUp, Calendar } from "lucide-react"; // Icons
import TramLogo from "../../../public/Tram-Logo.svg";
import S_BahnLogo from "../../../public/S-Bahn-Logo.svg";
import BusLogo from "../../../public/Bus-Logo.svg"; 
import TransportFilter from "./filters/TransportFilter";
import DepartureFilter from "./filters/DepartureFilter";
import { useSettingsContext } from "@/contexts/settingsContext"; // Import context
import { useAutocompleteDataContext } from "@/contexts/DataContext/autocompleteDataContext";
import { AutocompleteItem } from "@/api/autocompleteService/dto/autocompleteitemResponse";
import { TransportMode } from "@/types/TransportMode";
import Bike from "../../../public/Bike.svg";
import PersonStanding from "../../../public/Walk.svg";
import Car from "../../../public/Car.svg";
import { useOtpDataContext } from "@/contexts/DataContext/routingDataContext";
import { RequestParameters } from "@/api/routingService/dto/otpRequest";
import { ViewMode } from "@/types/ViewMode";

type TransportOption = {
  type: string;
  logo: any;
  mode: TransportMode;
};

const transportOptions: TransportOption[] = [
  { type: "Tram", logo: TramLogo, mode: "TRAM" },
  { type: "S-Bahn", logo: S_BahnLogo, mode: "SUBURB" },
  { type: "Bus", logo: BusLogo, mode: "BUS" },
  { type: "Bike", logo: Bike, mode: "BIKE" },
  { type: "Walk", logo: PersonStanding, mode: "WALK" },
  { type: "Car", logo: Car, mode: "CAR" }
];

interface SelectedLocation {
  name: string;
  coordinates: string; // Format: "lat,lon"
}

const RoutePlanner = ({ setActiveView }: { setActiveView: (view: ViewMode) => void }) => {
  const { translations, transportModes, toggleTransportMode } = useSettingsContext();
  const { autocompleteData, fetchAutocompleteData, loadingAutocomplete } = useAutocompleteDataContext();
  const { fetchOtpData } = useOtpDataContext();

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false);
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showDepartureFilter, setShowDepartureFilter] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [defaultDate, setDefaultDate] = useState<Date | null>(null);
  const [originAutocompleteData, setOriginAutocompleteData] = useState<AutocompleteItem[]>([]);
  const [destinationAutocompleteData, setDestinationAutocompleteData] = useState<AutocompleteItem[]>([]);
  const [selectedOrigin, setSelectedOrigin] = useState<SelectedLocation | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<SelectedLocation | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isOriginSelected, setIsOriginSelected] = useState(false);
  const [isDestinationSelected, setIsDestinationSelected] = useState(false);
  
  useEffect(() => {
    const now = new Date();
    setSelectedDate(now);
    setDefaultDate(now);
  }, []);
  
  const isDepartureModified = selectedDate && defaultDate 
    ? selectedDate.getTime() !== defaultDate.getTime()
    : false;
    
  const formattedTime = selectedDate
    ? selectedDate.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    : '';

  // Add logging for transport modes changes
  useEffect(() => {
    console.log('Current Transport Modes:', transportModes);
  }, [transportModes]);

  const toggleFilter = (type: string) => {
    const modeMap: { [key: string]: TransportMode } = {
      "Tram": "TRAM",
      "S-Bahn": "SUBURB",
      "Bus": "BUS",
      "Bike": "BIKE",
      "Walk": "WALK",
      "Car": "CAR",
    };

    const mode = modeMap[type];
    if (mode) {
      console.log('Toggling transport mode:', {
        type,
        mappedMode: mode
      });
      toggleTransportMode(mode);
    }
  };

  const swapLocations = () => {
    setOrigin(destination);
    setDestination(origin);
    const tempOrigin = selectedOrigin;
    setSelectedOrigin(selectedDestination);
    setSelectedDestination(tempOrigin);
  };

  // Update the origin effect
  useEffect(() => {
    if(isOriginSelected) return;

    const timer = setTimeout(async () => {
      if (origin.length >= 2) {
        try {
          setShowOriginSuggestions(true);
          setShowDestinationSuggestions(false);
          setOriginAutocompleteData([]); // Clear previous suggestions
          await fetchAutocompleteData({ 
            search: origin,
            format: "JSON",
            pointType: "P,S,W"
          });
          if (autocompleteData) {
            setOriginAutocompleteData(autocompleteData);
          }
        } catch (error) {
          console.error('Error fetching origin suggestions:', error);
        }
      } else {
        setShowOriginSuggestions(false);
        setOriginAutocompleteData([]);
      }
    }, 300); // 300ms delay

    return () => clearTimeout(timer);
  }, [origin, fetchAutocompleteData]);

  // Update the destination effect
  useEffect(() => {
    if(isDestinationSelected) return;
      
    const timer = setTimeout(async () => {
      if (destination.length >= 2) {
        try {
          setShowDestinationSuggestions(true);
          setShowOriginSuggestions(false);
          setDestinationAutocompleteData([]); // Clear previous suggestions
          await fetchAutocompleteData({ 
            search: destination,
            format: "JSON",
            pointType: "P,S,W"
          });
          if (autocompleteData) {
            setDestinationAutocompleteData(autocompleteData);
          }
        } catch (error) {
          console.error('Error fetching destination suggestions:', error);
        }
      } else {
        setShowDestinationSuggestions(false);
        setDestinationAutocompleteData([]);
      }
    }, 300); // 300ms delay

    return () => clearTimeout(timer);
  }, [destination, fetchAutocompleteData, selectedOrigin, selectedDestination]);

  const handleSuggestionClick = (suggestion: AutocompleteItem, isOrigin: boolean) => {
    const fullAddress = `${suggestion.name}${suggestion.streetname ? `, ${suggestion.streetname}` : ''}${suggestion.housenumber ? ` ${suggestion.housenumber}` : ''}${suggestion.stadt ? `, ${suggestion.stadt}` : ''}`;
    const coordinates = `${suggestion.lat},${suggestion.lon}`;
  
    if (isOrigin) {
      setOrigin(fullAddress);
      setSelectedOrigin({ name: fullAddress, coordinates });
      setIsOriginSelected(true);
      setShowOriginSuggestions(false);
    } else {
      setDestination(fullAddress);
      setSelectedDestination({ name: fullAddress, coordinates });
      setIsDestinationSelected(true);
      setShowDestinationSuggestions(false);
    }
    
    setOriginAutocompleteData([]); 
    setDestinationAutocompleteData([]);
    setSelectedIndex(-1);
  
    // Ensure input field loses focus
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };
  
  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.suggestions-container') && !target.closest('.location-input')) {
        setShowOriginSuggestions(false);
        setShowDestinationSuggestions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSeeRoutes = async () => {
    if (!selectedOrigin || !selectedDestination) {
      console.error('Origin or destination not selected');
      return;
    }

    try {
      const params: Partial<RequestParameters> = {
        From: selectedOrigin.coordinates,
        To: selectedDestination.coordinates,
        Travelmode: transportModes,
        numItineraries: 5,  
      };

      if (selectedDate) {
        params.date = selectedDate.toLocaleDateString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric'
        }).replace(/\//g, '-');

        params.time = selectedDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
      }

      console.log('Fetching routes with params:', {
        From: params.From,
        To: params.To,
        Travelmode: params.Travelmode,
        date: params.date,
        time: params.time
      });

      await fetchOtpData(params);
      setActiveView("PLAN");
    } catch (error) {
      console.error('Error fetching routes:', error);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    suggestions: AutocompleteItem[],
    isOrigin: boolean
  ) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > -1 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && suggestions[selectedIndex]) {
          handleSuggestionClick(suggestions[selectedIndex], isOrigin);
        }
        setSelectedIndex(-1);
        break;
      case 'Escape':
        if (isOrigin) {
          setShowOriginSuggestions(false);
        } else {
          setShowDestinationSuggestions(false);
        }
        setSelectedIndex(-1);
        break;
        
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 w-full">
      <h2 className="text-lg font-bold">{translations?.ControlPanel?.planner?.title || "Plan Your Journey"}</h2>

      {/* Origin Input with Suggestions */}
      <div className="relative">
        <input
          type="text"
          placeholder={translations?.ControlPanel?.planner?.origin || "Origin"}
          value={origin}
          onChange={(e) => {
            setOrigin(e.target.value);
            setIsOriginSelected(false);
            setSelectedOrigin(null);
            setSelectedIndex(-1);
          }}
          onKeyDown={(e) => handleKeyDown(e, originAutocompleteData, true)}
          onFocus={() => {
            if (origin.length >= 2) {
              setShowOriginSuggestions(true);
            }
          }}
          className="location-input w-full p-2 border rounded"
        />
        {showOriginSuggestions && (
          <div className="suggestions-container absolute z-10 w-full bg-white border rounded-md shadow-lg mt-1">
            {loadingAutocomplete ? (
              <div className="p-2 text-gray-600">Loading suggestions...</div>
            ) : originAutocompleteData.length > 0 ? (
              originAutocompleteData.slice(0, 5).map((suggestion, index) => (
                <div
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion, true)}
                  className={`p-2 cursor-pointer ${
                    index === selectedIndex 
                      ? 'bg-primary-yellow/10' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="font-medium">{suggestion.name}</div>
                  <div className="text-sm text-gray-600">
                    {suggestion.streetname} {suggestion.housenumber}, {suggestion.stadt}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-600">No suggestions found</div>
            )}
          </div>
        )}
        
        {/* Swap Button */}
        <button
          onClick={swapLocations}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#1a365d]/10 p-1 rounded-full hover:bg-[#fef9c3] transition-colors"
        >
          <ArrowUpDown size={18} className="text-[#1a365d]" />
        </button>
      </div>

      {/* Destination Input with Suggestions */}
      <div className="relative">
        <input
          type="text"
          placeholder={translations?.ControlPanel?.planner?.destination || "Destination"}
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            setIsDestinationSelected(false);
            setSelectedDestination(null);
            setSelectedIndex(-1);
          }}
          onKeyDown={(e) => handleKeyDown(e, destinationAutocompleteData, false)}
          onFocus={() => {
            if (destination.length >= 2) {
              setShowDestinationSuggestions(true);
            }
          }}
          className="location-input w-full p-2 border rounded"
        />
        {showDestinationSuggestions && (
          <div className="suggestions-container absolute z-10 w-full bg-white border rounded-md shadow-lg mt-1">
            {loadingAutocomplete ? (
              <div className="p-2 text-gray-600">Loading suggestions...</div>
            ) : destinationAutocompleteData.length > 0 ? (
              destinationAutocompleteData.slice(0, 5).map((suggestion, index) => (
                <div
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion, false)}
                  className={`p-2 cursor-pointer ${
                    index === selectedIndex 
                      ? 'bg-primary-yellow/10' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="font-medium">{suggestion.name}</div>
                  <div className="text-sm text-gray-600">
                    {suggestion.streetname} {suggestion.housenumber}, {suggestion.stadt}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-600">No suggestions found</div>
            )}
          </div>
        )}
      </div>

      {/* Filter Buttons Container */}
      <div className="grid grid-cols-2 gap-2">
        {/* Departure Filter Button */}
        <button
          onClick={() => setShowDepartureFilter(!showDepartureFilter)}
          className="flex items-center justify-between bg-primary-yellow text-primary-blue px-4 py-2 rounded-md transition-all hover:bg-primary-yellow/80"
          suppressHydrationWarning
        >
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>
              {isDepartureModified 
                ? translations?.ControlPanel?.planner?.filters?.departureAt?.replace("{time}", formattedTime) || `Departure at ${formattedTime}`
                : translations?.ControlPanel?.planner?.filters?.departureNow || "Depart Now"
              }
            </span>
          </div>
          {showDepartureFilter ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {/* Transport Filter Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-between bg-primary-yellow text-primary-blue px-4 py-2 rounded-md transition-all hover:bg-primary-yellow/80"
        >
          <div className="flex items-center gap-2">
            <Filter size={18} />
            <span>{translations?.ControlPanel?.planner?.filters?.transportButton || "Transport"}</span>
          </div>
          {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {/* Filter Components */}
      {showDepartureFilter && (
        <DepartureFilter 
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}
      {showFilters && (
        <TransportFilter 
          activeFilters={Object.fromEntries(
            transportOptions.map(option => [
              option.type,
              transportModes.includes(option.mode)
            ])
          )}
          toggleFilter={toggleFilter}
        />
      )}

      {/* See Routes Button */}
      <button 
        onClick={handleSeeRoutes}
        disabled={!selectedOrigin || !selectedDestination}
        className={`p-2 rounded w-full transition-colors ${
          !selectedOrigin || !selectedDestination 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-primary-yellow text-primary-blue hover:bg-primary-yellow/80'
        }`}
      >
        {translations?.ControlPanel?.planner?.seeRoutes || "See Routes"}
      </button>
    </div>
  );
};

export default RoutePlanner;
