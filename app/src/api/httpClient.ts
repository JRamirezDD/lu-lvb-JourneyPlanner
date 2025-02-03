import axios, { AxiosInstance } from 'axios';

// Create an Axios instance
const httpClient: AxiosInstance = axios.create({
    baseURL: `https://cors-anywhere.herokuapp.com/${process.env.NEXT_PUBLIC_API_BASE_URL}`, // proxy the request for CORS. end-solution, implement server-side proxy
    timeout: 10000, // Set a timeout
});

// Add a request interceptor to include the API key
httpClient.interceptors.request.use(
    (config) => {
        config.headers['X-API-Key'] = `${process.env.NEXT_PUBLIC_API_KEY}`;
        config.headers['Content-Type'] = 'application/json:';

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
