"use client"

import { useEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"
import { createItineraryLayer, createItineraryLayerData } from "./map/layers/ItineraryLayer"
import stopsLayerData from "./map/layers/StopsLayer"
import type React from "react" // Added import for React
import { useUIContext } from "@/contexts/uiContext"
import { useMapContext } from "@/contexts/mapContext"
import { LayerManager } from "./map/layers/ILayer"

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const layerManagerRef = useRef<LayerManager | null>(null);

  /**
   * Current ViewMode
   * Map needs to toggleLayers based on the viewMode.
   * eg. if viewMode is "ITINERARY", then ItineraryLayer should be visible.
   */
  const { viewMode } = useUIContext();

  /**
   * Layer Management
   * Current visible layers
   * ItineraryLayer, StopsLayer, etc. Update the ENUM if more layers are added.
   * Map needs to activate/deactivate layers based on the ones listed.
   */
  const { visibleLayers, toggleLayer } = useMapContext();  
  /**
   * Position Management
   * Current Position of the user
   */
  const { currentPosition, setCurrentPosition } = useMapContext();  

  // Stop Management - 
  const { selectedStop, setSelectedStop } = useMapContext();  


  

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    mapboxgl.accessToken = "pk.eyJ1IjoibS1iZXJlbmdlciIsImEiOiJjbTZpYnQ2eTUwNjZ4Mm9zNTl4M2wwd2hmIn0.dypp0rb10-6yuJu1YqOjyA";

    const map = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [12.37701425222998, 51.3406130352673],
      zoom: 12,
    });

    map.on("style.load", () => {
      layerManagerRef.current = new LayerManager(map);
    });

    mapRef.current = map;

    return () => map.remove();
  }, []);

  useEffect(() => {
    if (!mapRef.current || !layerManagerRef.current) return;
    const layerManager = layerManagerRef.current;

    // Remove existing layers
    layerManager.removeLayer(createItineraryLayer(undefined).id);
    // P - Implement StopsLayer
    // layerManager.removeLayer("stops-layer");

    // Add layers based on viewMode
    if (viewMode === "ITINERARY") {
      layerManager.addLayer(createItineraryLayer(createItineraryLayerData()));
    } 
    // P - Implement the StopsLayer
    // else if (viewMode === "STOPS" && stopsGeoJson) {
    //   layerManager.addLayer(createStopsLayer(stopsGeoJson));
    // }
  }, [viewMode]);

  return <div ref={mapContainer} style={{ width: "100%", height: "700px" }} />; // set height to 100vh when map is deployed in a container
}

export default Map

