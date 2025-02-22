// ItineraryDataFetcher.tsx
"use client";

import { useEffect, useState } from "react";
import { useMapContext } from "@/contexts/mapContext";
import { GeoJSON } from "geojson";
import { fetchOtpData } from "@/api/routingService/routingService";
import { OtpResponse } from "@/api/routingService/dto/otpResponse";
import { Itinerary } from "@/types/Itinerary";

const ItineraryDataFetcher: React.FC<{ setData: (data: GeoJSON.FeatureCollection | null) => void }> = ({ setData }) => {
    const { selectedItinerary, setSelectedItinerary } = useMapContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("Check IT LAYER");
        const fetchData = async () => {
            try {
                const response: OtpResponse = await fetchOtpData({
                    From: "51.331977456411366, 12.39557557569731",
                    To: "51.33849468482282, 12.379760960120947",
                    Travelmode: "WALK",
                    date: "02-05-2025",
                    time: "23:17",
                    numItineraries: 3,
                    arriveBy: false,
                    accessibility: false,
                    shortWalk: false,
                    lessTransfers: false,
                    mockup: false,
                });

                const newItinerary = new Itinerary(
                    response.plan.from,
                    response.plan.to,
                    response.plan.itineraries[0]
                );

                setSelectedItinerary(newItinerary);
                //console.log("SELECTED:", selectedItinerary);

                if (newItinerary) {
                    const parsedGeojson = newItinerary.toGeoJson();
                    const x = parsedGeojson as GeoJSON.FeatureCollection;
                    setData(parsedGeojson as GeoJSON.FeatureCollection);
                    console.log("PARSED:", x);
                } else {
                    setData(null);
                }
            } catch (error) {
                console.error("Error fetching or processing itinerary data:", error);
                setData(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading itinerary data...</div>;
    }

    return null; // This component doesn't render anything directly
};

export default ItineraryDataFetcher;