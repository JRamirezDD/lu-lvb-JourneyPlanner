"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl, { Map } from "maplibre-gl";
import { useUIContext } from "@/contexts/uiContext";
import { useMapContext } from "@/contexts/mapContext";
import { LayerManager } from "./utils/ILayer";
import { busLayerConfig, createItineraryLayerData } from "./layers/ItineraryLayer";
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
import loadSVGImage from "@/utils/loadSVGImage";
import useLayersManager from "./utils/layersManager";
import { useNearbySearchDataContext } from "@/contexts/DataContext/nearbySearchDataContext";
import { NearBySearchParamsWithBoundingBox } from "@/api/nearbysearchService/dto/nearbysearchRequest";
import { createNearbySearchLayerData, freeFloating_stopsLayerConfig, mobistation_stopsLayerConfig, station_stopsLayerConfig, 
    ticketMachine_stopsLayerConfig, stop_stopsLayerConfig } from "./layers/NearbySearchLayer";
import { NearBySearchResponse } from "@/api/nearbysearchService/dto/nearbysearchResponse";
import { StopsResponse } from "@/api/stopmonitorService/dto/stopmonitorResponse";

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
    const { nearBySearchData, fetchNearbySearch, loadingNearbySearch, errorNearbySearch } = useNearbySearchDataContext();
    const { setSelectedItinerary, selectedItinerary } = useMapContext();
  
    
    // State to hold the current query bounds (the extended bounding box used for querying)
    const currentQueryBoundsRef = useRef<maplibregl.LngLatBounds | null>(null);
    const [queryBoundsState, setQueryBoundsState] = useState<maplibregl.LngLatBounds | null>(null);
    
    const { updateSource, clearSource, addLayerIfNotExists, removeLayer, activeSources, activeLayers, activateSource } = useLayersManager(mapRef);


    useEffect(() => {
        if (!mapContainerRef.current || mapRef.current) return;
    
        const map = new maplibregl.Map({
            container: mapContainerRef.current,
            style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
            center: [12.377014, 51.340613],
            zoom: 14,
          });
    
        map.on("load", () => {
            // Initialize LayerManager and mapRef
            layerManagerRef.current = new LayerManager(map);
            mapRef.current = map;
    
            // Set initial extended bounds
            const extendedBounds = getExtendedBounds(map, 0.5);
            currentQueryBoundsRef.current = extendedBounds;
            setQueryBoundsState(extendedBounds); // trigger useEffect below
            //console.log("Initial query bounds:", extendedBounds);
    
            // Load Images
            const loadImages = () => {
                loadSVGImage("/lu-lvb-JourneyPlanner/icons/haltestelle.svg").then((image) => {
                    if (!map.hasImage("haltestelle")) {
                        map.addImage("haltestelle", image as HTMLImageElement | ImageBitmap);
                    }
                }).catch((error) => {
                    throw error;
                });
            };
            loadImages();

            // Set up moveend listener
            map.on("moveend", () => {
                console.log("Map moveend event");
                const currentViewBounds = map.getBounds();
                if (!currentQueryBoundsRef.current || !currentViewBounds) return;
                //console.log("Map bounds:", currentViewBounds);
    
                if (
                    !currentQueryBoundsRef.current.contains(currentViewBounds.getNorthEast()) ||
                    !currentQueryBoundsRef.current.contains(currentViewBounds.getSouthWest())
                ) {
                    const newExtendedBounds = getExtendedBounds(map, 0.5);
                    currentQueryBoundsRef.current = newExtendedBounds;
                    setQueryBoundsState(newExtendedBounds); // update state to trigger useEffect
                    // if (newExtendedBounds)
                    //     console.log("New stops query due to map move:", boundsToString(newExtendedBounds));
                }
            });

            // Click listener for Mapbox pre-loaded layers
            map.on('click', (e) => {
                // const features = map.queryRenderedFeatures(e.point);
                // if (features && features.length > 0) {
                // const feature = features[0];
                // if (feature.geometry.type === 'Point' || feature.geometry.type === 'LineString' || feature.geometry.type === 'Polygon') {
                //     if (feature.geometry.coordinates) {
                //     const coordinates = feature.geometry.coordinates;
                //     console.log('Clicked coordinates:', coordinates, 'of type:', feature.geometry.type);
                //     }
                // } else {
                //     console.log("Geometry type is not a Point, LineString, or Polygon");
                // }

                // }
            });
    
            setMapLoaded(true);
            loadLayers(mapRef, layerManagerRef.current, viewMode, stopsData, nearBySearchData, selectedItinerary);
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
            fetchNearbySearchData();
        }
    }, [queryBoundsState]);
    
    // Fetch stops data
    const fetchStopsData = async () => {
        if (!currentQueryBoundsRef.current) return;
                
        await fetchStops(boundsToString(currentQueryBoundsRef.current));
        
        if (errorStops) {
            console.error("Error fetching stops:", errorStops);
            return;
        }
    };

    // Fetch nearby search data
    const fetchNearbySearchData = async () => {
        if (!currentQueryBoundsRef.current) return;
                
        await fetchNearbySearch({ 
            bb: boundsToString(currentQueryBoundsRef.current)
        } as NearBySearchParamsWithBoundingBox);
        
        if (errorStops) {
            console.error("Error fetching stops:", errorStops);
            return;
        }
    };

    // React to viewmode changes
    useEffect(() => {
        if (mapRef.current) {
            loadLayers(mapRef, layerManagerRef.current, viewMode, stopsData, nearBySearchData, selectedItinerary);
        }
    }, [viewMode]);

    // React to stopsData being loaded
    useEffect(() => {
       // console.log("Stops Data Updated:", stopsData);
        
        if (!loadingStops && stopsData) {
            console.log("Stops data is available, creating layers...");
            loadLayers(mapRef, layerManagerRef.current, viewMode, stopsData, nearBySearchData, selectedItinerary);
        } else {
            console.warn("Stops data not ready yet.");
        }
    }, [stopsData, loadingStops]);

    // React to nearbySearchData changes
    useEffect(() => {

        if (!loadingNearbySearch && nearBySearchData) {
            console.log("Nearby Search data is available, creating layers...");
            loadLayers(mapRef, layerManagerRef.current, viewMode, stopsData, nearBySearchData, selectedItinerary);
        } else {
            console.warn("Nearby Search data not ready yet.");
        }
    }, [nearBySearchData, loadingNearbySearch]);


    const loadLayers = (
        mapRef: React.MutableRefObject<maplibregl.Map | null>,
        layerManager: LayerManager | null,
        viewMode: ViewMode,
        stopsData: StopsResponse | null,
        nearbySearchData: NearBySearchResponse | null,
        itinerary: Itinerary | null
    ) => {
        if (!mapRef.current) return;
    
        // if (["DEFAULT", "ITINERARY", "PLAN", "STATION"].includes(viewMode)) {
        //     updateStopsLayers(mapRef, layerManager, stopsData);
        // }

        if (["DEFAULT", "ITINERARY", "PLAN", "STATION"].includes(viewMode)) {
            updateNearbySearchLayers(mapRef, layerManager, nearbySearchData);
        }
    
        if (viewMode === "ITINERARY") {
            updateItineraryLayers(mapRef, layerManager, itinerary);
        } else {
            removeItineraryLayers(mapRef, layerManager);
        }
    
        mapRef.current.resize();
    };

    // Stops Layers
    const updateStopsLayers = (mapRef: React.MutableRefObject<maplibregl.Map | null>, layerManager: LayerManager | null, stopsData: any) => {
        if (!stopsData) return;
        if (!mapRef.current) return;
    
        const geojsonData = createStopsLayerData(stopsData);
        updateSource("stops-source", geojsonData);
        
        if (!activeSources.current.has("stops-source")) {
            // add click functionality
            mapRef.current.on("click", "stops-layer", (e) => {
                const feature = (e as maplibregl.MapLayerMouseEvent).features?.[0];
                if (feature) {
                    const stopId = feature.properties?.stop_id;
                    const stopName = feature.properties?.stop_name;
                    setSelectedStop({ stop_id: stopId, stop_name: stopName });
                }
            });
            
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

            activateSource("stops-source");
        }
        
        addLayerIfNotExists(stopsLayerConfig);
        addLayerIfNotExists(stopsLabelsLayerConfig);
    };

    const removeStopsLayers = (mapRef: React.MutableRefObject<maplibregl.Map | null>, layerManager: LayerManager | null) => {
        removeLayer(stopsLayerConfig.id);
        removeLayer(stopsLabelsLayerConfig.id);
        
        activeSources.current.delete("stops-source");
    }
    
    // Itinerary Layers
    const updateItineraryLayers = (mapRef: React.MutableRefObject<maplibregl.Map | null>, layerManager: LayerManager | null, itinerary: Itinerary | null) => {
        if (!itinerary) return;
    
        const geojsonData = createItineraryLayerData(itinerary);
        if (!geojsonData) return;
        updateSource("itinerary-source", geojsonData);

        if (!activeSources.current.has("itinerary-source")) {
            activateSource("itinerary-source");
        }
    
        const layers = [walkLayerConfig, suburbLayerConfig, tramLayerConfig, trainLayerConfig, legStartEndLayerConfig, intermediateStopsLayerConfig, busLayerConfig];
        layers.forEach(addLayerIfNotExists);
    };

    const removeItineraryLayers = (mapRef: React.MutableRefObject<maplibregl.Map | null>, layerManager: LayerManager | null) => {
        const layers = [walkLayerConfig, suburbLayerConfig, tramLayerConfig, trainLayerConfig, legStartEndLayerConfig, intermediateStopsLayerConfig, busLayerConfig];
        layers.forEach(layer => removeLayer(layer.id));
        
        clearSource("itinerary-source");
    };

    // NearbySearch Layers
    const updateNearbySearchLayers = (mapRef: React.MutableRefObject<maplibregl.Map | null>, layerManager: LayerManager | null, nearbySearchData: NearBySearchResponse | null) => {
        if (!nearbySearchData) return;
    
        const geojsonData = createNearbySearchLayerData(nearbySearchData);
        updateSource("nearbySearch-source", geojsonData);
    
        const layers = [nb_stopsLayerConfig];
        layers.forEach(addLayerIfNotExists);
    };

    const removeNearbySearchLayers = (mapRef: React.MutableRefObject<maplibregl.Map | null>, layerManager: LayerManager | null) => {
        const layers = [freeFloating_stopsLayerConfig, stop_stopsLayerConfig, ticketMachine_stopsLayerConfig, station_stopsLayerConfig, mobistation_stopsLayerConfig ];
        layers.forEach(layer => removeLayer(layer.id));
    
        activeSources.current.delete("nearbysearch-source");
    };
    

      

    //console.log("Rendering MapWidget. Map container ref:", mapContainerRef.current);
    return (
        <div
          ref={mapContainerRef}
          role="region"
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
         }}
        />
      );};

export default MapWidget;
