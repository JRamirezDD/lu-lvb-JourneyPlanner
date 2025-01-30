import {
    MonitorItem,
    MonitorResponse,
    DirectionInfo,
    DirectionResponse,
    StopsItem,
    StopsResponse,
    StopTimesResponse,
    StopTimesItem,
    TripInfo,
    Alert,
} from "./dto/stopmonitorResponse";

export const toMonitorItem = (data: any): MonitorItem =>
    new MonitorItem(
        data.arrival_time,
        data.date,
        data.departure_time,
        data.departure_date,
        data.trip_id,
        data.stop_id,
        data.parent_id,
        data.route_id,
        data.trip_headsign,
        data.route_color,
        data.directionId,
        data.agencyName,
        data.trip_cancelled,
        data.stop_cancelled,
        data.waiting_time,
        data.dep_waiting_time,
        data.line,
        data.transport_type,
        data.trip_accessible_scheduled,
        data.trip_accessible,
        data.track_scheduled,
        data.track,
        data.delay_time,
        data.departure_delay,
        data.alerts ? data.alerts.map(toAlert) : []
    );

export const toMonitorResponse = (data: any): MonitorResponse =>
    new MonitorResponse(data.map(toMonitorItem));

export const toDirectionInfo = (data: any): DirectionInfo =>
    new DirectionInfo(
        data.directionId,
        data.agencyName,
        data.line,
        data.route_color,
        data.directionName,
        data.transport_type,
        data.headsigns || []
    );

export const toDirectionResponse = (data: any): DirectionResponse =>
    new DirectionResponse(data.map(toDirectionInfo));

export const toStopsItem = (data: any): StopsItem =>
    new StopsItem(data.stop_name, data.stop_id, data.lat, data.lon, data.priority);

export const toStopsResponse = (data: any): StopsResponse =>
    new StopsResponse(data.map(toStopsItem));

export const toStopTimesItem = (data: any): StopTimesItem =>
    new StopTimesItem(
        data.arrival_time,
        data.date,
        data.departure_time,
        data.departure_date,
        data.stop_id,
        data.parent_id,
        data.stop_name,
        data.stop_sequence,
        data.trip_headsign,
        data.stop_cancelled,
        data.track_scheduled,
        data.track,
        data.delay_time,
        data.departure_delay,
        data.alerts ? data.alerts.map(toAlert) : []
    );

export const toTripInfo = (data: any): TripInfo =>
    new TripInfo(
        data.trip_id,
        data.service_date,
        data.route_id,
        data.route_color,
        data.directionId,
        data.agencyName,
        data.default_headsign,
        data.trip_cancelled,
        data.transport_type,
        data.line,
        data.trip_accessible_scheduled,
        data.trip_accessible
    );

export const toStopTimesResponse = (data: any): StopTimesResponse =>
    new StopTimesResponse(
        toTripInfo(data.tripInfo),
        data.beforeGivenStop ? data.beforeGivenStop.map(toStopTimesItem) : [],
        data.atGivenStop ? toStopTimesItem(data.atGivenStop) : undefined,
        data.afterGivenStop ? data.afterGivenStop.map(toStopTimesItem) : []
    );

// Helper to convert alerts
export const toAlert = (data: any): Alert =>
    new Alert(
        data.effectiveStartDate,
        data.effectiveEndDate,
        data.alertDescriptionText,
        data.alertCategory,
        data.alertUrl,
        data.alertHeaderText
    );
