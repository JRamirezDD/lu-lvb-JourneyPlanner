"use client";

import React, { createContext, useContext, useState } from "react";
import { IContext } from "./IContext";
import { TransportMode } from "@/types/TransportMode";

export interface ISettingsContext extends IContext {
    language: "en" | "de";
    transportModes: TransportMode[];
    avoidWalking: boolean;
    wheelchairAccessible: boolean;

    setLanguage: (lang: "en" | "de") => void;
    setTransportModes: (modes: TransportMode[]) => void;
    toggleAvoidWalking: () => void;
    toggleWheelchairAccessible: () => void;
    toggleTransportMode: (mode: TransportMode) => void;

    clearState: () => void;
}

const SettingsContext = createContext<ISettingsContext | undefined>(undefined);

// Provider Component for the SettingsContext
export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Local state for settings
    const [language, setLanguageState] = useState<"en" | "de">("en");
    const [transportModes, setTransportModesState] = useState<TransportMode[]>([
        "Bus",
        "Metro",
        "Tram",
        "Walking",
    ]);
    const [avoidWalking, setAvoidWalking] = useState<boolean>(false);
    const [wheelchairAccessible, setWheelchairAccessible] = useState<boolean>(false);

    // Implement functions to update settings
    const setLanguage = (lang: "en" | "de") => setLanguageState(lang);
    const setTransportModes = (modes: TransportMode[]) => setTransportModesState(modes);
    const toggleAvoidWalking = () => setAvoidWalking((prev) => !prev);
    const toggleWheelchairAccessible = () => setWheelchairAccessible((prev) => !prev);

    // If the provided mode exists in the transportModes array, remove it.
    // Otherwise, add it.
    const toggleTransportMode = (mode: TransportMode) => {
        setTransportModesState((prevModes) =>
            prevModes.includes(mode)
                ? prevModes.filter((m) => m !== mode)
                : [...prevModes, mode]
        );
    };

    const clearState = () => {
        setLanguageState("en");
        setTransportModesState(["Bus", "Metro", "Tram", "Walking"]);
        setAvoidWalking(false);
        setWheelchairAccessible(false);
    };

    return (
        <SettingsContext.Provider
            value={{
                language,
                transportModes,
                avoidWalking,
                wheelchairAccessible,
                setLanguage,
                setTransportModes,
                toggleAvoidWalking,
                toggleWheelchairAccessible,
                toggleTransportMode,
                clearState,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

// Hook for consuming the SettingsContext in your components
export const useSettingsContext = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error("useSettingsContext must be used within a SettingsProvider");
    }
    return context;
};
