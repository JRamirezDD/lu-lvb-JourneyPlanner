"use client";

import React, { createContext, useContext } from "react";
import { IDataContext } from "@/contexts/DataContext/IDataContext";
import { useDataFetcher } from "@/hooks/useDataFetcher";
import { fetchAutocompleteData } from "@/api/autocompleteService/autocompleteService";
import { AutocompleteItem } from "@/api/autocompleteService/dto/autocompleteitemResponse";
import { SearchParams } from "@/api/autocompleteService/dto/searchparamsRequest";

export interface IAutocompleteDataContext extends IDataContext<AutocompleteItem[]> {
    // Autocomplete
    autocompleteData: AutocompleteItem[] | null;
    fetchAutocompleteData: (params: SearchParams) => Promise<void>;
    loadingAutocomplete: boolean;
    errorAutocomplete: string | null;

    clearState: () => void;
}

// Create the context with an initial undefined value
const AutocompleteDataContext = createContext<IAutocompleteDataContext | undefined>(undefined);

// Provider component for the AutocompleteDataContext
export const AutocompleteDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const autocompleteFetcher = useDataFetcher<AutocompleteItem[]>(fetchAutocompleteData);
    
    // Create a function to clear the autocomplete data
    const clearState = () => {
        // Access the internal state setter from the fetcher
        if (autocompleteFetcher.data) {
            // We can't directly access the setter, so we'll fetch with an empty query
            // which will effectively clear the data
            autocompleteFetcher.fetchData({ 
                search: "", 
                format: "JSON",
                pointType: "P,S,W,N" 
            }).catch(err => console.error("Error clearing autocomplete data:", err));
        }
    };

    return (
        <AutocompleteDataContext.Provider
            value={{
                // Autocomplete
                autocompleteData: autocompleteFetcher.data,
                fetchAutocompleteData: autocompleteFetcher.fetchData,
                loadingAutocomplete: autocompleteFetcher.loading,
                errorAutocomplete: autocompleteFetcher.error,
                clearState
            }}
        >
            {children}
        </AutocompleteDataContext.Provider>
    );
};

// Hook for consuming the AutocompleteDataContext in your components
export const useAutocompleteDataContext = () => {
    const context = useContext(AutocompleteDataContext);
    if (!context) {
        throw new Error("useAutocompleteDataContext must be used within an AutocompleteDataProvider");
    }
    return context;
};
