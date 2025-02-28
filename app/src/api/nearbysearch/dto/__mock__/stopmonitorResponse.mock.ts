//contains: mockMonitorResponse, mockDirectionResponse, mockStopsResponse, mockStopTimesResponse

export const mockMonitorResponse = [{"departure_time_rt":"2025-02-03T12:42:00.000Z","route_short_name":"11","arrival_time":"12:41:00","date":"20250203","departure_time":"12:42:00","departure_date":"20250203","trip_id":"lvb05560STRB__20250129","service_date":"20250203","stop_id":"1000101","parent_id":"0013000","route_id":"LVTRAM11","trip_headsign":"Schkeuditz","line":"11","route_color":"BB1E10","directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","trip_cancelled":false,"stop_cancelled":false,"stop_accessible":true,"trip_accessible":null,"trip_accessible_scheduled":true,"track_scheduled":"A","track":null,"delay_time":null,"departure_delay":null,"waiting_time":1109,"dep_waiting_time":1110,"alerts":[],"transport_type":"Tram"},{"departure_time_rt":"2025-02-03T12:47:00.000Z","route_short_name":"11","arrival_time":"12:47:00","date":"20250203","departure_time":"12:47:00","departure_date":"20250203","trip_id":"lvb05565STRB__20250129","service_date":"20250203","stop_id":"1000102","parent_id":"0013000","route_id":"LVTRAM11","trip_headsign":"Dölitz","line":"11E","route_color":"BB1E10","directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","trip_cancelled":false,"stop_cancelled":false,"stop_accessible":true,"trip_accessible":null,"trip_accessible_scheduled":true,"track_scheduled":"B","track":null,"delay_time":null,"departure_delay":null,"waiting_time":1115,"dep_waiting_time":1115,"alerts":[],"transport_type":"Tram"}]
;

export const mockDirectionResponse = [{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"1","route_color":"61993B","directionName":"Richtung Lausen","transport_type":"Tram","headsigns":["Lausen","Hauptbahnhof","Angerbrücke","Leipzig, Stannebeinplatz"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"1","route_color":"61993B","directionName":"Richtung Stannebeinplatz","transport_type":"Tram","headsigns":["Stannebeinplatz","Hauptbahnhof","Leipzig, Lausen"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"10","route_color":"BB1E10","directionName":"Richtung Lößnig über Connewitzer Kreuz","transport_type":"Tram","headsigns":["Lößnig über Connewitzer Kreuz","Hauptbahnhof","Heiterblick","Paunsdorf, Strbf."]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"10","route_color":"BB1E10","directionName":"Richtung Wahren","transport_type":"Tram","headsigns":["Wahren","Hauptbahnhof","Angerbrücke"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"11","route_color":"BB1E10","directionName":"Richtung Markkleeberg-Ost / Dölitz","transport_type":"Tram","headsigns":["Markkleeberg-Ost","Dölitz","Hauptbahnhof","Leipzig, Hänichen, Bismarckturm","Schkeuditz, Rathausplatz","Leipzig, Wahren (Rathaus)"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"11","route_color":"BB1E10","directionName":"Richtung Schkeuditz / Hänichen","transport_type":"Tram","headsigns":["Schkeuditz","Hänichen","Wahren","Markkleeberg, Ost, Schillerplatz","Angerbrücke","Hauptbahnhof","Leipzig, Dölitz, Straßenbahnhof"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"12","route_color":"00387B","directionName":"Richtung Gohlis-Nord über Zoo","transport_type":"Tram","headsigns":["Gohlis-Nord über Zoo"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"12","route_color":"00387B","directionName":"Richtung Johannisplatz","transport_type":"Tram","headsigns":["Johannisplatz","Technisches Rathaus","Hauptbahnhof","Paunsdorf, Strbf.","Heiterblick"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"14","route_color":"0089B6","directionName":"Richtung Paunsdorf, Strbf. / Hauptbahnhof","transport_type":"Tram","headsigns":["Paunsdorf, Strbf.","Hauptbahnhof"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"14","route_color":"0089B6","directionName":"Richtung S-Bf. Plagwitz","transport_type":"Tram","headsigns":["S-Bf. Plagwitz"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"15","route_color":"00387B","directionName":"Richtung Meusdorf","transport_type":"Tram","headsigns":["Meusdorf","Leipzig, Miltitz"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"15","route_color":"00387B","directionName":"Richtung Miltitz","transport_type":"Tram","headsigns":["Miltitz","Sportforum Süd","Leipzig, Meusdorf"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"16","route_color":"BB1E10","directionName":"Richtung Lößnig","transport_type":"Tram","headsigns":["Lößnig","Hauptbahnhof","Dölitz","Paunsdorf, Strbf.","Wilhelm-Leuschner-Platz"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"16","route_color":"BB1E10","directionName":"Richtung Messegelände","transport_type":"Tram","headsigns":["Messegelände","Hauptbahnhof","Angerbrücke","Klinikum St. Georg"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"3","route_color":"61993B","directionName":"Richtung Knautkleeberg","transport_type":"Tram","headsigns":["Knautkleeberg","Sportforum Süd","Taucha (b. Leipzig), An der Bürgerruhe"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"3","route_color":"61993B","directionName":"Richtung Taucha / Sommerfeld","transport_type":"Tram","headsigns":["Taucha","Sommerfeld","Heiterblick","Paunsdorf-Nord","Leipzig, Grünau, Süd"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"4","route_color":"00387B","directionName":"Richtung Gohlis, Landsberger Straße","transport_type":"Tram","headsigns":["Gohlis, Landsberger Straße","Sportforum Süd","Hauptbahnhof"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"4","route_color":"00387B","directionName":"Richtung Stötteritz","transport_type":"Tram","headsigns":["Stötteritz","Riebeckstraße/ Stötteritzer Straße","Reudnitz, Koehlerstraße","Hauptbahnhof"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"7","route_color":"00387B","directionName":"Richtung Böhlitz-Ehrenberg","transport_type":"Tram","headsigns":["Böhlitz-Ehrenberg","Leipzig, Sommerfeld"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"7","route_color":"00387B","directionName":"Richtung Sommerfeld / Sommerfeld über Torgauer Platz","transport_type":"Tram","headsigns":["Sommerfeld","Sommerfeld über Torgauer Platz","Paunsdorf-Nord über Torgauer Platz","Leipzig, Böhlitz-Ehrenberg, Burghausener Str.","Paunsdorf, Strbf."]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"72","route_color":"903273","directionName":"Richtung Hauptbahnhof","transport_type":"Bus","headsigns":["Hauptbahnhof"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"72","route_color":"903273","directionName":"Richtung Paunsdorf, Strbf. über Engelsdorf","transport_type":"Bus","headsigns":["Paunsdorf, Strbf. über Engelsdorf","Baalsdorf","Engelsdorf Gymnasium"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"73","route_color":"903273","directionName":"Richtung Baalsdorf / Sommerfeld über Baalsdorf / Althen","transport_type":"Bus","headsigns":["Baalsdorf","Sommerfeld über Baalsdorf / Althen","Paunsdorf, Strbf. über Baalsdorf / Althen","Paunsdorf, Strbf. über Baalsdorf / Engelsdorf","Engelsdorf, Gymnasium über Althen / Sommerfeld"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"73","route_color":"903273","directionName":"Richtung Hauptbahnhof","transport_type":"Bus","headsigns":["Hauptbahnhof"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"84","route_color":"903273","directionName":"Richtung Hauptbahnhof","transport_type":"Bus","headsigns":["Hauptbahnhof"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"84","route_color":"903273","directionName":"Richtung Hauptbahnhof","transport_type":"Bus","headsigns":["Hauptbahnhof"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"89","route_color":"903273","directionName":"Richtung Hauptbahnhof","transport_type":"Bus","headsigns":["Hauptbahnhof"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"9","route_color":"F7B528","directionName":"Richtung Hauptbahnhof / Thekla","transport_type":"Tram","headsigns":["Hauptbahnhof","Thekla"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"9","route_color":"F7B528","directionName":"Richtung Paunsdorf, Strbf. / Hauptbahnhof","transport_type":"Tram","headsigns":["Paunsdorf, Strbf.","Hauptbahnhof"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"N1","route_color":"003F6F","directionName":"Richtung Hauptbahnhof","transport_type":"Bus","headsigns":["Hauptbahnhof"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"N1","route_color":"003F6F","directionName":"Richtung Plagwitz - Knautkleeberg","transport_type":"Bus","headsigns":["Plagwitz - Knautkleeberg"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"N10","route_color":"BB1E10","directionName":"Richtung Hauptbahnhof","transport_type":"Tram","headsigns":["Hauptbahnhof"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"N10","route_color":"BB1E10","directionName":"Richtung Lößnig über Connewitzer Kreuz / Sportforum Süd","transport_type":"Tram","headsigns":["Lößnig über Connewitzer Kreuz","Sportforum Süd"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"N17","route_color":"61993B","directionName":"Richtung Lausen","transport_type":"Tram","headsigns":["Lausen"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"N17","route_color":"61993B","directionName":"Richtung Paunsdorf-Nord über Torgauer Platz","transport_type":"Tram","headsigns":["Paunsdorf-Nord über Torgauer Platz"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"N2","route_color":"003F6F","directionName":"Richtung Hauptbahnhof","transport_type":"Bus","headsigns":["Hauptbahnhof"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"N2","route_color":"003F6F","directionName":"Richtung Lindenau - Markranstädt","transport_type":"Bus","headsigns":["Lindenau - Markranstädt","Am kleinen Feld"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"N3","route_color":"003F6F","directionName":"Richtung Hauptbahnhof","transport_type":"Bus","headsigns":["Hauptbahnhof"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"N3","route_color":"003F6F","directionName":"Richtung Rückmarsdorf","transport_type":"Bus","headsigns":["Rückmarsdorf"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"N4","route_color":"003F6F","directionName":"Richtung Hauptbahnhof","transport_type":"Bus","headsigns":["Hauptbahnhof"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"N4","route_color":"003F6F","directionName":"Richtung Wahren - Schkeuditz","transport_type":"Bus","headsigns":["Wahren - Schkeuditz","Hänichen"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"N5","route_color":"003F6F","directionName":"Richtung Gohlis - Wiederitzsch / Hauptbahnhof","transport_type":"Bus","headsigns":["Gohlis - Wiederitzsch","Hauptbahnhof"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"N6","route_color":"003F6F","directionName":"Richtung Hauptbahnhof / Thekla - Taucha","transport_type":"Bus","headsigns":["Hauptbahnhof","Thekla - Taucha","Neutzscher Straße"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"N7","route_color":"003F6F","directionName":"Richtung Baalsdorf - Engelsdorf - Paunsdorf","transport_type":"Bus","headsigns":["Baalsdorf - Engelsdorf - Paunsdorf"]},{"directionId":"1","agencyName":"Leipziger Verkehrsbetriebe","line":"N7","route_color":"003F6F","directionName":"Richtung Hauptbahnhof","transport_type":"Bus","headsigns":["Hauptbahnhof"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"N8","route_color":"003F6F","directionName":"Richtung Hauptbahnhof / Stötteritz - Liebertwolkwitz","transport_type":"Bus","headsigns":["Hauptbahnhof","Stötteritz - Liebertwolkwitz","Stötteritz - Meusdorf"]},{"directionId":"0","agencyName":"Leipziger Verkehrsbetriebe","line":"N9","route_color":"003F6F","directionName":"Richtung Hauptbahnhof / Lößnig - Markkleeberg","transport_type":"Bus","headsigns":["Hauptbahnhof","Lößnig - Markkleeberg","Dölitz"]}]
;

export const mockStopsResponse = 
[
    {
        "stop_name": "Halle (Saale), Marktplatz",
        "stop_id": "0005232",
        "lat": 51.482772,
        "lon": 11.969338,
        "priority": 6185
    },
    {
        "stop_name": "Leipzig, Hauptbahnhof (Tram/Bus)",
        "stop_id": "0013000",
        "lat": 51.343951,
        "lon": 12.38033,
        "priority": 5493
    },
    {
        "stop_name": "Halle (Saale), Franckeplatz",
        "stop_id": "0005125",
        "lat": 51.478548,
        "lon": 11.969596,
        "priority": 5386
    },
    {
        "stop_name": "Grimma, Bahnhof (Bus)",
        "stop_id": "0013039",
        "lat": 51.230246,
        "lon": 12.715398,
        "priority": 4844
    }]
;

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
