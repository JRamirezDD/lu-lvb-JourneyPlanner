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
  console.log("CREATE ITINERARY LAYER DATA TRIGGERED");
  //setSelectedItinerary(toOtpResponse(mockOtpResponse).plan.itineraries[0]);
  const _selectedItinerary = toOtpResponse(mockOtpResponse).plan.itineraries[0];

  if (selectedItinerary) {
    try {
      console.log("SELECTED ITINERARY:", selectedItinerary);
      const geojsonData = selectedItinerary.toGeoJson() as FeatureCollection<Point | LineString>; // Type assertion
      console.log("GEOJSON DATA", (geojsonData));
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



import { SourceSpecification, LayerSpecification } from "maplibre-gl";

// Shared itinerary source (dynamically updated)
export const itinerarySource: SourceSpecification = {
  type: "geojson",
  data: {
    type: "FeatureCollection",
    features: [],
  },
};

// Walking route (grey dashed line)
export const walkLayerConfig: LayerSpecification = {
  id: "walk-layer",
  type: "line",
  source: "itinerary-source",
  layout: { "line-join": "round", "line-cap": "round" },
  paint: {
    "line-color": "#000000",
    "line-width": 2,
    "line-dasharray": [4, 2],
  },
  filter: ["==", ["get", "mode"], "WALK"],
};

// Suburban route (green)
export const suburbLayerConfig: LayerSpecification = {
  id: "suburb-layer",
  type: "line",
  source: "itinerary-source",
  layout: { "line-join": "round", "line-cap": "round" },
  paint: { "line-color": "#008D4F", "line-width": 4 },
  filter: ["==", ["get", "mode"], "SUBURB"],
};

// Bus route (purple)
export const busLayerConfig: LayerSpecification = {
  id: "bus-layer",
  type: "line",
  source: "itinerary-source",
  layout: { "line-join": "round", "line-cap": "round" },
  paint: { "line-color": "#800080", "line-width": 4 },
  filter: ["==", ["get", "mode"], "BUS"],
};

// Tram route (red)
export const tramLayerConfig: LayerSpecification = {
  id: "tram-layer",
  type: "line",
  source: "itinerary-source",
  layout: { "line-join": "round", "line-cap": "round" },
  paint: { "line-color": "#D91A1A", "line-width": 4 },
  filter: ["==", ["get", "mode"], "TRAM"],
};

// Train route (solid red)
export const trainLayerConfig: LayerSpecification = {
  id: "train-layer",
  type: "line",
  source: "itinerary-source",
  layout: { "line-join": "round", "line-cap": "round" },
  paint: { "line-color": "red", "line-width": 4 },
  filter: ["==", ["get", "mode"], "TRAIN"],
};

// Start & end points (black circles)
export const legStartEndLayerConfig: LayerSpecification = {
  id: "legstartend-layer",
  type: "circle",
  source: "itinerary-source",
  paint: {
    "circle-radius": 5,
    "circle-color": "white",
    "circle-stroke-width": 2,
    "circle-stroke-color": "black",
  },
  filter: ["any", ["==", ["get", "type"], "Leg Start"], ["==", ["get", "type"], "Leg End"]],
};

// Intermediate stops (smaller black circles)
export const intermediateStopsLayerConfig: LayerSpecification = {
  id: "intermediatestops-layer",
  type: "circle",
  source: "itinerary-source",
  paint: {
    "circle-radius": 3,
    "circle-color": "white",
    "circle-stroke-width": 2,
    "circle-stroke-color": "black",
  },
  filter: ["==", ["get", "type"], "Intermediate Stop"],
};
