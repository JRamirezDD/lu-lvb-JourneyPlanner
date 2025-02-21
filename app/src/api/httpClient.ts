import axios, { AxiosInstance } from 'axios';

// Create an Axios instance
const httpClient: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_PROXY_ADDRESS, // Base URL for API requests
    timeout: 10000, // 10-second timeout
});

// Add a request interceptor to set headers
httpClient.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor for handling API responses
httpClient.interceptors.response.use(
    (response) => {
        console.log('API Response:', response.data); // parse json for debugging
        return response; // Directly returning parsed data
    },
    (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

export default httpClient;
