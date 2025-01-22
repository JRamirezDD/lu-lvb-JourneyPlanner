import httpClient from "../httpClient";
import {
    MonitorResponse,
    DirectionResponse,
    StopsResponse,
    StopTimesResponse,
} from "./dto/stopmonitorResponse";
import { StopMonitorParams, StopTimesParams } from "./dto/stopmonitorRequest";


import { mockMonitorResponse, mockDirectionResponse, mockStopsResponse, mockStopTimesResponse } from "./dto/__mock__/stopmonitorResponse.mock";
import { toMonitorResponse, toDirectionResponse, toStopsResponse, toStopTimesResponse } from "./mappers";

const useMock = process.env.USE_MOCK === "true";

export const fetchStopMonitor = async (params: StopMonitorParams): Promise<MonitorResponse> => {
    if (useMock) {
        return toMonitorResponse(mockMonitorResponse);
    }

    try {
        const response = await httpClient.get("/monitor", { params });
        return toMonitorResponse(response.data);
    } catch (error) {
        console.error("Error fetching stop monitor data:", error);
        throw new Error("Failed to fetch stop monitor data");
    }
};

export const fetchDirectionInfo = async (stopId: string): Promise<DirectionResponse> => {
    if (useMock) {
        return toDirectionResponse(mockDirectionResponse);
    }

    try {
        const response = await httpClient.post(`/directionInfo/${stopId}`);
        return toDirectionResponse(response.data);
    } catch (error) {
        console.error("Error fetching direction info:", error);
        throw new Error("Failed to fetch direction info");
    }
};

export const fetchStops = async (bb: string, order_by?: string, maxlen?: number): Promise<StopsResponse> => {
    if (useMock) {
        return toStopsResponse(mockStopsResponse);
    }

    try {
        const response = await httpClient.get("/stops", { params: { bb, order_by, maxlen } });
        return toStopsResponse(response.data);
    } catch (error) {
        console.error("Error fetching stops:", error);
        throw new Error("Failed to fetch stops");
    }
};

export const fetchStopTimes = async (params: StopTimesParams): Promise<StopTimesResponse> => {
    if (useMock) {
        return toStopTimesResponse(mockStopTimesResponse);
    }

    try {
        const response = await httpClient.post("/stopTimes", params);
        return toStopTimesResponse(response.data);
    } catch (error) {
        console.error("Error fetching stop times:", error);
        throw new Error("Failed to fetch stop times");
    }
};
