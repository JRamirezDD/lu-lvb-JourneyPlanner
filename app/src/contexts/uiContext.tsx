"use client";

import React, { createContext, useContext, useState } from "react";
import { IContext } from "@/contexts/IContext";
import { ViewMode } from "@/types/ViewMode";

export interface IUIContext extends IContext {
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    previousViewMode: ViewMode;
    goToPreviousViewMode: () => void;
    navigationHistory: ViewMode[];
    clearState: () => void;
}

const UIContext = createContext<IUIContext | undefined>(undefined);

// Provider Component for the UIContext
export const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [viewMode, setViewModeState] = useState<ViewMode>("DEFAULT");
    const [previousViewMode, setPreviousViewMode] = useState<ViewMode>("DEFAULT");
    const [navigationHistory, setNavigationHistory] = useState<ViewMode[]>(["DEFAULT"]);


    // Function to update the view mode.
    const setViewMode = (mode: ViewMode) => {
        console.log("Setting view mode to", mode, "from", viewMode);
        
        // Special case for STATION view to avoid duplicates
        if (mode === "STATION" && viewMode === "STATION") {
            setViewModeState(mode);
            return;
        }
        
        setPreviousViewMode(viewMode);
        
        // Update navigation history
        setNavigationHistory(prev => {
            if (prev[prev.length - 1] !== mode) {
                return [...prev, mode];
            }
            return prev;
        });
        
        setViewModeState(mode);
    };

    // Function to go back to the previous view mode
    const goToPreviousViewMode = () => {
        const history = [...navigationHistory];
        
        // If we only have one item in history, stay there
        if (history.length <= 1) {
            console.log("No previous view to go back to");
            return;
        }
        
        history.pop();
        
        const previousView = history[history.length - 1];
        
        console.log("Going back to previous view mode:", previousView, "from", viewMode);
        
        setNavigationHistory(history);
        
        if (history.length > 1) {
            setPreviousViewMode(history[history.length - 2]);
        } else {
            setPreviousViewMode("DEFAULT");
        }

        setViewModeState(previousView);
    };

    const clearState = () => {
        setPreviousViewMode("DEFAULT");
        setViewModeState("DEFAULT");
        setNavigationHistory(["DEFAULT"]);
    };

    const value: IUIContext = {
        viewMode,
        setViewMode,
        previousViewMode,
        goToPreviousViewMode,
        navigationHistory,
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
