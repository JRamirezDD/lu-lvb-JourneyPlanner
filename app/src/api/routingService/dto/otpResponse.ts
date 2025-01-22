import { RequestParameters } from "./otpRequest";

//dto/otpResponse.ts
export interface OtpResponse {
    RetStatus: {
        Value: string; // OK or FEHLER
        Comments?: string; // More information in case of an error
    };
    requestParameters: RequestParameters;
    plan: Plan;
}

export interface Plan {
    date?: number; // Epoch timestamp
    from: Location;
    to: Location;
    itineraries: Itinerary[];
}

export interface Location {
    name: string;
    lat: number;
    lon: number;
}

export interface Itinerary {
    duration: number;
    startTime: number; // Epoch timestamp
    endTime: number; // Epoch timestamp
    walkTime: number;
    transitTime: number;
    waitingTime: number;
    walkDistance: number;
    transfers: number;
    legs: Leg[];
    zoneInfo?: ZoneInfo;
}

export interface Leg {
    startTime: number; // Epoch timestamp
    endTime: number; // Epoch timestamp
    departureDelay: number;
    arrivalDelay: number;
    realTime: boolean;
    distance: number;
    mode: string;
    from: Location;
    to: Location;
    legGeometry: LegGeometry;
    duration: number;
    transitLeg: boolean;
    rentedBike?: boolean;
    rentedEscooter?: boolean;
    alerts?: Alert[];
    intermediateStops?: Location[];
}

export interface LegGeometry {
    points: { lat: number; lon: number }[];
}

export interface ZoneInfo {
    zones: string[];
    orderedZones: string[];
    shortDistanceTicket: boolean;
}

export interface Alert {
    alertUrl?: string;
    effectiveStartDate: number; // Epoch timestamp
    effectiveEndDate: number; // Epoch timestamp
    alertHeaderText?: string;
    alertDescriptionText: string;
    alertCategory: number; // 0 to 6, representing alert types
}