import { SomeAPIResponse } from "./dto/sampleDto";

// Map the raw data from the API to the corresponding DTO
export const toSomeAPIResponse = (data: any): SomeAPIResponse => ({
    id: data.id || '',
    name: data.name || 'Unknown',
    description: data.description || '',
});
