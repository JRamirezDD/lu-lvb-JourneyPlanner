import { generateStaticParams } from "../../../generateStaticParams";
export { generateStaticParams };

import React from "react";
import { SettingsProvider } from "@/contexts/settingsContext";
import SettingsComponent from "@/components/_sample/settingsComponent";

const CounterView = () => {
    return (
            <>
            <SettingsComponent />
            <SettingsComponent />
            </>
    );
};

export default CounterView;
