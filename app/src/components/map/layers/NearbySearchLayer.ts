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
  minzoom: 13.5, // Lowered to ensure it exists before fading in
  maxzoom: 22,
  layout: {
    "icon-image": "haltestelle",
    "icon-size": 0.065,
  },
  paint: {
    "icon-opacity": [
      "interpolate",
      ["linear"],
      ["zoom"],
      13.9, 0, // Fully transparent at zoom 13.5
      14, 1    // Fully visible at zoom 14
    ]
  },
  filter: ["==", ["get", "type"], "stop"],
};


  // Stops Labels Layer
  export const stop_stopsLabelsLayerConfig: LayerSpecification = {
    id: "stops-labels",
    type: "symbol",
    source: "nearbySearch-source",
    minzoom: 14, // Lowered to ensure it exists before fading in
    maxzoom: 22,
    layout: {
      "text-field": ["get", "name"],
      "text-size": 12,
      "text-offset": [0, 1.2],
      "text-anchor": "top",
    },
    paint: {
      "text-color": "#000",
      "text-halo-color": "#fff",
      "text-halo-width": 1,
      "text-opacity": [
        "interpolate",
        ["linear"],
        ["zoom"],
        14.4, 0,   // Fully transparent at zoom 14
        14.5, 1  // Fully visible at zoom 14.5
      ]
    },
    filter: ["==", ["get", "type"], "stop"],
  };
  
  


export const ticketMachine_stopsLayerConfig: LayerSpecification = {
  id: "ticket_machine-layer",
  type: "symbol",
  source: "nearbySearch-source",
  minzoom: 14.5,
  maxzoom: 22,
  layout: {
      "icon-image": "ticket", 
      "icon-size": 0.06,
  },
  filter: ["==", ["get", "type"], "ticket-machine"],
};

// nextbike, Taxi, eScooter 
export const taxi_station_stopsLayerConfig: LayerSpecification = {
  id: "taxi_station_stops-layer",
  type: "symbol",
  source: "nearbySearch-source",
  minzoom: 14.5,
  maxzoom: 22,
  layout: {
    "icon-image": "taxi", 
    "icon-size": 0.06,
},
  filter: ["==", ["get", "source", ["get", "item", ["properties"]]], "taxi"]
};

export const escooter_station_stopsLayerConfig: LayerSpecification = {
  id: "escooter_station_stops-layer",
  type: "symbol",
  source: "nearbySearch-source",
  minzoom: 14.5,
  maxzoom: 22,
  layout: {
    "icon-image": "scooter", 
    "icon-size": 0.06,
},
  filter: ["==", ["get", "source", ["get", "item", ["properties"]]], "escooter"]
};

export const nextbike_station_stopsLayerConfig: LayerSpecification = {
  id: "nextbike_station_stops-layer",
  type: "symbol",
  source: "nearbySearch-source",
  minzoom: 14.5,
  maxzoom: 22,
  layout: {
    "icon-image": "nextbike", 
    "icon-size": 0.06,
},
  filter: ["==", ["get", "source", ["get", "item", ["properties"]]], "nextbike"]
};

export const mobistation_stopsLayerConfig: LayerSpecification = {
  id: "mobistation_stops-layer",
  type: "symbol",
  source: "nearbySearch-source",
  minzoom: 14.5,
  maxzoom: 22,
  layout: {
    "icon-image": "charger", 
    "icon-size": 0.06,
},
  filter: ["==", ["get", "type"], "mobistation"],
};


//free_floating, stop, ticket-machine, station, mobistation 