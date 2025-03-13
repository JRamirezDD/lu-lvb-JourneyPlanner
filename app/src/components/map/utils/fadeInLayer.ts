const fadeInLayer = (map: maplibregl.Map, layerId: string, duration = 1000) => {
    if (!map.getLayer(layerId)) return; // Ensure the layer exists

    // Set initial opacity to 0
    map.setPaintProperty(layerId, "icon-opacity", 0);
    map.setPaintProperty(layerId, "text-opacity", 0);

    let startTime: number | null = null;

    function animateOpacity(timestamp: number) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1); // Normalize progress (0 → 1)

        map.setPaintProperty(layerId, "icon-opacity", progress);
        map.setPaintProperty(layerId, "text-opacity", progress);

        if (progress < 1) {
            requestAnimationFrame(animateOpacity);
        }
    }

    requestAnimationFrame(animateOpacity);
};

export default fadeInLayer;
