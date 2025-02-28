import httpClient from "../httpClient";
import { NearBySearchParams } from "./dto/stopmonitorRequest";



const useMock = process.env.NEXT_PUBLIC_USE_MOCK === "true";
const api_endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT_STOPMONITOR;

export const searchAllNearby = async (params: NearBySearchParams): Promise<Moniuto> => {
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
