import httpClient from "../httpClient";
import { SearchParams } from "./dto/searchparamsRequest";
import { mockAutocompleteResponse } from "./dto/__mock__/autocompleteResponse.mock";
import { toAutocompleteItem } from "./mappers";
import { AutocompleteItem } from "./dto/autocompleteitemResponse";

const useMock = process.env.USE_MOCK === "true";
const api_endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT_AUTOCOMPLETE;

export const fetchAutocompleteData = async (params: SearchParams): Promise<AutocompleteItem[]> => {
    if (useMock) {
        return mockAutocompleteResponse.map(toAutocompleteItem); // Transform mock data to DTOs
    }

    try {
        const response = await httpClient.get(api_endpoint + "/search", { params });
        return response.data.map(toAutocompleteItem); // Transform API response to DTOs
    } catch (error) {
        console.error("Error fetching autocomplete data:", error);
        throw new Error("Failed to fetch autocomplete data");
    }
};
