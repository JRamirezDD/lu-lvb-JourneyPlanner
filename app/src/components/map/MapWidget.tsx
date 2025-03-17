"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl, { Map } from "maplibre-gl";
import { useUIContext } from "@/contexts/uiContext";
import { useMapContext } from "@/contexts/mapContext";
import { LayerManager } from "./utils/ILayer";
import { ViewMode } from "@/types/ViewMode";
import { stopsLayerConfig, stopsLabelsLayerConfig, stopsSource as stopsSourceConfig, createStopsLayerData, stopsSource } from "./layers/StopsLayer";
import {
    itinerarySource,
    walkLayerConfig,
    suburbLayerConfig,
    tramLayerConfig,
    trainLayerConfig,
    legStartEndLayerConfig,
    intermediateStopsLayerConfig,
    busLayerConfig,
    createItineraryLayerData,
    destinationLayerConfig,
    originLayerConfig,
    itineraryLayerConfig
} from "./layers/ItineraryLayer";
import { Itinerary } from "@/types/Itinerary";
import { useStopmonitorDataContext } from "@/contexts/DataContext/stopmonitorDataContext";
import loadSVGImage from "@/utils/loadSVGImage";
import loadPNGImage from "@/utils/loadPNGImage";
import useLayersManager from "./utils/layersManager";
import { useNearbySearchDataContext } from "@/contexts/DataContext/nearbySearchDataContext";
import { NearBySearchParamsWithBoundingBox } from "@/api/nearbysearchService/dto/nearbysearchRequest";
import { createNearbySearchLayerData, freeFloating_stopsLayerConfig, 
    stop_stopsLayerConfig, 
    searchItemsSource,
    stop_stopsLabelsLayerConfig} from "./layers/NearbySearchLayer";
import { NearBySearchResponse, SearchItemJson } from "@/api/nearbysearchService/dto/nearbysearchResponse";
import { StopsResponse } from "@/api/stopmonitorService/dto/stopmonitorResponse";
import { plainToInstance } from "class-transformer";
import { useLocationContext } from "@/contexts/locationContext";
import { Coordinates } from "@/types/Coordinates";
import { createCurrentLocationData, currentLocationAccuracyLayerConfig, currentLocationLayerConfig, currentLocationSource } from "./layers/currentLocationLayer";
import { Location } from "@/types/Location";
import centerToLayer from "./helpers/centerToLayer";
import waitForLayer from "./helpers/waitForLayer";
import { useControLPanelContext } from "@/contexts/controlPanelContext";
import { loadAllMapIcons } from "./helpers/images";
import { getExtendedBounds, boundsToString } from "./helpers/boundingBox";


export const MapWidget: React.FC = ({ }) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<maplibregl.Map | null>(null);
    const layerManagerRef = useRef<LayerManager | null>(null);
    const { viewMode, setViewMode } = useUIContext();
    const { setSelectedStop } = useMapContext();
    const [mapLoaded, setMapLoaded] = useState(false);
    const { stopsData, fetchStops, loadingStops, errorStops } = useStopmonitorDataContext();
    const { nearBySearchData, fetchNearbySearch, loadingNearbySearch, errorNearbySearch } = useNearbySearchDataContext();
    const { setSelectedItinerary, selectedItinerary, resetCenterTrigger, resetCenterCounter, zoominLevel, zoomoutLevel } = useMapContext();
    const { setSelectedNearbySearchItem, selectedNearbySearchItem } = useMapContext();
    const { selectedStop } = useMapContext();
    const { currentLocation, locationIsEnabled } = useLocationContext();
    const { selectedItem } = useControLPanelContext();
  
    
    // State to hold the current query bounds (the extended bounding box used for querying)
    const currentQueryBoundsRef = useRef<maplibregl.LngLatBounds | null>(null);
    const [queryBoundsState, setQueryBoundsState] = useState<maplibregl.LngLatBounds | null>(null);
    
    const { reloadLayersWithNewData, setSource, updateSource, clearSource, addLayerIfNotExists, removeLayer, activeSources, activeLayers, activateSource } = useLayersManager(mapRef);


    const  storedCenter = useRef<Coordinates | null>(null); 

    useEffect(() => {
        if (!mapContainerRef.current || mapRef.current) return;
    
        const map = new maplibregl.Map({
            container: mapContainerRef.current,
            style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json", 
            center: [12.375057676911903, 51.33983432025775],
            zoom: 14,
            fadeDuration: 0
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
            loadAllMapIcons(map);

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

    // zoom level event handler
    useEffect(() => {
        if (mapRef.current) {
            const currentZoom = mapRef.current.getZoom();
            moveMap(null, currentZoom + 1, 200);
        }
    }, [zoominLevel]);

    useEffect(() => {
        if (mapRef.current) {
            const currentZoom = mapRef.current.getZoom();
            moveMap(null, currentZoom - 1, 200);
        }
    }, [zoomoutLevel]);


    // Location event handlers
    const setCenter = (coords: Coordinates): void => {
        if (mapRef.current && coords) {
            storedCenter.current = coords
        }
    }

    const moveMap = (coords?: Coordinates | null, zoomLevel?: number, duration?: number): void => {
        console.log("Moving map to:", coords, "zoom:", zoomLevel, "duration:", duration);
        if (mapRef.current) {
            mapRef.current.easeTo({
                center: coords? [coords.lon, coords.lat] : mapRef.current.getCenter(),
                zoom: zoomLevel ? zoomLevel : mapRef.current.getZoom(),
                duration: duration ? duration : undefined,
                essential: true,
            });
        }
    }

    useEffect(() => {
        if (mapRef.current && storedCenter.current && locationIsEnabled) {
            moveMap(storedCenter.current, 14, 500);
        }
    }, [resetCenterCounter]);

    // On Autocomplete item selection, move map to selected item
    useEffect(() => {
        if (mapRef.current && selectedItem && viewMode === "STATION") {
            // remove previous pin if exists?
            // add new pin?
            moveMap({ lat: selectedItem.lat, lon: selectedItem.lon }, 15.3, 500);
        }
    }, [selectedItem]);

    
    useEffect(() => {
        if (mapRef.current && locationIsEnabled && currentLocation) {
            setCenter(currentLocation.coords);
            updateCurrentLocationLayer(mapRef, layerManagerRef.current, currentLocation);
            resetCenterTrigger();
        }
    }, [locationIsEnabled, mapRef.current]);

    // Update current location icon on map when location changes
    useEffect(() => {
        if (locationIsEnabled && currentLocation) {
            setCenter(currentLocation.coords);
            updateCurrentLocationLayer(mapRef, layerManagerRef.current, currentLocation);
        }
    }, [currentLocation, locationIsEnabled]);



    
    // Bounds change event handler
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
            bb: boundsToString(currentQueryBoundsRef.current),
            types: "stop,station,mobistation"
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

    // listen to changes in itinerary
    useEffect(() => {
        // After triggering layer load
        if (mapRef.current) {
            loadLayers(mapRef, layerManagerRef.current, viewMode, stopsData, nearBySearchData, selectedItinerary);
            
            reloadItineraryLayers(mapRef, layerManagerRef.current, selectedItinerary);
            
            waitForLayer(mapRef.current, itineraryLayerConfig.id)
            .then(() => {
                if (mapRef.current)
                    centerToLayer(mapRef.current, itineraryLayerConfig.id);
                else {
                    console.error("Map reference not available.");
                }
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }, [setSelectedItinerary]);


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
        console.log("updating itinerary")
        if (!geojsonData) return;
    
        const layers = [
            walkLayerConfig, 
            suburbLayerConfig, 
            tramLayerConfig, 
            trainLayerConfig, 
            busLayerConfig,
            legStartEndLayerConfig, 
            intermediateStopsLayerConfig,
            destinationLayerConfig,
            originLayerConfig
        ];
        layers.forEach(addLayerIfNotExists);
    };

    const reloadItineraryLayers = (mapRef: React.MutableRefObject<maplibregl.Map | null>, layerManager: LayerManager | null, itinerary: Itinerary | null) => {
        if (!itinerary) return;
    
        const geojsonData = createItineraryLayerData(itinerary);
        console.log("updating itinerary")
        if (!geojsonData) return;
    
        const layers = [
            walkLayerConfig, 
            suburbLayerConfig, 
            tramLayerConfig, 
            trainLayerConfig, 
            busLayerConfig,
            legStartEndLayerConfig, 
            intermediateStopsLayerConfig,
            destinationLayerConfig,
            originLayerConfig
        ];
        layers.forEach(() => reloadLayersWithNewData("itinerary-source", geojsonData, layers));
    }

    const removeItineraryLayers = (mapRef: React.MutableRefObject<maplibregl.Map | null>, layerManager: LayerManager | null) => {
        const layers = [walkLayerConfig, suburbLayerConfig, tramLayerConfig, trainLayerConfig, legStartEndLayerConfig, intermediateStopsLayerConfig, busLayerConfig, destinationLayerConfig, originLayerConfig];
        layers.forEach(layer => removeLayer(layer.id));
        
        clearSource("itinerary-source");
    };

    // NearbySearch Layers
    const updateNearbySearchLayers = (mapRef: React.MutableRefObject<maplibregl.Map | null>, layerManager: LayerManager | null, nearbySearchData: NearBySearchResponse | null) => {
        if (!nearbySearchData) return;
        if (!mapRef.current) return;
    
        const geojsonData = createNearbySearchLayerData(nearbySearchData);
        updateSource("nearbySearch-source", geojsonData);

        //create layers 
        const layers = [
            freeFloating_stopsLayerConfig,
            stop_stopsLabelsLayerConfig,
            stop_stopsLayerConfig
            ];
        layers.forEach(addLayerIfNotExists);

        // const filteredFeatures = geojsonData.features.filter(
        //     (feature) => feature.properties.item.source === "nextbike"
        //   );
        // geojsonData.features = filteredFeatures;
        // console.log("FILTERED:" + filteredFeatures);
          //map.getSource("nearbySearch-source").setData(yourGeoJsonData);

        // Add layer click functionality
        
        const loadStopsLayerClickFunctionality = (layer_id = stop_stopsLayerConfig.id) => {
            if (!mapRef.current) return;
            mapRef.current.on("click", layer_id, (e) => {
                const feature = (e as maplibregl.MapLayerMouseEvent).features?.[0];
                if (feature) {
                    const parsed = JSON.parse(feature.properties?.item);
                    const rawObj = (Array.isArray(parsed) ? parsed[0] : parsed) as SearchItemJson;
                    const searchItemJson =  plainToInstance(SearchItemJson, rawObj);
                    console.log("Clicked nearby search item:", searchItemJson);
                    setSelectedNearbySearchItem(searchItemJson);
                }
            });
            
            // Register cursor events
            mapRef.current.on("mouseenter", layer_id, () => {
                if (mapRef.current) {
                    mapRef.current.getCanvas().style.cursor = "pointer";
                }
            });

            mapRef.current.on("mouseleave", layer_id, () => {
                if (mapRef.current) {
                    mapRef.current.getCanvas().style.cursor = "";
                }
            });
        }

        loadStopsLayerClickFunctionality(stop_stopsLayerConfig.id);

        // for (const layer of layers) {
        //     mapRef.current.on("click", layer.id, (e) => {
        //         const feature = (e as maplibregl.MapLayerMouseEvent).features?.[0];
        //         if (feature) {
        //             const parsed = JSON.parse(feature.properties?.item);
        //             const rawObj = (Array.isArray(parsed) ? parsed[0] : parsed) as SearchItemJson;
        //             const searchItemJson =  plainToInstance(SearchItemJson, rawObj);
        //             console.log("Clicked nearby search item:", searchItemJson);
        //             setSelectedNearbySearchItem(searchItemJson);
        //         }
        //     });
            
        //     // Register cursor events
        //     mapRef.current.on("mouseenter", layer.id, () => {
        //         if (mapRef.current) {
        //             mapRef.current.getCanvas().style.cursor = "pointer";
        //         }
        //     });

        //     mapRef.current.on("mouseleave", layer.id, () => {
        //         if (mapRef.current) {
        //             mapRef.current.getCanvas().style.cursor = "";
        //         }
        //     });
        // }
    };

    const removeNearbySearchLayers = (mapRef: React.MutableRefObject<maplibregl.Map | null>, layerManager: LayerManager | null) => {
        const layers = [freeFloating_stopsLayerConfig, stop_stopsLayerConfig ];
        layers.forEach(layer => removeLayer(layer.id));
    
        activeSources.current.delete("nearbysearch-source");
    };
    

    const updateCurrentLocationLayer = (mapRef: React.MutableRefObject<maplibregl.Map | null>, layerManager: LayerManager | null, currentLocation: Location | null) => {
        if (!currentLocation) return;
        if (!mapRef.current) return;

        if (!currentLocation) return;
    
        const geojsonData = createCurrentLocationData(currentLocation);
        if (!geojsonData) return;

        if (!activeSources.current.has("current-location-source")) {
            setSource("current-location-source", currentLocationSource, geojsonData);
            activateSource("current-location-source");
        }
        else {
            setSource("current-location-source", currentLocationSource, geojsonData);
        }
    
        addLayerIfNotExists(currentLocationAccuracyLayerConfig);
        addLayerIfNotExists(currentLocationLayerConfig);
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