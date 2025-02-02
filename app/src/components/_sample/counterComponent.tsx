"use client";

import React from "react";
import { useCounterContext } from "@/contexts/_sample/counterContext";

const CounterComponent = () => {
    const { count, increment, decrement, reset } = useCounterContext();

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>➕ Increment</button>
            <button onClick={decrement}>➖ Decrement</button>
            <button onClick={reset}>🔄 Reset</button>
        </div>
    );
};

export default CounterComponent;
