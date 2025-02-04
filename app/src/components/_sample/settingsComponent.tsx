"use client";

import React from "react";
import { useSettingsContext } from "@/contexts/settingsContext";
import { TransportMode } from "@/types/TransportMode";


const SettingsComponent = () => {
    const { transportModes, toggleTransportMode } = useSettingsContext();

    const handleToggle = (mode: TransportMode) => {
        toggleTransportMode(mode);
    };

    return (
        <div>
            <h2>Current Transport Modes:</h2>
            <p>{transportModes.join(", ")}</p>
            <button onClick={() => handleToggle("WALK")}>Toggle Bus</button>
            <button onClick={() => handleToggle("SUBURB")}>Toggle Metro</button>
            <button onClick={() => handleToggle("TRAM")}>Toggle Tram</button>
            <button onClick={() => handleToggle("WALK")}>Toggle Walking</button>
        </div>
    );
};

export default SettingsComponent;
