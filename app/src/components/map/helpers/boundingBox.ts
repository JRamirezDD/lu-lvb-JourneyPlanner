import maplibregl from "maplibre-gl";

export const getExtendedBounds = (map: maplibregl.Map, bufferFactor = 1) => {
  const bounds = map.getBounds();
  const center = bounds.getCenter();
  const lngDiff = bounds.getEast() - bounds.getWest();
  const latDiff = bounds.getNorth() - bounds.getSouth();

  return new maplibregl.LngLatBounds(
    [center.lng - (lngDiff * (1 + bufferFactor)) / 2, center.lat - (latDiff * (1 + bufferFactor)) / 2],
    [center.lng + (lngDiff * (1 + bufferFactor)) / 2, center.lat + (latDiff * (1 + bufferFactor)) / 2]
  );
};

export const boundsToString = (bounds: maplibregl.LngLatBounds) => {
  const sw = bounds.getSouthWest();
  const ne = bounds.getNorthEast();
  return `${sw.lat},${sw.lng},${ne.lat},${ne.lng}`;
};
