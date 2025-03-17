const centerToLayer = (
    map: maplibregl.Map,
    layerId: string
) => {
console.log("Centering to layer:", layerId);

if (map.getLayer(layerId)) return;

const features = map.queryRenderedFeatures({ layers: [layerId] });
console.log(features);

if (features.length) {
  // Initialize bounds with extreme values.
  const bounds = features.reduce(
    (acc, feature) => {
      if (feature.geometry && feature.geometry.bbox) {
        const [minX, minY, maxX, maxY] = feature.geometry.bbox;
        return [
          Math.min(acc[0], minX),
          Math.min(acc[1], minY),
          Math.max(acc[2], maxX),
          Math.max(acc[3], maxY)
        ];
      }
      return acc;
    },
    [Infinity, Infinity, -Infinity, -Infinity]
  );

  // Ensure valid bounds were computed.
  if (
    bounds[0] !== Infinity &&
    bounds[1] !== Infinity &&
    bounds[2] !== -Infinity &&
    bounds[3] !== -Infinity
  ) {
    map.fitBounds(
      [
        [bounds[0], bounds[1]],
        [bounds[2], bounds[3]]
      ],
      { padding: 20 }
    );
  } else {
    console.log("No valid bounding box found for layer:", layerId);
  }
} else {
  console.log("No features found for layer:", layerId);
}
};

export default centerToLayer;