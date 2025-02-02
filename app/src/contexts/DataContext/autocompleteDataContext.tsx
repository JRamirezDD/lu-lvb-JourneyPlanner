"use client";

import React, { createContext, useContext } from "react";
import { IDataContext } from "@/contexts/DataContext/IDataContext";
import { useDataFetcher } from "@/hooks/useDataFetcher";
import { fetchAutocompleteData } from "@/api/autocompleteService/autocompleteService";
import { AutocompleteResponse } from "@/api/autocompleteService/dto/autocompleteitemResponse";
import { SearchParams } from "@/api/autocompleteService/dto/searchparamsRequest";

export interface IAutocompleteDataContext extends IDataContext<AutocompleteResponse> {
    // Autocomplete
    autocompleteData: AutocompleteResponse | null;
    fetchAutocompleteData: (params: SearchParams) => Promise<void>;
    loadingAutocomplete: boolean;
    errorAutocomplete: string | null;

    clearState: () => void;
}

// Create the context with an initial undefined value
const AutocompleteDataContext = createContext<IAutocompleteDataContext | undefined>(undefined);

// Provider component for the AutocompleteDataContext
export const AutocompleteDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const autocompleteFetcher = useDataFetcher<AutocompleteResponse>(fetchAutocompleteData);

    return (
        <AutocompleteDataContext.Provider
            value={{
                // Autocomplete
                autocompleteData: autocompleteFetcher.data,
                fetchAutocompleteData: autocompleteFetcher.fetchData,
                loadingAutocomplete: autocompleteFetcher.loading,
                errorAutocomplete: autocompleteFetcher.error,

                clearState: () => {
                    // Here you could implement a way to clear the state.
                    // For example, if your useDataFetcher hook returned a setData function,
                    // you could call setData(null). For now, we define it as a no-op.
                },
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
