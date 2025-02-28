import httpClient from "../httpClient";
import { NearBySearchResponse } from "./dto/nearbysearchResponse";
import { NearBySearchParams } from "./dto/nearbysearchRequest";
import { toNearBySearchResponse } from "./mappers";
import { nearbysearchmockresponse } from "./dto/__mock__/nearbysearchResponse.mock";



const useMock = process.env.NEXT_PUBLIC_USE_MOCK === "true";
const api_endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT_NEARBYSEARCH;

export const searchAllNearby = async (params: NearBySearchParams): Promise<NearBySearchResponse> => {
    if (useMock) {
        return toNearBySearchResponse(nearbysearchmockresponse);
    }

    try {
        const response = await httpClient.get(api_endpoint + "/search", { params });
        return toNearBySearchResponse(response.data);
    } catch (error) {
        console.error("Error fetching nearbysearch data:", error);
        throw new Error("Failed to fetch nearbysearch data");
    }
};
