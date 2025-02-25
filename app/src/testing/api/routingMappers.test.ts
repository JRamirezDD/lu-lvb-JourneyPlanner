import {
    toLocation,
    toLeg,
    toAlert,
    toOtpItinerary,
    toZoneInfo,
    toPlan,
    toOtpResponse,
} from "@/api/routingService/mappers";
import { mockOtpResponse } from "@/api/routingService/dto/__mock__/otpResponse.mock";
import { Leg, LegGeometry, Location, Alert, OtpItinerary, ZoneInfo, Plan, OtpResponse } from "@/api/routingService/dto/otpResponse";
import { TransportMode } from "@/types/TransportMode";
import { GeoJSON, FeatureCollection, Feature, Point, LineString } from "geojson";

describe("routingService Mappers", () => {
    it("should map raw location data to Location DTO", () => {
        const rawLocation = mockOtpResponse.plan.from;
        const result = toLocation(rawLocation);
        expect(result).toEqual(new Location(rawLocation.name, rawLocation.lat, rawLocation.lon));
    });

    it("should map itinerary data to GeoJSON", () => {
        const rawResponse = mockOtpResponse;
        const rawObjects = toOtpResponse(rawResponse);
        const result = rawObjects.plan.itineraries[0].toGeoJson(); // Access the GeoJSON directly from the first itinerary

        expect(result).toBeDefined();
        expect(result.type).toBe("FeatureCollection");
        expect((result as FeatureCollection).features.length).toBeGreaterThan(0); // Ensure features exist
        expect((result as FeatureCollection).features[0].type).toBe("Feature"); // Check if features are of type Feature

        // Additional checks for geometry types (if needed)
        (result as FeatureCollection).features.forEach(feature => {
            expect(feature.geometry).toBeDefined();
            expect(feature.geometry.type).toBeDefined();
            // Depending on your data, you might want to check if geometries are Point or LineString
            if (feature.geometry.type === "LineString") {
                expect((feature.geometry as LineString).coordinates).toBeDefined();
                expect((feature.geometry as LineString).coordinates.length).toBeGreaterThan(0);
            } else if (feature.geometry.type === "Point") {
                expect((feature.geometry as Point).coordinates).toBeDefined();
                expect((feature.geometry as Point).coordinates.length).toBe(2);
            }
        });
    });
/*
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

        if (rawAlert) {
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
        } else {
            expect(toAlert(rawAlert)).toBeUndefined();
        }
    });
*/
    it("should map raw itinerary data to Itinerary DTO", () => {
        const rawItinerary = mockOtpResponse.plan.itineraries[0];
        const result = toOtpItinerary(rawItinerary);

        expect(result).toEqual(
            new OtpItinerary(
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

        if (rawZoneInfo) {
            const result = toZoneInfo(rawZoneInfo);
            expect(result).toEqual(
                new ZoneInfo(rawZoneInfo.zones, rawZoneInfo.orderedZones, rawZoneInfo.shortDistanceTicket)
            );
        } else {
            expect(toZoneInfo(rawZoneInfo)).toBeUndefined();
        }
    });

    it("should map raw plan data to Plan DTO", () => {
        const rawPlan = mockOtpResponse.plan;
        const result = toPlan(rawPlan);

        expect(result).toEqual(
            new Plan(
                rawPlan.date,
                toLocation(rawPlan.from),
                toLocation(rawPlan.to),
                rawPlan.itineraries.map(toOtpItinerary)
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