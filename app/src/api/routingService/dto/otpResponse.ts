import { GeoJsonConvertible } from "@/types/GeoJsonConvertible";
import { RequestParameters } from "./otpRequest";
import { TransportMode } from "@/types/TransportMode";
import { toPlan } from "@/api/routingService/mappers";
import { Feature, Point, LineString, FeatureCollection, Position, Geometry } from "geojson";

// dto/otpResponse.ts

// otp response: ({value, comments}, request parameters, plan
// plan: date, from, to otp itineraries
// otp itinerary: GEOJSON CONVERTIBLE

export class OtpResponse {
    constructor(
        public RetStatus: { Value: string; Comments?: string },
        public requestParameters: RequestParameters,
        public plan: Plan
    ) {
    }
}

export class Plan {
    constructor(
        public date: number | undefined,
        public from: Location,
        public to: Location,
        public itineraries: OtpItinerary[]
    ) {
    }
}


export class Location extends GeoJsonConvertible {
    constructor(
        public name: string,
        public lat: number,
        public lon: number
    ) {
        super();
    }

    toGeoJsonFeature(type: string): Feature<Point> {
        const feature: Feature<Point> = {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [this.lon, this.lat] as Position,
            },
            properties: {
                name: this.name,
                type: type,
            },
        };
        return feature;
    }

    toGeoJson(): Feature<Point> {
        return this.toGeoJsonFeature("Location");
    }
}

export class OtpItinerary extends GeoJsonConvertible {
    constructor(
        public duration: number,
        public startTime: number,
        public endTime: number,
        public walkTime: number,
        public transitTime: number,
        public waitingTime: number,
        public walkDistance: number,
        public transfers: number,
        public legs: Leg[],
        public zoneInfo?: ZoneInfo
    ) {
        super();
    }

    toGeoJsonFeatures(): Feature<Point | LineString>[] {
        return this.legs.flatMap((leg) => leg.toGeoJsonFeatures());
    }

    toGeoJson(): FeatureCollection<Point | LineString> {
        const geojson: FeatureCollection<Point | LineString> = {
            type: "FeatureCollection",
            features: this.toGeoJsonFeatures(),
        };
        return geojson;
    }
}

export class Leg extends GeoJsonConvertible {
    constructor(
        public startTime: number,
        public endTime: number,
        public departureDelay: number,
        public arrivalDelay: number,
        public realTime: boolean,
        public distance: number,
        public mode: TransportMode,
        public routeColor: string,
        public from: Location,
        public to: Location,
        public legGeometry: LegGeometry,
        public duration: number,
        public transitLeg: boolean,
        public route: string,
        public intermediateStops?: Location[],
        public rentedBike?: boolean,
        public alerts?: Alert[]
    ) {
        super();
    }

    toGeoJsonFeatures(): Feature<Point | LineString>[] {
        const features: Feature<Point | LineString>[] = [
            this.from.toGeoJsonFeature("Leg Start"),
            this.to.toGeoJsonFeature("Leg End"),
        ];

        // Add the leg geometry as a LineString
        if (this.legGeometry.points.length > 0) {
            const lineString: Feature<LineString> = {
                type: "Feature",
                geometry: {
                    type: "LineString",
                    coordinates: this.legGeometry.points.map((point) => [point.lon, point.lat] as Position),
                },
                properties: {
                    mode: this.mode,
                    route: this.route,
                    distance: this.distance,
                    duration: this.duration,
                    routeColor: this.routeColor
                },
            };
            features.push(lineString);
        }

        // Add intermediate stops if available
        if (this.intermediateStops) {
            features.push(
                ...this.intermediateStops.map((stop) => stop.toGeoJsonFeature("Intermediate Stop"))
            );
        }

        return features;
    }

    toGeoJson(): FeatureCollection<Point | LineString> {
        const geojson: FeatureCollection<Point | LineString> = {
            type: "FeatureCollection",
            features: this.toGeoJsonFeatures(),
        };
        return geojson;
    }
}

export class LegGeometry extends GeoJsonConvertible {
    constructor(public points: { lat: number; lon: number }[]) {
        super();
    }

    toGeoJson(): LineString {
        const geojson: LineString = {
            type: "LineString",
            coordinates: this.points.map((point) => [point.lon, point.lat] as Position),
        };
        return geojson;
    }
}

export class ZoneInfo extends GeoJsonConvertible {
    constructor(
        public zones: string[],
        public orderedZones: string[],
        public shortDistanceTicket: boolean
    ) {
        super();
    }

    toGeoJson(): Feature<Geometry | null> {
        const geojson: Feature<Geometry | null> = {
            type: "Feature",
            geometry: null,
            properties: {
                zones: this.zones,
                orderedZones: this.orderedZones,
                shortDistanceTicket: this.shortDistanceTicket,
            },
        };
        return geojson;
    }
}

export class Alert extends GeoJsonConvertible {
    constructor(
        public effectiveStartDate: number,
        public effectiveEndDate: number,
        public alertDescriptionText: string,
        public alertCategory: number,
        public alertUrl?: string,
        public alertHeaderText?: string
    ) {
        super();
    }

    toGeoJson(): Feature<Geometry | null> {
        const geojson: Feature<Geometry | null> = {
            type: "Feature",
            geometry: null,
            properties: {
                effectiveStartDate: this.effectiveStartDate,
                effectiveEndDate: this.effectiveEndDate,
                alertDescriptionText: this.alertDescriptionText,
                alertCategory: this.alertCategory,
                alertUrl: this.alertUrl,
                alertHeaderText: this.alertHeaderText,
            },
        };
        return geojson;
    }
}