"use client";

import React, { createContext, useContext } from "react";
import { IDataContext } from "@/contexts/DataContext/IDataContext"; // Your base interface (if needed)
import { useDataFetcher } from "@/hooks/useDataFetcher";
import { fetchOtpData } from "@/api/routingService/routingService";
import { OtpResponse } from "@/api/routingService/dto/otpResponse";
import { RequestParameters } from "@/api/routingService/dto/otpRequest";

// Define the shape of the OTP Data Context.
export interface IOtpDataContext extends IDataContext<OtpResponse> {
    // Routing
    otpData: OtpResponse | null;
    fetchOtpData: (params: Partial<RequestParameters>) => Promise<void>;
    loadingOtp: boolean;
    errorOtp: string | null;
    // Optionally, you could add a clearState function if needed.
}

// Create the context with an undefined default value
const OtpDataContext = createContext<IOtpDataContext | undefined>(undefined);

// Provider Component for OTP Data
export const OtpDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // useDataFetcher returns { data, loading, error, fetchData }
    const otpFetcher = useDataFetcher<OtpResponse>(fetchOtpData);

    return (
        <OtpDataContext.Provider
            value={{
                // Routing
                otpData: otpFetcher.data,
                fetchOtpData: otpFetcher.fetchData,
                loadingOtp: otpFetcher.loading,
                errorOtp: otpFetcher.error,

                clearState: () => {
                    // Here you could implement a way to clear the state.
                    // For example, if your useDataFetcher hook returned a setData function,
                    // you could call setData(null). For now, we define it as a no-op.
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
