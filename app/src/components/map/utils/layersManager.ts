import { useRef } from "react";
import { GeoJSON } from "geojson";

const useLayersManager = (mapRef: React.MutableRefObject<maplibregl.Map | null>) => {
    const activeSources = useRef(new Map<string, any>());
    const activeLayers = useRef(new Set<string>());

    const updateSource = (sourceId: string, newData: GeoJSON) => {
        if (!mapRef.current) return;

        const existingSource = activeSources.current.get(sourceId);
        if (existingSource && JSON.stringify(existingSource) === JSON.stringify(newData)) {
            console.log(`Source ${sourceId} unchanged, skipping update.`);
            return;
        }

        activeSources.current.set(sourceId, newData);

        const source = mapRef.current.getSource(sourceId) as maplibregl.GeoJSONSource;
        if (source) {
            source.setData(newData);
        } else {
            console.log(`Adding new source: ${sourceId}`);
            mapRef.current.addSource(sourceId, { type: "geojson", data: newData });
        }
    };

    const clearSource = (sourceId: string) => {
        if (!mapRef.current) return;
        if (activeSources.current.has(sourceId)) {
            console.log(`Deleting source data ${sourceId}.`);
            mapRef.current.removeSource(sourceId);
            activeSources.current.delete(sourceId);
        } else {
            console.log(`Source ${sourceId} not found.`);
        }
    };

    const addLayerIfNotExists = (layerConfig: any) => {
        if (!mapRef.current) return;
        if (!activeLayers.current.has(layerConfig.id)) {
            console.info(`Layer ${layerConfig.id} not found in ${printActiveLayers()}, adding...`);
            mapRef.current.addLayer(layerConfig);
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

    return { updateSource, clearSource, addLayerIfNotExists, removeLayer, activeSources, activeLayers };
};

export default useLayersManager;
