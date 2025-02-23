"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import stopsLayer from "./map/layers/StopsLayer";
import { useUIContext } from "@/contexts/uiContext";
import { useMapContext } from "@/contexts/mapContext";
import { LayerManager } from "./map/layers/ILayer";
import { GeoJSON, FeatureCollection, Feature, Point, LineString } from "geojson";
import { fetchOtpData } from "@/api/routingService/routingService";
import { createItineraryLayerData, createItineraryLayer } from "./map/layers/ItineraryLayer"; // Import the new component
import { toOtpResponse } from "@/api/routingService/mappers";
import { mockOtpResponse } from "@/api/routingService/dto/__mock__/otpResponse.mock";

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const layerManagerRef = useRef<LayerManager | null>(null);

  // Get context values
  const { viewMode } = useUIContext();
  const { visibleLayers, selectedStop, setSelectedStop } = useMapContext();
  const { currentPosition } = useMapContext();
  const { selectedItinerary, setSelectedItinerary } = useMapContext();

  // State variable for selectedItinerary
  const [localSelectedItinerary, setLocalSelectedItinerary] = useState<any>(null);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    // Ensure Mapbox token exists
    if (!process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN) {
      console.error("Mapbox token is missing.");
    }
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

    const map = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [12.37701425222998, 51.3406130352673],
      zoom: 12,
    });

    map.on("style.load", () => {
      console.log("Initializing layers...");
      layerManagerRef.current = new LayerManager(map);
      mapRef.current = map;
      loadLayers();
    });

    return () => map.remove();
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      loadLayers();
    }
  }, [viewMode]); // Reload layers when view mode changes

  // Effect to fetch selectedItinerary
  useEffect(() => {
    if (viewMode === "DEFAULT") {
          console.log("HELP")
      setLocalSelectedItinerary(selectedItinerary);
    }
  }, [viewMode, useMapContext]);

  const createStopsLayer = () => {
    if (!mapRef.current) return;
    const map = mapRef.current;

    console.log("Creating Stops Layer...");
    const stopsGeoJson = stopsLayer() as FeatureCollection<Point>;

    if (!map.getSource("stops-source")) {
      map.addSource("stops-source", { type: "geojson", data: stopsGeoJson });
    }

    if (!map.getLayer("stops-layer")) {
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

      // Enable Click Interaction
      map.on("click", "stops-layer", (e) => {
        const feature = e.features?.[0];
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
  };

  const loadLayers = async () => {
    console.log("CHECK 2");
    if (!mapRef.current || !layerManagerRef.current) return;
    const map = mapRef.current;

    console.log("Reloading layers...");
    console.log("Visible Layers:", visibleLayers);
    console.log("View Mode:", viewMode);

    if (viewMode === "DEFAULT") {
      createStopsLayer();
    } else {
      console.log("CONTEXT CHANGED!!!");
    }

    const selected = toOtpResponse(mockOtpResponse).plan.itineraries[0];
    const geojsonData = selected.toGeoJson() as FeatureCollection<Point | LineString>;
    setLocalSelectedItinerary(geojsonData);

    if (viewMode === "ITINERARY") {
      if (localSelectedItinerary) {
        try {
          const geojsonData = localSelectedItinerary.toGeoJson() as FeatureCollection<Point | LineString>;
          console.log("GEOJSON DATA", geojsonData);

          console.log("Fetching itinerary data...");
          console.log("CHECK 3");
          console.log("ITINERARY GEOJSON", JSON.stringify(geojsonData));

          if (!geojsonData) {
            console.warn("No itinerary data available.");
            return;
          }

          console.log("Raw Itinerary Data:", JSON.stringify(geojsonData));

          if (!map.getSource("itinerary-source")) {
            console.log("CHECK 4");
            console.log(JSON.stringify(geojsonData));
            map.addSource("itinerary-source", { type: "geojson", data: geojsonData });
          }

          if (!map.getLayer("itinerary-layer")) {
            map.addLayer({
              id: "itinerary-layer",
              type: "line",
              source: "itinerary-source",
            });
          }

          createItineraryLayer(geojsonData);
        } catch (error) {
          console.error("Error processing route data:", error);
        }
      } else {
        console.log("localSelectedItinerary is undefined");
      }
    }
  };
  useEffect(() => {
    console.log("SELECTED ITINERARY (useEffect):", localSelectedItinerary);
}, [localSelectedItinerary]);

  return (
    <div ref={mapContainer} style={{ width: "700px", height: "700px" }}>
    </div>
  );
};

export default Map;