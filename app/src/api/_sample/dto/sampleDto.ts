// Expected DTO for the API response
export interface SomeAPIResponse {
    id: string;
    name: string;
    description: string;
}

// Function to transform the raw API data into the DTO
export const toSomeAPIResponse = (data: any): SomeAPIResponse => ({
    id: data.id || '',
    name: data.name || 'Unknown',
    description: data.description || '',
});
