export const mockOtpResponse = {
  "RetStatus": {
    "Value": "OK",
    "Comments": ""
  },
  "requestParameters": {
    "From": "51.33821866936748, 12.38351836520276",
    "To": "51.26559788920488, 12.34513467826688",
    "Travelmode": "TRANSIT",
    "date": "02-27-2025",
    "time": "16:20",
    "numItineraries": 3,
    "arriveBy": false,
    "accessibility": false,
    "shortWalk": true,
    "lessTransfers": false,
    "maxWalkDistance": 5000,
    "mockup": false,
    "transitOnly": false
  },
  "plan": {
    "date": 1740669600000,
    "from": {
      "name": "Origin",
      "lon": 12.3835184,
      "lat": 51.3382187
    },
    "to": {
      "name": "Destination",
      "lon": 12.3451347,
      "lat": 51.2655979
    },
    "itineraries": [
      {
        "duration": 3660,
        "startTime": 1740669900000,
        "endTime": 1740673560000,
        "walkTime": 2280,
        "transitTime": 1380,
        "waitingTime": 0,
        "walkDistance": 1152,
        "transfers": 2,
        "legs": [
          {
            "startTime": 1740669900000,
            "endTime": 1740670080000,
            "departureDelay": 0,
            "arrivalDelay": 0,
            "realTime": false,
            "distance": 127,
            "mode": "WALK",
            "transitLeg": false,
            "route": "",
            "from": {
              "name": "Origin",
              "lon": 12.3835184,
              "lat": 51.3382187,
              "departure": 1740669900000,
              "departureDelayedTime": 1740669900000,
              "departureDelayedTimeHHMM": "16:25",
              "arrivalHHMM": "16:25",
              "departureHHMM": "16:25",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false
            },
            "to": {
              "name": "Leipzig, Augustusplatz",
              "stopId": "0013002",
              "lon": 12.381781,
              "lat": 51.33843,
              "arrival": 1740670080000,
              "departure": 1740670080000,
              "zoneId": "110",
              "wheelchairBoarding": 1,
              "departureDelayedTime": 1740670080000,
              "arrivalDelayedTime": 1740670080000,
              "departureDelayedTimeHHMM": "16:28",
              "arrivalDelayedTimeHHMM": "16:28",
              "arrivalHHMM": "16:28",
              "departureHHMM": "16:28",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false,
              "hafas_id": "1000904",
              "hafas_name": "Augustusplatz"
            },
            "legGeometry": {
              "points": [
                {
                  "lat": 51.338210000000004,
                  "lon": 12.38353
                },
                {
                  "lat": 51.338190000000004,
                  "lon": 12.38352
                },
                {
                  "lat": 51.33831000000001,
                  "lon": 12.382930000000002
                },
                {
                  "lat": 51.33847,
                  "lon": 12.382200000000001
                },
                {
                  "lat": 51.338460000000005,
                  "lon": 12.38211
                },
                {
                  "lat": 51.33849000000001,
                  "lon": 12.381990000000002
                },
                {
                  "lat": 51.338420000000006,
                  "lon": 12.381950000000002
                },
                {
                  "lat": 51.338390000000004,
                  "lon": 12.38193
                },
                {
                  "lat": 51.33843,
                  "lon": 12.381780000000001
                }
              ],
              "length": 9
            },
            "steps": [
              {
                "distance": 3,
                "relativeDirection": "DEPART",
                "streetName": "parking aisle",
                "absoluteDirection": "SOUTH",
                "lon": 12.3835323,
                "lat": 51.338216
              },
              {
                "distance": 112,
                "relativeDirection": "RIGHT",
                "streetName": "Leipzig–Elbe-Radroute",
                "absoluteDirection": "WEST",
                "lon": 12.3835225,
                "lat": 51.3381957
              },
              {
                "distance": 13,
                "relativeDirection": "LEFT",
                "streetName": "Augustusplatz",
                "absoluteDirection": "SOUTH",
                "lon": 12.3819984,
                "lat": 51.3384944
              }
            ],
            "rentedBike": false,
            "duration": 180,
            "alerts": [],
            "departureDelayedTime": 1740669900000,
            "arrivalDelayedTime": 1740670080000,
            "departureDelayedTimeHHMM": "16:25",
            "arrivalDelayedTimeHHMM": "16:28",
            "startTimeHHMM": "16:25",
            "endTimeHHMM": "16:28",
            "cancelled": false
          },
          {
            "startTime": 1740670080000,
            "endTime": 1740670260000,
            "departureDelay": 0,
            "arrivalDelay": 0,
            "realTime": true,
            "distance": 809,
            "mode": "TRAM",
            "transitLeg": true,
            "route": "11",
            "agencyName": "Leipziger Verkehrsbetriebe",
            "agencyUrl": "https://www.mdv.de/partner/",
            "routeColor": "BB1E10",
            "routeType": 0,
            "routeId": "LVTRAM11",
            "headsign": "Hänichen",
            "agencyId": "1:00468",
            "tripId": "lvb07981STRB__20250226",
            "serviceDate": "20250227",
            "from": {
              "name": "Leipzig, Augustusplatz",
              "stopId": "0013002",
              "lon": 12.381781,
              "lat": 51.33843,
              "arrival": 1740670080000,
              "departure": 1740670080000,
              "zoneId": "110",
              "stopSequence": 15,
              "wheelchairBoarding": 1,
              "track": null,
              "scheduledTrack": null,
              "departureDelayedTime": 1740670080000,
              "arrivalDelayedTime": 1740670080000,
              "departureDelayedTimeHHMM": "16:28",
              "arrivalDelayedTimeHHMM": "16:28",
              "arrivalHHMM": "16:28",
              "departureHHMM": "16:28",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false,
              "hafas_id": "1000904",
              "hafas_name": "Augustusplatz"
            },
            "to": {
              "name": "Leipzig, Hauptbahnhof (Tram/Bus)",
              "stopId": "0013000",
              "lon": 12.379677,
              "lat": 51.344306,
              "arrival": 1740670260000,
              "departure": 1740670260000,
              "zoneId": "110",
              "stopSequence": 16,
              "wheelchairBoarding": 1,
              "track": "A",
              "scheduledTrack": null,
              "departureDelayedTime": 1740670260000,
              "arrivalDelayedTime": 1740670260000,
              "departureDelayedTimeHHMM": "16:31",
              "arrivalDelayedTimeHHMM": "16:31",
              "arrivalHHMM": "16:31",
              "departureHHMM": "16:31",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false,
              "hafas_id": "1000101",
              "hafas_name": "Hauptbahnhof (Steig A)"
            },
            "intermediateStops": [],
            "legGeometry": {
              "points": [
                {
                  "lat": 51.338420000000006,
                  "lon": 12.381780000000001
                },
                {
                  "lat": 51.338420000000006,
                  "lon": 12.381770000000001
                },
                {
                  "lat": 51.338530000000006,
                  "lon": 12.38183
                },
                {
                  "lat": 51.33865,
                  "lon": 12.38189
                },
                {
                  "lat": 51.33872,
                  "lon": 12.38194
                },
                {
                  "lat": 51.338750000000005,
                  "lon": 12.381950000000002
                },
                {
                  "lat": 51.338840000000005,
                  "lon": 12.382000000000001
                },
                {
                  "lat": 51.338860000000004,
                  "lon": 12.382010000000001
                },
                {
                  "lat": 51.33897,
                  "lon": 12.38207
                },
                {
                  "lat": 51.339000000000006,
                  "lon": 12.382090000000002
                },
                {
                  "lat": 51.339020000000005,
                  "lon": 12.382100000000001
                },
                {
                  "lat": 51.33919,
                  "lon": 12.382190000000001
                },
                {
                  "lat": 51.33943000000001,
                  "lon": 12.3823
                },
                {
                  "lat": 51.33968,
                  "lon": 12.382390000000001
                },
                {
                  "lat": 51.339960000000005,
                  "lon": 12.382480000000001
                },
                {
                  "lat": 51.340070000000004,
                  "lon": 12.382510000000002
                },
                {
                  "lat": 51.34033,
                  "lon": 12.382570000000001
                },
                {
                  "lat": 51.34066000000001,
                  "lon": 12.38264
                },
                {
                  "lat": 51.34096,
                  "lon": 12.38268
                },
                {
                  "lat": 51.34111000000001,
                  "lon": 12.382700000000002
                },
                {
                  "lat": 51.34138,
                  "lon": 12.38273
                },
                {
                  "lat": 51.34179,
                  "lon": 12.382760000000001
                },
                {
                  "lat": 51.34205000000001,
                  "lon": 12.38277
                },
                {
                  "lat": 51.342130000000004,
                  "lon": 12.38277
                },
                {
                  "lat": 51.34225000000001,
                  "lon": 12.38278
                },
                {
                  "lat": 51.34234000000001,
                  "lon": 12.382800000000001
                },
                {
                  "lat": 51.342420000000004,
                  "lon": 12.38283
                },
                {
                  "lat": 51.34290000000001,
                  "lon": 12.383070000000002
                },
                {
                  "lat": 51.342940000000006,
                  "lon": 12.383090000000001
                },
                {
                  "lat": 51.343,
                  "lon": 12.3831
                },
                {
                  "lat": 51.343050000000005,
                  "lon": 12.3831
                },
                {
                  "lat": 51.343070000000004,
                  "lon": 12.383090000000001
                },
                {
                  "lat": 51.343120000000006,
                  "lon": 12.383070000000002
                },
                {
                  "lat": 51.343160000000005,
                  "lon": 12.383030000000002
                },
                {
                  "lat": 51.343160000000005,
                  "lon": 12.38302
                },
                {
                  "lat": 51.343180000000004,
                  "lon": 12.383000000000001
                },
                {
                  "lat": 51.34319000000001,
                  "lon": 12.382980000000002
                },
                {
                  "lat": 51.343210000000006,
                  "lon": 12.382950000000001
                },
                {
                  "lat": 51.343230000000005,
                  "lon": 12.382880000000002
                },
                {
                  "lat": 51.34331,
                  "lon": 12.382560000000002
                },
                {
                  "lat": 51.34337000000001,
                  "lon": 12.38231
                },
                {
                  "lat": 51.34342,
                  "lon": 12.382060000000001
                },
                {
                  "lat": 51.34344,
                  "lon": 12.38188
                },
                {
                  "lat": 51.34347,
                  "lon": 12.381710000000002
                },
                {
                  "lat": 51.34351,
                  "lon": 12.381580000000001
                },
                {
                  "lat": 51.343630000000005,
                  "lon": 12.381290000000002
                },
                {
                  "lat": 51.34367,
                  "lon": 12.38119
                },
                {
                  "lat": 51.344010000000004,
                  "lon": 12.38038
                },
                {
                  "lat": 51.34404000000001,
                  "lon": 12.380300000000002
                },
                {
                  "lat": 51.344300000000004,
                  "lon": 12.37967
                }
              ],
              "length": 50
            },
            "steps": [],
            "routeShortName": "11",
            "routeLongName": "Tram 11",
            "wheelchairAccessible": 1,
            "duration": 180,
            "alerts": [],
            "departureDelayedTime": 1740670080000,
            "arrivalDelayedTime": 1740670260000,
            "departureDelayedTimeHHMM": "16:28",
            "arrivalDelayedTimeHHMM": "16:31",
            "startTimeHHMM": "16:28",
            "endTimeHHMM": "16:31",
            "cancelled": false,
            "wheelchairBoardingVehicle": null
          },
          {
            "startTime": 1740670260000,
            "endTime": 1740670440000,
            "departureDelay": 0,
            "arrivalDelay": 60,
            "realTime": false,
            "distance": 247,
            "mode": "WALK",
            "transitLeg": false,
            "route": "",
            "from": {
              "name": "Leipzig, Hauptbahnhof (Tram/Bus)",
              "stopId": "0013000",
              "lon": 12.379677,
              "lat": 51.344306,
              "arrival": 1740670260000,
              "departure": 1740670260000,
              "zoneId": "110",
              "wheelchairBoarding": 1,
              "departureDelayedTime": 1740670260000,
              "arrivalDelayedTime": 1740670260000,
              "departureDelayedTimeHHMM": "16:31",
              "arrivalDelayedTimeHHMM": "16:31",
              "arrivalHHMM": "16:31",
              "departureHHMM": "16:31",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false,
              "hafas_id": "1000101",
              "hafas_name": "Hauptbahnhof (Steig A)"
            },
            "to": {
              "name": "Leipzig, Hbf (tief) (S-Bahn)",
              "stopId": "8098205",
              "lon": 12.380428,
              "lat": 51.345696,
              "arrival": 1740670440000,
              "departure": 1740670440000,
              "zoneId": "110",
              "wheelchairBoarding": 1,
              "departureDelayedTime": 1740670500000,
              "arrivalDelayedTime": 1740670500000,
              "departureDelayedTimeHHMM": "16:35",
              "arrivalDelayedTimeHHMM": "16:35",
              "arrivalHHMM": "16:34",
              "departureHHMM": "16:34",
              "arrivalDelay": 60,
              "departureDelay": 60,
              "cancelled": false
            },
            "legGeometry": {
              "points": [
                {
                  "lat": 51.344300000000004,
                  "lon": 12.37967
                },
                {
                  "lat": 51.34431000000001,
                  "lon": 12.37968
                },
                {
                  "lat": 51.34433000000001,
                  "lon": 12.37963
                },
                {
                  "lat": 51.344350000000006,
                  "lon": 12.379650000000002
                },
                {
                  "lat": 51.344370000000005,
                  "lon": 12.37959
                },
                {
                  "lat": 51.344390000000004,
                  "lon": 12.379610000000001
                },
                {
                  "lat": 51.344440000000006,
                  "lon": 12.379660000000001
                },
                {
                  "lat": 51.34449000000001,
                  "lon": 12.379710000000001
                },
                {
                  "lat": 51.34451000000001,
                  "lon": 12.37973
                },
                {
                  "lat": 51.344570000000004,
                  "lon": 12.379800000000001
                },
                {
                  "lat": 51.34458000000001,
                  "lon": 12.37981
                },
                {
                  "lat": 51.34461,
                  "lon": 12.379840000000002
                },
                {
                  "lat": 51.34479,
                  "lon": 12.380020000000002
                },
                {
                  "lat": 51.34479,
                  "lon": 12.380020000000002
                },
                {
                  "lat": 51.344800000000006,
                  "lon": 12.38
                },
                {
                  "lat": 51.344820000000006,
                  "lon": 12.379990000000001
                },
                {
                  "lat": 51.344840000000005,
                  "lon": 12.379980000000002
                },
                {
                  "lat": 51.344860000000004,
                  "lon": 12.379990000000001
                },
                {
                  "lat": 51.34488,
                  "lon": 12.38001
                },
                {
                  "lat": 51.3449,
                  "lon": 12.380040000000001
                },
                {
                  "lat": 51.3449,
                  "lon": 12.380080000000001
                },
                {
                  "lat": 51.3449,
                  "lon": 12.38011
                },
                {
                  "lat": 51.34489000000001,
                  "lon": 12.38014
                },
                {
                  "lat": 51.34494,
                  "lon": 12.380180000000001
                },
                {
                  "lat": 51.345020000000005,
                  "lon": 12.380270000000001
                },
                {
                  "lat": 51.3451,
                  "lon": 12.380360000000001
                },
                {
                  "lat": 51.34507000000001,
                  "lon": 12.38043
                },
                {
                  "lat": 51.345110000000005,
                  "lon": 12.38047
                },
                {
                  "lat": 51.34516000000001,
                  "lon": 12.38052
                },
                {
                  "lat": 51.34523,
                  "lon": 12.38034
                },
                {
                  "lat": 51.34534000000001,
                  "lon": 12.380070000000002
                },
                {
                  "lat": 51.34545000000001,
                  "lon": 12.38019
                },
                {
                  "lat": 51.345560000000006,
                  "lon": 12.380300000000002
                },
                {
                  "lat": 51.34559,
                  "lon": 12.380220000000001
                },
                {
                  "lat": 51.345780000000005,
                  "lon": 12.38043
                },
                {
                  "lat": 51.345760000000006,
                  "lon": 12.38047
                },
                {
                  "lat": 51.345760000000006,
                  "lon": 12.380490000000002
                },
                {
                  "lat": 51.345690000000005,
                  "lon": 12.38042
                },
                {
                  "lat": 51.345690000000005,
                  "lon": 12.38042
                }
              ],
              "length": 39
            },
            "steps": [
              {
                "distance": 8,
                "relativeDirection": "DEPART",
                "streetName": "Steig A",
                "absoluteDirection": "NORTHWEST",
                "lon": 12.3796846,
                "lat": 51.3443132
              },
              {
                "distance": 205,
                "relativeDirection": "LEFT",
                "streetName": "path",
                "absoluteDirection": "NORTHWEST",
                "lon": 12.3796549,
                "lat": 51.3443572
              },
              {
                "distance": 9,
                "relativeDirection": "RIGHT",
                "streetName": "steps",
                "absoluteDirection": "SOUTHWEST",
                "lon": 12.3804968,
                "lat": 51.3457606
              }
            ],
            "rentedBike": false,
            "duration": 240,
            "alerts": [],
            "departureDelayedTime": 1740670260000,
            "arrivalDelayedTime": 1740670500000,
            "departureDelayedTimeHHMM": "16:31",
            "arrivalDelayedTimeHHMM": "16:35",
            "startTimeHHMM": "16:31",
            "endTimeHHMM": "16:34",
            "cancelled": false,
            "durationOriginal": 180
          },
          {
            "startTime": 1740670440000,
            "endTime": 1740671400000,
            "departureDelay": 60,
            "arrivalDelay": 60,
            "realTime": true,
            "distance": 10069,
            "mode": "SUBURB",
            "transitLeg": true,
            "route": "S4",
            "agencyName": "800486",
            "agencyUrl": "https://www.mdv.de/partner/",
            "routeColor": "139640",
            "routeType": 109,
            "routeId": "800486S4",
            "headsign": "Markkleeberg-Gaschwitz",
            "agencyId": "1:800486",
            "tripId": "1505",
            "serviceDate": "20250227",
            "from": {
              "name": "Leipzig, Hbf (tief) (S-Bahn)",
              "stopId": "8098205",
              "lon": 12.380428,
              "lat": 51.345696,
              "arrival": 1740670440000,
              "departure": 1740670440000,
              "zoneId": "110",
              "stopSequence": 13,
              "wheelchairBoarding": 1,
              "track": "1",
              "scheduledTrack": null,
              "departureDelayedTime": 1740670500000,
              "arrivalDelayedTime": 1740670440000,
              "departureDelayedTimeHHMM": "16:35",
              "arrivalDelayedTimeHHMM": "16:34",
              "arrivalHHMM": "16:34",
              "departureHHMM": "16:34",
              "arrivalDelay": 0,
              "departureDelay": 60,
              "cancelled": false
            },
            "to": {
              "name": "Markkleeberg-Großstädteln",
              "stopId": "8010228",
              "lon": 12.376329,
              "lat": 51.262469,
              "arrival": 1740671400000,
              "departure": 1740671400000,
              "zoneId": "151",
              "stopSequence": 21,
              "wheelchairBoarding": 1,
              "track": "1",
              "scheduledTrack": null,
              "departureDelayedTime": 1740671400000,
              "arrivalDelayedTime": 1740671460000,
              "departureDelayedTimeHHMM": "16:50",
              "arrivalDelayedTimeHHMM": "16:51",
              "arrivalHHMM": "16:50",
              "departureHHMM": "16:50",
              "arrivalDelay": 60,
              "departureDelay": 0,
              "cancelled": false
            },
            "intermediateStops": [
              {
                "name": "Leipzig, Markt (S-Bahn)",
                "stopId": "8012186",
                "lon": 12.374612,
                "lat": 51.34064,
                "arrival": 1740670500000,
                "departure": 1740670560000,
                "zoneId": "110",
                "stopSequence": 14,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740670620000,
                "arrivalDelayedTime": 1740670560000,
                "departureDelayedTimeHHMM": "16:37",
                "arrivalDelayedTimeHHMM": "16:36",
                "arrivalHHMM": "16:35",
                "departureHHMM": "16:36",
                "arrivalDelay": 60,
                "departureDelay": 60,
                "cancelled": false
              },
              {
                "name": "Leipzig, Wilhelm-Leuschner-Platz (S-Bahn)",
                "stopId": "8012202",
                "lon": 12.375394,
                "lat": 51.335396,
                "arrival": 1740670620000,
                "departure": 1740670620000,
                "zoneId": "110",
                "stopSequence": 15,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740670680000,
                "arrivalDelayedTime": 1740670620000,
                "departureDelayedTimeHHMM": "16:38",
                "arrivalDelayedTimeHHMM": "16:37",
                "arrivalHHMM": "16:37",
                "departureHHMM": "16:37",
                "arrivalDelay": 0,
                "departureDelay": 60,
                "cancelled": false
              },
              {
                "name": "Leipzig, Bayerischer Bahnhof (S-Bahn)",
                "stopId": "8012184",
                "lon": 12.381658,
                "lat": 51.329267,
                "arrival": 1740670740000,
                "departure": 1740670740000,
                "zoneId": "110",
                "stopSequence": 16,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740670800000,
                "arrivalDelayedTime": 1740670740000,
                "departureDelayedTimeHHMM": "16:40",
                "arrivalDelayedTimeHHMM": "16:39",
                "arrivalHHMM": "16:39",
                "departureHHMM": "16:39",
                "arrivalDelay": 0,
                "departureDelay": 60,
                "cancelled": false
              },
              {
                "name": "Leipzig, MDR (S-Bahn)",
                "stopId": "8012187",
                "lon": 12.386318,
                "lat": 51.320067,
                "arrival": 1740670860000,
                "departure": 1740670860000,
                "zoneId": "110",
                "stopSequence": 17,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740670920000,
                "arrivalDelayedTime": 1740670860000,
                "departureDelayedTimeHHMM": "16:42",
                "arrivalDelayedTimeHHMM": "16:41",
                "arrivalHHMM": "16:41",
                "departureHHMM": "16:41",
                "arrivalDelay": 0,
                "departureDelay": 60,
                "cancelled": false
              },
              {
                "name": "Leipzig, Connewitz (S-Bahn)",
                "stopId": "8010206",
                "lon": 12.386313,
                "lat": 51.300717,
                "arrival": 1740671040000,
                "departure": 1740671040000,
                "zoneId": "110",
                "stopSequence": 18,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740671100000,
                "arrivalDelayedTime": 1740671040000,
                "departureDelayedTimeHHMM": "16:45",
                "arrivalDelayedTimeHHMM": "16:44",
                "arrivalHHMM": "16:44",
                "departureHHMM": "16:44",
                "arrivalDelay": 0,
                "departureDelay": 60,
                "cancelled": false
              },
              {
                "name": "Markkleeberg Nord",
                "stopId": "8012304",
                "lon": 12.372204,
                "lat": 51.287998,
                "arrival": 1740671160000,
                "departure": 1740671160000,
                "zoneId": "110",
                "stopSequence": 19,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740671220000,
                "arrivalDelayedTime": 1740671160000,
                "departureDelayedTimeHHMM": "16:47",
                "arrivalDelayedTimeHHMM": "16:46",
                "arrivalHHMM": "16:46",
                "departureHHMM": "16:46",
                "arrivalDelay": 0,
                "departureDelay": 60,
                "cancelled": false
              },
              {
                "name": "Markkleeberg",
                "stopId": "8012308",
                "lon": 12.372615,
                "lat": 51.279029,
                "arrival": 1740671280000,
                "departure": 1740671280000,
                "zoneId": "151",
                "stopSequence": 20,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740671340000,
                "arrivalDelayedTime": 1740671280000,
                "departureDelayedTimeHHMM": "16:49",
                "arrivalDelayedTimeHHMM": "16:48",
                "arrivalHHMM": "16:48",
                "departureHHMM": "16:48",
                "arrivalDelay": 0,
                "departureDelay": 60,
                "cancelled": false
              }
            ],
            "legGeometry": {
              "points": [
                {
                  "lat": 51.345710000000004,
                  "lon": 12.38038
                },
                {
                  "lat": 51.345710000000004,
                  "lon": 12.38038
                },
                {
                  "lat": 51.34544,
                  "lon": 12.380080000000001
                },
                {
                  "lat": 51.344800000000006,
                  "lon": 12.379380000000001
                },
                {
                  "lat": 51.34452,
                  "lon": 12.379000000000001
                },
                {
                  "lat": 51.344240000000006,
                  "lon": 12.37856
                },
                {
                  "lat": 51.34393000000001,
                  "lon": 12.378070000000001
                },
                {
                  "lat": 51.34344,
                  "lon": 12.37724
                },
                {
                  "lat": 51.342940000000006,
                  "lon": 12.37644
                },
                {
                  "lat": 51.342670000000005,
                  "lon": 12.376050000000001
                },
                {
                  "lat": 51.34241,
                  "lon": 12.3757
                },
                {
                  "lat": 51.34212,
                  "lon": 12.37536
                },
                {
                  "lat": 51.34174,
                  "lon": 12.37503
                },
                {
                  "lat": 51.341370000000005,
                  "lon": 12.374780000000001
                },
                {
                  "lat": 51.340900000000005,
                  "lon": 12.374550000000001
                },
                {
                  "lat": 51.34071,
                  "lon": 12.374490000000002
                },
                {
                  "lat": 51.340650000000004,
                  "lon": 12.37448
                },
                {
                  "lat": 51.340650000000004,
                  "lon": 12.37448
                },
                {
                  "lat": 51.34033,
                  "lon": 12.374390000000002
                },
                {
                  "lat": 51.33973,
                  "lon": 12.37432
                },
                {
                  "lat": 51.33917,
                  "lon": 12.374350000000002
                },
                {
                  "lat": 51.33818,
                  "lon": 12.374460000000001
                },
                {
                  "lat": 51.33775000000001,
                  "lon": 12.37456
                },
                {
                  "lat": 51.3374,
                  "lon": 12.374690000000001
                },
                {
                  "lat": 51.336920000000006,
                  "lon": 12.374950000000002
                },
                {
                  "lat": 51.336670000000005,
                  "lon": 12.375020000000001
                },
                {
                  "lat": 51.335420000000006,
                  "lon": 12.37523
                },
                {
                  "lat": 51.33538,
                  "lon": 12.375240000000002
                },
                {
                  "lat": 51.33538,
                  "lon": 12.375240000000002
                },
                {
                  "lat": 51.335100000000004,
                  "lon": 12.37531
                },
                {
                  "lat": 51.33485,
                  "lon": 12.3754
                },
                {
                  "lat": 51.33466000000001,
                  "lon": 12.375490000000001
                },
                {
                  "lat": 51.33451,
                  "lon": 12.375580000000001
                },
                {
                  "lat": 51.334320000000005,
                  "lon": 12.375710000000002
                },
                {
                  "lat": 51.33419000000001,
                  "lon": 12.375810000000001
                },
                {
                  "lat": 51.333740000000006,
                  "lon": 12.37625
                },
                {
                  "lat": 51.333380000000005,
                  "lon": 12.37663
                },
                {
                  "lat": 51.33303,
                  "lon": 12.3771
                },
                {
                  "lat": 51.331790000000005,
                  "lon": 12.37911
                },
                {
                  "lat": 51.330960000000005,
                  "lon": 12.38029
                },
                {
                  "lat": 51.33046,
                  "lon": 12.380770000000002
                },
                {
                  "lat": 51.330180000000006,
                  "lon": 12.381010000000002
                },
                {
                  "lat": 51.32972,
                  "lon": 12.38133
                },
                {
                  "lat": 51.3295,
                  "lon": 12.381440000000001
                },
                {
                  "lat": 51.32925,
                  "lon": 12.381570000000002
                },
                {
                  "lat": 51.32925,
                  "lon": 12.381570000000002
                },
                {
                  "lat": 51.328880000000005,
                  "lon": 12.381760000000002
                },
                {
                  "lat": 51.32846000000001,
                  "lon": 12.382010000000001
                },
                {
                  "lat": 51.32589,
                  "lon": 12.383280000000001
                },
                {
                  "lat": 51.32511,
                  "lon": 12.383650000000001
                },
                {
                  "lat": 51.32305,
                  "lon": 12.38469
                },
                {
                  "lat": 51.32005,
                  "lon": 12.38624
                },
                {
                  "lat": 51.32005,
                  "lon": 12.38624
                },
                {
                  "lat": 51.31992,
                  "lon": 12.386310000000002
                },
                {
                  "lat": 51.31732,
                  "lon": 12.38765
                },
                {
                  "lat": 51.31720000000001,
                  "lon": 12.38771
                },
                {
                  "lat": 51.3164,
                  "lon": 12.38813
                },
                {
                  "lat": 51.31541000000001,
                  "lon": 12.38864
                },
                {
                  "lat": 51.3147,
                  "lon": 12.38902
                },
                {
                  "lat": 51.31416,
                  "lon": 12.38929
                },
                {
                  "lat": 51.31342,
                  "lon": 12.389640000000002
                },
                {
                  "lat": 51.31288000000001,
                  "lon": 12.38986
                },
                {
                  "lat": 51.31195,
                  "lon": 12.39015
                },
                {
                  "lat": 51.311510000000006,
                  "lon": 12.390250000000002
                },
                {
                  "lat": 51.310880000000004,
                  "lon": 12.390350000000002
                },
                {
                  "lat": 51.310230000000004,
                  "lon": 12.39043
                },
                {
                  "lat": 51.309180000000005,
                  "lon": 12.39052
                },
                {
                  "lat": 51.30888,
                  "lon": 12.390530000000002
                },
                {
                  "lat": 51.308530000000005,
                  "lon": 12.39052
                },
                {
                  "lat": 51.308020000000006,
                  "lon": 12.39047
                },
                {
                  "lat": 51.307860000000005,
                  "lon": 12.390440000000002
                },
                {
                  "lat": 51.30762000000001,
                  "lon": 12.390390000000002
                },
                {
                  "lat": 51.3074,
                  "lon": 12.39033
                },
                {
                  "lat": 51.307140000000004,
                  "lon": 12.390250000000002
                },
                {
                  "lat": 51.30687,
                  "lon": 12.39014
                },
                {
                  "lat": 51.305690000000006,
                  "lon": 12.389660000000001
                },
                {
                  "lat": 51.305200000000006,
                  "lon": 12.38944
                },
                {
                  "lat": 51.30456,
                  "lon": 12.389130000000002
                },
                {
                  "lat": 51.304010000000005,
                  "lon": 12.38882
                },
                {
                  "lat": 51.303470000000004,
                  "lon": 12.388480000000001
                },
                {
                  "lat": 51.30306,
                  "lon": 12.388200000000001
                },
                {
                  "lat": 51.30254000000001,
                  "lon": 12.3878
                },
                {
                  "lat": 51.302260000000004,
                  "lon": 12.387580000000002
                },
                {
                  "lat": 51.30199,
                  "lon": 12.387350000000001
                },
                {
                  "lat": 51.30147,
                  "lon": 12.386880000000001
                },
                {
                  "lat": 51.300990000000006,
                  "lon": 12.386410000000001
                },
                {
                  "lat": 51.30077000000001,
                  "lon": 12.386180000000001
                },
                {
                  "lat": 51.30077000000001,
                  "lon": 12.386180000000001
                },
                {
                  "lat": 51.30073,
                  "lon": 12.38615
                },
                {
                  "lat": 51.300340000000006,
                  "lon": 12.385720000000001
                },
                {
                  "lat": 51.299870000000006,
                  "lon": 12.38516
                },
                {
                  "lat": 51.299670000000006,
                  "lon": 12.384900000000002
                },
                {
                  "lat": 51.29943,
                  "lon": 12.384580000000001
                },
                {
                  "lat": 51.299350000000004,
                  "lon": 12.38446
                },
                {
                  "lat": 51.29892,
                  "lon": 12.383820000000002
                },
                {
                  "lat": 51.29874,
                  "lon": 12.38352
                },
                {
                  "lat": 51.29793,
                  "lon": 12.382190000000001
                },
                {
                  "lat": 51.295950000000005,
                  "lon": 12.37897
                },
                {
                  "lat": 51.29549,
                  "lon": 12.378240000000002
                },
                {
                  "lat": 51.29507,
                  "lon": 12.377630000000002
                },
                {
                  "lat": 51.294830000000005,
                  "lon": 12.377310000000001
                },
                {
                  "lat": 51.29431,
                  "lon": 12.376650000000001
                },
                {
                  "lat": 51.293620000000004,
                  "lon": 12.375860000000001
                },
                {
                  "lat": 51.29309000000001,
                  "lon": 12.37532
                },
                {
                  "lat": 51.29262000000001,
                  "lon": 12.374880000000001
                },
                {
                  "lat": 51.292210000000004,
                  "lon": 12.374500000000001
                },
                {
                  "lat": 51.29186000000001,
                  "lon": 12.374210000000001
                },
                {
                  "lat": 51.2916,
                  "lon": 12.374
                },
                {
                  "lat": 51.29126,
                  "lon": 12.373750000000001
                },
                {
                  "lat": 51.290760000000006,
                  "lon": 12.3734
                },
                {
                  "lat": 51.29052,
                  "lon": 12.37325
                },
                {
                  "lat": 51.29019,
                  "lon": 12.373050000000001
                },
                {
                  "lat": 51.289730000000006,
                  "lon": 12.372800000000002
                },
                {
                  "lat": 51.28887,
                  "lon": 12.372370000000002
                },
                {
                  "lat": 51.288470000000004,
                  "lon": 12.372200000000001
                },
                {
                  "lat": 51.28810000000001,
                  "lon": 12.37207
                },
                {
                  "lat": 51.28801000000001,
                  "lon": 12.37204
                },
                {
                  "lat": 51.28801000000001,
                  "lon": 12.37204
                },
                {
                  "lat": 51.28781000000001,
                  "lon": 12.37198
                },
                {
                  "lat": 51.28723,
                  "lon": 12.371820000000001
                },
                {
                  "lat": 51.28669000000001,
                  "lon": 12.371720000000002
                },
                {
                  "lat": 51.2862,
                  "lon": 12.37165
                },
                {
                  "lat": 51.28551,
                  "lon": 12.371590000000001
                },
                {
                  "lat": 51.28508,
                  "lon": 12.371580000000002
                },
                {
                  "lat": 51.28461,
                  "lon": 12.371580000000002
                },
                {
                  "lat": 51.28414,
                  "lon": 12.3716
                },
                {
                  "lat": 51.28358000000001,
                  "lon": 12.37165
                },
                {
                  "lat": 51.28302000000001,
                  "lon": 12.371730000000001
                },
                {
                  "lat": 51.28094,
                  "lon": 12.372140000000002
                },
                {
                  "lat": 51.280060000000006,
                  "lon": 12.37226
                },
                {
                  "lat": 51.27958,
                  "lon": 12.37236
                },
                {
                  "lat": 51.27901000000001,
                  "lon": 12.372480000000001
                },
                {
                  "lat": 51.27901000000001,
                  "lon": 12.372480000000001
                },
                {
                  "lat": 51.27901000000001,
                  "lon": 12.372480000000001
                },
                {
                  "lat": 51.278620000000004,
                  "lon": 12.372570000000001
                },
                {
                  "lat": 51.277860000000004,
                  "lon": 12.37273
                },
                {
                  "lat": 51.27751000000001,
                  "lon": 12.372810000000001
                },
                {
                  "lat": 51.27601000000001,
                  "lon": 12.373240000000001
                },
                {
                  "lat": 51.275360000000006,
                  "lon": 12.373420000000001
                },
                {
                  "lat": 51.26718,
                  "lon": 12.375240000000002
                },
                {
                  "lat": 51.26594000000001,
                  "lon": 12.375490000000001
                },
                {
                  "lat": 51.264880000000005,
                  "lon": 12.375660000000002
                },
                {
                  "lat": 51.26395,
                  "lon": 12.37584
                },
                {
                  "lat": 51.26361000000001,
                  "lon": 12.37592
                },
                {
                  "lat": 51.262600000000006,
                  "lon": 12.376190000000001
                },
                {
                  "lat": 51.26245,
                  "lon": 12.376230000000001
                }
              ],
              "length": 146
            },
            "steps": [],
            "routeShortName": "S4",
            "routeLongName": "S-Bahn S4",
            "wheelchairAccessible": 1,
            "duration": 960,
            "alerts": [],
            "departureDelayedTime": 1740670500000,
            "arrivalDelayedTime": 1740671460000,
            "departureDelayedTimeHHMM": "16:35",
            "arrivalDelayedTimeHHMM": "16:51",
            "startTimeHHMM": "16:34",
            "endTimeHHMM": "16:50",
            "cancelled": false,
            "wheelchairBoardingVehicle": null
          },
          {
            "startTime": 1740671400000,
            "endTime": 1740672720000,
            "departureDelay": 60,
            "arrivalDelay": 0,
            "realTime": false,
            "distance": 97,
            "mode": "WALK",
            "transitLeg": false,
            "route": "",
            "from": {
              "name": "Markkleeberg-Großstädteln",
              "stopId": "8010228",
              "lon": 12.376329,
              "lat": 51.262469,
              "arrival": 1740671400000,
              "departure": 1740671400000,
              "zoneId": "151",
              "wheelchairBoarding": 1,
              "departureDelayedTime": 1740671460000,
              "arrivalDelayedTime": 1740671460000,
              "departureDelayedTimeHHMM": "16:51",
              "arrivalDelayedTimeHHMM": "16:51",
              "arrivalHHMM": "16:50",
              "departureHHMM": "16:50",
              "arrivalDelay": 60,
              "departureDelay": 60,
              "cancelled": false
            },
            "to": {
              "name": "Großstädteln (Markkleeberg), S-Bahnhof/ZöbigkerStr.",
              "stopId": "0012997",
              "lon": 12.377051,
              "lat": 51.262094,
              "arrival": 1740672720000,
              "departure": 1740672720000,
              "zoneId": "151",
              "wheelchairBoarding": 0,
              "departureDelayedTime": 1740672720000,
              "arrivalDelayedTime": 1740672720000,
              "departureDelayedTimeHHMM": "17:12",
              "arrivalDelayedTimeHHMM": "17:12",
              "arrivalHHMM": "17:12",
              "departureHHMM": "17:12",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false
            },
            "legGeometry": {
              "points": [
                {
                  "lat": 51.262460000000004,
                  "lon": 12.376320000000002
                },
                {
                  "lat": 51.26247000000001,
                  "lon": 12.37639
                },
                {
                  "lat": 51.262260000000005,
                  "lon": 12.37644
                },
                {
                  "lat": 51.262260000000005,
                  "lon": 12.376410000000002
                },
                {
                  "lat": 51.262260000000005,
                  "lon": 12.376370000000001
                },
                {
                  "lat": 51.26223,
                  "lon": 12.376370000000001
                },
                {
                  "lat": 51.26209000000001,
                  "lon": 12.3764
                },
                {
                  "lat": 51.26207,
                  "lon": 12.376410000000002
                },
                {
                  "lat": 51.26205,
                  "lon": 12.376410000000002
                },
                {
                  "lat": 51.26207,
                  "lon": 12.37662
                },
                {
                  "lat": 51.26209000000001,
                  "lon": 12.37681
                },
                {
                  "lat": 51.262100000000004,
                  "lon": 12.376940000000001
                },
                {
                  "lat": 51.26209000000001,
                  "lon": 12.376980000000001
                },
                {
                  "lat": 51.262080000000005,
                  "lon": 12.376990000000001
                },
                {
                  "lat": 51.262080000000005,
                  "lon": 12.37705
                },
                {
                  "lat": 51.26209000000001,
                  "lon": 12.37705
                }
              ],
              "length": 16
            },
            "steps": [
              {
                "distance": 24,
                "relativeDirection": "DEPART",
                "streetName": "Markkleeberg-Großstädteln",
                "absoluteDirection": "SOUTH",
                "lon": 12.3763955,
                "lat": 51.262475
              },
              {
                "distance": 69,
                "relativeDirection": "RIGHT",
                "streetName": "path",
                "absoluteDirection": "WEST",
                "lon": 12.3764433,
                "lat": 51.2622693
              },
              {
                "distance": 6,
                "relativeDirection": "RIGHT",
                "streetName": "Großstädteln, S-Bahnhof",
                "absoluteDirection": "SOUTH",
                "lon": 12.3769891,
                "lat": 51.2620968
              }
            ],
            "rentedBike": false,
            "duration": 1260,
            "alerts": [],
            "departureDelayedTime": 1740671460000,
            "arrivalDelayedTime": 1740672720000,
            "departureDelayedTimeHHMM": "16:51",
            "arrivalDelayedTimeHHMM": "17:12",
            "startTimeHHMM": "16:50",
            "endTimeHHMM": "17:12",
            "cancelled": false,
            "durationOriginal": 1320
          },
          {
            "startTime": 1740672720000,
            "endTime": 1740672960000,
            "departureDelay": 0,
            "arrivalDelay": 0,
            "realTime": false,
            "distance": 2093,
            "mode": "BUS",
            "transitLeg": true,
            "route": "106",
            "agencyName": "Regionalbus Leipzig GmbH",
            "agencyUrl": "https://www.mdv.de/partner/",
            "routeColor": "9b2986",
            "routeType": 3,
            "routeId": "RL____106",
            "tripShortName": "106053",
            "headsign": "Leipzig, Probstheida, Buswendestelle",
            "agencyId": "1:00704",
            "tripId": "61006",
            "serviceDate": "20250227",
            "from": {
              "name": "Großstädteln (Markkleeberg), S-Bahnhof/ZöbigkerStr.",
              "stopId": "0012997",
              "lon": 12.377051,
              "lat": 51.262094,
              "arrival": 1740672720000,
              "departure": 1740672720000,
              "zoneId": "151",
              "stopSequence": 1,
              "wheelchairBoarding": 0,
              "track": null,
              "scheduledTrack": null,
              "departureDelayedTime": 1740672720000,
              "arrivalDelayedTime": 1740672720000,
              "departureDelayedTimeHHMM": "17:12",
              "arrivalDelayedTimeHHMM": "17:12",
              "arrivalHHMM": "17:12",
              "departureHHMM": "17:12",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false
            },
            "to": {
              "name": "Zöbigker (Markkleeberg), Schmiede",
              "stopId": "0012987",
              "lon": 12.351914,
              "lat": 51.26663,
              "arrival": 1740672960000,
              "departure": 1740672960000,
              "zoneId": "151",
              "stopSequence": 5,
              "wheelchairBoarding": 0,
              "track": null,
              "scheduledTrack": null,
              "departureDelayedTime": 1740672960000,
              "arrivalDelayedTime": 1740672960000,
              "departureDelayedTimeHHMM": "17:16",
              "arrivalDelayedTimeHHMM": "17:16",
              "arrivalHHMM": "17:16",
              "departureHHMM": "17:16",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false
            },
            "intermediateStops": [
              {
                "name": "Zöbigker (Markkleeberg), Meisenweg",
                "stopId": "0012985",
                "lon": 12.368028,
                "lat": 51.262046,
                "arrival": 1740672780000,
                "departure": 1740672780000,
                "zoneId": "151",
                "stopSequence": 2,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672780000,
                "arrivalDelayedTime": 1740672780000,
                "departureDelayedTimeHHMM": "17:13",
                "arrivalDelayedTimeHHMM": "17:13",
                "arrivalHHMM": "17:13",
                "departureHHMM": "17:13",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Zöbigker (Markkleeberg), An der Harth",
                "stopId": "0003850",
                "lon": 12.365164,
                "lat": 51.262471,
                "arrival": 1740672840000,
                "departure": 1740672840000,
                "zoneId": "151",
                "stopSequence": 3,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672840000,
                "arrivalDelayedTime": 1740672840000,
                "departureDelayedTimeHHMM": "17:14",
                "arrivalDelayedTimeHHMM": "17:14",
                "arrivalHHMM": "17:14",
                "departureHHMM": "17:14",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Zöbigker (Markkleeberg), Holunderweg",
                "stopId": "0012984",
                "lon": 12.357989,
                "lat": 51.263711,
                "arrival": 1740672900000,
                "departure": 1740672900000,
                "zoneId": "151",
                "stopSequence": 4,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672900000,
                "arrivalDelayedTime": 1740672900000,
                "departureDelayedTimeHHMM": "17:15",
                "arrivalDelayedTimeHHMM": "17:15",
                "arrivalHHMM": "17:15",
                "departureHHMM": "17:15",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              }
            ],
            "legGeometry": {
              "points": [
                {
                  "lat": 51.26205,
                  "lon": 12.37706
                },
                {
                  "lat": 51.26189,
                  "lon": 12.37523
                },
                {
                  "lat": 51.26184000000001,
                  "lon": 12.374780000000001
                },
                {
                  "lat": 51.261320000000005,
                  "lon": 12.372100000000001
                },
                {
                  "lat": 51.26131,
                  "lon": 12.371970000000001
                },
                {
                  "lat": 51.261320000000005,
                  "lon": 12.371900000000002
                },
                {
                  "lat": 51.261900000000004,
                  "lon": 12.36847
                },
                {
                  "lat": 51.261990000000004,
                  "lon": 12.36814
                },
                {
                  "lat": 51.262010000000004,
                  "lon": 12.368010000000002
                },
                {
                  "lat": 51.262010000000004,
                  "lon": 12.368010000000002
                },
                {
                  "lat": 51.262040000000006,
                  "lon": 12.36785
                },
                {
                  "lat": 51.26205,
                  "lon": 12.367820000000002
                },
                {
                  "lat": 51.26203,
                  "lon": 12.367630000000002
                },
                {
                  "lat": 51.26232,
                  "lon": 12.36594
                },
                {
                  "lat": 51.26236,
                  "lon": 12.365730000000001
                },
                {
                  "lat": 51.26249000000001,
                  "lon": 12.36518
                },
                {
                  "lat": 51.26249000000001,
                  "lon": 12.36517
                },
                {
                  "lat": 51.26249000000001,
                  "lon": 12.36517
                },
                {
                  "lat": 51.26254,
                  "lon": 12.364880000000001
                },
                {
                  "lat": 51.262550000000005,
                  "lon": 12.364820000000002
                },
                {
                  "lat": 51.26256000000001,
                  "lon": 12.364540000000002
                },
                {
                  "lat": 51.263540000000006,
                  "lon": 12.358720000000002
                },
                {
                  "lat": 51.26366,
                  "lon": 12.357970000000002
                },
                {
                  "lat": 51.26366,
                  "lon": 12.357970000000002
                },
                {
                  "lat": 51.26482000000001,
                  "lon": 12.35105
                },
                {
                  "lat": 51.26485,
                  "lon": 12.35097
                },
                {
                  "lat": 51.26487,
                  "lon": 12.350930000000002
                },
                {
                  "lat": 51.26491000000001,
                  "lon": 12.350930000000002
                },
                {
                  "lat": 51.265150000000006,
                  "lon": 12.35105
                },
                {
                  "lat": 51.26545,
                  "lon": 12.351230000000001
                },
                {
                  "lat": 51.26579,
                  "lon": 12.35153
                },
                {
                  "lat": 51.26599,
                  "lon": 12.351730000000002
                },
                {
                  "lat": 51.2661,
                  "lon": 12.35181
                },
                {
                  "lat": 51.266220000000004,
                  "lon": 12.351870000000002
                },
                {
                  "lat": 51.266270000000006,
                  "lon": 12.351890000000001
                },
                {
                  "lat": 51.26635,
                  "lon": 12.3519
                },
                {
                  "lat": 51.26644,
                  "lon": 12.351890000000001
                },
                {
                  "lat": 51.26662,
                  "lon": 12.35185
                }
              ],
              "length": 38
            },
            "steps": [],
            "routeShortName": "106",
            "routeLongName": "Bus 106",
            "wheelchairAccessible": 0,
            "duration": 240,
            "alerts": [],
            "departureDelayedTime": 1740672720000,
            "arrivalDelayedTime": 1740672960000,
            "departureDelayedTimeHHMM": "17:12",
            "arrivalDelayedTimeHHMM": "17:16",
            "startTimeHHMM": "17:12",
            "endTimeHHMM": "17:16",
            "cancelled": false,
            "wheelchairBoardingVehicle": null
          },
          {
            "startTime": 1740672960000,
            "endTime": 1740673560000,
            "departureDelay": 0,
            "arrivalDelay": 0,
            "realTime": false,
            "distance": 683,
            "mode": "WALK",
            "transitLeg": false,
            "route": "",
            "from": {
              "name": "Zöbigker (Markkleeberg), Schmiede",
              "stopId": "0012987",
              "lon": 12.351914,
              "lat": 51.26663,
              "arrival": 1740672960000,
              "departure": 1740672960000,
              "zoneId": "151",
              "wheelchairBoarding": 0,
              "departureDelayedTime": 1740672960000,
              "arrivalDelayedTime": 1740672960000,
              "departureDelayedTimeHHMM": "17:16",
              "arrivalDelayedTimeHHMM": "17:16",
              "arrivalHHMM": "17:16",
              "departureHHMM": "17:16",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false
            },
            "to": {
              "name": "Destination",
              "lon": 12.3451347,
              "lat": 51.2655979,
              "arrival": 1740673560000,
              "departureDelayedTime": 1740673560000,
              "arrivalDelayedTime": 1740673560000,
              "arrivalDelayedTimeHHMM": "17:26",
              "arrivalHHMM": "17:26",
              "departureHHMM": "17:26",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false
            },
            "legGeometry": {
              "points": [
                {
                  "lat": 51.266630000000006,
                  "lon": 12.35191
                },
                {
                  "lat": 51.26662,
                  "lon": 12.35185
                },
                {
                  "lat": 51.26644,
                  "lon": 12.351890000000001
                },
                {
                  "lat": 51.26635,
                  "lon": 12.3519
                },
                {
                  "lat": 51.266270000000006,
                  "lon": 12.351890000000001
                },
                {
                  "lat": 51.26621,
                  "lon": 12.351870000000002
                },
                {
                  "lat": 51.2661,
                  "lon": 12.35181
                },
                {
                  "lat": 51.26599,
                  "lon": 12.351730000000002
                },
                {
                  "lat": 51.26579,
                  "lon": 12.35153
                },
                {
                  "lat": 51.265730000000005,
                  "lon": 12.35148
                },
                {
                  "lat": 51.2657,
                  "lon": 12.351450000000002
                },
                {
                  "lat": 51.26559,
                  "lon": 12.351350000000002
                },
                {
                  "lat": 51.265440000000005,
                  "lon": 12.351230000000001
                },
                {
                  "lat": 51.2653,
                  "lon": 12.351140000000001
                },
                {
                  "lat": 51.265150000000006,
                  "lon": 12.35105
                },
                {
                  "lat": 51.26484000000001,
                  "lon": 12.350900000000001
                },
                {
                  "lat": 51.26483,
                  "lon": 12.350700000000002
                },
                {
                  "lat": 51.26483,
                  "lon": 12.350510000000002
                },
                {
                  "lat": 51.264900000000004,
                  "lon": 12.3495
                },
                {
                  "lat": 51.264900000000004,
                  "lon": 12.349390000000001
                },
                {
                  "lat": 51.264900000000004,
                  "lon": 12.34894
                },
                {
                  "lat": 51.264900000000004,
                  "lon": 12.348170000000001
                },
                {
                  "lat": 51.26500000000001,
                  "lon": 12.34693
                },
                {
                  "lat": 51.26500000000001,
                  "lon": 12.346910000000001
                },
                {
                  "lat": 51.265010000000004,
                  "lon": 12.346860000000001
                },
                {
                  "lat": 51.265010000000004,
                  "lon": 12.346770000000001
                },
                {
                  "lat": 51.26505,
                  "lon": 12.346380000000002
                },
                {
                  "lat": 51.26507,
                  "lon": 12.34622
                },
                {
                  "lat": 51.26512,
                  "lon": 12.345690000000001
                },
                {
                  "lat": 51.26516,
                  "lon": 12.345250000000002
                },
                {
                  "lat": 51.265150000000006,
                  "lon": 12.345180000000001
                },
                {
                  "lat": 51.265170000000005,
                  "lon": 12.34514
                },
                {
                  "lat": 51.265370000000004,
                  "lon": 12.344890000000001
                },
                {
                  "lat": 51.265420000000006,
                  "lon": 12.344840000000001
                },
                {
                  "lat": 51.26547000000001,
                  "lon": 12.344800000000001
                },
                {
                  "lat": 51.26552,
                  "lon": 12.344780000000002
                },
                {
                  "lat": 51.26559,
                  "lon": 12.344790000000001
                },
                {
                  "lat": 51.265640000000005,
                  "lon": 12.344800000000001
                },
                {
                  "lat": 51.26568,
                  "lon": 12.344830000000002
                }
              ],
              "length": 39
            },
            "steps": [
              {
                "distance": 214,
                "relativeDirection": "DEPART",
                "streetName": "Koburger Straße",
                "absoluteDirection": "SOUTH",
                "lon": 12.3518514,
                "lat": 51.2666239
              },
              {
                "distance": 283,
                "relativeDirection": "RIGHT",
                "streetName": "Cospudener Straße",
                "absoluteDirection": "WEST",
                "lon": 12.3509008,
                "lat": 51.2648417
              },
              {
                "distance": 119,
                "relativeDirection": "CONTINUE",
                "streetName": "path",
                "absoluteDirection": "WEST",
                "lon": 12.3468632,
                "lat": 51.2650104
              },
              {
                "distance": 69,
                "relativeDirection": "RIGHT",
                "streetName": "Ostuferweg",
                "absoluteDirection": "NORTHWEST",
                "lon": 12.345181,
                "lat": 51.265154
              }
            ],
            "rentedBike": false,
            "duration": 600,
            "alerts": [],
            "departureDelayedTime": 1740672960000,
            "arrivalDelayedTime": 1740673560000,
            "departureDelayedTimeHHMM": "17:16",
            "arrivalDelayedTimeHHMM": "17:26",
            "startTimeHHMM": "17:16",
            "endTimeHHMM": "17:26",
            "cancelled": false
          }
        ],
        "otpVersion": "2.1",
        "startTimeHHMM": "16:25",
        "endTimeHHMM": "17:25",
        "durationHHMM": "01:01",
        "zoneInfo": {
          "zones": [
            "110",
            "151"
          ],
          "orderedZones": [
            "110",
            "151"
          ],
          "shortDistanceTicket": false
        },
        "index": 0
      },
      {
        "duration": 4320,
        "startTime": 1740670080000,
        "endTime": 1740674400000,
        "walkTime": 1140,
        "transitTime": 3180,
        "waitingTime": 0,
        "walkDistance": 911,
        "transfers": 1,
        "legs": [
          {
            "startTime": 1740670080000,
            "endTime": 1740670320000,
            "departureDelay": 0,
            "arrivalDelay": 0,
            "realTime": false,
            "distance": 195,
            "mode": "WALK",
            "transitLeg": false,
            "route": "",
            "from": {
              "name": "Origin",
              "lon": 12.3835184,
              "lat": 51.3382187,
              "departure": 1740670080000,
              "departureDelayedTime": 1740670080000,
              "departureDelayedTimeHHMM": "16:28",
              "arrivalHHMM": "16:28",
              "departureHHMM": "16:28",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false
            },
            "to": {
              "name": "Leipzig, Augustusplatz",
              "stopId": "0013002",
              "lon": 12.381555,
              "lat": 51.338844,
              "arrival": 1740670320000,
              "departure": 1740670320000,
              "zoneId": "110",
              "wheelchairBoarding": 0,
              "departureDelayedTime": 1740670320000,
              "arrivalDelayedTime": 1740670320000,
              "departureDelayedTimeHHMM": "16:32",
              "arrivalDelayedTimeHHMM": "16:32",
              "arrivalHHMM": "16:32",
              "departureHHMM": "16:32",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false,
              "hafas_id": "1000902",
              "hafas_name": "Augustusplatz"
            },
            "legGeometry": {
              "points": [
                {
                  "lat": 51.338210000000004,
                  "lon": 12.38353
                },
                {
                  "lat": 51.338280000000005,
                  "lon": 12.383560000000001
                },
                {
                  "lat": 51.33829000000001,
                  "lon": 12.383490000000002
                },
                {
                  "lat": 51.338350000000005,
                  "lon": 12.383180000000001
                },
                {
                  "lat": 51.338440000000006,
                  "lon": 12.38272
                },
                {
                  "lat": 51.338530000000006,
                  "lon": 12.382340000000001
                },
                {
                  "lat": 51.338550000000005,
                  "lon": 12.38226
                },
                {
                  "lat": 51.338550000000005,
                  "lon": 12.38225
                },
                {
                  "lat": 51.33861,
                  "lon": 12.382040000000002
                },
                {
                  "lat": 51.33865,
                  "lon": 12.38189
                },
                {
                  "lat": 51.338660000000004,
                  "lon": 12.381850000000002
                },
                {
                  "lat": 51.33869000000001,
                  "lon": 12.381730000000001
                },
                {
                  "lat": 51.338730000000005,
                  "lon": 12.381590000000001
                },
                {
                  "lat": 51.338750000000005,
                  "lon": 12.381490000000001
                },
                {
                  "lat": 51.338800000000006,
                  "lon": 12.381350000000001
                },
                {
                  "lat": 51.33883,
                  "lon": 12.381350000000001
                },
                {
                  "lat": 51.33881,
                  "lon": 12.381400000000001
                },
                {
                  "lat": 51.33878000000001,
                  "lon": 12.3815
                },
                {
                  "lat": 51.338770000000004,
                  "lon": 12.381520000000002
                },
                {
                  "lat": 51.338820000000005,
                  "lon": 12.381530000000001
                },
                {
                  "lat": 51.338840000000005,
                  "lon": 12.38155
                }
              ],
              "length": 21
            },
            "steps": [
              {
                "distance": 9,
                "relativeDirection": "DEPART",
                "streetName": "parking aisle",
                "absoluteDirection": "NORTH",
                "lon": 12.3835323,
                "lat": 51.338216
              },
              {
                "distance": 136,
                "relativeDirection": "LEFT",
                "streetName": "Grimmaischer Steinweg",
                "absoluteDirection": "WEST",
                "lon": 12.3835666,
                "lat": 51.3382871
              },
              {
                "distance": 30,
                "relativeDirection": "CONTINUE",
                "streetName": "Augustusplatz",
                "absoluteDirection": "NORTHWEST",
                "lon": 12.3817341,
                "lat": 51.3386943
              },
              {
                "distance": 23,
                "relativeDirection": "UTURN_RIGHT",
                "streetName": "Augustusplatz",
                "absoluteDirection": "SOUTHEAST",
                "lon": 12.381356,
                "lat": 51.3388347
              }
            ],
            "rentedBike": false,
            "duration": 240,
            "alerts": [],
            "departureDelayedTime": 1740670080000,
            "arrivalDelayedTime": 1740670320000,
            "departureDelayedTimeHHMM": "16:28",
            "arrivalDelayedTimeHHMM": "16:32",
            "startTimeHHMM": "16:28",
            "endTimeHHMM": "16:32",
            "cancelled": false
          },
          {
            "startTime": 1740670320000,
            "endTime": 1740671220000,
            "departureDelay": 240,
            "arrivalDelay": 240,
            "realTime": true,
            "distance": 5063,
            "mode": "TRAM",
            "transitLeg": true,
            "route": "15",
            "agencyName": "Leipziger Verkehrsbetriebe",
            "agencyUrl": "https://www.mdv.de/partner/",
            "routeColor": "00387B",
            "routeType": 0,
            "routeId": "LVTRAM15",
            "headsign": "Meusdorf",
            "agencyId": "1:00468",
            "tripId": "lvb11412STRB__20250226",
            "serviceDate": "20250227",
            "from": {
              "name": "Leipzig, Augustusplatz",
              "stopId": "0013002",
              "lon": 12.381555,
              "lat": 51.338844,
              "arrival": 1740670320000,
              "departure": 1740670320000,
              "zoneId": "110",
              "stopSequence": 22,
              "wheelchairBoarding": 0,
              "track": null,
              "scheduledTrack": null,
              "departureDelayedTime": 1740670560000,
              "arrivalDelayedTime": 1740670560000,
              "departureDelayedTimeHHMM": "16:36",
              "arrivalDelayedTimeHHMM": "16:36",
              "arrivalHHMM": "16:32",
              "departureHHMM": "16:32",
              "arrivalDelay": 240,
              "departureDelay": 240,
              "cancelled": false,
              "hafas_id": "1000902",
              "hafas_name": "Augustusplatz"
            },
            "to": {
              "name": "Leipzig, Probstheida",
              "stopId": "0012073",
              "lon": 12.425533,
              "lat": 51.304177,
              "arrival": 1740671220000,
              "departure": 1740671220000,
              "zoneId": "110",
              "stopSequence": 33,
              "wheelchairBoarding": 1,
              "track": null,
              "scheduledTrack": null,
              "departureDelayedTime": 1740671460000,
              "arrivalDelayedTime": 1740671460000,
              "departureDelayedTimeHHMM": "16:51",
              "arrivalDelayedTimeHHMM": "16:51",
              "arrivalHHMM": "16:47",
              "departureHHMM": "16:47",
              "arrivalDelay": 240,
              "departureDelay": 240,
              "cancelled": false,
              "hafas_id": "1012902",
              "hafas_name": "Probstheida"
            },
            "intermediateStops": [
              {
                "name": "Leipzig, Johannisplatz",
                "stopId": "0011063",
                "lon": 12.387365,
                "lat": 51.336902,
                "arrival": 1740670440000,
                "departure": 1740670440000,
                "zoneId": "110",
                "stopSequence": 23,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740670680000,
                "arrivalDelayedTime": 1740670680000,
                "departureDelayedTimeHHMM": "16:38",
                "arrivalDelayedTimeHHMM": "16:38",
                "arrivalHHMM": "16:34",
                "departureHHMM": "16:34",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1007004",
                "hafas_name": "Johannisplatz"
              },
              {
                "name": "Leipzig, Gutenbergplatz",
                "stopId": "0011970",
                "lon": 12.392092,
                "lat": 51.33427,
                "arrival": 1740670500000,
                "departure": 1740670500000,
                "zoneId": "110",
                "stopSequence": 24,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740670740000,
                "arrivalDelayedTime": 1740670740000,
                "departureDelayedTimeHHMM": "16:39",
                "arrivalDelayedTimeHHMM": "16:39",
                "arrivalHHMM": "16:35",
                "departureHHMM": "16:35",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1012002",
                "hafas_name": "Gutenbergplatz"
              },
              {
                "name": "Leipzig, Ostplatz",
                "stopId": "0011972",
                "lon": 12.396014,
                "lat": 51.331534,
                "arrival": 1740670560000,
                "departure": 1740670560000,
                "zoneId": "110",
                "stopSequence": 25,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740670800000,
                "arrivalDelayedTime": 1740670800000,
                "departureDelayedTimeHHMM": "16:40",
                "arrivalDelayedTimeHHMM": "16:40",
                "arrivalHHMM": "16:36",
                "departureHHMM": "16:36",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1012102",
                "hafas_name": "Ostplatz"
              },
              {
                "name": "Leipzig, Witzgallstr.",
                "stopId": "0012083",
                "lon": 12.399487,
                "lat": 51.328313,
                "arrival": 1740670680000,
                "departure": 1740670680000,
                "zoneId": "110",
                "stopSequence": 26,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740670920000,
                "arrivalDelayedTime": 1740670920000,
                "departureDelayedTimeHHMM": "16:42",
                "arrivalDelayedTimeHHMM": "16:42",
                "arrivalHHMM": "16:38",
                "departureHHMM": "16:38",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1012202",
                "hafas_name": "Witzgallstraße"
              },
              {
                "name": "Leipzig, Technisches Rathaus",
                "stopId": "0011335",
                "lon": 12.401051,
                "lat": 51.325,
                "arrival": 1740670740000,
                "departure": 1740670740000,
                "zoneId": "110",
                "stopSequence": 27,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740670980000,
                "arrivalDelayedTime": 1740670980000,
                "departureDelayedTimeHHMM": "16:43",
                "arrivalDelayedTimeHHMM": "16:43",
                "arrivalHHMM": "16:39",
                "departureHHMM": "16:39",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1012302",
                "hafas_name": "Technisches Rathaus"
              },
              {
                "name": "Leipzig, Altes Messegelände",
                "stopId": "0012079",
                "lon": 12.404742,
                "lat": 51.320655,
                "arrival": 1740670860000,
                "departure": 1740670860000,
                "zoneId": "110",
                "stopSequence": 28,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740671100000,
                "arrivalDelayedTime": 1740671100000,
                "departureDelayedTimeHHMM": "16:45",
                "arrivalDelayedTimeHHMM": "16:45",
                "arrivalHHMM": "16:41",
                "departureHHMM": "16:41",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1012402",
                "hafas_name": "Altes Messegelände"
              },
              {
                "name": "Leipzig, Naunhofer Str.",
                "stopId": "0012080",
                "lon": 12.408131,
                "lat": 51.317775,
                "arrival": 1740670920000,
                "departure": 1740670920000,
                "zoneId": "110",
                "stopSequence": 29,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740671160000,
                "arrivalDelayedTime": 1740671160000,
                "departureDelayedTimeHHMM": "16:46",
                "arrivalDelayedTimeHHMM": "16:46",
                "arrivalHHMM": "16:42",
                "departureHHMM": "16:42",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1012502",
                "hafas_name": "Naunhofer Straße"
              },
              {
                "name": "Leipzig, Völkerschlachtdenkmal (Tram/Bus)",
                "stopId": "0012076",
                "lon": 12.411561,
                "lat": 51.314851,
                "arrival": 1740670980000,
                "departure": 1740670980000,
                "zoneId": "110",
                "stopSequence": 30,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740671220000,
                "arrivalDelayedTime": 1740671220000,
                "departureDelayedTimeHHMM": "16:47",
                "arrivalDelayedTimeHHMM": "16:47",
                "arrivalHHMM": "16:43",
                "departureHHMM": "16:43",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1012602",
                "hafas_name": "Völkerschlachtdenkmal"
              },
              {
                "name": "Leipzig, Südfriedhof",
                "stopId": "0012078",
                "lon": 12.417136,
                "lat": 51.311164,
                "arrival": 1740671100000,
                "departure": 1740671100000,
                "zoneId": "110",
                "stopSequence": 31,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740671340000,
                "arrivalDelayedTime": 1740671340000,
                "departureDelayedTimeHHMM": "16:49",
                "arrivalDelayedTimeHHMM": "16:49",
                "arrivalHHMM": "16:45",
                "departureHHMM": "16:45",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1012702",
                "hafas_name": "Südfriedhof"
              },
              {
                "name": "Leipzig, Prager/Russenstr.",
                "stopId": "0012072",
                "lon": 12.422431,
                "lat": 51.306777,
                "arrival": 1740671160000,
                "departure": 1740671160000,
                "zoneId": "110",
                "stopSequence": 32,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740671400000,
                "arrivalDelayedTime": 1740671400000,
                "departureDelayedTimeHHMM": "16:50",
                "arrivalDelayedTimeHHMM": "16:50",
                "arrivalHHMM": "16:46",
                "departureHHMM": "16:46",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1012802",
                "hafas_name": "Prager/Russenstraße"
              }
            ],
            "legGeometry": {
              "points": [
                {
                  "lat": 51.33883,
                  "lon": 12.38155
                },
                {
                  "lat": 51.33883,
                  "lon": 12.381540000000001
                },
                {
                  "lat": 51.33881,
                  "lon": 12.381620000000002
                },
                {
                  "lat": 51.338770000000004,
                  "lon": 12.381770000000001
                },
                {
                  "lat": 51.338730000000005,
                  "lon": 12.381900000000002
                },
                {
                  "lat": 51.33872,
                  "lon": 12.38194
                },
                {
                  "lat": 51.338680000000004,
                  "lon": 12.38208
                },
                {
                  "lat": 51.338640000000005,
                  "lon": 12.38225
                },
                {
                  "lat": 51.338620000000006,
                  "lon": 12.38231
                },
                {
                  "lat": 51.33859,
                  "lon": 12.38241
                },
                {
                  "lat": 51.33852,
                  "lon": 12.38273
                },
                {
                  "lat": 51.33847,
                  "lon": 12.382980000000002
                },
                {
                  "lat": 51.33843,
                  "lon": 12.383210000000002
                },
                {
                  "lat": 51.338390000000004,
                  "lon": 12.38343
                },
                {
                  "lat": 51.33834,
                  "lon": 12.383780000000002
                },
                {
                  "lat": 51.33831000000001,
                  "lon": 12.384010000000002
                },
                {
                  "lat": 51.33827,
                  "lon": 12.38438
                },
                {
                  "lat": 51.33825,
                  "lon": 12.384530000000002
                },
                {
                  "lat": 51.33822000000001,
                  "lon": 12.38465
                },
                {
                  "lat": 51.338170000000005,
                  "lon": 12.3848
                },
                {
                  "lat": 51.33814,
                  "lon": 12.384870000000001
                },
                {
                  "lat": 51.33811000000001,
                  "lon": 12.384920000000001
                },
                {
                  "lat": 51.33809,
                  "lon": 12.38498
                },
                {
                  "lat": 51.33805,
                  "lon": 12.385050000000001
                },
                {
                  "lat": 51.33798,
                  "lon": 12.38517
                },
                {
                  "lat": 51.337630000000004,
                  "lon": 12.385750000000002
                },
                {
                  "lat": 51.337540000000004,
                  "lon": 12.38592
                },
                {
                  "lat": 51.337430000000005,
                  "lon": 12.38615
                },
                {
                  "lat": 51.337180000000004,
                  "lon": 12.386740000000001
                },
                {
                  "lat": 51.33693,
                  "lon": 12.387300000000002
                },
                {
                  "lat": 51.33690000000001,
                  "lon": 12.38737
                },
                {
                  "lat": 51.33690000000001,
                  "lon": 12.38737
                },
                {
                  "lat": 51.33690000000001,
                  "lon": 12.38737
                },
                {
                  "lat": 51.33690000000001,
                  "lon": 12.38737
                },
                {
                  "lat": 51.33686,
                  "lon": 12.38746
                },
                {
                  "lat": 51.336650000000006,
                  "lon": 12.38793
                },
                {
                  "lat": 51.336580000000005,
                  "lon": 12.388100000000001
                },
                {
                  "lat": 51.3365,
                  "lon": 12.38826
                },
                {
                  "lat": 51.336420000000004,
                  "lon": 12.388440000000001
                },
                {
                  "lat": 51.336330000000004,
                  "lon": 12.3886
                },
                {
                  "lat": 51.33616000000001,
                  "lon": 12.38892
                },
                {
                  "lat": 51.33587000000001,
                  "lon": 12.389450000000002
                },
                {
                  "lat": 51.335460000000005,
                  "lon": 12.390160000000002
                },
                {
                  "lat": 51.334830000000004,
                  "lon": 12.391240000000002
                },
                {
                  "lat": 51.334720000000004,
                  "lon": 12.391420000000002
                },
                {
                  "lat": 51.33469,
                  "lon": 12.391480000000001
                },
                {
                  "lat": 51.33428000000001,
                  "lon": 12.392100000000001
                },
                {
                  "lat": 51.334270000000004,
                  "lon": 12.392080000000002
                },
                {
                  "lat": 51.334270000000004,
                  "lon": 12.392090000000001
                },
                {
                  "lat": 51.334270000000004,
                  "lon": 12.392090000000001
                },
                {
                  "lat": 51.33428000000001,
                  "lon": 12.392100000000001
                },
                {
                  "lat": 51.334210000000006,
                  "lon": 12.39221
                },
                {
                  "lat": 51.33409,
                  "lon": 12.39239
                },
                {
                  "lat": 51.33404,
                  "lon": 12.39245
                },
                {
                  "lat": 51.334010000000006,
                  "lon": 12.392500000000002
                },
                {
                  "lat": 51.33395,
                  "lon": 12.39258
                },
                {
                  "lat": 51.33390000000001,
                  "lon": 12.392650000000001
                },
                {
                  "lat": 51.332260000000005,
                  "lon": 12.39492
                },
                {
                  "lat": 51.33225,
                  "lon": 12.39493
                },
                {
                  "lat": 51.332100000000004,
                  "lon": 12.395150000000001
                },
                {
                  "lat": 51.332080000000005,
                  "lon": 12.395190000000001
                },
                {
                  "lat": 51.33194,
                  "lon": 12.3954
                },
                {
                  "lat": 51.33193000000001,
                  "lon": 12.395410000000002
                },
                {
                  "lat": 51.33176,
                  "lon": 12.395650000000002
                },
                {
                  "lat": 51.331540000000004,
                  "lon": 12.395980000000002
                },
                {
                  "lat": 51.33153,
                  "lon": 12.396
                },
                {
                  "lat": 51.33153,
                  "lon": 12.396020000000002
                },
                {
                  "lat": 51.33153,
                  "lon": 12.39601
                },
                {
                  "lat": 51.33153,
                  "lon": 12.39601
                },
                {
                  "lat": 51.33153,
                  "lon": 12.396
                },
                {
                  "lat": 51.33119000000001,
                  "lon": 12.396510000000001
                },
                {
                  "lat": 51.330850000000005,
                  "lon": 12.39703
                },
                {
                  "lat": 51.33062,
                  "lon": 12.397340000000002
                },
                {
                  "lat": 51.33024,
                  "lon": 12.397820000000001
                },
                {
                  "lat": 51.33016000000001,
                  "lon": 12.397900000000002
                },
                {
                  "lat": 51.33001,
                  "lon": 12.39808
                },
                {
                  "lat": 51.32987000000001,
                  "lon": 12.398230000000002
                },
                {
                  "lat": 51.32952,
                  "lon": 12.398620000000001
                },
                {
                  "lat": 51.329350000000005,
                  "lon": 12.39878
                },
                {
                  "lat": 51.32922000000001,
                  "lon": 12.398890000000002
                },
                {
                  "lat": 51.32887,
                  "lon": 12.399170000000002
                },
                {
                  "lat": 51.32846000000001,
                  "lon": 12.399410000000001
                },
                {
                  "lat": 51.328340000000004,
                  "lon": 12.399460000000001
                },
                {
                  "lat": 51.328300000000006,
                  "lon": 12.39947
                },
                {
                  "lat": 51.32831,
                  "lon": 12.39948
                },
                {
                  "lat": 51.32831,
                  "lon": 12.39948
                },
                {
                  "lat": 51.32831,
                  "lon": 12.39948
                },
                {
                  "lat": 51.328300000000006,
                  "lon": 12.39947
                },
                {
                  "lat": 51.328210000000006,
                  "lon": 12.39952
                },
                {
                  "lat": 51.327920000000006,
                  "lon": 12.39963
                },
                {
                  "lat": 51.327540000000006,
                  "lon": 12.39976
                },
                {
                  "lat": 51.327160000000006,
                  "lon": 12.39991
                },
                {
                  "lat": 51.32678000000001,
                  "lon": 12.40005
                },
                {
                  "lat": 51.326190000000004,
                  "lon": 12.400340000000002
                },
                {
                  "lat": 51.32592,
                  "lon": 12.400500000000001
                },
                {
                  "lat": 51.32546000000001,
                  "lon": 12.400780000000001
                },
                {
                  "lat": 51.325,
                  "lon": 12.401060000000001
                },
                {
                  "lat": 51.32499000000001,
                  "lon": 12.401050000000001
                },
                {
                  "lat": 51.32499000000001,
                  "lon": 12.401050000000001
                },
                {
                  "lat": 51.32499000000001,
                  "lon": 12.401050000000001
                },
                {
                  "lat": 51.325,
                  "lon": 12.401060000000001
                },
                {
                  "lat": 51.325,
                  "lon": 12.401060000000001
                },
                {
                  "lat": 51.32491,
                  "lon": 12.401110000000001
                },
                {
                  "lat": 51.32441000000001,
                  "lon": 12.40141
                },
                {
                  "lat": 51.32424,
                  "lon": 12.40154
                },
                {
                  "lat": 51.324200000000005,
                  "lon": 12.401580000000001
                },
                {
                  "lat": 51.324090000000005,
                  "lon": 12.401670000000001
                },
                {
                  "lat": 51.323910000000005,
                  "lon": 12.401850000000001
                },
                {
                  "lat": 51.323890000000006,
                  "lon": 12.40187
                },
                {
                  "lat": 51.32339,
                  "lon": 12.40238
                },
                {
                  "lat": 51.32217000000001,
                  "lon": 12.40347
                },
                {
                  "lat": 51.32198,
                  "lon": 12.40361
                },
                {
                  "lat": 51.321940000000005,
                  "lon": 12.403640000000001
                },
                {
                  "lat": 51.321810000000006,
                  "lon": 12.403730000000001
                },
                {
                  "lat": 51.32166,
                  "lon": 12.403830000000001
                },
                {
                  "lat": 51.321600000000004,
                  "lon": 12.403870000000001
                },
                {
                  "lat": 51.32159000000001,
                  "lon": 12.403870000000001
                },
                {
                  "lat": 51.32155,
                  "lon": 12.4039
                },
                {
                  "lat": 51.32144,
                  "lon": 12.40399
                },
                {
                  "lat": 51.320660000000004,
                  "lon": 12.40473
                },
                {
                  "lat": 51.32065000000001,
                  "lon": 12.40474
                },
                {
                  "lat": 51.32065000000001,
                  "lon": 12.40474
                },
                {
                  "lat": 51.32065000000001,
                  "lon": 12.40474
                },
                {
                  "lat": 51.32065000000001,
                  "lon": 12.40474
                },
                {
                  "lat": 51.32065000000001,
                  "lon": 12.40474
                },
                {
                  "lat": 51.320420000000006,
                  "lon": 12.404950000000001
                },
                {
                  "lat": 51.320220000000006,
                  "lon": 12.40516
                },
                {
                  "lat": 51.32003,
                  "lon": 12.405380000000001
                },
                {
                  "lat": 51.31996,
                  "lon": 12.405460000000001
                },
                {
                  "lat": 51.319900000000004,
                  "lon": 12.40553
                },
                {
                  "lat": 51.319720000000004,
                  "lon": 12.405740000000002
                },
                {
                  "lat": 51.31958,
                  "lon": 12.405930000000001
                },
                {
                  "lat": 51.31938,
                  "lon": 12.406210000000002
                },
                {
                  "lat": 51.319160000000004,
                  "lon": 12.40648
                },
                {
                  "lat": 51.31888000000001,
                  "lon": 12.4068
                },
                {
                  "lat": 51.31862,
                  "lon": 12.407100000000002
                },
                {
                  "lat": 51.3186,
                  "lon": 12.40712
                },
                {
                  "lat": 51.31855,
                  "lon": 12.407190000000002
                },
                {
                  "lat": 51.31851,
                  "lon": 12.40723
                },
                {
                  "lat": 51.318290000000005,
                  "lon": 12.40751
                },
                {
                  "lat": 51.31815,
                  "lon": 12.407680000000001
                },
                {
                  "lat": 51.31777,
                  "lon": 12.40812
                },
                {
                  "lat": 51.31777,
                  "lon": 12.408130000000002
                },
                {
                  "lat": 51.31777,
                  "lon": 12.408130000000002
                },
                {
                  "lat": 51.31777,
                  "lon": 12.408130000000002
                },
                {
                  "lat": 51.31777,
                  "lon": 12.408130000000002
                },
                {
                  "lat": 51.31777,
                  "lon": 12.408130000000002
                },
                {
                  "lat": 51.317710000000005,
                  "lon": 12.408190000000001
                },
                {
                  "lat": 51.31763,
                  "lon": 12.408280000000001
                },
                {
                  "lat": 51.31752,
                  "lon": 12.40839
                },
                {
                  "lat": 51.317400000000006,
                  "lon": 12.408510000000001
                },
                {
                  "lat": 51.31485000000001,
                  "lon": 12.41154
                },
                {
                  "lat": 51.31485000000001,
                  "lon": 12.411550000000002
                },
                {
                  "lat": 51.31485000000001,
                  "lon": 12.411550000000002
                },
                {
                  "lat": 51.31485000000001,
                  "lon": 12.41154
                },
                {
                  "lat": 51.314840000000004,
                  "lon": 12.41154
                },
                {
                  "lat": 51.31477,
                  "lon": 12.411620000000001
                },
                {
                  "lat": 51.31472,
                  "lon": 12.41168
                },
                {
                  "lat": 51.31466,
                  "lon": 12.411760000000001
                },
                {
                  "lat": 51.31452,
                  "lon": 12.41192
                },
                {
                  "lat": 51.31439,
                  "lon": 12.41211
                },
                {
                  "lat": 51.31327,
                  "lon": 12.41383
                },
                {
                  "lat": 51.312050000000006,
                  "lon": 12.41577
                },
                {
                  "lat": 51.3115,
                  "lon": 12.41661
                },
                {
                  "lat": 51.31116,
                  "lon": 12.41712
                },
                {
                  "lat": 51.31116,
                  "lon": 12.41713
                },
                {
                  "lat": 51.31116,
                  "lon": 12.41713
                },
                {
                  "lat": 51.31116,
                  "lon": 12.41713
                },
                {
                  "lat": 51.31116,
                  "lon": 12.41713
                },
                {
                  "lat": 51.31116,
                  "lon": 12.41713
                },
                {
                  "lat": 51.31109000000001,
                  "lon": 12.417230000000002
                },
                {
                  "lat": 51.31103,
                  "lon": 12.417330000000002
                },
                {
                  "lat": 51.309140000000006,
                  "lon": 12.420230000000002
                },
                {
                  "lat": 51.3089,
                  "lon": 12.420610000000002
                },
                {
                  "lat": 51.308620000000005,
                  "lon": 12.421080000000002
                },
                {
                  "lat": 51.30836000000001,
                  "lon": 12.42149
                },
                {
                  "lat": 51.308260000000004,
                  "lon": 12.421640000000002
                },
                {
                  "lat": 51.30814,
                  "lon": 12.42177
                },
                {
                  "lat": 51.30803,
                  "lon": 12.42186
                },
                {
                  "lat": 51.307900000000004,
                  "lon": 12.421940000000001
                },
                {
                  "lat": 51.307610000000004,
                  "lon": 12.422070000000001
                },
                {
                  "lat": 51.307410000000004,
                  "lon": 12.42215
                },
                {
                  "lat": 51.30678,
                  "lon": 12.42243
                },
                {
                  "lat": 51.30677000000001,
                  "lon": 12.42243
                },
                {
                  "lat": 51.30677000000001,
                  "lon": 12.42242
                },
                {
                  "lat": 51.30677000000001,
                  "lon": 12.42243
                },
                {
                  "lat": 51.30677000000001,
                  "lon": 12.42243
                },
                {
                  "lat": 51.30677000000001,
                  "lon": 12.42243
                },
                {
                  "lat": 51.30671,
                  "lon": 12.422460000000001
                },
                {
                  "lat": 51.306580000000004,
                  "lon": 12.42251
                },
                {
                  "lat": 51.306430000000006,
                  "lon": 12.422550000000001
                },
                {
                  "lat": 51.306270000000005,
                  "lon": 12.42262
                },
                {
                  "lat": 51.306020000000004,
                  "lon": 12.422730000000001
                },
                {
                  "lat": 51.3059,
                  "lon": 12.42281
                },
                {
                  "lat": 51.30584,
                  "lon": 12.42285
                },
                {
                  "lat": 51.30577,
                  "lon": 12.4229
                },
                {
                  "lat": 51.305690000000006,
                  "lon": 12.42298
                },
                {
                  "lat": 51.30556000000001,
                  "lon": 12.42313
                },
                {
                  "lat": 51.30547000000001,
                  "lon": 12.42327
                },
                {
                  "lat": 51.304970000000004,
                  "lon": 12.424130000000002
                },
                {
                  "lat": 51.30478,
                  "lon": 12.424470000000001
                },
                {
                  "lat": 51.304660000000005,
                  "lon": 12.42468
                },
                {
                  "lat": 51.3046,
                  "lon": 12.424790000000002
                },
                {
                  "lat": 51.304570000000005,
                  "lon": 12.424840000000001
                },
                {
                  "lat": 51.30418,
                  "lon": 12.42552
                },
                {
                  "lat": 51.30418,
                  "lon": 12.42553
                },
                {
                  "lat": 51.30418,
                  "lon": 12.42553
                }
              ],
              "length": 207
            },
            "steps": [],
            "routeShortName": "15",
            "routeLongName": "Tram 15",
            "wheelchairAccessible": 1,
            "duration": 900,
            "alerts": [],
            "departureDelayedTime": 1740670560000,
            "arrivalDelayedTime": 1740671460000,
            "departureDelayedTimeHHMM": "16:36",
            "arrivalDelayedTimeHHMM": "16:51",
            "startTimeHHMM": "16:32",
            "endTimeHHMM": "16:47",
            "cancelled": false,
            "wheelchairBoardingVehicle": null
          },
          {
            "startTime": 1740671220000,
            "endTime": 1740671520000,
            "departureDelay": 240,
            "arrivalDelay": 0,
            "realTime": false,
            "distance": 34,
            "mode": "WALK",
            "transitLeg": false,
            "route": "",
            "from": {
              "name": "Leipzig, Probstheida",
              "stopId": "0012073",
              "lon": 12.425533,
              "lat": 51.304177,
              "arrival": 1740671220000,
              "departure": 1740671220000,
              "zoneId": "110",
              "wheelchairBoarding": 1,
              "departureDelayedTime": 1740671460000,
              "arrivalDelayedTime": 1740671460000,
              "departureDelayedTimeHHMM": "16:51",
              "arrivalDelayedTimeHHMM": "16:51",
              "arrivalHHMM": "16:47",
              "departureHHMM": "16:47",
              "arrivalDelay": 240,
              "departureDelay": 240,
              "cancelled": false,
              "hafas_id": "1012902",
              "hafas_name": "Probstheida"
            },
            "to": {
              "name": "Leipzig, Probstheida",
              "stopId": "0012073",
              "lon": 12.4256479,
              "lat": 51.3042579,
              "arrival": 1740671520000,
              "departure": 1740671520000,
              "zoneId": "110",
              "wheelchairBoarding": 0,
              "departureDelayedTime": 1740671520000,
              "arrivalDelayedTime": 1740671520000,
              "departureDelayedTimeHHMM": "16:52",
              "arrivalDelayedTimeHHMM": "16:52",
              "arrivalHHMM": "16:52",
              "departureHHMM": "16:52",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false
            },
            "legGeometry": {
              "points": [
                {
                  "lat": 51.304170000000006,
                  "lon": 12.42553
                },
                {
                  "lat": 51.304170000000006,
                  "lon": 12.42552
                },
                {
                  "lat": 51.30416,
                  "lon": 12.425540000000002
                },
                {
                  "lat": 51.304140000000004,
                  "lon": 12.42557
                },
                {
                  "lat": 51.30413,
                  "lon": 12.42556
                },
                {
                  "lat": 51.30411,
                  "lon": 12.425580000000002
                },
                {
                  "lat": 51.30413,
                  "lon": 12.42561
                },
                {
                  "lat": 51.30416,
                  "lon": 12.425650000000001
                },
                {
                  "lat": 51.30418,
                  "lon": 12.42567
                },
                {
                  "lat": 51.304230000000004,
                  "lon": 12.425580000000002
                },
                {
                  "lat": 51.304260000000006,
                  "lon": 12.425630000000002
                },
                {
                  "lat": 51.30425,
                  "lon": 12.425640000000001
                },
                {
                  "lat": 51.30425,
                  "lon": 12.425640000000001
                }
              ],
              "length": 13
            },
            "steps": [
              {
                "distance": 7,
                "relativeDirection": "DEPART",
                "streetName": "Probstheida",
                "absoluteDirection": "SOUTHEAST",
                "lon": 12.425528,
                "lat": 51.3041736
              },
              {
                "distance": 26,
                "relativeDirection": "LEFT",
                "streetName": "path",
                "absoluteDirection": "SOUTHEAST",
                "lon": 12.4255631,
                "lat": 51.3041328
              },
              {
                "distance": 2,
                "relativeDirection": "RIGHT",
                "streetName": "Prager Straße",
                "absoluteDirection": "SOUTHEAST",
                "lon": 12.4256314,
                "lat": 51.3042675
              }
            ],
            "rentedBike": false,
            "duration": 60,
            "alerts": [],
            "departureDelayedTime": 1740671460000,
            "arrivalDelayedTime": 1740671520000,
            "departureDelayedTimeHHMM": "16:51",
            "arrivalDelayedTimeHHMM": "16:52",
            "startTimeHHMM": "16:47",
            "endTimeHHMM": "16:52",
            "cancelled": false,
            "durationOriginal": 300
          },
          {
            "startTime": 1740671520000,
            "endTime": 1740673800000,
            "departureDelay": 0,
            "arrivalDelay": 0,
            "realTime": false,
            "distance": 14363,
            "mode": "BUS",
            "transitLeg": true,
            "route": "106",
            "agencyName": "Regionalbus Leipzig GmbH",
            "agencyUrl": "https://www.mdv.de/partner/",
            "routeColor": "9b2986",
            "routeType": 3,
            "routeId": "RL____106",
            "tripShortName": "106048",
            "headsign": "Großstädteln (Markkleeberg), S-Bahnhof/ZöbigkerStr.",
            "agencyId": "1:00704",
            "tripId": "61085",
            "serviceDate": "20250227",
            "from": {
              "name": "Leipzig, Probstheida",
              "stopId": "0012073",
              "lon": 12.4256479,
              "lat": 51.3042579,
              "arrival": 1740671520000,
              "departure": 1740671520000,
              "zoneId": "110",
              "stopSequence": 2,
              "wheelchairBoarding": 0,
              "track": null,
              "scheduledTrack": null,
              "departureDelayedTime": 1740671520000,
              "arrivalDelayedTime": 1740671520000,
              "departureDelayedTimeHHMM": "16:52",
              "arrivalDelayedTimeHHMM": "16:52",
              "arrivalHHMM": "16:52",
              "departureHHMM": "16:52",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false
            },
            "to": {
              "name": "Zöbigker (Markkleeberg), Schmiede",
              "stopId": "0012987",
              "lon": 12.351914,
              "lat": 51.26663,
              "arrival": 1740673800000,
              "departure": 1740673800000,
              "zoneId": "151",
              "stopSequence": 24,
              "wheelchairBoarding": 0,
              "track": null,
              "scheduledTrack": null,
              "departureDelayedTime": 1740673800000,
              "arrivalDelayedTime": 1740673800000,
              "departureDelayedTimeHHMM": "17:30",
              "arrivalDelayedTimeHHMM": "17:30",
              "arrivalHHMM": "17:30",
              "departureHHMM": "17:30",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false
            },
            "intermediateStops": [
              {
                "name": "Leipzig, Pahlenweg",
                "stopId": "0011831",
                "lon": 12.4281226,
                "lat": 51.2919373,
                "arrival": 1740671700000,
                "departure": 1740671700000,
                "zoneId": "110",
                "stopSequence": 3,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740671700000,
                "arrivalDelayedTime": 1740671700000,
                "departureDelayedTimeHHMM": "16:55",
                "arrivalDelayedTimeHHMM": "16:55",
                "arrivalHHMM": "16:55",
                "departureHHMM": "16:55",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Leipzig, Schwarzenbergweg",
                "stopId": "0011916",
                "lon": 12.4294593,
                "lat": 51.2868965,
                "arrival": 1740671760000,
                "departure": 1740671760000,
                "zoneId": "110",
                "stopSequence": 4,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740671760000,
                "arrivalDelayedTime": 1740671760000,
                "departureDelayedTimeHHMM": "16:56",
                "arrivalDelayedTimeHHMM": "16:56",
                "arrivalHHMM": "16:56",
                "departureHHMM": "16:56",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Wachau (b. Leipzig), Gewerbepark",
                "stopId": "0011917",
                "lon": 12.4255217,
                "lat": 51.2842431,
                "arrival": 1740671880000,
                "departure": 1740671880000,
                "zoneId": "110",
                "stopSequence": 5,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740671880000,
                "arrivalDelayedTime": 1740671880000,
                "departureDelayedTimeHHMM": "16:58",
                "arrivalDelayedTimeHHMM": "16:58",
                "arrivalHHMM": "16:58",
                "departureHHMM": "16:58",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Wachau (b. Leipzig), Atlanta Hotel",
                "stopId": "0011214",
                "lon": 12.4271814,
                "lat": 51.2810899,
                "arrival": 1740671940000,
                "departure": 1740671940000,
                "zoneId": "110",
                "stopSequence": 6,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740671940000,
                "arrivalDelayedTime": 1740671940000,
                "departureDelayedTimeHHMM": "16:59",
                "arrivalDelayedTimeHHMM": "16:59",
                "arrivalHHMM": "16:59",
                "departureHHMM": "16:59",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Wachau (b. Leipzig), An der Hohle",
                "stopId": "0011914",
                "lon": 12.4315459,
                "lat": 51.2776866,
                "arrival": 1740672060000,
                "departure": 1740672060000,
                "zoneId": "151",
                "stopSequence": 7,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672060000,
                "arrivalDelayedTime": 1740672060000,
                "departureDelayedTimeHHMM": "17:01",
                "arrivalDelayedTimeHHMM": "17:01",
                "arrivalHHMM": "17:01",
                "departureHHMM": "17:01",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Wachau (b. Leipzig), Am Bach",
                "stopId": "0011915",
                "lon": 12.4278392,
                "lat": 51.2758072,
                "arrival": 1740672180000,
                "departure": 1740672180000,
                "zoneId": "151",
                "stopSequence": 8,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672180000,
                "arrivalDelayedTime": 1740672180000,
                "departureDelayedTimeHHMM": "17:03",
                "arrivalDelayedTimeHHMM": "17:03",
                "arrivalHHMM": "17:03",
                "departureHHMM": "17:03",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Wachau (b. Leipzig), Crostewitzer Str.",
                "stopId": "0011912",
                "lon": 12.423214,
                "lat": 51.273527,
                "arrival": 1740672240000,
                "departure": 1740672240000,
                "zoneId": "151",
                "stopSequence": 9,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672240000,
                "arrivalDelayedTime": 1740672240000,
                "departureDelayedTimeHHMM": "17:04",
                "arrivalDelayedTimeHHMM": "17:04",
                "arrivalHHMM": "17:04",
                "departureHHMM": "17:04",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Goldene Höhe",
                "stopId": "0011913",
                "lon": 12.41247,
                "lat": 51.273041,
                "arrival": 1740672300000,
                "departure": 1740672300000,
                "zoneId": "151",
                "stopSequence": 10,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672300000,
                "arrivalDelayedTime": 1740672300000,
                "departureDelayedTimeHHMM": "17:05",
                "arrivalDelayedTimeHHMM": "17:05",
                "arrivalHHMM": "17:05",
                "departureHHMM": "17:05",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Heinrich-Heine-Str.",
                "stopId": "0011910",
                "lon": 12.400316,
                "lat": 51.272685,
                "arrival": 1740672360000,
                "departure": 1740672360000,
                "zoneId": "151",
                "stopSequence": 11,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672360000,
                "arrivalDelayedTime": 1740672360000,
                "departureDelayedTimeHHMM": "17:06",
                "arrivalDelayedTimeHHMM": "17:06",
                "arrivalHHMM": "17:06",
                "departureHHMM": "17:06",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Ost, Seepromenade",
                "stopId": "0022383",
                "lon": 12.398439,
                "lat": 51.271921,
                "arrival": 1740672420000,
                "departure": 1740672420000,
                "zoneId": "151",
                "stopSequence": 12,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672420000,
                "arrivalDelayedTime": 1740672420000,
                "departureDelayedTimeHHMM": "17:07",
                "arrivalDelayedTimeHHMM": "17:07",
                "arrivalHHMM": "17:07",
                "departureHHMM": "17:07",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Ost, Schillerplatz",
                "stopId": "0011911",
                "lon": 12.3971824,
                "lat": 51.2759523,
                "arrival": 1740672480000,
                "departure": 1740672480000,
                "zoneId": "151",
                "stopSequence": 13,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672480000,
                "arrivalDelayedTime": 1740672480000,
                "departureDelayedTimeHHMM": "17:08",
                "arrivalDelayedTimeHHMM": "17:08",
                "arrivalHHMM": "17:08",
                "departureHHMM": "17:08",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Ost, Auenplatz",
                "stopId": "0003851",
                "lon": 12.3928535,
                "lat": 51.2771143,
                "arrival": 1740672600000,
                "departure": 1740672600000,
                "zoneId": "151",
                "stopSequence": 14,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672600000,
                "arrivalDelayedTime": 1740672600000,
                "departureDelayedTimeHHMM": "17:10",
                "arrivalDelayedTimeHHMM": "17:10",
                "arrivalHHMM": "17:10",
                "departureHHMM": "17:10",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Seenallee",
                "stopId": "0019940",
                "lon": 12.3771924,
                "lat": 51.2731332,
                "arrival": 1740672780000,
                "departure": 1740672780000,
                "zoneId": "151",
                "stopSequence": 15,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672780000,
                "arrivalDelayedTime": 1740672780000,
                "departureDelayedTimeHHMM": "17:13",
                "arrivalDelayedTimeHHMM": "17:13",
                "arrivalHHMM": "17:13",
                "departureHHMM": "17:13",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Schulstr.",
                "stopId": "0011918",
                "lon": 12.374816,
                "lat": 51.2788288,
                "arrival": 1740672840000,
                "departure": 1740672840000,
                "zoneId": "151",
                "stopSequence": 16,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672840000,
                "arrivalDelayedTime": 1740672840000,
                "departureDelayedTimeHHMM": "17:14",
                "arrivalDelayedTimeHHMM": "17:14",
                "arrivalHHMM": "17:14",
                "departureHHMM": "17:14",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, S-Bahnhof (Bus)",
                "stopId": "0010998",
                "lon": 12.3704606,
                "lat": 51.2791446,
                "arrival": 1740672960000,
                "departure": 1740673080000,
                "zoneId": "151",
                "stopSequence": 17,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740673080000,
                "arrivalDelayedTime": 1740672960000,
                "departureDelayedTimeHHMM": "17:18",
                "arrivalDelayedTimeHHMM": "17:16",
                "arrivalHHMM": "17:16",
                "departureHHMM": "17:18",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Sonnesiedlung",
                "stopId": "0012037",
                "lon": 12.3635871,
                "lat": 51.2831441,
                "arrival": 1740673200000,
                "departure": 1740673200000,
                "zoneId": "151",
                "stopSequence": 18,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740673200000,
                "arrivalDelayedTime": 1740673200000,
                "departureDelayedTimeHHMM": "17:20",
                "arrivalDelayedTimeHHMM": "17:20",
                "arrivalHHMM": "17:20",
                "departureHHMM": "17:20",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Gautzscher Platz",
                "stopId": "0012988",
                "lon": 12.3592058,
                "lat": 51.2788496,
                "arrival": 1740673320000,
                "departure": 1740673320000,
                "zoneId": "151",
                "stopSequence": 19,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740673320000,
                "arrivalDelayedTime": 1740673320000,
                "departureDelayedTimeHHMM": "17:22",
                "arrivalDelayedTimeHHMM": "17:22",
                "arrivalHHMM": "17:22",
                "departureHHMM": "17:22",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Am Eulenberg",
                "stopId": "0012986",
                "lon": 12.356505,
                "lat": 51.272458,
                "arrival": 1740673440000,
                "departure": 1740673440000,
                "zoneId": "151",
                "stopSequence": 20,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740673440000,
                "arrivalDelayedTime": 1740673440000,
                "departureDelayedTimeHHMM": "17:24",
                "arrivalDelayedTimeHHMM": "17:24",
                "arrivalHHMM": "17:24",
                "departureHHMM": "17:24",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Sonnenweg",
                "stopId": "0012767",
                "lon": 12.360237,
                "lat": 51.270957,
                "arrival": 1740673500000,
                "departure": 1740673500000,
                "zoneId": "151",
                "stopSequence": 21,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740673500000,
                "arrivalDelayedTime": 1740673500000,
                "departureDelayedTimeHHMM": "17:25",
                "arrivalDelayedTimeHHMM": "17:25",
                "arrivalHHMM": "17:25",
                "departureHHMM": "17:25",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Seniorenzentrum",
                "stopId": "0012768",
                "lon": 12.363897,
                "lat": 51.270618,
                "arrival": 1740673560000,
                "departure": 1740673560000,
                "zoneId": "151",
                "stopSequence": 22,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740673560000,
                "arrivalDelayedTime": 1740673560000,
                "departureDelayedTimeHHMM": "17:26",
                "arrivalDelayedTimeHHMM": "17:26",
                "arrivalHHMM": "17:26",
                "departureHHMM": "17:26",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Freiburger Allee",
                "stopId": "0012769",
                "lon": 12.355647,
                "lat": 51.27065,
                "arrival": 1740673680000,
                "departure": 1740673680000,
                "zoneId": "151",
                "stopSequence": 23,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740673680000,
                "arrivalDelayedTime": 1740673680000,
                "departureDelayedTimeHHMM": "17:28",
                "arrivalDelayedTimeHHMM": "17:28",
                "arrivalHHMM": "17:28",
                "departureHHMM": "17:28",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              }
            ],
            "legGeometry": {
              "points": [
                {
                  "lat": 51.30418,
                  "lon": 12.42553
                },
                {
                  "lat": 51.30406000000001,
                  "lon": 12.425740000000001
                },
                {
                  "lat": 51.303920000000005,
                  "lon": 12.425870000000002
                },
                {
                  "lat": 51.30346,
                  "lon": 12.426680000000001
                },
                {
                  "lat": 51.303250000000006,
                  "lon": 12.426680000000001
                },
                {
                  "lat": 51.302670000000006,
                  "lon": 12.426720000000001
                },
                {
                  "lat": 51.302550000000004,
                  "lon": 12.42669
                },
                {
                  "lat": 51.301860000000005,
                  "lon": 12.426730000000001
                },
                {
                  "lat": 51.301500000000004,
                  "lon": 12.426730000000001
                },
                {
                  "lat": 51.301370000000006,
                  "lon": 12.426730000000001
                },
                {
                  "lat": 51.300850000000004,
                  "lon": 12.426770000000001
                },
                {
                  "lat": 51.3006,
                  "lon": 12.426800000000002
                },
                {
                  "lat": 51.30004,
                  "lon": 12.42684
                },
                {
                  "lat": 51.29708,
                  "lon": 12.42702
                },
                {
                  "lat": 51.295730000000006,
                  "lon": 12.42712
                },
                {
                  "lat": 51.295390000000005,
                  "lon": 12.427200000000001
                },
                {
                  "lat": 51.294830000000005,
                  "lon": 12.42736
                },
                {
                  "lat": 51.29229,
                  "lon": 12.428020000000002
                },
                {
                  "lat": 51.29193,
                  "lon": 12.428120000000002
                },
                {
                  "lat": 51.29193,
                  "lon": 12.428120000000002
                },
                {
                  "lat": 51.291470000000004,
                  "lon": 12.42825
                },
                {
                  "lat": 51.28895000000001,
                  "lon": 12.428920000000002
                },
                {
                  "lat": 51.28689000000001,
                  "lon": 12.429450000000001
                },
                {
                  "lat": 51.28689000000001,
                  "lon": 12.429450000000001
                },
                {
                  "lat": 51.28669000000001,
                  "lon": 12.4295
                },
                {
                  "lat": 51.28614,
                  "lon": 12.429640000000001
                },
                {
                  "lat": 51.28613000000001,
                  "lon": 12.429590000000001
                },
                {
                  "lat": 51.286100000000005,
                  "lon": 12.429530000000002
                },
                {
                  "lat": 51.286060000000006,
                  "lon": 12.429490000000001
                },
                {
                  "lat": 51.28604000000001,
                  "lon": 12.429490000000001
                },
                {
                  "lat": 51.286010000000005,
                  "lon": 12.429490000000001
                },
                {
                  "lat": 51.28555000000001,
                  "lon": 12.425160000000002
                },
                {
                  "lat": 51.28428,
                  "lon": 12.425510000000001
                },
                {
                  "lat": 51.284240000000004,
                  "lon": 12.42552
                },
                {
                  "lat": 51.284240000000004,
                  "lon": 12.42552
                },
                {
                  "lat": 51.2811,
                  "lon": 12.42637
                },
                {
                  "lat": 51.280840000000005,
                  "lon": 12.42645
                },
                {
                  "lat": 51.28078000000001,
                  "lon": 12.426530000000001
                },
                {
                  "lat": 51.280750000000005,
                  "lon": 12.42664
                },
                {
                  "lat": 51.280750000000005,
                  "lon": 12.426760000000002
                },
                {
                  "lat": 51.280800000000006,
                  "lon": 12.42725
                },
                {
                  "lat": 51.280800000000006,
                  "lon": 12.42725
                },
                {
                  "lat": 51.281130000000005,
                  "lon": 12.430460000000002
                },
                {
                  "lat": 51.281130000000005,
                  "lon": 12.430790000000002
                },
                {
                  "lat": 51.281130000000005,
                  "lon": 12.430940000000001
                },
                {
                  "lat": 51.28036,
                  "lon": 12.431140000000001
                },
                {
                  "lat": 51.28023,
                  "lon": 12.43119
                },
                {
                  "lat": 51.279300000000006,
                  "lon": 12.431450000000002
                },
                {
                  "lat": 51.27798000000001,
                  "lon": 12.431790000000001
                },
                {
                  "lat": 51.277750000000005,
                  "lon": 12.43186
                },
                {
                  "lat": 51.277680000000004,
                  "lon": 12.431540000000002
                },
                {
                  "lat": 51.277680000000004,
                  "lon": 12.431540000000002
                },
                {
                  "lat": 51.27767000000001,
                  "lon": 12.431460000000001
                },
                {
                  "lat": 51.27747,
                  "lon": 12.430430000000001
                },
                {
                  "lat": 51.27745,
                  "lon": 12.43035
                },
                {
                  "lat": 51.27741,
                  "lon": 12.430290000000001
                },
                {
                  "lat": 51.27736,
                  "lon": 12.43022
                },
                {
                  "lat": 51.277300000000004,
                  "lon": 12.43017
                },
                {
                  "lat": 51.277240000000006,
                  "lon": 12.430140000000002
                },
                {
                  "lat": 51.27718,
                  "lon": 12.430140000000002
                },
                {
                  "lat": 51.27669,
                  "lon": 12.43021
                },
                {
                  "lat": 51.276610000000005,
                  "lon": 12.430190000000001
                },
                {
                  "lat": 51.276540000000004,
                  "lon": 12.43016
                },
                {
                  "lat": 51.27648000000001,
                  "lon": 12.430090000000002
                },
                {
                  "lat": 51.27644,
                  "lon": 12.429990000000002
                },
                {
                  "lat": 51.27635,
                  "lon": 12.429630000000001
                },
                {
                  "lat": 51.27619000000001,
                  "lon": 12.429070000000001
                },
                {
                  "lat": 51.275800000000004,
                  "lon": 12.42783
                },
                {
                  "lat": 51.275800000000004,
                  "lon": 12.42783
                },
                {
                  "lat": 51.275760000000005,
                  "lon": 12.427710000000001
                },
                {
                  "lat": 51.27564,
                  "lon": 12.42731
                },
                {
                  "lat": 51.275580000000005,
                  "lon": 12.42721
                },
                {
                  "lat": 51.27553,
                  "lon": 12.42716
                },
                {
                  "lat": 51.275420000000004,
                  "lon": 12.42711
                },
                {
                  "lat": 51.275310000000005,
                  "lon": 12.42711
                },
                {
                  "lat": 51.2749,
                  "lon": 12.42722
                },
                {
                  "lat": 51.27412,
                  "lon": 12.42753
                },
                {
                  "lat": 51.27403,
                  "lon": 12.42753
                },
                {
                  "lat": 51.27398,
                  "lon": 12.427480000000001
                },
                {
                  "lat": 51.273950000000006,
                  "lon": 12.42739
                },
                {
                  "lat": 51.27391,
                  "lon": 12.427200000000001
                },
                {
                  "lat": 51.27353,
                  "lon": 12.42467
                },
                {
                  "lat": 51.273500000000006,
                  "lon": 12.424330000000001
                },
                {
                  "lat": 51.27349,
                  "lon": 12.42392
                },
                {
                  "lat": 51.273500000000006,
                  "lon": 12.423210000000001
                },
                {
                  "lat": 51.273500000000006,
                  "lon": 12.423210000000001
                },
                {
                  "lat": 51.273500000000006,
                  "lon": 12.423140000000002
                },
                {
                  "lat": 51.27355000000001,
                  "lon": 12.419270000000001
                },
                {
                  "lat": 51.27365,
                  "lon": 12.417810000000001
                },
                {
                  "lat": 51.27366000000001,
                  "lon": 12.417390000000001
                },
                {
                  "lat": 51.27364000000001,
                  "lon": 12.417000000000002
                },
                {
                  "lat": 51.27356,
                  "lon": 12.416540000000001
                },
                {
                  "lat": 51.27351,
                  "lon": 12.41627
                },
                {
                  "lat": 51.273360000000004,
                  "lon": 12.41558
                },
                {
                  "lat": 51.2732,
                  "lon": 12.414930000000002
                },
                {
                  "lat": 51.27313,
                  "lon": 12.414530000000001
                },
                {
                  "lat": 51.27310000000001,
                  "lon": 12.41422
                },
                {
                  "lat": 51.27304,
                  "lon": 12.412820000000002
                },
                {
                  "lat": 51.27304,
                  "lon": 12.412600000000001
                },
                {
                  "lat": 51.27304,
                  "lon": 12.41247
                },
                {
                  "lat": 51.27304,
                  "lon": 12.41247
                },
                {
                  "lat": 51.273050000000005,
                  "lon": 12.40985
                },
                {
                  "lat": 51.27304,
                  "lon": 12.409370000000001
                },
                {
                  "lat": 51.27295,
                  "lon": 12.408470000000001
                },
                {
                  "lat": 51.27286,
                  "lon": 12.4077
                },
                {
                  "lat": 51.272800000000004,
                  "lon": 12.40727
                },
                {
                  "lat": 51.27244,
                  "lon": 12.40515
                },
                {
                  "lat": 51.272380000000005,
                  "lon": 12.404530000000001
                },
                {
                  "lat": 51.272360000000006,
                  "lon": 12.404020000000001
                },
                {
                  "lat": 51.272360000000006,
                  "lon": 12.403350000000001
                },
                {
                  "lat": 51.27239,
                  "lon": 12.402660000000001
                },
                {
                  "lat": 51.272650000000006,
                  "lon": 12.40033
                },
                {
                  "lat": 51.27266,
                  "lon": 12.400300000000001
                },
                {
                  "lat": 51.27266,
                  "lon": 12.400300000000001
                },
                {
                  "lat": 51.27286,
                  "lon": 12.398660000000001
                },
                {
                  "lat": 51.27290000000001,
                  "lon": 12.39835
                },
                {
                  "lat": 51.27290000000001,
                  "lon": 12.398140000000001
                },
                {
                  "lat": 51.27291,
                  "lon": 12.398060000000001
                },
                {
                  "lat": 51.272740000000006,
                  "lon": 12.39802
                },
                {
                  "lat": 51.272380000000005,
                  "lon": 12.39817
                },
                {
                  "lat": 51.27205000000001,
                  "lon": 12.398270000000002
                },
                {
                  "lat": 51.271710000000006,
                  "lon": 12.398320000000002
                },
                {
                  "lat": 51.27165,
                  "lon": 12.398460000000002
                },
                {
                  "lat": 51.27165,
                  "lon": 12.398510000000002
                },
                {
                  "lat": 51.27168,
                  "lon": 12.39858
                },
                {
                  "lat": 51.27172,
                  "lon": 12.398620000000001
                },
                {
                  "lat": 51.271770000000004,
                  "lon": 12.398610000000001
                },
                {
                  "lat": 51.271800000000006,
                  "lon": 12.39858
                },
                {
                  "lat": 51.271860000000004,
                  "lon": 12.398460000000002
                },
                {
                  "lat": 51.27188,
                  "lon": 12.3984
                },
                {
                  "lat": 51.27188,
                  "lon": 12.3984
                },
                {
                  "lat": 51.271930000000005,
                  "lon": 12.398290000000001
                },
                {
                  "lat": 51.27205000000001,
                  "lon": 12.398270000000002
                },
                {
                  "lat": 51.272380000000005,
                  "lon": 12.39817
                },
                {
                  "lat": 51.272740000000006,
                  "lon": 12.39802
                },
                {
                  "lat": 51.27291,
                  "lon": 12.398060000000001
                },
                {
                  "lat": 51.27293,
                  "lon": 12.397920000000001
                },
                {
                  "lat": 51.27297,
                  "lon": 12.39784
                },
                {
                  "lat": 51.27304,
                  "lon": 12.39783
                },
                {
                  "lat": 51.27317000000001,
                  "lon": 12.39779
                },
                {
                  "lat": 51.2732,
                  "lon": 12.397760000000002
                },
                {
                  "lat": 51.273500000000006,
                  "lon": 12.397730000000001
                },
                {
                  "lat": 51.27362,
                  "lon": 12.39774
                },
                {
                  "lat": 51.27391,
                  "lon": 12.3978
                },
                {
                  "lat": 51.27443,
                  "lon": 12.39793
                },
                {
                  "lat": 51.27452,
                  "lon": 12.39794
                },
                {
                  "lat": 51.27463,
                  "lon": 12.397950000000002
                },
                {
                  "lat": 51.27481,
                  "lon": 12.397920000000001
                },
                {
                  "lat": 51.27494,
                  "lon": 12.397870000000001
                },
                {
                  "lat": 51.27506,
                  "lon": 12.3978
                },
                {
                  "lat": 51.27512,
                  "lon": 12.39779
                },
                {
                  "lat": 51.275180000000006,
                  "lon": 12.397760000000002
                },
                {
                  "lat": 51.27525000000001,
                  "lon": 12.39769
                },
                {
                  "lat": 51.275290000000005,
                  "lon": 12.397630000000001
                },
                {
                  "lat": 51.27532,
                  "lon": 12.397540000000001
                },
                {
                  "lat": 51.2755,
                  "lon": 12.397260000000001
                },
                {
                  "lat": 51.275760000000005,
                  "lon": 12.3969
                },
                {
                  "lat": 51.27579,
                  "lon": 12.39686
                },
                {
                  "lat": 51.27579,
                  "lon": 12.39686
                },
                {
                  "lat": 51.27599000000001,
                  "lon": 12.39662
                },
                {
                  "lat": 51.27606,
                  "lon": 12.396560000000001
                },
                {
                  "lat": 51.27615,
                  "lon": 12.39652
                },
                {
                  "lat": 51.277350000000006,
                  "lon": 12.3961
                },
                {
                  "lat": 51.27732,
                  "lon": 12.395760000000001
                },
                {
                  "lat": 51.27722000000001,
                  "lon": 12.39375
                },
                {
                  "lat": 51.27716,
                  "lon": 12.39319
                },
                {
                  "lat": 51.277120000000004,
                  "lon": 12.392900000000001
                },
                {
                  "lat": 51.27711000000001,
                  "lon": 12.392850000000001
                },
                {
                  "lat": 51.27711000000001,
                  "lon": 12.392850000000001
                },
                {
                  "lat": 51.27704000000001,
                  "lon": 12.392470000000001
                },
                {
                  "lat": 51.27704000000001,
                  "lon": 12.39235
                },
                {
                  "lat": 51.277,
                  "lon": 12.39217
                },
                {
                  "lat": 51.27695000000001,
                  "lon": 12.39211
                },
                {
                  "lat": 51.276880000000006,
                  "lon": 12.391850000000002
                },
                {
                  "lat": 51.27667,
                  "lon": 12.391250000000001
                },
                {
                  "lat": 51.276410000000006,
                  "lon": 12.390680000000001
                },
                {
                  "lat": 51.276230000000005,
                  "lon": 12.390320000000001
                },
                {
                  "lat": 51.27584,
                  "lon": 12.389640000000002
                },
                {
                  "lat": 51.27564,
                  "lon": 12.389320000000001
                },
                {
                  "lat": 51.27559,
                  "lon": 12.389180000000001
                },
                {
                  "lat": 51.27537,
                  "lon": 12.388810000000001
                },
                {
                  "lat": 51.27525000000001,
                  "lon": 12.388630000000001
                },
                {
                  "lat": 51.27516000000001,
                  "lon": 12.388530000000001
                },
                {
                  "lat": 51.27409,
                  "lon": 12.38677
                },
                {
                  "lat": 51.273950000000006,
                  "lon": 12.38653
                },
                {
                  "lat": 51.27382000000001,
                  "lon": 12.386260000000002
                },
                {
                  "lat": 51.27362,
                  "lon": 12.385800000000001
                },
                {
                  "lat": 51.273540000000004,
                  "lon": 12.38559
                },
                {
                  "lat": 51.273430000000005,
                  "lon": 12.38526
                },
                {
                  "lat": 51.27326000000001,
                  "lon": 12.38461
                },
                {
                  "lat": 51.27317000000001,
                  "lon": 12.38414
                },
                {
                  "lat": 51.27311,
                  "lon": 12.38371
                },
                {
                  "lat": 51.272960000000005,
                  "lon": 12.381920000000001
                },
                {
                  "lat": 51.272650000000006,
                  "lon": 12.37817
                },
                {
                  "lat": 51.27262,
                  "lon": 12.377650000000001
                },
                {
                  "lat": 51.27261000000001,
                  "lon": 12.377350000000002
                },
                {
                  "lat": 51.27293,
                  "lon": 12.377260000000001
                },
                {
                  "lat": 51.27311,
                  "lon": 12.3772
                },
                {
                  "lat": 51.27313,
                  "lon": 12.37719
                },
                {
                  "lat": 51.27313,
                  "lon": 12.37719
                },
                {
                  "lat": 51.27322,
                  "lon": 12.377160000000002
                },
                {
                  "lat": 51.27347,
                  "lon": 12.377160000000002
                },
                {
                  "lat": 51.274570000000004,
                  "lon": 12.377120000000001
                },
                {
                  "lat": 51.274930000000005,
                  "lon": 12.377110000000002
                },
                {
                  "lat": 51.2755,
                  "lon": 12.377160000000002
                },
                {
                  "lat": 51.275580000000005,
                  "lon": 12.37715
                },
                {
                  "lat": 51.275650000000006,
                  "lon": 12.377130000000001
                },
                {
                  "lat": 51.27678,
                  "lon": 12.376610000000001
                },
                {
                  "lat": 51.27698,
                  "lon": 12.376500000000002
                },
                {
                  "lat": 51.277080000000005,
                  "lon": 12.37639
                },
                {
                  "lat": 51.278000000000006,
                  "lon": 12.375280000000002
                },
                {
                  "lat": 51.27807000000001,
                  "lon": 12.375210000000001
                },
                {
                  "lat": 51.278130000000004,
                  "lon": 12.375160000000001
                },
                {
                  "lat": 51.27857,
                  "lon": 12.37493
                },
                {
                  "lat": 51.278690000000005,
                  "lon": 12.37489
                },
                {
                  "lat": 51.27882,
                  "lon": 12.374810000000002
                },
                {
                  "lat": 51.27882,
                  "lon": 12.374810000000002
                },
                {
                  "lat": 51.27882,
                  "lon": 12.374810000000002
                },
                {
                  "lat": 51.27919000000001,
                  "lon": 12.37462
                },
                {
                  "lat": 51.2798,
                  "lon": 12.374260000000001
                },
                {
                  "lat": 51.279610000000005,
                  "lon": 12.37339
                },
                {
                  "lat": 51.27949,
                  "lon": 12.37278
                },
                {
                  "lat": 51.27929,
                  "lon": 12.371450000000001
                },
                {
                  "lat": 51.27910000000001,
                  "lon": 12.37152
                },
                {
                  "lat": 51.278850000000006,
                  "lon": 12.371630000000001
                },
                {
                  "lat": 51.27852000000001,
                  "lon": 12.3717
                },
                {
                  "lat": 51.27844,
                  "lon": 12.371730000000001
                },
                {
                  "lat": 51.27816000000001,
                  "lon": 12.37199
                },
                {
                  "lat": 51.27803,
                  "lon": 12.37208
                },
                {
                  "lat": 51.27792,
                  "lon": 12.37218
                },
                {
                  "lat": 51.277890000000006,
                  "lon": 12.37222
                },
                {
                  "lat": 51.27788,
                  "lon": 12.372290000000001
                },
                {
                  "lat": 51.2779,
                  "lon": 12.37236
                },
                {
                  "lat": 51.277930000000005,
                  "lon": 12.3724
                },
                {
                  "lat": 51.27796000000001,
                  "lon": 12.37241
                },
                {
                  "lat": 51.27801,
                  "lon": 12.372390000000001
                },
                {
                  "lat": 51.278040000000004,
                  "lon": 12.37231
                },
                {
                  "lat": 51.27806,
                  "lon": 12.37221
                },
                {
                  "lat": 51.2781,
                  "lon": 12.372110000000001
                },
                {
                  "lat": 51.27816000000001,
                  "lon": 12.37199
                },
                {
                  "lat": 51.27844,
                  "lon": 12.371730000000001
                },
                {
                  "lat": 51.27852000000001,
                  "lon": 12.3717
                },
                {
                  "lat": 51.278850000000006,
                  "lon": 12.371630000000001
                },
                {
                  "lat": 51.27929,
                  "lon": 12.371450000000001
                },
                {
                  "lat": 51.279160000000005,
                  "lon": 12.37057
                },
                {
                  "lat": 51.27915,
                  "lon": 12.370450000000002
                },
                {
                  "lat": 51.27915,
                  "lon": 12.370450000000002
                },
                {
                  "lat": 51.27910000000001,
                  "lon": 12.37006
                },
                {
                  "lat": 51.279070000000004,
                  "lon": 12.369800000000001
                },
                {
                  "lat": 51.279070000000004,
                  "lon": 12.369670000000001
                },
                {
                  "lat": 51.279090000000004,
                  "lon": 12.369320000000002
                },
                {
                  "lat": 51.279160000000005,
                  "lon": 12.368540000000001
                },
                {
                  "lat": 51.27924,
                  "lon": 12.36855
                },
                {
                  "lat": 51.27928000000001,
                  "lon": 12.368530000000002
                },
                {
                  "lat": 51.28061,
                  "lon": 12.367080000000001
                },
                {
                  "lat": 51.28237000000001,
                  "lon": 12.365870000000001
                },
                {
                  "lat": 51.28298,
                  "lon": 12.36438
                },
                {
                  "lat": 51.283260000000006,
                  "lon": 12.363710000000001
                },
                {
                  "lat": 51.28314,
                  "lon": 12.36358
                },
                {
                  "lat": 51.28314,
                  "lon": 12.36358
                },
                {
                  "lat": 51.27982,
                  "lon": 12.360080000000002
                },
                {
                  "lat": 51.27948000000001,
                  "lon": 12.3597
                },
                {
                  "lat": 51.279230000000005,
                  "lon": 12.359470000000002
                },
                {
                  "lat": 51.278850000000006,
                  "lon": 12.359210000000001
                },
                {
                  "lat": 51.27884,
                  "lon": 12.359200000000001
                },
                {
                  "lat": 51.27884,
                  "lon": 12.359200000000001
                },
                {
                  "lat": 51.276650000000004,
                  "lon": 12.357740000000002
                },
                {
                  "lat": 51.27577,
                  "lon": 12.357140000000001
                },
                {
                  "lat": 51.274950000000004,
                  "lon": 12.356570000000001
                },
                {
                  "lat": 51.274680000000004,
                  "lon": 12.3564
                },
                {
                  "lat": 51.273830000000004,
                  "lon": 12.35585
                },
                {
                  "lat": 51.27310000000001,
                  "lon": 12.355310000000001
                },
                {
                  "lat": 51.27257,
                  "lon": 12.354980000000001
                },
                {
                  "lat": 51.272400000000005,
                  "lon": 12.35565
                },
                {
                  "lat": 51.272310000000004,
                  "lon": 12.35603
                },
                {
                  "lat": 51.27232000000001,
                  "lon": 12.35612
                },
                {
                  "lat": 51.272420000000004,
                  "lon": 12.356520000000002
                },
                {
                  "lat": 51.272420000000004,
                  "lon": 12.356520000000002
                },
                {
                  "lat": 51.272420000000004,
                  "lon": 12.356530000000001
                },
                {
                  "lat": 51.27248,
                  "lon": 12.35679
                },
                {
                  "lat": 51.2725,
                  "lon": 12.35697
                },
                {
                  "lat": 51.2725,
                  "lon": 12.357140000000001
                },
                {
                  "lat": 51.27246,
                  "lon": 12.357370000000001
                },
                {
                  "lat": 51.27244,
                  "lon": 12.357920000000002
                },
                {
                  "lat": 51.27176000000001,
                  "lon": 12.357890000000001
                },
                {
                  "lat": 51.271620000000006,
                  "lon": 12.35782
                },
                {
                  "lat": 51.27112,
                  "lon": 12.357800000000001
                },
                {
                  "lat": 51.27105,
                  "lon": 12.357850000000001
                },
                {
                  "lat": 51.271080000000005,
                  "lon": 12.358020000000002
                },
                {
                  "lat": 51.271040000000006,
                  "lon": 12.359430000000001
                },
                {
                  "lat": 51.27103,
                  "lon": 12.359990000000002
                },
                {
                  "lat": 51.270990000000005,
                  "lon": 12.3602
                },
                {
                  "lat": 51.270990000000005,
                  "lon": 12.360230000000001
                },
                {
                  "lat": 51.270990000000005,
                  "lon": 12.360230000000001
                },
                {
                  "lat": 51.27096,
                  "lon": 12.361870000000001
                },
                {
                  "lat": 51.270950000000006,
                  "lon": 12.361970000000001
                },
                {
                  "lat": 51.27091,
                  "lon": 12.362060000000001
                },
                {
                  "lat": 51.270790000000005,
                  "lon": 12.362260000000001
                },
                {
                  "lat": 51.270720000000004,
                  "lon": 12.362380000000002
                },
                {
                  "lat": 51.27069,
                  "lon": 12.362480000000001
                },
                {
                  "lat": 51.27067,
                  "lon": 12.3626
                },
                {
                  "lat": 51.27065,
                  "lon": 12.363760000000001
                },
                {
                  "lat": 51.270630000000004,
                  "lon": 12.363880000000002
                },
                {
                  "lat": 51.270630000000004,
                  "lon": 12.363890000000001
                },
                {
                  "lat": 51.270630000000004,
                  "lon": 12.363890000000001
                },
                {
                  "lat": 51.270630000000004,
                  "lon": 12.364180000000001
                },
                {
                  "lat": 51.27062,
                  "lon": 12.364270000000001
                },
                {
                  "lat": 51.270590000000006,
                  "lon": 12.36434
                },
                {
                  "lat": 51.27056,
                  "lon": 12.364370000000001
                },
                {
                  "lat": 51.270540000000004,
                  "lon": 12.36443
                },
                {
                  "lat": 51.27053,
                  "lon": 12.364500000000001
                },
                {
                  "lat": 51.270540000000004,
                  "lon": 12.36458
                },
                {
                  "lat": 51.27056,
                  "lon": 12.364630000000002
                },
                {
                  "lat": 51.2706,
                  "lon": 12.36466
                },
                {
                  "lat": 51.27064000000001,
                  "lon": 12.36467
                },
                {
                  "lat": 51.270680000000006,
                  "lon": 12.36466
                },
                {
                  "lat": 51.270720000000004,
                  "lon": 12.364600000000001
                },
                {
                  "lat": 51.27074,
                  "lon": 12.36456
                },
                {
                  "lat": 51.27074,
                  "lon": 12.364500000000001
                },
                {
                  "lat": 51.27073000000001,
                  "lon": 12.364400000000002
                },
                {
                  "lat": 51.27071,
                  "lon": 12.364370000000001
                },
                {
                  "lat": 51.270680000000006,
                  "lon": 12.36434
                },
                {
                  "lat": 51.27067,
                  "lon": 12.363890000000001
                },
                {
                  "lat": 51.27065,
                  "lon": 12.363760000000001
                },
                {
                  "lat": 51.27067,
                  "lon": 12.3626
                },
                {
                  "lat": 51.27069,
                  "lon": 12.362480000000001
                },
                {
                  "lat": 51.270720000000004,
                  "lon": 12.362380000000002
                },
                {
                  "lat": 51.270790000000005,
                  "lon": 12.362260000000001
                },
                {
                  "lat": 51.27091,
                  "lon": 12.362060000000001
                },
                {
                  "lat": 51.270950000000006,
                  "lon": 12.361970000000001
                },
                {
                  "lat": 51.27096,
                  "lon": 12.361870000000001
                },
                {
                  "lat": 51.270990000000005,
                  "lon": 12.3602
                },
                {
                  "lat": 51.27103,
                  "lon": 12.359990000000002
                },
                {
                  "lat": 51.271080000000005,
                  "lon": 12.358020000000002
                },
                {
                  "lat": 51.27105,
                  "lon": 12.357850000000001
                },
                {
                  "lat": 51.27096,
                  "lon": 12.357650000000001
                },
                {
                  "lat": 51.270610000000005,
                  "lon": 12.357030000000002
                },
                {
                  "lat": 51.270590000000006,
                  "lon": 12.356890000000002
                },
                {
                  "lat": 51.270700000000005,
                  "lon": 12.35565
                },
                {
                  "lat": 51.270700000000005,
                  "lon": 12.35565
                },
                {
                  "lat": 51.270700000000005,
                  "lon": 12.355620000000002
                },
                {
                  "lat": 51.27074,
                  "lon": 12.355
                },
                {
                  "lat": 51.270990000000005,
                  "lon": 12.35391
                },
                {
                  "lat": 51.27026000000001,
                  "lon": 12.3534
                },
                {
                  "lat": 51.269560000000006,
                  "lon": 12.352920000000001
                },
                {
                  "lat": 51.26887000000001,
                  "lon": 12.35247
                },
                {
                  "lat": 51.268280000000004,
                  "lon": 12.35204
                },
                {
                  "lat": 51.268150000000006,
                  "lon": 12.35195
                },
                {
                  "lat": 51.268100000000004,
                  "lon": 12.35186
                },
                {
                  "lat": 51.267950000000006,
                  "lon": 12.35176
                },
                {
                  "lat": 51.267880000000005,
                  "lon": 12.351750000000001
                },
                {
                  "lat": 51.26782000000001,
                  "lon": 12.35171
                },
                {
                  "lat": 51.26771,
                  "lon": 12.351680000000002
                },
                {
                  "lat": 51.2676,
                  "lon": 12.35166
                },
                {
                  "lat": 51.26737000000001,
                  "lon": 12.35167
                },
                {
                  "lat": 51.26709,
                  "lon": 12.35172
                },
                {
                  "lat": 51.26662,
                  "lon": 12.351840000000001
                }
              ],
              "length": 357
            },
            "steps": [],
            "routeShortName": "106",
            "routeLongName": "Bus 106",
            "wheelchairAccessible": 0,
            "duration": 2280,
            "alerts": [
              {
                "alertUrl": "",
                "effectiveStartDate": 1740671520000,
                "alertHeaderText": "",
                "alertDescriptionText": "Der Anschluss kann voraussichtlich nicht erreicht werden",
                "alertCategory": 6
              }
            ],
            "departureDelayedTime": 1740671520000,
            "arrivalDelayedTime": 1740673800000,
            "departureDelayedTimeHHMM": "16:52",
            "arrivalDelayedTimeHHMM": "17:30",
            "startTimeHHMM": "16:52",
            "endTimeHHMM": "17:30",
            "cancelled": false,
            "wheelchairBoardingVehicle": null
          },
          {
            "startTime": 1740673800000,
            "endTime": 1740674400000,
            "departureDelay": 0,
            "arrivalDelay": 0,
            "realTime": false,
            "distance": 683,
            "mode": "WALK",
            "transitLeg": false,
            "route": "",
            "from": {
              "name": "Zöbigker (Markkleeberg), Schmiede",
              "stopId": "0012987",
              "lon": 12.351914,
              "lat": 51.26663,
              "arrival": 1740673800000,
              "departure": 1740673800000,
              "zoneId": "151",
              "wheelchairBoarding": 0,
              "departureDelayedTime": 1740673800000,
              "arrivalDelayedTime": 1740673800000,
              "departureDelayedTimeHHMM": "17:30",
              "arrivalDelayedTimeHHMM": "17:30",
              "arrivalHHMM": "17:30",
              "departureHHMM": "17:30",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false
            },
            "to": {
              "name": "Destination",
              "lon": 12.3451347,
              "lat": 51.2655979,
              "arrival": 1740674400000,
              "departureDelayedTime": 1740674400000,
              "arrivalDelayedTime": 1740674400000,
              "arrivalDelayedTimeHHMM": "17:40",
              "arrivalHHMM": "17:40",
              "departureHHMM": "17:40",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false
            },
            "legGeometry": {
              "points": [
                {
                  "lat": 51.266630000000006,
                  "lon": 12.35191
                },
                {
                  "lat": 51.26662,
                  "lon": 12.35185
                },
                {
                  "lat": 51.26644,
                  "lon": 12.351890000000001
                },
                {
                  "lat": 51.26635,
                  "lon": 12.3519
                },
                {
                  "lat": 51.266270000000006,
                  "lon": 12.351890000000001
                },
                {
                  "lat": 51.26621,
                  "lon": 12.351870000000002
                },
                {
                  "lat": 51.2661,
                  "lon": 12.35181
                },
                {
                  "lat": 51.26599,
                  "lon": 12.351730000000002
                },
                {
                  "lat": 51.26579,
                  "lon": 12.35153
                },
                {
                  "lat": 51.265730000000005,
                  "lon": 12.35148
                },
                {
                  "lat": 51.2657,
                  "lon": 12.351450000000002
                },
                {
                  "lat": 51.26559,
                  "lon": 12.351350000000002
                },
                {
                  "lat": 51.265440000000005,
                  "lon": 12.351230000000001
                },
                {
                  "lat": 51.2653,
                  "lon": 12.351140000000001
                },
                {
                  "lat": 51.265150000000006,
                  "lon": 12.35105
                },
                {
                  "lat": 51.26484000000001,
                  "lon": 12.350900000000001
                },
                {
                  "lat": 51.26483,
                  "lon": 12.350700000000002
                },
                {
                  "lat": 51.26483,
                  "lon": 12.350510000000002
                },
                {
                  "lat": 51.264900000000004,
                  "lon": 12.3495
                },
                {
                  "lat": 51.264900000000004,
                  "lon": 12.349390000000001
                },
                {
                  "lat": 51.264900000000004,
                  "lon": 12.34894
                },
                {
                  "lat": 51.264900000000004,
                  "lon": 12.348170000000001
                },
                {
                  "lat": 51.26500000000001,
                  "lon": 12.34693
                },
                {
                  "lat": 51.26500000000001,
                  "lon": 12.346910000000001
                },
                {
                  "lat": 51.265010000000004,
                  "lon": 12.346860000000001
                },
                {
                  "lat": 51.265010000000004,
                  "lon": 12.346770000000001
                },
                {
                  "lat": 51.26505,
                  "lon": 12.346380000000002
                },
                {
                  "lat": 51.26507,
                  "lon": 12.34622
                },
                {
                  "lat": 51.26512,
                  "lon": 12.345690000000001
                },
                {
                  "lat": 51.26516,
                  "lon": 12.345250000000002
                },
                {
                  "lat": 51.265150000000006,
                  "lon": 12.345180000000001
                },
                {
                  "lat": 51.265170000000005,
                  "lon": 12.34514
                },
                {
                  "lat": 51.265370000000004,
                  "lon": 12.344890000000001
                },
                {
                  "lat": 51.265420000000006,
                  "lon": 12.344840000000001
                },
                {
                  "lat": 51.26547000000001,
                  "lon": 12.344800000000001
                },
                {
                  "lat": 51.26552,
                  "lon": 12.344780000000002
                },
                {
                  "lat": 51.26559,
                  "lon": 12.344790000000001
                },
                {
                  "lat": 51.265640000000005,
                  "lon": 12.344800000000001
                },
                {
                  "lat": 51.26568,
                  "lon": 12.344830000000002
                }
              ],
              "length": 39
            },
            "steps": [
              {
                "distance": 214,
                "relativeDirection": "DEPART",
                "streetName": "Koburger Straße",
                "absoluteDirection": "SOUTH",
                "lon": 12.3518514,
                "lat": 51.2666239
              },
              {
                "distance": 283,
                "relativeDirection": "RIGHT",
                "streetName": "Cospudener Straße",
                "absoluteDirection": "WEST",
                "lon": 12.3509008,
                "lat": 51.2648417
              },
              {
                "distance": 119,
                "relativeDirection": "CONTINUE",
                "streetName": "path",
                "absoluteDirection": "WEST",
                "lon": 12.3468632,
                "lat": 51.2650104
              },
              {
                "distance": 69,
                "relativeDirection": "RIGHT",
                "streetName": "Ostuferweg",
                "absoluteDirection": "NORTHWEST",
                "lon": 12.345181,
                "lat": 51.265154
              }
            ],
            "rentedBike": false,
            "duration": 600,
            "alerts": [],
            "departureDelayedTime": 1740673800000,
            "arrivalDelayedTime": 1740674400000,
            "departureDelayedTimeHHMM": "17:30",
            "arrivalDelayedTimeHHMM": "17:40",
            "startTimeHHMM": "17:30",
            "endTimeHHMM": "17:40",
            "cancelled": false
          }
        ],
        "otpVersion": "2.1",
        "startTimeHHMM": "16:28",
        "endTimeHHMM": "17:39",
        "durationHHMM": "01:12",
        "zoneInfo": {
          "zones": [
            "110",
            "151"
          ],
          "orderedZones": [
            "110",
            "151"
          ],
          "shortDistanceTicket": false
        },
        "alerts": [
          {
            "alertUrl": "",
            "effectiveStartDate": 1740671520000,
            "alertHeaderText": "",
            "alertDescriptionText": "Anschlussgefahr wegen Verspätungen",
            "alertCategory": 6
          }
        ],
        "index": 1
      },
      {
        "duration": 4260,
        "startTime": 1740670140000,
        "endTime": 1740674400000,
        "walkTime": 1200,
        "transitTime": 3060,
        "waitingTime": 0,
        "walkDistance": 1034,
        "transfers": 1,
        "legs": [
          {
            "startTime": 1740670140000,
            "endTime": 1740670440000,
            "departureDelay": 0,
            "arrivalDelay": 0,
            "realTime": false,
            "distance": 318,
            "mode": "WALK",
            "transitLeg": false,
            "route": "",
            "from": {
              "name": "Origin",
              "lon": 12.3835184,
              "lat": 51.3382187,
              "departure": 1740670140000,
              "departureDelayedTime": 1740670140000,
              "departureDelayedTimeHHMM": "16:29",
              "arrivalHHMM": "16:29",
              "departureHHMM": "16:29",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false
            },
            "to": {
              "name": "Leipzig, Johannisplatz",
              "stopId": "0011063",
              "lon": 12.387365,
              "lat": 51.336902,
              "arrival": 1740670440000,
              "departure": 1740670440000,
              "zoneId": "110",
              "wheelchairBoarding": 1,
              "departureDelayedTime": 1740670440000,
              "arrivalDelayedTime": 1740670440000,
              "departureDelayedTimeHHMM": "16:34",
              "arrivalDelayedTimeHHMM": "16:34",
              "arrivalHHMM": "16:34",
              "departureHHMM": "16:34",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false,
              "hafas_id": "1007004",
              "hafas_name": "Johannisplatz"
            },
            "legGeometry": {
              "points": [
                {
                  "lat": 51.338210000000004,
                  "lon": 12.38353
                },
                {
                  "lat": 51.338190000000004,
                  "lon": 12.38352
                },
                {
                  "lat": 51.33809,
                  "lon": 12.383960000000002
                },
                {
                  "lat": 51.337990000000005,
                  "lon": 12.384620000000002
                },
                {
                  "lat": 51.337970000000006,
                  "lon": 12.384730000000001
                },
                {
                  "lat": 51.33794,
                  "lon": 12.38488
                },
                {
                  "lat": 51.33791,
                  "lon": 12.385090000000002
                },
                {
                  "lat": 51.337900000000005,
                  "lon": 12.38513
                },
                {
                  "lat": 51.3378,
                  "lon": 12.385290000000001
                },
                {
                  "lat": 51.33778,
                  "lon": 12.385320000000002
                },
                {
                  "lat": 51.33778,
                  "lon": 12.385420000000002
                },
                {
                  "lat": 51.337630000000004,
                  "lon": 12.385650000000002
                },
                {
                  "lat": 51.3376,
                  "lon": 12.385710000000001
                },
                {
                  "lat": 51.33735,
                  "lon": 12.386220000000002
                },
                {
                  "lat": 51.33713,
                  "lon": 12.38671
                },
                {
                  "lat": 51.337140000000005,
                  "lon": 12.38672
                },
                {
                  "lat": 51.337160000000004,
                  "lon": 12.386730000000002
                },
                {
                  "lat": 51.336890000000004,
                  "lon": 12.387360000000001
                },
                {
                  "lat": 51.33690000000001,
                  "lon": 12.387360000000001
                }
              ],
              "length": 19
            },
            "steps": [
              {
                "distance": 3,
                "relativeDirection": "DEPART",
                "streetName": "parking aisle",
                "absoluteDirection": "SOUTH",
                "lon": 12.3835323,
                "lat": 51.338216
              },
              {
                "distance": 142,
                "relativeDirection": "LEFT",
                "streetName": "Leipzig–Elbe-Radroute",
                "absoluteDirection": "EAST",
                "lon": 12.3835225,
                "lat": 51.3381957
              },
              {
                "distance": 174,
                "relativeDirection": "CONTINUE",
                "streetName": "Johannisplatz",
                "absoluteDirection": "SOUTHEAST",
                "lon": 12.3854221,
                "lat": 51.3377874
              }
            ],
            "rentedBike": false,
            "duration": 300,
            "alerts": [],
            "departureDelayedTime": 1740670140000,
            "arrivalDelayedTime": 1740670440000,
            "departureDelayedTimeHHMM": "16:29",
            "arrivalDelayedTimeHHMM": "16:34",
            "startTimeHHMM": "16:29",
            "endTimeHHMM": "16:34",
            "cancelled": false
          },
          {
            "startTime": 1740670440000,
            "endTime": 1740671220000,
            "departureDelay": 240,
            "arrivalDelay": 240,
            "realTime": true,
            "distance": 4595,
            "mode": "TRAM",
            "transitLeg": true,
            "route": "15",
            "agencyName": "Leipziger Verkehrsbetriebe",
            "agencyUrl": "https://www.mdv.de/partner/",
            "routeColor": "00387B",
            "routeType": 0,
            "routeId": "LVTRAM15",
            "headsign": "Meusdorf",
            "agencyId": "1:00468",
            "tripId": "lvb11412STRB__20250226",
            "serviceDate": "20250227",
            "from": {
              "name": "Leipzig, Johannisplatz",
              "stopId": "0011063",
              "lon": 12.387365,
              "lat": 51.336902,
              "arrival": 1740670440000,
              "departure": 1740670440000,
              "zoneId": "110",
              "stopSequence": 23,
              "wheelchairBoarding": 1,
              "track": null,
              "scheduledTrack": null,
              "departureDelayedTime": 1740670680000,
              "arrivalDelayedTime": 1740670680000,
              "departureDelayedTimeHHMM": "16:38",
              "arrivalDelayedTimeHHMM": "16:38",
              "arrivalHHMM": "16:34",
              "departureHHMM": "16:34",
              "arrivalDelay": 240,
              "departureDelay": 240,
              "cancelled": false,
              "hafas_id": "1007004",
              "hafas_name": "Johannisplatz"
            },
            "to": {
              "name": "Leipzig, Probstheida",
              "stopId": "0012073",
              "lon": 12.425533,
              "lat": 51.304177,
              "arrival": 1740671220000,
              "departure": 1740671220000,
              "zoneId": "110",
              "stopSequence": 33,
              "wheelchairBoarding": 1,
              "track": null,
              "scheduledTrack": null,
              "departureDelayedTime": 1740671460000,
              "arrivalDelayedTime": 1740671460000,
              "departureDelayedTimeHHMM": "16:51",
              "arrivalDelayedTimeHHMM": "16:51",
              "arrivalHHMM": "16:47",
              "departureHHMM": "16:47",
              "arrivalDelay": 240,
              "departureDelay": 240,
              "cancelled": false,
              "hafas_id": "1012902",
              "hafas_name": "Probstheida"
            },
            "intermediateStops": [
              {
                "name": "Leipzig, Gutenbergplatz",
                "stopId": "0011970",
                "lon": 12.392092,
                "lat": 51.33427,
                "arrival": 1740670500000,
                "departure": 1740670500000,
                "zoneId": "110",
                "stopSequence": 24,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740670740000,
                "arrivalDelayedTime": 1740670740000,
                "departureDelayedTimeHHMM": "16:39",
                "arrivalDelayedTimeHHMM": "16:39",
                "arrivalHHMM": "16:35",
                "departureHHMM": "16:35",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1012002",
                "hafas_name": "Gutenbergplatz"
              },
              {
                "name": "Leipzig, Ostplatz",
                "stopId": "0011972",
                "lon": 12.396014,
                "lat": 51.331534,
                "arrival": 1740670560000,
                "departure": 1740670560000,
                "zoneId": "110",
                "stopSequence": 25,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740670800000,
                "arrivalDelayedTime": 1740670800000,
                "departureDelayedTimeHHMM": "16:40",
                "arrivalDelayedTimeHHMM": "16:40",
                "arrivalHHMM": "16:36",
                "departureHHMM": "16:36",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1012102",
                "hafas_name": "Ostplatz"
              },
              {
                "name": "Leipzig, Witzgallstr.",
                "stopId": "0012083",
                "lon": 12.399487,
                "lat": 51.328313,
                "arrival": 1740670680000,
                "departure": 1740670680000,
                "zoneId": "110",
                "stopSequence": 26,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740670920000,
                "arrivalDelayedTime": 1740670920000,
                "departureDelayedTimeHHMM": "16:42",
                "arrivalDelayedTimeHHMM": "16:42",
                "arrivalHHMM": "16:38",
                "departureHHMM": "16:38",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1012202",
                "hafas_name": "Witzgallstraße"
              },
              {
                "name": "Leipzig, Technisches Rathaus",
                "stopId": "0011335",
                "lon": 12.401051,
                "lat": 51.325,
                "arrival": 1740670740000,
                "departure": 1740670740000,
                "zoneId": "110",
                "stopSequence": 27,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740670980000,
                "arrivalDelayedTime": 1740670980000,
                "departureDelayedTimeHHMM": "16:43",
                "arrivalDelayedTimeHHMM": "16:43",
                "arrivalHHMM": "16:39",
                "departureHHMM": "16:39",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1012302",
                "hafas_name": "Technisches Rathaus"
              },
              {
                "name": "Leipzig, Altes Messegelände",
                "stopId": "0012079",
                "lon": 12.404742,
                "lat": 51.320655,
                "arrival": 1740670860000,
                "departure": 1740670860000,
                "zoneId": "110",
                "stopSequence": 28,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740671100000,
                "arrivalDelayedTime": 1740671100000,
                "departureDelayedTimeHHMM": "16:45",
                "arrivalDelayedTimeHHMM": "16:45",
                "arrivalHHMM": "16:41",
                "departureHHMM": "16:41",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1012402",
                "hafas_name": "Altes Messegelände"
              },
              {
                "name": "Leipzig, Naunhofer Str.",
                "stopId": "0012080",
                "lon": 12.408131,
                "lat": 51.317775,
                "arrival": 1740670920000,
                "departure": 1740670920000,
                "zoneId": "110",
                "stopSequence": 29,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740671160000,
                "arrivalDelayedTime": 1740671160000,
                "departureDelayedTimeHHMM": "16:46",
                "arrivalDelayedTimeHHMM": "16:46",
                "arrivalHHMM": "16:42",
                "departureHHMM": "16:42",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1012502",
                "hafas_name": "Naunhofer Straße"
              },
              {
                "name": "Leipzig, Völkerschlachtdenkmal (Tram/Bus)",
                "stopId": "0012076",
                "lon": 12.411561,
                "lat": 51.314851,
                "arrival": 1740670980000,
                "departure": 1740670980000,
                "zoneId": "110",
                "stopSequence": 30,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740671220000,
                "arrivalDelayedTime": 1740671220000,
                "departureDelayedTimeHHMM": "16:47",
                "arrivalDelayedTimeHHMM": "16:47",
                "arrivalHHMM": "16:43",
                "departureHHMM": "16:43",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1012602",
                "hafas_name": "Völkerschlachtdenkmal"
              },
              {
                "name": "Leipzig, Südfriedhof",
                "stopId": "0012078",
                "lon": 12.417136,
                "lat": 51.311164,
                "arrival": 1740671100000,
                "departure": 1740671100000,
                "zoneId": "110",
                "stopSequence": 31,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740671340000,
                "arrivalDelayedTime": 1740671340000,
                "departureDelayedTimeHHMM": "16:49",
                "arrivalDelayedTimeHHMM": "16:49",
                "arrivalHHMM": "16:45",
                "departureHHMM": "16:45",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1012702",
                "hafas_name": "Südfriedhof"
              },
              {
                "name": "Leipzig, Prager/Russenstr.",
                "stopId": "0012072",
                "lon": 12.422431,
                "lat": 51.306777,
                "arrival": 1740671160000,
                "departure": 1740671160000,
                "zoneId": "110",
                "stopSequence": 32,
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740671400000,
                "arrivalDelayedTime": 1740671400000,
                "departureDelayedTimeHHMM": "16:50",
                "arrivalDelayedTimeHHMM": "16:50",
                "arrivalHHMM": "16:46",
                "departureHHMM": "16:46",
                "arrivalDelay": 240,
                "departureDelay": 240,
                "cancelled": false,
                "hafas_id": "1012802",
                "hafas_name": "Prager/Russenstraße"
              }
            ],
            "legGeometry": {
              "points": [
                {
                  "lat": 51.33690000000001,
                  "lon": 12.38737
                },
                {
                  "lat": 51.33690000000001,
                  "lon": 12.38737
                },
                {
                  "lat": 51.33686,
                  "lon": 12.38746
                },
                {
                  "lat": 51.336650000000006,
                  "lon": 12.38793
                },
                {
                  "lat": 51.336580000000005,
                  "lon": 12.388100000000001
                },
                {
                  "lat": 51.3365,
                  "lon": 12.38826
                },
                {
                  "lat": 51.336420000000004,
                  "lon": 12.388440000000001
                },
                {
                  "lat": 51.336330000000004,
                  "lon": 12.3886
                },
                {
                  "lat": 51.33616000000001,
                  "lon": 12.38892
                },
                {
                  "lat": 51.33587000000001,
                  "lon": 12.389450000000002
                },
                {
                  "lat": 51.335460000000005,
                  "lon": 12.390160000000002
                },
                {
                  "lat": 51.334830000000004,
                  "lon": 12.391240000000002
                },
                {
                  "lat": 51.334720000000004,
                  "lon": 12.391420000000002
                },
                {
                  "lat": 51.33469,
                  "lon": 12.391480000000001
                },
                {
                  "lat": 51.33428000000001,
                  "lon": 12.392100000000001
                },
                {
                  "lat": 51.334270000000004,
                  "lon": 12.392080000000002
                },
                {
                  "lat": 51.334270000000004,
                  "lon": 12.392090000000001
                },
                {
                  "lat": 51.334270000000004,
                  "lon": 12.392090000000001
                },
                {
                  "lat": 51.33428000000001,
                  "lon": 12.392100000000001
                },
                {
                  "lat": 51.334210000000006,
                  "lon": 12.39221
                },
                {
                  "lat": 51.33409,
                  "lon": 12.39239
                },
                {
                  "lat": 51.33404,
                  "lon": 12.39245
                },
                {
                  "lat": 51.334010000000006,
                  "lon": 12.392500000000002
                },
                {
                  "lat": 51.33395,
                  "lon": 12.39258
                },
                {
                  "lat": 51.33390000000001,
                  "lon": 12.392650000000001
                },
                {
                  "lat": 51.332260000000005,
                  "lon": 12.39492
                },
                {
                  "lat": 51.33225,
                  "lon": 12.39493
                },
                {
                  "lat": 51.332100000000004,
                  "lon": 12.395150000000001
                },
                {
                  "lat": 51.332080000000005,
                  "lon": 12.395190000000001
                },
                {
                  "lat": 51.33194,
                  "lon": 12.3954
                },
                {
                  "lat": 51.33193000000001,
                  "lon": 12.395410000000002
                },
                {
                  "lat": 51.33176,
                  "lon": 12.395650000000002
                },
                {
                  "lat": 51.331540000000004,
                  "lon": 12.395980000000002
                },
                {
                  "lat": 51.33153,
                  "lon": 12.396
                },
                {
                  "lat": 51.33153,
                  "lon": 12.396020000000002
                },
                {
                  "lat": 51.33153,
                  "lon": 12.39601
                },
                {
                  "lat": 51.33153,
                  "lon": 12.39601
                },
                {
                  "lat": 51.33153,
                  "lon": 12.396
                },
                {
                  "lat": 51.33119000000001,
                  "lon": 12.396510000000001
                },
                {
                  "lat": 51.330850000000005,
                  "lon": 12.39703
                },
                {
                  "lat": 51.33062,
                  "lon": 12.397340000000002
                },
                {
                  "lat": 51.33024,
                  "lon": 12.397820000000001
                },
                {
                  "lat": 51.33016000000001,
                  "lon": 12.397900000000002
                },
                {
                  "lat": 51.33001,
                  "lon": 12.39808
                },
                {
                  "lat": 51.32987000000001,
                  "lon": 12.398230000000002
                },
                {
                  "lat": 51.32952,
                  "lon": 12.398620000000001
                },
                {
                  "lat": 51.329350000000005,
                  "lon": 12.39878
                },
                {
                  "lat": 51.32922000000001,
                  "lon": 12.398890000000002
                },
                {
                  "lat": 51.32887,
                  "lon": 12.399170000000002
                },
                {
                  "lat": 51.32846000000001,
                  "lon": 12.399410000000001
                },
                {
                  "lat": 51.328340000000004,
                  "lon": 12.399460000000001
                },
                {
                  "lat": 51.328300000000006,
                  "lon": 12.39947
                },
                {
                  "lat": 51.32831,
                  "lon": 12.39948
                },
                {
                  "lat": 51.32831,
                  "lon": 12.39948
                },
                {
                  "lat": 51.32831,
                  "lon": 12.39948
                },
                {
                  "lat": 51.328300000000006,
                  "lon": 12.39947
                },
                {
                  "lat": 51.328210000000006,
                  "lon": 12.39952
                },
                {
                  "lat": 51.327920000000006,
                  "lon": 12.39963
                },
                {
                  "lat": 51.327540000000006,
                  "lon": 12.39976
                },
                {
                  "lat": 51.327160000000006,
                  "lon": 12.39991
                },
                {
                  "lat": 51.32678000000001,
                  "lon": 12.40005
                },
                {
                  "lat": 51.326190000000004,
                  "lon": 12.400340000000002
                },
                {
                  "lat": 51.32592,
                  "lon": 12.400500000000001
                },
                {
                  "lat": 51.32546000000001,
                  "lon": 12.400780000000001
                },
                {
                  "lat": 51.325,
                  "lon": 12.401060000000001
                },
                {
                  "lat": 51.32499000000001,
                  "lon": 12.401050000000001
                },
                {
                  "lat": 51.32499000000001,
                  "lon": 12.401050000000001
                },
                {
                  "lat": 51.32499000000001,
                  "lon": 12.401050000000001
                },
                {
                  "lat": 51.325,
                  "lon": 12.401060000000001
                },
                {
                  "lat": 51.325,
                  "lon": 12.401060000000001
                },
                {
                  "lat": 51.32491,
                  "lon": 12.401110000000001
                },
                {
                  "lat": 51.32441000000001,
                  "lon": 12.40141
                },
                {
                  "lat": 51.32424,
                  "lon": 12.40154
                },
                {
                  "lat": 51.324200000000005,
                  "lon": 12.401580000000001
                },
                {
                  "lat": 51.324090000000005,
                  "lon": 12.401670000000001
                },
                {
                  "lat": 51.323910000000005,
                  "lon": 12.401850000000001
                },
                {
                  "lat": 51.323890000000006,
                  "lon": 12.40187
                },
                {
                  "lat": 51.32339,
                  "lon": 12.40238
                },
                {
                  "lat": 51.32217000000001,
                  "lon": 12.40347
                },
                {
                  "lat": 51.32198,
                  "lon": 12.40361
                },
                {
                  "lat": 51.321940000000005,
                  "lon": 12.403640000000001
                },
                {
                  "lat": 51.321810000000006,
                  "lon": 12.403730000000001
                },
                {
                  "lat": 51.32166,
                  "lon": 12.403830000000001
                },
                {
                  "lat": 51.321600000000004,
                  "lon": 12.403870000000001
                },
                {
                  "lat": 51.32159000000001,
                  "lon": 12.403870000000001
                },
                {
                  "lat": 51.32155,
                  "lon": 12.4039
                },
                {
                  "lat": 51.32144,
                  "lon": 12.40399
                },
                {
                  "lat": 51.320660000000004,
                  "lon": 12.40473
                },
                {
                  "lat": 51.32065000000001,
                  "lon": 12.40474
                },
                {
                  "lat": 51.32065000000001,
                  "lon": 12.40474
                },
                {
                  "lat": 51.32065000000001,
                  "lon": 12.40474
                },
                {
                  "lat": 51.32065000000001,
                  "lon": 12.40474
                },
                {
                  "lat": 51.32065000000001,
                  "lon": 12.40474
                },
                {
                  "lat": 51.320420000000006,
                  "lon": 12.404950000000001
                },
                {
                  "lat": 51.320220000000006,
                  "lon": 12.40516
                },
                {
                  "lat": 51.32003,
                  "lon": 12.405380000000001
                },
                {
                  "lat": 51.31996,
                  "lon": 12.405460000000001
                },
                {
                  "lat": 51.319900000000004,
                  "lon": 12.40553
                },
                {
                  "lat": 51.319720000000004,
                  "lon": 12.405740000000002
                },
                {
                  "lat": 51.31958,
                  "lon": 12.405930000000001
                },
                {
                  "lat": 51.31938,
                  "lon": 12.406210000000002
                },
                {
                  "lat": 51.319160000000004,
                  "lon": 12.40648
                },
                {
                  "lat": 51.31888000000001,
                  "lon": 12.4068
                },
                {
                  "lat": 51.31862,
                  "lon": 12.407100000000002
                },
                {
                  "lat": 51.3186,
                  "lon": 12.40712
                },
                {
                  "lat": 51.31855,
                  "lon": 12.407190000000002
                },
                {
                  "lat": 51.31851,
                  "lon": 12.40723
                },
                {
                  "lat": 51.318290000000005,
                  "lon": 12.40751
                },
                {
                  "lat": 51.31815,
                  "lon": 12.407680000000001
                },
                {
                  "lat": 51.31777,
                  "lon": 12.40812
                },
                {
                  "lat": 51.31777,
                  "lon": 12.408130000000002
                },
                {
                  "lat": 51.31777,
                  "lon": 12.408130000000002
                },
                {
                  "lat": 51.31777,
                  "lon": 12.408130000000002
                },
                {
                  "lat": 51.31777,
                  "lon": 12.408130000000002
                },
                {
                  "lat": 51.31777,
                  "lon": 12.408130000000002
                },
                {
                  "lat": 51.317710000000005,
                  "lon": 12.408190000000001
                },
                {
                  "lat": 51.31763,
                  "lon": 12.408280000000001
                },
                {
                  "lat": 51.31752,
                  "lon": 12.40839
                },
                {
                  "lat": 51.317400000000006,
                  "lon": 12.408510000000001
                },
                {
                  "lat": 51.31485000000001,
                  "lon": 12.41154
                },
                {
                  "lat": 51.31485000000001,
                  "lon": 12.411550000000002
                },
                {
                  "lat": 51.31485000000001,
                  "lon": 12.411550000000002
                },
                {
                  "lat": 51.31485000000001,
                  "lon": 12.41154
                },
                {
                  "lat": 51.314840000000004,
                  "lon": 12.41154
                },
                {
                  "lat": 51.31477,
                  "lon": 12.411620000000001
                },
                {
                  "lat": 51.31472,
                  "lon": 12.41168
                },
                {
                  "lat": 51.31466,
                  "lon": 12.411760000000001
                },
                {
                  "lat": 51.31452,
                  "lon": 12.41192
                },
                {
                  "lat": 51.31439,
                  "lon": 12.41211
                },
                {
                  "lat": 51.31327,
                  "lon": 12.41383
                },
                {
                  "lat": 51.312050000000006,
                  "lon": 12.41577
                },
                {
                  "lat": 51.3115,
                  "lon": 12.41661
                },
                {
                  "lat": 51.31116,
                  "lon": 12.41712
                },
                {
                  "lat": 51.31116,
                  "lon": 12.41713
                },
                {
                  "lat": 51.31116,
                  "lon": 12.41713
                },
                {
                  "lat": 51.31116,
                  "lon": 12.41713
                },
                {
                  "lat": 51.31116,
                  "lon": 12.41713
                },
                {
                  "lat": 51.31116,
                  "lon": 12.41713
                },
                {
                  "lat": 51.31109000000001,
                  "lon": 12.417230000000002
                },
                {
                  "lat": 51.31103,
                  "lon": 12.417330000000002
                },
                {
                  "lat": 51.309140000000006,
                  "lon": 12.420230000000002
                },
                {
                  "lat": 51.3089,
                  "lon": 12.420610000000002
                },
                {
                  "lat": 51.308620000000005,
                  "lon": 12.421080000000002
                },
                {
                  "lat": 51.30836000000001,
                  "lon": 12.42149
                },
                {
                  "lat": 51.308260000000004,
                  "lon": 12.421640000000002
                },
                {
                  "lat": 51.30814,
                  "lon": 12.42177
                },
                {
                  "lat": 51.30803,
                  "lon": 12.42186
                },
                {
                  "lat": 51.307900000000004,
                  "lon": 12.421940000000001
                },
                {
                  "lat": 51.307610000000004,
                  "lon": 12.422070000000001
                },
                {
                  "lat": 51.307410000000004,
                  "lon": 12.42215
                },
                {
                  "lat": 51.30678,
                  "lon": 12.42243
                },
                {
                  "lat": 51.30677000000001,
                  "lon": 12.42243
                },
                {
                  "lat": 51.30677000000001,
                  "lon": 12.42242
                },
                {
                  "lat": 51.30677000000001,
                  "lon": 12.42243
                },
                {
                  "lat": 51.30677000000001,
                  "lon": 12.42243
                },
                {
                  "lat": 51.30677000000001,
                  "lon": 12.42243
                },
                {
                  "lat": 51.30671,
                  "lon": 12.422460000000001
                },
                {
                  "lat": 51.306580000000004,
                  "lon": 12.42251
                },
                {
                  "lat": 51.306430000000006,
                  "lon": 12.422550000000001
                },
                {
                  "lat": 51.306270000000005,
                  "lon": 12.42262
                },
                {
                  "lat": 51.306020000000004,
                  "lon": 12.422730000000001
                },
                {
                  "lat": 51.3059,
                  "lon": 12.42281
                },
                {
                  "lat": 51.30584,
                  "lon": 12.42285
                },
                {
                  "lat": 51.30577,
                  "lon": 12.4229
                },
                {
                  "lat": 51.305690000000006,
                  "lon": 12.42298
                },
                {
                  "lat": 51.30556000000001,
                  "lon": 12.42313
                },
                {
                  "lat": 51.30547000000001,
                  "lon": 12.42327
                },
                {
                  "lat": 51.304970000000004,
                  "lon": 12.424130000000002
                },
                {
                  "lat": 51.30478,
                  "lon": 12.424470000000001
                },
                {
                  "lat": 51.304660000000005,
                  "lon": 12.42468
                },
                {
                  "lat": 51.3046,
                  "lon": 12.424790000000002
                },
                {
                  "lat": 51.304570000000005,
                  "lon": 12.424840000000001
                },
                {
                  "lat": 51.30418,
                  "lon": 12.42552
                },
                {
                  "lat": 51.30418,
                  "lon": 12.42553
                },
                {
                  "lat": 51.30418,
                  "lon": 12.42553
                }
              ],
              "length": 175
            },
            "steps": [],
            "routeShortName": "15",
            "routeLongName": "Tram 15",
            "wheelchairAccessible": 1,
            "duration": 780,
            "alerts": [],
            "departureDelayedTime": 1740670680000,
            "arrivalDelayedTime": 1740671460000,
            "departureDelayedTimeHHMM": "16:38",
            "arrivalDelayedTimeHHMM": "16:51",
            "startTimeHHMM": "16:34",
            "endTimeHHMM": "16:47",
            "cancelled": false,
            "wheelchairBoardingVehicle": null
          },
          {
            "startTime": 1740671220000,
            "endTime": 1740671520000,
            "departureDelay": 240,
            "arrivalDelay": 0,
            "realTime": false,
            "distance": 34,
            "mode": "WALK",
            "transitLeg": false,
            "route": "",
            "from": {
              "name": "Leipzig, Probstheida",
              "stopId": "0012073",
              "lon": 12.425533,
              "lat": 51.304177,
              "arrival": 1740671220000,
              "departure": 1740671220000,
              "zoneId": "110",
              "wheelchairBoarding": 1,
              "departureDelayedTime": 1740671460000,
              "arrivalDelayedTime": 1740671460000,
              "departureDelayedTimeHHMM": "16:51",
              "arrivalDelayedTimeHHMM": "16:51",
              "arrivalHHMM": "16:47",
              "departureHHMM": "16:47",
              "arrivalDelay": 240,
              "departureDelay": 240,
              "cancelled": false,
              "hafas_id": "1012902",
              "hafas_name": "Probstheida"
            },
            "to": {
              "name": "Leipzig, Probstheida",
              "stopId": "0012073",
              "lon": 12.4256479,
              "lat": 51.3042579,
              "arrival": 1740671520000,
              "departure": 1740671520000,
              "zoneId": "110",
              "wheelchairBoarding": 0,
              "departureDelayedTime": 1740671520000,
              "arrivalDelayedTime": 1740671520000,
              "departureDelayedTimeHHMM": "16:52",
              "arrivalDelayedTimeHHMM": "16:52",
              "arrivalHHMM": "16:52",
              "departureHHMM": "16:52",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false
            },
            "legGeometry": {
              "points": [
                {
                  "lat": 51.304170000000006,
                  "lon": 12.42553
                },
                {
                  "lat": 51.304170000000006,
                  "lon": 12.42552
                },
                {
                  "lat": 51.30416,
                  "lon": 12.425540000000002
                },
                {
                  "lat": 51.304140000000004,
                  "lon": 12.42557
                },
                {
                  "lat": 51.30413,
                  "lon": 12.42556
                },
                {
                  "lat": 51.30411,
                  "lon": 12.425580000000002
                },
                {
                  "lat": 51.30413,
                  "lon": 12.42561
                },
                {
                  "lat": 51.30416,
                  "lon": 12.425650000000001
                },
                {
                  "lat": 51.30418,
                  "lon": 12.42567
                },
                {
                  "lat": 51.304230000000004,
                  "lon": 12.425580000000002
                },
                {
                  "lat": 51.304260000000006,
                  "lon": 12.425630000000002
                },
                {
                  "lat": 51.30425,
                  "lon": 12.425640000000001
                },
                {
                  "lat": 51.30425,
                  "lon": 12.425640000000001
                }
              ],
              "length": 13
            },
            "steps": [
              {
                "distance": 7,
                "relativeDirection": "DEPART",
                "streetName": "Probstheida",
                "absoluteDirection": "SOUTHEAST",
                "lon": 12.425528,
                "lat": 51.3041736
              },
              {
                "distance": 26,
                "relativeDirection": "LEFT",
                "streetName": "path",
                "absoluteDirection": "SOUTHEAST",
                "lon": 12.4255631,
                "lat": 51.3041328
              },
              {
                "distance": 2,
                "relativeDirection": "RIGHT",
                "streetName": "Prager Straße",
                "absoluteDirection": "SOUTHEAST",
                "lon": 12.4256314,
                "lat": 51.3042675
              }
            ],
            "rentedBike": false,
            "duration": 60,
            "alerts": [],
            "departureDelayedTime": 1740671460000,
            "arrivalDelayedTime": 1740671520000,
            "departureDelayedTimeHHMM": "16:51",
            "arrivalDelayedTimeHHMM": "16:52",
            "startTimeHHMM": "16:47",
            "endTimeHHMM": "16:52",
            "cancelled": false,
            "durationOriginal": 300
          },
          {
            "startTime": 1740671520000,
            "endTime": 1740673800000,
            "departureDelay": 0,
            "arrivalDelay": 0,
            "realTime": false,
            "distance": 14363,
            "mode": "BUS",
            "transitLeg": true,
            "route": "106",
            "agencyName": "Regionalbus Leipzig GmbH",
            "agencyUrl": "https://www.mdv.de/partner/",
            "routeColor": "9b2986",
            "routeType": 3,
            "routeId": "RL____106",
            "tripShortName": "106048",
            "headsign": "Großstädteln (Markkleeberg), S-Bahnhof/ZöbigkerStr.",
            "agencyId": "1:00704",
            "tripId": "61085",
            "serviceDate": "20250227",
            "from": {
              "name": "Leipzig, Probstheida",
              "stopId": "0012073",
              "lon": 12.4256479,
              "lat": 51.3042579,
              "arrival": 1740671520000,
              "departure": 1740671520000,
              "zoneId": "110",
              "stopSequence": 2,
              "wheelchairBoarding": 0,
              "track": null,
              "scheduledTrack": null,
              "departureDelayedTime": 1740671520000,
              "arrivalDelayedTime": 1740671520000,
              "departureDelayedTimeHHMM": "16:52",
              "arrivalDelayedTimeHHMM": "16:52",
              "arrivalHHMM": "16:52",
              "departureHHMM": "16:52",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false
            },
            "to": {
              "name": "Zöbigker (Markkleeberg), Schmiede",
              "stopId": "0012987",
              "lon": 12.351914,
              "lat": 51.26663,
              "arrival": 1740673800000,
              "departure": 1740673800000,
              "zoneId": "151",
              "stopSequence": 24,
              "wheelchairBoarding": 0,
              "track": null,
              "scheduledTrack": null,
              "departureDelayedTime": 1740673800000,
              "arrivalDelayedTime": 1740673800000,
              "departureDelayedTimeHHMM": "17:30",
              "arrivalDelayedTimeHHMM": "17:30",
              "arrivalHHMM": "17:30",
              "departureHHMM": "17:30",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false
            },
            "intermediateStops": [
              {
                "name": "Leipzig, Pahlenweg",
                "stopId": "0011831",
                "lon": 12.4281226,
                "lat": 51.2919373,
                "arrival": 1740671700000,
                "departure": 1740671700000,
                "zoneId": "110",
                "stopSequence": 3,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740671700000,
                "arrivalDelayedTime": 1740671700000,
                "departureDelayedTimeHHMM": "16:55",
                "arrivalDelayedTimeHHMM": "16:55",
                "arrivalHHMM": "16:55",
                "departureHHMM": "16:55",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Leipzig, Schwarzenbergweg",
                "stopId": "0011916",
                "lon": 12.4294593,
                "lat": 51.2868965,
                "arrival": 1740671760000,
                "departure": 1740671760000,
                "zoneId": "110",
                "stopSequence": 4,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740671760000,
                "arrivalDelayedTime": 1740671760000,
                "departureDelayedTimeHHMM": "16:56",
                "arrivalDelayedTimeHHMM": "16:56",
                "arrivalHHMM": "16:56",
                "departureHHMM": "16:56",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Wachau (b. Leipzig), Gewerbepark",
                "stopId": "0011917",
                "lon": 12.4255217,
                "lat": 51.2842431,
                "arrival": 1740671880000,
                "departure": 1740671880000,
                "zoneId": "110",
                "stopSequence": 5,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740671880000,
                "arrivalDelayedTime": 1740671880000,
                "departureDelayedTimeHHMM": "16:58",
                "arrivalDelayedTimeHHMM": "16:58",
                "arrivalHHMM": "16:58",
                "departureHHMM": "16:58",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Wachau (b. Leipzig), Atlanta Hotel",
                "stopId": "0011214",
                "lon": 12.4271814,
                "lat": 51.2810899,
                "arrival": 1740671940000,
                "departure": 1740671940000,
                "zoneId": "110",
                "stopSequence": 6,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740671940000,
                "arrivalDelayedTime": 1740671940000,
                "departureDelayedTimeHHMM": "16:59",
                "arrivalDelayedTimeHHMM": "16:59",
                "arrivalHHMM": "16:59",
                "departureHHMM": "16:59",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Wachau (b. Leipzig), An der Hohle",
                "stopId": "0011914",
                "lon": 12.4315459,
                "lat": 51.2776866,
                "arrival": 1740672060000,
                "departure": 1740672060000,
                "zoneId": "151",
                "stopSequence": 7,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672060000,
                "arrivalDelayedTime": 1740672060000,
                "departureDelayedTimeHHMM": "17:01",
                "arrivalDelayedTimeHHMM": "17:01",
                "arrivalHHMM": "17:01",
                "departureHHMM": "17:01",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Wachau (b. Leipzig), Am Bach",
                "stopId": "0011915",
                "lon": 12.4278392,
                "lat": 51.2758072,
                "arrival": 1740672180000,
                "departure": 1740672180000,
                "zoneId": "151",
                "stopSequence": 8,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672180000,
                "arrivalDelayedTime": 1740672180000,
                "departureDelayedTimeHHMM": "17:03",
                "arrivalDelayedTimeHHMM": "17:03",
                "arrivalHHMM": "17:03",
                "departureHHMM": "17:03",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Wachau (b. Leipzig), Crostewitzer Str.",
                "stopId": "0011912",
                "lon": 12.423214,
                "lat": 51.273527,
                "arrival": 1740672240000,
                "departure": 1740672240000,
                "zoneId": "151",
                "stopSequence": 9,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672240000,
                "arrivalDelayedTime": 1740672240000,
                "departureDelayedTimeHHMM": "17:04",
                "arrivalDelayedTimeHHMM": "17:04",
                "arrivalHHMM": "17:04",
                "departureHHMM": "17:04",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Goldene Höhe",
                "stopId": "0011913",
                "lon": 12.41247,
                "lat": 51.273041,
                "arrival": 1740672300000,
                "departure": 1740672300000,
                "zoneId": "151",
                "stopSequence": 10,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672300000,
                "arrivalDelayedTime": 1740672300000,
                "departureDelayedTimeHHMM": "17:05",
                "arrivalDelayedTimeHHMM": "17:05",
                "arrivalHHMM": "17:05",
                "departureHHMM": "17:05",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Heinrich-Heine-Str.",
                "stopId": "0011910",
                "lon": 12.400316,
                "lat": 51.272685,
                "arrival": 1740672360000,
                "departure": 1740672360000,
                "zoneId": "151",
                "stopSequence": 11,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672360000,
                "arrivalDelayedTime": 1740672360000,
                "departureDelayedTimeHHMM": "17:06",
                "arrivalDelayedTimeHHMM": "17:06",
                "arrivalHHMM": "17:06",
                "departureHHMM": "17:06",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Ost, Seepromenade",
                "stopId": "0022383",
                "lon": 12.398439,
                "lat": 51.271921,
                "arrival": 1740672420000,
                "departure": 1740672420000,
                "zoneId": "151",
                "stopSequence": 12,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672420000,
                "arrivalDelayedTime": 1740672420000,
                "departureDelayedTimeHHMM": "17:07",
                "arrivalDelayedTimeHHMM": "17:07",
                "arrivalHHMM": "17:07",
                "departureHHMM": "17:07",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Ost, Schillerplatz",
                "stopId": "0011911",
                "lon": 12.3971824,
                "lat": 51.2759523,
                "arrival": 1740672480000,
                "departure": 1740672480000,
                "zoneId": "151",
                "stopSequence": 13,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672480000,
                "arrivalDelayedTime": 1740672480000,
                "departureDelayedTimeHHMM": "17:08",
                "arrivalDelayedTimeHHMM": "17:08",
                "arrivalHHMM": "17:08",
                "departureHHMM": "17:08",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Ost, Auenplatz",
                "stopId": "0003851",
                "lon": 12.3928535,
                "lat": 51.2771143,
                "arrival": 1740672600000,
                "departure": 1740672600000,
                "zoneId": "151",
                "stopSequence": 14,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672600000,
                "arrivalDelayedTime": 1740672600000,
                "departureDelayedTimeHHMM": "17:10",
                "arrivalDelayedTimeHHMM": "17:10",
                "arrivalHHMM": "17:10",
                "departureHHMM": "17:10",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Seenallee",
                "stopId": "0019940",
                "lon": 12.3771924,
                "lat": 51.2731332,
                "arrival": 1740672780000,
                "departure": 1740672780000,
                "zoneId": "151",
                "stopSequence": 15,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672780000,
                "arrivalDelayedTime": 1740672780000,
                "departureDelayedTimeHHMM": "17:13",
                "arrivalDelayedTimeHHMM": "17:13",
                "arrivalHHMM": "17:13",
                "departureHHMM": "17:13",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Schulstr.",
                "stopId": "0011918",
                "lon": 12.374816,
                "lat": 51.2788288,
                "arrival": 1740672840000,
                "departure": 1740672840000,
                "zoneId": "151",
                "stopSequence": 16,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740672840000,
                "arrivalDelayedTime": 1740672840000,
                "departureDelayedTimeHHMM": "17:14",
                "arrivalDelayedTimeHHMM": "17:14",
                "arrivalHHMM": "17:14",
                "departureHHMM": "17:14",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, S-Bahnhof (Bus)",
                "stopId": "0010998",
                "lon": 12.3704606,
                "lat": 51.2791446,
                "arrival": 1740672960000,
                "departure": 1740673080000,
                "zoneId": "151",
                "stopSequence": 17,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740673080000,
                "arrivalDelayedTime": 1740672960000,
                "departureDelayedTimeHHMM": "17:18",
                "arrivalDelayedTimeHHMM": "17:16",
                "arrivalHHMM": "17:16",
                "departureHHMM": "17:18",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Sonnesiedlung",
                "stopId": "0012037",
                "lon": 12.3635871,
                "lat": 51.2831441,
                "arrival": 1740673200000,
                "departure": 1740673200000,
                "zoneId": "151",
                "stopSequence": 18,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740673200000,
                "arrivalDelayedTime": 1740673200000,
                "departureDelayedTimeHHMM": "17:20",
                "arrivalDelayedTimeHHMM": "17:20",
                "arrivalHHMM": "17:20",
                "departureHHMM": "17:20",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Gautzscher Platz",
                "stopId": "0012988",
                "lon": 12.3592058,
                "lat": 51.2788496,
                "arrival": 1740673320000,
                "departure": 1740673320000,
                "zoneId": "151",
                "stopSequence": 19,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740673320000,
                "arrivalDelayedTime": 1740673320000,
                "departureDelayedTimeHHMM": "17:22",
                "arrivalDelayedTimeHHMM": "17:22",
                "arrivalHHMM": "17:22",
                "departureHHMM": "17:22",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Am Eulenberg",
                "stopId": "0012986",
                "lon": 12.356505,
                "lat": 51.272458,
                "arrival": 1740673440000,
                "departure": 1740673440000,
                "zoneId": "151",
                "stopSequence": 20,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740673440000,
                "arrivalDelayedTime": 1740673440000,
                "departureDelayedTimeHHMM": "17:24",
                "arrivalDelayedTimeHHMM": "17:24",
                "arrivalHHMM": "17:24",
                "departureHHMM": "17:24",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Sonnenweg",
                "stopId": "0012767",
                "lon": 12.360237,
                "lat": 51.270957,
                "arrival": 1740673500000,
                "departure": 1740673500000,
                "zoneId": "151",
                "stopSequence": 21,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740673500000,
                "arrivalDelayedTime": 1740673500000,
                "departureDelayedTimeHHMM": "17:25",
                "arrivalDelayedTimeHHMM": "17:25",
                "arrivalHHMM": "17:25",
                "departureHHMM": "17:25",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Seniorenzentrum",
                "stopId": "0012768",
                "lon": 12.363897,
                "lat": 51.270618,
                "arrival": 1740673560000,
                "departure": 1740673560000,
                "zoneId": "151",
                "stopSequence": 22,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740673560000,
                "arrivalDelayedTime": 1740673560000,
                "departureDelayedTimeHHMM": "17:26",
                "arrivalDelayedTimeHHMM": "17:26",
                "arrivalHHMM": "17:26",
                "departureHHMM": "17:26",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              {
                "name": "Markkleeberg, Freiburger Allee",
                "stopId": "0012769",
                "lon": 12.355647,
                "lat": 51.27065,
                "arrival": 1740673680000,
                "departure": 1740673680000,
                "zoneId": "151",
                "stopSequence": 23,
                "wheelchairBoarding": null,
                "departureDelayedTime": 1740673680000,
                "arrivalDelayedTime": 1740673680000,
                "departureDelayedTimeHHMM": "17:28",
                "arrivalDelayedTimeHHMM": "17:28",
                "arrivalHHMM": "17:28",
                "departureHHMM": "17:28",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              }
            ],
            "legGeometry": {
              "points": [
                {
                  "lat": 51.30418,
                  "lon": 12.42553
                },
                {
                  "lat": 51.30406000000001,
                  "lon": 12.425740000000001
                },
                {
                  "lat": 51.303920000000005,
                  "lon": 12.425870000000002
                },
                {
                  "lat": 51.30346,
                  "lon": 12.426680000000001
                },
                {
                  "lat": 51.303250000000006,
                  "lon": 12.426680000000001
                },
                {
                  "lat": 51.302670000000006,
                  "lon": 12.426720000000001
                },
                {
                  "lat": 51.302550000000004,
                  "lon": 12.42669
                },
                {
                  "lat": 51.301860000000005,
                  "lon": 12.426730000000001
                },
                {
                  "lat": 51.301500000000004,
                  "lon": 12.426730000000001
                },
                {
                  "lat": 51.301370000000006,
                  "lon": 12.426730000000001
                },
                {
                  "lat": 51.300850000000004,
                  "lon": 12.426770000000001
                },
                {
                  "lat": 51.3006,
                  "lon": 12.426800000000002
                },
                {
                  "lat": 51.30004,
                  "lon": 12.42684
                },
                {
                  "lat": 51.29708,
                  "lon": 12.42702
                },
                {
                  "lat": 51.295730000000006,
                  "lon": 12.42712
                },
                {
                  "lat": 51.295390000000005,
                  "lon": 12.427200000000001
                },
                {
                  "lat": 51.294830000000005,
                  "lon": 12.42736
                },
                {
                  "lat": 51.29229,
                  "lon": 12.428020000000002
                },
                {
                  "lat": 51.29193,
                  "lon": 12.428120000000002
                },
                {
                  "lat": 51.29193,
                  "lon": 12.428120000000002
                },
                {
                  "lat": 51.291470000000004,
                  "lon": 12.42825
                },
                {
                  "lat": 51.28895000000001,
                  "lon": 12.428920000000002
                },
                {
                  "lat": 51.28689000000001,
                  "lon": 12.429450000000001
                },
                {
                  "lat": 51.28689000000001,
                  "lon": 12.429450000000001
                },
                {
                  "lat": 51.28669000000001,
                  "lon": 12.4295
                },
                {
                  "lat": 51.28614,
                  "lon": 12.429640000000001
                },
                {
                  "lat": 51.28613000000001,
                  "lon": 12.429590000000001
                },
                {
                  "lat": 51.286100000000005,
                  "lon": 12.429530000000002
                },
                {
                  "lat": 51.286060000000006,
                  "lon": 12.429490000000001
                },
                {
                  "lat": 51.28604000000001,
                  "lon": 12.429490000000001
                },
                {
                  "lat": 51.286010000000005,
                  "lon": 12.429490000000001
                },
                {
                  "lat": 51.28555000000001,
                  "lon": 12.425160000000002
                },
                {
                  "lat": 51.28428,
                  "lon": 12.425510000000001
                },
                {
                  "lat": 51.284240000000004,
                  "lon": 12.42552
                },
                {
                  "lat": 51.284240000000004,
                  "lon": 12.42552
                },
                {
                  "lat": 51.2811,
                  "lon": 12.42637
                },
                {
                  "lat": 51.280840000000005,
                  "lon": 12.42645
                },
                {
                  "lat": 51.28078000000001,
                  "lon": 12.426530000000001
                },
                {
                  "lat": 51.280750000000005,
                  "lon": 12.42664
                },
                {
                  "lat": 51.280750000000005,
                  "lon": 12.426760000000002
                },
                {
                  "lat": 51.280800000000006,
                  "lon": 12.42725
                },
                {
                  "lat": 51.280800000000006,
                  "lon": 12.42725
                },
                {
                  "lat": 51.281130000000005,
                  "lon": 12.430460000000002
                },
                {
                  "lat": 51.281130000000005,
                  "lon": 12.430790000000002
                },
                {
                  "lat": 51.281130000000005,
                  "lon": 12.430940000000001
                },
                {
                  "lat": 51.28036,
                  "lon": 12.431140000000001
                },
                {
                  "lat": 51.28023,
                  "lon": 12.43119
                },
                {
                  "lat": 51.279300000000006,
                  "lon": 12.431450000000002
                },
                {
                  "lat": 51.27798000000001,
                  "lon": 12.431790000000001
                },
                {
                  "lat": 51.277750000000005,
                  "lon": 12.43186
                },
                {
                  "lat": 51.277680000000004,
                  "lon": 12.431540000000002
                },
                {
                  "lat": 51.277680000000004,
                  "lon": 12.431540000000002
                },
                {
                  "lat": 51.27767000000001,
                  "lon": 12.431460000000001
                },
                {
                  "lat": 51.27747,
                  "lon": 12.430430000000001
                },
                {
                  "lat": 51.27745,
                  "lon": 12.43035
                },
                {
                  "lat": 51.27741,
                  "lon": 12.430290000000001
                },
                {
                  "lat": 51.27736,
                  "lon": 12.43022
                },
                {
                  "lat": 51.277300000000004,
                  "lon": 12.43017
                },
                {
                  "lat": 51.277240000000006,
                  "lon": 12.430140000000002
                },
                {
                  "lat": 51.27718,
                  "lon": 12.430140000000002
                },
                {
                  "lat": 51.27669,
                  "lon": 12.43021
                },
                {
                  "lat": 51.276610000000005,
                  "lon": 12.430190000000001
                },
                {
                  "lat": 51.276540000000004,
                  "lon": 12.43016
                },
                {
                  "lat": 51.27648000000001,
                  "lon": 12.430090000000002
                },
                {
                  "lat": 51.27644,
                  "lon": 12.429990000000002
                },
                {
                  "lat": 51.27635,
                  "lon": 12.429630000000001
                },
                {
                  "lat": 51.27619000000001,
                  "lon": 12.429070000000001
                },
                {
                  "lat": 51.275800000000004,
                  "lon": 12.42783
                },
                {
                  "lat": 51.275800000000004,
                  "lon": 12.42783
                },
                {
                  "lat": 51.275760000000005,
                  "lon": 12.427710000000001
                },
                {
                  "lat": 51.27564,
                  "lon": 12.42731
                },
                {
                  "lat": 51.275580000000005,
                  "lon": 12.42721
                },
                {
                  "lat": 51.27553,
                  "lon": 12.42716
                },
                {
                  "lat": 51.275420000000004,
                  "lon": 12.42711
                },
                {
                  "lat": 51.275310000000005,
                  "lon": 12.42711
                },
                {
                  "lat": 51.2749,
                  "lon": 12.42722
                },
                {
                  "lat": 51.27412,
                  "lon": 12.42753
                },
                {
                  "lat": 51.27403,
                  "lon": 12.42753
                },
                {
                  "lat": 51.27398,
                  "lon": 12.427480000000001
                },
                {
                  "lat": 51.273950000000006,
                  "lon": 12.42739
                },
                {
                  "lat": 51.27391,
                  "lon": 12.427200000000001
                },
                {
                  "lat": 51.27353,
                  "lon": 12.42467
                },
                {
                  "lat": 51.273500000000006,
                  "lon": 12.424330000000001
                },
                {
                  "lat": 51.27349,
                  "lon": 12.42392
                },
                {
                  "lat": 51.273500000000006,
                  "lon": 12.423210000000001
                },
                {
                  "lat": 51.273500000000006,
                  "lon": 12.423210000000001
                },
                {
                  "lat": 51.273500000000006,
                  "lon": 12.423140000000002
                },
                {
                  "lat": 51.27355000000001,
                  "lon": 12.419270000000001
                },
                {
                  "lat": 51.27365,
                  "lon": 12.417810000000001
                },
                {
                  "lat": 51.27366000000001,
                  "lon": 12.417390000000001
                },
                {
                  "lat": 51.27364000000001,
                  "lon": 12.417000000000002
                },
                {
                  "lat": 51.27356,
                  "lon": 12.416540000000001
                },
                {
                  "lat": 51.27351,
                  "lon": 12.41627
                },
                {
                  "lat": 51.273360000000004,
                  "lon": 12.41558
                },
                {
                  "lat": 51.2732,
                  "lon": 12.414930000000002
                },
                {
                  "lat": 51.27313,
                  "lon": 12.414530000000001
                },
                {
                  "lat": 51.27310000000001,
                  "lon": 12.41422
                },
                {
                  "lat": 51.27304,
                  "lon": 12.412820000000002
                },
                {
                  "lat": 51.27304,
                  "lon": 12.412600000000001
                },
                {
                  "lat": 51.27304,
                  "lon": 12.41247
                },
                {
                  "lat": 51.27304,
                  "lon": 12.41247
                },
                {
                  "lat": 51.273050000000005,
                  "lon": 12.40985
                },
                {
                  "lat": 51.27304,
                  "lon": 12.409370000000001
                },
                {
                  "lat": 51.27295,
                  "lon": 12.408470000000001
                },
                {
                  "lat": 51.27286,
                  "lon": 12.4077
                },
                {
                  "lat": 51.272800000000004,
                  "lon": 12.40727
                },
                {
                  "lat": 51.27244,
                  "lon": 12.40515
                },
                {
                  "lat": 51.272380000000005,
                  "lon": 12.404530000000001
                },
                {
                  "lat": 51.272360000000006,
                  "lon": 12.404020000000001
                },
                {
                  "lat": 51.272360000000006,
                  "lon": 12.403350000000001
                },
                {
                  "lat": 51.27239,
                  "lon": 12.402660000000001
                },
                {
                  "lat": 51.272650000000006,
                  "lon": 12.40033
                },
                {
                  "lat": 51.27266,
                  "lon": 12.400300000000001
                },
                {
                  "lat": 51.27266,
                  "lon": 12.400300000000001
                },
                {
                  "lat": 51.27286,
                  "lon": 12.398660000000001
                },
                {
                  "lat": 51.27290000000001,
                  "lon": 12.39835
                },
                {
                  "lat": 51.27290000000001,
                  "lon": 12.398140000000001
                },
                {
                  "lat": 51.27291,
                  "lon": 12.398060000000001
                },
                {
                  "lat": 51.272740000000006,
                  "lon": 12.39802
                },
                {
                  "lat": 51.272380000000005,
                  "lon": 12.39817
                },
                {
                  "lat": 51.27205000000001,
                  "lon": 12.398270000000002
                },
                {
                  "lat": 51.271710000000006,
                  "lon": 12.398320000000002
                },
                {
                  "lat": 51.27165,
                  "lon": 12.398460000000002
                },
                {
                  "lat": 51.27165,
                  "lon": 12.398510000000002
                },
                {
                  "lat": 51.27168,
                  "lon": 12.39858
                },
                {
                  "lat": 51.27172,
                  "lon": 12.398620000000001
                },
                {
                  "lat": 51.271770000000004,
                  "lon": 12.398610000000001
                },
                {
                  "lat": 51.271800000000006,
                  "lon": 12.39858
                },
                {
                  "lat": 51.271860000000004,
                  "lon": 12.398460000000002
                },
                {
                  "lat": 51.27188,
                  "lon": 12.3984
                },
                {
                  "lat": 51.27188,
                  "lon": 12.3984
                },
                {
                  "lat": 51.271930000000005,
                  "lon": 12.398290000000001
                },
                {
                  "lat": 51.27205000000001,
                  "lon": 12.398270000000002
                },
                {
                  "lat": 51.272380000000005,
                  "lon": 12.39817
                },
                {
                  "lat": 51.272740000000006,
                  "lon": 12.39802
                },
                {
                  "lat": 51.27291,
                  "lon": 12.398060000000001
                },
                {
                  "lat": 51.27293,
                  "lon": 12.397920000000001
                },
                {
                  "lat": 51.27297,
                  "lon": 12.39784
                },
                {
                  "lat": 51.27304,
                  "lon": 12.39783
                },
                {
                  "lat": 51.27317000000001,
                  "lon": 12.39779
                },
                {
                  "lat": 51.2732,
                  "lon": 12.397760000000002
                },
                {
                  "lat": 51.273500000000006,
                  "lon": 12.397730000000001
                },
                {
                  "lat": 51.27362,
                  "lon": 12.39774
                },
                {
                  "lat": 51.27391,
                  "lon": 12.3978
                },
                {
                  "lat": 51.27443,
                  "lon": 12.39793
                },
                {
                  "lat": 51.27452,
                  "lon": 12.39794
                },
                {
                  "lat": 51.27463,
                  "lon": 12.397950000000002
                },
                {
                  "lat": 51.27481,
                  "lon": 12.397920000000001
                },
                {
                  "lat": 51.27494,
                  "lon": 12.397870000000001
                },
                {
                  "lat": 51.27506,
                  "lon": 12.3978
                },
                {
                  "lat": 51.27512,
                  "lon": 12.39779
                },
                {
                  "lat": 51.275180000000006,
                  "lon": 12.397760000000002
                },
                {
                  "lat": 51.27525000000001,
                  "lon": 12.39769
                },
                {
                  "lat": 51.275290000000005,
                  "lon": 12.397630000000001
                },
                {
                  "lat": 51.27532,
                  "lon": 12.397540000000001
                },
                {
                  "lat": 51.2755,
                  "lon": 12.397260000000001
                },
                {
                  "lat": 51.275760000000005,
                  "lon": 12.3969
                },
                {
                  "lat": 51.27579,
                  "lon": 12.39686
                },
                {
                  "lat": 51.27579,
                  "lon": 12.39686
                },
                {
                  "lat": 51.27599000000001,
                  "lon": 12.39662
                },
                {
                  "lat": 51.27606,
                  "lon": 12.396560000000001
                },
                {
                  "lat": 51.27615,
                  "lon": 12.39652
                },
                {
                  "lat": 51.277350000000006,
                  "lon": 12.3961
                },
                {
                  "lat": 51.27732,
                  "lon": 12.395760000000001
                },
                {
                  "lat": 51.27722000000001,
                  "lon": 12.39375
                },
                {
                  "lat": 51.27716,
                  "lon": 12.39319
                },
                {
                  "lat": 51.277120000000004,
                  "lon": 12.392900000000001
                },
                {
                  "lat": 51.27711000000001,
                  "lon": 12.392850000000001
                },
                {
                  "lat": 51.27711000000001,
                  "lon": 12.392850000000001
                },
                {
                  "lat": 51.27704000000001,
                  "lon": 12.392470000000001
                },
                {
                  "lat": 51.27704000000001,
                  "lon": 12.39235
                },
                {
                  "lat": 51.277,
                  "lon": 12.39217
                },
                {
                  "lat": 51.27695000000001,
                  "lon": 12.39211
                },
                {
                  "lat": 51.276880000000006,
                  "lon": 12.391850000000002
                },
                {
                  "lat": 51.27667,
                  "lon": 12.391250000000001
                },
                {
                  "lat": 51.276410000000006,
                  "lon": 12.390680000000001
                },
                {
                  "lat": 51.276230000000005,
                  "lon": 12.390320000000001
                },
                {
                  "lat": 51.27584,
                  "lon": 12.389640000000002
                },
                {
                  "lat": 51.27564,
                  "lon": 12.389320000000001
                },
                {
                  "lat": 51.27559,
                  "lon": 12.389180000000001
                },
                {
                  "lat": 51.27537,
                  "lon": 12.388810000000001
                },
                {
                  "lat": 51.27525000000001,
                  "lon": 12.388630000000001
                },
                {
                  "lat": 51.27516000000001,
                  "lon": 12.388530000000001
                },
                {
                  "lat": 51.27409,
                  "lon": 12.38677
                },
                {
                  "lat": 51.273950000000006,
                  "lon": 12.38653
                },
                {
                  "lat": 51.27382000000001,
                  "lon": 12.386260000000002
                },
                {
                  "lat": 51.27362,
                  "lon": 12.385800000000001
                },
                {
                  "lat": 51.273540000000004,
                  "lon": 12.38559
                },
                {
                  "lat": 51.273430000000005,
                  "lon": 12.38526
                },
                {
                  "lat": 51.27326000000001,
                  "lon": 12.38461
                },
                {
                  "lat": 51.27317000000001,
                  "lon": 12.38414
                },
                {
                  "lat": 51.27311,
                  "lon": 12.38371
                },
                {
                  "lat": 51.272960000000005,
                  "lon": 12.381920000000001
                },
                {
                  "lat": 51.272650000000006,
                  "lon": 12.37817
                },
                {
                  "lat": 51.27262,
                  "lon": 12.377650000000001
                },
                {
                  "lat": 51.27261000000001,
                  "lon": 12.377350000000002
                },
                {
                  "lat": 51.27293,
                  "lon": 12.377260000000001
                },
                {
                  "lat": 51.27311,
                  "lon": 12.3772
                },
                {
                  "lat": 51.27313,
                  "lon": 12.37719
                },
                {
                  "lat": 51.27313,
                  "lon": 12.37719
                },
                {
                  "lat": 51.27322,
                  "lon": 12.377160000000002
                },
                {
                  "lat": 51.27347,
                  "lon": 12.377160000000002
                },
                {
                  "lat": 51.274570000000004,
                  "lon": 12.377120000000001
                },
                {
                  "lat": 51.274930000000005,
                  "lon": 12.377110000000002
                },
                {
                  "lat": 51.2755,
                  "lon": 12.377160000000002
                },
                {
                  "lat": 51.275580000000005,
                  "lon": 12.37715
                },
                {
                  "lat": 51.275650000000006,
                  "lon": 12.377130000000001
                },
                {
                  "lat": 51.27678,
                  "lon": 12.376610000000001
                },
                {
                  "lat": 51.27698,
                  "lon": 12.376500000000002
                },
                {
                  "lat": 51.277080000000005,
                  "lon": 12.37639
                },
                {
                  "lat": 51.278000000000006,
                  "lon": 12.375280000000002
                },
                {
                  "lat": 51.27807000000001,
                  "lon": 12.375210000000001
                },
                {
                  "lat": 51.278130000000004,
                  "lon": 12.375160000000001
                },
                {
                  "lat": 51.27857,
                  "lon": 12.37493
                },
                {
                  "lat": 51.278690000000005,
                  "lon": 12.37489
                },
                {
                  "lat": 51.27882,
                  "lon": 12.374810000000002
                },
                {
                  "lat": 51.27882,
                  "lon": 12.374810000000002
                },
                {
                  "lat": 51.27882,
                  "lon": 12.374810000000002
                },
                {
                  "lat": 51.27919000000001,
                  "lon": 12.37462
                },
                {
                  "lat": 51.2798,
                  "lon": 12.374260000000001
                },
                {
                  "lat": 51.279610000000005,
                  "lon": 12.37339
                },
                {
                  "lat": 51.27949,
                  "lon": 12.37278
                },
                {
                  "lat": 51.27929,
                  "lon": 12.371450000000001
                },
                {
                  "lat": 51.27910000000001,
                  "lon": 12.37152
                },
                {
                  "lat": 51.278850000000006,
                  "lon": 12.371630000000001
                },
                {
                  "lat": 51.27852000000001,
                  "lon": 12.3717
                },
                {
                  "lat": 51.27844,
                  "lon": 12.371730000000001
                },
                {
                  "lat": 51.27816000000001,
                  "lon": 12.37199
                },
                {
                  "lat": 51.27803,
                  "lon": 12.37208
                },
                {
                  "lat": 51.27792,
                  "lon": 12.37218
                },
                {
                  "lat": 51.277890000000006,
                  "lon": 12.37222
                },
                {
                  "lat": 51.27788,
                  "lon": 12.372290000000001
                },
                {
                  "lat": 51.2779,
                  "lon": 12.37236
                },
                {
                  "lat": 51.277930000000005,
                  "lon": 12.3724
                },
                {
                  "lat": 51.27796000000001,
                  "lon": 12.37241
                },
                {
                  "lat": 51.27801,
                  "lon": 12.372390000000001
                },
                {
                  "lat": 51.278040000000004,
                  "lon": 12.37231
                },
                {
                  "lat": 51.27806,
                  "lon": 12.37221
                },
                {
                  "lat": 51.2781,
                  "lon": 12.372110000000001
                },
                {
                  "lat": 51.27816000000001,
                  "lon": 12.37199
                },
                {
                  "lat": 51.27844,
                  "lon": 12.371730000000001
                },
                {
                  "lat": 51.27852000000001,
                  "lon": 12.3717
                },
                {
                  "lat": 51.278850000000006,
                  "lon": 12.371630000000001
                },
                {
                  "lat": 51.27929,
                  "lon": 12.371450000000001
                },
                {
                  "lat": 51.279160000000005,
                  "lon": 12.37057
                },
                {
                  "lat": 51.27915,
                  "lon": 12.370450000000002
                },
                {
                  "lat": 51.27915,
                  "lon": 12.370450000000002
                },
                {
                  "lat": 51.27910000000001,
                  "lon": 12.37006
                },
                {
                  "lat": 51.279070000000004,
                  "lon": 12.369800000000001
                },
                {
                  "lat": 51.279070000000004,
                  "lon": 12.369670000000001
                },
                {
                  "lat": 51.279090000000004,
                  "lon": 12.369320000000002
                },
                {
                  "lat": 51.279160000000005,
                  "lon": 12.368540000000001
                },
                {
                  "lat": 51.27924,
                  "lon": 12.36855
                },
                {
                  "lat": 51.27928000000001,
                  "lon": 12.368530000000002
                },
                {
                  "lat": 51.28061,
                  "lon": 12.367080000000001
                },
                {
                  "lat": 51.28237000000001,
                  "lon": 12.365870000000001
                },
                {
                  "lat": 51.28298,
                  "lon": 12.36438
                },
                {
                  "lat": 51.283260000000006,
                  "lon": 12.363710000000001
                },
                {
                  "lat": 51.28314,
                  "lon": 12.36358
                },
                {
                  "lat": 51.28314,
                  "lon": 12.36358
                },
                {
                  "lat": 51.27982,
                  "lon": 12.360080000000002
                },
                {
                  "lat": 51.27948000000001,
                  "lon": 12.3597
                },
                {
                  "lat": 51.279230000000005,
                  "lon": 12.359470000000002
                },
                {
                  "lat": 51.278850000000006,
                  "lon": 12.359210000000001
                },
                {
                  "lat": 51.27884,
                  "lon": 12.359200000000001
                },
                {
                  "lat": 51.27884,
                  "lon": 12.359200000000001
                },
                {
                  "lat": 51.276650000000004,
                  "lon": 12.357740000000002
                },
                {
                  "lat": 51.27577,
                  "lon": 12.357140000000001
                },
                {
                  "lat": 51.274950000000004,
                  "lon": 12.356570000000001
                },
                {
                  "lat": 51.274680000000004,
                  "lon": 12.3564
                },
                {
                  "lat": 51.273830000000004,
                  "lon": 12.35585
                },
                {
                  "lat": 51.27310000000001,
                  "lon": 12.355310000000001
                },
                {
                  "lat": 51.27257,
                  "lon": 12.354980000000001
                },
                {
                  "lat": 51.272400000000005,
                  "lon": 12.35565
                },
                {
                  "lat": 51.272310000000004,
                  "lon": 12.35603
                },
                {
                  "lat": 51.27232000000001,
                  "lon": 12.35612
                },
                {
                  "lat": 51.272420000000004,
                  "lon": 12.356520000000002
                },
                {
                  "lat": 51.272420000000004,
                  "lon": 12.356520000000002
                },
                {
                  "lat": 51.272420000000004,
                  "lon": 12.356530000000001
                },
                {
                  "lat": 51.27248,
                  "lon": 12.35679
                },
                {
                  "lat": 51.2725,
                  "lon": 12.35697
                },
                {
                  "lat": 51.2725,
                  "lon": 12.357140000000001
                },
                {
                  "lat": 51.27246,
                  "lon": 12.357370000000001
                },
                {
                  "lat": 51.27244,
                  "lon": 12.357920000000002
                },
                {
                  "lat": 51.27176000000001,
                  "lon": 12.357890000000001
                },
                {
                  "lat": 51.271620000000006,
                  "lon": 12.35782
                },
                {
                  "lat": 51.27112,
                  "lon": 12.357800000000001
                },
                {
                  "lat": 51.27105,
                  "lon": 12.357850000000001
                },
                {
                  "lat": 51.271080000000005,
                  "lon": 12.358020000000002
                },
                {
                  "lat": 51.271040000000006,
                  "lon": 12.359430000000001
                },
                {
                  "lat": 51.27103,
                  "lon": 12.359990000000002
                },
                {
                  "lat": 51.270990000000005,
                  "lon": 12.3602
                },
                {
                  "lat": 51.270990000000005,
                  "lon": 12.360230000000001
                },
                {
                  "lat": 51.270990000000005,
                  "lon": 12.360230000000001
                },
                {
                  "lat": 51.27096,
                  "lon": 12.361870000000001
                },
                {
                  "lat": 51.270950000000006,
                  "lon": 12.361970000000001
                },
                {
                  "lat": 51.27091,
                  "lon": 12.362060000000001
                },
                {
                  "lat": 51.270790000000005,
                  "lon": 12.362260000000001
                },
                {
                  "lat": 51.270720000000004,
                  "lon": 12.362380000000002
                },
                {
                  "lat": 51.27069,
                  "lon": 12.362480000000001
                },
                {
                  "lat": 51.27067,
                  "lon": 12.3626
                },
                {
                  "lat": 51.27065,
                  "lon": 12.363760000000001
                },
                {
                  "lat": 51.270630000000004,
                  "lon": 12.363880000000002
                },
                {
                  "lat": 51.270630000000004,
                  "lon": 12.363890000000001
                },
                {
                  "lat": 51.270630000000004,
                  "lon": 12.363890000000001
                },
                {
                  "lat": 51.270630000000004,
                  "lon": 12.364180000000001
                },
                {
                  "lat": 51.27062,
                  "lon": 12.364270000000001
                },
                {
                  "lat": 51.270590000000006,
                  "lon": 12.36434
                },
                {
                  "lat": 51.27056,
                  "lon": 12.364370000000001
                },
                {
                  "lat": 51.270540000000004,
                  "lon": 12.36443
                },
                {
                  "lat": 51.27053,
                  "lon": 12.364500000000001
                },
                {
                  "lat": 51.270540000000004,
                  "lon": 12.36458
                },
                {
                  "lat": 51.27056,
                  "lon": 12.364630000000002
                },
                {
                  "lat": 51.2706,
                  "lon": 12.36466
                },
                {
                  "lat": 51.27064000000001,
                  "lon": 12.36467
                },
                {
                  "lat": 51.270680000000006,
                  "lon": 12.36466
                },
                {
                  "lat": 51.270720000000004,
                  "lon": 12.364600000000001
                },
                {
                  "lat": 51.27074,
                  "lon": 12.36456
                },
                {
                  "lat": 51.27074,
                  "lon": 12.364500000000001
                },
                {
                  "lat": 51.27073000000001,
                  "lon": 12.364400000000002
                },
                {
                  "lat": 51.27071,
                  "lon": 12.364370000000001
                },
                {
                  "lat": 51.270680000000006,
                  "lon": 12.36434
                },
                {
                  "lat": 51.27067,
                  "lon": 12.363890000000001
                },
                {
                  "lat": 51.27065,
                  "lon": 12.363760000000001
                },
                {
                  "lat": 51.27067,
                  "lon": 12.3626
                },
                {
                  "lat": 51.27069,
                  "lon": 12.362480000000001
                },
                {
                  "lat": 51.270720000000004,
                  "lon": 12.362380000000002
                },
                {
                  "lat": 51.270790000000005,
                  "lon": 12.362260000000001
                },
                {
                  "lat": 51.27091,
                  "lon": 12.362060000000001
                },
                {
                  "lat": 51.270950000000006,
                  "lon": 12.361970000000001
                },
                {
                  "lat": 51.27096,
                  "lon": 12.361870000000001
                },
                {
                  "lat": 51.270990000000005,
                  "lon": 12.3602
                },
                {
                  "lat": 51.27103,
                  "lon": 12.359990000000002
                },
                {
                  "lat": 51.271080000000005,
                  "lon": 12.358020000000002
                },
                {
                  "lat": 51.27105,
                  "lon": 12.357850000000001
                },
                {
                  "lat": 51.27096,
                  "lon": 12.357650000000001
                },
                {
                  "lat": 51.270610000000005,
                  "lon": 12.357030000000002
                },
                {
                  "lat": 51.270590000000006,
                  "lon": 12.356890000000002
                },
                {
                  "lat": 51.270700000000005,
                  "lon": 12.35565
                },
                {
                  "lat": 51.270700000000005,
                  "lon": 12.35565
                },
                {
                  "lat": 51.270700000000005,
                  "lon": 12.355620000000002
                },
                {
                  "lat": 51.27074,
                  "lon": 12.355
                },
                {
                  "lat": 51.270990000000005,
                  "lon": 12.35391
                },
                {
                  "lat": 51.27026000000001,
                  "lon": 12.3534
                },
                {
                  "lat": 51.269560000000006,
                  "lon": 12.352920000000001
                },
                {
                  "lat": 51.26887000000001,
                  "lon": 12.35247
                },
                {
                  "lat": 51.268280000000004,
                  "lon": 12.35204
                },
                {
                  "lat": 51.268150000000006,
                  "lon": 12.35195
                },
                {
                  "lat": 51.268100000000004,
                  "lon": 12.35186
                },
                {
                  "lat": 51.267950000000006,
                  "lon": 12.35176
                },
                {
                  "lat": 51.267880000000005,
                  "lon": 12.351750000000001
                },
                {
                  "lat": 51.26782000000001,
                  "lon": 12.35171
                },
                {
                  "lat": 51.26771,
                  "lon": 12.351680000000002
                },
                {
                  "lat": 51.2676,
                  "lon": 12.35166
                },
                {
                  "lat": 51.26737000000001,
                  "lon": 12.35167
                },
                {
                  "lat": 51.26709,
                  "lon": 12.35172
                },
                {
                  "lat": 51.26662,
                  "lon": 12.351840000000001
                }
              ],
              "length": 357
            },
            "steps": [],
            "routeShortName": "106",
            "routeLongName": "Bus 106",
            "wheelchairAccessible": 0,
            "duration": 2280,
            "alerts": [
              {
                "alertUrl": "",
                "effectiveStartDate": 1740671520000,
                "alertHeaderText": "",
                "alertDescriptionText": "Der Anschluss kann voraussichtlich nicht erreicht werden",
                "alertCategory": 6
              }
            ],
            "departureDelayedTime": 1740671520000,
            "arrivalDelayedTime": 1740673800000,
            "departureDelayedTimeHHMM": "16:52",
            "arrivalDelayedTimeHHMM": "17:30",
            "startTimeHHMM": "16:52",
            "endTimeHHMM": "17:30",
            "cancelled": false,
            "wheelchairBoardingVehicle": null
          },
          {
            "startTime": 1740673800000,
            "endTime": 1740674400000,
            "departureDelay": 0,
            "arrivalDelay": 0,
            "realTime": false,
            "distance": 683,
            "mode": "WALK",
            "transitLeg": false,
            "route": "",
            "from": {
              "name": "Zöbigker (Markkleeberg), Schmiede",
              "stopId": "0012987",
              "lon": 12.351914,
              "lat": 51.26663,
              "arrival": 1740673800000,
              "departure": 1740673800000,
              "zoneId": "151",
              "wheelchairBoarding": 0,
              "departureDelayedTime": 1740673800000,
              "arrivalDelayedTime": 1740673800000,
              "departureDelayedTimeHHMM": "17:30",
              "arrivalDelayedTimeHHMM": "17:30",
              "arrivalHHMM": "17:30",
              "departureHHMM": "17:30",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false
            },
            "to": {
              "name": "Destination",
              "lon": 12.3451347,
              "lat": 51.2655979,
              "arrival": 1740674400000,
              "departureDelayedTime": 1740674400000,
              "arrivalDelayedTime": 1740674400000,
              "arrivalDelayedTimeHHMM": "17:40",
              "arrivalHHMM": "17:40",
              "departureHHMM": "17:40",
              "arrivalDelay": 0,
              "departureDelay": 0,
              "cancelled": false
            },
            "legGeometry": {
              "points": [
                {
                  "lat": 51.266630000000006,
                  "lon": 12.35191
                },
                {
                  "lat": 51.26662,
                  "lon": 12.35185
                },
                {
                  "lat": 51.26644,
                  "lon": 12.351890000000001
                },
                {
                  "lat": 51.26635,
                  "lon": 12.3519
                },
                {
                  "lat": 51.266270000000006,
                  "lon": 12.351890000000001
                },
                {
                  "lat": 51.26621,
                  "lon": 12.351870000000002
                },
                {
                  "lat": 51.2661,
                  "lon": 12.35181
                },
                {
                  "lat": 51.26599,
                  "lon": 12.351730000000002
                },
                {
                  "lat": 51.26579,
                  "lon": 12.35153
                },
                {
                  "lat": 51.265730000000005,
                  "lon": 12.35148
                },
                {
                  "lat": 51.2657,
                  "lon": 12.351450000000002
                },
                {
                  "lat": 51.26559,
                  "lon": 12.351350000000002
                },
                {
                  "lat": 51.265440000000005,
                  "lon": 12.351230000000001
                },
                {
                  "lat": 51.2653,
                  "lon": 12.351140000000001
                },
                {
                  "lat": 51.265150000000006,
                  "lon": 12.35105
                },
                {
                  "lat": 51.26484000000001,
                  "lon": 12.350900000000001
                },
                {
                  "lat": 51.26483,
                  "lon": 12.350700000000002
                },
                {
                  "lat": 51.26483,
                  "lon": 12.350510000000002
                },
                {
                  "lat": 51.264900000000004,
                  "lon": 12.3495
                },
                {
                  "lat": 51.264900000000004,
                  "lon": 12.349390000000001
                },
                {
                  "lat": 51.264900000000004,
                  "lon": 12.34894
                },
                {
                  "lat": 51.264900000000004,
                  "lon": 12.348170000000001
                },
                {
                  "lat": 51.26500000000001,
                  "lon": 12.34693
                },
                {
                  "lat": 51.26500000000001,
                  "lon": 12.346910000000001
                },
                {
                  "lat": 51.265010000000004,
                  "lon": 12.346860000000001
                },
                {
                  "lat": 51.265010000000004,
                  "lon": 12.346770000000001
                },
                {
                  "lat": 51.26505,
                  "lon": 12.346380000000002
                },
                {
                  "lat": 51.26507,
                  "lon": 12.34622
                },
                {
                  "lat": 51.26512,
                  "lon": 12.345690000000001
                },
                {
                  "lat": 51.26516,
                  "lon": 12.345250000000002
                },
                {
                  "lat": 51.265150000000006,
                  "lon": 12.345180000000001
                },
                {
                  "lat": 51.265170000000005,
                  "lon": 12.34514
                },
                {
                  "lat": 51.265370000000004,
                  "lon": 12.344890000000001
                },
                {
                  "lat": 51.265420000000006,
                  "lon": 12.344840000000001
                },
                {
                  "lat": 51.26547000000001,
                  "lon": 12.344800000000001
                },
                {
                  "lat": 51.26552,
                  "lon": 12.344780000000002
                },
                {
                  "lat": 51.26559,
                  "lon": 12.344790000000001
                },
                {
                  "lat": 51.265640000000005,
                  "lon": 12.344800000000001
                },
                {
                  "lat": 51.26568,
                  "lon": 12.344830000000002
                }
              ],
              "length": 39
            },
            "steps": [
              {
                "distance": 214,
                "relativeDirection": "DEPART",
                "streetName": "Koburger Straße",
                "absoluteDirection": "SOUTH",
                "lon": 12.3518514,
                "lat": 51.2666239
              },
              {
                "distance": 283,
                "relativeDirection": "RIGHT",
                "streetName": "Cospudener Straße",
                "absoluteDirection": "WEST",
                "lon": 12.3509008,
                "lat": 51.2648417
              },
              {
                "distance": 119,
                "relativeDirection": "CONTINUE",
                "streetName": "path",
                "absoluteDirection": "WEST",
                "lon": 12.3468632,
                "lat": 51.2650104
              },
              {
                "distance": 69,
                "relativeDirection": "RIGHT",
                "streetName": "Ostuferweg",
                "absoluteDirection": "NORTHWEST",
                "lon": 12.345181,
                "lat": 51.265154
              }
            ],
            "rentedBike": false,
            "duration": 600,
            "alerts": [],
            "departureDelayedTime": 1740673800000,
            "arrivalDelayedTime": 1740674400000,
            "departureDelayedTimeHHMM": "17:30",
            "arrivalDelayedTimeHHMM": "17:40",
            "startTimeHHMM": "17:30",
            "endTimeHHMM": "17:40",
            "cancelled": false
          }
        ],
        "otpVersion": "2.1",
        "startTimeHHMM": "16:29",
        "endTimeHHMM": "17:39",
        "durationHHMM": "01:11",
        "zoneInfo": {
          "zones": [
            "110",
            "151"
          ],
          "orderedZones": [
            "110",
            "151"
          ],
          "shortDistanceTicket": false
        },
        "alerts": [
          {
            "alertUrl": "",
            "effectiveStartDate": 1740671520000,
            "alertHeaderText": "",
            "alertDescriptionText": "Anschlussgefahr wegen Verspätungen",
            "alertCategory": 6
          }
        ],
        "index": 2
      }
    ]
  }
}