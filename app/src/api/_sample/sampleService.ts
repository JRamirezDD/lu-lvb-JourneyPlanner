import httpClient from '../httpClient';
import { SomeAPIResponse, toSomeAPIResponse } from './dto/sampleDto';
import { mockSomeAPIResponse } from './dto/__mock__/sample.mock';

const useMock = process.env.USE_MOCK === 'true';

export const fetchSomeData = async (): Promise<SomeAPIResponse[]> => {
    try {
        if (useMock) {
            return mockSomeAPIResponse;
        }

        const response = await httpClient.get('/some-endpoint');
        return response.data.map(toSomeAPIResponse); // Transform the raw data using the DTO
    } catch (error) {
        console.error('Error fetching some data:', error);
        throw new Error('Failed to fetch data');
    }
};

export const fetchDataById = async (id: string): Promise<SomeAPIResponse> => {
    try {
        if (useMock) {
            const mockResponse = mockSomeAPIResponse.find((item) => item.id === id);
            if (!mockResponse) {
                throw new Error(`Mock data not found for ID: ${id}`);
            }
            return mockResponse;
        }

        const response = await httpClient.get(`/some-endpoint/${id}`);
        return toSomeAPIResponse(response.data); // Transform a single object
    } catch (error) {
        console.error(`Error fetching data by ID (${id}):`, error);
        throw new Error('Failed to fetch data by ID');
    }
};
