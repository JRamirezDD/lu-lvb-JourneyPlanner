"use client";

import { OtpResponse } from "@/api/routingService/dto/otpResponse";
import { fetchOtpData } from "@/api/routingService/routingService";
import { useMapContext } from "@/contexts/mapContext";
import { useSettingsContext } from "@/contexts/settingsContext";
import { Itinerary } from "@/types/Itinerary";
import { useEffect, useState } from "react";
import { mockOtpResponse } from "@/api/routingService/dto/__mock__/otpResponse.mock";

export const createItineraryLayerData = () => {
    /*
    const { selectedItinerary } = useMapContext();
    const [geojsonData, setGeojsonData] = useState<string>("");
    useEffect(() => {
        if (selectedItinerary) {
            try {
                const parsedGeojson = selectedItinerary.toGeoJson();
                setGeojsonData(JSON.stringify(parsedGeojson)); 
            } catch (error) {
                console.error("Error processing route data:", error);
            }
        }
    }, [selectedItinerary]);
*/
    const selectedItinerary = toOtpResponse(mockOtpResponse).plan.itineraries[0];
    const geojsonData = selectedItinerary.toGeoJson();
    // Print the geojsonData to the console (if available)
    console.log(geojsonData); 

    return geojsonData; // This component doesn't render any visual elements
};



import { LayerConfig } from "./ILayer";
import { toOtpResponse } from "@/api/routingService/mappers";

export const createItineraryLayer = (geojsonData: GeoJSON.FeatureCollection | undefined): LayerConfig => ({
  id: "itinerary-layer",
  type: "line",
  source: {
    type: "geojson",
    data: geojsonData,
  },
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": "#007cbf",
    "line-width": 2,
    "line-dasharray": [2, 2],
  },
  filter: ["==", "$type", "LineString"],
  interactive: false,
});