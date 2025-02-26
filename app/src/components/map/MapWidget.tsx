"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { useUIContext } from "@/contexts/uiContext";
import { useMapContext } from "@/contexts/mapContext";
import { FeatureCollection, Point, LineString } from "geojson";
import { LayerManager } from "./layers/ILayer";
import { createItineraryLayer, createItineraryLayerData } from "./layers/ItineraryLayer";
import { ViewMode } from "@/types/ViewMode";
import { stopsLayerConfig, stopsLabelsLayerConfig, stopsSource as stopsSourceConfig, createStopsLayerData } from "./layers/StopsLayer";
import {
    itinerarySource,
    walkLayerConfig,
    suburbLayerConfig,
    tramLayerConfig,
    trainLayerConfig,
    legStartEndLayerConfig,
    intermediateStopsLayerConfig
} from "./layers/ItineraryLayer";
import { Itinerary } from "@/types/Itinerary";
import { useStopmonitorDataContext } from "@/contexts/DataContext/stopmonitorDataContext";

// --- Bounding Box Helpers ---

// Returns an extended bounding box (bufferFactor of 0.5 means 50% larger than view)
function getExtendedBounds(map: mapboxgl.Map, bufferFactor = 0.5) {
    const bounds = map.getBounds();
    if (!bounds) return null;
    const sw = bounds.getSouthWest();
    const ne = bounds.getNorthEast();
    const center = bounds.getCenter();

    const lngDiff = Math.abs(ne.lng - sw.lng);
    const latDiff = Math.abs(ne.lat - sw.lat);

    // Create an extended bounds centered on the current view
    const extendedSw = new mapboxgl.LngLat(
        center.lng - (lngDiff * (1 + bufferFactor)) / 2,
        center.lat - (latDiff * (1 + bufferFactor)) / 2
    );
    const extendedNe = new mapboxgl.LngLat(
        center.lng + (lngDiff * (1 + bufferFactor)) / 2,
        center.lat + (latDiff * (1 + bufferFactor)) / 2
    );
    return new mapboxgl.LngLatBounds(extendedSw, extendedNe);
}

// Converts bounds into a comma-separated string: "minLng,minLat,maxLng,maxLat"
function boundsToString(bounds: mapboxgl.LngLatBounds) {
    const sw = bounds.getSouthWest();
    const ne = bounds.getNorthEast();
    return `${sw.lat},${ne.lat},${sw.lng},${ne.lng}`;
}

// --- Component Implementation ---

export const MapWidget: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const layerManagerRef = useRef<LayerManager | null>(null);
    const { viewMode } = useUIContext();
    const { setSelectedStop } = useMapContext();
    const [localSelectedItinerary, setLocalSelectedItinerary] = useState<FeatureCollection<Point | LineString> | undefined>(undefined);
    const [mapLoaded, setMapLoaded] = useState(false);
    const { stopsData, fetchStops, loadingStops, errorStops } = useStopmonitorDataContext();
    
    // State to hold the current query bounds (the extended bounding box used for querying)
    const [currentQueryBounds, setCurrentQueryBounds] = useState<mapboxgl.LngLatBounds | null>(null);

    useEffect(() => {
        if (!mapContainer.current || mapRef.current) return;

        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [12.37701425222998, 51.3406130352673],
            zoom: 12,
        });

        map.on("style.load", () => {
            // Initialize the LayerManager and store the map reference
            layerManagerRef.current = new LayerManager(map);
            mapRef.current = map;

            // Set initial extended bounds and query stops data
            const extendedBounds = getExtendedBounds(map, 0.5);
            setCurrentQueryBounds(extendedBounds);
            if (extendedBounds) {
                const bboxString = boundsToString(extendedBounds);
                console.log("Initial stops query:", bboxString);
                fetchStops(bboxString);
            }

            // Set up the moveend listener to query stops when the user navigates out of the extended bounds
            map.on("moveend", () => {
                if (!mapRef.current || !currentQueryBounds) return;
                const currentViewBounds = map.getBounds();
                if (!currentViewBounds) return;

                // If the current view is not fully contained in the last queried extended bounds, query new stops data
                if (
                    !currentQueryBounds.contains(currentViewBounds.getNorthEast()) ||
                    !currentQueryBounds.contains(currentViewBounds.getSouthWest())
                ) {
                    const newExtendedBounds = getExtendedBounds(map, 0.5);
                    setCurrentQueryBounds(newExtendedBounds);
                    if (newExtendedBounds) {
                        const newBboxString = boundsToString(newExtendedBounds);
                        console.log("New stops query due to map move:", newBboxString);
                        fetchStops(newBboxString);
                    }
                }
            });

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
            loadLayers(viewMode);
        });

        return () => map.remove();
    }, []);

    // Update layers when view mode changes
    const loadLayers = (_viewMode: ViewMode) => {
        if (!mapRef.current) return;

        // Cleanup itinerary and stops layers if present
        if (mapRef.current.getLayer("itinerary-layer")) {
            mapRef.current.removeLayer("itinerary-layer");
            mapRef.current.removeSource("itinerary-source");
        }
        if (mapRef.current.getLayer("stops-layer")) {
            mapRef.current.removeLayer("stops-layer");
            mapRef.current.removeSource("stops-source");
        }

        // For all modes, we add the stops layers...
        createStopsLayers();

        // And if the view mode is ITINERARY, add itinerary layers too
        if (_viewMode === "ITINERARY" && localSelectedItinerary && mapLoaded) {
            createItineraryLayer();
        }
    };

    // Update stops layers using the stops data from context
    const createStopsLayers = () => {
        if (!mapRef.current || !stopsData) return;

        // Update the stops source data from context
        const _stopsSourceConfig = { ...stopsSourceConfig, data: createStopsLayerData(stopsData) };
        const _stopsLayerConfig = stopsLayerConfig;
        const _stopsLabelsLayerConfig = stopsLabelsLayerConfig;

        // Clean up existing stops layers and add new ones
        layerManagerRef.current?.removeLayer(_stopsLayerConfig.id);
        layerManagerRef.current?.removeLayer(_stopsLabelsLayerConfig.id);
        
        // Clean up old source
        if (mapRef.current.getSource(_stopsSourceConfig.id)) {
            mapRef.current.removeSource(_stopsSourceConfig.id);
        }

        // Add new source
        if (!mapRef.current.getSource(_stopsSourceConfig.id)) {
            mapRef.current.addSource(_stopsSourceConfig.id, _stopsSourceConfig);
        }
        // Add layers
        layerManagerRef.current?.addLayer(_stopsLayerConfig);
        layerManagerRef.current?.addLayer(_stopsLabelsLayerConfig);

        // Register click and cursor events for stops layer
        mapRef.current.on("click", _stopsLayerConfig.id, (e) => {
            const feature = e.features?.[0];
            if (feature) {
                setSelectedStop(feature.properties?.stopId);
            }
        });

        mapRef.current.on("mouseenter", _stopsLayerConfig.id, () => {
            if (mapRef.current) {
                mapRef.current.getCanvas().style.cursor = "pointer";
            }
        });
        mapRef.current.on("mouseleave", _stopsLayerConfig.id, () => {
            if (mapRef.current) {
                mapRef.current.getCanvas().style.cursor = "";
            }
        });
    };

    // Create itinerary layers (using your existing implementation)
    // This version assumes createItineraryLayerData accepts the current itinerary (if needed)
    const createItineraryLayer = () => {
        // You might have some itinerary selection logic here; using a dummy itinerary for now:
        const selectedItinerary = {} as Itinerary; // replace with real itinerary
        const itineraryData = createItineraryLayerData(selectedItinerary) as FeatureCollection<Point | LineString>;
        const itinerarySourceConfig = { ...itinerarySource, data: itineraryData };
        const layers = [
            walkLayerConfig,
            suburbLayerConfig,
            tramLayerConfig,
            trainLayerConfig,
            legStartEndLayerConfig,
            intermediateStopsLayerConfig,
        ];

        if (itineraryData) {
            if (!mapRef.current?.getSource(itinerarySourceConfig.id)) {
                mapRef.current?.addSource(itinerarySourceConfig.id, itinerarySourceConfig);
            }
            layers.forEach((layer) => {
                layerManagerRef.current?.addLayer(layer);
            });
        }
    };

    return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
};

export default Map;
