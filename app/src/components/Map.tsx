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
import { GeoJSON } from "geojson";
import { Itinerary } from "@/types/Itinerary";
import { create } from "domain";

const Map: React.FC = () => {
  //Map container:
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const layerManagerRef = useRef<LayerManager | null>(null);

  //get contexts for map:
  const { viewMode } = useUIContext();
  const { visibleLayers, toggleLayer } = useMapContext();
  const { currentPosition, setCurrentPosition } = useMapContext();
  const { selectedStop, setSelectedStop } = useMapContext();

  useEffect(() => {
    // initialize map:
    if (!mapContainer.current || mapRef.current) return;
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [12.37701425222998, 51.3406130352673], 
      zoom: 12,
    });

    map.on("style.load", () => {
      console.log("Map style loaded, initializing layers...");
      layerManagerRef.current = new LayerManager(map);
      mapRef.current = map;
      loadLayers();
    });

    return () => map.remove(); 
  }, []);

  const loadLayers = () => {    //load layers:
    //print status:
    console.log("Visible Layers:", visibleLayers);
    console.log(mapRef.current);
    console.log(layerManagerRef.current);
    console.log("View Mode:", viewMode);

    if (!mapRef.current || !layerManagerRef.current) return;
    const layerManager = layerManagerRef.current;
    const map = mapRef.current;

    // Remove existing layers
    if (map.getLayer("stops-layer")) {
      map.removeLayer("stops-layer");
    }
    if (map.getSource("stops-source")) {
      map.removeSource("stops-source");
    }

    //for each layer: check if layer shoudld be shown and call function
    // DEFAULT - display stations
    if (viewMode === "DEFAULT") {
      const itineraryGeoJson = createItineraryLayerData(); // Fetch the GeoJSON data
      const itineraryLayer = createItineraryLayer(itineraryGeoJson); // Create the layer
  
      console.log("Itinerary Layer:", itineraryLayer);
  
      map.addSource("itinerary-source", itineraryLayer.source); 
      map.addLayer(itineraryLayer);
      const stopsGeoJson = stopsLayer(); // Ensure valid GeoJSON
      console.log("Feature Geojson:", stopsGeoJson);
      const stopsGeoJsonTyped: GeoJSON = stopsGeoJson as GeoJSON;
      // Add GeoJSON Source
      map.addSource("stops-source", {
        type: "geojson",
        data: stopsGeoJsonTyped, // otherwise attempts to GET the geoJSON from an endpoint.
      });

      // Stops are orange circles
      map.addLayer({
        id: "stops-layer",
        type: "circle",
        source: "stops-source",
        paint: {
          "circle-radius": 3,
          "circle-color": "#f3780b",
          "circle-stroke-width": 2,
          "circle-stroke-color": "#f3780b",
        },
      });
    }

    // ITINERARY display selected itinerary
    if (viewMode === "ITINERARY") {
      createItineraryLayer;

    }

    // STATION display selected station only 
    

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
  return <div ref={mapContainer} style={{ width: "700px", height: "700px" }} />;
};

export default Map;
