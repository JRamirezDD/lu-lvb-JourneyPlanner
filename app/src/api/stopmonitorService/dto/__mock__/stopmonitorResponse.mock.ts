export const mockMonitorResponse = [
    {
        arrival_time: "17:23:12",
        date: "20250122",
        departure_time: "17:25:00",
        departure_date: "20250122",
        trip_id: "lvb12345",
        stop_id: "0013000",
        parent_id: "0013001",
        route_id: "LVTRAM16",
        trip_headsign: "Wahren",
        route_color: "BB1E10",
        directionId: "0",
        agencyName: "Leipziger Verkehrsbetriebe",
        trip_cancelled: false,
        stop_cancelled: false,
        trip_accessible_scheduled: true,
        trip_accessible: true,
        track_scheduled: "A",
        track: "A",
        delay_time: 60,
        departure_delay: 60,
        waiting_time: 5,
        dep_waiting_time: 7,
        alerts: [
            {
                effectiveStartDate: 1670340300000,
                effectiveEndDate: 1670423100000,
                alertDescriptionText: "Planned construction work on track.",
                alertCategory: 4,
            },
        ],
        transport_type: "Tram",
        line: "16",
    },
];

export const mockDirectionResponse = [
    {
        directionId: "0",
        agencyName: "Leipziger Verkehrsbetriebe",
        line: "16",
        route_color: "BB1E10",
        directionName: "Richtung Taucha",
        transport_type: "Tram",
        headsigns: ["Hauptbahnhof", "Sportforum Süd"],
    },
];

export const mockStopsResponse = [
    {
        stop_name: "Grimma, Bahnhof (Bus)",
        stop_id: "0013039",
        lat: 51.232,
        lon: 12.384,
        priority: 4528,
    },
];

export const mockStopTimesResponse = {
    tripInfo: {
        trip_id: "lvb12345",
        service_date: "20250122",
        route_id: "LVTRAM16",
        route_color: "BB1E10",
        directionId: "0",
        agencyName: "Leipziger Verkehrsbetriebe",
        default_headsign: "Wahren",
        trip_cancelled: false,
        trip_accessible_scheduled: true,
        trip_accessible: true,
        transport_type: "Tram",
        line: "16",
    },
    atGivenStop: {
        arrival_time: "17:23:12",
        date: "20250122",
        departure_time: "17:25:00",
        departure_date: "20250122",
        stop_id: "0013000",
        parent_id: "0013001",
        stop_name: "Leipzig Hauptbahnhof",
        stop_sequence: 3,
        trip_headsign: "Wahren",
        stop_cancelled: false,
        track_scheduled: "A",
        track: "A",
        delay_time: 60,
        departure_delay: 60,
        alerts: []
    },
    beforeGivenStop: [],
    afterGivenStop: [],
};
