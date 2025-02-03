"use client";

import { toOtpResponse } from "@/api/routingService/mappers";
import { useOtpDataContext } from "@/contexts/DataContext/routingDataContext";
import { useSettingsContext } from "@/contexts/settingsContext";
import { useEffect, useState } from "react";
import { TransportMode } from "@/types/TransportMode";

const routeLayerData = () => {
    const { otpData, fetchOtpData, loadingOtp, errorOtp } = useOtpDataContext();
    const { transportModes } = useSettingsContext();

    const [geojsonData, setGeojsonData] = useState<any | null>(null);

    useEffect(() => {
        fetchOtpData({
            From: "51.331977456411366, 12.39557557569731",
            To: "51.33849468482282, 12.379760960120947",
            Travelmode: transportModes,
            date: "02-05-2025",
            time: "23:17",
            numItineraries: 3,
            arriveBy: false,
            accessibility: false,
            shortWalk: false,
            lessTransfers: false,
            mockup: true,
        });
    }, [fetchOtpData]);

    useEffect(() => {
        if (otpData) {
            try {
                const dtoData = toOtpResponse(otpData);
                const parsedGeojson = JSON.parse(dtoData.toGeoJson());
                setGeojsonData(parsedGeojson); 
            } catch (error) {
                console.error("Error processing route data:", error);
            }
        }
    }, [otpData]);

    if (loadingOtp) return null; // Prevent rendering while loading
    if (errorOtp) {
        console.error("Error fetching OTP data:", errorOtp);
        return null;
    }

    // Print the geojsonData to the console (if available)
    console.log(geojsonData); 

    return otpData; // This component doesn't render any visual elements
};

export default routeLayerData;