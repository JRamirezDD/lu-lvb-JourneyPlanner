import { GeoJsonConvertible } from "@/types/GeoJsonConvertible";
import { RequestParameters } from "./otpRequest";

// dto/otpResponse.ts

export class OtpResponse extends GeoJsonConvertible {
    constructor(
        public RetStatus: { Value: string; Comments?: string },
        public requestParameters: RequestParameters,
        public plan: Plan
    ) {
        super();
    }

    toGeoJson(): string {
        throw new Error("Not Implemented");
    }
}

export class Plan extends GeoJsonConvertible {
    constructor(
        public date: number | undefined,
        public from: Location,
        public to: Location,
        public itineraries: Itinerary[]
    ) {
        super();
    }

    toGeoJson(): string {
        throw new Error("Not Implemented");
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

    toGeoJson(): string {
        throw new Error("Not Implemented");
    }
}

export class Itinerary extends GeoJsonConvertible {
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

    toGeoJson(): string {
        throw new Error("Not Implemented");
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
        public mode: string,
        public from: Location,
        public to: Location,
        public legGeometry: LegGeometry,
        public duration: number,
        public transitLeg: boolean,
        public intermediateStops?: Location[],
        public rentedBike?: boolean,
        public rentedEscooter?: boolean,
        public alerts?: Alert[]
    ) {
        super();
    }

    toGeoJson(): string {
        throw new Error("Not Implemented");
    }
}

export class LegGeometry extends GeoJsonConvertible {
    constructor(
        public points: { lat: number; lon: number }[]
    ) {
        super();
    }

    toGeoJson(): string {
        throw new Error("Not Implemented");
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

    toGeoJson(): string {
        throw new Error("Not Implemented");
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

    toGeoJson(): string {
        throw new Error("Not Implemented");
    }
}
