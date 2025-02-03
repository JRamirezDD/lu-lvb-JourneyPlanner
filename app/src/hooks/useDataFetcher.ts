import { useState, useCallback } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    fetchData: (...args: any[]) => Promise<void>;
}

export function useDataFetcher<T>(
    fetchFunction: (...args: any[]) => Promise<T>
): FetchState<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async (...args: any[]) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetchFunction(...args);
            setData(response);
        } catch (err) {
            console.error("Error fetching data:", err);
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }, [fetchFunction]);

    return { data, loading, error, fetchData };
}
