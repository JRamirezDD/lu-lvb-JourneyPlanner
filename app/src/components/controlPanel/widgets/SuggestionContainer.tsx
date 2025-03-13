import { AutocompleteItem } from '@/api/autocompleteService/dto/autocompleteitemResponse';
import { MapPin } from 'lucide-react';
import React, { useMemo } from 'react';

interface SuggestionContainerProps {
  suggestions: AutocompleteItem[];
  loading: boolean;
  selectedIndex: number;
  onSuggestionClick: (suggestion: AutocompleteItem) => void;
  onCurrentLocationClick?: () => void;
  showCurrentLocation?: boolean;
  currentLocationLabel?: string;
  currentLocationDescription?: string;
}

const SuggestionContainer: React.FC<SuggestionContainerProps> = ({
  suggestions,
  loading,
  selectedIndex,
  onSuggestionClick,
  onCurrentLocationClick,
  showCurrentLocation = true,
  currentLocationLabel = "Current Location",
  currentLocationDescription = "Use your current location",
}) => {
  // Check if current location is already in the suggestions list
  const hasCurrentLocationInSuggestions = useMemo(() => {
    return suggestions.some(suggestion => 
      suggestion.name === currentLocationLabel || 
      suggestion.data === currentLocationLabel
    );
  }, [suggestions, currentLocationLabel]);

  // Only show the current location option if it's not already in the suggestions
  const shouldShowCurrentLocation = showCurrentLocation && 
                                   onCurrentLocationClick && 
                                   !hasCurrentLocationInSuggestions;

  return (
    <div className="suggestions-container absolute z-10 w-full bg-white border rounded-md shadow-lg mt-1">
      {loading ? (
        <div className="p-2 text-gray-600">Loading suggestions...</div>
      ) : (
        <>
          {/* Current Location Option */}
          {shouldShowCurrentLocation && (
            <div
              onClick={onCurrentLocationClick}
              className={`p-2 cursor-pointer ${
                selectedIndex === -2 ? 'bg-primary-yellow/10' : 'hover:bg-gray-100'
              } border-b`}
            >
              <div className="font-medium flex items-center gap-2">
                <MapPin size={16} className="text-primary-blue" />
                {currentLocationLabel}
              </div>
              <div className="text-sm text-gray-600 ml-6">
                {currentLocationDescription}
              </div>
            </div>
          )}

          {/* Address Suggestions */}
          {suggestions.length > 0 ? (
            suggestions.slice(0, 5).map((suggestion, index) => (
              <div
                key={suggestion.id}
                onClick={() => onSuggestionClick(suggestion)}
                className={`p-2 cursor-pointer ${
                  index === selectedIndex ? 'bg-primary-yellow/10' : 'hover:bg-gray-100'
                }`}
              >
                <div className="font-medium">{suggestion.name}</div>
                <div className="text-sm text-gray-600">
                    {suggestion.streetname && `${suggestion.streetname} `}
                    {suggestion.housenumber && `${suggestion.housenumber}, `}
                    {suggestion.stadt}
                </div>
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-600">No suggestions found</div>
          )}
        </>
      )}
    </div>
  );
};

export default SuggestionContainer;
