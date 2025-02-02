import React from "react";
import { AutocompleteDataProvider } from "@/contexts/DataContext/autocompleteDataContext";
import AutocompleteComponent from "@/components/_sample/autocompleteComponent";

const CounterView = () => {
    return (
        <AutocompleteDataProvider>
            <AutocompleteComponent />
        </AutocompleteDataProvider>
    );
};

export default CounterView;
