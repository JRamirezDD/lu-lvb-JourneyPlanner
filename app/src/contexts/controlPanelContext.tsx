"use client";

import React, { createContext, useContext, useState } from "react";
import { IContext } from "./IContext";
import { AutocompleteItem } from "@/api/autocompleteService/dto/autocompleteitemResponse";

export interface IControlPanelContext extends IContext {

    // Control Panel -> Map
    selectedItem: AutocompleteItem | null;
    setSelectedItem: (stop: AutocompleteItem | null) => void;

    controlPanelIsExpanded: boolean;
    setControlPanelIsExpanded: (expanded: boolean) => void;


    selectedOrigin: AutocompleteItem | null;
    setSelectedOrigin: (origin: AutocompleteItem | null) => void;
    selectedDestination: AutocompleteItem | null;
    setSelectedDestination: (destination: AutocompleteItem | null) => void;

}

const ControlPanelContext = createContext<IControlPanelContext | undefined>(undefined);

// P - Add more comments for Marlene
// Provider Component for the MapContext
export const ControlPanelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Local state for the map.
    const [selectedItem, setSelectedItemState] = useState<AutocompleteItem | null>(null);

    // Control Panel state
    const [controlPanelIsExpanded, setControlPanelIsExpanded] = useState<boolean>(false);


    // Function to update the selected stop.
    const setSelectedItem = (stop: AutocompleteItem | null) => {
        setSelectedItemState(stop);
    };

    const [selectedOrigin, setSelectedOriginState] = useState<AutocompleteItem | null>(null);

    const setSelectedOrigin = (origin: AutocompleteItem | null) => {
        setSelectedOriginState(origin);
    };

    const [selectedDestination, setSelectedDestinationState] = useState<AutocompleteItem | null>(null);

    const setSelectedDestination = (destination: AutocompleteItem | null) => {
        setSelectedDestinationState(destination);
    };

    const clearState = () => {
        setSelectedItemState(null);
    };


    // Better implementation: put the values in a separate object for simplified modularity. 
    // P - Implement in all when there's time.
    const value: IControlPanelContext = {
        selectedItem,
        setSelectedItem,
        controlPanelIsExpanded,
        setControlPanelIsExpanded,
        selectedOrigin,
        setSelectedOrigin,
        selectedDestination,
        setSelectedDestination,
        clearState
    };

    return <ControlPanelContext.Provider value={value}> {children} </ControlPanelContext.Provider>;
};

// Hook for consuming the MapContext in your components
export const useControLPanelContext = () => {
    const context = useContext(ControlPanelContext);
    if (!context) {
        throw new Error("useMapContext must be used within a MapProvider");
    }
    return context;
};
