import {
    toMonitorItem,
    toMonitorResponse,
    toDirectionInfo,
    toDirectionResponse,
    toStopsItem,
    toStopsResponse,
    toStopTimesItem,
    toStopTimesResponse,
    toTripInfo,
} from "@/api/stopmonitorService/mappers";

import {
    mockMonitorResponse,
    mockDirectionResponse,
    mockStopsResponse,
    mockStopTimesResponse,
} from "@/api/stopmonitorService/dto/__mock__/stopmonitorResponse.mock";

describe("stopMonitorService Mappers", () => {
    it("should map raw monitor item data to MonitorItem DTO", () => {
        const rawItem = mockMonitorResponse[0];
        const result = toMonitorItem(rawItem);

        expect(result).toEqual({
            arrival_time: rawItem.arrival_time,
            date: rawItem.date,
            departure_time: rawItem.departure_time,
            departure_date: rawItem.departure_date,
            trip_id: rawItem.trip_id,
            stop_id: rawItem.stop_id,
            parent_id: rawItem.parent_id,
            route_id: rawItem.route_id,
            trip_headsign: rawItem.trip_headsign,
            route_color: rawItem.route_color,
            directionId: rawItem.directionId,
            agencyName: rawItem.agencyName,
            trip_cancelled: rawItem.trip_cancelled,
            stop_cancelled: rawItem.stop_cancelled,
            trip_accessible_scheduled: rawItem.trip_accessible_scheduled,
            trip_accessible: rawItem.trip_accessible,
            track_scheduled: rawItem.track_scheduled,
            track: rawItem.track,
            delay_time: rawItem.delay_time,
            departure_delay: rawItem.departure_delay,
            waiting_time: rawItem.waiting_time,
            dep_waiting_time: rawItem.dep_waiting_time,
            alerts: rawItem.alerts,
            transport_type: rawItem.transport_type,
            line: rawItem.line,
        });
    });

    it("should map raw monitor response data to MonitorResponse DTO", () => {
        const result = toMonitorResponse(mockMonitorResponse);

        expect(result.items.length).toBe(mockMonitorResponse.length);
        expect(result.items[0]).toEqual(toMonitorItem(mockMonitorResponse[0]));
    });

    it("should map raw direction item data to DirectionInfo DTO", () => {
        const rawItem = mockDirectionResponse[0];
        const result = toDirectionInfo(rawItem);

        expect(result).toEqual({
            directionId: rawItem.directionId,
            agencyName: rawItem.agencyName,
            line: rawItem.line,
            route_color: rawItem.route_color,
            directionName: rawItem.directionName,
            transport_type: rawItem.transport_type,
            headsigns: rawItem.headsigns,
        });
    });

    it("should map raw direction response data to DirectionResponse DTO", () => {
        const result = toDirectionResponse(mockDirectionResponse);

        expect(result.items.length).toBe(mockDirectionResponse.length);
        expect(result.items[0]).toEqual(toDirectionInfo(mockDirectionResponse[0]));
    });

    it("should map raw stops item data to StopsItem DTO", () => {
        const rawItem = mockStopsResponse[0];
        const result = toStopsItem(rawItem);

        expect(result).toEqual({
            stop_name: rawItem.stop_name,
            stop_id: rawItem.stop_id,
            lat: rawItem.lat,
            lon: rawItem.lon,
            priority: rawItem.priority,
        });
    });

    it("should map raw stops response data to StopsResponse DTO", () => {
        const result = toStopsResponse(mockStopsResponse);

        expect(result.items.length).toBe(mockStopsResponse.length);
        expect(result.items[0]).toEqual(toStopsItem(mockStopsResponse[0]));
    });

    it("should map raw stop times item data to StopTimesItem DTO", () => {
        const rawItem = mockStopTimesResponse.atGivenStop;
        const result = toStopTimesItem(rawItem);

        expect(result).toEqual({
            arrival_time: rawItem.arrival_time,
            date: rawItem.date,
            departure_time: rawItem.departure_time,
            departure_date: rawItem.departure_date,
            stop_id: rawItem.stop_id,
            parent_id: rawItem.parent_id,
            stop_name: rawItem.stop_name,
            stop_sequence: rawItem.stop_sequence,
            trip_headsign: rawItem.trip_headsign,
            stop_cancelled: rawItem.stop_cancelled,
            track_scheduled: rawItem.track_scheduled,
            track: rawItem.track,
            delay_time: rawItem.delay_time,
            departure_delay: rawItem.departure_delay,
            alerts: rawItem.alerts,
        });
    });

    it("should map raw trip info data to TripInfo DTO", () => {
        const rawItem = mockStopTimesResponse.tripInfo;
        const result = toTripInfo(rawItem);

        expect(result).toEqual({
            trip_id: rawItem.trip_id,
            service_date: rawItem.service_date,
            route_id: rawItem.route_id,
            route_color: rawItem.route_color,
            directionId: rawItem.directionId,
            agencyName: rawItem.agencyName,
            default_headsign: rawItem.default_headsign,
            trip_cancelled: rawItem.trip_cancelled,
            trip_accessible_scheduled: rawItem.trip_accessible_scheduled,
            trip_accessible: rawItem.trip_accessible,
            transport_type: rawItem.transport_type,
            line: rawItem.line,
        });
    });

    it("should map raw stop times response data to StopTimesResponse DTO", () => {
        const result = toStopTimesResponse(mockStopTimesResponse);

        expect(result.tripInfo).toEqual(toTripInfo(mockStopTimesResponse.tripInfo));
        expect(result.atGivenStop).toEqual(toStopTimesItem(mockStopTimesResponse.atGivenStop));
        expect(result.beforeGivenStop).toEqual([]);
        expect(result.afterGivenStop).toEqual([]);
    });
});
