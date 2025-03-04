// none of the common methods to convert SVG images to ImageBitmaps worked in chrome.
// This method is a workaround to convert SVG images to ImageBitmaps.
// It fetches the SVG file, creates a new Image object, and then draws the SVG onto a canvas.

// Credits:
// author: cacheflowe
// source: https://gist.github.com/cacheflowe/99f4877f0daeac255ff4192ab28c84fe

const loadSVGImage = async (path) => {
    try {
        const response = await fetch(path);
        const svgText = await response.text();

        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                // Create a canvas to convert SVG into a raster image
                const canvas = document.createElement("canvas");
                canvas.width = img.width || 64;  // Default width
                canvas.height = img.height || 64; // Default height
                const ctx = canvas.getContext("2d");

                // Draw SVG onto canvas
                ctx.drawImage(img, 0, 0);

                // Convert canvas to ImageBitmap
                createImageBitmap(canvas)
                    .then((imageBitmap) => resolve(imageBitmap))
                    .catch((err) => reject(err));
            };
            img.onerror = (err) => reject(err);

            // Convert SVG text into a data URL
            const svgBlob = new Blob([svgText], { type: "image/svg+xml" });
            const url = URL.createObjectURL(svgBlob);
            img.src = url;
        });

    } catch (error) {
        console.error("Error loading SVG:", error);
        return null;
    }
};

export default loadSVGImage;
