import { AutocompleteItem } from '@/api/autocompleteService/dto/autocompleteitemResponse';
import React from 'react';

interface SuggestionContainerProps {
  suggestions: AutocompleteItem[];
  loading: boolean;
  selectedIndex: number;
  onSuggestionClick: (suggestion: AutocompleteItem) => void;
}

const SuggestionContainer: React.FC<SuggestionContainerProps> = ({
  suggestions,
  loading,
  selectedIndex,
  onSuggestionClick,
}) => {
  return (
    <div className="suggestions-container absolute z-10 w-full bg-white border rounded-md shadow-lg mt-1">
      {loading ? (
        <div className="p-2 text-gray-600">Loading suggestions...</div>
      ) : suggestions.length > 0 ? (
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
    </div>
  );
};

export default SuggestionContainer;
