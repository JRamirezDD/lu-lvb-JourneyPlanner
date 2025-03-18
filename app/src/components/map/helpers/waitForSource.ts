export default function waitForSource(    
    map: maplibregl.Map,
    sourceId: string,
    timeout = 5000
): Promise<void> {
    return new Promise((resolve, reject) => {
        if (!map || !sourceId) {
            reject(new Error('Map instance and sourceId are required.'));
            return;
        }

        const start = Date.now();

        const checkSourceRendered = () => {
            const features = map.querySourceFeatures(sourceId);
            if (features && features.length > 0 && map.isStyleLoaded()) { // map.isStyleLoaded might be sufficient.
                console.log(`Source '${sourceId}' rendered in ${Date.now() - start}ms.`);
                resolve();
            } else if (Date.now() - start >= timeout) {
                reject(new Error(`Timeout: Layer '${sourceId}' did not render within ${timeout}ms.`));
            } else {
                requestAnimationFrame(checkSourceRendered);
            }
        };

        // Start checking after the next render frame
        requestAnimationFrame(checkSourceRendered);
    });
}
