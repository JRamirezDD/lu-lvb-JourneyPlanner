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
import { Leg, LegGeometry, Location, Alert, Itinerary, ZoneInfo, Plan, OtpResponse } from "@/api/routingService/dto/otpResponse";
import { TransportMode } from "@/types/TransportMode";

describe("routingService Mappers", () => {
    it("should map the mock data to geoJSON format. Must check manually.", () => {
        const result = toOtpResponse(mockOtpResponse).toGeoJson();
        //console.log(result);

        expect(result).not.toEqual("");
    })

    it("should map raw location data to Location DTO", () => {
        const rawLocation = mockOtpResponse.plan.from;
        const result = toLocation(rawLocation);

        expect(result).toEqual(new Location(rawLocation.name, rawLocation.lat, rawLocation.lon));
    });

    it("should map raw leg data to Leg DTO", () => {
        const rawLeg = mockOtpResponse.plan.itineraries[0].legs[0];
        const result = toLeg(rawLeg);

        expect(result).toEqual(
            new Leg(
                rawLeg.startTime,
                rawLeg.endTime,
                rawLeg.departureDelay,
                rawLeg.arrivalDelay,
                rawLeg.realTime,
                rawLeg.distance,
                rawLeg.mode as TransportMode,
                new Location(rawLeg.from.name, rawLeg.from.lat, rawLeg.from.lon),
                new Location(rawLeg.to.name, rawLeg.to.lat, rawLeg.to.lon),
                new LegGeometry(
                    rawLeg.legGeometry.points.map((point: any) => ({ lat: point.lat, lon: point.lon }))
                ),
                rawLeg.duration,
                rawLeg.transitLeg,
                rawLeg.intermediateStops?.map(toLocation),
                rawLeg.rentedBike,
                rawLeg.alerts?.map(toAlert)
            )
        );
    });

    it("should map raw alert data to Alert DTO", () => {
        const rawAlert = mockOtpResponse.plan?.itineraries?.[0]?.legs?.[1]?.alerts?.[0];
    
        if (!rawAlert) {
            throw new Error("rawAlert is undefined");
        }
    
        const result = toAlert(rawAlert);
    
        expect(result).toEqual(
            new Alert(
                rawAlert.effectiveStartDate,
                rawAlert.effectiveEndDate,
                rawAlert.alertDescriptionText,
                rawAlert.alertCategory,
                rawAlert.alertUrl ?? undefined,
                rawAlert.alertHeaderText ?? undefined 
            )
        );        
    });
    

    it("should map raw itinerary data to Itinerary DTO", () => {
        const rawItinerary = mockOtpResponse.plan.itineraries[0];
        const result = toItinerary(rawItinerary);

        expect(result).toEqual(
            new Itinerary(
                rawItinerary.duration,
                rawItinerary.startTime,
                rawItinerary.endTime,
                rawItinerary.walkTime,
                rawItinerary.transitTime,
                rawItinerary.waitingTime,
                rawItinerary.walkDistance,
                rawItinerary.transfers,
                rawItinerary.legs.map(toLeg),
                rawItinerary.zoneInfo ? toZoneInfo(rawItinerary.zoneInfo) : undefined
            )
        );
    });

    it("should map raw zone info data to ZoneInfo DTO", () => {
        const rawZoneInfo = mockOtpResponse.plan?.itineraries?.[0]?.zoneInfo;
        if (!rawZoneInfo) {
            throw new Error("rawZoneInfo is undefined");
        }
        const result = toZoneInfo(rawZoneInfo);
        expect(result).toEqual(
            new ZoneInfo(rawZoneInfo.zones, rawZoneInfo.orderedZones, rawZoneInfo.shortDistanceTicket)
        );
    });
    

    it("should map raw plan data to Plan DTO", () => {
        const rawPlan = mockOtpResponse.plan;
        const result = toPlan(rawPlan);

        expect(result).toEqual(
            new Plan(
                rawPlan.date,
                toLocation(rawPlan.from),
                toLocation(rawPlan.to),
                rawPlan.itineraries.map(toItinerary)
            )
        );
    });

    it("should map raw OTP response data to OtpResponse DTO", () => {
        const result = toOtpResponse(mockOtpResponse);

        expect(result).toEqual(
            new OtpResponse(
                {
                    Value: mockOtpResponse.RetStatus.Value,
                    Comments: mockOtpResponse.RetStatus.Comments,
                },
                {
                    ...mockOtpResponse.requestParameters,
                    Travelmode: [mockOtpResponse.requestParameters.Travelmode as TransportMode]
                },
                toPlan(mockOtpResponse.plan)
            )
        );
    });
});
