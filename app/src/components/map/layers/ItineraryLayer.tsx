"use client";

import { OtpResponse } from "@/api/routingService/dto/otpResponse";
import { fetchOtpData } from "@/api/routingService/routingService";
import { useMapContext } from "@/contexts/mapContext";
import { useSettingsContext } from "@/contexts/settingsContext";
import { Itinerary } from "@/types/Itinerary";
import { useEffect, useState } from "react";
import { mockOtpResponse } from "@/api/routingService/dto/__mock__/otpResponse.mock";
import { toOtpResponse } from "@/api/routingService/mappers";
import { GeoJSON, FeatureCollection, Point, LineString } from "geojson";

export const createItineraryLayerData = (selectedItinerary: Itinerary): FeatureCollection<Point | LineString> | undefined => {
  console.log("CREATE IT LAYER DATA TRIGGERED");
  //setSelectedItinerary(toOtpResponse(mockOtpResponse).plan.itineraries[0]);
  const _selectedItinerary = toOtpResponse(mockOtpResponse).plan.itineraries[0];

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



import { LayerConfig, SourceConfig } from "./ILayer";

// The shared source for the itinerary layers. Note that the data will be set dynamically.
export const itinerarySource: SourceConfig = {
  id: "itinerary-source",
  type: "geojson",
  data: {
    type: "FeatureCollection",
    features: []
  }
};

// Walk layer: blue dotted line
export const walkLayerConfig: LayerConfig = {
  id: "walk-layer",
  type: "line",
  sourceId: itinerarySource.id,
  layout: {
    "line-join": "round",
    "line-cap": "round"
  },
  paint: {
    "line-color": "#007cbf",
    "line-width": 4,
    "line-dasharray": [4, 2]
  },
  filter: ["==", ["get", "mode"], "WALK"]
};

// Suburb layer: full red line (example color)
export const suburbLayerConfig: LayerConfig = {
  id: "suburb-layer",
  type: "line",
  sourceId: itinerarySource.id,
  layout: {
    "line-join": "round",
    "line-cap": "round"
  },
  paint: {
    "line-color": "red",
    "line-width": 4
  },
  filter: ["==", ["get", "mode"], "SUBURB"]
};

// Tram layer: full blue line
export const tramLayerConfig: LayerConfig = {
  id: "tram-layer",
  type: "line",
  sourceId: itinerarySource.id,
  layout: {
    "line-join": "round",
    "line-cap": "round"
  },
  paint: {
    "line-color": "blue",
    "line-width": 4
  },
  filter: ["==", ["get", "mode"], "TRAM"]
};

// Train layer: full red line
export const trainLayerConfig: LayerConfig = {
  id: "train-layer",
  type: "line",
  sourceId: itinerarySource.id,
  layout: {
    "line-join": "round",
    "line-cap": "round"
  },
  paint: {
    "line-color": "red",
    "line-width": 4
  },
  filter: ["==", ["get", "mode"], "TRAIN"]
};

// Leg start and end layer: black circles
export const legStartEndLayerConfig: LayerConfig = {
  id: "legstartend-layer",
  type: "circle",
  sourceId: itinerarySource.id,
  paint: {
    "circle-radius": 5,
    "circle-color": "white",
    "circle-stroke-width": 2,
    "circle-stroke-color": "black"
  },
  filter: [
    "any",
    ["==", ["get", "type"], "Leg Start"],
    ["==", ["get", "type"], "Leg End"]
  ]
};

// Intermediate stops layer: black circles
export const intermediateStopsLayerConfig: LayerConfig = {
  id: "intermediatestops-layer",
  type: "circle",
  sourceId: itinerarySource.id,
  paint: {
    "circle-radius": 3,
    "circle-color": "white",
    "circle-stroke-width": 2,
    "circle-stroke-color": "black"
  },
  filter: ["==", ["get", "type"], "Intermediate Stop"]
};
