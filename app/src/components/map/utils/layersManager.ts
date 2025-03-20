import { useRef } from "react";
import { GeoJSON } from "geojson";
import { LayerSpecification, SourceSpecification } from "maplibre-gl";
import fadeInLayer from "../helpers/fadeInLayer"; // Import fade-in function

const useLayersManager = (mapRef: React.MutableRefObject<maplibregl.Map | null>) => {
    const sources = useRef(new Map<string, any>());
    const activeSources = useRef(new Set<string>());
    const activeLayers = useRef(new Set<string>());

    const updateSource = (sourceId: string, newData: GeoJSON) => {
        if (!mapRef.current) return;

        const existingSource = sources.current.get(sourceId);
        if (existingSource && JSON.stringify(existingSource) === JSON.stringify(newData)) {
            console.log(`Source ${sourceId} unchanged, skipping update.`);
            return;
        }

        const source = mapRef.current.getSource(sourceId) as maplibregl.GeoJSONSource;
        if (source) {
            source.setData(newData);
        } else {
            console.log(`Adding new source: ${sourceId}`);
            mapRef.current.addSource(sourceId, { type: "geojson", data: newData });
            activateSource(sourceId);
        }

        sources.current.set(sourceId, newData);
    };

    const removeSource = (sourceId: string) => {
        if (!mapRef.current) return;
        if (sources.current.has(sourceId)) {
            console.log(`Deleting source data ${sourceId}.`);
            mapRef.current.removeSource(sourceId);
            sources.current.delete(sourceId);
            activeSources.current.delete(sourceId);
        } else {
            console.log(`Source ${sourceId} not found.`);
        }
    }

    const activateSource = (sourceId: string) => {
        if (!mapRef.current) return;

        if (activeSources.current.has(sourceId)) {
            console.log(`Source ${sourceId} already active.`);
            return;
        } else {
            console.log(`Activating source ${sourceId}.`);
            activeSources.current.add(sourceId);
        }
    };

    const clearSource = (sourceId: string) => {
        if (!mapRef.current) return;
        if (sources.current.has(sourceId)) {
            console.log(`Deleting source data ${sourceId}.`);
            mapRef.current.removeSource(sourceId);
            sources.current.delete(sourceId);
            activeSources.current.delete(sourceId);
        } else {
            console.log(`Source ${sourceId} not found.`);
        }
    };

    const addLayerIfNotExists = (layerConfig: LayerSpecification, fade_in_duration = 500) => {
        if (!mapRef.current) return;
        if (activeLayers.current.has(layerConfig.id)) {
            console.log(`Layer ${layerConfig.id} already exists.`);
            return;
        }
        else {
            console.info(`Layer ${layerConfig.id} not found, adding...`);
    
            // with fade-in effect
            if (mapRef.current.getLayer('current-location-layer')) {
                fadeInLayer(mapRef.current!, layerConfig, fade_in_duration, 'current-location-layer');
            } else {
                // If 'current-location-layer' doesn't exist, add the layer at the top
                fadeInLayer(mapRef.current!, layerConfig, fade_in_duration);
            }
            activeLayers.current.add(layerConfig.id);
            console.log(`Added layer: ${layerConfig.id}`);
        }
    };
    

    const removeLayer = (layerId: string) => {
        if (!mapRef.current) return;
        if (activeLayers.current.has(layerId)) {
            mapRef.current.removeLayer(layerId);
            activeLayers.current.delete(layerId);
            console.log(`Removed layer: ${layerId}`);
        }
    };

    const printActiveLayers = () => {
        console.log("Active layers:");
        activeLayers.current.forEach(layerId => console.log(layerId));
    };

    const setSource = (sourceId: string, sourceSpecification: SourceSpecification, newData: GeoJSON) => {
        if (!mapRef.current) return;
        let source = mapRef.current.getSource(sourceId) as maplibregl.GeoJSONSource;
        if (!source) {
            mapRef.current.addSource(sourceId, sourceSpecification);
        }
        source = mapRef.current.getSource(sourceId) as maplibregl.GeoJSONSource;
        source.setData(newData);
    };

    return { setSource, updateSource, activateSource, clearSource, addLayerIfNotExists, removeLayer, activeSources, activeLayers };
};

export default useLayersManager;
