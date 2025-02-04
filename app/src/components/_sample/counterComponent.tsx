"use client";

import React from "react";
import { useCounterContext } from "@/contexts/_sample/counterContext";
import { useSettingsContext } from "@/contexts/settingsContext";

const CounterComponent = () => {
    const { count, increment, decrement, reset } = useCounterContext();
    const { language } = useSettingsContext();

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>➕ Increment</button>
            <button onClick={decrement}>➖ Decrement</button>
            <button onClick={reset}>🔄 Reset</button>
            <p>Language: {language}</p>
        </div>
    );
};

export default CounterComponent;
