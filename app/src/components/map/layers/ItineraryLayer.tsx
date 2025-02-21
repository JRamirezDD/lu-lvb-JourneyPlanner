"use client";

import { OtpResponse } from "@/api/routingService/dto/otpResponse";
import { fetchOtpData } from "@/api/routingService/routingService";
import { useMapContext } from "@/contexts/mapContext";
import { useSettingsContext } from "@/contexts/settingsContext";
import { Itinerary } from "@/types/Itinerary";
import { useEffect, useState } from "react";

export const createItineraryLayerData = () => {
    const { selectedItinerary } = useMapContext();
    
    // #DELETE - Temporary operation for testing. Normally done by Control Panel
    const { setSelectedItinerary } = useMapContext(); 
    const { transportModes } = useSettingsContext(); // Get the transport mode from the settings context
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
            mockup: false,
        }).then((response: OtpResponse) => {
            setSelectedItinerary(new Itinerary(
                response.plan.from,
                response.plan.to,
                response.plan.itineraries[0]
            ));
        });
    }, [fetchOtpData]);
    // #ENDOFDELETE


    const [geojsonData, setGeojsonData] = useState<object | null>(null);
    useEffect(() => {
        if (selectedItinerary) {
            try {
                const parsedGeojson = selectedItinerary.toGeoJson();    //make itinerary a geojson formatted object (consists of more objects)
                setGeojsonData(parsedGeojson); 
            } catch (error) {
                console.error("Error processing route data:", error);
            }
        }
    }, [selectedItinerary]);

    // Print the geojsonData to the console (if available)
    console.log(geojsonData); 

    return geojsonData; // This component doesn't render any visual elements
};



import { LayerConfig } from "./ILayer";

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
