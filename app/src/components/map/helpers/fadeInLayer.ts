import { LayerSpecification } from "maplibre-gl";

const fadeInLayer = (
    map: maplibregl.Map,
    layerConfig: LayerSpecification,
    duration = 500
) => {


            // Save original paint properties
            const originalPaint: { [key: string]: any } = layerConfig.paint ? { ...layerConfig.paint } : {};


            // Modify layerConfig to start with opacity 0
            const modifiedLayerConfig: maplibregl.LayerSpecification = {
                ...layerConfig,
            };

            if (layerConfig.type === "line") {
                modifiedLayerConfig.paint = {
                    ...modifiedLayerConfig.paint,
                    "line-opacity": 0,
                };
            }

            if (layerConfig.type === "fill") {
                modifiedLayerConfig.paint = {
                    ...modifiedLayerConfig.paint,
                    "fill-opacity": 0,
                };
            }

            if (layerConfig.type === "circle") {
                modifiedLayerConfig.paint = {
                    ...modifiedLayerConfig.paint,
                    "circle-opacity": 0,
                    "circle-stroke-opacity": 0,
                };
            }

            if (layerConfig.type === "symbol") {
                modifiedLayerConfig.paint = {
                    ...modifiedLayerConfig.paint,
                    "icon-opacity": 0,
                    "text-opacity": 0,
                };
            }

            if (layerConfig.type === "raster") {
                modifiedLayerConfig.paint = {
                    ...modifiedLayerConfig.paint,
                    "raster-opacity": 0,
                };
            }

            if (layerConfig.type === "fill-extrusion") {
                modifiedLayerConfig.paint = {
                    ...modifiedLayerConfig.paint,
                    "fill-extrusion-opacity": 0,
                };
            }

            if (layerConfig.type === "heatmap") {
                modifiedLayerConfig.paint = {
                    ...modifiedLayerConfig.paint,
                    "heatmap-opacity": 0,
                };
            }

            map.addLayer(modifiedLayerConfig);


    let startTime: number | null = null;

    function animateOpacity(timestamp: number) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1); // Normalize progress (0 → 1)

        Object.keys(originalPaint).forEach((property) => {
            if (property.includes("opacity")) {
                const originalValue = originalPaint[property];
                if (Array.isArray(originalValue)) {
                    // If it's an interpolation function, restore it fully
                    map.setPaintProperty(layerConfig.id, property, originalValue);
                } else {
                    const currentValue = originalValue * progress;
                    map.setPaintProperty(layerConfig.id, property, currentValue);
                }
            }
        });

        if (progress < 1) {
            requestAnimationFrame(animateOpacity);
        } else {
            // fallback for special paint properties
            Object.keys(originalPaint).forEach((property) => {
                const originalValue = originalPaint[property];
                map.setPaintProperty(layerConfig.id, property, originalValue);
            });
        }
    }

    requestAnimationFrame(animateOpacity);
};

export default fadeInLayer;
