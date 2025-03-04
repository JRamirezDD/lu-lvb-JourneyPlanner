const useLayersManager = (mapRef: React.MutableRefObject<maplibregl.Map | null>) => {
    const activeSources = new Map<string, any>(); // Stores active source data
    const activeLayers = new Set<string>(); // Tracks added layers

    const updateSource = (sourceId: string, newData: any) => {
        if (!mapRef.current) return;

        const existingSource = activeSources.get(sourceId);
        if (existingSource && JSON.stringify(existingSource) === JSON.stringify(newData)) {
            console.log(`Source ${sourceId} unchanged, skipping update.`);
            return;
        }

        activeSources.set(sourceId, newData); // Store the new source data

        const source = mapRef.current.getSource(sourceId) as maplibregl.GeoJSONSource;
        if (source) {
            source.setData(newData);
        } else {
            console.log(`Adding new source: ${sourceId}`);
            mapRef.current.addSource(sourceId, { type: "geojson", data: newData });
        }
    };

    const addLayerIfNotExists = (layerConfig: any) => {
        if (!mapRef.current) return;
        if (!activeLayers.has(layerConfig.id)) {
            mapRef.current.addLayer(layerConfig);
            activeLayers.add(layerConfig.id);
            console.log(`Added layer: ${layerConfig.id}`);
        }
    };

    const removeLayer = (layerId: string) => {
        if (!mapRef.current) return;
        if (activeLayers.has(layerId)) {
            mapRef.current.removeLayer(layerId);
            activeLayers.delete(layerId);
            console.log(`Removed layer: ${layerId}`);
        }
    };

    return { updateSource, addLayerIfNotExists, removeLayer, activeSources, activeLayers };
};

export default useLayersManager;