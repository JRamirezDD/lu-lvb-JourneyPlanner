import httpClient from "../httpClient";
import { MonitorResponse, DirectionResponse, StopsResponse, StopTimesResponse } from "./dto/stopmonitorResponse";
import { mockMonitorResponse, mockDirectionResponse, mockStopsResponse, mockStopTimesResponse } from "./dto/__mock__/stopmonitorResponse.mock";
import { StopMonitorParams, StopTimesParams } from "./dto/stopmonitorRequest";

const useMock = process.env.USE_MOCK === "true";

export const fetchStopMonitor = async (params: StopMonitorParams): Promise<MonitorResponse> => {
    if (useMock) {
        return mockMonitorResponse;
    }

    try {
        const response = await httpClient.get<MonitorResponse>("/monitor", { params });
        return response.data;
    } catch (error) {
        console.error("Error fetching stop monitor data:", error);
        throw new Error("Failed to fetch stop monitor data");
    }
};

export const fetchDirectionInfo = async (stopId: string): Promise<DirectionResponse> => {
    if (useMock) {
        return mockDirectionResponse;
    }

    try {
        const response = await httpClient.post<DirectionResponse>(`/directionInfo/${stopId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching direction info:", error);
        throw new Error("Failed to fetch direction info");
    }
};

export const fetchStops = async (bb: string, order_by?: string, maxlen?: number): Promise<StopsResponse> => {
    if (useMock) {
        return mockStopsResponse;
    }

    try {
        const response = await httpClient.get<StopsResponse>("/stops", { params: { bb, order_by, maxlen } });
        return response.data;
    } catch (error) {
        console.error("Error fetching stops:", error);
        throw new Error("Failed to fetch stops");
    }
};

export const fetchStopTimes = async (params: StopTimesParams): Promise<StopTimesResponse> => {
    if (useMock) {
        return mockStopTimesResponse;
    }

    try {
        const response = await httpClient.post<StopTimesResponse>("/stopTimes", params);
        return response.data;
    } catch (error) {
        console.error("Error fetching stop times:", error);
        throw new Error("Failed to fetch stop times");
    }
};