import { TransportMode } from "@/types/TransportMode";

export interface RequestParameters {
    From: string;
    To: string;
    Travelmode: TransportMode[] | string;
    date?: string; // Format: MM-DD-YYYY
    time?: string; // Format: hh:mm
    numItineraries?: number;
    arriveBy?: boolean;
    accessibility?: boolean;
    shortWalk?: boolean;
    lessTransfers?: boolean;
    maxWalkDistance?: number;
    transitOnly?: boolean;
    mockup?: boolean;
}