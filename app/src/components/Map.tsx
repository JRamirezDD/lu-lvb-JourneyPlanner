"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import stopsLayer from "./map/layers/StopsLayer";
import { useUIContext } from "@/contexts/uiContext";
import { useMapContext } from "@/contexts/mapContext";
import { LayerManager } from "./map/layers/ILayer";
import { GeoJSON, FeatureCollection, Feature, Point, LineString } from "geojson";
import { createItineraryLayer } from "./map/layers/ItineraryLayer";

const Map: React.FC = ({  }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const layerManagerRef = useRef<LayerManager | null>(null);

  const { viewMode } = useUIContext();
  const { selectedStop, setSelectedStop, selectedItinerary } = useMapContext();
  const [localSelectedItinerary, setLocalSelectedItinerary] = useState<any>(null);

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
      setLocalSelectedItinerary(selectedItinerary);
      console.log("localselecteditinerary set to selecteditinerary from context", localSelectedItinerary);
    }
  }, [viewMode, selectedItinerary]);

  useEffect(() => {
    if (mapRef.current && selectedItinerary) {      
      try {
        console.log("itinerary useeffect triggered");
        const geojsonData = localSelectedItinerary.toGeoJson() as FeatureCollection<Point | LineString>;
        if (!mapRef.current.getSource("itinerary-source")) {
          mapRef.current.addSource("itinerary-source", { type: "geojson", data: geojsonData });
          console.log("Data source added")
        }
        if (!mapRef.current.getLayer("itinerary-layer")) {
          mapRef.current.addLayer({
            id: "itinerary-layer",
            type: "line",
            source: "itinerary-source",
          });
        }
        console.log("creating IT layer using geojson data");
        createItineraryLayer(geojsonData);
      } catch (error) {
        console.error("Error processing route data:", error);
      }
    }
  }, [localSelectedItinerary, viewMode]);

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
      if (mapRef.current.getLayer("itinerary-layer")) {
        mapRef.current.removeLayer("itinerary-layer");
        mapRef.current.removeSource("itinerary-source");
      }
    }
    if (viewMode === "DEFAULT") {
      createStopsLayer();
    }
  };

  useEffect(() => {
    console.log("SELECTED ITINERARY (useEffect):", localSelectedItinerary);
  }, [localSelectedItinerary]);

  return (
    <div 
      ref={mapContainer} 
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default Map;
