import { OtpResponse } from "../otpResponse";

export const mockOtpResponse: OtpResponse = {
    RetStatus: {
        Value: "OK",
        Comments: "Successful response"
    },
    requestParameters: {
        From: "Leipzig Hauptbahnhof",
        To: "Leipzig Markt",
        Travelmode: "TRANSIT",
        date: "01-22-2025",
        time: "08:00",
        numItineraries: 3
    },
    plan: {
        from: { name: "Leipzig Hauptbahnhof", lat: 51.342, lon: 12.377 },
        to: { name: "Leipzig Markt", lat: 51.340, lon: 12.374 },
        itineraries: [
            {
                duration: 600,
                startTime: 1674384000000,
                endTime: 1674384600000,
                walkTime: 120,
                transitTime: 360,
                waitingTime: 120,
                walkDistance: 500,
                transfers: 1,
                legs: [
                    {
                        startTime: 1674384000000,
                        endTime: 1674384200000,
                        departureDelay: 0,
                        arrivalDelay: 0,
                        realTime: true,
                        distance: 1000,
                        mode: "WALK",
                        from: { name: "Leipzig Hauptbahnhof", lat: 51.342, lon: 12.377 },
                        to: { name: "Bus Stop 1", lat: 51.341, lon: 12.375 },
                        legGeometry: { points: [{ lat: 51.342, lon: 12.377 }, { lat: 51.341, lon: 12.375 }] },
                        duration: 300,
                        transitLeg: false
                    },
                    {
                        startTime: 1674384200000,
                        endTime: 1674384600000,
                        departureDelay: 0,
                        arrivalDelay: 0,
                        realTime: true,
                        distance: 2000,
                        mode: "BUS",
                        from: { name: "Bus Stop 1", lat: 51.341, lon: 12.375 },
                        to: { name: "Leipzig Markt", lat: 51.340, lon: 12.374 },
                        legGeometry: { points: [{ lat: 51.341, lon: 12.375 }, { lat: 51.340, lon: 12.374 }] },
                        duration: 600,
                        transitLeg: true
                    }
                ]
            }
        ]
    }
};