import httpClient from "../httpClient";
import { NearBySearchResponse } from "./dto/nearbysearchResponse";

import { toNearBySearchResponse } from "./mappers";
import { nearbysearchmockresponse } from "./dto/__mock__/nearbysearchResponse.mock";
import { NearBySearchParams, NearBySearchParamsWithBoundingBox } from "./dto/nearbysearchRequest";
import convertBoundingBoxToCenterAndRadius from "@/utils/convertBoundingBoxToCenterAndRadius";


const useMock = process.env.NEXT_PUBLIC_USE_MOCK === "true";
const api_endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT_NEARBYSEARCH;

export const searchAllNearby = async (
    params: NearBySearchParams | NearBySearchParamsWithBoundingBox
): Promise<NearBySearchResponse> => {

    if (useMock) {
        return toNearBySearchResponse(nearbysearchmockresponse);
    }

    
    if ('bb' in params) {
        // Convert bounding box to center and radius
        const { center, radius } = convertBoundingBoxToCenterAndRadius(params.bb);
        
        // Convert to NearBySearchParams
        params = {
            center,
            radius,
            format: params.format,
            types: params.types,
            vehicletypes: params.vehicletypes,
            sources: params.sources,
            provider: params.provider,
            number: params.number
        };
    }



    try {
        const response = await httpClient.get(api_endpoint + "/search", { params });
        return toNearBySearchResponse(response.data);
    } catch (error) {
        console.error("Error fetching nearbysearch data:", error);
        throw new Error("Failed to fetch nearbysearch data");
    }
};


