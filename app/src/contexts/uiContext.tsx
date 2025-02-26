"use client";

import React, { createContext, useContext, useState } from "react";
import { IContext } from "@/contexts/IContext";
import { ViewMode } from "@/types/ViewMode";

export interface IUIContext extends IContext {
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;

    clearState: () => void;
}

const UIContext = createContext<IUIContext | undefined>(undefined);

// Provider Component for the UIContext
export const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Local state for UI
    const [viewMode, setViewModeState] = useState<ViewMode>("DEFAULT");

    // Function to update the view mode.
    const setViewMode = (mode: ViewMode) => {
        console.log("Setting view mode to", mode);
        setViewModeState(mode);
    };

    // clearState resets viewMode to its default value.
    const clearState = () => {
        setViewModeState("DEFAULT");
    };

    const value: IUIContext = {
        viewMode,
        setViewMode,
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
