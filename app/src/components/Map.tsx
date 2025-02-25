"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import stopsLayer from "./map/layers/StopsLayer";
import { useUIContext } from "@/contexts/uiContext";
import { useMapContext } from "@/contexts/mapContext";
import { LayerManager } from "./map/layers/ILayer";
import { GeoJSON, FeatureCollection, Point, LineString } from "geojson";
import { createItineraryLayerData } from "./map/layers/ItineraryLayer";

const Map: React.FC = ({ }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const layerManagerRef = useRef<LayerManager | null>(null);
  const { viewMode } = useUIContext();
  const { selectedStop, setSelectedStop } = useMapContext();
  const [localSelectedItinerary, setLocalSelectedItinerary] = useState<FeatureCollection<Point | LineString> | undefined>(undefined);
  const [mapLoaded, setMapLoaded] = useState(false); // Add a mapLoaded state

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

    const map = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [12.37701425222998, 51.3406130352673],
      zoom: 12,
    });

    map.on("style.load", () => {
      layerManagerRef.current = new LayerManager(map);
      mapRef.current = map;
      setMapLoaded(true); // Set mapLoaded to true when the map is loaded
      loadLayers();
    });

    return () => map.remove();
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      loadLayers();
    }
  }, [viewMode]);

  useEffect(() => {
    if (viewMode === "ITINERARY" || viewMode === "DEFAULT") {
      const data = createItineraryLayerData();
      setLocalSelectedItinerary(data);
      console.log("localselecteditinerary set to selecteditinerary from context", data);
    } else {
      setLocalSelectedItinerary(undefined);
    }
  }, [viewMode]);

  useEffect(() => {
    if (mapRef.current && localSelectedItinerary && mapLoaded) { // Check mapLoaded
      try {
        console.log("itinerary useeffect triggered");
        const geojsonData = localSelectedItinerary;
        if (!mapRef.current.getSource("itinerary-source")) {
          mapRef.current.addSource("itinerary-source", { type: "geojson", data: geojsonData });
          console.log("Data source added");
        }
        if (!mapRef.current.getLayer("itinerary-layer")) {
          mapRef.current.addLayer({
            id: "itinerary-layer",
            type: "line",
            source: "itinerary-source",
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#007cbf",
              "line-width": 2,
            },
          });
          console.log("itinerary layer added");
        }
        console.log("creating IT layer using geojson data");
      } catch (error) {
        console.error("Error processing route data:", error);
      }
    } else {
      if (mapRef.current && mapRef.current.getLayer("itinerary-layer")) {
        mapRef.current.removeLayer("itinerary-layer");
        mapRef.current.removeSource("itinerary-source");
      }
    }
  }, [mapRef.current, localSelectedItinerary, viewMode, mapLoaded]); // Add mapLoaded to dependency array

  const createStopsLayer = () => {
    if (!mapRef.current) return;
    const map = mapRef.current;

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

      map.on("click", "stops-layer", (e) => {
        const feature = e.features?.[0];
        if (feature) {
          setSelectedStop(feature.properties?.stopId);
        }
      });

      map.on("mouseenter", "stops-layer", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "stops-layer", () => {
        map.getCanvas().style.cursor = "";
      });
    }
  };

  const loadLayers = () => {
    if (!mapRef.current) return;

    if (viewMode === "ITINERARY") {
      createStopsLayer();
    } else {
      if (mapRef.current.getLayer("stops-layer")) {
        mapRef.current.removeLayer("stops-layer");
        mapRef.current.removeSource("stops-source");
      }
    }
  };

  useEffect(() => {
    console.log("SELECTED ITINERARY (useEffect):", localSelectedItinerary);
  }, [localSelectedItinerary]);

  return (
    <div ref={mapContainer} style={{ width: "100%", height: "100%" }}></div>
  );
};

export default Map;