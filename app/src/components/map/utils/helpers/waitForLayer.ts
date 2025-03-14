    // Helper function to wait for a layer to exist on the map
    const waitForLayer = (
        map: maplibregl.Map, 
        layerId: string, 
        timeout = 5000
    ): Promise<void> => {
        return new Promise((resolve, reject) => {
        const start = Date.now();
    
        const checkLayer = () => {
            if (map.getLayer(layerId)) {
                resolve();
            } else if (Date.now() - start > timeout) {
                reject(new Error(`Timeout: Layer ${layerId} was not added within ${timeout}ms`));
            } else {
                requestAnimationFrame(checkLayer);
            }
        };
    
        checkLayer();
        });
    };

export default waitForLayer;