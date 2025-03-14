import { useState, useEffect, SetStateAction } from "react";
import { Filter, ArrowUpDown, ChevronDown, ChevronUp, Calendar } from "lucide-react"; // Icons
import TramLogo from "../../../public/icons/otp-icons/Tram-Logo.svg";
import S_BahnLogo from "../../../public/icons/otp-icons/S-Bahn-Logo.svg";
import TrainLogo from "../../../public/icons/otp-icons/Train.svg";
import BusLogo from "../../../public/icons/otp-icons/Bus-Logo.svg"; 
import TransportFilter from "./filters/TransportFilter";
import DepartureFilter from "./filters/DepartureFilter";
import { useSettingsContext } from "@/contexts/settingsContext"; // Import context
import { useAutocompleteDataContext } from "@/contexts/DataContext/autocompleteDataContext";
import { AutocompleteItem } from "@/api/autocompleteService/dto/autocompleteitemResponse";
import { TransportMode } from "@/types/TransportMode";
import { useOtpDataContext } from "@/contexts/DataContext/routingDataContext";
import { RequestParameters } from "@/api/routingService/dto/otpRequest";
import { ViewMode } from "@/types/ViewMode";
import SuggestionContainer from "./widgets/SuggestionContainer";
import { useLocationContext } from "@/contexts/locationContext";

type TransportOption = {
  type: string;
  logo: any;
  mode: TransportMode;
};

const transportOptions: TransportOption[] = [
  { type: "Tram", logo: TramLogo, mode: "TRAM" },
  { type: "S-Bahn", logo: S_BahnLogo, mode: "SUBURB" },
  { type: "Bus", logo: BusLogo, mode: "BUS" },
  { type: "Train", logo: TrainLogo, mode: "TRAIN" }
];

interface SelectedLocation {
  name: string;
  coordinates: string; // Format: "lat,lon"
}

const RoutePlanner = ({ setActiveView }: { setActiveView: (view: ViewMode) => void }) => {
  const { translations, transportModes, toggleTransportMode } = useSettingsContext();
  const { 
    autocompleteData, 
    fetchAutocompleteData, 
    loadingAutocomplete,
    errorAutocomplete,
    clearState: clearAutocompleteData 
  } = useAutocompleteDataContext();
  const { 
    fetchOtpData, 
    lastOrigin, 
    lastDestination, 
    lastOriginCoordinates, 
    lastDestinationCoordinates,
    setLastSearchParams 
  } = useOtpDataContext();
  const { currentLocation, locationIsEnabled } = useLocationContext();

  // Initialize with values from context if available
  const [origin, setOrigin] = useState(lastOrigin || "");
  const [destination, setDestination] = useState(lastDestination || "");
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false);
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showDepartureFilter, setShowDepartureFilter] = useState(false);
  const [lastClickedFilter, setLastClickedFilter] = useState<'departure' | 'transport' | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [defaultDate, setDefaultDate] = useState<Date | null>(null);
  const [isArrival, setIsArrival] = useState(false);
  const [lessTransfers, setLessTransfers] = useState(false);
  const [shortWalk, setShortWalk] = useState(false);
  const [originAutocompleteData, setOriginAutocompleteData] = useState<AutocompleteItem[]>([]);
  const [destinationAutocompleteData, setDestinationAutocompleteData] = useState<AutocompleteItem[]>([]);
  
  // Add search request tracking
  const [searchRequestStack, setSearchRequestStack] = useState<{
    id: number;
    field: "origin" | "destination";
    query: string;
  }[]>([]);
  const [lastRequestId, setLastRequestId] = useState(0);
  
  // Initialize with values from context if available
  const [selectedOrigin, setSelectedOrigin] = useState<SelectedLocation | null>(
    lastOrigin && lastOriginCoordinates 
      ? { name: lastOrigin, coordinates: lastOriginCoordinates } 
      : null
  );
  const [selectedDestination, setSelectedDestination] = useState<SelectedLocation | null>(
    lastDestination && lastDestinationCoordinates 
      ? { name: lastDestination, coordinates: lastDestinationCoordinates } 
      : null
  );
  
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isOriginSelected, setIsOriginSelected] = useState(!!lastOrigin);
  const [isDestinationSelected, setIsDestinationSelected] = useState(!!lastDestination);
  
  useEffect(() => {
    const now = new Date();
    setSelectedDate(now);
    setDefaultDate(now);
  }, []);
  
  const isDepartureModified = selectedDate && defaultDate 
    ? selectedDate.getTime() !== defaultDate.getTime() || isArrival
    : false;
    
  const formattedTime = selectedDate
    ? selectedDate.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    : '';

  // Log transport modes changes
  useEffect(() => {
    console.log('Current Transport Modes:', transportModes);
  }, [transportModes]);

  const toggleFilter = (type: string) => {
    const modeMap: { [key: string]: TransportMode } = {
      "Tram": "TRAM",
      "S-Bahn": "SUBURB",
      "Bus": "BUS",
      "Train": "TRAIN"
    };

    const mode = modeMap[type];
    if (mode) {
      console.log('Toggling transport mode:', { type, mappedMode: mode });
      toggleTransportMode(mode);
    }
  };

  const swapLocations = () => {
    // Close all suggestion containers
    setShowOriginSuggestions(false);
    setShowDestinationSuggestions(false);
    
    // Swap the input values
    setOrigin(destination);
    setDestination(origin);
    
    // Swap the selected locations
    const tempOrigin = selectedOrigin;
    setSelectedOrigin(selectedDestination);
    setSelectedDestination(tempOrigin);
    
    // Update the selected states
    setIsOriginSelected(!!selectedDestination);
    setIsDestinationSelected(!!selectedOrigin);
    
    // Clear any autocomplete data
    setOriginAutocompleteData([]);
    setDestinationAutocompleteData([]);
    clearAutocompleteData();
    
    // Clear the search request stack
    setSearchRequestStack([]);
  };

  // Functions to trigger fetch of suggestions. The returned autocomplete data will be processed by the effect below.
  const fetchOriginSuggestions = async (query: string) => {
    if (query.length < 2) return;
    
    try {
      // Ensure destination suggestions are closed
      setShowDestinationSuggestions(false);
      setDestinationAutocompleteData([]);
      
      // Create a new request ID and add it to the stack
      const requestId = lastRequestId + 1;
      setLastRequestId(requestId);
      
      setSearchRequestStack(prev => [
        ...prev, 
        { id: requestId, field: "origin", query }
      ]);
      
      // Clear previous autocomplete data
      await clearAutocompleteData();
      await fetchAutocompleteData({ 
        search: query,
        format: "JSON",
        pointType: "N,P,S,W"
      });
    } catch (error) {
      console.error('Error fetching origin suggestions:', error);
    }
  };

  const fetchDestinationSuggestions = async (query: string) => {
    if (query.length < 2) return;
    
    try {
      // Ensure origin suggestions are closed
      setShowOriginSuggestions(false);
      setOriginAutocompleteData([]);
      
      // Create a new request ID and add it to the stack
      const requestId = lastRequestId + 1;
      setLastRequestId(requestId);
      
      setSearchRequestStack(prev => [
        ...prev, 
        { id: requestId, field: "destination", query }
      ]);
      
      await clearAutocompleteData();
      await fetchAutocompleteData({ 
        search: query,
        format: "JSON",
        pointType: "N,P,S,W"
      });
    } catch (error) {
      console.error('Error fetching destination suggestions:', error);
    }
  };

  // Effect to trigger suggestion update based on the latest autocomplete data.
  useEffect(() => {
    if (loadingAutocomplete) {
      console.warn("Autocomplete data is still loading...");
      return;
    }
    if (errorAutocomplete) {
      console.error("Error fetching autocomplete data:", errorAutocomplete);
      return;
    }
    if (!autocompleteData || searchRequestStack.length === 0) {
      return;
    }
    
    // Get the most recent request from the stack
    const latestRequest = searchRequestStack[searchRequestStack.length - 1];
    
    // Update the appropriate field's data
    if (latestRequest.field === "origin") {
      setOriginAutocompleteData(autocompleteData);
      setShowOriginSuggestions(true);
    } else if (latestRequest.field === "destination") {
      setDestinationAutocompleteData(autocompleteData);
      setShowDestinationSuggestions(true);
    }
    
    // Remove the processed request from the stack
    setSearchRequestStack(prev => prev.filter(req => req.id !== latestRequest.id));
    
  }, [autocompleteData, loadingAutocomplete, errorAutocomplete, searchRequestStack]);

  // Effects to fetch suggestions on input change
  useEffect(() => {
    if (isOriginSelected) return;
    
    if (origin.length >= 2) {
      fetchOriginSuggestions(origin);
    } else {
      // Show only current location when input is less than 2 characters
      setOriginAutocompleteData([]);
      if (locationIsEnabled) {
        setShowOriginSuggestions(true);
      } else {
        setShowOriginSuggestions(false);
      }
    }
  }, [origin, locationIsEnabled]);

  useEffect(() => {
    if (isDestinationSelected) return;
    
    if (destination.length >= 2) {
      fetchDestinationSuggestions(destination);
    } else {
      // Show only current location when input is less than 2 characters
      setDestinationAutocompleteData([]);
      if (locationIsEnabled) {
        setShowDestinationSuggestions(true);
      } else {
        setShowDestinationSuggestions(false);
      }
    }
  }, [destination, locationIsEnabled]);

  // Clear autocomplete data when focusing on input fields
  const handleOriginFocus = () => {
    // Close destination suggestions when origin is focused
    setShowDestinationSuggestions(false);
    setDestinationAutocompleteData([]);
    clearAutocompleteData();
    
    if (origin.length >= 2 && !isOriginSelected) {
      fetchOriginSuggestions(origin);
    } else if (locationIsEnabled) {
      // Show only current location when input is less than 2 characters
      setOriginAutocompleteData([]);
      setShowOriginSuggestions(true);
    }
  };

  const handleDestinationFocus = () => {
    // Close origin suggestions when destination is focused
    setShowOriginSuggestions(false);
    setOriginAutocompleteData([]);
    clearAutocompleteData();
    
    if (destination.length >= 2 && !isDestinationSelected) {
      fetchDestinationSuggestions(destination);
    } else if (locationIsEnabled) {
      // Show only current location when input is less than 2 characters
      setDestinationAutocompleteData([]);
      setShowDestinationSuggestions(true);
    }
  };

  const handleSuggestionClick = (suggestion: AutocompleteItem, isOrigin: boolean) => {
    let SelectedLocation: SetStateAction<SelectedLocation | null>;

    if (suggestion instanceof AutocompleteItem) {
      const fullAddress = `${suggestion.data}`;
      const coordinates = `${suggestion.lat},${suggestion.lon}`;
      SelectedLocation = { name: fullAddress, coordinates };
    } 
    else {
      return;  
    }
  
    if (isOrigin) {
      setOrigin(SelectedLocation.name);
      setSelectedOrigin(SelectedLocation);
      setIsOriginSelected(true);
      setShowOriginSuggestions(false);
    } else {
      setDestination(SelectedLocation.name);
      setSelectedDestination(SelectedLocation);
      setIsDestinationSelected(true);
      setShowDestinationSuggestions(false);
    }
    
    // Clear autocomplete data and reset state
    setOriginAutocompleteData([]); 
    setDestinationAutocompleteData([]);
    clearAutocompleteData();
    setSelectedIndex(-1);
    
    // Clear the search request stack
    setSearchRequestStack([]);
  
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };
  
  // Click-outside handler for suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.suggestions-container') && !target.closest('.location-input')) {
        setShowOriginSuggestions(false);
        setShowDestinationSuggestions(false);
        // Clear the search request stack when clicking outside
        setSearchRequestStack([]);
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
      setLastSearchParams(
        selectedOrigin.name,
        selectedDestination.name,
        selectedOrigin.coordinates,
        selectedDestination.coordinates,
        transportModes, 
        selectedDate ? selectedDate.toLocaleDateString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric'
        }).replace(/\//g, '-') : "",
        selectedDate ? selectedDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }) : ""
      );

      const params: Partial<RequestParameters> = {
        From: selectedOrigin.coordinates,
        To: selectedDestination.coordinates,
        Travelmode: transportModes,
        numItineraries: 5,
        arriveBy: isArrival,
        lessTransfers: lessTransfers,
        shortWalk: shortWalk
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
        time: params.time,
        arriveBy: params.arriveBy,
        lessTransfers: params.lessTransfers,
        shortWalk: params.shortWalk
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
    // If only current location is shown (no suggestions), set index to -2 for current location
    const onlyCurrentLocationShown = suggestions.length === 0 && locationIsEnabled;
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        e.stopPropagation(); // Stop event propagation
        // Ensure only one suggestion container is visible
        if (isOrigin) {
          setShowDestinationSuggestions(false);
        } else {
          setShowOriginSuggestions(false);
        }
        
        if (onlyCurrentLocationShown) {
          setSelectedIndex(-2); // Select current location
        } else {
          // If we're at the current location option (-2) or before it (-1), move to the first suggestion (0)
          // Otherwise, move down through the suggestions
          setSelectedIndex(prev => {
            if (prev < 0) return 0;
            return prev < suggestions.length - 1 ? prev + 1 : prev;
          });
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        e.stopPropagation(); // Stop event propagation
        // Ensure only one suggestion container is visible
        if (isOrigin) {
          setShowDestinationSuggestions(false);
        } else {
          setShowOriginSuggestions(false);
        }
        
        if (onlyCurrentLocationShown) {
          setSelectedIndex(-2); // Select current location
        } else {
          // If we're at the first suggestion (0), move to the current location option (-2)
          // Otherwise, move up through the suggestions
          setSelectedIndex(prev => {
            if (prev === 0 && locationIsEnabled) return -2;
            return prev > -2 ? prev - 1 : -2;
          });
        }
        break;
      case 'Enter':
        e.preventDefault();
        e.stopPropagation(); // Stop event propagation
        
        // Only handle Enter if suggestions are visible
        if ((isOrigin && showOriginSuggestions) || (!isOrigin && showDestinationSuggestions)) {
          if (selectedIndex === -2 && locationIsEnabled) {
            // Handle current location selection
            if (isOrigin) {
              handleUseCurrentLocationForOrigin();
            } else {
              handleUseCurrentLocationForDestination();
            }
          } else if (selectedIndex >= 0 && suggestions[selectedIndex]) {
            handleSuggestionClick(suggestions[selectedIndex], isOrigin);
          }
          setSelectedIndex(-1);
        }
        break;
      case 'Escape':
        e.preventDefault();
        e.stopPropagation(); // Stop event propagation
        if (isOrigin) {
          setShowOriginSuggestions(false);
        } else {
          setShowDestinationSuggestions(false);
        }
        setSelectedIndex(-1);
        break;
      case 'Tab':
        if (isOrigin) {
          setShowOriginSuggestions(false);
        } else {
          setShowDestinationSuggestions(false);
        }
        setSelectedIndex(-1);
        break;
    }
  };

  // Handle using current location for origin
  const handleUseCurrentLocationForOrigin = () => {
    if (!currentLocation || !locationIsEnabled) {
      console.error('Current location is not available');
      return;
    }

    const coordinates = `${currentLocation.coords.lat},${currentLocation.coords.lon}`;
    // Use the translated text for current location
    const locationName = translations?.ControlPanel?.planner?.currentLocation || "Current Location";
    
    setOrigin(locationName);
    setSelectedOrigin({ name: locationName, coordinates });
    setIsOriginSelected(true);
    setShowOriginSuggestions(false);
    
    // Clear autocomplete data and reset state
    setOriginAutocompleteData([]);
    clearAutocompleteData();
    setSelectedIndex(-1);
    // Clear the search request stack
    setSearchRequestStack([]);
  };

  // Handle using current location for destination
  const handleUseCurrentLocationForDestination = () => {
    if (!currentLocation || !locationIsEnabled) {
      console.error('Current location is not available');
      return;
    }

    const coordinates = `${currentLocation.coords.lat},${currentLocation.coords.lon}`;
    // Use the translated text for current location
    const locationName = translations?.ControlPanel?.planner?.currentLocation || "Current Location";
    
    setDestination(locationName);
    setSelectedDestination({ name: locationName, coordinates });
    setIsDestinationSelected(true);
    setShowDestinationSuggestions(false);
    
    // Clear autocomplete data and reset state
    setDestinationAutocompleteData([]);
    clearAutocompleteData();
    setSelectedIndex(-1);
    // Clear the search request stack
    setSearchRequestStack([]);
  };

  // Toggle handlers for new filter options
  const toggleLessTransfers = () => {
    setLessTransfers(prev => !prev);
  };

  const toggleShortWalk = () => {
    setShortWalk(prev => !prev);
  };

  return (
    <div className="flex flex-col gap-4 p-4 w-full">
      <h2 className="text-lg font-bold">
        {translations?.ControlPanel?.planner?.title || "Plan Your Journey"}
      </h2>

      {/* Inputs and swap button */}
      <div className="flex flex-col gap-4 relative">
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
              
              // Close destination suggestions
              setShowDestinationSuggestions(false);
              
              // Show current location option immediately when typing
              if (e.target.value.length < 2 && locationIsEnabled) {
                setShowOriginSuggestions(true);
              }
            }}
            onKeyDown={(e) => handleKeyDown(e, originAutocompleteData, true)}
            onFocus={handleOriginFocus}
            className="location-input w-full p-2 border rounded"
          />
          {showOriginSuggestions && (
            <SuggestionContainer
              suggestions={originAutocompleteData}
              loading={loadingAutocomplete && searchRequestStack.length > 0 && searchRequestStack[searchRequestStack.length - 1].field === "origin"}
              selectedIndex={selectedIndex}
              onSuggestionClick={(suggestion: AutocompleteItem) =>
                handleSuggestionClick(suggestion, true)
              }
              onCurrentLocationClick={handleUseCurrentLocationForOrigin}
              showCurrentLocation={locationIsEnabled}
              currentLocationLabel={translations?.ControlPanel?.planner?.currentLocation || "Current Location"}
              currentLocationDescription={translations?.ControlPanel?.planner?.useCurrentLocation || "Use your current location"}
            />
          )}
        </div>

        <button
          onClick={swapLocations}
          className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 bg-gray-200 text-primary-blue p-3 rounded-full hover:bg-gray-300 transition-colors z-10 shadow-md"
        >
          <ArrowUpDown size={24} />
        </button>

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
              
              // Close origin suggestions
              setShowOriginSuggestions(false);
              
              // Show current location option immediately when typing
              if (e.target.value.length < 2 && locationIsEnabled) {
                setShowDestinationSuggestions(true);
              }
            }}
            onKeyDown={(e) => handleKeyDown(e, destinationAutocompleteData, false)}
            onFocus={handleDestinationFocus}
            className="location-input w-full p-2 border rounded"
          />
          {showDestinationSuggestions && (
            <SuggestionContainer
              suggestions={destinationAutocompleteData}
              loading={loadingAutocomplete && searchRequestStack.length > 0 && searchRequestStack[searchRequestStack.length - 1].field === "destination"}
              selectedIndex={selectedIndex}
              onSuggestionClick={(suggestion: AutocompleteItem) =>
                handleSuggestionClick(suggestion, false)
              }
              onCurrentLocationClick={handleUseCurrentLocationForDestination}
              showCurrentLocation={locationIsEnabled}
              currentLocationLabel={translations?.ControlPanel?.planner?.currentLocation || "Current Location"}
              currentLocationDescription={translations?.ControlPanel?.planner?.useCurrentLocation || "Use your current location"}
            />
          )}
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => {
            setShowDepartureFilter(!showDepartureFilter);
            if (!showDepartureFilter) {
              setLastClickedFilter('departure');
            }
          }}
          className="flex items-center justify-between bg-white text-primary-blue px-4 py-2 rounded-md border border-gray-200 transition-all hover:bg-gray-50"
          suppressHydrationWarning
        >
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>
              {isDepartureModified
                ? isArrival
                  ? (translations?.ControlPanel?.planner?.filters?.arrivalAt?.replace("{time}", formattedTime) || `Arrival at ${formattedTime}`)
                  : (translations?.ControlPanel?.planner?.filters?.departureAt?.replace("{time}", formattedTime) || `Departure at ${formattedTime}`)
                : isArrival
                  ? (translations?.ControlPanel?.planner?.filters?.arriveNow || "Arrive Now")
                  : (translations?.ControlPanel?.planner?.filters?.departureNow || "Depart Now")
              }
            </span>
          </div>
          {showDepartureFilter ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        <button
          onClick={() => {
            setShowFilters(!showFilters);
            if (!showFilters) {
              setLastClickedFilter('transport');
            }
          }}
          className="flex items-center justify-between bg-white text-primary-blue px-4 py-2 rounded-md border border-gray-200 transition-all hover:bg-gray-50"
        >
          <div className="flex items-center gap-2">
            <Filter size={18} />
            <span>{translations?.ControlPanel?.planner?.filters?.transportButton || "Transport"}</span>
          </div>
          {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {/* Render filters based on which was clicked last */}
      {lastClickedFilter === 'transport' ? (
        <>
          {showFilters && (
            <TransportFilter 
              activeFilters={Object.fromEntries(
                transportOptions.map(option => [
                  option.type,
                  transportModes.includes(option.mode)
                ])
              )}
              toggleFilter={toggleFilter}
              lessTransfers={lessTransfers}
              shortWalk={shortWalk}
              onToggleLessTransfers={toggleLessTransfers}
              onToggleShortWalk={toggleShortWalk}
            />
          )}
          {showDepartureFilter && (
            <DepartureFilter 
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              isArrival={isArrival}
              setIsArrival={setIsArrival}
            />
          )}
        </>
      ) : (
        <>
          {showDepartureFilter && (
            <DepartureFilter 
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              isArrival={isArrival}
              setIsArrival={setIsArrival}
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
              lessTransfers={lessTransfers}
              shortWalk={shortWalk}
              onToggleLessTransfers={toggleLessTransfers}
              onToggleShortWalk={toggleShortWalk}
            />
          )}
        </>
      )}

      <button 
        onClick={handleSeeRoutes}
        disabled={!selectedOrigin || !selectedDestination}
        className={`p-2 rounded w-full transition-colors ${
          !selectedOrigin || !selectedDestination 
            ? 'bg-primary-yellow/50 text-primary-blue/70 cursor-not-allowed' 
            : 'bg-primary-yellow text-primary-blue hover:bg-primary-yellow/80'
        }`}
      >
        {translations?.ControlPanel?.planner?.seeRoutes || "See Routes"}
      </button>
    </div>
  );
};

export default RoutePlanner;
  
