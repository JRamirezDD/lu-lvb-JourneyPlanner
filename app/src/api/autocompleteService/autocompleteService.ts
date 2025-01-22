import httpClient from "../httpClient";
import { AutocompleteResponse } from "./dto/autocompleteitemResponse";
import { SearchParams } from "./dto/searchparamsRequest";
import { mockAutocompleteResponse } from "./dto/__mock__/autocompleteResponse.mock";
import { toAutocompleteItem } from "./mappers";

const useMock = process.env.USE_MOCK === "true";

export const fetchAutocompleteData = async (params: SearchParams): Promise<AutocompleteResponse> => {
    if (useMock) {
        return mockAutocompleteResponse.map(toAutocompleteItem); // Transform mock data to DTOs
    }

    try {
        const response = await httpClient.get("/some-endpoint", { params });
        return response.data.map(toAutocompleteItem); // Transform API response to DTOs
    } catch (error) {
        console.error("Error fetching autocomplete data:", error);
        throw new Error("Failed to fetch autocomplete data");
    }
};
