import { useState, useCallback, useEffect } from "react";

/**
 * Object that contains related data fetching functionality.
 * @param fetchFunction Function to fetch data from the API.
 * @param data Stores the fetched data.
 * @param loading Indicates whether the fetch is in progress (multi-caller safety).
 * @param error Holds error message if the fetch fails.
 * @returns An object containing the fetched data, loading state, error message, the fetch function.
 * @template T The datatype fetched from the API.
 * @example 
 * const { data, loading, error, fetchData } = useDataFetcher(fetchFunction);
 * fetchData(arg1, arg2);
 * @example
 * if (loading) {
 *    return <div>Loading...</div>;
 * }
 * if (error) {
 *   return <div>Error: {error}</div>;
 * }
 * if (!data) {
 *  return <div>No data available</div>;
 * }
 * return <div>{data}</div>;
 * 
 */
interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    fetchData: (...args: any[]) => Promise<void>;
}

/**
 * Hook to fetch data from the API and handle related states via the FetchState object.
 * @param fetchFunction 
 * @returns 
 */
export function useDataFetcher<T>(
    fetchFunction: (...args: any[]) => Promise<T> // Function to fetch data from the API
): FetchState<T> {
    const [data, setData] = useState<T | null>(null); // State to store the fetched data
    const [loading, setLoading] = useState<boolean>(false); // State to indicate if the fetch is in progress
    const [error, setError] = useState<string | null>(null); // State to store the error message

    const fetchData = useCallback(async (...args: any[]) => {
        setLoading(true);
        setError(null); // Reset error state
        try {
            const response = await fetchFunction(...args); // Actually call API Function
            console.log("FETCHED DATA:", response);
            setData(response); // Store the fetched data
        } catch (err) {
            console.error("Error fetching data:", err);
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }, [fetchFunction]);

    useEffect(() => {
        console.log("Data updated in state:", data);
    }, [data]);

    return { data, loading, error, fetchData };
}
