"use client";

import { Location } from "@/types/Location";
import React, { createContext, useState } from "react";

export interface ILocationContext {
    currentLocation: Location | null;
    updateLocation: (coords: Location) => void;
    locationIsEnabled: boolean;
    setIsEnabled(value: boolean): void;
    error: string | null;
    setError: (error: string | null) => void;
}

export const LocationContext = createContext<ILocationContext | undefined>(undefined);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    

    const updateLocation = (coords: Location) => {
      setCurrentLocation(coords);
    };

    return (
      <LocationContext.Provider value={{ currentLocation, updateLocation, locationIsEnabled: isEnabled, setIsEnabled, error, setError }}>
        {children}
      </LocationContext.Provider>
    );
};

export const useLocationContext = () => {
    const context = React.useContext(LocationContext);
    if (!context) {
        throw new Error("useLocationContext must be used within a LocationProvider");
    }
    return context;
};
