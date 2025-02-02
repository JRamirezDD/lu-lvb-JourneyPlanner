import React from "react";
import { SettingsProvider } from "@/contexts/settingsContext";
import SettingsComponent from "@/components/_sample/settingsComponent";

const CounterView = () => {
    return (
        <SettingsProvider>
            <SettingsComponent />
            <SettingsComponent />
        </SettingsProvider>
    );
};

export default CounterView;
