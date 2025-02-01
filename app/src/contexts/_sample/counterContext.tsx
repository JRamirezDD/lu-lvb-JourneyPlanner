"use client";

import React, { createContext, useContext, useState } from "react";

// Define the shape of our CounterContext
interface CounterContextType {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

// Create the Context with an undefined default value
const CounterContext = createContext<CounterContextType | undefined>(undefined);

// Provider Component
export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [count, setCount] = useState<number>(1);

    // Methods for modifying the count
    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);
    const reset = () => setCount(1);

    return (
        <CounterContext.Provider value={{ count, increment, decrement, reset }}>
            {children}
        </CounterContext.Provider>
    );
};

// Hook to use CounterContext
export const useCounterContext = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error("useCounterContext must be used within a CounterProvider");
    }
    return context;
};
