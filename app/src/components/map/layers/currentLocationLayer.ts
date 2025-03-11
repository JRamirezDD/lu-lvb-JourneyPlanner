import { Coordinates } from "@/types/Coordinates";
import { GeoJSONSourceSpecification, LayerSpecification } from "maplibre-gl";


export const createCurrentLocationData = (coords: Coordinates): GeoJSON.FeatureCollection => {
    const coordsGeoJSON: GeoJSON.FeatureCollection = {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [coords.lon, coords.lat],
                },
                properties: {
                    type: "Point",
                },
            }
        ],
    };
  
    console.log("Coordinates GeoJSON:", coordsGeoJSON);
    return coordsGeoJSON;
}

export const currentLocationSource: GeoJSONSourceSpecification = {
  type: "geojson",
  data: {
    type: "FeatureCollection",
    features: [],
  },
};

export const currentLocationLayerConfig: LayerSpecification = {
  id: "current-location-layer",
  type: "symbol",
  source: "current-location-source",
  layout: {
      "icon-image": "current-location-icon",
      "icon-size": 0.15,
  }
};