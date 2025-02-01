"use client";

import React from "react";
import { useSettingsContext } from "@/contexts/settingsContext";
import { TransportMode } from "@/types/TransportMode";


const SettingsDisplay = () => {
    const { transportModes, toggleTransportMode } = useSettingsContext();

    const handleToggle = (mode: TransportMode) => {
        toggleTransportMode(mode);
    };

    return (
        <div>
            <h2>Current Transport Modes:</h2>
            <p>{transportModes.join(", ")}</p>
            <button onClick={() => handleToggle("Bus")}>Toggle Bus</button>
            <button onClick={() => handleToggle("Metro")}>Toggle Metro</button>
            <button onClick={() => handleToggle("Tram")}>Toggle Tram</button>
            <button onClick={() => handleToggle("Walking")}>Toggle Walking</button>
        </div>
    );
};

export default SettingsDisplay;
