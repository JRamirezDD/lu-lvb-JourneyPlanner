"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl, { Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useUIContext } from "@/contexts/uiContext";
import { useMapContext } from "@/contexts/mapContext";
import { LayerManager } from "./layers/ILayer";
import { createItineraryLayerData } from "./layers/ItineraryLayer";
import { ViewMode } from "@/types/ViewMode";
import { stopsLayerConfig, stopsLabelsLayerConfig, stopsSource as stopsSourceConfig, createStopsLayerData, stopsSource } from "./layers/StopsLayer";
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
import { OtpItinerary } from "@/api/routingService/dto/otpResponse";
import { mockOtpResponse } from "@/api/routingService/dto/__mock__/otpResponse.mock";
import { toOtpResponse } from "@/api/routingService/mappers";


// --- Bounding Box Helpers ---

// Returns an extended bounding box (bufferFactor of 0.5 means 50% larger than view)
const getExtendedBounds = (map: maplibregl.Map, bufferFactor = 1) => {
    const bounds = map.getBounds();
    const sw = bounds.getSouthWest();
    const ne = bounds.getNorthEast();
    const center = bounds.getCenter();
  
    const lngDiff = ne.lng - sw.lng;
    const latDiff = ne.lat - sw.lat;
  
    return new maplibregl.LngLatBounds(
      [
        center.lng - (lngDiff * (1 + bufferFactor)) / 2,
        center.lat - (latDiff * (1 + bufferFactor)) / 2,
      ],
      [
        center.lng + (lngDiff * (1 + bufferFactor)) / 2,
        center.lat + (latDiff * (1 + bufferFactor)) / 2,
      ]
    );
  };

// Converts bounds into a comma-separated string: "minLng,minLat,maxLng,maxLat"
const boundsToString = (bounds: maplibregl.LngLatBounds) => {
    const sw = bounds.getSouthWest();
    const ne = bounds.getNorthEast();
    return `${sw.lat},${sw.lng},${ne.lat},${ne.lng}`;
  };

// --- Component Implementation ---

interface MapWidgetProps {
  onStopSelect: (stop: { stop_id: string; stop_name: string }) => void;
}

export const MapWidget: React.FC = ({ }) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<maplibregl.Map | null>(null);
    const layerManagerRef = useRef<LayerManager | null>(null);
    const { viewMode, setViewMode } = useUIContext();
    const { setSelectedStop } = useMapContext();
    const [mapLoaded, setMapLoaded] = useState(false);
    const { stopsData, fetchStops, loadingStops, errorStops } = useStopmonitorDataContext();
    const { setSelectedItinerary, selectedItinerary } = useMapContext();
  
    
    // State to hold the current query bounds (the extended bounding box used for querying)
    const currentQueryBoundsRef = useRef<maplibregl.LngLatBounds | null>(null);
    const [queryBoundsState, setQueryBoundsState] = useState<maplibregl.LngLatBounds | null>(null);
    
    useEffect(() => {
        if (!mapContainerRef.current || mapRef.current) return;
    
        const map = new maplibregl.Map({
            container: mapContainerRef.current,
            style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
            center: [12.377014, 51.340613],
            zoom: 12,
          });
    
        map.on("load", () => {
            // Initialize LayerManager and mapRef
            layerManagerRef.current = new LayerManager(map);
            mapRef.current = map;
    
            // Set initial extended bounds
            const extendedBounds = getExtendedBounds(map, 0.5);
            currentQueryBoundsRef.current = extendedBounds;
            setQueryBoundsState(extendedBounds); // trigger useEffect below
            console.log("Initial query bounds:", extendedBounds);
    
            // Set up moveend listener
            map.on("moveend", () => {
                console.log("Map moveend event");
                const currentViewBounds = map.getBounds();
                if (!currentQueryBoundsRef.current || !currentViewBounds) return;
                console.log("Map bounds:", currentViewBounds);
    
                if (
                    !currentQueryBoundsRef.current.contains(currentViewBounds.getNorthEast()) ||
                    !currentQueryBoundsRef.current.contains(currentViewBounds.getSouthWest())
                ) {
                    const newExtendedBounds = getExtendedBounds(map, 0.5);
                    currentQueryBoundsRef.current = newExtendedBounds;
                    setQueryBoundsState(newExtendedBounds); // update state to trigger useEffect
                    if (newExtendedBounds)
                        console.log("New stops query due to map move:", boundsToString(newExtendedBounds));
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
                    console.log('Clicked coordinates:', coordinates, 'of type:', feature.geometry.type);
                    }
                } else {
                    console.log("Geometry type is not a Point, LineString, or Polygon");
                }

                }
            });
    
            setMapLoaded(true);
            loadLayers(viewMode);
        });

        map.on("error", (e) => {
            console.error("Map loading error:", e);
          });
    
        return () => map.remove();
    }, []);
    
    // React to changes in queryBoundsState
    useEffect(() => {
        console.log("queryBounds:", queryBoundsState);
        
        if (queryBoundsState && mapRef.current) {
            const bboxString = boundsToString(queryBoundsState);
            fetchStopsData()
        }
    }, [queryBoundsState]);
    
    // Fetch stops data
    const fetchStopsData = async () => {
        if (!currentQueryBoundsRef.current) return;
        
        console.log("Stops query:", currentQueryBoundsRef.current);
        
        await fetchStops(boundsToString(currentQueryBoundsRef.current));
        
        if (errorStops) {
            console.error("Error fetching stops:", errorStops);
            return;
        }
    };

    // React to viewmode changes
    useEffect(() => {
        if (mapRef.current) {
            loadLayers(viewMode);
        }
    }, [viewMode]);

    // React to stopsData being loaded
    useEffect(() => {
        console.log("Stops Data Updated:", stopsData);
        
        if (!loadingStops && stopsData) {
            console.log("Stops data is available, creating layers...");
            createStopsLayers();
        } else {
            console.warn("Stops data not ready yet.");
        }
    }, [stopsData, loadingStops]);


    // Update layers when view mode changes
    const loadLayers = (_viewMode: ViewMode) => {
        console.log("Loading layers for view mode:", _viewMode);

        if (!mapRef.current) return;
        if (!layerManagerRef.current) return;

        // Fetch data before loading layers
        // For all modes, we add the stops layers...

        // createStopsLayers(); - now fully handled by boundingbox observer

        // remove layers
        removeItineraryLayers(mapRef.current, layerManagerRef.current);

            // DELETE THIS - CURRENTLY NEEDED FOR DEMO BECAUSE CONTROL PANEL IS NOT CONNECTED TO CONTEXTS
             const otpPlan = toOtpResponse(mockOtpResponse).plan; 
             const itinerary = new Itinerary(
                 otpPlan.from,
                 otpPlan.to,
                 otpPlan.itineraries[0]
             )
             setSelectedItinerary(itinerary);
            // createItineraryLayers(mapRef.current, layerManagerRef.current, itinerary);
            // END DELETE

        // And if the view mode is ITINERARY, add itinerary layers too
        if (_viewMode === "ITINERARY" && selectedItinerary && mapLoaded) {
            createItineraryLayers(mapRef.current, layerManagerRef.current, selectedItinerary);
        }

        mapRef.current.resize();
    };


    




    // Update stops layers using the stops data from context
    // Function to dynamically update the stops source & layers
    const createStopsLayers = () => {
        console.log("Updating stops layers...");
        
        if (!mapRef.current || !stopsData) {
            console.warn("Map or stopsData not available.");
            return;
        }

        // Convert stopsData into GeoJSON
        const geojsonData = createStopsLayerData(stopsData);
        
        // Check if the source already exists
        const source = mapRef.current.getSource("stops-source") as maplibregl.GeoJSONSource;
        if (source) {
            // updating source data
            source.setData(geojsonData); // Update data without re-adding the source
        } else { // If source doesn't exist, create layers and interactions. Operation should only occur once per instance, unless source is removed.
            stopsSource.data = geojsonData;
            console.log("Adding stops source and layers...");
            mapRef.current.addSource("stops-source", stopsSource);

            // Add layers
            layerManagerRef.current?.addLayer(stopsLayerConfig, true, (e) => {
                const feature = (e as maplibregl.MapLayerMouseEvent).features?.[0];
                if (feature) {
                    const stopId = feature.properties?.stop_id;
                    const stopName = feature.properties?.stop_name;
                    setSelectedStop({ stop_id: stopId, stop_name: stopName });
                }
            });

            layerManagerRef.current?.addLayer(stopsLabelsLayerConfig);

            // Register cursor events
            mapRef.current.on("mouseenter", "stops-layer", () => {

                if (mapRef.current) {
                    mapRef.current.getCanvas().style.cursor = "pointer";
                }
            });

            mapRef.current.on("mouseleave", "stops-layer", () => {
                if (mapRef.current) {
                    mapRef.current.getCanvas().style.cursor = "";
                }
            });
        }
    };

    const removeItineraryLayers = (map:maplibregl.Map, layerManager: LayerManager) => {
        console.log("Removing itinerary layers...");
        
        // Remove all itinerary layers
        const layers = [
          walkLayerConfig,
          suburbLayerConfig,
          tramLayerConfig,
          trainLayerConfig,
          legStartEndLayerConfig,
          intermediateStopsLayerConfig,
        ];

        layers.forEach((layer) => layerManager.removeLayer(layer.id));

        layerManager.removeSource("itinerary-source");
    }

    // Create itinerary layers (using your existing implementation)
    // This version assumes createItineraryLayerData accepts the current itinerary (if needed)
    const createItineraryLayers = (map:maplibregl.Map, layerManager: LayerManager, selectedItinerary: Itinerary) => {
        console.log("Updating itinerary layers...");
        
        if (!selectedItinerary) {
          console.warn("Selected itinerary not available.");
          return;
        }
      
        // Convert itinerary data to GeoJSON
        const geojsonData = createItineraryLayerData(selectedItinerary);
        if (!geojsonData) return;
      
        // Check if source exists
        const source = map.getSource("itinerary-source") as maplibregl.GeoJSONSource;
        if (source) {
          console.log("Updating existing itinerary source...");
          source.setData(geojsonData);
        } else {
          console.log("Adding new itinerary source...");
          map.addSource("itinerary-source", { type: "geojson", data: geojsonData });
      
          // Add all itinerary layers (once)
          const layers = [
            walkLayerConfig,
            suburbLayerConfig,
            tramLayerConfig,
            trainLayerConfig,
            legStartEndLayerConfig,
            intermediateStopsLayerConfig,
          ];
      
          layers.forEach((layer) => layerManager.addLayer(layer));
        }
      };
      

    console.log("Rendering MapWidget. Map container ref:", mapContainerRef.current);
    return (
        <div
          ref={mapContainerRef}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
         }}
        />
      );};

export default MapWidget;
