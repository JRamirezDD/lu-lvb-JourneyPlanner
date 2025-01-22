export interface StopMonitorParams {
    stopid: string; // StopId of the Stop
    date: string; // Format: YYYYMMDD
    time?: string; // Format: HH:MM
    minutes?: string; // Default 60
    max_items?: string;
    min_items?: string;
    mockup?: string;
    depOnly?: boolean;
    arrOnly?: boolean;
}

export interface StopTimesParams {
    tripId: string;
    stopId?: string;
    afterStopSequence?: number;
    arrivalTime?: string; // DateTimeString
    departureTime?: string; // DateTimeString
    serviceDate?: string; // DateString
}
