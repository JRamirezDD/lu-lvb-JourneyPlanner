//fetch stops info a geojson 

import { mockStopsResponse } from "@/api/stopmonitorService/dto/__mock__/stopmonitorResponse.mock";
import { toStopsResponse } from "@/api/stopmonitorService/mappers";
import { LayerConfig, SourceConfig } from "./ILayer";
import { StopsResponse } from "@/api/stopmonitorService/dto/stopmonitorResponse";

const rawItem = mockStopsResponse;
const mockItem = toStopsResponse(rawItem);

export const createStopsLayerData = (stops: StopsResponse) => {
    return stops.toGeoJson();
};

// DELETE
export const stopsLayer = () => {
    return mockItem.toGeoJson();
  };

  
  export const stopsSource: SourceConfig = {
    id: "stops-source",
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        // your features
      ],
    },
  };


  export const stopsLayerConfig: LayerConfig = {
    id: "stops-layer",
    type: "symbol",
    sourceId: stopsSource.id,
    imageUrl: "front-of-bus.png",
    imageId: "bus-icon",
    iconSize: 0.05,
    interactive: true,
    onClick: (e) => {
      const feature = e.features?.[0];
      if (feature) {
        console.log("Stop clicked:", feature.properties?.stopId);
      }
    },
  };

  export const stopsLabelsLayerConfig: LayerConfig = {
    id: "stops-labels",
    type: "symbol",
    sourceId: stopsSource.id,
    layout: {
      "text-field": ["get", "name"],
      "text-size": 12,
    },
    paint: {
      "text-color": "#000",
    },
  };
