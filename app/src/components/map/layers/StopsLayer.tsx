//fetch stops info a geojson 

import { mockStopsResponse } from "@/api/stopmonitorService/dto/__mock__/stopmonitorResponse.mock";
import { toStopsResponse } from "@/api/stopmonitorService/mappers";
import { StopsResponse } from "@/api/stopmonitorService/dto/stopmonitorResponse";
import { GeoJSONSourceSpecification, SourceSpecification } from "maplibre-gl";

const rawItem = mockStopsResponse;
const mockItem = toStopsResponse(rawItem);


// Function to generate GeoJSON dynamically from API response
export const createStopsLayerData = (stops: StopsResponse): GeoJSON.FeatureCollection => {
  return stops.toGeoJson();
};

// Stops source definition
export const stopsSource: GeoJSONSourceSpecification = {
  type: "geojson",
  data: {
    type: "FeatureCollection",
    features: [],
  },
};




  // export const stopsLayerConfig: LayerConfig = {
  //   id: "stops-layer",
  //   type: "symbol",
  //   sourceId: stopsSource.id,
  //   imageUrl: "front-of-bus.png",
  //   imageId: "bus-icon",
  //   iconSize: 0.05,
  //   interactive: true,
  //   onClick: (e) => {
  //     const feature = e.features?.[0];
  //     if (feature) {
  //       console.log("Stop clicked:", feature.properties?.stopId);
  //     }
  //   },
  // };

  import { LayerSpecification } from "maplibre-gl";

  // Stops Layer (Circle Style)
  export const stopsLayerConfig: LayerSpecification = {
    id: "stops-layer",
    type: "circle",
    source: "stops-source",
    paint: {
      "circle-radius": 4,
      "circle-color": "#ff0000",
      "circle-stroke-width": 1,
      "circle-stroke-color": "#000",
    },
  };
  
  // Stops Labels Layer
  export const stopsLabelsLayerConfig: LayerSpecification = {
    id: "stops-labels",
    type: "symbol",
    source: "stops-source",
    layout: {
      "text-field": ["get", "name"],
      "text-size": 12,
      "text-offset": [0, 1.2], // Better text positioning
      "text-anchor": "top",
    },
    paint: {
      "text-color": "#000",
      "text-halo-color": "#fff",
      "text-halo-width": 1,
    },
  };
  