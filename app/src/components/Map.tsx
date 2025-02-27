"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { useUIContext } from "@/contexts/uiContext";
import { useMapContext } from "@/contexts/mapContext";
import { LayerManager } from "./map/layers/ILayer";
import { GeoJSON, FeatureCollection, Point, LineString } from "geojson";
import { createItineraryLayerData } from "./map/layers/ItineraryLayer";

const Map: React.FC = ({ }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const layerManagerRef = useRef<LayerManager | null>(null);
  const { viewMode, setViewMode } = useUIContext();
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

      // Click listener for Mapbox pre-loaded layers
      map.on('click', (e) => {
        const features = map.queryRenderedFeatures(e.point);
        if (features && features.length > 0) {
          const feature = features[0];
          if (feature.geometry.type === 'Point' || feature.geometry.type === 'LineString' || feature.geometry.type === 'Polygon') {
            if (feature.geometry.coordinates) {
              const coordinates = feature.geometry.coordinates;
              console.log('Clicked coordinates:', coordinates);
            }
          } else {
            console.log("Geometry type is not a Point, LineString, or Polygon");
          }

        }
      });

      setMapLoaded(true);
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
    if (viewMode === "DEFAULT") {

    }
    else if (viewMode === "ITINERARY") {
      const data = createItineraryLayerData();
      setLocalSelectedItinerary(data);
      console.log("localselecteditinerary set to selecteditinerary from context", data);
    } else {
      setLocalSelectedItinerary(undefined);
    }

    
  }, [viewMode]);

  useEffect(() => {
    if (mapRef.current && localSelectedItinerary && mapLoaded) {
      try {
        console.log("itinerary useeffect triggered");
        const geojsonData = localSelectedItinerary;
        if (!mapRef.current.getSource("itinerary-source")) {
          mapRef.current.addSource("itinerary-source", { type: "geojson", data: geojsonData });
          console.log("Data source added");
        }
        if (!mapRef.current.getLayer("itinerary-layer")) {
          // ... (your layer code here) ...
          //WALK LAYER: blue dotted line
          mapRef.current.addLayer({
            id: "walk-layer",
            type: "line",
            source: "itinerary-source",
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#007cbf",
              "line-width": 4,
              "line-dasharray": [4, 2]
            },
            filter: ["==", ["get", "mode"], "WALK"],
          });
          console.log("walk layer added");

          //s bahn LAYER: full blue line
          mapRef.current.addLayer({
            id: "suburb-layer",
            type: "line",
            source: "itinerary-source",
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "red",
              "line-width": 4,
            },
            filter: ["==", ["get", "mode"], "SUBURB"],
          });
          console.log("s-bahn layer added");

          //tramLAYER: full blue line
          mapRef.current.addLayer({
            id: "tram-layer",
            type: "line",
            source: "itinerary-source",
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "blue",
              "line-width": 4,
            },
            filter: ["==", ["get", "mode"], "TRAM"],
          });
          console.log("tram layer added");

          //TRAIN LAYER: full red line
          mapRef.current.addLayer({
            id: "train-layer",
            type: "line",
            source: "itinerary-source",
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "red",
              "line-width": 4,
            },
            filter: ["==", ["get", "mode"], "TRAIN"],
          });
          console.log("train layer added");

          //LEG START AND END LAYER: black circles
          mapRef.current.addLayer({
            id: "legstartend-layer",
            type: "circle",
            source: "itinerary-source",
            paint: {
              "circle-radius": 5,
              "circle-color": "white",
              "circle-stroke-width": 2,
              "circle-stroke-color": "black",
            },
            filter: [
              "any",
              ["==", ["get", "type"], "Leg Start"],
              ["==", ["get", "type"], "Leg End"]
            ]
          });
          console.log("leg start and end layer added");
        }

        //LEG START AND END LAYER: black circles
        mapRef.current.addLayer({
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
        });
        console.log("leg start layer added");
      } catch (error) {
        console.error("Error processing route data:", error);
      }
    } else {
      if (mapRef.current && mapRef.current.getLayer("itinerary-layer")) {
        mapRef.current.removeLayer("itinerary-layer");
        mapRef.current.removeSource("itinerary-source");
      }
    }
  }, [mapRef.current, localSelectedItinerary, viewMode, mapLoaded]);

  const createStopsLayer = () => {
    if (!mapRef.current) return;
    const map = mapRef.current;

    const stopsGeoJson = stopsLayer() as FeatureCollection<Point>;

    if (!map.getSource("stops-source")) {
      
      map.addSource("stops-source", { type: "geojson", data: stopsGeoJson });
    }

    if (!map.getLayer("stops-layer")) {
      map.loadImage('front-of-bus.png', (error, image) => {
        if (error) {
          console.error("Error loading image:", error);
          return;
        }
        if (image && !map.hasImage('bus-icon')) {
          map.addImage('bus-icon', image);
        }
        map.addLayer({
          id: "stops-layer",
          type: "symbol",
          source: "stops-source",
          layout: {
            "icon-image": "bus-icon",
            "icon-size": 0.05,
            "icon-allow-overlap": true,
          },
          paint: {},
        });
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