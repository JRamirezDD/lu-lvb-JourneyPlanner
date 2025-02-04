import React from "react";
import { CounterProvider } from "@/contexts/_sample/counterContext";
import CounterComponent from "@/components/_sample/counterComponent";
import { SettingsProvider } from "@/contexts/settingsContext";

const CounterView = () => {
    return (
        <SettingsProvider>
            <CounterProvider>
                <CounterComponent />
                <CounterComponent />
                <CounterComponent />
                <CounterComponent />
            </CounterProvider>
        </SettingsProvider>
    );
};

export default CounterView;
