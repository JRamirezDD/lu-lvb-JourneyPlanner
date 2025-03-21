"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { TransportMode } from "@/types/TransportMode";
import { IContext } from "./IContext";

export interface ISettingsContext extends IContext {
    language: "en" | "de";
    setLanguage: (lang: "en" | "de") => void;
    translations: Record<string, any>;
    transportModes: TransportMode[];
    setTransportModes: (modes: TransportMode[]) => void;
    avoidWalking: boolean;
    setAvoidWalking: (avoid: boolean) => void;
    wheelchairAccessible: boolean;
    setWheelchairAccessible: (wheelchair: boolean) => void;

    toggleAvoidWalking: () => void;
    toggleWheelchairAccessible: () => void;
    toggleTransportMode: (mode: TransportMode) => void;
    clearState: () => void;
}

const SettingsContext = createContext<ISettingsContext | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode; initialLanguage: "en" | "de" }> = ({ children, initialLanguage }) => {
    const [language, setLanguageState] = useState<"en" | "de">(initialLanguage);
    const [translations, setTranslations] = useState<Record<string, any>>({});

    const [transportModes, setTransportModesState] = useState<TransportMode[]>(["BUS", "TRAM", "SUBURB", "TRAIN"]);
    const [avoidWalking, setAvoidWalking] = useState<boolean>(false);
    const [wheelchairAccessible, setWheelchairAccessible] = useState<boolean>(false);

    useEffect(() => {
        async function loadTranslations() {
            try {
                const response = await import(`@/intl/${language}.json`);
                setTranslations(response.default);
            } catch (error) {
                console.error("Failed to load translations:", error);
                setTranslations({});
            }
        }
        loadTranslations();
    }, [language]);

    const setLanguage = (lang: "en" | "de") => setLanguageState(lang);
    const setTransportModes = (modes: TransportMode[]) => setTransportModesState(modes);
    const toggleAvoidWalking = () => setAvoidWalking((prev) => !prev);
    const toggleWheelchairAccessible = () => setWheelchairAccessible((prev) => !prev);
    const toggleTransportMode = (mode: TransportMode) => {
        setTransportModesState((prevModes) => {
            const newModes = prevModes.includes(mode) 
                ? prevModes.filter((m) => m !== mode) 
                : [...prevModes, mode];
            
            console.log('Transport Modes Updated:', {
                mode,
                action: prevModes.includes(mode) ? 'removed' : 'added',
                previousModes: prevModes,
                newModes: newModes
            });
            
            return newModes;
        });
    };

    const clearState = () => {
        setLanguageState("en");
        setTransportModesState(["BUS", "TRAM", "SUBURB", "TRAIN"]);
        setAvoidWalking(false);
        setWheelchairAccessible(false);
    };

    return (
        <SettingsContext.Provider
            value={{
                language,
                translations,
                transportModes,
                avoidWalking,
                wheelchairAccessible,
                setLanguage,
                setTransportModes,
                toggleAvoidWalking,
                toggleWheelchairAccessible,
                toggleTransportMode,
                setAvoidWalking,
                setWheelchairAccessible,
                clearState,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettingsContext = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error("useSettingsContext must be used within a SettingsProvider");
    }
    return context;
};
