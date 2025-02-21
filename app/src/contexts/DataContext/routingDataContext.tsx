"use client";

import React, { createContext, useContext, useState } from "react";
import { IDataContext } from "@/contexts/DataContext/IDataContext"; // Your base interface (if needed)
import { useDataFetcher } from "@/hooks/useDataFetcher";
import { fetchOtpData } from "@/api/routingService/routingService";
import { OtpResponse } from "@/api/routingService/dto/otpResponse";
import { RequestParameters } from "@/api/routingService/dto/otpRequest";

export interface IOtpDataContext extends IDataContext<OtpResponse> {
    // Routing
    otpData: OtpResponse | null;
    fetchOtpData: (params: Partial<RequestParameters>) => Promise<void>;
    loadingOtp: boolean;
    errorOtp: string | null;
    selectedItineraryIndex: number | null;
    setSelectedItineraryIndex: (index: number) => void;
    clearState: () => void;
}

// Create the context with an undefined default value
const OtpDataContext = createContext<IOtpDataContext | undefined>(undefined);

// Provider Component for OTP Data
export const OtpDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const otpFetcher = useDataFetcher<OtpResponse>(fetchOtpData);
    const [selectedItineraryIndex, setSelectedItineraryIndex] = useState<number | null>(null);

    return (
        <OtpDataContext.Provider
            value={{
                // Routing
                otpData: otpFetcher.data,
                fetchOtpData: otpFetcher.fetchData,
                loadingOtp: otpFetcher.loading,
                errorOtp: otpFetcher.error,
                selectedItineraryIndex,
                setSelectedItineraryIndex,
                clearState: () => {
                    setSelectedItineraryIndex(null);
                },
            }}
        >
            {children}
        </OtpDataContext.Provider>
    );
};

// Hook for consuming the RoutingDataContext in your components
export const useOtpDataContext = () => {
    const context = useContext(OtpDataContext);
    if (!context) {
        throw new Error("useOtpDataContext must be used within an OtpDataProvider");
    }
    return context;
};
