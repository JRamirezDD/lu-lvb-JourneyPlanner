"use client";

import React, { useEffect } from "react";
import { useAutocompleteDataContext } from "@/contexts/DataContext/autocompleteDataContext";

const AutocompleteComponent = () => {
    const { autocompleteData, fetchAutocompleteData, loadingAutocomplete, errorAutocomplete } = useAutocompleteDataContext();

    useEffect(() => {
        // Trigger a search with a query when the component mounts
        fetchAutocompleteData({ search: "Witzgal", center: "51.3,12.6", format: "JSON", pointType: "P,S,W" });
    }, [fetchAutocompleteData]);

    if (loadingAutocomplete) return <p>Loading autocomplete data...</p>;
    if (errorAutocomplete) return <p>Error: {errorAutocomplete}</p>;

    return (
        <div>
            <h2>Autocomplete Results</h2>
            {autocompleteData ? (
                <ul>
                    {autocompleteData.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default AutocompleteComponent;
