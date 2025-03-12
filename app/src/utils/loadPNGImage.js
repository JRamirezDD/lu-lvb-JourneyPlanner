const loadPNGImage = async (path) => {
    try {
        // Fetch the PNG file as a blob
        const response = await fetch(path);
        const blob = await response.blob();

        // Create and return an ImageBitmap directly from the blob
        return await createImageBitmap(blob);
    } catch (error) {
        console.error("Error loading PNG:", error);
        return null;
    }
};

export default loadPNGImage;
