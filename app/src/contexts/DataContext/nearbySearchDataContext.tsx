"use client";

import React, { createContext, useContext } from "react";
import { IDataContext } from "@/contexts/DataContext/IDataContext";
import { useDataFetcher } from "@/hooks/useDataFetcher";
import { NearBySearchResponse } from "@/api/nearbysearchService/dto/nearbysearchResponse";
import { NearBySearchParams, NearBySearchParamsWithBoundingBox } from "@/api/nearbysearchService/dto/nearbysearchRequest";
import { searchAllNearby } from "@/api/nearbysearchService/nearbysearchService";


export interface INearbySearchDataContext extends IDataContext<NearBySearchResponse> {
    // Nearby Search
    nearBySearchData: NearBySearchResponse | null;
    fetchNearbySearch: (params: NearBySearchParams | NearBySearchParamsWithBoundingBox) => Promise<void>;
    loadingNearbySearch: boolean;
    errorNearbySearch: string | null;

    clearState: () => void;
}

const NearbySearchDataContext = createContext<INearbySearchDataContext | undefined>(undefined);

export const NearbySearchDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const nearbySearchFetcher = useDataFetcher<NearBySearchResponse>(searchAllNearby);

    return (
        <NearbySearchDataContext.Provider value={{
            // Nearby Search
            nearBySearchData: nearbySearchFetcher.data,
            fetchNearbySearch: nearbySearchFetcher.fetchData,
            loadingNearbySearch: nearbySearchFetcher.loading,
            errorNearbySearch: nearbySearchFetcher.error,

            clearState: () => {
                // Here you could implement a way to clear the state.
                // For example, if your useDataFetcher hook returned a setData function,
                // you could call setData(null). For now, we define it as a no-op.
            }
        }}>
            {children}
        </NearbySearchDataContext.Provider>
    );
};

export const useNearbySearchDataContext = () => {
    const context = useContext(NearbySearchDataContext);
    if (!context) {
        throw new Error("useNearbySearchDataContext must be used within a NearbySearchDataProvider");
    }
    return context;
};
