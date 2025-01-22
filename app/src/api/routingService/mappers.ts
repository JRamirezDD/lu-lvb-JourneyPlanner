import { OtpResponse, Plan, Location, Itinerary, Leg, Alert, ZoneInfo } from "./dto/otpResponse";

export const toLocation = (data: any): Location => ({
    name: data.name,
    lat: data.lat,
    lon: data.lon,
});

export const toLeg = (data: any): Leg => ({
    startTime: data.startTime,
    endTime: data.endTime,
    departureDelay: data.departureDelay,
    arrivalDelay: data.arrivalDelay,
    realTime: data.realTime,
    distance: data.distance,
    mode: data.mode,
    from: toLocation(data.from),
    to: toLocation(data.to),
    legGeometry: {
        points: data.legGeometry.points.map((point: any) => ({ lat: point.lat, lon: point.lon })),
    },
    duration: data.duration,
    transitLeg: data.transitLeg,
    rentedBike: data.rentedBike,
    rentedEscooter: data.rentedEscooter,
    alerts: data.alerts ? data.alerts.map(toAlert) : [],
});

export const toAlert = (data: any): Alert => ({
    alertUrl: data.alertUrl,
    effectiveStartDate: data.effectiveStartDate,
    effectiveEndDate: data.effectiveEndDate,
    alertHeaderText: data.alertHeaderText,
    alertDescriptionText: data.alertDescriptionText,
    alertCategory: data.alertCategory,
});

export const toItinerary = (data: any): Itinerary => ({
    duration: data.duration,
    startTime: data.startTime,
    endTime: data.endTime,
    walkTime: data.walkTime,
    transitTime: data.transitTime,
    waitingTime: data.waitingTime,
    walkDistance: data.walkDistance,
    transfers: data.transfers,
    legs: data.legs.map(toLeg),
    zoneInfo: data.zoneInfo ? toZoneInfo(data.zoneInfo) : undefined,
});

export const toZoneInfo = (data: any): ZoneInfo => ({
    zones: data.zones,
    orderedZones: data.orderedZones,
    shortDistanceTicket: data.shortDistanceTicket,
});

export const toPlan = (data: any): Plan => ({
    date: data.date,
    from: toLocation(data.from),
    to: toLocation(data.to),
    itineraries: data.itineraries.map(toItinerary),
});

export const toOtpResponse = (data: any): OtpResponse => ({
    RetStatus: {
        Value: data.RetStatus.Value,
        Comments: data.RetStatus.Comments,
    },
    requestParameters: data.requestParameters,
    plan: toPlan(data.plan),
});