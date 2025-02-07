import { generateStaticParams } from "../../../generateStaticParams";
export { generateStaticParams };

import React from "react";
import { CounterProvider } from "@/contexts/_sample/counterContext";
import CounterComponent from "@/components/_sample/counterComponent";

const CounterView = () => {
    return (
        <CounterProvider>
            <CounterComponent />
        </CounterProvider>
    );
};

export default CounterView;
