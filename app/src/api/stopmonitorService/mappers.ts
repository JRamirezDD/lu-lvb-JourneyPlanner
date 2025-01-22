// mappers/stopMonitorMappers.ts
import {
    MonitorItem,
    MonitorResponse,
    DirectionInfo,
    DirectionResponse,
    StopsItem,
    StopsResponse,
    StopTimesResponse,
    StopTimesItem,
    TripInfo
} from "./dto/stopmonitorResponse";

export const toMonitorItem = (data: any): MonitorItem => ({
    arrival_time: data.arrival_time,
    date: data.date,
    departure_time: data.departure_time,
    departure_date: data.departure_date,
    trip_id: data.trip_id,
    stop_id: data.stop_id,
    parent_id: data.parent_id,
    route_id: data.route_id,
    trip_headsign: data.trip_headsign,
    route_color: data.route_color,
    directionId: data.directionId,
    agencyName: data.agencyName,
    trip_cancelled: data.trip_cancelled,
    stop_cancelled: data.stop_cancelled,
    trip_accessible_scheduled: data.trip_accessible_scheduled,
    trip_accessible: data.trip_accessible,
    track_scheduled: data.track_scheduled,
    track: data.track,
    delay_time: data.delay_time,
    departure_delay: data.departure_delay,
    waiting_time: data.waiting_time,
    dep_waiting_time: data.dep_waiting_time,
    alerts: data.alerts || [],
    transport_type: data.transport_type,
    line: data.line,
});

export const toMonitorResponse = (data: any): MonitorResponse => ({
    items: data.map(toMonitorItem),
});

export const toDirectionInfo = (data: any): DirectionInfo => ({
    directionId: data.directionId,
    agencyName: data.agencyName,
    line: data.line,
    route_color: data.route_color,
    directionName: data.directionName,
    transport_type: data.transport_type,
    headsigns: data.headsigns || [],
});

export const toDirectionResponse = (data: any): DirectionResponse => ({
    items: data.map(toDirectionInfo),
});

export const toStopsItem = (data: any): StopsItem => ({
    stop_name: data.stop_name,
    stop_id: data.stop_id,
    lat: data.lat,
    lon: data.lon,
    priority: data.priority,
});

export const toStopsResponse = (data: any): StopsResponse => ({
    items: data.map(toStopsItem),
});

export const toStopTimesItem = (data: any): StopTimesItem => ({
    arrival_time: data.arrival_time,
    date: data.date,
    departure_time: data.departure_time,
    departure_date: data.departure_date,
    stop_id: data.stop_id,
    parent_id: data.parent_id,
    stop_name: data.stop_name,
    stop_sequence: data.stop_sequence,
    trip_headsign: data.trip_headsign,
    stop_cancelled: data.stop_cancelled,
    track_scheduled: data.track_scheduled,
    track: data.track,
    delay_time: data.delay_time,
    departure_delay: data.departure_delay,
    alerts: data.alerts || [],
});

export const toTripInfo = (data: any): TripInfo => ({
    trip_id: data.trip_id,
    service_date: data.service_date,
    route_id: data.route_id,
    route_color: data.route_color,
    directionId: data.directionId,
    agencyName: data.agencyName,
    default_headsign: data.default_headsign,
    trip_cancelled: data.trip_cancelled,
    trip_accessible_scheduled: data.trip_accessible_scheduled,
    trip_accessible: data.trip_accessible,
    transport_type: data.transport_type,
    line: data.line,
});

export const toStopTimesResponse = (data: any): StopTimesResponse => ({
    tripInfo: toTripInfo(data.tripInfo),
    beforeGivenStop: data.beforeGivenStop ? data.beforeGivenStop.map(toStopTimesItem) : [],
    atGivenStop: data.atGivenStop ? toStopTimesItem(data.atGivenStop) : undefined,
    afterGivenStop: data.afterGivenStop ? data.afterGivenStop.map(toStopTimesItem) : [],
});
