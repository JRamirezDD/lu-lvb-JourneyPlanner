import {
    toLocation,
    toLeg,
    toAlert,
    toItinerary,
    toZoneInfo,
    toPlan,
    toOtpResponse,
} from "@/api/routingService/mappers";
import { mockOtpResponse } from "@/api/routingService/dto/__mock__/otpResponse.mock";

describe("routingService Mappers", () => {
    it("should map raw location data to Location DTO", () => {
        const rawLocation = mockOtpResponse.plan.from;
        const result = toLocation(rawLocation);

        expect(result).toEqual({
            name: rawLocation.name,
            lat: rawLocation.lat,
            lon: rawLocation.lon,
        });
    });

    it("should map raw leg data to Leg DTO", () => {
        const rawLeg = mockOtpResponse.plan.itineraries[0].legs[0];
        const result = toLeg(rawLeg);

        expect(result).toEqual({
            startTime: rawLeg.startTime,
            endTime: rawLeg.endTime,
            departureDelay: rawLeg.departureDelay,
            arrivalDelay: rawLeg.arrivalDelay,
            realTime: rawLeg.realTime,
            distance: rawLeg.distance,
            mode: rawLeg.mode,
            from: toLocation(rawLeg.from),
            to: toLocation(rawLeg.to),
            legGeometry: {
                points: rawLeg.legGeometry.points.map((point) => ({ lat: point.lat, lon: point.lon })),
            },
            duration: rawLeg.duration,
            transitLeg: rawLeg.transitLeg,
            rentedBike: rawLeg.rentedBike,
            rentedEscooter: rawLeg.rentedEscooter,
            alerts: rawLeg.alerts.map(toAlert),
        });
    });

    it("should map raw alert data to Alert DTO", () => {
        const rawAlert = mockOtpResponse.plan.itineraries[0].legs[1].alerts[0];
        const result = toAlert(rawAlert);

        expect(result).toEqual({
            alertUrl: rawAlert.alertUrl,
            effectiveStartDate: rawAlert.effectiveStartDate,
            effectiveEndDate: rawAlert.effectiveEndDate,
            alertHeaderText: rawAlert.alertHeaderText,
            alertDescriptionText: rawAlert.alertDescriptionText,
            alertCategory: rawAlert.alertCategory,
        });
    });

    it("should map raw itinerary data to Itinerary DTO", () => {
        const rawItinerary = mockOtpResponse.plan.itineraries[0];
        const result = toItinerary(rawItinerary);

        expect(result).toEqual({
            duration: rawItinerary.duration,
            startTime: rawItinerary.startTime,
            endTime: rawItinerary.endTime,
            walkTime: rawItinerary.walkTime,
            transitTime: rawItinerary.transitTime,
            waitingTime: rawItinerary.waitingTime,
            walkDistance: rawItinerary.walkDistance,
            transfers: rawItinerary.transfers,
            legs: rawItinerary.legs.map(toLeg),
            zoneInfo: toZoneInfo(rawItinerary.zoneInfo),
        });
    });

    it("should map raw zone info data to ZoneInfo DTO", () => {
        const rawZoneInfo = mockOtpResponse.plan.itineraries[0].zoneInfo;
        const result = toZoneInfo(rawZoneInfo);

        expect(result).toEqual({
            zones: rawZoneInfo.zones,
            orderedZones: rawZoneInfo.orderedZones,
            shortDistanceTicket: rawZoneInfo.shortDistanceTicket,
        });
    });

    it("should map raw plan data to Plan DTO", () => {
        const rawPlan = mockOtpResponse.plan;
        const result = toPlan(rawPlan);

        expect(result).toEqual({
            date: rawPlan.date,
            from: toLocation(rawPlan.from),
            to: toLocation(rawPlan.to),
            itineraries: rawPlan.itineraries.map(toItinerary),
        });
    });

    it("should map raw OTP response data to OtpResponse DTO", () => {
        const result = toOtpResponse(mockOtpResponse);

        expect(result).toEqual({
            RetStatus: {
                Value: mockOtpResponse.RetStatus.Value,
                Comments: mockOtpResponse.RetStatus.Comments,
            },
            requestParameters: mockOtpResponse.requestParameters,
            plan: toPlan(mockOtpResponse.plan),
        });
    });
});
