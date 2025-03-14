const loadSVGImage = async (path: string, targetSize: number = 64): Promise<HTMLImageElement | null> => {
    try {
        const response = await fetch(path);
        const svgText = await response.text();

        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = (err) => reject(err);

            // **Set the target display resolution**
            img.width = targetSize;
            img.height = targetSize;

            // **Convert SVG to Base64**
            const base64SVG = btoa(unescape(encodeURIComponent(svgText)));
            img.src = `data:image/svg+xml;base64,${base64SVG}`;
        });
    } catch (error) {
        console.error("Error loading SVG:", error);
        return null;
    }
};

export default loadSVGImage;
