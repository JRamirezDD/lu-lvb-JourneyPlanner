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
const api_endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT_STOPMONITOR;

export const fetchStopMonitor = async (params: StopMonitorParams): Promise<MonitorResponse> => {
    if (useMock) {
        return toMonitorResponse(mockMonitorResponse);
    }

    try {
        const response = await httpClient.get(api_endpoint + "/monitor", { params });
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
        const response = await httpClient.post(api_endpoint + `/directionInfo/${stopId}`);
        return toDirectionResponse(response.data);
    } catch (error) {
        console.error("Error fetching direction info:", error);
        throw new Error("Failed to fetch direction info");
    }
};

/**
 * bb = boundingBox describing where stations are searched. 
 * order_by Default "Priority". Orders by station name alphabetically ("Name") or station priority ("Priority")
 * Number of station items returned if not used there is no limit
*/
export const fetchStops = async (bb: string, order_by?: "Name" | "Priority", maxlen?: number): Promise<StopsResponse> => {
    if (useMock) {
        return toStopsResponse(mockStopsResponse);
    }

    try {
        const response = await httpClient.get(api_endpoint + "/stops", { params: { bb, order_by, maxlen } });
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
        const response = await httpClient.post(api_endpoint + "/stopTimes", params);
        return toStopTimesResponse(response.data);
    } catch (error) {
        console.error("Error fetching stop times:", error);
        throw new Error("Failed to fetch stop times");
    }
};
