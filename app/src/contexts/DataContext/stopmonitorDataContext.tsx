import React, { createContext, useContext } from "react";
import { IDataContext } from "@/contexts/DataContext/IDataContext";
import { useDataFetcher } from "@/hooks/useDataFetcher";
import {
    fetchStopMonitor,
    fetchStops,
    fetchStopTimes,
    fetchDirectionInfo,
} from "@/api/stopmonitorService/stopmonitorService";
import {
    MonitorResponse,
    StopsResponse,
    StopTimesResponse,
    DirectionResponse,
} from "@/api/stopmonitorService/dto/stopmonitorResponse";
import { StopMonitorParams, StopTimesParams } from "@/api/stopmonitorService/dto/stopmonitorRequest";

export interface IStopmonitorDataContext extends IDataContext<StopsResponse> {
    // Stops
    stopsData: StopsResponse | null;
    fetchStops: (bb: string, order_by?: "Name" | "Priority", maxlen?: number) => Promise<void>;
    loadingStops: boolean;
    errorStops: string | null;

    // Stop Monitor
    stopMonitorData: MonitorResponse | null;
    fetchStopMonitor: (params: StopMonitorParams) => Promise<void>;
    loadingStopMonitor: boolean;
    errorStopMonitor: string | null;

    // Stop Times
    stopTimesData: StopTimesResponse | null;
    fetchStopTimes: (params: StopTimesParams) => Promise<void>;
    loadingStopTimes: boolean;
    errorStopTimes: string | null;

    // Direction Info
    directionData: DirectionResponse | null;
    fetchDirectionInfo: (stopId: string) => Promise<void>;
    loadingDirection: boolean;
    errorDirection: string | null;
}

const StopmonitorDataContext = createContext<IStopmonitorDataContext | undefined>(undefined);

export const StopmonitorDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const stopsFetcher = useDataFetcher<StopsResponse>(fetchStops);
    const stopMonitorFetcher = useDataFetcher<MonitorResponse>(fetchStopMonitor);
    const stopTimesFetcher = useDataFetcher<StopTimesResponse>(fetchStopTimes);
    const directionFetcher = useDataFetcher<DirectionResponse>(fetchDirectionInfo);

    return (
        <StopmonitorDataContext.Provider value={{
            // Stops
            stopsData: stopsFetcher.data,
            fetchStops: stopsFetcher.fetchData, // Alias for fetchStops
            loadingStops: stopsFetcher.loading,
            errorStops: stopsFetcher.error,

            // Stop Monitor
            stopMonitorData: stopMonitorFetcher.data,
            fetchStopMonitor: stopMonitorFetcher.fetchData,
            loadingStopMonitor: stopMonitorFetcher.loading,
            errorStopMonitor: stopMonitorFetcher.error,

            // Stop Times
            stopTimesData: stopTimesFetcher.data,
            fetchStopTimes: stopTimesFetcher.fetchData,
            loadingStopTimes: stopTimesFetcher.loading,
            errorStopTimes: stopTimesFetcher.error,

            // Direction Info
            directionData: directionFetcher.data,
            fetchDirectionInfo: directionFetcher.fetchData,
            loadingDirection: directionFetcher.loading,
            errorDirection: directionFetcher.error,

            clearState: () => {
                // Here you could implement a way to clear the state.
                // For example, if your useDataFetcher hook returned a setData function,
                // you could call setData(null). For now, we define it as a no-op.
            }
        }}
        >
            {children} {/* All components inside can access count & increment */}
        </StopmonitorDataContext.Provider>
    );
};

export const useStopmonitorDataContext = () => {
    const context = useContext(StopmonitorDataContext);
    if (!context) {
        throw new Error("useStopmonitorDataContext must be used within a StopmonitorDataProvider");
    }
    return context;
};
