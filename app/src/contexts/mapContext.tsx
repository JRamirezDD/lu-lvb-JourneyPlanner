"use client";

import React, { createContext, useContext, useState } from "react";
import { IContext } from "./IContext";
import { Coordinates } from "@/types/Coordinates";


export interface IMapContext extends IContext {
    currentPosition: Coordinates;
    selectedObject: string | null;
    zoomLevel: number;
    visibleLayers: string[];
    setCurrentPosition: (lat: number, lon: number) => void;
    setZoomLevel: (zoom: number) => void;
    setSelectedObject: (id: string | null) => void;
    toggleLayer: (layer: string) => void;

    clearState: () => void;
}

const MapContext = createContext<IMapContext | undefined>(undefined);

// P - Add more comments for Marlene
// Provider Component for the MapContext
export const MapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Local state for the map.
    const [currentPosition, setCurrentPositionState] = useState<Coordinates>({ lat: 0, lon: 0 });
    const [selectedObject, setSelectedObjectState] = useState<string | null>(null);
    const [zoomLevel, setZoomLevelState] = useState<number>(10); // default zoom level (adjust as needed)
    const [visibleLayers, setVisibleLayers] = useState<string[]>([]);

    // Function to update the current position.
    const setCurrentPosition = (lat: number, lon: number) => {
        setCurrentPositionState({ lat, lon });
    };

    // Function to update the zoom level.
    const setZoomLevel = (zoom: number) => {
        setZoomLevelState(zoom);
    };

    // Function to update the selected object.
    const setSelectedObject = (id: string | null) => {
        setSelectedObjectState(id);
    };

    // Function to toggle the presence of a layer in visibleLayers.
    const toggleLayer = (layer: string) => {
        setVisibleLayers((prevLayers) =>
            prevLayers.includes(layer)
                ? prevLayers.filter((l) => l !== layer)
                : [...prevLayers, layer]
        );
    };

    // Function to reset all map-related state to default values.
    const clearState = () => {
        setCurrentPositionState({ lat: 0, lon: 0 });
        setSelectedObjectState(null);
        setZoomLevelState(10);
        setVisibleLayers([]);
    };

    // Better implementation: put the values in a separate object for simplified modularity. 
    // P - Implement in all when there's time.
    const value: IMapContext = {
        currentPosition,
        selectedObject,
        zoomLevel,
        visibleLayers,
        setCurrentPosition,
        setZoomLevel,
        setSelectedObject,
        toggleLayer,
        clearState,
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
