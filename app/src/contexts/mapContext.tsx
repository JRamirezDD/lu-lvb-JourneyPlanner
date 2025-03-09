"use client";

import React, { createContext, useContext, useState } from "react";
import { Coordinates } from "@/types/Coordinates";
import { IContext } from "./IContext";
import { Itinerary } from "@/types/Itinerary";
import { SearchItemJson } from "@/api/nearbysearchService/dto/nearbysearchResponse";

interface SelectedStop {
    stop_id: string;
    stop_name: string;
  }
  

export interface IMapContext extends IContext {
    // Map state
    currentPosition: Coordinates | null;
    visibleLayers: string[];

    setCurrentPosition: (coordinates: Coordinates) => void;
    toggleLayer: (layer: string, status: boolean) => void;

    
    // Pass objects from Control Panel -> Map
    selectedItinerary: Itinerary | null // Used to store the selected itinerary (selected from Control Panel)
    setSelectedItinerary: (itinerary: Itinerary | null) => void;

    // Pass objects from Map -> Control Panel
    selectedStop: SelectedStop | null; // Used to store the ID and name of the selected stop (selected from Stops layer)
    setSelectedStop: (stop: SelectedStop | null) => void;

    // Pass objects from Map -> Control Panel
    selectedNearbySearchItem: SearchItemJson | null; // Used to store the selected nearby search item (selected from Nearby Search layer)
    setSelectedNearbySearchItem: (item: SearchItemJson | null) => void;

    clearState: () => void;
}

const MapContext = createContext<IMapContext | undefined>(undefined);

// P - Add more comments for Marlene
// Provider Component for the MapContext
export const MapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Local state for the map.
    const [currentPosition, setCurrentPositionState] = useState<Coordinates | null>(null);
    const [selectedStop, setSelectedStopState] = useState<SelectedStop | null>(null);
    const [selectedNearbySearchItem, setSelectedNearbySearchItem] = useState<SearchItemJson | null>(null);
    const [visibleLayers, setVisibleLayers] = useState<string[]>([]);
    const [selectedItinerary, setSelectedItineraryState] = useState<Itinerary | null>(null);


    // Function to update the current position.
    const setCurrentPosition = (coordinates: Coordinates) => {
        setCurrentPositionState(coordinates);
    };

    // Function to update the selected stop.
    const setSelectedStop = (stop: SelectedStop | null) => {
        setSelectedStopState(stop);
    };

    // Function to update the selected itinerary.
    const setSelectedItinerary = (itinerary: Itinerary | null) => {
        setSelectedItineraryState(itinerary);
    };

    // Function to toggle the presence of a layer in visibleLayers.
    const toggleLayer = (layer: string, status: boolean) => {
        setVisibleLayers((prevLayers) =>
            status
                ? [...new Set([...prevLayers, layer])] // Ensure the layer is added
                : prevLayers.filter((l) => l !== layer) // Remove the layer if status is false
        );
    };    

    // Function to reset all map-related state to default values.
    const clearState = () => {
        setCurrentPositionState({ lat: 0, lon: 0 });
        setSelectedStopState(null);
        setVisibleLayers([]);
    };

    // Better implementation: put the values in a separate object for simplified modularity. 
    // P - Implement in all when there's time.
    const value: IMapContext = {
        currentPosition,
        selectedStop,
        visibleLayers,
        selectedItinerary,
        selectedNearbySearchItem,
        setCurrentPosition,
        setSelectedStop,
        toggleLayer,
        clearState,
        setSelectedItinerary,
        setSelectedNearbySearchItem
    };

    return <MapContext.Provider value={value}> {children} </MapContext.Provider>;
};

// Hook for consuming the MapContext in your components
export const useMapContext = () => {
    const context = useContext(MapContext);
    if (!context) {
        throw new Error("useMapContext must be used within a MapProvider");
    }
    return context;
};
