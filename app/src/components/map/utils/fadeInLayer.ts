const fadeInLayer = (
    map: maplibregl.Map,
    layerId: string,
    originalPaint: Record<string, any>, // Pass the original opacity values
    duration = 1000
) => {
    if (!map.getLayer(layerId)) return;

    let startTime: number | null = null;

    function animateOpacity(timestamp: number) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1); // Normalize progress (0 → 1)

        if (progress < 1) {
            requestAnimationFrame(animateOpacity);
        } else {
            Object.keys(originalPaint).forEach((property) => {
                const originalValue = originalPaint[property];
                map.setPaintProperty(layerId, property, originalValue);
            });
        }
    }

    requestAnimationFrame(animateOpacity);
};

export default fadeInLayer;
