import { NearBySearchResponse } from "@/api/nearbysearchService/dto/nearbySearchResponse";
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

export const nb_stopsLayerConfig: LayerSpecification = {
    id: "nb_stops-layer",
    type: "symbol",
    source: "nearbySearch-source",
    minzoom: 14,
    maxzoom: 22,
    layout: {
        "icon-image": "haltestelle", // already tested
        "icon-size": 0.022,
    }
    ,
    // filter: [] // TODO - @MARLENE NEEDS TO DEFINE FILTERS
};

// ... // TODO - @MARLENE NEEDS TO CREATE THE REST OF THE LAYERS