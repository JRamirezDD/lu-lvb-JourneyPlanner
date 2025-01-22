export interface RequestParameters {
    From: string;
    To: string;
    Travelmode: string;
    date?: string; // Format: MM-DD-YYYY
    time?: string; // Format: hh:mm
    numItineraries?: number;
    arriveBy?: boolean;
    accessibility?: boolean;
    shortWalk?: boolean;
    lessTransfers?: boolean;
    transitOnly?: boolean;
    mockup?: boolean;
}