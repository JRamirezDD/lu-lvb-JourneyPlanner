import { useState, useEffect } from "react";
import { Search, ChevronLeft } from "lucide-react";
import { useAutocompleteDataContext } from "@/contexts/DataContext/autocompleteDataContext";
import { AutocompleteItem } from "@/api/autocompleteService/dto/autocompleteitemResponse";
import { ViewMode } from "@/types/ViewMode";
import SuggestionContainer from "./widgets/SuggestionContainer";
import { useSettingsContext } from "@/contexts/settingsContext";
import { useUIContext } from "@/contexts/uiContext";
import { useMapContext } from "@/contexts/mapContext";
import { useControLPanelContext } from "@/contexts/controlPanelContext";

interface SelectedStation {
  name: string;
  coordinates: string; // Format: "lat,lon"
  stopId?: string;
  item: AutocompleteItem;
}

const SearchStation = ({ setActiveView }: { setActiveView: (view: ViewMode) => void }) => {
  const { translations } = useSettingsContext();
  const { goToPreviousViewMode } = useUIContext();
  const { setSelectedNearbySearchItem, setSelectedStop } = useMapContext();
  const { setSelectedItem, setControlPanelIsExpanded } = useControLPanelContext();
  
  const { 
    autocompleteData, 
    fetchAutocompleteData, 
    loadingAutocomplete,
    errorAutocomplete,
    clearState: clearAutocompleteData 
  } = useAutocompleteDataContext();

  const [stationQuery, setStationQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [autocompleteResults, setAutocompleteResults] = useState<AutocompleteItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedStation, setSelectedStation] = useState<SelectedStation | null>(null);
  const [isStationSelected, setIsStationSelected] = useState(false);
  
  // Search request tracking
  const [searchRequestStack, setSearchRequestStack] = useState<{
    id: number;
    query: string;
  }[]>([]);
  const [lastRequestId, setLastRequestId] = useState(0);

  // Ensure suggestions are hidden on initial load
  useEffect(() => {
    setShowSuggestions(false);
  }, []);

  // Effect to trigger suggestion update based on the latest autocomplete data
  useEffect(() => {
    if (loadingAutocomplete) {
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
    
    // Log the autocomplete data for debugging
    console.log("Received autocomplete data:", autocompleteData);
    if (autocompleteData.length > 0) {
      console.log("First item:", autocompleteData[0]);
      console.log("First item type:", autocompleteData[0].ptype);
      console.log("First item tags:", autocompleteData[0].tags);
    }
    
    // Update the autocomplete results
    setAutocompleteResults(autocompleteData);
    setShowSuggestions(true);
    
    // Remove the processed request from the stack
    setSearchRequestStack(prev => prev.filter(req => req.id !== latestRequest.id));
    
  }, [autocompleteData, loadingAutocomplete, errorAutocomplete, searchRequestStack]);

  // Function to fetch station suggestions
  const fetchStationSuggestions = async (query: string) => {
    if (query.length < 2) return;
    
    try {
      // Create a new request ID and add it to the stack
      const requestId = lastRequestId + 1;
      setLastRequestId(requestId);
      
      setSearchRequestStack(prev => [
        ...prev, 
        { id: requestId, query }
      ]);
      
      // Clear previous autocomplete data
      await clearAutocompleteData();
      await fetchAutocompleteData({ 
        search: query,
        format: "JSON",
        pointType: "S" // Only search for stations
      });
    } catch (error) {
      console.error('Error fetching station suggestions:', error);
    }
  };

  // Effect to fetch suggestions on input change
  useEffect(() => {
    if (isStationSelected) return;
    
    if (stationQuery.length >= 2) {
      fetchStationSuggestions(stationQuery);
    } else {
      // Hide suggestions if input is too short
      setAutocompleteResults([]);
      setShowSuggestions(false);
    }
  }, [stationQuery]);

  // Handle input focus
  const handleInputFocus = () => {
    if (stationQuery.length >= 2 && !isStationSelected) {
      fetchStationSuggestions(stationQuery);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: AutocompleteItem) => {
    if (suggestion instanceof AutocompleteItem) {
      const fullAddress = `${suggestion.data}`;
      const coordinates = `${suggestion.lat},${suggestion.lon}`;
      
      // Log the suggestion for debugging
      console.log("Selected suggestion:", suggestion);
      console.log("Suggestion type:", suggestion.ptype);
      console.log("Suggestion tags:", suggestion.tags);
      
      // Extract the stop_id from the TagItem if available
      let stopId = suggestion.id;
      
      // Check if this is a station (ptype === 'S') and has tags
      if (suggestion.ptype === 'S' && suggestion.tags) {
        stopId = suggestion.tags.stop_id;
        console.log("Found stop_id in TagItem:", stopId);
      } else {
        console.log("Using suggestion.id as stopId:", stopId);
      }
      
      setStationQuery(fullAddress);
      setSelectedStation({ 
        name: fullAddress, 
        coordinates,
        stopId,
        item: suggestion
      });
      setIsStationSelected(true);
      setShowSuggestions(false);
    }
    
    // Clear autocomplete data and reset state
    setAutocompleteResults([]);
    clearAutocompleteData();
    setSelectedIndex(-1);
    
    // Clear the search request stack
    setSearchRequestStack([]);
  
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        e.stopPropagation();
        setSelectedIndex(prev => {
          if (prev < autocompleteResults.length - 1) return prev + 1;
          return prev;
        });
        break;
      case 'ArrowUp':
        e.preventDefault();
        e.stopPropagation();
        setSelectedIndex(prev => {
          if (prev > 0) return prev - 1;
          return 0;
        });
        break;
      case 'Enter':
        e.preventDefault();
        e.stopPropagation();
        
        if (showSuggestions && selectedIndex >= 0 && autocompleteResults[selectedIndex]) {
          handleSuggestionClick(autocompleteResults[selectedIndex]);
        } else if (selectedStation) {
          handleSearchStation();
        }
        break;
      case 'Escape':
        e.preventDefault();
        e.stopPropagation();
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
      case 'Tab':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  // Click-outside handler for suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.suggestions-container') && !target.closest('.station-input')) {
        setShowSuggestions(false);
        // Clear the search request stack when clicking outside
        setSearchRequestStack([]);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Handle search station button click
  const handleSearchStation = () => {
    if (!selectedStation || !selectedStation.stopId) {
      console.error('No station selected or no stopId available');
      return;
    }

    console.log("Selected station:", selectedStation);
    console.log("Using stopId:", selectedStation.stopId);

    // Clear any existing map selection
    setSelectedNearbySearchItem(null);

    // Set the selected stop in the MapContext
    setSelectedStation(selectedStation);
    setSelectedStop({
      stop_id: selectedStation.stopId,
      stop_name: selectedStation.name
    });
    setSelectedItem(selectedStation.item);

    setActiveView("STATION");

    // Hide ControlPanel
    setControlPanelIsExpanded(false);
  
    // wait 2 secs
    setTimeout(() => {
      setControlPanelIsExpanded(true);
    }, 1000);

  };

  // Handle back button click
  const handleBackClick = () => {
    // Clear any existing selections
    setSelectedNearbySearchItem(null);
    setSelectedItem(null);
    
    // Navigate back
    goToPreviousViewMode();
  };

  return (
    <div className="flex flex-col gap-4 p-4 w-full">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <button 
            onClick={handleBackClick}
            className="p-2 hover:bg-primary-yellow/10 rounded-full transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-lg font-bold">
            {translations?.ControlPanel?.search?.title }
          </h2>
        </div>
      </div>

      {/* Station search input */}
      <div className="relative">
        <input
          type="text"
          placeholder={translations?.ControlPanel?.search?.placeholder }
          value={stationQuery}
          onChange={(e) => {
            setStationQuery(e.target.value);
            setIsStationSelected(false);
            setSelectedStation(null);
            setSelectedIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          onFocus={handleInputFocus}
          className="station-input w-full p-2 border rounded text-[16px] focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
          />
        {showSuggestions && (
          <SuggestionContainer
            suggestions={autocompleteResults}
            loading={loadingAutocomplete && searchRequestStack.length > 0}
            selectedIndex={selectedIndex}
            onSuggestionClick={handleSuggestionClick}
            showCurrentLocation={false}
          />
        )}
      </div>

      <button 
        onClick={handleSearchStation}
        disabled={!selectedStation}
        className={`p-2 rounded w-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue flex items-center justify-center gap-2 ${
          !selectedStation 
            ? 'bg-primary-yellow/50 text-primary-blue/70 cursor-not-allowed' 
            : 'bg-primary-yellow text-primary-blue hover:bg-primary-yellow/80'
        }`}
      >
        <Search size={18} />
        <span>{translations?.ControlPanel?.search?.title}</span>
      </button>
    </div>
  );
};

export default SearchStation;
