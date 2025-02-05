"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { createItineraryLayer, createItineraryLayerData } from "./map/layers/ItineraryLayer";
import stopsLayerData from "./map/layers/StopsLayer";
import type React from "react";
import { useUIContext } from "@/contexts/uiContext";
import { useMapContext } from "@/contexts/mapContext";
import { LayerManager } from "./map/layers/ILayer";
import stopsLayer from "./map/layers/StopsLayer";

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const layerManagerRef = useRef<LayerManager | null>(null);


  const { viewMode } = useUIContext();
  const { visibleLayers, toggleLayer } = useMapContext();
  const { currentPosition, setCurrentPosition } = useMapContext();
  const { selectedStop, setSelectedStop } = useMapContext();

  /** Step 1: Initialize Map **/
  useEffect(() => {

    if (!mapContainer.current || mapRef.current) return;

    mapboxgl.accessToken = "pk.eyJ1IjoibS1iZXJlbmdlciIsImEiOiJjbTZpYnQ2eTUwNjZ4Mm9zNTl4M2wwd2hmIn0.dypp0rb10-6yuJu1YqOjyA";

    const map = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [12.37701425222998, 51.3406130352673], // Initial center
      zoom: 12,
    });

    map.on("style.load", () => {
      console.log("Map style loaded, initializing layers...");
      layerManagerRef.current = new LayerManager(map);
      mapRef.current = map;
      loadLayers();
    });

    return () => map.remove(); // Cleanup
  }, []);

  /** Step 2: Add Layers Dynamically **/
  // useEffect(() => {
  const loadLayers = () => {
    console.log("Visible Layers:", visibleLayers);

    console.log(mapRef.current);
    console.log(layerManagerRef.current);
    if (!mapRef.current || !layerManagerRef.current) return;
    const layerManager = layerManagerRef.current;
    const map = mapRef.current;

    // Remove existing layers to prevent duplicates
    if (map.getLayer("stops-layer")) {
      map.removeLayer("stops-layer");
    }
    if (map.getSource("stops-source")) {
      map.removeSource("stops-source");
    }

    console.log("View Mode:", viewMode);
    // Replace with 'case if'
    if (viewMode === "ITINERARY") {
      layerManager.addLayer(createItineraryLayer(createItineraryLayerData()));
    } else if (["DEFAULT", "ITINERARY", "PLAN", "STATION"].includes(viewMode)) {
      const stopsGeoJson = stopsLayer(); // Ensure valid GeoJSON
      console.log("Feature Geojson:", stopsGeoJson);

      // Add GeoJSON Source
      map.addSource("stops-source", {
        type: "geojson",
        data: JSON.parse(stopsGeoJson), // otherwise attempts to GET the geoJSON from an endpoint.
      });

      // Add Stops Layer (Circles)
      map.addLayer({
        id: "stops-layer",
        type: "circle",
        source: "stops-source",
        paint: {
          "circle-radius": 6,
          "circle-color": "#ff0000",
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff",
        },
      });

      // Enable Click Interaction
      map.on("click", "stops-layer", (e) => {
        const feature = e.features?.[0];
        console.log("Clicked Feature:", feature?.properties?.stopId);
        if (feature) {
          console.log("Clicked Stop:", feature.properties?.stopId);
          setSelectedStop(feature.properties?.stopId);
        }
      });

      // Hover Interaction
      map.on("mouseenter", "stops-layer", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "stops-layer", () => {
        map.getCanvas().style.cursor = "";
      });
    }
  }//, [viewMode]);

  return <div ref={mapContainer} style={{ width: "100%", height: "700px" }} />;
};

export default Map;
