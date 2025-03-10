"use client";

import React, { createContext, useContext, useState } from "react";
import { IContext } from "@/contexts/IContext";
import { ViewMode } from "@/types/ViewMode";

export interface IUIContext extends IContext {
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    previousViewMode: ViewMode;
    goToPreviousViewMode: () => void;

    clearState: () => void;
}

const UIContext = createContext<IUIContext | undefined>(undefined);

// Provider Component for the UIContext
export const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Local state for UI
    const [viewMode, setViewModeState] = useState<ViewMode>("DEFAULT");
    const [previousViewMode, setPreviousViewMode] = useState<ViewMode>("DEFAULT");

    // Function to update the view mode.
    const setViewMode = (mode: ViewMode) => {
        console.log("Setting view mode to", mode, "from", viewMode);
        // Only update the previous view mode if we're changing to a different mode
        if (viewMode !== mode) {
            setPreviousViewMode(viewMode); // Store current view mode as previous
        }
        setViewModeState(mode);
    };

    // Function to go back to the previous view mode
    const goToPreviousViewMode = () => {
        console.log("Going back to previous view mode:", previousViewMode, "from current view mode:", viewMode);
        
        // If we're in STATION mode and the previous mode is also STATION (or the same as current),
        // go back to DEFAULT mode instead
        if (viewMode === "STATION" && previousViewMode === "STATION") {
            console.log("Previous view mode is same as current, going to DEFAULT instead");
            setViewModeState("DEFAULT");
        } else {
            setViewModeState(previousViewMode);
        }
        // Don't update previousViewMode here to avoid circular references
    };

    // clearState resets viewMode to its default value.
    const clearState = () => {
        setPreviousViewMode("DEFAULT");
        setViewModeState("DEFAULT");
    };

    const value: IUIContext = {
        viewMode,
        setViewMode,
        previousViewMode,
        goToPreviousViewMode,
        clearState,
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

// Hook for consuming the UIContext in your components
export const useUIContext = () => {
    const context = useContext(UIContext);
    if (!context) {
        throw new Error("useUIContext must be used within a UIProvider");
    }
    return context;
};
