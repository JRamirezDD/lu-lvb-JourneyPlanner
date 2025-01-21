import axios, { AxiosInstance } from 'axios';

// Create an Axios instance
const httpClient: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Use environment variables for the base URL
    timeout: 10000, // Set a timeout
});

// Add a request interceptor to include the API key
httpClient.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = `Bearer ${process.env.API_KEY}`;
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor for error handling
httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

export default httpClient;
