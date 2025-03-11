import { NearBySearchResponse } from "@/api/nearbysearchService/dto/nearbysearchResponse";
import { toNearBySearchResponse } from "@/api/nearbysearchService/mappers";
import { GeoJSONSourceSpecification, LayerSpecification, ExpressionFilterSpecification  } from "maplibre-gl";

// Function to generate GeoJSON dynamically from API response
export const createNearbySearchLayerData = (searchItems: NearBySearchResponse): GeoJSON.FeatureCollection => {
  const searchItemsGeoJson = searchItems.toGeoJson();
  console.log("SearchItems GeoJSON:", searchItemsGeoJson);
  return searchItemsGeoJson;
};

// Stops source definition
export const searchItemsSource: GeoJSONSourceSpecification = {
  type: "geojson",
  data: {
    type: "FeatureCollection",
    features: [],
  },
};

//free floating. 
export const freeFloating_stopsLayerConfig: LayerSpecification = {
    id: "nb_stops-layer",
    type: "circle",
    source: "nearbySearch-source",
    minzoom: 14,
    maxzoom: 22,
    paint: {
      "circle-radius": 5,
      "circle-color": "red",
    },
    filter: ["==", ["get", "type"], "free_floating"],
};


export const stop_stopsLayerConfig: LayerSpecification = {
  id: "stop_stops-layer",
  type: "symbol",
  source: "nearbySearch-source",
  minzoom: 14,
  maxzoom: 22,
  layout: {
      "icon-image": "haltestelle",
      "icon-size": 0.02,
  },
  filter: ["==", ["get", "type"], "stop"],
};

export const ticketMachine_stopsLayerConfig: LayerSpecification = {
  id: "stop_stops-layer",
  type: "symbol",
  source: "nearbySearch-source",
  minzoom: 14,
  maxzoom: 22,
  layout: {
      "icon-image": "ticket", 
      "icon-size": 4.022,
  },
  filter: ["==", ["get", "type"], "ticket-machine"],
};

// nextbike, Taxi, eScooter 
export const taxi_station_stopsLayerConfig: LayerSpecification = {
  id: "taxi_station_stops-layer",
  type: "symbol",
  source: "nearbySearch-source",
  minzoom: 14,
  maxzoom: 22,
  layout: {
    "icon-image": "taxi", 
    "icon-size": .16,
},
  filter: ["==", ["get", "source", ["get", "item", ["properties"]]], "taxi"]
};

export const escooter_station_stopsLayerConfig: LayerSpecification = {
  id: "escooter_station_stops-layer",
  type: "symbol",
  source: "nearbySearch-source",
  minzoom: 14,
  maxzoom: 22,
  layout: {
    "icon-image": "scooter", 
    "icon-size": .029,
},
  filter: ["==", ["get", "source", ["get", "item", ["properties"]]], "escooter"]
};

export const nextbike_station_stopsLayerConfig: LayerSpecification = {
  id: "nextbike_station_stops-layer",
  type: "symbol",
  source: "nearbySearch-source",
  minzoom: 14,
  maxzoom: 22,
  layout: {
    "icon-image": "nextbike", 
    "icon-size": .16,
},
  filter: ["==", ["get", "source", ["get", "item", ["properties"]]], "nextbike"]
};

export const mobistation_stopsLayerConfig: LayerSpecification = {
  id: "mobistation_stops-layer",
  type: "circle",
  source: "nearbySearch-source",
  minzoom: 14,
  maxzoom: 22,
  paint: {
    "circle-radius": 5,
    "circle-color": "black",
  },
  filter: ["==", ["get", "type"], "mobistation"],
};


//free_floating, stop, ticket-machine, station, mobistation 