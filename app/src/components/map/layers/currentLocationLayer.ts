import { Coordinates } from "@/types/Coordinates";
import { Location } from "@/types/Location";
import { GeoJSONSourceSpecification, LayerSpecification, SourceSpecification } from "maplibre-gl";
import { FeatureCollection, Feature, Point } from "geojson";
import { createAccuracyCircle } from "@/utils/createAccuracyCircle";

export const createCurrentLocationData = (location: Location): FeatureCollection => {
    const { lon, lat } = location.coords;
    
    // Create the point feature
    const pointFeature: Feature<Point> = {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [lon, lat],
      },
      properties: {
        featureType: "location",
        timestamp: location.timestamp,
        heading: location.heading,
        speed: location.speed,
        accuracy: location.accuracy,
      },
    };
    
    // Create the accuracy circle polygon using Turf.js
    const circleFeature = createAccuracyCircle(lon, lat, location.accuracy);
    circleFeature.properties = { featureType: "accuracy" };
  
    return {
      type: "FeatureCollection",
      features: [circleFeature, pointFeature],
    };
  };
  

// GeoJSON source for current location
export const currentLocationSource : SourceSpecification = {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [],
    },
  };
  
// Fill layer for the accuracy circle
export const currentLocationAccuracyLayerConfig : LayerSpecification = {
  id: "current-location-accuracy-layer",
  type: "fill",
  source: "current-location-source",
  filter: ["==", ["get", "featureType"], "accuracy"],
  paint: {
    "fill-color": "blue",
    "fill-opacity": 0.1,
  },
};
  
// Symbol layer for the current location icon
export const currentLocationLayerConfig : LayerSpecification = {
  id: "current-location-layer",
  type: "symbol",
  source: "current-location-source",
  filter: ["==", ["get", "featureType"], "location"],
  layout: {
    "icon-image": "current-location-icon",
    "icon-size": 0.20,
  },
};
  