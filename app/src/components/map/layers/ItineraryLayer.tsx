"use client";

import { OtpResponse } from "@/api/routingService/dto/otpResponse";
import { fetchOtpData } from "@/api/routingService/routingService";
import { useMapContext } from "@/contexts/mapContext";
import { useSettingsContext } from "@/contexts/settingsContext";
import { Itinerary } from "@/types/Itinerary";
import { useEffect, useState } from "react";
import { mockOtpResponse } from "@/api/routingService/dto/__mock__/otpResponse.mock";
import { LayerConfig } from "./ILayer";
import { toOtpResponse } from "@/api/routingService/mappers";
import { GeoJSON, FeatureCollection, Point, LineString } from "geojson";

export const createItineraryLayerData = (): FeatureCollection<Point | LineString> | undefined => {
  console.log("CREATE IT LAYER DATA TRIGGERED");
  //setSelectedItinerary(toOtpResponse(mockOtpResponse).plan.itineraries[0]);
  const selectedItinerary = toOtpResponse(mockOtpResponse).plan.itineraries[0];

  if (selectedItinerary) {
    try {
      console.log("SELECTED ITINERARY:", selectedItinerary);
      const geojsonData = selectedItinerary.toGeoJson() as FeatureCollection<Point | LineString>; // Type assertion
      console.log("GEOJSON DATA", (geojsonData.features));
      return geojsonData;
    } catch (error) {
      console.error("Error processing route data:", error);
      return undefined;
    }
  } else {
    console.log("selectedItinerary is undefined");
    return undefined;
  }
};

export const createItineraryLayer = (geojsonData: FeatureCollection<Point | LineString> | undefined): LayerConfig => ({
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