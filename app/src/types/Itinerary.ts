import { Location, OtpItinerary } from "@/api/routingService/dto/otpResponse";
import { GeoJsonConvertible } from "./GeoJsonConvertible";
import { GeoJSONFeature } from "mapbox-gl";
import { MapGeoJSONFeature } from "maplibre-gl";
import { FeatureCollection } from "geojson";

export class Itinerary extends GeoJsonConvertible {
    constructor(
        public from: Location,
        public to: Location,
        public otpItinerary: OtpItinerary
    ) {
        super();
    }

    // Generate the GeoJSON structure for the entire Plan object
    toGeoJson(): FeatureCollection {
        // Use the toGeoJsonFeature method to generate the FeatureCollection
        const geojsonFeatureCollection: FeatureCollection = {
            type: "FeatureCollection",
            features: [
                this.from.toGeoJsonFeature("Origin"),
                this.to.toGeoJsonFeature("Destination"),
                ...this.otpItinerary.toGeoJsonFeatures()
            ],
        };

        // Convert the object to a pretty-printed GeoJSON string
        return geojsonFeatureCollection;
    }
}