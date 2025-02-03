import {
    OtpResponse,
    Plan,
    Location,
    OtpItinerary,
    Leg,
    Alert,
    ZoneInfo,
    LegGeometry,
} from "./dto/otpResponse";

//Converts raw data to proper dtos to be converted to GeoJSONs. 
//Includes: toLocation, toLeg, toAlert, toItinerary, to ZoneInfo, toPlan, and toOtpResponse

export const toLocation = (data: any): Location =>
    new Location(data.name, data.lat, data.lon);

export const toLeg = (data: any): Leg =>
    new Leg(
        data.startTime,
        data.endTime,
        data.departureDelay,
        data.arrivalDelay,
        data.realTime,
        data.distance,
        data.mode,
        toLocation(data.from),
        toLocation(data.to),
        new LegGeometry(data.legGeometry.points.map((point: any) => ({ lat: point.lat, lon: point.lon }))),
        data.duration,
        data.transitLeg,
        data.intermediateStops ? data.intermediateStops.map(toLocation) : undefined,
        data.rentedBike,
        data.alerts ? data.alerts.map(toAlert) : [],
    );

export const toAlert = (data: any): Alert =>
    new Alert(
        data.effectiveStartDate, // Required
        data.effectiveEndDate, // Required
        data.alertDescriptionText, // Required
        data.alertCategory, // Required
        data.alertUrl, // Optional
        data.alertHeaderText // Optional
    );

export const toOtpItinerary = (data: any): OtpItinerary =>
    new OtpItinerary(
        data.duration,
        data.startTime,
        data.endTime,
        data.walkTime,
        data.transitTime,
        data.waitingTime,
        data.walkDistance,
        data.transfers,
        data.legs.map(toLeg),
        data.zoneInfo ? toZoneInfo(data.zoneInfo) : undefined
    );

export const toZoneInfo = (data: any): ZoneInfo =>
    new ZoneInfo(
        data.zones,
        data.orderedZones,
        data.shortDistanceTicket
    );

export const toPlan = (data: any): Plan =>
    new Plan(
        data.date,
        toLocation(data.from),
        toLocation(data.to),
        data.itineraries.map(toOtpItinerary)
    );

export const toOtpResponse = (data: any): OtpResponse =>
    new OtpResponse(
        {
            Value: data.RetStatus.Value,
            Comments: data.RetStatus.Comments,
        },
        data.requestParameters,
        toPlan(data.plan)
    );
