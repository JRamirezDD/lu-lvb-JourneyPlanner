export interface MonitorItem {
    arrival_time: string; // TimeString (e.g., "17:23:12")
    date: string; // DateString (e.g., "20221201")
    departure_time: string;
    departure_date: string;
    trip_id: string;
    stop_id: string;
    parent_id: string;
    route_id: string;
    trip_headsign: string;
    route_color: string;
    directionId: string;
    agencyName: string;
    trip_cancelled: boolean;
    stop_cancelled: boolean;
    trip_accessible_scheduled?: boolean;
    trip_accessible?: boolean;
    track_scheduled?: string;
    track?: string;
    delay_time?: number;
    departure_delay?: number;
    waiting_time: number;
    dep_waiting_time: number;
    alerts?: Alert[];
    transport_type: string;
    line: string;
}

export interface MonitorResponse {
    items: MonitorItem[];
}

export interface DirectionInfo {
    directionId: string;
    agencyName: string;
    line: string;
    route_color: string;
    directionName: string;
    transport_type: string;
    headsigns: string[];
}

export interface DirectionResponse {
    items: DirectionInfo[];
}

export interface StopsItem {
    stop_name: string;
    stop_id: string;
    lat: number;
    lon: number;
    priority: number;
}

export interface StopsResponse {
    items: StopsItem[];
}

export interface StopTimesResponse {
    tripInfo: TripInfo;
    beforeGivenStop?: StopTimesItem[];
    atGivenStop?: StopTimesItem;
    afterGivenStop?: StopTimesItem[];
}

export interface TripInfo {
    trip_id: string;
    service_date: string;
    route_id: string;
    route_color: string;
    directionId: string;
    agencyName: string;
    default_headsign: string;
    trip_cancelled: boolean;
    trip_accessible_scheduled?: boolean;
    trip_accessible?: boolean;
    transport_type: string;
    line: string;
}

export interface StopTimesItem {
    arrival_time: string;
    date: string;
    departure_time: string;
    departure_date: string;
    stop_id: string;
    parent_id: string;
    stop_name: string;
    stop_sequence: number;
    trip_headsign: string;
    stop_cancelled: boolean;
    track_scheduled?: string;
    track?: string;
    delay_time?: number;
    departure_delay?: number;
    alerts?: Alert[];
}

export interface Alert {
    alertUrl?: string;
    effectiveStartDate: number; // Epoch
    effectiveEndDate: number; // Epoch
    alertHeaderText?: string;
    alertDescriptionText: string;
    alertCategory: number; // 0 to 6
}