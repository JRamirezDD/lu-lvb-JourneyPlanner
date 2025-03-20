import { test, expect } from '@playwright/test';

// Assuming you have mapController and mapLocator defined or imported correctly
// If not, you'll need to set up your test environment to provide these functionalities.

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/lu-lvb-JourneyPlanner/en'); // Replace with your URL

    // Wait for the map container to be present in the DOM
    await page.waitForSelector('#map-component');

    // Wait for the map to load. You might need to adjust the selector and timeout.
    await page.waitForSelector('.maplibregl-canvas');
    await page.waitForTimeout(5000);

    // Wait for the map's 'load' event using page.evaluate()
    const mapLoaded = await page.evaluate(() => {
        return new Promise((resolve) => {
            if ((window as any).map) {
                (window as any).map.on('load', () => {
                    resolve(true);
                });
            } else {
                resolve(false);
            }
        });
    });

    expect(mapLoaded).toBe(true);

    // Assuming you have a marker layer with id 'marker'
    // and that mapLocator can find it.
    // If you are using a different method to add markers, you will need to adjust this.
    const markerExists = await page.evaluate(() => {
        const map = (window as any).map;
        if(map){
            const markerLayer = map.getStyle().layers.find((layer: { id: string; }) => layer.id === 'nb_stops-layer');
            console.log("MARKER:", markerLayer);
            if(markerLayer){
                //check if there are any features in the data source.
                const source = map.getSource(markerLayer['source']);
                if(source){
                    //This depends on how your markers are added.
                    //If they are added with geojson, you can check the features.
                    //If they are added with html markers, you will need to check those.
                    if(source.type === 'geojson'){
                        const data = (source as any)._data;
                        if(data && data.features && data.features.length > 0){
                            return true;
                        }
                    } else {
                        //check for html markers.
                        const markers = document.getElementsByClassName('maplibregl-marker');
                        if(markers && markers.length > 0){
                            return true;
                        }

                    }
                } else {
                    console.log("Source doesn't exist");
                }
            }
        } else {
            console.log("Map doesn't exist");
        }
        return false;
    });

    expect(markerExists).toBe(true);

});