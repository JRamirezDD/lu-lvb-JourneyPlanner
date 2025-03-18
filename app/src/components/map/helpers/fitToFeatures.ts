import { MapGeoJSONFeature } from "maplibre-gl";
import { LngLatBounds } from "maplibre-gl";

const fitToFeatures = (
    map: maplibregl.Map,
    features: MapGeoJSONFeature[]
) => {


  if (features.length) {
      // Geographic coordinates of the LineString

      // Pass the first coordinates in the LineString to `lngLatBounds` &
      // wrap each coordinate pair in `extend` to include them in the bounds
      // result. A variation of this technique could be applied to zooming
      // to the bounds of multiple Points or Polygon geometries - it just
      // requires wrapping all the coordinates with the extend method.
        // Inspired on: https://maplibre.org/maplibre-gl-js/docs/examples/zoomto-linestring/
      const coordinates = features.flatMap(feature => {
        if (feature.geometry.type === 'Point') {
          return [feature.geometry.coordinates];
        } else if (feature.geometry.type === 'LineString') {
          return feature.geometry.coordinates;
        } else if (feature.geometry.type === 'Polygon') {
          return feature.geometry.coordinates.flat();
        }
        return [];
      });
      const bounds = coordinates.reduce((bounds, coord) => {
          return bounds.extend([coord[0], coord[1]] as maplibregl.LngLatLike);
      }, new LngLatBounds(coordinates[0] as maplibregl.LngLatLike, coordinates[0] as maplibregl.LngLatLike));


      map.fitBounds(bounds, {
        padding: 100,
      });
    }
  };

export default fitToFeatures;