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

type ViewState = "planner" | "routes" | "details" | "station";

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

const RoutePlanner = ({ setActiveView }: { setActiveView: (view: ViewState) => void }) => {
  const { translations, transportModes, toggleTransportMode } = useSettingsContext();
  const { autocompleteData, fetchAutocompleteData, loadingAutocomplete } = useAutocompleteDataContext();

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false);
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showDepartureFilter, setShowDepartureFilter] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [defaultDate, setDefaultDate] = useState<Date | null>(null);
  
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
  };

  // Handle input changes with debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (origin.length >= 2) {
        fetchAutocompleteData({ 
          search: origin,
          format: "JSON",
          pointType: "P,S,W"
        });
        // Only show suggestions if the input doesn't exactly match any suggestion
        const exactMatch = autocompleteData?.some(suggestion => {
          const fullAddress = `${suggestion.name}${suggestion.streetname ? `, ${suggestion.streetname}` : ''}${suggestion.housenumber ? ` ${suggestion.housenumber}` : ''}${suggestion.stadt ? `, ${suggestion.stadt}` : ''}`;
          return fullAddress === origin;
        });
        setShowOriginSuggestions(!exactMatch);
        setShowDestinationSuggestions(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [origin, fetchAutocompleteData, autocompleteData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (destination.length >= 2) {
        fetchAutocompleteData({ 
          search: destination,
          format: "JSON",
          pointType: "P,S,W"
        });
        // Only show suggestions if the input doesn't exactly match any suggestion
        const exactMatch = autocompleteData?.some(suggestion => {
          const fullAddress = `${suggestion.name}${suggestion.streetname ? `, ${suggestion.streetname}` : ''}${suggestion.housenumber ? ` ${suggestion.housenumber}` : ''}${suggestion.stadt ? `, ${suggestion.stadt}` : ''}`;
          return fullAddress === destination;
        });
        setShowDestinationSuggestions(!exactMatch);
        setShowOriginSuggestions(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [destination, fetchAutocompleteData, autocompleteData]);

  const handleSuggestionClick = (suggestion: AutocompleteItem, isOrigin: boolean) => {
    const fullAddress = `${suggestion.name}${suggestion.streetname ? `, ${suggestion.streetname}` : ''}${suggestion.housenumber ? ` ${suggestion.housenumber}` : ''}${suggestion.stadt ? `, ${suggestion.stadt}` : ''}`;
    
    if (isOrigin) {
      setOrigin(fullAddress);
      setShowOriginSuggestions(false);
    } else {
      setDestination(fullAddress);
      setShowDestinationSuggestions(false);
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

  return (
    <div className="flex flex-col gap-4 p-4 w-full">
      <h2 className="text-lg font-bold">{translations?.ControlPanel?.planner?.title || "Plan Your Journey"}</h2>

      {/* Origin Input with Suggestions */}
      <div className="relative">
        <input
          type="text"
          placeholder={translations?.ControlPanel?.planner?.origin || "Origin"}
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          onFocus={() => origin.length >= 2 && setShowOriginSuggestions(true)}
          className="location-input w-full p-2 border border-[#1a365d]/20 rounded focus:border-[#1a365d] focus:ring-1 focus:ring-[#1a365d] outline-none"
        />
        {showOriginSuggestions && autocompleteData && autocompleteData.length > 0 && (
          <div className="suggestions-container absolute z-10 w-full bg-white border rounded-md shadow-lg mt-1">
            {autocompleteData.slice(0, 5).map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion, true)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                <div className="font-medium">{suggestion.name}</div>
                <div className="text-sm text-gray-600">
                  {suggestion.streetname} {suggestion.housenumber}, {suggestion.stadt}
                </div>
              </div>
            ))}
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
          onChange={(e) => setDestination(e.target.value)}
          onFocus={() => destination.length >= 2 && setShowDestinationSuggestions(true)}
          className="location-input w-full p-2 border rounded"
        />
        {showDestinationSuggestions && autocompleteData && autocompleteData.length > 0 && (
          <div className="suggestions-container absolute z-10 w-full bg-white border rounded-md shadow-lg mt-1">
            {autocompleteData.slice(0, 5).map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion, false)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                <div className="font-medium">{suggestion.name}</div>
                <div className="text-sm text-gray-600">
                  {suggestion.streetname} {suggestion.housenumber}, {suggestion.stadt}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Filter Buttons Container */}
      <div className="grid grid-cols-2 gap-2">
        {/* Departure Filter Button */}
        <button
          onClick={() => setShowDepartureFilter(!showDepartureFilter)}
          className="flex items-center justify-between bg-[#1a365d] text-white px-4 py-2 rounded-md transition-all hover:bg-[#2d4a7c]"
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
          className="flex items-center justify-between bg-[#1a365d] text-white px-4 py-2 rounded-md transition-all hover:bg-[#2d4a7c]"
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
        onClick={() => setActiveView("routes")} 
        className="bg-[#1a365d] text-white p-2 rounded w-full hover:bg-[#2d4a7c] transition-colors"
      >
        {translations?.ControlPanel?.planner?.seeRoutes || "See Routes"}
      </button>
    </div>
  );
};

export default RoutePlanner;
