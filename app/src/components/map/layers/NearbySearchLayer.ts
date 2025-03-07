import { NearBySearchResponse } from "@/api/nearbysearchService/dto/nearbysearchResponse";
import { toNearBySearchResponse } from "@/api/nearbysearchService/mappers";
import { GeoJSONSourceSpecification, LayerSpecification, ExpressionFilterSpecification  } from "maplibre-gl";

// Function to generate GeoJSON dynamically from API response
export const createNearbySearchLayerData = (searchItems: NearBySearchResponse): GeoJSON.FeatureCollection => {
  const searchItemsGeoJson = searchItems.toGeoJson();
  console.log("SearchItems GeoJSON:", searchItemsGeoJson);
  return searchItemsGeoJson;


      //  const raw = toNearBySearchResponse(nearbysearchmockresponse); //map to nearbysearchresponse object
      //   //console.log("RAW RESPONSE" + JSON.stringify(raw, null, 2))
  
      //   const geo = raw.toGeoJson();  //change object to geojson
      //   console.log("GEO" + JSON.stringify(geo, null, 2));    
      //   expect(geo.features.length != 0);

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
      "circle-stroke-width": 2,
      "circle-stroke-color": "black",
    },
    filter: ["==", ["get", "type"], "Point"],
};


export const stop_stopsLayerConfig: LayerSpecification = {
  id: "stop_stops-layer",
  type: "symbol",
  source: "nearbySearch-source",
  minzoom: 14,
  maxzoom: 22,
  layout: {
      "icon-image": "haltestelle",
      "icon-size": 0.022,
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
      "icon-image": "haltestelle", 
      "icon-size": 0.022,
  },
  filter: ["==", ["get", "type"], "ticket-machine"],
};

export const station_stopsLayerConfig: LayerSpecification = {
  id: "station_stops-layer",
  type: "symbol",
  source: "nearbySearch-source",
  minzoom: 14,
  maxzoom: 22,
  layout: {
      "icon-image": "haltestelle", 
      "icon-size": 0.022,
  },
  filter: ["==", ["get", "type"], "station"],
};

export const mobistation_stopsLayerConfig: LayerSpecification = {
  id: "mobistation_stops-layer",
  type: "symbol",
  source: "nearbySearch-source",
  minzoom: 14,
  maxzoom: 22,
  layout: {
      "icon-image": "haltestelle",
      "icon-size": 0.022,
  },
  filter: ["==", ["get", "type"], "mobistation"],
};


//free_floating, stop, ticket-machine, station, mobistation 