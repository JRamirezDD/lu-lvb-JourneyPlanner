export const mockOtpResponse = {
    "RetStatus": {
      "Value": "OK",
      "Comments": ""
    },
    "requestParameters": {
      "From": "51.33394,12.37490",
      "To": "51.37435,12.48922",
      "Travelmode": "TRANSIT",
      "date": "02-20-2025",
      "time": "15:12",
      "numItineraries": 5,
      "arriveBy": false,
      "accessibility": false,
      "shortWalk": false,
      "lessTransfers": false,
      "maxWalkDistance": 5000,
      "mockup": false,
      "transitOnly": false
    },
    "plan": {
      "date": 1740064321000,
      "from": {
        "name": "Origin",
        "lon": 12.3749,
        "lat": 51.33394
      },
      "to": {
        "name": "Destination",
        "lon": 12.48922,
        "lat": 51.37435
      },
      "itineraries": [
        {
          "duration": 2100,
          "startTime": 1740061140000,
          "endTime": 1740063240000,
          "walkTime": 960,
          "transitTime": 1140,
          "waitingTime": 0,
          "walkDistance": 997,
          "transfers": 0,
          "legs": [
            {
              "startTime": 1740061140000,
              "endTime": 1740061380000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 181,
              "mode": "WALK",
              "transitLeg": false,
              "route": "",
              "from": {
                "name": "Origin",
                "lon": 12.3749,
                "lat": 51.33394,
                "departure": 1740061140000,
                "departureDelayedTime": 1740061140000,
                "departureDelayedTimeHHMM": "15:19",
                "arrivalHHMM": "15:19",
                "departureHHMM": "15:19",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "to": {
                "name": "Leipzig, Wilhelm-Leuschner-Platz (S-Bahn)",
                "stopId": "8012202",
                "lon": 12.375394,
                "lat": 51.335396,
                "arrival": 1740061380000,
                "departure": 1740061380000,
                "zoneId": "110",
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740061380000,
                "arrivalDelayedTime": 1740061380000,
                "departureDelayedTimeHHMM": "15:23",
                "arrivalDelayedTimeHHMM": "15:23",
                "arrivalHHMM": "15:23",
                "departureHHMM": "15:23",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.333940000000005,
                    "lon": 12.37522
                  },
                  {
                    "lat": 51.334010000000006,
                    "lon": 12.37522
                  },
                  {
                    "lat": 51.33402,
                    "lon": 12.37522
                  },
                  {
                    "lat": 51.33413,
                    "lon": 12.375210000000001
                  },
                  {
                    "lat": 51.334160000000004,
                    "lon": 12.37536
                  },
                  {
                    "lat": 51.3342,
                    "lon": 12.37536
                  },
                  {
                    "lat": 51.334250000000004,
                    "lon": 12.37537
                  },
                  {
                    "lat": 51.33431,
                    "lon": 12.37537
                  },
                  {
                    "lat": 51.334360000000004,
                    "lon": 12.37537
                  },
                  {
                    "lat": 51.334360000000004,
                    "lon": 12.37541
                  },
                  {
                    "lat": 51.334360000000004,
                    "lon": 12.37545
                  },
                  {
                    "lat": 51.334450000000004,
                    "lon": 12.37551
                  },
                  {
                    "lat": 51.33455000000001,
                    "lon": 12.37559
                  },
                  {
                    "lat": 51.33457000000001,
                    "lon": 12.375610000000002
                  },
                  {
                    "lat": 51.33467,
                    "lon": 12.37559
                  },
                  {
                    "lat": 51.334700000000005,
                    "lon": 12.375630000000001
                  },
                  {
                    "lat": 51.334860000000006,
                    "lon": 12.375560000000002
                  },
                  {
                    "lat": 51.33487,
                    "lon": 12.375560000000002
                  },
                  {
                    "lat": 51.33487,
                    "lon": 12.375580000000001
                  },
                  {
                    "lat": 51.334880000000005,
                    "lon": 12.37559
                  },
                  {
                    "lat": 51.335040000000006,
                    "lon": 12.375530000000001
                  },
                  {
                    "lat": 51.33514,
                    "lon": 12.3755
                  },
                  {
                    "lat": 51.33540000000001,
                    "lon": 12.375440000000001
                  },
                  {
                    "lat": 51.335390000000004,
                    "lon": 12.375390000000001
                  }
                ],
                "length": 24
              },
              "steps": [
                {
                  "distance": 22,
                  "relativeDirection": "DEPART",
                  "streetName": "path",
                  "absoluteDirection": "NORTH",
                  "lon": 12.3752261,
                  "lat": 51.3339461
                },
                {
                  "distance": 64,
                  "relativeDirection": "RIGHT",
                  "streetName": "path",
                  "absoluteDirection": "EAST",
                  "lon": 12.3752174,
                  "lat": 51.3341368
                },
                {
                  "distance": 17,
                  "relativeDirection": "LEFT",
                  "streetName": "path",
                  "absoluteDirection": "NORTH",
                  "lon": 12.3756108,
                  "lat": 51.3345729
                },
                {
                  "distance": 62,
                  "relativeDirection": "RIGHT",
                  "streetName": "Leipzig Wilhelm-Leuschner-Platz",
                  "absoluteDirection": "EAST",
                  "lon": 12.3755624,
                  "lat": 51.3348753
                }
              ],
              "rentedBike": false,
              "duration": 240,
              "alerts": [],
              "departureDelayedTime": 1740061140000,
              "arrivalDelayedTime": 1740061380000,
              "departureDelayedTimeHHMM": "15:19",
              "arrivalDelayedTimeHHMM": "15:23",
              "startTimeHHMM": "15:19",
              "endTimeHHMM": "15:23",
              "cancelled": false
            },
            {
              "startTime": 1740061380000,
              "endTime": 1740062520000,
              "departureDelay": 60,
              "arrivalDelay": 0,
              "realTime": true,
              "distance": 11298,
              "mode": "SUBURB",
              "transitLeg": true,
              "route": "S4",
              "agencyName": "800486",
              "agencyUrl": "https://www.mdv.de/partner/",
              "routeColor": "139640",
              "routeType": 109,
              "routeId": "800486S4",
              "headsign": "Torgau",
              "agencyId": "1:800486",
              "tripId": "2126",
              "serviceDate": "20250220",
              "from": {
                "name": "Leipzig, Wilhelm-Leuschner-Platz (S-Bahn)",
                "stopId": "8012202",
                "lon": 12.375394,
                "lat": 51.335396,
                "arrival": 1740061380000,
                "departure": 1740061380000,
                "zoneId": "110",
                "stopSequence": 8,
                "wheelchairBoarding": 1,
                "track": "2",
                "scheduledTrack": null,
                "departureDelayedTime": 1740061440000,
                "arrivalDelayedTime": 1740061380000,
                "departureDelayedTimeHHMM": "15:24",
                "arrivalDelayedTimeHHMM": "15:23",
                "arrivalHHMM": "15:23",
                "departureHHMM": "15:23",
                "arrivalDelay": 0,
                "departureDelay": 60,
                "cancelled": false
              },
              "to": {
                "name": "Taucha (Leipzig)",
                "stopId": "8013093",
                "lon": 12.484471,
                "lat": 51.379017,
                "arrival": 1740062520000,
                "departure": 1740062520000,
                "zoneId": "168",
                "stopSequence": 15,
                "wheelchairBoarding": 1,
                "track": "1",
                "scheduledTrack": null,
                "departureDelayedTime": 1740062520000,
                "arrivalDelayedTime": 1740062520000,
                "departureDelayedTimeHHMM": "15:42",
                "arrivalDelayedTimeHHMM": "15:42",
                "arrivalHHMM": "15:42",
                "departureHHMM": "15:42",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "intermediateStops": [
                {
                  "name": "Leipzig, Markt (S-Bahn)",
                  "stopId": "8012186",
                  "lon": 12.374612,
                  "lat": 51.34064,
                  "arrival": 1740061440000,
                  "departure": 1740061500000,
                  "zoneId": "110",
                  "stopSequence": 9,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740061560000,
                  "arrivalDelayedTime": 1740061500000,
                  "departureDelayedTimeHHMM": "15:26",
                  "arrivalDelayedTimeHHMM": "15:25",
                  "arrivalHHMM": "15:24",
                  "departureHHMM": "15:25",
                  "arrivalDelay": 60,
                  "departureDelay": 60,
                  "cancelled": false
                },
                {
                  "name": "Leipzig, Hbf (tief) (S-Bahn)",
                  "stopId": "8098205",
                  "lon": 12.380428,
                  "lat": 51.345696,
                  "arrival": 1740061560000,
                  "departure": 1740061680000,
                  "zoneId": "110",
                  "stopSequence": 10,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740061740000,
                  "arrivalDelayedTime": 1740061620000,
                  "departureDelayedTimeHHMM": "15:29",
                  "arrivalDelayedTimeHHMM": "15:27",
                  "arrivalHHMM": "15:26",
                  "departureHHMM": "15:28",
                  "arrivalDelay": 60,
                  "departureDelay": 60,
                  "cancelled": false
                },
                {
                  "name": "Leipzig, Nord (S-Bahn)",
                  "stopId": "8012196",
                  "lon": 12.40106,
                  "lat": 51.364162,
                  "arrival": 1740061860000,
                  "departure": 1740061860000,
                  "zoneId": "110",
                  "stopSequence": 11,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740061920000,
                  "arrivalDelayedTime": 1740061860000,
                  "departureDelayedTimeHHMM": "15:32",
                  "arrivalDelayedTimeHHMM": "15:31",
                  "arrivalHHMM": "15:31",
                  "departureHHMM": "15:31",
                  "arrivalDelay": 0,
                  "departureDelay": 60,
                  "cancelled": false
                },
                {
                  "name": "Leipzig, Mockauer Straße (S-Bahn)",
                  "stopId": "8012273",
                  "lon": 12.4121,
                  "lat": 51.3738,
                  "arrival": 1740062040000,
                  "departure": 1740062040000,
                  "zoneId": "110",
                  "stopSequence": 12,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740062100000,
                  "arrivalDelayedTime": 1740062040000,
                  "departureDelayedTimeHHMM": "15:35",
                  "arrivalDelayedTimeHHMM": "15:34",
                  "arrivalHHMM": "15:34",
                  "departureHHMM": "15:34",
                  "arrivalDelay": 0,
                  "departureDelay": 60,
                  "cancelled": false
                },
                {
                  "name": "Leipzig, Thekla (S-Bahn)",
                  "stopId": "8012195",
                  "lon": 12.430751,
                  "lat": 51.371626,
                  "arrival": 1740062160000,
                  "departure": 1740062160000,
                  "zoneId": "110",
                  "stopSequence": 13,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740062220000,
                  "arrivalDelayedTime": 1740062220000,
                  "departureDelayedTimeHHMM": "15:37",
                  "arrivalDelayedTimeHHMM": "15:37",
                  "arrivalHHMM": "15:36",
                  "departureHHMM": "15:36",
                  "arrivalDelay": 60,
                  "departureDelay": 60,
                  "cancelled": false
                },
                {
                  "name": "Leipzig, Heiterblick (S-Bahn)",
                  "stopId": "8012190",
                  "lon": 12.459979,
                  "lat": 51.369339,
                  "arrival": 1740062340000,
                  "departure": 1740062400000,
                  "zoneId": "110",
                  "stopSequence": 14,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740062400000,
                  "arrivalDelayedTime": 1740062400000,
                  "departureDelayedTimeHHMM": "15:40",
                  "arrivalDelayedTimeHHMM": "15:40",
                  "arrivalHHMM": "15:39",
                  "departureHHMM": "15:40",
                  "arrivalDelay": 60,
                  "departureDelay": 0,
                  "cancelled": false
                }
              ],
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.33540000000001,
                    "lon": 12.37546
                  },
                  {
                    "lat": 51.335440000000006,
                    "lon": 12.37545
                  },
                  {
                    "lat": 51.33637,
                    "lon": 12.375280000000002
                  },
                  {
                    "lat": 51.336830000000006,
                    "lon": 12.37517
                  },
                  {
                    "lat": 51.33695,
                    "lon": 12.37513
                  },
                  {
                    "lat": 51.337770000000006,
                    "lon": 12.37475
                  },
                  {
                    "lat": 51.338190000000004,
                    "lon": 12.37465
                  },
                  {
                    "lat": 51.33919,
                    "lon": 12.374600000000001
                  },
                  {
                    "lat": 51.339740000000006,
                    "lon": 12.374540000000001
                  },
                  {
                    "lat": 51.34033,
                    "lon": 12.374600000000001
                  },
                  {
                    "lat": 51.340630000000004,
                    "lon": 12.374680000000001
                  },
                  {
                    "lat": 51.340630000000004,
                    "lon": 12.374680000000001
                  },
                  {
                    "lat": 51.34069,
                    "lon": 12.3747
                  },
                  {
                    "lat": 51.340880000000006,
                    "lon": 12.374780000000001
                  },
                  {
                    "lat": 51.341330000000006,
                    "lon": 12.375010000000001
                  },
                  {
                    "lat": 51.341640000000005,
                    "lon": 12.375240000000002
                  },
                  {
                    "lat": 51.34194,
                    "lon": 12.375490000000001
                  },
                  {
                    "lat": 51.3423,
                    "lon": 12.37588
                  },
                  {
                    "lat": 51.342580000000005,
                    "lon": 12.376220000000002
                  },
                  {
                    "lat": 51.342850000000006,
                    "lon": 12.37659
                  },
                  {
                    "lat": 51.34386000000001,
                    "lon": 12.378250000000001
                  },
                  {
                    "lat": 51.34416,
                    "lon": 12.3787
                  },
                  {
                    "lat": 51.34443,
                    "lon": 12.37911
                  },
                  {
                    "lat": 51.344750000000005,
                    "lon": 12.37953
                  },
                  {
                    "lat": 51.345400000000005,
                    "lon": 12.380180000000001
                  },
                  {
                    "lat": 51.345670000000005,
                    "lon": 12.38047
                  },
                  {
                    "lat": 51.345670000000005,
                    "lon": 12.38047
                  },
                  {
                    "lat": 51.345670000000005,
                    "lon": 12.38047
                  },
                  {
                    "lat": 51.346360000000004,
                    "lon": 12.381210000000001
                  },
                  {
                    "lat": 51.34713000000001,
                    "lon": 12.382040000000002
                  },
                  {
                    "lat": 51.350440000000006,
                    "lon": 12.386370000000001
                  },
                  {
                    "lat": 51.351710000000004,
                    "lon": 12.38807
                  },
                  {
                    "lat": 51.35183000000001,
                    "lon": 12.388230000000002
                  },
                  {
                    "lat": 51.352180000000004,
                    "lon": 12.38868
                  },
                  {
                    "lat": 51.352340000000005,
                    "lon": 12.38887
                  },
                  {
                    "lat": 51.35269,
                    "lon": 12.38926
                  },
                  {
                    "lat": 51.353060000000006,
                    "lon": 12.389660000000001
                  },
                  {
                    "lat": 51.35313000000001,
                    "lon": 12.38973
                  },
                  {
                    "lat": 51.35347,
                    "lon": 12.39009
                  },
                  {
                    "lat": 51.35421,
                    "lon": 12.390880000000001
                  },
                  {
                    "lat": 51.354580000000006,
                    "lon": 12.391280000000002
                  },
                  {
                    "lat": 51.355720000000005,
                    "lon": 12.392640000000002
                  },
                  {
                    "lat": 51.357490000000006,
                    "lon": 12.394770000000001
                  },
                  {
                    "lat": 51.357620000000004,
                    "lon": 12.39492
                  },
                  {
                    "lat": 51.35942000000001,
                    "lon": 12.39709
                  },
                  {
                    "lat": 51.360730000000004,
                    "lon": 12.39864
                  },
                  {
                    "lat": 51.360910000000004,
                    "lon": 12.398850000000001
                  },
                  {
                    "lat": 51.361290000000004,
                    "lon": 12.399220000000001
                  },
                  {
                    "lat": 51.36146,
                    "lon": 12.399370000000001
                  },
                  {
                    "lat": 51.361650000000004,
                    "lon": 12.399510000000001
                  },
                  {
                    "lat": 51.36245,
                    "lon": 12.400110000000002
                  },
                  {
                    "lat": 51.36301,
                    "lon": 12.40052
                  },
                  {
                    "lat": 51.363220000000005,
                    "lon": 12.40066
                  },
                  {
                    "lat": 51.363510000000005,
                    "lon": 12.40085
                  },
                  {
                    "lat": 51.363640000000004,
                    "lon": 12.400910000000001
                  },
                  {
                    "lat": 51.3639,
                    "lon": 12.40103
                  },
                  {
                    "lat": 51.36415,
                    "lon": 12.40112
                  },
                  {
                    "lat": 51.36415,
                    "lon": 12.40112
                  },
                  {
                    "lat": 51.36415,
                    "lon": 12.40112
                  },
                  {
                    "lat": 51.36444,
                    "lon": 12.40121
                  },
                  {
                    "lat": 51.36473,
                    "lon": 12.40126
                  },
                  {
                    "lat": 51.36496,
                    "lon": 12.401280000000002
                  },
                  {
                    "lat": 51.365280000000006,
                    "lon": 12.401290000000001
                  },
                  {
                    "lat": 51.36560000000001,
                    "lon": 12.40126
                  },
                  {
                    "lat": 51.36587,
                    "lon": 12.40122
                  },
                  {
                    "lat": 51.36614,
                    "lon": 12.401140000000002
                  },
                  {
                    "lat": 51.36634,
                    "lon": 12.40108
                  },
                  {
                    "lat": 51.36663,
                    "lon": 12.400950000000002
                  },
                  {
                    "lat": 51.36695,
                    "lon": 12.400810000000002
                  },
                  {
                    "lat": 51.368190000000006,
                    "lon": 12.40018
                  },
                  {
                    "lat": 51.36836,
                    "lon": 12.400100000000002
                  },
                  {
                    "lat": 51.36957,
                    "lon": 12.399560000000001
                  },
                  {
                    "lat": 51.36977,
                    "lon": 12.39948
                  },
                  {
                    "lat": 51.36994000000001,
                    "lon": 12.39943
                  },
                  {
                    "lat": 51.37022,
                    "lon": 12.399370000000001
                  },
                  {
                    "lat": 51.37033,
                    "lon": 12.399350000000002
                  },
                  {
                    "lat": 51.37057,
                    "lon": 12.39933
                  },
                  {
                    "lat": 51.370830000000005,
                    "lon": 12.39934
                  },
                  {
                    "lat": 51.371030000000005,
                    "lon": 12.39938
                  },
                  {
                    "lat": 51.371230000000004,
                    "lon": 12.39944
                  },
                  {
                    "lat": 51.371640000000006,
                    "lon": 12.399590000000002
                  },
                  {
                    "lat": 51.37182000000001,
                    "lon": 12.399680000000002
                  },
                  {
                    "lat": 51.372110000000006,
                    "lon": 12.399880000000001
                  },
                  {
                    "lat": 51.37223,
                    "lon": 12.399980000000001
                  },
                  {
                    "lat": 51.37239,
                    "lon": 12.400120000000001
                  },
                  {
                    "lat": 51.372550000000004,
                    "lon": 12.40027
                  },
                  {
                    "lat": 51.37272,
                    "lon": 12.40046
                  },
                  {
                    "lat": 51.372870000000006,
                    "lon": 12.40065
                  },
                  {
                    "lat": 51.37299,
                    "lon": 12.400820000000001
                  },
                  {
                    "lat": 51.3731,
                    "lon": 12.40098
                  },
                  {
                    "lat": 51.37323000000001,
                    "lon": 12.40121
                  },
                  {
                    "lat": 51.37339000000001,
                    "lon": 12.40154
                  },
                  {
                    "lat": 51.373490000000004,
                    "lon": 12.40177
                  },
                  {
                    "lat": 51.37359000000001,
                    "lon": 12.40201
                  },
                  {
                    "lat": 51.37369,
                    "lon": 12.4023
                  },
                  {
                    "lat": 51.37379000000001,
                    "lon": 12.40258
                  },
                  {
                    "lat": 51.373940000000005,
                    "lon": 12.403110000000002
                  },
                  {
                    "lat": 51.374050000000004,
                    "lon": 12.403590000000001
                  },
                  {
                    "lat": 51.37418,
                    "lon": 12.404230000000002
                  },
                  {
                    "lat": 51.37422,
                    "lon": 12.404570000000001
                  },
                  {
                    "lat": 51.37427,
                    "lon": 12.405030000000002
                  },
                  {
                    "lat": 51.374300000000005,
                    "lon": 12.405330000000001
                  },
                  {
                    "lat": 51.37431,
                    "lon": 12.405590000000002
                  },
                  {
                    "lat": 51.374320000000004,
                    "lon": 12.40591
                  },
                  {
                    "lat": 51.374320000000004,
                    "lon": 12.406220000000001
                  },
                  {
                    "lat": 51.374300000000005,
                    "lon": 12.4068
                  },
                  {
                    "lat": 51.37424000000001,
                    "lon": 12.407490000000001
                  },
                  {
                    "lat": 51.374210000000005,
                    "lon": 12.40788
                  },
                  {
                    "lat": 51.37382,
                    "lon": 12.4121
                  },
                  {
                    "lat": 51.37382,
                    "lon": 12.4121
                  },
                  {
                    "lat": 51.37373,
                    "lon": 12.413110000000001
                  },
                  {
                    "lat": 51.373630000000006,
                    "lon": 12.41416
                  },
                  {
                    "lat": 51.37323000000001,
                    "lon": 12.418500000000002
                  },
                  {
                    "lat": 51.37312000000001,
                    "lon": 12.41975
                  },
                  {
                    "lat": 51.37286,
                    "lon": 12.422630000000002
                  },
                  {
                    "lat": 51.37272,
                    "lon": 12.424050000000001
                  },
                  {
                    "lat": 51.37268,
                    "lon": 12.424700000000001
                  },
                  {
                    "lat": 51.372580000000006,
                    "lon": 12.42562
                  },
                  {
                    "lat": 51.372510000000005,
                    "lon": 12.42622
                  },
                  {
                    "lat": 51.37239,
                    "lon": 12.42706
                  },
                  {
                    "lat": 51.37228,
                    "lon": 12.427760000000001
                  },
                  {
                    "lat": 51.372080000000004,
                    "lon": 12.428790000000001
                  },
                  {
                    "lat": 51.371970000000005,
                    "lon": 12.429440000000001
                  },
                  {
                    "lat": 51.371750000000006,
                    "lon": 12.430470000000001
                  },
                  {
                    "lat": 51.37167,
                    "lon": 12.43078
                  },
                  {
                    "lat": 51.37167,
                    "lon": 12.43078
                  },
                  {
                    "lat": 51.37153000000001,
                    "lon": 12.43139
                  },
                  {
                    "lat": 51.37138,
                    "lon": 12.431970000000002
                  },
                  {
                    "lat": 51.370940000000004,
                    "lon": 12.433980000000002
                  },
                  {
                    "lat": 51.37051,
                    "lon": 12.43585
                  },
                  {
                    "lat": 51.370360000000005,
                    "lon": 12.436670000000001
                  },
                  {
                    "lat": 51.37028,
                    "lon": 12.43701
                  },
                  {
                    "lat": 51.37017,
                    "lon": 12.437410000000002
                  },
                  {
                    "lat": 51.370000000000005,
                    "lon": 12.43791
                  },
                  {
                    "lat": 51.36981,
                    "lon": 12.438410000000001
                  },
                  {
                    "lat": 51.36957,
                    "lon": 12.43903
                  },
                  {
                    "lat": 51.3693,
                    "lon": 12.439660000000002
                  },
                  {
                    "lat": 51.369080000000004,
                    "lon": 12.440140000000001
                  },
                  {
                    "lat": 51.36838,
                    "lon": 12.441640000000001
                  },
                  {
                    "lat": 51.368140000000004,
                    "lon": 12.442160000000001
                  },
                  {
                    "lat": 51.36787,
                    "lon": 12.442730000000001
                  },
                  {
                    "lat": 51.36697,
                    "lon": 12.44467
                  },
                  {
                    "lat": 51.36648,
                    "lon": 12.44574
                  },
                  {
                    "lat": 51.366290000000006,
                    "lon": 12.44621
                  },
                  {
                    "lat": 51.366170000000004,
                    "lon": 12.44658
                  },
                  {
                    "lat": 51.36605,
                    "lon": 12.446980000000002
                  },
                  {
                    "lat": 51.36598000000001,
                    "lon": 12.4473
                  },
                  {
                    "lat": 51.365880000000004,
                    "lon": 12.447980000000001
                  },
                  {
                    "lat": 51.365840000000006,
                    "lon": 12.448350000000001
                  },
                  {
                    "lat": 51.36582000000001,
                    "lon": 12.4487
                  },
                  {
                    "lat": 51.36581,
                    "lon": 12.449090000000002
                  },
                  {
                    "lat": 51.36583,
                    "lon": 12.449530000000001
                  },
                  {
                    "lat": 51.365840000000006,
                    "lon": 12.449660000000002
                  },
                  {
                    "lat": 51.36589000000001,
                    "lon": 12.45011
                  },
                  {
                    "lat": 51.36592,
                    "lon": 12.450380000000001
                  },
                  {
                    "lat": 51.365970000000004,
                    "lon": 12.450650000000001
                  },
                  {
                    "lat": 51.3661,
                    "lon": 12.451220000000001
                  },
                  {
                    "lat": 51.366170000000004,
                    "lon": 12.45147
                  },
                  {
                    "lat": 51.36634,
                    "lon": 12.452000000000002
                  },
                  {
                    "lat": 51.366580000000006,
                    "lon": 12.45264
                  },
                  {
                    "lat": 51.367450000000005,
                    "lon": 12.454910000000002
                  },
                  {
                    "lat": 51.36751,
                    "lon": 12.455060000000001
                  },
                  {
                    "lat": 51.36806000000001,
                    "lon": 12.45667
                  },
                  {
                    "lat": 51.36867,
                    "lon": 12.45832
                  },
                  {
                    "lat": 51.368950000000005,
                    "lon": 12.459040000000002
                  },
                  {
                    "lat": 51.36932,
                    "lon": 12.459980000000002
                  },
                  {
                    "lat": 51.36932,
                    "lon": 12.459990000000001
                  },
                  {
                    "lat": 51.36932,
                    "lon": 12.459990000000001
                  },
                  {
                    "lat": 51.37236000000001,
                    "lon": 12.4677
                  },
                  {
                    "lat": 51.37312000000001,
                    "lon": 12.46963
                  },
                  {
                    "lat": 51.37595,
                    "lon": 12.4768
                  },
                  {
                    "lat": 51.376090000000005,
                    "lon": 12.47714
                  },
                  {
                    "lat": 51.378980000000006,
                    "lon": 12.4845
                  }
                ],
                "length": 173
              },
              "steps": [],
              "routeShortName": "S4",
              "routeLongName": "S-Bahn S4",
              "wheelchairAccessible": 1,
              "duration": 1140,
              "alerts": [],
              "departureDelayedTime": 1740061440000,
              "arrivalDelayedTime": 1740062520000,
              "departureDelayedTimeHHMM": "15:24",
              "arrivalDelayedTimeHHMM": "15:42",
              "startTimeHHMM": "15:23",
              "endTimeHHMM": "15:42",
              "cancelled": false,
              "wheelchairBoardingVehicle": null
            },
            {
              "startTime": 1740062520000,
              "endTime": 1740063240000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 816,
              "mode": "WALK",
              "transitLeg": false,
              "route": "",
              "from": {
                "name": "Taucha (Leipzig)",
                "stopId": "8013093",
                "lon": 12.484471,
                "lat": 51.379017,
                "arrival": 1740062520000,
                "departure": 1740062520000,
                "zoneId": "168",
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740062520000,
                "arrivalDelayedTime": 1740062520000,
                "departureDelayedTimeHHMM": "15:42",
                "arrivalDelayedTimeHHMM": "15:42",
                "arrivalHHMM": "15:42",
                "departureHHMM": "15:42",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "to": {
                "name": "Destination",
                "lon": 12.48922,
                "lat": 51.37435,
                "arrival": 1740063240000,
                "departureDelayedTime": 1740063240000,
                "arrivalDelayedTime": 1740063240000,
                "arrivalDelayedTimeHHMM": "15:54",
                "arrivalHHMM": "15:54",
                "departureHHMM": "15:54",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.37901,
                    "lon": 12.484470000000002
                  },
                  {
                    "lat": 51.37903000000001,
                    "lon": 12.48445
                  },
                  {
                    "lat": 51.37924,
                    "lon": 12.484990000000002
                  },
                  {
                    "lat": 51.379250000000006,
                    "lon": 12.48498
                  },
                  {
                    "lat": 51.379340000000006,
                    "lon": 12.48521
                  },
                  {
                    "lat": 51.379360000000005,
                    "lon": 12.485190000000001
                  },
                  {
                    "lat": 51.37933,
                    "lon": 12.48512
                  },
                  {
                    "lat": 51.37921000000001,
                    "lon": 12.485230000000001
                  },
                  {
                    "lat": 51.37919,
                    "lon": 12.48526
                  },
                  {
                    "lat": 51.379180000000005,
                    "lon": 12.48529
                  },
                  {
                    "lat": 51.379160000000006,
                    "lon": 12.48545
                  },
                  {
                    "lat": 51.379160000000006,
                    "lon": 12.48558
                  },
                  {
                    "lat": 51.379160000000006,
                    "lon": 12.48573
                  },
                  {
                    "lat": 51.37912000000001,
                    "lon": 12.485790000000001
                  },
                  {
                    "lat": 51.37894000000001,
                    "lon": 12.485970000000002
                  },
                  {
                    "lat": 51.37903000000001,
                    "lon": 12.48619
                  },
                  {
                    "lat": 51.37897,
                    "lon": 12.48629
                  },
                  {
                    "lat": 51.378420000000006,
                    "lon": 12.4868
                  },
                  {
                    "lat": 51.378350000000005,
                    "lon": 12.48685
                  },
                  {
                    "lat": 51.378220000000006,
                    "lon": 12.486960000000002
                  },
                  {
                    "lat": 51.378080000000004,
                    "lon": 12.487100000000002
                  },
                  {
                    "lat": 51.37776,
                    "lon": 12.487400000000001
                  },
                  {
                    "lat": 51.37726000000001,
                    "lon": 12.487850000000002
                  },
                  {
                    "lat": 51.37722,
                    "lon": 12.48789
                  },
                  {
                    "lat": 51.37716,
                    "lon": 12.487940000000002
                  },
                  {
                    "lat": 51.377120000000005,
                    "lon": 12.48783
                  },
                  {
                    "lat": 51.37708000000001,
                    "lon": 12.48788
                  },
                  {
                    "lat": 51.377030000000005,
                    "lon": 12.48792
                  },
                  {
                    "lat": 51.376900000000006,
                    "lon": 12.488040000000002
                  },
                  {
                    "lat": 51.37624,
                    "lon": 12.488660000000001
                  },
                  {
                    "lat": 51.375620000000005,
                    "lon": 12.489230000000001
                  },
                  {
                    "lat": 51.375600000000006,
                    "lon": 12.489260000000002
                  },
                  {
                    "lat": 51.37559,
                    "lon": 12.489260000000002
                  },
                  {
                    "lat": 51.37541,
                    "lon": 12.48943
                  },
                  {
                    "lat": 51.37505,
                    "lon": 12.48845
                  },
                  {
                    "lat": 51.374930000000006,
                    "lon": 12.488560000000001
                  },
                  {
                    "lat": 51.37489000000001,
                    "lon": 12.48863
                  },
                  {
                    "lat": 51.37436,
                    "lon": 12.489120000000002
                  },
                  {
                    "lat": 51.374320000000004,
                    "lon": 12.489160000000002
                  }
                ],
                "length": 39
              },
              "steps": [
                {
                  "distance": 46,
                  "relativeDirection": "DEPART",
                  "streetName": "Taucha (Leipzig)",
                  "absoluteDirection": "NORTHEAST",
                  "lon": 12.4844547,
                  "lat": 51.3790332
                },
                {
                  "distance": 22,
                  "relativeDirection": "RIGHT",
                  "streetName": "path",
                  "absoluteDirection": "NORTHEAST",
                  "lon": 12.4849877,
                  "lat": 51.3792561
                },
                {
                  "distance": 58,
                  "relativeDirection": "HARD_LEFT",
                  "streetName": "underpass",
                  "absoluteDirection": "SOUTHWEST",
                  "lon": 12.4851939,
                  "lat": 51.3793657
                },
                {
                  "distance": 30,
                  "relativeDirection": "RIGHT",
                  "streetName": "Bahnhofstraße",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.4857308,
                  "lat": 51.3791677
                },
                {
                  "distance": 19,
                  "relativeDirection": "LEFT",
                  "streetName": "Weststraße",
                  "absoluteDirection": "NORTHEAST",
                  "lon": 12.4859759,
                  "lat": 51.3789482
                },
                {
                  "distance": 242,
                  "relativeDirection": "RIGHT",
                  "streetName": "Südstraße",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.4861973,
                  "lat": 51.3790364
                },
                {
                  "distance": 9,
                  "relativeDirection": "RIGHT",
                  "streetName": "Leipziger Straße",
                  "absoluteDirection": "SOUTHWEST",
                  "lon": 12.4879439,
                  "lat": 51.377163
                },
                {
                  "distance": 220,
                  "relativeDirection": "LEFT",
                  "streetName": "Karl-Marx-Straße",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.4878382,
                  "lat": 51.3771249
                },
                {
                  "distance": 79,
                  "relativeDirection": "RIGHT",
                  "streetName": "Friedrich-Engels-Straße",
                  "absoluteDirection": "SOUTHWEST",
                  "lon": 12.4894307,
                  "lat": 51.3754185
                },
                {
                  "distance": 95,
                  "relativeDirection": "LEFT",
                  "streetName": "path",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.4884558,
                  "lat": 51.3750563,
                  "alerts": []
                }
              ],
              "alerts": [],
              "rentedBike": false,
              "duration": 720,
              "departureDelayedTime": 1740062520000,
              "arrivalDelayedTime": 1740063240000,
              "departureDelayedTimeHHMM": "15:42",
              "arrivalDelayedTimeHHMM": "15:54",
              "startTimeHHMM": "15:42",
              "endTimeHHMM": "15:54",
              "cancelled": false
            }
          ],
          "otpVersion": "2.1",
          "startTimeHHMM": "15:19",
          "endTimeHHMM": "15:53",
          "durationHHMM": "00:35",
          "zoneInfo": {
            "zones": [
              "110",
              "168"
            ],
            "orderedZones": [
              "110",
              "168"
            ],
            "shortDistanceTicket": false
          },
          "index": 0
        },
        {
          "duration": 2640,
          "startTime": 1740062340000,
          "endTime": 1740064980000,
          "walkTime": 840,
          "transitTime": 1800,
          "waitingTime": 0,
          "walkDistance": 889,
          "transfers": 1,
          "legs": [
            {
              "startTime": 1740062340000,
              "endTime": 1740062580000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 181,
              "mode": "WALK",
              "transitLeg": false,
              "route": "",
              "from": {
                "name": "Origin",
                "lon": 12.3749,
                "lat": 51.33394,
                "departure": 1740062340000,
                "departureDelayedTime": 1740062340000,
                "departureDelayedTimeHHMM": "15:39",
                "arrivalHHMM": "15:39",
                "departureHHMM": "15:39",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "to": {
                "name": "Leipzig, Wilhelm-Leuschner-Platz (S-Bahn)",
                "stopId": "8012202",
                "lon": 12.375394,
                "lat": 51.335396,
                "arrival": 1740062580000,
                "departure": 1740062580000,
                "zoneId": "110",
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740062580000,
                "arrivalDelayedTime": 1740062580000,
                "departureDelayedTimeHHMM": "15:43",
                "arrivalDelayedTimeHHMM": "15:43",
                "arrivalHHMM": "15:43",
                "departureHHMM": "15:43",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.333940000000005,
                    "lon": 12.37522
                  },
                  {
                    "lat": 51.334010000000006,
                    "lon": 12.37522
                  },
                  {
                    "lat": 51.33402,
                    "lon": 12.37522
                  },
                  {
                    "lat": 51.33413,
                    "lon": 12.375210000000001
                  },
                  {
                    "lat": 51.334160000000004,
                    "lon": 12.37536
                  },
                  {
                    "lat": 51.3342,
                    "lon": 12.37536
                  },
                  {
                    "lat": 51.334250000000004,
                    "lon": 12.37537
                  },
                  {
                    "lat": 51.33431,
                    "lon": 12.37537
                  },
                  {
                    "lat": 51.334360000000004,
                    "lon": 12.37537
                  },
                  {
                    "lat": 51.334360000000004,
                    "lon": 12.37541
                  },
                  {
                    "lat": 51.334360000000004,
                    "lon": 12.37545
                  },
                  {
                    "lat": 51.334450000000004,
                    "lon": 12.37551
                  },
                  {
                    "lat": 51.33455000000001,
                    "lon": 12.37559
                  },
                  {
                    "lat": 51.33457000000001,
                    "lon": 12.375610000000002
                  },
                  {
                    "lat": 51.33467,
                    "lon": 12.37559
                  },
                  {
                    "lat": 51.334700000000005,
                    "lon": 12.375630000000001
                  },
                  {
                    "lat": 51.334860000000006,
                    "lon": 12.375560000000002
                  },
                  {
                    "lat": 51.33487,
                    "lon": 12.375560000000002
                  },
                  {
                    "lat": 51.33487,
                    "lon": 12.375580000000001
                  },
                  {
                    "lat": 51.334880000000005,
                    "lon": 12.37559
                  },
                  {
                    "lat": 51.335040000000006,
                    "lon": 12.375530000000001
                  },
                  {
                    "lat": 51.33514,
                    "lon": 12.3755
                  },
                  {
                    "lat": 51.33540000000001,
                    "lon": 12.375440000000001
                  },
                  {
                    "lat": 51.335390000000004,
                    "lon": 12.375390000000001
                  }
                ],
                "length": 24
              },
              "steps": [
                {
                  "distance": 22,
                  "relativeDirection": "DEPART",
                  "streetName": "path",
                  "absoluteDirection": "NORTH",
                  "lon": 12.3752261,
                  "lat": 51.3339461
                },
                {
                  "distance": 64,
                  "relativeDirection": "RIGHT",
                  "streetName": "path",
                  "absoluteDirection": "EAST",
                  "lon": 12.3752174,
                  "lat": 51.3341368
                },
                {
                  "distance": 17,
                  "relativeDirection": "LEFT",
                  "streetName": "path",
                  "absoluteDirection": "NORTH",
                  "lon": 12.3756108,
                  "lat": 51.3345729
                },
                {
                  "distance": 62,
                  "relativeDirection": "RIGHT",
                  "streetName": "Leipzig Wilhelm-Leuschner-Platz",
                  "absoluteDirection": "EAST",
                  "lon": 12.3755624,
                  "lat": 51.3348753
                }
              ],
              "rentedBike": false,
              "duration": 240,
              "alerts": [],
              "departureDelayedTime": 1740062340000,
              "arrivalDelayedTime": 1740062580000,
              "departureDelayedTimeHHMM": "15:39",
              "arrivalDelayedTimeHHMM": "15:43",
              "startTimeHHMM": "15:39",
              "endTimeHHMM": "15:43",
              "cancelled": false
            },
            {
              "startTime": 1740062580000,
              "endTime": 1740062760000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": true,
              "distance": 1288,
              "mode": "SUBURB",
              "transitLeg": true,
              "route": "S2",
              "agencyName": "8004A9",
              "agencyUrl": "https://www.mdv.de/partner/",
              "routeColor": "139640",
              "routeType": 109,
              "routeId": "8004A9S2",
              "headsign": "Dessau Hbf",
              "agencyId": "1:8004A9",
              "tripId": "3731",
              "serviceDate": "20250220",
              "from": {
                "name": "Leipzig, Wilhelm-Leuschner-Platz (S-Bahn)",
                "stopId": "8012202",
                "lon": 12.375394,
                "lat": 51.335396,
                "arrival": 1740062580000,
                "departure": 1740062580000,
                "zoneId": "110",
                "stopSequence": 5,
                "wheelchairBoarding": 1,
                "track": "2",
                "scheduledTrack": null,
                "departureDelayedTime": 1740062580000,
                "arrivalDelayedTime": 1740062520000,
                "departureDelayedTimeHHMM": "15:43",
                "arrivalDelayedTimeHHMM": "15:42",
                "arrivalHHMM": "15:43",
                "departureHHMM": "15:43",
                "arrivalDelay": -60,
                "departureDelay": 0,
                "cancelled": false
              },
              "to": {
                "name": "Leipzig, Hbf (tief) (S-Bahn)",
                "stopId": "8098205",
                "lon": 12.380428,
                "lat": 51.345696,
                "arrival": 1740062760000,
                "departure": 1740062760000,
                "zoneId": "110",
                "stopSequence": 7,
                "wheelchairBoarding": 1,
                "track": "2",
                "scheduledTrack": null,
                "departureDelayedTime": 1740062760000,
                "arrivalDelayedTime": 1740062760000,
                "departureDelayedTimeHHMM": "15:46",
                "arrivalDelayedTimeHHMM": "15:46",
                "arrivalHHMM": "15:46",
                "departureHHMM": "15:46",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "intermediateStops": [
                {
                  "name": "Leipzig, Markt (S-Bahn)",
                  "stopId": "8012186",
                  "lon": 12.374612,
                  "lat": 51.34064,
                  "arrival": 1740062640000,
                  "departure": 1740062700000,
                  "zoneId": "110",
                  "stopSequence": 6,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740062700000,
                  "arrivalDelayedTime": 1740062640000,
                  "departureDelayedTimeHHMM": "15:45",
                  "arrivalDelayedTimeHHMM": "15:44",
                  "arrivalHHMM": "15:44",
                  "departureHHMM": "15:45",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false
                }
              ],
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.33540000000001,
                    "lon": 12.37546
                  },
                  {
                    "lat": 51.335440000000006,
                    "lon": 12.37545
                  },
                  {
                    "lat": 51.33637,
                    "lon": 12.375280000000002
                  },
                  {
                    "lat": 51.336830000000006,
                    "lon": 12.37517
                  },
                  {
                    "lat": 51.33695,
                    "lon": 12.37513
                  },
                  {
                    "lat": 51.337770000000006,
                    "lon": 12.37475
                  },
                  {
                    "lat": 51.338190000000004,
                    "lon": 12.37465
                  },
                  {
                    "lat": 51.33919,
                    "lon": 12.374600000000001
                  },
                  {
                    "lat": 51.339740000000006,
                    "lon": 12.374540000000001
                  },
                  {
                    "lat": 51.34033,
                    "lon": 12.374600000000001
                  },
                  {
                    "lat": 51.340630000000004,
                    "lon": 12.374680000000001
                  },
                  {
                    "lat": 51.340630000000004,
                    "lon": 12.374680000000001
                  },
                  {
                    "lat": 51.34069,
                    "lon": 12.3747
                  },
                  {
                    "lat": 51.340880000000006,
                    "lon": 12.374780000000001
                  },
                  {
                    "lat": 51.341330000000006,
                    "lon": 12.375010000000001
                  },
                  {
                    "lat": 51.341640000000005,
                    "lon": 12.375240000000002
                  },
                  {
                    "lat": 51.34194,
                    "lon": 12.375490000000001
                  },
                  {
                    "lat": 51.3423,
                    "lon": 12.37588
                  },
                  {
                    "lat": 51.342580000000005,
                    "lon": 12.376220000000002
                  },
                  {
                    "lat": 51.342850000000006,
                    "lon": 12.37659
                  },
                  {
                    "lat": 51.34386000000001,
                    "lon": 12.378250000000001
                  },
                  {
                    "lat": 51.34416,
                    "lon": 12.3787
                  },
                  {
                    "lat": 51.34443,
                    "lon": 12.37911
                  },
                  {
                    "lat": 51.344750000000005,
                    "lon": 12.37953
                  },
                  {
                    "lat": 51.345400000000005,
                    "lon": 12.380180000000001
                  },
                  {
                    "lat": 51.345670000000005,
                    "lon": 12.38047
                  }
                ],
                "length": 26
              },
              "steps": [],
              "routeShortName": "S2",
              "routeLongName": "S-Bahn S2",
              "wheelchairAccessible": 1,
              "duration": 180,
              "alerts": [],
              "departureDelayedTime": 1740062580000,
              "arrivalDelayedTime": 1740062760000,
              "departureDelayedTimeHHMM": "15:43",
              "arrivalDelayedTimeHHMM": "15:46",
              "startTimeHHMM": "15:43",
              "endTimeHHMM": "15:46",
              "cancelled": false,
              "wheelchairBoardingVehicle": null
            },
            {
              "startTime": 1740062760000,
              "endTime": 1740063000000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 338,
              "mode": "WALK",
              "transitLeg": false,
              "route": "",
              "from": {
                "name": "Leipzig, Hbf (tief) (S-Bahn)",
                "stopId": "8098205",
                "lon": 12.380428,
                "lat": 51.345696,
                "arrival": 1740062760000,
                "departure": 1740062760000,
                "zoneId": "110",
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740062760000,
                "arrivalDelayedTime": 1740062760000,
                "departureDelayedTimeHHMM": "15:46",
                "arrivalDelayedTimeHHMM": "15:46",
                "arrivalHHMM": "15:46",
                "departureHHMM": "15:46",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "to": {
                "name": "Leipzig, Hauptbahnhof (Tram/Bus)",
                "stopId": "0013000",
                "lon": 12.380878,
                "lat": 51.343754,
                "arrival": 1740063000000,
                "departure": 1740063000000,
                "zoneId": "110",
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740063000000,
                "arrivalDelayedTime": 1740063000000,
                "departureDelayedTimeHHMM": "15:50",
                "arrivalDelayedTimeHHMM": "15:50",
                "arrivalHHMM": "15:50",
                "departureHHMM": "15:50",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false,
                "hafas_id": "1000102",
                "hafas_name": "Hauptbahnhof (Steig B)"
              },
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.345690000000005,
                    "lon": 12.38042
                  },
                  {
                    "lat": 51.345690000000005,
                    "lon": 12.38042
                  },
                  {
                    "lat": 51.34548,
                    "lon": 12.3802
                  },
                  {
                    "lat": 51.345490000000005,
                    "lon": 12.380180000000001
                  },
                  {
                    "lat": 51.3455,
                    "lon": 12.380160000000002
                  },
                  {
                    "lat": 51.34496000000001,
                    "lon": 12.37958
                  },
                  {
                    "lat": 51.344800000000006,
                    "lon": 12.3794
                  },
                  {
                    "lat": 51.344620000000006,
                    "lon": 12.37916
                  },
                  {
                    "lat": 51.34460000000001,
                    "lon": 12.3792
                  },
                  {
                    "lat": 51.344590000000004,
                    "lon": 12.37916
                  },
                  {
                    "lat": 51.34447,
                    "lon": 12.379010000000001
                  },
                  {
                    "lat": 51.34443,
                    "lon": 12.37902
                  },
                  {
                    "lat": 51.34434,
                    "lon": 12.3792
                  },
                  {
                    "lat": 51.344390000000004,
                    "lon": 12.37925
                  },
                  {
                    "lat": 51.344370000000005,
                    "lon": 12.379320000000002
                  },
                  {
                    "lat": 51.34431000000001,
                    "lon": 12.37944
                  },
                  {
                    "lat": 51.34431000000001,
                    "lon": 12.37945
                  },
                  {
                    "lat": 51.34429,
                    "lon": 12.379470000000001
                  },
                  {
                    "lat": 51.344280000000005,
                    "lon": 12.3795
                  },
                  {
                    "lat": 51.344260000000006,
                    "lon": 12.379550000000002
                  },
                  {
                    "lat": 51.343990000000005,
                    "lon": 12.3802
                  },
                  {
                    "lat": 51.344010000000004,
                    "lon": 12.380220000000001
                  },
                  {
                    "lat": 51.34375000000001,
                    "lon": 12.380880000000001
                  },
                  {
                    "lat": 51.34375000000001,
                    "lon": 12.380870000000002
                  }
                ],
                "length": 24
              },
              "steps": [
                {
                  "distance": 29,
                  "relativeDirection": "DEPART",
                  "streetName": "steps",
                  "absoluteDirection": "SOUTHWEST",
                  "lon": 12.3804278,
                  "lat": 51.3456961
                },
                {
                  "distance": 4,
                  "relativeDirection": "RIGHT",
                  "streetName": "path",
                  "absoluteDirection": "NORTHWEST",
                  "lon": 12.3802023,
                  "lat": 51.3454855
                },
                {
                  "distance": 121,
                  "relativeDirection": "LEFT",
                  "streetName": "Platform 1;2",
                  "absoluteDirection": "SOUTHWEST",
                  "lon": 12.380161,
                  "lat": 51.3455028
                },
                {
                  "distance": 7,
                  "relativeDirection": "LEFT",
                  "streetName": "underpass",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.3791611,
                  "lat": 51.344622
                },
                {
                  "distance": 42,
                  "relativeDirection": "LEFT",
                  "streetName": "underpass",
                  "absoluteDirection": "SOUTH",
                  "lon": 12.3790167,
                  "lat": 51.3444755
                },
                {
                  "distance": 54,
                  "relativeDirection": "CONTINUE",
                  "streetName": "Steig C",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.3795571,
                  "lat": 51.3442632
                },
                {
                  "distance": 3,
                  "relativeDirection": "LEFT",
                  "streetName": "path",
                  "absoluteDirection": "NORTHEAST",
                  "lon": 12.3802066,
                  "lat": 51.3439965
                },
                {
                  "distance": 54,
                  "relativeDirection": "RIGHT",
                  "streetName": "Steig B",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.3802296,
                  "lat": 51.344019
                }
              ],
              "rentedBike": false,
              "duration": 240,
              "alerts": [],
              "departureDelayedTime": 1740062760000,
              "arrivalDelayedTime": 1740063000000,
              "departureDelayedTimeHHMM": "15:46",
              "arrivalDelayedTimeHHMM": "15:50",
              "startTimeHHMM": "15:46",
              "endTimeHHMM": "15:50",
              "cancelled": false,
              "durationOriginal": 240
            },
            {
              "startTime": 1740063000000,
              "endTime": 1740064620000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": true,
              "distance": 8583,
              "mode": "TRAM",
              "transitLeg": true,
              "route": "3",
              "agencyName": "Leipziger Verkehrsbetriebe",
              "agencyUrl": "https://www.mdv.de/partner/",
              "routeColor": "61993B",
              "routeType": 0,
              "routeId": "LVTRAM3",
              "headsign": "Taucha",
              "agencyId": "1:00468",
              "tripId": "lvb01753STRB__20250219",
              "serviceDate": "20250220",
              "from": {
                "name": "Leipzig, Hauptbahnhof (Tram/Bus)",
                "stopId": "0013000",
                "lon": 12.380878,
                "lat": 51.343754,
                "arrival": 1740063000000,
                "departure": 1740063000000,
                "zoneId": "110",
                "stopSequence": 18,
                "wheelchairBoarding": 1,
                "track": "B",
                "scheduledTrack": null,
                "departureDelayedTime": 1740063000000,
                "arrivalDelayedTime": 1740063000000,
                "departureDelayedTimeHHMM": "15:50",
                "arrivalDelayedTimeHHMM": "15:50",
                "arrivalHHMM": "15:50",
                "departureHHMM": "15:50",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false,
                "hafas_id": "1000102",
                "hafas_name": "Hauptbahnhof (Steig B)"
              },
              "to": {
                "name": "Taucha (b. Leipzig), Freiligrathstr.",
                "stopId": "0011283",
                "lon": 12.486095,
                "lat": 51.376567,
                "arrival": 1740064620000,
                "departure": 1740064620000,
                "zoneId": "168",
                "stopSequence": 34,
                "wheelchairBoarding": 0,
                "track": null,
                "scheduledTrack": null,
                "departureDelayedTime": 1740064620000,
                "arrivalDelayedTime": 1740064620000,
                "departureDelayedTimeHHMM": "16:17",
                "arrivalDelayedTimeHHMM": "16:17",
                "arrivalHHMM": "16:17",
                "departureHHMM": "16:17",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false,
                "hafas_id": "1006202",
                "hafas_name": "Taucha, Freiligrathstraße"
              },
              "intermediateStops": [
                {
                  "name": "Leipzig, Hofmeisterstr.",
                  "stopId": "0012705",
                  "lon": 12.386214,
                  "lat": 51.343458,
                  "arrival": 1740063120000,
                  "departure": 1740063120000,
                  "zoneId": "110",
                  "stopSequence": 19,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740063120000,
                  "arrivalDelayedTime": 1740063120000,
                  "departureDelayedTimeHHMM": "15:52",
                  "arrivalDelayedTimeHHMM": "15:52",
                  "arrivalHHMM": "15:52",
                  "departureHHMM": "15:52",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1003002",
                  "hafas_name": "Hofmeisterstraße"
                },
                {
                  "name": "Leipzig, Friedrich-List-Platz",
                  "stopId": "0012706",
                  "lon": 12.3921,
                  "lat": 51.34529,
                  "arrival": 1740063240000,
                  "departure": 1740063240000,
                  "zoneId": "110",
                  "stopSequence": 20,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740063240000,
                  "arrivalDelayedTime": 1740063240000,
                  "departureDelayedTimeHHMM": "15:54",
                  "arrivalDelayedTimeHHMM": "15:54",
                  "arrivalHHMM": "15:54",
                  "departureHHMM": "15:54",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1003102",
                  "hafas_name": "Friedrich-List-Platz"
                },
                {
                  "name": "Leipzig, Einertstr.",
                  "stopId": "0012713",
                  "lon": 12.400027,
                  "lat": 51.345829,
                  "arrival": 1740063360000,
                  "departure": 1740063360000,
                  "zoneId": "110",
                  "stopSequence": 21,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740063360000,
                  "arrivalDelayedTime": 1740063360000,
                  "departureDelayedTimeHHMM": "15:56",
                  "arrivalDelayedTimeHHMM": "15:56",
                  "arrivalHHMM": "15:56",
                  "departureHHMM": "15:56",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1003202",
                  "hafas_name": "Einertstraße"
                },
                {
                  "name": "Leipzig, Hermann-Liebmann-/Eisenbahnstr.",
                  "stopId": "0012714",
                  "lon": 12.405435,
                  "lat": 51.345541,
                  "arrival": 1740063480000,
                  "departure": 1740063480000,
                  "zoneId": "110",
                  "stopSequence": 22,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740063480000,
                  "arrivalDelayedTime": 1740063480000,
                  "departureDelayedTimeHHMM": "15:58",
                  "arrivalDelayedTimeHHMM": "15:58",
                  "arrivalHHMM": "15:58",
                  "departureHHMM": "15:58",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1003302",
                  "hafas_name": "H.-Liebmann-/Eisenbahnstraße"
                },
                {
                  "name": "Leipzig, Torgauer Platz",
                  "stopId": "0012851",
                  "lon": 12.413498,
                  "lat": 51.345117,
                  "arrival": 1740063600000,
                  "departure": 1740063600000,
                  "zoneId": "110",
                  "stopSequence": 23,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740063600000,
                  "arrivalDelayedTime": 1740063600000,
                  "departureDelayedTimeHHMM": "16:00",
                  "arrivalDelayedTimeHHMM": "16:00",
                  "arrivalHHMM": "16:00",
                  "departureHHMM": "16:00",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1004902",
                  "hafas_name": "Torgauer Platz"
                },
                {
                  "name": "Leipzig, Volksgarten",
                  "stopId": "0011280",
                  "lon": 12.420303,
                  "lat": 51.348518,
                  "arrival": 1740063720000,
                  "departure": 1740063720000,
                  "zoneId": "110",
                  "stopSequence": 24,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740063720000,
                  "arrivalDelayedTime": 1740063720000,
                  "departureDelayedTimeHHMM": "16:02",
                  "arrivalDelayedTimeHHMM": "16:02",
                  "arrivalHHMM": "16:02",
                  "departureHHMM": "16:02",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1005102",
                  "hafas_name": "Volksgarten"
                },
                {
                  "name": "Leipzig, Permoser-/Torgauer Str.",
                  "stopId": "0012829",
                  "lon": 12.42593,
                  "lat": 51.351688,
                  "arrival": 1740063780000,
                  "departure": 1740063780000,
                  "zoneId": "110",
                  "stopSequence": 25,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740063780000,
                  "arrivalDelayedTime": 1740063780000,
                  "departureDelayedTimeHHMM": "16:03",
                  "arrivalDelayedTimeHHMM": "16:03",
                  "arrivalHHMM": "16:03",
                  "departureHHMM": "16:03",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1005202",
                  "hafas_name": "Permoser-/Torgauer Straße"
                },
                {
                  "name": "Leipzig, Schwantesstr.",
                  "stopId": "0000696",
                  "lon": 12.430876,
                  "lat": 51.354052,
                  "arrival": 1740063840000,
                  "departure": 1740063840000,
                  "zoneId": "110",
                  "stopSequence": 26,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740063840000,
                  "arrivalDelayedTime": 1740063840000,
                  "departureDelayedTimeHHMM": "16:04",
                  "arrivalDelayedTimeHHMM": "16:04",
                  "arrivalHHMM": "16:04",
                  "departureHHMM": "16:04",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1016402",
                  "hafas_name": "Schwantesstraße"
                },
                {
                  "name": "Leipzig, Bautzner Str.",
                  "stopId": "0011278",
                  "lon": 12.434308,
                  "lat": 51.355684,
                  "arrival": 1740063900000,
                  "departure": 1740063960000,
                  "zoneId": "110",
                  "stopSequence": 27,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740063960000,
                  "arrivalDelayedTime": 1740063900000,
                  "departureDelayedTimeHHMM": "16:06",
                  "arrivalDelayedTimeHHMM": "16:05",
                  "arrivalHHMM": "16:05",
                  "departureHHMM": "16:06",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1005302",
                  "hafas_name": "Bautzner Straße"
                },
                {
                  "name": "Leipzig, Hohentichelnstr.",
                  "stopId": "0013282",
                  "lon": 12.443192,
                  "lat": 51.35993,
                  "arrival": 1740064080000,
                  "departure": 1740064080000,
                  "zoneId": "110",
                  "stopSequence": 28,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740064080000,
                  "arrivalDelayedTime": 1740064080000,
                  "departureDelayedTimeHHMM": "16:08",
                  "arrivalDelayedTimeHHMM": "16:08",
                  "arrivalHHMM": "16:08",
                  "departureHHMM": "16:08",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1006602",
                  "hafas_name": "Hohentichelnstraße"
                },
                {
                  "name": "Leipzig, Arcus Park",
                  "stopId": "0000145",
                  "lon": 12.446856,
                  "lat": 51.361686,
                  "arrival": 1740064140000,
                  "departure": 1740064140000,
                  "zoneId": "110",
                  "stopSequence": 29,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740064140000,
                  "arrivalDelayedTime": 1740064140000,
                  "departureDelayedTimeHHMM": "16:09",
                  "arrivalDelayedTimeHHMM": "16:09",
                  "arrivalHHMM": "16:09",
                  "departureHHMM": "16:09",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1005502",
                  "hafas_name": "Arcus Park"
                },
                {
                  "name": "Leipzig, Heiterblick, Teslastr.",
                  "stopId": "0011276",
                  "lon": 12.452323,
                  "lat": 51.36429,
                  "arrival": 1740064200000,
                  "departure": 1740064200000,
                  "zoneId": "110",
                  "stopSequence": 30,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740064200000,
                  "arrivalDelayedTime": 1740064200000,
                  "departureDelayedTimeHHMM": "16:10",
                  "arrivalDelayedTimeHHMM": "16:10",
                  "arrivalHHMM": "16:10",
                  "departureHHMM": "16:10",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1005602",
                  "hafas_name": "Heiterblick, Teslastraße"
                },
                {
                  "name": "Leipzig, Portitzer Allee/S-Bahnhof Heiterblick",
                  "stopId": "0011277",
                  "lon": 12.460293,
                  "lat": 51.36727,
                  "arrival": 1740064320000,
                  "departure": 1740064320000,
                  "zoneId": "110",
                  "stopSequence": 31,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740064320000,
                  "arrivalDelayedTime": 1740064320000,
                  "departureDelayedTimeHHMM": "16:12",
                  "arrivalDelayedTimeHHMM": "16:12",
                  "arrivalHHMM": "16:12",
                  "departureHHMM": "16:12",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1005702",
                  "hafas_name": "Portitzer A., S-Bf.Heiterblick"
                },
                {
                  "name": "Taucha (b. Leipzig), Otto-Schmidt-Str.",
                  "stopId": "0011275",
                  "lon": 12.475442,
                  "lat": 51.372728,
                  "arrival": 1740064500000,
                  "departure": 1740064500000,
                  "zoneId": "168",
                  "stopSequence": 32,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740064500000,
                  "arrivalDelayedTime": 1740064500000,
                  "departureDelayedTimeHHMM": "16:15",
                  "arrivalDelayedTimeHHMM": "16:15",
                  "arrivalHHMM": "16:15",
                  "departureHHMM": "16:15",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1006002",
                  "hafas_name": "Taucha, O.-Schmidt-Str."
                },
                {
                  "name": "Taucha (b. Leipzig), Theodor-Körner-Str.",
                  "stopId": "0011282",
                  "lon": 12.481366,
                  "lat": 51.37487,
                  "arrival": 1740064560000,
                  "departure": 1740064560000,
                  "zoneId": "168",
                  "stopSequence": 33,
                  "wheelchairBoarding": 0,
                  "departureDelayedTime": 1740064560000,
                  "arrivalDelayedTime": 1740064560000,
                  "departureDelayedTimeHHMM": "16:16",
                  "arrivalDelayedTimeHHMM": "16:16",
                  "arrivalHHMM": "16:16",
                  "departureHHMM": "16:16",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1006102",
                  "hafas_name": "Taucha, Theodor-Körner-Str."
                }
              ],
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.34376,
                    "lon": 12.380880000000001
                  },
                  {
                    "lat": 51.34375000000001,
                    "lon": 12.3809
                  },
                  {
                    "lat": 51.34376,
                    "lon": 12.380910000000002
                  },
                  {
                    "lat": 51.34375000000001,
                    "lon": 12.3809
                  },
                  {
                    "lat": 51.34364000000001,
                    "lon": 12.381160000000001
                  },
                  {
                    "lat": 51.343540000000004,
                    "lon": 12.38141
                  },
                  {
                    "lat": 51.34346000000001,
                    "lon": 12.38161
                  },
                  {
                    "lat": 51.34344,
                    "lon": 12.381670000000002
                  },
                  {
                    "lat": 51.343410000000006,
                    "lon": 12.38184
                  },
                  {
                    "lat": 51.3434,
                    "lon": 12.38197
                  },
                  {
                    "lat": 51.34337000000001,
                    "lon": 12.38231
                  },
                  {
                    "lat": 51.343320000000006,
                    "lon": 12.38282
                  },
                  {
                    "lat": 51.34331,
                    "lon": 12.383030000000002
                  },
                  {
                    "lat": 51.343300000000006,
                    "lon": 12.38319
                  },
                  {
                    "lat": 51.343300000000006,
                    "lon": 12.38324
                  },
                  {
                    "lat": 51.343300000000006,
                    "lon": 12.38333
                  },
                  {
                    "lat": 51.343300000000006,
                    "lon": 12.383350000000002
                  },
                  {
                    "lat": 51.343300000000006,
                    "lon": 12.38344
                  },
                  {
                    "lat": 51.343300000000006,
                    "lon": 12.38348
                  },
                  {
                    "lat": 51.34333,
                    "lon": 12.38367
                  },
                  {
                    "lat": 51.34342,
                    "lon": 12.38452
                  },
                  {
                    "lat": 51.343430000000005,
                    "lon": 12.38466
                  },
                  {
                    "lat": 51.34349,
                    "lon": 12.384970000000001
                  },
                  {
                    "lat": 51.34351,
                    "lon": 12.38507
                  },
                  {
                    "lat": 51.34351,
                    "lon": 12.385150000000001
                  },
                  {
                    "lat": 51.343520000000005,
                    "lon": 12.38527
                  },
                  {
                    "lat": 51.343520000000005,
                    "lon": 12.385390000000001
                  },
                  {
                    "lat": 51.34351,
                    "lon": 12.38559
                  },
                  {
                    "lat": 51.34349,
                    "lon": 12.385840000000002
                  },
                  {
                    "lat": 51.34348000000001,
                    "lon": 12.385980000000002
                  },
                  {
                    "lat": 51.34346000000001,
                    "lon": 12.386220000000002
                  },
                  {
                    "lat": 51.34346000000001,
                    "lon": 12.386220000000002
                  },
                  {
                    "lat": 51.34346000000001,
                    "lon": 12.386220000000002
                  },
                  {
                    "lat": 51.34346000000001,
                    "lon": 12.386220000000002
                  },
                  {
                    "lat": 51.34346000000001,
                    "lon": 12.38624
                  },
                  {
                    "lat": 51.343450000000004,
                    "lon": 12.38635
                  },
                  {
                    "lat": 51.34346000000001,
                    "lon": 12.386450000000002
                  },
                  {
                    "lat": 51.34348000000001,
                    "lon": 12.386560000000001
                  },
                  {
                    "lat": 51.34353,
                    "lon": 12.386740000000001
                  },
                  {
                    "lat": 51.343770000000006,
                    "lon": 12.38746
                  },
                  {
                    "lat": 51.343810000000005,
                    "lon": 12.387580000000002
                  },
                  {
                    "lat": 51.34442000000001,
                    "lon": 12.38944
                  },
                  {
                    "lat": 51.34526,
                    "lon": 12.392000000000001
                  },
                  {
                    "lat": 51.345290000000006,
                    "lon": 12.392080000000002
                  },
                  {
                    "lat": 51.345290000000006,
                    "lon": 12.392090000000001
                  },
                  {
                    "lat": 51.345290000000006,
                    "lon": 12.392100000000001
                  },
                  {
                    "lat": 51.345290000000006,
                    "lon": 12.392100000000001
                  },
                  {
                    "lat": 51.345290000000006,
                    "lon": 12.392090000000001
                  },
                  {
                    "lat": 51.345330000000004,
                    "lon": 12.39221
                  },
                  {
                    "lat": 51.34535,
                    "lon": 12.392280000000001
                  },
                  {
                    "lat": 51.34537,
                    "lon": 12.392330000000001
                  },
                  {
                    "lat": 51.34539,
                    "lon": 12.392380000000001
                  },
                  {
                    "lat": 51.34541,
                    "lon": 12.39245
                  },
                  {
                    "lat": 51.345420000000004,
                    "lon": 12.392460000000002
                  },
                  {
                    "lat": 51.34546,
                    "lon": 12.392570000000001
                  },
                  {
                    "lat": 51.345510000000004,
                    "lon": 12.392700000000001
                  },
                  {
                    "lat": 51.345890000000004,
                    "lon": 12.39375
                  },
                  {
                    "lat": 51.34601000000001,
                    "lon": 12.394100000000002
                  },
                  {
                    "lat": 51.346090000000004,
                    "lon": 12.394350000000001
                  },
                  {
                    "lat": 51.34611,
                    "lon": 12.394470000000002
                  },
                  {
                    "lat": 51.34611,
                    "lon": 12.39461
                  },
                  {
                    "lat": 51.34611,
                    "lon": 12.3947
                  },
                  {
                    "lat": 51.34595,
                    "lon": 12.3977
                  },
                  {
                    "lat": 51.34586,
                    "lon": 12.39944
                  },
                  {
                    "lat": 51.345850000000006,
                    "lon": 12.39967
                  },
                  {
                    "lat": 51.34584,
                    "lon": 12.399830000000001
                  },
                  {
                    "lat": 51.34583000000001,
                    "lon": 12.400020000000001
                  },
                  {
                    "lat": 51.34583000000001,
                    "lon": 12.400020000000001
                  },
                  {
                    "lat": 51.34583000000001,
                    "lon": 12.400020000000001
                  },
                  {
                    "lat": 51.34583000000001,
                    "lon": 12.400020000000001
                  },
                  {
                    "lat": 51.34583000000001,
                    "lon": 12.400020000000001
                  },
                  {
                    "lat": 51.34582,
                    "lon": 12.400160000000001
                  },
                  {
                    "lat": 51.34573,
                    "lon": 12.40173
                  },
                  {
                    "lat": 51.34566,
                    "lon": 12.40314
                  },
                  {
                    "lat": 51.345580000000005,
                    "lon": 12.4046
                  },
                  {
                    "lat": 51.34554000000001,
                    "lon": 12.405330000000001
                  },
                  {
                    "lat": 51.345530000000004,
                    "lon": 12.4054
                  },
                  {
                    "lat": 51.345530000000004,
                    "lon": 12.40543
                  },
                  {
                    "lat": 51.34554000000001,
                    "lon": 12.40544
                  },
                  {
                    "lat": 51.34554000000001,
                    "lon": 12.40544
                  },
                  {
                    "lat": 51.345530000000004,
                    "lon": 12.40543
                  },
                  {
                    "lat": 51.34552000000001,
                    "lon": 12.405660000000001
                  },
                  {
                    "lat": 51.3455,
                    "lon": 12.405930000000001
                  },
                  {
                    "lat": 51.3455,
                    "lon": 12.406060000000002
                  },
                  {
                    "lat": 51.34543000000001,
                    "lon": 12.40732
                  },
                  {
                    "lat": 51.34532,
                    "lon": 12.40915
                  },
                  {
                    "lat": 51.345310000000005,
                    "lon": 12.409370000000001
                  },
                  {
                    "lat": 51.34523,
                    "lon": 12.41097
                  },
                  {
                    "lat": 51.34512,
                    "lon": 12.413390000000001
                  },
                  {
                    "lat": 51.345110000000005,
                    "lon": 12.413490000000001
                  },
                  {
                    "lat": 51.345110000000005,
                    "lon": 12.413490000000001
                  },
                  {
                    "lat": 51.345110000000005,
                    "lon": 12.4135
                  },
                  {
                    "lat": 51.34512,
                    "lon": 12.4135
                  },
                  {
                    "lat": 51.345110000000005,
                    "lon": 12.4135
                  },
                  {
                    "lat": 51.345090000000006,
                    "lon": 12.41397
                  },
                  {
                    "lat": 51.34508,
                    "lon": 12.41412
                  },
                  {
                    "lat": 51.34508,
                    "lon": 12.414140000000002
                  },
                  {
                    "lat": 51.34508,
                    "lon": 12.414250000000001
                  },
                  {
                    "lat": 51.34508,
                    "lon": 12.414320000000002
                  },
                  {
                    "lat": 51.345090000000006,
                    "lon": 12.41441
                  },
                  {
                    "lat": 51.34512,
                    "lon": 12.4145
                  },
                  {
                    "lat": 51.34514,
                    "lon": 12.414560000000002
                  },
                  {
                    "lat": 51.345240000000004,
                    "lon": 12.41472
                  },
                  {
                    "lat": 51.345380000000006,
                    "lon": 12.41496
                  },
                  {
                    "lat": 51.34597,
                    "lon": 12.41594
                  },
                  {
                    "lat": 51.34637000000001,
                    "lon": 12.416640000000001
                  },
                  {
                    "lat": 51.3464,
                    "lon": 12.416690000000001
                  },
                  {
                    "lat": 51.346500000000006,
                    "lon": 12.41685
                  },
                  {
                    "lat": 51.34655000000001,
                    "lon": 12.41693
                  },
                  {
                    "lat": 51.3466,
                    "lon": 12.41702
                  },
                  {
                    "lat": 51.34667,
                    "lon": 12.41713
                  },
                  {
                    "lat": 51.34707,
                    "lon": 12.417810000000001
                  },
                  {
                    "lat": 51.34731000000001,
                    "lon": 12.41821
                  },
                  {
                    "lat": 51.347680000000004,
                    "lon": 12.41882
                  },
                  {
                    "lat": 51.348020000000005,
                    "lon": 12.419390000000002
                  },
                  {
                    "lat": 51.34808,
                    "lon": 12.419490000000001
                  },
                  {
                    "lat": 51.348290000000006,
                    "lon": 12.419880000000001
                  },
                  {
                    "lat": 51.348530000000004,
                    "lon": 12.420280000000002
                  },
                  {
                    "lat": 51.34852000000001,
                    "lon": 12.420300000000001
                  },
                  {
                    "lat": 51.34852000000001,
                    "lon": 12.420300000000001
                  },
                  {
                    "lat": 51.34852000000001,
                    "lon": 12.42031
                  },
                  {
                    "lat": 51.348530000000004,
                    "lon": 12.420280000000002
                  },
                  {
                    "lat": 51.348710000000004,
                    "lon": 12.420570000000001
                  },
                  {
                    "lat": 51.34893,
                    "lon": 12.420940000000002
                  },
                  {
                    "lat": 51.34908,
                    "lon": 12.4212
                  },
                  {
                    "lat": 51.349270000000004,
                    "lon": 12.42153
                  },
                  {
                    "lat": 51.349720000000005,
                    "lon": 12.42228
                  },
                  {
                    "lat": 51.35031000000001,
                    "lon": 12.423280000000002
                  },
                  {
                    "lat": 51.3507,
                    "lon": 12.42387
                  },
                  {
                    "lat": 51.350840000000005,
                    "lon": 12.424080000000002
                  },
                  {
                    "lat": 51.35096000000001,
                    "lon": 12.42431
                  },
                  {
                    "lat": 51.351710000000004,
                    "lon": 12.425880000000001
                  },
                  {
                    "lat": 51.35168,
                    "lon": 12.425920000000001
                  },
                  {
                    "lat": 51.35168,
                    "lon": 12.425920000000001
                  },
                  {
                    "lat": 51.351710000000004,
                    "lon": 12.425880000000001
                  },
                  {
                    "lat": 51.35175,
                    "lon": 12.42595
                  },
                  {
                    "lat": 51.351780000000005,
                    "lon": 12.42604
                  },
                  {
                    "lat": 51.35184,
                    "lon": 12.426160000000001
                  },
                  {
                    "lat": 51.35192000000001,
                    "lon": 12.42631
                  },
                  {
                    "lat": 51.351940000000006,
                    "lon": 12.42636
                  },
                  {
                    "lat": 51.351980000000005,
                    "lon": 12.426440000000001
                  },
                  {
                    "lat": 51.35204,
                    "lon": 12.42656
                  },
                  {
                    "lat": 51.35230000000001,
                    "lon": 12.42712
                  },
                  {
                    "lat": 51.35372,
                    "lon": 12.430090000000002
                  },
                  {
                    "lat": 51.35380000000001,
                    "lon": 12.430280000000002
                  },
                  {
                    "lat": 51.35407000000001,
                    "lon": 12.430840000000002
                  },
                  {
                    "lat": 51.35405,
                    "lon": 12.43087
                  },
                  {
                    "lat": 51.35405,
                    "lon": 12.43087
                  },
                  {
                    "lat": 51.354040000000005,
                    "lon": 12.43087
                  },
                  {
                    "lat": 51.35407000000001,
                    "lon": 12.430840000000002
                  },
                  {
                    "lat": 51.354130000000005,
                    "lon": 12.430950000000001
                  },
                  {
                    "lat": 51.35517,
                    "lon": 12.43313
                  },
                  {
                    "lat": 51.35530000000001,
                    "lon": 12.43341
                  },
                  {
                    "lat": 51.355410000000006,
                    "lon": 12.433650000000002
                  },
                  {
                    "lat": 51.35546,
                    "lon": 12.433750000000002
                  },
                  {
                    "lat": 51.35571,
                    "lon": 12.434260000000002
                  },
                  {
                    "lat": 51.35568000000001,
                    "lon": 12.4343
                  },
                  {
                    "lat": 51.35568000000001,
                    "lon": 12.4343
                  },
                  {
                    "lat": 51.35568000000001,
                    "lon": 12.4343
                  },
                  {
                    "lat": 51.35571,
                    "lon": 12.434260000000002
                  },
                  {
                    "lat": 51.35573,
                    "lon": 12.434320000000001
                  },
                  {
                    "lat": 51.35925,
                    "lon": 12.441680000000002
                  },
                  {
                    "lat": 51.35961,
                    "lon": 12.442440000000001
                  },
                  {
                    "lat": 51.359840000000005,
                    "lon": 12.44293
                  },
                  {
                    "lat": 51.359950000000005,
                    "lon": 12.44316
                  },
                  {
                    "lat": 51.359930000000006,
                    "lon": 12.443190000000001
                  },
                  {
                    "lat": 51.359930000000006,
                    "lon": 12.443190000000001
                  },
                  {
                    "lat": 51.359950000000005,
                    "lon": 12.44316
                  },
                  {
                    "lat": 51.360020000000006,
                    "lon": 12.4433
                  },
                  {
                    "lat": 51.36012,
                    "lon": 12.443520000000001
                  },
                  {
                    "lat": 51.36019,
                    "lon": 12.443670000000001
                  },
                  {
                    "lat": 51.360290000000006,
                    "lon": 12.44387
                  },
                  {
                    "lat": 51.36124,
                    "lon": 12.445870000000001
                  },
                  {
                    "lat": 51.36133,
                    "lon": 12.446050000000001
                  },
                  {
                    "lat": 51.36142,
                    "lon": 12.446240000000001
                  },
                  {
                    "lat": 51.361470000000004,
                    "lon": 12.44635
                  },
                  {
                    "lat": 51.361700000000006,
                    "lon": 12.44682
                  },
                  {
                    "lat": 51.36168000000001,
                    "lon": 12.446850000000001
                  },
                  {
                    "lat": 51.36168000000001,
                    "lon": 12.446850000000001
                  },
                  {
                    "lat": 51.36168000000001,
                    "lon": 12.446850000000001
                  },
                  {
                    "lat": 51.361700000000006,
                    "lon": 12.44682
                  },
                  {
                    "lat": 51.363780000000006,
                    "lon": 12.45119
                  },
                  {
                    "lat": 51.3639,
                    "lon": 12.451450000000001
                  },
                  {
                    "lat": 51.36408,
                    "lon": 12.451810000000002
                  },
                  {
                    "lat": 51.36431,
                    "lon": 12.452290000000001
                  },
                  {
                    "lat": 51.36428,
                    "lon": 12.45232
                  },
                  {
                    "lat": 51.364290000000004,
                    "lon": 12.45232
                  },
                  {
                    "lat": 51.364290000000004,
                    "lon": 12.45232
                  },
                  {
                    "lat": 51.367270000000005,
                    "lon": 12.46029
                  },
                  {
                    "lat": 51.367270000000005,
                    "lon": 12.46029
                  },
                  {
                    "lat": 51.36726,
                    "lon": 12.460280000000001
                  },
                  {
                    "lat": 51.36726,
                    "lon": 12.460280000000001
                  },
                  {
                    "lat": 51.367290000000004,
                    "lon": 12.460360000000001
                  },
                  {
                    "lat": 51.36732000000001,
                    "lon": 12.460450000000002
                  },
                  {
                    "lat": 51.36732000000001,
                    "lon": 12.460460000000001
                  },
                  {
                    "lat": 51.367380000000004,
                    "lon": 12.46062
                  },
                  {
                    "lat": 51.36741000000001,
                    "lon": 12.460700000000001
                  },
                  {
                    "lat": 51.36746,
                    "lon": 12.46085
                  },
                  {
                    "lat": 51.36750000000001,
                    "lon": 12.46094
                  },
                  {
                    "lat": 51.36757000000001,
                    "lon": 12.46114
                  },
                  {
                    "lat": 51.367580000000004,
                    "lon": 12.461160000000001
                  },
                  {
                    "lat": 51.36766,
                    "lon": 12.461400000000001
                  },
                  {
                    "lat": 51.36851000000001,
                    "lon": 12.463780000000002
                  },
                  {
                    "lat": 51.369150000000005,
                    "lon": 12.46549
                  },
                  {
                    "lat": 51.369400000000006,
                    "lon": 12.4662
                  },
                  {
                    "lat": 51.36985000000001,
                    "lon": 12.46743
                  },
                  {
                    "lat": 51.36994000000001,
                    "lon": 12.467680000000001
                  },
                  {
                    "lat": 51.370110000000004,
                    "lon": 12.46817
                  },
                  {
                    "lat": 51.370490000000004,
                    "lon": 12.469220000000002
                  },
                  {
                    "lat": 51.37050000000001,
                    "lon": 12.46925
                  },
                  {
                    "lat": 51.37107,
                    "lon": 12.4708
                  },
                  {
                    "lat": 51.37118,
                    "lon": 12.471110000000001
                  },
                  {
                    "lat": 51.37122,
                    "lon": 12.471240000000002
                  },
                  {
                    "lat": 51.37131,
                    "lon": 12.471490000000001
                  },
                  {
                    "lat": 51.372130000000006,
                    "lon": 12.473770000000002
                  },
                  {
                    "lat": 51.372310000000006,
                    "lon": 12.474290000000002
                  },
                  {
                    "lat": 51.372440000000005,
                    "lon": 12.474660000000002
                  },
                  {
                    "lat": 51.372710000000005,
                    "lon": 12.475430000000001
                  },
                  {
                    "lat": 51.37272,
                    "lon": 12.47544
                  },
                  {
                    "lat": 51.372730000000004,
                    "lon": 12.47544
                  },
                  {
                    "lat": 51.37272,
                    "lon": 12.47544
                  },
                  {
                    "lat": 51.37272,
                    "lon": 12.47544
                  },
                  {
                    "lat": 51.37272,
                    "lon": 12.47544
                  },
                  {
                    "lat": 51.37276000000001,
                    "lon": 12.475560000000002
                  },
                  {
                    "lat": 51.372820000000004,
                    "lon": 12.475740000000002
                  },
                  {
                    "lat": 51.372890000000005,
                    "lon": 12.47592
                  },
                  {
                    "lat": 51.372910000000005,
                    "lon": 12.47597
                  },
                  {
                    "lat": 51.373650000000005,
                    "lon": 12.47803
                  },
                  {
                    "lat": 51.37483,
                    "lon": 12.48127
                  },
                  {
                    "lat": 51.374860000000005,
                    "lon": 12.48136
                  },
                  {
                    "lat": 51.374860000000005,
                    "lon": 12.48136
                  },
                  {
                    "lat": 51.37487,
                    "lon": 12.481370000000002
                  },
                  {
                    "lat": 51.37487,
                    "lon": 12.481370000000002
                  },
                  {
                    "lat": 51.37487,
                    "lon": 12.481370000000002
                  },
                  {
                    "lat": 51.37489000000001,
                    "lon": 12.481430000000001
                  },
                  {
                    "lat": 51.37492,
                    "lon": 12.481510000000002
                  },
                  {
                    "lat": 51.37494,
                    "lon": 12.481580000000001
                  },
                  {
                    "lat": 51.37498,
                    "lon": 12.48168
                  },
                  {
                    "lat": 51.37507,
                    "lon": 12.48192
                  },
                  {
                    "lat": 51.37519,
                    "lon": 12.482270000000002
                  },
                  {
                    "lat": 51.37538000000001,
                    "lon": 12.482790000000001
                  },
                  {
                    "lat": 51.376050000000006,
                    "lon": 12.48465
                  },
                  {
                    "lat": 51.37623000000001,
                    "lon": 12.485170000000002
                  },
                  {
                    "lat": 51.37644,
                    "lon": 12.48576
                  },
                  {
                    "lat": 51.376560000000005,
                    "lon": 12.48609
                  },
                  {
                    "lat": 51.37657,
                    "lon": 12.48609
                  },
                  {
                    "lat": 51.376560000000005,
                    "lon": 12.48609
                  },
                  {
                    "lat": 51.376560000000005,
                    "lon": 12.48609
                  }
                ],
                "length": 248
              },
              "steps": [],
              "routeShortName": "3",
              "routeLongName": "Tram 3",
              "wheelchairAccessible": 1,
              "duration": 1620,
              "alerts": [],
              "departureDelayedTime": 1740063000000,
              "arrivalDelayedTime": 1740064620000,
              "departureDelayedTimeHHMM": "15:50",
              "arrivalDelayedTimeHHMM": "16:17",
              "startTimeHHMM": "15:50",
              "endTimeHHMM": "16:17",
              "cancelled": false,
              "wheelchairBoardingVehicle": null
            },
            {
              "startTime": 1740064620000,
              "endTime": 1740064980000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 370,
              "mode": "WALK",
              "transitLeg": false,
              "route": "",
              "from": {
                "name": "Taucha (b. Leipzig), Freiligrathstr.",
                "stopId": "0011283",
                "lon": 12.486095,
                "lat": 51.376567,
                "arrival": 1740064620000,
                "departure": 1740064620000,
                "zoneId": "168",
                "wheelchairBoarding": 0,
                "departureDelayedTime": 1740064620000,
                "arrivalDelayedTime": 1740064620000,
                "departureDelayedTimeHHMM": "16:17",
                "arrivalDelayedTimeHHMM": "16:17",
                "arrivalHHMM": "16:17",
                "departureHHMM": "16:17",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false,
                "hafas_id": "1006202",
                "hafas_name": "Taucha, Freiligrathstraße"
              },
              "to": {
                "name": "Destination",
                "lon": 12.48922,
                "lat": 51.37435,
                "arrival": 1740064980000,
                "departureDelayedTime": 1740064980000,
                "arrivalDelayedTime": 1740064980000,
                "arrivalDelayedTimeHHMM": "16:23",
                "arrivalHHMM": "16:23",
                "departureHHMM": "16:23",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.376560000000005,
                    "lon": 12.48609
                  },
                  {
                    "lat": 51.37651,
                    "lon": 12.48614
                  },
                  {
                    "lat": 51.37659000000001,
                    "lon": 12.48637
                  },
                  {
                    "lat": 51.37666,
                    "lon": 12.48657
                  },
                  {
                    "lat": 51.37662,
                    "lon": 12.48662
                  },
                  {
                    "lat": 51.376580000000004,
                    "lon": 12.48666
                  },
                  {
                    "lat": 51.376450000000006,
                    "lon": 12.486780000000001
                  },
                  {
                    "lat": 51.37588,
                    "lon": 12.48731
                  },
                  {
                    "lat": 51.37581,
                    "lon": 12.48737
                  },
                  {
                    "lat": 51.375780000000006,
                    "lon": 12.487400000000001
                  },
                  {
                    "lat": 51.375870000000006,
                    "lon": 12.487660000000002
                  },
                  {
                    "lat": 51.37538000000001,
                    "lon": 12.488130000000002
                  },
                  {
                    "lat": 51.37505,
                    "lon": 12.48845
                  },
                  {
                    "lat": 51.374930000000006,
                    "lon": 12.488560000000001
                  },
                  {
                    "lat": 51.37489000000001,
                    "lon": 12.48863
                  },
                  {
                    "lat": 51.37436,
                    "lon": 12.489120000000002
                  },
                  {
                    "lat": 51.374320000000004,
                    "lon": 12.489160000000002
                  }
                ],
                "length": 17
              },
              "steps": [
                {
                  "distance": 35,
                  "relativeDirection": "DEPART",
                  "streetName": "Leipziger Straße",
                  "absoluteDirection": "NORTHEAST",
                  "lon": 12.4861469,
                  "lat": 51.3765115
                },
                {
                  "distance": 115,
                  "relativeDirection": "RIGHT",
                  "streetName": "Ferdinand-Lassalle-Straße",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.4865794,
                  "lat": 51.376668
                },
                {
                  "distance": 222,
                  "relativeDirection": "LEFT",
                  "streetName": "path",
                  "absoluteDirection": "NORTHEAST",
                  "lon": 12.4874093,
                  "lat": 51.3757811,
                  "alerts": []
                }
              ],
              "alerts": [],
              "rentedBike": false,
              "duration": 360,
              "departureDelayedTime": 1740064620000,
              "arrivalDelayedTime": 1740064980000,
              "departureDelayedTimeHHMM": "16:17",
              "arrivalDelayedTimeHHMM": "16:23",
              "startTimeHHMM": "16:17",
              "endTimeHHMM": "16:23",
              "cancelled": false
            }
          ],
          "otpVersion": "2.1",
          "startTimeHHMM": "15:39",
          "endTimeHHMM": "16:22",
          "durationHHMM": "00:44",
          "zoneInfo": {
            "zones": [
              "110",
              "168"
            ],
            "orderedZones": [
              "110",
              "168"
            ],
            "shortDistanceTicket": false
          },
          "index": 1
        },
        {
          "duration": 2100,
          "startTime": 1740062940000,
          "endTime": 1740065040000,
          "walkTime": 960,
          "transitTime": 1140,
          "waitingTime": 0,
          "walkDistance": 997,
          "transfers": 0,
          "legs": [
            {
              "startTime": 1740062940000,
              "endTime": 1740063180000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 181,
              "mode": "WALK",
              "transitLeg": false,
              "route": "",
              "from": {
                "name": "Origin",
                "lon": 12.3749,
                "lat": 51.33394,
                "departure": 1740062940000,
                "departureDelayedTime": 1740062940000,
                "departureDelayedTimeHHMM": "15:49",
                "arrivalHHMM": "15:49",
                "departureHHMM": "15:49",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "to": {
                "name": "Leipzig, Wilhelm-Leuschner-Platz (S-Bahn)",
                "stopId": "8012202",
                "lon": 12.375394,
                "lat": 51.335396,
                "arrival": 1740063180000,
                "departure": 1740063180000,
                "zoneId": "110",
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740063180000,
                "arrivalDelayedTime": 1740063180000,
                "departureDelayedTimeHHMM": "15:53",
                "arrivalDelayedTimeHHMM": "15:53",
                "arrivalHHMM": "15:53",
                "departureHHMM": "15:53",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.333940000000005,
                    "lon": 12.37522
                  },
                  {
                    "lat": 51.334010000000006,
                    "lon": 12.37522
                  },
                  {
                    "lat": 51.33402,
                    "lon": 12.37522
                  },
                  {
                    "lat": 51.33413,
                    "lon": 12.375210000000001
                  },
                  {
                    "lat": 51.334160000000004,
                    "lon": 12.37536
                  },
                  {
                    "lat": 51.3342,
                    "lon": 12.37536
                  },
                  {
                    "lat": 51.334250000000004,
                    "lon": 12.37537
                  },
                  {
                    "lat": 51.33431,
                    "lon": 12.37537
                  },
                  {
                    "lat": 51.334360000000004,
                    "lon": 12.37537
                  },
                  {
                    "lat": 51.334360000000004,
                    "lon": 12.37541
                  },
                  {
                    "lat": 51.334360000000004,
                    "lon": 12.37545
                  },
                  {
                    "lat": 51.334450000000004,
                    "lon": 12.37551
                  },
                  {
                    "lat": 51.33455000000001,
                    "lon": 12.37559
                  },
                  {
                    "lat": 51.33457000000001,
                    "lon": 12.375610000000002
                  },
                  {
                    "lat": 51.33467,
                    "lon": 12.37559
                  },
                  {
                    "lat": 51.334700000000005,
                    "lon": 12.375630000000001
                  },
                  {
                    "lat": 51.334860000000006,
                    "lon": 12.375560000000002
                  },
                  {
                    "lat": 51.33487,
                    "lon": 12.375560000000002
                  },
                  {
                    "lat": 51.33487,
                    "lon": 12.375580000000001
                  },
                  {
                    "lat": 51.334880000000005,
                    "lon": 12.37559
                  },
                  {
                    "lat": 51.335040000000006,
                    "lon": 12.375530000000001
                  },
                  {
                    "lat": 51.33514,
                    "lon": 12.3755
                  },
                  {
                    "lat": 51.33540000000001,
                    "lon": 12.375440000000001
                  },
                  {
                    "lat": 51.335390000000004,
                    "lon": 12.375390000000001
                  }
                ],
                "length": 24
              },
              "steps": [
                {
                  "distance": 22,
                  "relativeDirection": "DEPART",
                  "streetName": "path",
                  "absoluteDirection": "NORTH",
                  "lon": 12.3752261,
                  "lat": 51.3339461
                },
                {
                  "distance": 64,
                  "relativeDirection": "RIGHT",
                  "streetName": "path",
                  "absoluteDirection": "EAST",
                  "lon": 12.3752174,
                  "lat": 51.3341368
                },
                {
                  "distance": 17,
                  "relativeDirection": "LEFT",
                  "streetName": "path",
                  "absoluteDirection": "NORTH",
                  "lon": 12.3756108,
                  "lat": 51.3345729
                },
                {
                  "distance": 62,
                  "relativeDirection": "RIGHT",
                  "streetName": "Leipzig Wilhelm-Leuschner-Platz",
                  "absoluteDirection": "EAST",
                  "lon": 12.3755624,
                  "lat": 51.3348753
                }
              ],
              "rentedBike": false,
              "duration": 240,
              "alerts": [],
              "departureDelayedTime": 1740062940000,
              "arrivalDelayedTime": 1740063180000,
              "departureDelayedTimeHHMM": "15:49",
              "arrivalDelayedTimeHHMM": "15:53",
              "startTimeHHMM": "15:49",
              "endTimeHHMM": "15:53",
              "cancelled": false
            },
            {
              "startTime": 1740063180000,
              "endTime": 1740064320000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": true,
              "distance": 11298,
              "mode": "SUBURB",
              "transitLeg": true,
              "route": "S4",
              "agencyName": "800486",
              "agencyUrl": "https://www.mdv.de/partner/",
              "routeColor": "139640",
              "routeType": 109,
              "routeId": "800486S4",
              "headsign": "Falkenberg (Elster)",
              "agencyId": "1:800486",
              "tripId": "2174",
              "serviceDate": "20250220",
              "from": {
                "name": "Leipzig, Wilhelm-Leuschner-Platz (S-Bahn)",
                "stopId": "8012202",
                "lon": 12.375394,
                "lat": 51.335396,
                "arrival": 1740063180000,
                "departure": 1740063180000,
                "zoneId": "110",
                "stopSequence": 8,
                "wheelchairBoarding": 1,
                "track": "2",
                "scheduledTrack": null,
                "departureDelayedTime": 1740063180000,
                "arrivalDelayedTime": 1740063180000,
                "departureDelayedTimeHHMM": "15:53",
                "arrivalDelayedTimeHHMM": "15:53",
                "arrivalHHMM": "15:53",
                "departureHHMM": "15:53",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "to": {
                "name": "Taucha (Leipzig)",
                "stopId": "8013093",
                "lon": 12.484471,
                "lat": 51.379017,
                "arrival": 1740064320000,
                "departure": 1740064320000,
                "zoneId": "168",
                "stopSequence": 15,
                "wheelchairBoarding": 1,
                "track": "1",
                "scheduledTrack": null,
                "departureDelayedTime": 1740064320000,
                "arrivalDelayedTime": 1740064320000,
                "departureDelayedTimeHHMM": "16:12",
                "arrivalDelayedTimeHHMM": "16:12",
                "arrivalHHMM": "16:12",
                "departureHHMM": "16:12",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "intermediateStops": [
                {
                  "name": "Leipzig, Markt (S-Bahn)",
                  "stopId": "8012186",
                  "lon": 12.374612,
                  "lat": 51.34064,
                  "arrival": 1740063240000,
                  "departure": 1740063300000,
                  "zoneId": "110",
                  "stopSequence": 9,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740063300000,
                  "arrivalDelayedTime": 1740063240000,
                  "departureDelayedTimeHHMM": "15:55",
                  "arrivalDelayedTimeHHMM": "15:54",
                  "arrivalHHMM": "15:54",
                  "departureHHMM": "15:55",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false
                },
                {
                  "name": "Leipzig, Hbf (tief) (S-Bahn)",
                  "stopId": "8098205",
                  "lon": 12.380428,
                  "lat": 51.345696,
                  "arrival": 1740063360000,
                  "departure": 1740063480000,
                  "zoneId": "110",
                  "stopSequence": 10,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740063540000,
                  "arrivalDelayedTime": 1740063360000,
                  "departureDelayedTimeHHMM": "15:59",
                  "arrivalDelayedTimeHHMM": "15:56",
                  "arrivalHHMM": "15:56",
                  "departureHHMM": "15:58",
                  "arrivalDelay": 0,
                  "departureDelay": 60,
                  "cancelled": false
                },
                {
                  "name": "Leipzig, Nord (S-Bahn)",
                  "stopId": "8012196",
                  "lon": 12.40106,
                  "lat": 51.364162,
                  "arrival": 1740063660000,
                  "departure": 1740063660000,
                  "zoneId": "110",
                  "stopSequence": 11,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740063720000,
                  "arrivalDelayedTime": 1740063660000,
                  "departureDelayedTimeHHMM": "16:02",
                  "arrivalDelayedTimeHHMM": "16:01",
                  "arrivalHHMM": "16:01",
                  "departureHHMM": "16:01",
                  "arrivalDelay": 0,
                  "departureDelay": 60,
                  "cancelled": false
                },
                {
                  "name": "Leipzig, Mockauer Straße (S-Bahn)",
                  "stopId": "8012273",
                  "lon": 12.4121,
                  "lat": 51.3738,
                  "arrival": 1740063840000,
                  "departure": 1740063840000,
                  "zoneId": "110",
                  "stopSequence": 12,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740063900000,
                  "arrivalDelayedTime": 1740063840000,
                  "departureDelayedTimeHHMM": "16:05",
                  "arrivalDelayedTimeHHMM": "16:04",
                  "arrivalHHMM": "16:04",
                  "departureHHMM": "16:04",
                  "arrivalDelay": 0,
                  "departureDelay": 60,
                  "cancelled": false
                },
                {
                  "name": "Leipzig, Thekla (S-Bahn)",
                  "stopId": "8012195",
                  "lon": 12.430751,
                  "lat": 51.371626,
                  "arrival": 1740063960000,
                  "departure": 1740063960000,
                  "zoneId": "110",
                  "stopSequence": 13,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740064020000,
                  "arrivalDelayedTime": 1740063960000,
                  "departureDelayedTimeHHMM": "16:07",
                  "arrivalDelayedTimeHHMM": "16:06",
                  "arrivalHHMM": "16:06",
                  "departureHHMM": "16:06",
                  "arrivalDelay": 0,
                  "departureDelay": 60,
                  "cancelled": false
                },
                {
                  "name": "Leipzig, Heiterblick (S-Bahn)",
                  "stopId": "8012190",
                  "lon": 12.459979,
                  "lat": 51.369339,
                  "arrival": 1740064140000,
                  "departure": 1740064200000,
                  "zoneId": "110",
                  "stopSequence": 14,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740064200000,
                  "arrivalDelayedTime": 1740064140000,
                  "departureDelayedTimeHHMM": "16:10",
                  "arrivalDelayedTimeHHMM": "16:09",
                  "arrivalHHMM": "16:09",
                  "departureHHMM": "16:10",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false
                }
              ],
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.33540000000001,
                    "lon": 12.37546
                  },
                  {
                    "lat": 51.335440000000006,
                    "lon": 12.37545
                  },
                  {
                    "lat": 51.33637,
                    "lon": 12.375280000000002
                  },
                  {
                    "lat": 51.336830000000006,
                    "lon": 12.37517
                  },
                  {
                    "lat": 51.33695,
                    "lon": 12.37513
                  },
                  {
                    "lat": 51.337770000000006,
                    "lon": 12.37475
                  },
                  {
                    "lat": 51.338190000000004,
                    "lon": 12.37465
                  },
                  {
                    "lat": 51.33919,
                    "lon": 12.374600000000001
                  },
                  {
                    "lat": 51.339740000000006,
                    "lon": 12.374540000000001
                  },
                  {
                    "lat": 51.34033,
                    "lon": 12.374600000000001
                  },
                  {
                    "lat": 51.340630000000004,
                    "lon": 12.374680000000001
                  },
                  {
                    "lat": 51.340630000000004,
                    "lon": 12.374680000000001
                  },
                  {
                    "lat": 51.34069,
                    "lon": 12.3747
                  },
                  {
                    "lat": 51.340880000000006,
                    "lon": 12.374780000000001
                  },
                  {
                    "lat": 51.341330000000006,
                    "lon": 12.375010000000001
                  },
                  {
                    "lat": 51.341640000000005,
                    "lon": 12.375240000000002
                  },
                  {
                    "lat": 51.34194,
                    "lon": 12.375490000000001
                  },
                  {
                    "lat": 51.3423,
                    "lon": 12.37588
                  },
                  {
                    "lat": 51.342580000000005,
                    "lon": 12.376220000000002
                  },
                  {
                    "lat": 51.342850000000006,
                    "lon": 12.37659
                  },
                  {
                    "lat": 51.34386000000001,
                    "lon": 12.378250000000001
                  },
                  {
                    "lat": 51.34416,
                    "lon": 12.3787
                  },
                  {
                    "lat": 51.34443,
                    "lon": 12.37911
                  },
                  {
                    "lat": 51.344750000000005,
                    "lon": 12.37953
                  },
                  {
                    "lat": 51.345400000000005,
                    "lon": 12.380180000000001
                  },
                  {
                    "lat": 51.345670000000005,
                    "lon": 12.38047
                  },
                  {
                    "lat": 51.345670000000005,
                    "lon": 12.38047
                  },
                  {
                    "lat": 51.345670000000005,
                    "lon": 12.38047
                  },
                  {
                    "lat": 51.346360000000004,
                    "lon": 12.381210000000001
                  },
                  {
                    "lat": 51.34713000000001,
                    "lon": 12.382040000000002
                  },
                  {
                    "lat": 51.350440000000006,
                    "lon": 12.386370000000001
                  },
                  {
                    "lat": 51.351710000000004,
                    "lon": 12.38807
                  },
                  {
                    "lat": 51.35183000000001,
                    "lon": 12.388230000000002
                  },
                  {
                    "lat": 51.352180000000004,
                    "lon": 12.38868
                  },
                  {
                    "lat": 51.352340000000005,
                    "lon": 12.38887
                  },
                  {
                    "lat": 51.35269,
                    "lon": 12.38926
                  },
                  {
                    "lat": 51.353060000000006,
                    "lon": 12.389660000000001
                  },
                  {
                    "lat": 51.35313000000001,
                    "lon": 12.38973
                  },
                  {
                    "lat": 51.35347,
                    "lon": 12.39009
                  },
                  {
                    "lat": 51.35421,
                    "lon": 12.390880000000001
                  },
                  {
                    "lat": 51.354580000000006,
                    "lon": 12.391280000000002
                  },
                  {
                    "lat": 51.355720000000005,
                    "lon": 12.392640000000002
                  },
                  {
                    "lat": 51.357490000000006,
                    "lon": 12.394770000000001
                  },
                  {
                    "lat": 51.357620000000004,
                    "lon": 12.39492
                  },
                  {
                    "lat": 51.35942000000001,
                    "lon": 12.39709
                  },
                  {
                    "lat": 51.360730000000004,
                    "lon": 12.39864
                  },
                  {
                    "lat": 51.360910000000004,
                    "lon": 12.398850000000001
                  },
                  {
                    "lat": 51.361290000000004,
                    "lon": 12.399220000000001
                  },
                  {
                    "lat": 51.36146,
                    "lon": 12.399370000000001
                  },
                  {
                    "lat": 51.361650000000004,
                    "lon": 12.399510000000001
                  },
                  {
                    "lat": 51.36245,
                    "lon": 12.400110000000002
                  },
                  {
                    "lat": 51.36301,
                    "lon": 12.40052
                  },
                  {
                    "lat": 51.363220000000005,
                    "lon": 12.40066
                  },
                  {
                    "lat": 51.363510000000005,
                    "lon": 12.40085
                  },
                  {
                    "lat": 51.363640000000004,
                    "lon": 12.400910000000001
                  },
                  {
                    "lat": 51.3639,
                    "lon": 12.40103
                  },
                  {
                    "lat": 51.36415,
                    "lon": 12.40112
                  },
                  {
                    "lat": 51.36415,
                    "lon": 12.40112
                  },
                  {
                    "lat": 51.36415,
                    "lon": 12.40112
                  },
                  {
                    "lat": 51.36444,
                    "lon": 12.40121
                  },
                  {
                    "lat": 51.36473,
                    "lon": 12.40126
                  },
                  {
                    "lat": 51.36496,
                    "lon": 12.401280000000002
                  },
                  {
                    "lat": 51.365280000000006,
                    "lon": 12.401290000000001
                  },
                  {
                    "lat": 51.36560000000001,
                    "lon": 12.40126
                  },
                  {
                    "lat": 51.36587,
                    "lon": 12.40122
                  },
                  {
                    "lat": 51.36614,
                    "lon": 12.401140000000002
                  },
                  {
                    "lat": 51.36634,
                    "lon": 12.40108
                  },
                  {
                    "lat": 51.36663,
                    "lon": 12.400950000000002
                  },
                  {
                    "lat": 51.36695,
                    "lon": 12.400810000000002
                  },
                  {
                    "lat": 51.368190000000006,
                    "lon": 12.40018
                  },
                  {
                    "lat": 51.36836,
                    "lon": 12.400100000000002
                  },
                  {
                    "lat": 51.36957,
                    "lon": 12.399560000000001
                  },
                  {
                    "lat": 51.36977,
                    "lon": 12.39948
                  },
                  {
                    "lat": 51.36994000000001,
                    "lon": 12.39943
                  },
                  {
                    "lat": 51.37022,
                    "lon": 12.399370000000001
                  },
                  {
                    "lat": 51.37033,
                    "lon": 12.399350000000002
                  },
                  {
                    "lat": 51.37057,
                    "lon": 12.39933
                  },
                  {
                    "lat": 51.370830000000005,
                    "lon": 12.39934
                  },
                  {
                    "lat": 51.371030000000005,
                    "lon": 12.39938
                  },
                  {
                    "lat": 51.371230000000004,
                    "lon": 12.39944
                  },
                  {
                    "lat": 51.371640000000006,
                    "lon": 12.399590000000002
                  },
                  {
                    "lat": 51.37182000000001,
                    "lon": 12.399680000000002
                  },
                  {
                    "lat": 51.372110000000006,
                    "lon": 12.399880000000001
                  },
                  {
                    "lat": 51.37223,
                    "lon": 12.399980000000001
                  },
                  {
                    "lat": 51.37239,
                    "lon": 12.400120000000001
                  },
                  {
                    "lat": 51.372550000000004,
                    "lon": 12.40027
                  },
                  {
                    "lat": 51.37272,
                    "lon": 12.40046
                  },
                  {
                    "lat": 51.372870000000006,
                    "lon": 12.40065
                  },
                  {
                    "lat": 51.37299,
                    "lon": 12.400820000000001
                  },
                  {
                    "lat": 51.3731,
                    "lon": 12.40098
                  },
                  {
                    "lat": 51.37323000000001,
                    "lon": 12.40121
                  },
                  {
                    "lat": 51.37339000000001,
                    "lon": 12.40154
                  },
                  {
                    "lat": 51.373490000000004,
                    "lon": 12.40177
                  },
                  {
                    "lat": 51.37359000000001,
                    "lon": 12.40201
                  },
                  {
                    "lat": 51.37369,
                    "lon": 12.4023
                  },
                  {
                    "lat": 51.37379000000001,
                    "lon": 12.40258
                  },
                  {
                    "lat": 51.373940000000005,
                    "lon": 12.403110000000002
                  },
                  {
                    "lat": 51.374050000000004,
                    "lon": 12.403590000000001
                  },
                  {
                    "lat": 51.37418,
                    "lon": 12.404230000000002
                  },
                  {
                    "lat": 51.37422,
                    "lon": 12.404570000000001
                  },
                  {
                    "lat": 51.37427,
                    "lon": 12.405030000000002
                  },
                  {
                    "lat": 51.374300000000005,
                    "lon": 12.405330000000001
                  },
                  {
                    "lat": 51.37431,
                    "lon": 12.405590000000002
                  },
                  {
                    "lat": 51.374320000000004,
                    "lon": 12.40591
                  },
                  {
                    "lat": 51.374320000000004,
                    "lon": 12.406220000000001
                  },
                  {
                    "lat": 51.374300000000005,
                    "lon": 12.4068
                  },
                  {
                    "lat": 51.37424000000001,
                    "lon": 12.407490000000001
                  },
                  {
                    "lat": 51.374210000000005,
                    "lon": 12.40788
                  },
                  {
                    "lat": 51.37382,
                    "lon": 12.4121
                  },
                  {
                    "lat": 51.37382,
                    "lon": 12.4121
                  },
                  {
                    "lat": 51.37373,
                    "lon": 12.413110000000001
                  },
                  {
                    "lat": 51.373630000000006,
                    "lon": 12.41416
                  },
                  {
                    "lat": 51.37323000000001,
                    "lon": 12.418500000000002
                  },
                  {
                    "lat": 51.37312000000001,
                    "lon": 12.41975
                  },
                  {
                    "lat": 51.37286,
                    "lon": 12.422630000000002
                  },
                  {
                    "lat": 51.37272,
                    "lon": 12.424050000000001
                  },
                  {
                    "lat": 51.37268,
                    "lon": 12.424700000000001
                  },
                  {
                    "lat": 51.372580000000006,
                    "lon": 12.42562
                  },
                  {
                    "lat": 51.372510000000005,
                    "lon": 12.42622
                  },
                  {
                    "lat": 51.37239,
                    "lon": 12.42706
                  },
                  {
                    "lat": 51.37228,
                    "lon": 12.427760000000001
                  },
                  {
                    "lat": 51.372080000000004,
                    "lon": 12.428790000000001
                  },
                  {
                    "lat": 51.371970000000005,
                    "lon": 12.429440000000001
                  },
                  {
                    "lat": 51.371750000000006,
                    "lon": 12.430470000000001
                  },
                  {
                    "lat": 51.37167,
                    "lon": 12.43078
                  },
                  {
                    "lat": 51.37167,
                    "lon": 12.43078
                  },
                  {
                    "lat": 51.37153000000001,
                    "lon": 12.43139
                  },
                  {
                    "lat": 51.37138,
                    "lon": 12.431970000000002
                  },
                  {
                    "lat": 51.370940000000004,
                    "lon": 12.433980000000002
                  },
                  {
                    "lat": 51.37051,
                    "lon": 12.43585
                  },
                  {
                    "lat": 51.370360000000005,
                    "lon": 12.436670000000001
                  },
                  {
                    "lat": 51.37028,
                    "lon": 12.43701
                  },
                  {
                    "lat": 51.37017,
                    "lon": 12.437410000000002
                  },
                  {
                    "lat": 51.370000000000005,
                    "lon": 12.43791
                  },
                  {
                    "lat": 51.36981,
                    "lon": 12.438410000000001
                  },
                  {
                    "lat": 51.36957,
                    "lon": 12.43903
                  },
                  {
                    "lat": 51.3693,
                    "lon": 12.439660000000002
                  },
                  {
                    "lat": 51.369080000000004,
                    "lon": 12.440140000000001
                  },
                  {
                    "lat": 51.36838,
                    "lon": 12.441640000000001
                  },
                  {
                    "lat": 51.368140000000004,
                    "lon": 12.442160000000001
                  },
                  {
                    "lat": 51.36787,
                    "lon": 12.442730000000001
                  },
                  {
                    "lat": 51.36697,
                    "lon": 12.44467
                  },
                  {
                    "lat": 51.36648,
                    "lon": 12.44574
                  },
                  {
                    "lat": 51.366290000000006,
                    "lon": 12.44621
                  },
                  {
                    "lat": 51.366170000000004,
                    "lon": 12.44658
                  },
                  {
                    "lat": 51.36605,
                    "lon": 12.446980000000002
                  },
                  {
                    "lat": 51.36598000000001,
                    "lon": 12.4473
                  },
                  {
                    "lat": 51.365880000000004,
                    "lon": 12.447980000000001
                  },
                  {
                    "lat": 51.365840000000006,
                    "lon": 12.448350000000001
                  },
                  {
                    "lat": 51.36582000000001,
                    "lon": 12.4487
                  },
                  {
                    "lat": 51.36581,
                    "lon": 12.449090000000002
                  },
                  {
                    "lat": 51.36583,
                    "lon": 12.449530000000001
                  },
                  {
                    "lat": 51.365840000000006,
                    "lon": 12.449660000000002
                  },
                  {
                    "lat": 51.36589000000001,
                    "lon": 12.45011
                  },
                  {
                    "lat": 51.36592,
                    "lon": 12.450380000000001
                  },
                  {
                    "lat": 51.365970000000004,
                    "lon": 12.450650000000001
                  },
                  {
                    "lat": 51.3661,
                    "lon": 12.451220000000001
                  },
                  {
                    "lat": 51.366170000000004,
                    "lon": 12.45147
                  },
                  {
                    "lat": 51.36634,
                    "lon": 12.452000000000002
                  },
                  {
                    "lat": 51.366580000000006,
                    "lon": 12.45264
                  },
                  {
                    "lat": 51.367450000000005,
                    "lon": 12.454910000000002
                  },
                  {
                    "lat": 51.36751,
                    "lon": 12.455060000000001
                  },
                  {
                    "lat": 51.36806000000001,
                    "lon": 12.45667
                  },
                  {
                    "lat": 51.36867,
                    "lon": 12.45832
                  },
                  {
                    "lat": 51.368950000000005,
                    "lon": 12.459040000000002
                  },
                  {
                    "lat": 51.36932,
                    "lon": 12.459980000000002
                  },
                  {
                    "lat": 51.36932,
                    "lon": 12.459990000000001
                  },
                  {
                    "lat": 51.36932,
                    "lon": 12.459990000000001
                  },
                  {
                    "lat": 51.37236000000001,
                    "lon": 12.4677
                  },
                  {
                    "lat": 51.37312000000001,
                    "lon": 12.46963
                  },
                  {
                    "lat": 51.37595,
                    "lon": 12.4768
                  },
                  {
                    "lat": 51.376090000000005,
                    "lon": 12.47714
                  },
                  {
                    "lat": 51.378980000000006,
                    "lon": 12.4845
                  }
                ],
                "length": 173
              },
              "steps": [],
              "routeShortName": "S4",
              "routeLongName": "S-Bahn S4",
              "wheelchairAccessible": 1,
              "duration": 1140,
              "alerts": [],
              "departureDelayedTime": 1740063180000,
              "arrivalDelayedTime": 1740064320000,
              "departureDelayedTimeHHMM": "15:53",
              "arrivalDelayedTimeHHMM": "16:12",
              "startTimeHHMM": "15:53",
              "endTimeHHMM": "16:12",
              "cancelled": false,
              "wheelchairBoardingVehicle": null
            },
            {
              "startTime": 1740064320000,
              "endTime": 1740065040000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 816,
              "mode": "WALK",
              "transitLeg": false,
              "route": "",
              "from": {
                "name": "Taucha (Leipzig)",
                "stopId": "8013093",
                "lon": 12.484471,
                "lat": 51.379017,
                "arrival": 1740064320000,
                "departure": 1740064320000,
                "zoneId": "168",
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740064320000,
                "arrivalDelayedTime": 1740064320000,
                "departureDelayedTimeHHMM": "16:12",
                "arrivalDelayedTimeHHMM": "16:12",
                "arrivalHHMM": "16:12",
                "departureHHMM": "16:12",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "to": {
                "name": "Destination",
                "lon": 12.48922,
                "lat": 51.37435,
                "arrival": 1740065040000,
                "departureDelayedTime": 1740065040000,
                "arrivalDelayedTime": 1740065040000,
                "arrivalDelayedTimeHHMM": "16:24",
                "arrivalHHMM": "16:24",
                "departureHHMM": "16:24",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.37901,
                    "lon": 12.484470000000002
                  },
                  {
                    "lat": 51.37903000000001,
                    "lon": 12.48445
                  },
                  {
                    "lat": 51.37924,
                    "lon": 12.484990000000002
                  },
                  {
                    "lat": 51.379250000000006,
                    "lon": 12.48498
                  },
                  {
                    "lat": 51.379340000000006,
                    "lon": 12.48521
                  },
                  {
                    "lat": 51.379360000000005,
                    "lon": 12.485190000000001
                  },
                  {
                    "lat": 51.37933,
                    "lon": 12.48512
                  },
                  {
                    "lat": 51.37921000000001,
                    "lon": 12.485230000000001
                  },
                  {
                    "lat": 51.37919,
                    "lon": 12.48526
                  },
                  {
                    "lat": 51.379180000000005,
                    "lon": 12.48529
                  },
                  {
                    "lat": 51.379160000000006,
                    "lon": 12.48545
                  },
                  {
                    "lat": 51.379160000000006,
                    "lon": 12.48558
                  },
                  {
                    "lat": 51.379160000000006,
                    "lon": 12.48573
                  },
                  {
                    "lat": 51.37912000000001,
                    "lon": 12.485790000000001
                  },
                  {
                    "lat": 51.37894000000001,
                    "lon": 12.485970000000002
                  },
                  {
                    "lat": 51.37903000000001,
                    "lon": 12.48619
                  },
                  {
                    "lat": 51.37897,
                    "lon": 12.48629
                  },
                  {
                    "lat": 51.378420000000006,
                    "lon": 12.4868
                  },
                  {
                    "lat": 51.378350000000005,
                    "lon": 12.48685
                  },
                  {
                    "lat": 51.378220000000006,
                    "lon": 12.486960000000002
                  },
                  {
                    "lat": 51.378080000000004,
                    "lon": 12.487100000000002
                  },
                  {
                    "lat": 51.37776,
                    "lon": 12.487400000000001
                  },
                  {
                    "lat": 51.37726000000001,
                    "lon": 12.487850000000002
                  },
                  {
                    "lat": 51.37722,
                    "lon": 12.48789
                  },
                  {
                    "lat": 51.37716,
                    "lon": 12.487940000000002
                  },
                  {
                    "lat": 51.377120000000005,
                    "lon": 12.48783
                  },
                  {
                    "lat": 51.37708000000001,
                    "lon": 12.48788
                  },
                  {
                    "lat": 51.377030000000005,
                    "lon": 12.48792
                  },
                  {
                    "lat": 51.376900000000006,
                    "lon": 12.488040000000002
                  },
                  {
                    "lat": 51.37624,
                    "lon": 12.488660000000001
                  },
                  {
                    "lat": 51.375620000000005,
                    "lon": 12.489230000000001
                  },
                  {
                    "lat": 51.375600000000006,
                    "lon": 12.489260000000002
                  },
                  {
                    "lat": 51.37559,
                    "lon": 12.489260000000002
                  },
                  {
                    "lat": 51.37541,
                    "lon": 12.48943
                  },
                  {
                    "lat": 51.37505,
                    "lon": 12.48845
                  },
                  {
                    "lat": 51.374930000000006,
                    "lon": 12.488560000000001
                  },
                  {
                    "lat": 51.37489000000001,
                    "lon": 12.48863
                  },
                  {
                    "lat": 51.37436,
                    "lon": 12.489120000000002
                  },
                  {
                    "lat": 51.374320000000004,
                    "lon": 12.489160000000002
                  }
                ],
                "length": 39
              },
              "steps": [
                {
                  "distance": 46,
                  "relativeDirection": "DEPART",
                  "streetName": "Taucha (Leipzig)",
                  "absoluteDirection": "NORTHEAST",
                  "lon": 12.4844547,
                  "lat": 51.3790332
                },
                {
                  "distance": 22,
                  "relativeDirection": "RIGHT",
                  "streetName": "path",
                  "absoluteDirection": "NORTHEAST",
                  "lon": 12.4849877,
                  "lat": 51.3792561
                },
                {
                  "distance": 58,
                  "relativeDirection": "HARD_LEFT",
                  "streetName": "underpass",
                  "absoluteDirection": "SOUTHWEST",
                  "lon": 12.4851939,
                  "lat": 51.3793657
                },
                {
                  "distance": 30,
                  "relativeDirection": "RIGHT",
                  "streetName": "Bahnhofstraße",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.4857308,
                  "lat": 51.3791677
                },
                {
                  "distance": 19,
                  "relativeDirection": "LEFT",
                  "streetName": "Weststraße",
                  "absoluteDirection": "NORTHEAST",
                  "lon": 12.4859759,
                  "lat": 51.3789482
                },
                {
                  "distance": 242,
                  "relativeDirection": "RIGHT",
                  "streetName": "Südstraße",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.4861973,
                  "lat": 51.3790364
                },
                {
                  "distance": 9,
                  "relativeDirection": "RIGHT",
                  "streetName": "Leipziger Straße",
                  "absoluteDirection": "SOUTHWEST",
                  "lon": 12.4879439,
                  "lat": 51.377163
                },
                {
                  "distance": 220,
                  "relativeDirection": "LEFT",
                  "streetName": "Karl-Marx-Straße",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.4878382,
                  "lat": 51.3771249
                },
                {
                  "distance": 79,
                  "relativeDirection": "RIGHT",
                  "streetName": "Friedrich-Engels-Straße",
                  "absoluteDirection": "SOUTHWEST",
                  "lon": 12.4894307,
                  "lat": 51.3754185
                },
                {
                  "distance": 95,
                  "relativeDirection": "LEFT",
                  "streetName": "path",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.4884558,
                  "lat": 51.3750563,
                  "alerts": []
                }
              ],
              "alerts": [],
              "rentedBike": false,
              "duration": 720,
              "departureDelayedTime": 1740064320000,
              "arrivalDelayedTime": 1740065040000,
              "departureDelayedTimeHHMM": "16:12",
              "arrivalDelayedTimeHHMM": "16:24",
              "startTimeHHMM": "16:12",
              "endTimeHHMM": "16:24",
              "cancelled": false
            }
          ],
          "otpVersion": "2.1",
          "startTimeHHMM": "15:49",
          "endTimeHHMM": "16:23",
          "durationHHMM": "00:35",
          "zoneInfo": {
            "zones": [
              "110",
              "168"
            ],
            "orderedZones": [
              "110",
              "168"
            ],
            "shortDistanceTicket": false
          },
          "index": 2
        },
        {
          "duration": 2640,
          "startTime": 1740063540000,
          "endTime": 1740066180000,
          "walkTime": 840,
          "transitTime": 1800,
          "waitingTime": 0,
          "walkDistance": 889,
          "transfers": 1,
          "legs": [
            {
              "startTime": 1740063540000,
              "endTime": 1740063780000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 181,
              "mode": "WALK",
              "transitLeg": false,
              "route": "",
              "from": {
                "name": "Origin",
                "lon": 12.3749,
                "lat": 51.33394,
                "departure": 1740063540000,
                "departureDelayedTime": 1740063540000,
                "departureDelayedTimeHHMM": "15:59",
                "arrivalHHMM": "15:59",
                "departureHHMM": "15:59",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "to": {
                "name": "Leipzig, Wilhelm-Leuschner-Platz (S-Bahn)",
                "stopId": "8012202",
                "lon": 12.375394,
                "lat": 51.335396,
                "arrival": 1740063780000,
                "departure": 1740063780000,
                "zoneId": "110",
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740063780000,
                "arrivalDelayedTime": 1740063780000,
                "departureDelayedTimeHHMM": "16:03",
                "arrivalDelayedTimeHHMM": "16:03",
                "arrivalHHMM": "16:03",
                "departureHHMM": "16:03",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.333940000000005,
                    "lon": 12.37522
                  },
                  {
                    "lat": 51.334010000000006,
                    "lon": 12.37522
                  },
                  {
                    "lat": 51.33402,
                    "lon": 12.37522
                  },
                  {
                    "lat": 51.33413,
                    "lon": 12.375210000000001
                  },
                  {
                    "lat": 51.334160000000004,
                    "lon": 12.37536
                  },
                  {
                    "lat": 51.3342,
                    "lon": 12.37536
                  },
                  {
                    "lat": 51.334250000000004,
                    "lon": 12.37537
                  },
                  {
                    "lat": 51.33431,
                    "lon": 12.37537
                  },
                  {
                    "lat": 51.334360000000004,
                    "lon": 12.37537
                  },
                  {
                    "lat": 51.334360000000004,
                    "lon": 12.37541
                  },
                  {
                    "lat": 51.334360000000004,
                    "lon": 12.37545
                  },
                  {
                    "lat": 51.334450000000004,
                    "lon": 12.37551
                  },
                  {
                    "lat": 51.33455000000001,
                    "lon": 12.37559
                  },
                  {
                    "lat": 51.33457000000001,
                    "lon": 12.375610000000002
                  },
                  {
                    "lat": 51.33467,
                    "lon": 12.37559
                  },
                  {
                    "lat": 51.334700000000005,
                    "lon": 12.375630000000001
                  },
                  {
                    "lat": 51.334860000000006,
                    "lon": 12.375560000000002
                  },
                  {
                    "lat": 51.33487,
                    "lon": 12.375560000000002
                  },
                  {
                    "lat": 51.33487,
                    "lon": 12.375580000000001
                  },
                  {
                    "lat": 51.334880000000005,
                    "lon": 12.37559
                  },
                  {
                    "lat": 51.335040000000006,
                    "lon": 12.375530000000001
                  },
                  {
                    "lat": 51.33514,
                    "lon": 12.3755
                  },
                  {
                    "lat": 51.33540000000001,
                    "lon": 12.375440000000001
                  },
                  {
                    "lat": 51.335390000000004,
                    "lon": 12.375390000000001
                  }
                ],
                "length": 24
              },
              "steps": [
                {
                  "distance": 22,
                  "relativeDirection": "DEPART",
                  "streetName": "path",
                  "absoluteDirection": "NORTH",
                  "lon": 12.3752261,
                  "lat": 51.3339461
                },
                {
                  "distance": 64,
                  "relativeDirection": "RIGHT",
                  "streetName": "path",
                  "absoluteDirection": "EAST",
                  "lon": 12.3752174,
                  "lat": 51.3341368
                },
                {
                  "distance": 17,
                  "relativeDirection": "LEFT",
                  "streetName": "path",
                  "absoluteDirection": "NORTH",
                  "lon": 12.3756108,
                  "lat": 51.3345729
                },
                {
                  "distance": 62,
                  "relativeDirection": "RIGHT",
                  "streetName": "Leipzig Wilhelm-Leuschner-Platz",
                  "absoluteDirection": "EAST",
                  "lon": 12.3755624,
                  "lat": 51.3348753
                }
              ],
              "rentedBike": false,
              "duration": 240,
              "alerts": [],
              "departureDelayedTime": 1740063540000,
              "arrivalDelayedTime": 1740063780000,
              "departureDelayedTimeHHMM": "15:59",
              "arrivalDelayedTimeHHMM": "16:03",
              "startTimeHHMM": "15:59",
              "endTimeHHMM": "16:03",
              "cancelled": false
            },
            {
              "startTime": 1740063780000,
              "endTime": 1740063960000,
              "departureDelay": 60,
              "arrivalDelay": 0,
              "realTime": true,
              "distance": 1252,
              "mode": "SUBURB",
              "transitLeg": true,
              "route": "S6",
              "agencyName": "800486",
              "agencyUrl": "https://www.mdv.de/partner/",
              "routeColor": "139640",
              "routeType": 109,
              "routeId": "800486S6",
              "headsign": "Leipzig Hbf (tief)",
              "agencyId": "1:800486",
              "tripId": "2760",
              "serviceDate": "20250220",
              "from": {
                "name": "Leipzig, Wilhelm-Leuschner-Platz (S-Bahn)",
                "stopId": "8012202",
                "lon": 12.375394,
                "lat": 51.335396,
                "arrival": 1740063780000,
                "departure": 1740063780000,
                "zoneId": "110",
                "stopSequence": 18,
                "wheelchairBoarding": 1,
                "track": "2",
                "scheduledTrack": null,
                "departureDelayedTime": 1740063840000,
                "arrivalDelayedTime": 1740063780000,
                "departureDelayedTimeHHMM": "16:04",
                "arrivalDelayedTimeHHMM": "16:03",
                "arrivalHHMM": "16:03",
                "departureHHMM": "16:03",
                "arrivalDelay": 0,
                "departureDelay": 60,
                "cancelled": false
              },
              "to": {
                "name": "Leipzig, Hbf (tief) (S-Bahn)",
                "stopId": "8098205",
                "lon": 12.380428,
                "lat": 51.345696,
                "arrival": 1740063960000,
                "departure": 1740063960000,
                "zoneId": "110",
                "stopSequence": 20,
                "wheelchairBoarding": 1,
                "track": "2",
                "scheduledTrack": null,
                "departureDelayedTime": 1740063960000,
                "arrivalDelayedTime": 1740063960000,
                "departureDelayedTimeHHMM": "16:06",
                "arrivalDelayedTimeHHMM": "16:06",
                "arrivalHHMM": "16:06",
                "departureHHMM": "16:06",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "intermediateStops": [
                {
                  "name": "Leipzig, Markt (S-Bahn)",
                  "stopId": "8012186",
                  "lon": 12.374612,
                  "lat": 51.34064,
                  "arrival": 1740063840000,
                  "departure": 1740063900000,
                  "zoneId": "110",
                  "stopSequence": 19,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740063960000,
                  "arrivalDelayedTime": 1740063840000,
                  "departureDelayedTimeHHMM": "16:06",
                  "arrivalDelayedTimeHHMM": "16:04",
                  "arrivalHHMM": "16:04",
                  "departureHHMM": "16:05",
                  "arrivalDelay": 0,
                  "departureDelay": 60,
                  "cancelled": false
                }
              ],
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.33540000000001,
                    "lon": 12.37546
                  },
                  {
                    "lat": 51.335440000000006,
                    "lon": 12.37545
                  },
                  {
                    "lat": 51.33637,
                    "lon": 12.375280000000002
                  },
                  {
                    "lat": 51.336830000000006,
                    "lon": 12.37517
                  },
                  {
                    "lat": 51.33695,
                    "lon": 12.37513
                  },
                  {
                    "lat": 51.337770000000006,
                    "lon": 12.37475
                  },
                  {
                    "lat": 51.338190000000004,
                    "lon": 12.37465
                  },
                  {
                    "lat": 51.33919,
                    "lon": 12.374600000000001
                  },
                  {
                    "lat": 51.339740000000006,
                    "lon": 12.374540000000001
                  },
                  {
                    "lat": 51.34033,
                    "lon": 12.374600000000001
                  },
                  {
                    "lat": 51.340630000000004,
                    "lon": 12.374680000000001
                  },
                  {
                    "lat": 51.340630000000004,
                    "lon": 12.374680000000001
                  },
                  {
                    "lat": 51.34069,
                    "lon": 12.3747
                  },
                  {
                    "lat": 51.340880000000006,
                    "lon": 12.374780000000001
                  },
                  {
                    "lat": 51.341330000000006,
                    "lon": 12.375010000000001
                  },
                  {
                    "lat": 51.341640000000005,
                    "lon": 12.375240000000002
                  },
                  {
                    "lat": 51.34194,
                    "lon": 12.375490000000001
                  },
                  {
                    "lat": 51.3423,
                    "lon": 12.37588
                  },
                  {
                    "lat": 51.342580000000005,
                    "lon": 12.376220000000002
                  },
                  {
                    "lat": 51.342850000000006,
                    "lon": 12.37659
                  },
                  {
                    "lat": 51.34386000000001,
                    "lon": 12.378250000000001
                  },
                  {
                    "lat": 51.34416,
                    "lon": 12.3787
                  },
                  {
                    "lat": 51.34443,
                    "lon": 12.37911
                  },
                  {
                    "lat": 51.344750000000005,
                    "lon": 12.37953
                  },
                  {
                    "lat": 51.345400000000005,
                    "lon": 12.380180000000001
                  }
                ],
                "length": 25
              },
              "steps": [],
              "routeShortName": "S6",
              "routeLongName": "S-Bahn S6",
              "wheelchairAccessible": 1,
              "duration": 180,
              "alerts": [],
              "departureDelayedTime": 1740063840000,
              "arrivalDelayedTime": 1740063960000,
              "departureDelayedTimeHHMM": "16:04",
              "arrivalDelayedTimeHHMM": "16:06",
              "startTimeHHMM": "16:03",
              "endTimeHHMM": "16:06",
              "cancelled": false,
              "wheelchairBoardingVehicle": null
            },
            {
              "startTime": 1740063960000,
              "endTime": 1740064200000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 338,
              "mode": "WALK",
              "transitLeg": false,
              "route": "",
              "from": {
                "name": "Leipzig, Hbf (tief) (S-Bahn)",
                "stopId": "8098205",
                "lon": 12.380428,
                "lat": 51.345696,
                "arrival": 1740063960000,
                "departure": 1740063960000,
                "zoneId": "110",
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740063960000,
                "arrivalDelayedTime": 1740063960000,
                "departureDelayedTimeHHMM": "16:06",
                "arrivalDelayedTimeHHMM": "16:06",
                "arrivalHHMM": "16:06",
                "departureHHMM": "16:06",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "to": {
                "name": "Leipzig, Hauptbahnhof (Tram/Bus)",
                "stopId": "0013000",
                "lon": 12.380878,
                "lat": 51.343754,
                "arrival": 1740064200000,
                "departure": 1740064200000,
                "zoneId": "110",
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740064200000,
                "arrivalDelayedTime": 1740064200000,
                "departureDelayedTimeHHMM": "16:10",
                "arrivalDelayedTimeHHMM": "16:10",
                "arrivalHHMM": "16:10",
                "departureHHMM": "16:10",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false,
                "hafas_id": "1000102",
                "hafas_name": "Hauptbahnhof (Steig B)"
              },
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.345690000000005,
                    "lon": 12.38042
                  },
                  {
                    "lat": 51.345690000000005,
                    "lon": 12.38042
                  },
                  {
                    "lat": 51.34548,
                    "lon": 12.3802
                  },
                  {
                    "lat": 51.345490000000005,
                    "lon": 12.380180000000001
                  },
                  {
                    "lat": 51.3455,
                    "lon": 12.380160000000002
                  },
                  {
                    "lat": 51.34496000000001,
                    "lon": 12.37958
                  },
                  {
                    "lat": 51.344800000000006,
                    "lon": 12.3794
                  },
                  {
                    "lat": 51.344620000000006,
                    "lon": 12.37916
                  },
                  {
                    "lat": 51.34460000000001,
                    "lon": 12.3792
                  },
                  {
                    "lat": 51.344590000000004,
                    "lon": 12.37916
                  },
                  {
                    "lat": 51.34447,
                    "lon": 12.379010000000001
                  },
                  {
                    "lat": 51.34443,
                    "lon": 12.37902
                  },
                  {
                    "lat": 51.34434,
                    "lon": 12.3792
                  },
                  {
                    "lat": 51.344390000000004,
                    "lon": 12.37925
                  },
                  {
                    "lat": 51.344370000000005,
                    "lon": 12.379320000000002
                  },
                  {
                    "lat": 51.34431000000001,
                    "lon": 12.37944
                  },
                  {
                    "lat": 51.34431000000001,
                    "lon": 12.37945
                  },
                  {
                    "lat": 51.34429,
                    "lon": 12.379470000000001
                  },
                  {
                    "lat": 51.344280000000005,
                    "lon": 12.3795
                  },
                  {
                    "lat": 51.344260000000006,
                    "lon": 12.379550000000002
                  },
                  {
                    "lat": 51.343990000000005,
                    "lon": 12.3802
                  },
                  {
                    "lat": 51.344010000000004,
                    "lon": 12.380220000000001
                  },
                  {
                    "lat": 51.34375000000001,
                    "lon": 12.380880000000001
                  },
                  {
                    "lat": 51.34375000000001,
                    "lon": 12.380870000000002
                  }
                ],
                "length": 24
              },
              "steps": [
                {
                  "distance": 29,
                  "relativeDirection": "DEPART",
                  "streetName": "steps",
                  "absoluteDirection": "SOUTHWEST",
                  "lon": 12.3804278,
                  "lat": 51.3456961
                },
                {
                  "distance": 4,
                  "relativeDirection": "RIGHT",
                  "streetName": "path",
                  "absoluteDirection": "NORTHWEST",
                  "lon": 12.3802023,
                  "lat": 51.3454855
                },
                {
                  "distance": 121,
                  "relativeDirection": "LEFT",
                  "streetName": "Platform 1;2",
                  "absoluteDirection": "SOUTHWEST",
                  "lon": 12.380161,
                  "lat": 51.3455028
                },
                {
                  "distance": 7,
                  "relativeDirection": "LEFT",
                  "streetName": "underpass",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.3791611,
                  "lat": 51.344622
                },
                {
                  "distance": 42,
                  "relativeDirection": "LEFT",
                  "streetName": "underpass",
                  "absoluteDirection": "SOUTH",
                  "lon": 12.3790167,
                  "lat": 51.3444755
                },
                {
                  "distance": 54,
                  "relativeDirection": "CONTINUE",
                  "streetName": "Steig C",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.3795571,
                  "lat": 51.3442632
                },
                {
                  "distance": 3,
                  "relativeDirection": "LEFT",
                  "streetName": "path",
                  "absoluteDirection": "NORTHEAST",
                  "lon": 12.3802066,
                  "lat": 51.3439965
                },
                {
                  "distance": 54,
                  "relativeDirection": "RIGHT",
                  "streetName": "Steig B",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.3802296,
                  "lat": 51.344019
                }
              ],
              "rentedBike": false,
              "duration": 240,
              "alerts": [],
              "departureDelayedTime": 1740063960000,
              "arrivalDelayedTime": 1740064200000,
              "departureDelayedTimeHHMM": "16:06",
              "arrivalDelayedTimeHHMM": "16:10",
              "startTimeHHMM": "16:06",
              "endTimeHHMM": "16:10",
              "cancelled": false,
              "durationOriginal": 240
            },
            {
              "startTime": 1740064200000,
              "endTime": 1740065820000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": true,
              "distance": 8583,
              "mode": "TRAM",
              "transitLeg": true,
              "route": "3",
              "agencyName": "Leipziger Verkehrsbetriebe",
              "agencyUrl": "https://www.mdv.de/partner/",
              "routeColor": "61993B",
              "routeType": 0,
              "routeId": "LVTRAM3",
              "headsign": "Taucha",
              "agencyId": "1:00468",
              "tripId": "lvb01766STRB__20250219",
              "serviceDate": "20250220",
              "from": {
                "name": "Leipzig, Hauptbahnhof (Tram/Bus)",
                "stopId": "0013000",
                "lon": 12.380878,
                "lat": 51.343754,
                "arrival": 1740064200000,
                "departure": 1740064200000,
                "zoneId": "110",
                "stopSequence": 18,
                "wheelchairBoarding": 1,
                "track": "B",
                "scheduledTrack": null,
                "departureDelayedTime": 1740064200000,
                "arrivalDelayedTime": 1740064200000,
                "departureDelayedTimeHHMM": "16:10",
                "arrivalDelayedTimeHHMM": "16:10",
                "arrivalHHMM": "16:10",
                "departureHHMM": "16:10",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false,
                "hafas_id": "1000102",
                "hafas_name": "Hauptbahnhof (Steig B)"
              },
              "to": {
                "name": "Taucha (b. Leipzig), Freiligrathstr.",
                "stopId": "0011283",
                "lon": 12.486095,
                "lat": 51.376567,
                "arrival": 1740065820000,
                "departure": 1740065820000,
                "zoneId": "168",
                "stopSequence": 34,
                "wheelchairBoarding": 0,
                "track": null,
                "scheduledTrack": null,
                "departureDelayedTime": 1740065820000,
                "arrivalDelayedTime": 1740065820000,
                "departureDelayedTimeHHMM": "16:37",
                "arrivalDelayedTimeHHMM": "16:37",
                "arrivalHHMM": "16:37",
                "departureHHMM": "16:37",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false,
                "hafas_id": "1006202",
                "hafas_name": "Taucha, Freiligrathstraße"
              },
              "intermediateStops": [
                {
                  "name": "Leipzig, Hofmeisterstr.",
                  "stopId": "0012705",
                  "lon": 12.386214,
                  "lat": 51.343458,
                  "arrival": 1740064320000,
                  "departure": 1740064320000,
                  "zoneId": "110",
                  "stopSequence": 19,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740064320000,
                  "arrivalDelayedTime": 1740064320000,
                  "departureDelayedTimeHHMM": "16:12",
                  "arrivalDelayedTimeHHMM": "16:12",
                  "arrivalHHMM": "16:12",
                  "departureHHMM": "16:12",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1003002",
                  "hafas_name": "Hofmeisterstraße"
                },
                {
                  "name": "Leipzig, Friedrich-List-Platz",
                  "stopId": "0012706",
                  "lon": 12.3921,
                  "lat": 51.34529,
                  "arrival": 1740064440000,
                  "departure": 1740064440000,
                  "zoneId": "110",
                  "stopSequence": 20,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740064440000,
                  "arrivalDelayedTime": 1740064440000,
                  "departureDelayedTimeHHMM": "16:14",
                  "arrivalDelayedTimeHHMM": "16:14",
                  "arrivalHHMM": "16:14",
                  "departureHHMM": "16:14",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1003102",
                  "hafas_name": "Friedrich-List-Platz"
                },
                {
                  "name": "Leipzig, Einertstr.",
                  "stopId": "0012713",
                  "lon": 12.400027,
                  "lat": 51.345829,
                  "arrival": 1740064560000,
                  "departure": 1740064560000,
                  "zoneId": "110",
                  "stopSequence": 21,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740064560000,
                  "arrivalDelayedTime": 1740064560000,
                  "departureDelayedTimeHHMM": "16:16",
                  "arrivalDelayedTimeHHMM": "16:16",
                  "arrivalHHMM": "16:16",
                  "departureHHMM": "16:16",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1003202",
                  "hafas_name": "Einertstraße"
                },
                {
                  "name": "Leipzig, Hermann-Liebmann-/Eisenbahnstr.",
                  "stopId": "0012714",
                  "lon": 12.405435,
                  "lat": 51.345541,
                  "arrival": 1740064680000,
                  "departure": 1740064680000,
                  "zoneId": "110",
                  "stopSequence": 22,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740064680000,
                  "arrivalDelayedTime": 1740064680000,
                  "departureDelayedTimeHHMM": "16:18",
                  "arrivalDelayedTimeHHMM": "16:18",
                  "arrivalHHMM": "16:18",
                  "departureHHMM": "16:18",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1003302",
                  "hafas_name": "H.-Liebmann-/Eisenbahnstraße"
                },
                {
                  "name": "Leipzig, Torgauer Platz",
                  "stopId": "0012851",
                  "lon": 12.413498,
                  "lat": 51.345117,
                  "arrival": 1740064800000,
                  "departure": 1740064800000,
                  "zoneId": "110",
                  "stopSequence": 23,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740064800000,
                  "arrivalDelayedTime": 1740064800000,
                  "departureDelayedTimeHHMM": "16:20",
                  "arrivalDelayedTimeHHMM": "16:20",
                  "arrivalHHMM": "16:20",
                  "departureHHMM": "16:20",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1004902",
                  "hafas_name": "Torgauer Platz"
                },
                {
                  "name": "Leipzig, Volksgarten",
                  "stopId": "0011280",
                  "lon": 12.420303,
                  "lat": 51.348518,
                  "arrival": 1740064920000,
                  "departure": 1740064920000,
                  "zoneId": "110",
                  "stopSequence": 24,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740064920000,
                  "arrivalDelayedTime": 1740064920000,
                  "departureDelayedTimeHHMM": "16:22",
                  "arrivalDelayedTimeHHMM": "16:22",
                  "arrivalHHMM": "16:22",
                  "departureHHMM": "16:22",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1005102",
                  "hafas_name": "Volksgarten"
                },
                {
                  "name": "Leipzig, Permoser-/Torgauer Str.",
                  "stopId": "0012829",
                  "lon": 12.42593,
                  "lat": 51.351688,
                  "arrival": 1740064980000,
                  "departure": 1740064980000,
                  "zoneId": "110",
                  "stopSequence": 25,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740064980000,
                  "arrivalDelayedTime": 1740064980000,
                  "departureDelayedTimeHHMM": "16:23",
                  "arrivalDelayedTimeHHMM": "16:23",
                  "arrivalHHMM": "16:23",
                  "departureHHMM": "16:23",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1005202",
                  "hafas_name": "Permoser-/Torgauer Straße"
                },
                {
                  "name": "Leipzig, Schwantesstr.",
                  "stopId": "0000696",
                  "lon": 12.430876,
                  "lat": 51.354052,
                  "arrival": 1740065040000,
                  "departure": 1740065040000,
                  "zoneId": "110",
                  "stopSequence": 26,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740065040000,
                  "arrivalDelayedTime": 1740065040000,
                  "departureDelayedTimeHHMM": "16:24",
                  "arrivalDelayedTimeHHMM": "16:24",
                  "arrivalHHMM": "16:24",
                  "departureHHMM": "16:24",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1016402",
                  "hafas_name": "Schwantesstraße"
                },
                {
                  "name": "Leipzig, Bautzner Str.",
                  "stopId": "0011278",
                  "lon": 12.434308,
                  "lat": 51.355684,
                  "arrival": 1740065100000,
                  "departure": 1740065160000,
                  "zoneId": "110",
                  "stopSequence": 27,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740065160000,
                  "arrivalDelayedTime": 1740065100000,
                  "departureDelayedTimeHHMM": "16:26",
                  "arrivalDelayedTimeHHMM": "16:25",
                  "arrivalHHMM": "16:25",
                  "departureHHMM": "16:26",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1005302",
                  "hafas_name": "Bautzner Straße"
                },
                {
                  "name": "Leipzig, Hohentichelnstr.",
                  "stopId": "0013282",
                  "lon": 12.443192,
                  "lat": 51.35993,
                  "arrival": 1740065280000,
                  "departure": 1740065280000,
                  "zoneId": "110",
                  "stopSequence": 28,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740065280000,
                  "arrivalDelayedTime": 1740065280000,
                  "departureDelayedTimeHHMM": "16:28",
                  "arrivalDelayedTimeHHMM": "16:28",
                  "arrivalHHMM": "16:28",
                  "departureHHMM": "16:28",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1006602",
                  "hafas_name": "Hohentichelnstraße"
                },
                {
                  "name": "Leipzig, Arcus Park",
                  "stopId": "0000145",
                  "lon": 12.446856,
                  "lat": 51.361686,
                  "arrival": 1740065340000,
                  "departure": 1740065340000,
                  "zoneId": "110",
                  "stopSequence": 29,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740065340000,
                  "arrivalDelayedTime": 1740065340000,
                  "departureDelayedTimeHHMM": "16:29",
                  "arrivalDelayedTimeHHMM": "16:29",
                  "arrivalHHMM": "16:29",
                  "departureHHMM": "16:29",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1005502",
                  "hafas_name": "Arcus Park"
                },
                {
                  "name": "Leipzig, Heiterblick, Teslastr.",
                  "stopId": "0011276",
                  "lon": 12.452323,
                  "lat": 51.36429,
                  "arrival": 1740065400000,
                  "departure": 1740065400000,
                  "zoneId": "110",
                  "stopSequence": 30,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740065400000,
                  "arrivalDelayedTime": 1740065400000,
                  "departureDelayedTimeHHMM": "16:30",
                  "arrivalDelayedTimeHHMM": "16:30",
                  "arrivalHHMM": "16:30",
                  "departureHHMM": "16:30",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1005602",
                  "hafas_name": "Heiterblick, Teslastraße"
                },
                {
                  "name": "Leipzig, Portitzer Allee/S-Bahnhof Heiterblick",
                  "stopId": "0011277",
                  "lon": 12.460293,
                  "lat": 51.36727,
                  "arrival": 1740065520000,
                  "departure": 1740065520000,
                  "zoneId": "110",
                  "stopSequence": 31,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740065520000,
                  "arrivalDelayedTime": 1740065520000,
                  "departureDelayedTimeHHMM": "16:32",
                  "arrivalDelayedTimeHHMM": "16:32",
                  "arrivalHHMM": "16:32",
                  "departureHHMM": "16:32",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1005702",
                  "hafas_name": "Portitzer A., S-Bf.Heiterblick"
                },
                {
                  "name": "Taucha (b. Leipzig), Otto-Schmidt-Str.",
                  "stopId": "0011275",
                  "lon": 12.475442,
                  "lat": 51.372728,
                  "arrival": 1740065700000,
                  "departure": 1740065700000,
                  "zoneId": "168",
                  "stopSequence": 32,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740065700000,
                  "arrivalDelayedTime": 1740065700000,
                  "departureDelayedTimeHHMM": "16:35",
                  "arrivalDelayedTimeHHMM": "16:35",
                  "arrivalHHMM": "16:35",
                  "departureHHMM": "16:35",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1006002",
                  "hafas_name": "Taucha, O.-Schmidt-Str."
                },
                {
                  "name": "Taucha (b. Leipzig), Theodor-Körner-Str.",
                  "stopId": "0011282",
                  "lon": 12.481366,
                  "lat": 51.37487,
                  "arrival": 1740065760000,
                  "departure": 1740065760000,
                  "zoneId": "168",
                  "stopSequence": 33,
                  "wheelchairBoarding": 0,
                  "departureDelayedTime": 1740065760000,
                  "arrivalDelayedTime": 1740065760000,
                  "departureDelayedTimeHHMM": "16:36",
                  "arrivalDelayedTimeHHMM": "16:36",
                  "arrivalHHMM": "16:36",
                  "departureHHMM": "16:36",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false,
                  "hafas_id": "1006102",
                  "hafas_name": "Taucha, Theodor-Körner-Str."
                }
              ],
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.34376,
                    "lon": 12.380880000000001
                  },
                  {
                    "lat": 51.34375000000001,
                    "lon": 12.3809
                  },
                  {
                    "lat": 51.34376,
                    "lon": 12.380910000000002
                  },
                  {
                    "lat": 51.34375000000001,
                    "lon": 12.3809
                  },
                  {
                    "lat": 51.34364000000001,
                    "lon": 12.381160000000001
                  },
                  {
                    "lat": 51.343540000000004,
                    "lon": 12.38141
                  },
                  {
                    "lat": 51.34346000000001,
                    "lon": 12.38161
                  },
                  {
                    "lat": 51.34344,
                    "lon": 12.381670000000002
                  },
                  {
                    "lat": 51.343410000000006,
                    "lon": 12.38184
                  },
                  {
                    "lat": 51.3434,
                    "lon": 12.38197
                  },
                  {
                    "lat": 51.34337000000001,
                    "lon": 12.38231
                  },
                  {
                    "lat": 51.343320000000006,
                    "lon": 12.38282
                  },
                  {
                    "lat": 51.34331,
                    "lon": 12.383030000000002
                  },
                  {
                    "lat": 51.343300000000006,
                    "lon": 12.38319
                  },
                  {
                    "lat": 51.343300000000006,
                    "lon": 12.38324
                  },
                  {
                    "lat": 51.343300000000006,
                    "lon": 12.38333
                  },
                  {
                    "lat": 51.343300000000006,
                    "lon": 12.383350000000002
                  },
                  {
                    "lat": 51.343300000000006,
                    "lon": 12.38344
                  },
                  {
                    "lat": 51.343300000000006,
                    "lon": 12.38348
                  },
                  {
                    "lat": 51.34333,
                    "lon": 12.38367
                  },
                  {
                    "lat": 51.34342,
                    "lon": 12.38452
                  },
                  {
                    "lat": 51.343430000000005,
                    "lon": 12.38466
                  },
                  {
                    "lat": 51.34349,
                    "lon": 12.384970000000001
                  },
                  {
                    "lat": 51.34351,
                    "lon": 12.38507
                  },
                  {
                    "lat": 51.34351,
                    "lon": 12.385150000000001
                  },
                  {
                    "lat": 51.343520000000005,
                    "lon": 12.38527
                  },
                  {
                    "lat": 51.343520000000005,
                    "lon": 12.385390000000001
                  },
                  {
                    "lat": 51.34351,
                    "lon": 12.38559
                  },
                  {
                    "lat": 51.34349,
                    "lon": 12.385840000000002
                  },
                  {
                    "lat": 51.34348000000001,
                    "lon": 12.385980000000002
                  },
                  {
                    "lat": 51.34346000000001,
                    "lon": 12.386220000000002
                  },
                  {
                    "lat": 51.34346000000001,
                    "lon": 12.386220000000002
                  },
                  {
                    "lat": 51.34346000000001,
                    "lon": 12.386220000000002
                  },
                  {
                    "lat": 51.34346000000001,
                    "lon": 12.386220000000002
                  },
                  {
                    "lat": 51.34346000000001,
                    "lon": 12.38624
                  },
                  {
                    "lat": 51.343450000000004,
                    "lon": 12.38635
                  },
                  {
                    "lat": 51.34346000000001,
                    "lon": 12.386450000000002
                  },
                  {
                    "lat": 51.34348000000001,
                    "lon": 12.386560000000001
                  },
                  {
                    "lat": 51.34353,
                    "lon": 12.386740000000001
                  },
                  {
                    "lat": 51.343770000000006,
                    "lon": 12.38746
                  },
                  {
                    "lat": 51.343810000000005,
                    "lon": 12.387580000000002
                  },
                  {
                    "lat": 51.34442000000001,
                    "lon": 12.38944
                  },
                  {
                    "lat": 51.34526,
                    "lon": 12.392000000000001
                  },
                  {
                    "lat": 51.345290000000006,
                    "lon": 12.392080000000002
                  },
                  {
                    "lat": 51.345290000000006,
                    "lon": 12.392090000000001
                  },
                  {
                    "lat": 51.345290000000006,
                    "lon": 12.392100000000001
                  },
                  {
                    "lat": 51.345290000000006,
                    "lon": 12.392100000000001
                  },
                  {
                    "lat": 51.345290000000006,
                    "lon": 12.392090000000001
                  },
                  {
                    "lat": 51.345330000000004,
                    "lon": 12.39221
                  },
                  {
                    "lat": 51.34535,
                    "lon": 12.392280000000001
                  },
                  {
                    "lat": 51.34537,
                    "lon": 12.392330000000001
                  },
                  {
                    "lat": 51.34539,
                    "lon": 12.392380000000001
                  },
                  {
                    "lat": 51.34541,
                    "lon": 12.39245
                  },
                  {
                    "lat": 51.345420000000004,
                    "lon": 12.392460000000002
                  },
                  {
                    "lat": 51.34546,
                    "lon": 12.392570000000001
                  },
                  {
                    "lat": 51.345510000000004,
                    "lon": 12.392700000000001
                  },
                  {
                    "lat": 51.345890000000004,
                    "lon": 12.39375
                  },
                  {
                    "lat": 51.34601000000001,
                    "lon": 12.394100000000002
                  },
                  {
                    "lat": 51.346090000000004,
                    "lon": 12.394350000000001
                  },
                  {
                    "lat": 51.34611,
                    "lon": 12.394470000000002
                  },
                  {
                    "lat": 51.34611,
                    "lon": 12.39461
                  },
                  {
                    "lat": 51.34611,
                    "lon": 12.3947
                  },
                  {
                    "lat": 51.34595,
                    "lon": 12.3977
                  },
                  {
                    "lat": 51.34586,
                    "lon": 12.39944
                  },
                  {
                    "lat": 51.345850000000006,
                    "lon": 12.39967
                  },
                  {
                    "lat": 51.34584,
                    "lon": 12.399830000000001
                  },
                  {
                    "lat": 51.34583000000001,
                    "lon": 12.400020000000001
                  },
                  {
                    "lat": 51.34583000000001,
                    "lon": 12.400020000000001
                  },
                  {
                    "lat": 51.34583000000001,
                    "lon": 12.400020000000001
                  },
                  {
                    "lat": 51.34583000000001,
                    "lon": 12.400020000000001
                  },
                  {
                    "lat": 51.34583000000001,
                    "lon": 12.400020000000001
                  },
                  {
                    "lat": 51.34582,
                    "lon": 12.400160000000001
                  },
                  {
                    "lat": 51.34573,
                    "lon": 12.40173
                  },
                  {
                    "lat": 51.34566,
                    "lon": 12.40314
                  },
                  {
                    "lat": 51.345580000000005,
                    "lon": 12.4046
                  },
                  {
                    "lat": 51.34554000000001,
                    "lon": 12.405330000000001
                  },
                  {
                    "lat": 51.345530000000004,
                    "lon": 12.4054
                  },
                  {
                    "lat": 51.345530000000004,
                    "lon": 12.40543
                  },
                  {
                    "lat": 51.34554000000001,
                    "lon": 12.40544
                  },
                  {
                    "lat": 51.34554000000001,
                    "lon": 12.40544
                  },
                  {
                    "lat": 51.345530000000004,
                    "lon": 12.40543
                  },
                  {
                    "lat": 51.34552000000001,
                    "lon": 12.405660000000001
                  },
                  {
                    "lat": 51.3455,
                    "lon": 12.405930000000001
                  },
                  {
                    "lat": 51.3455,
                    "lon": 12.406060000000002
                  },
                  {
                    "lat": 51.34543000000001,
                    "lon": 12.40732
                  },
                  {
                    "lat": 51.34532,
                    "lon": 12.40915
                  },
                  {
                    "lat": 51.345310000000005,
                    "lon": 12.409370000000001
                  },
                  {
                    "lat": 51.34523,
                    "lon": 12.41097
                  },
                  {
                    "lat": 51.34512,
                    "lon": 12.413390000000001
                  },
                  {
                    "lat": 51.345110000000005,
                    "lon": 12.413490000000001
                  },
                  {
                    "lat": 51.345110000000005,
                    "lon": 12.413490000000001
                  },
                  {
                    "lat": 51.345110000000005,
                    "lon": 12.4135
                  },
                  {
                    "lat": 51.34512,
                    "lon": 12.4135
                  },
                  {
                    "lat": 51.345110000000005,
                    "lon": 12.4135
                  },
                  {
                    "lat": 51.345090000000006,
                    "lon": 12.41397
                  },
                  {
                    "lat": 51.34508,
                    "lon": 12.41412
                  },
                  {
                    "lat": 51.34508,
                    "lon": 12.414140000000002
                  },
                  {
                    "lat": 51.34508,
                    "lon": 12.414250000000001
                  },
                  {
                    "lat": 51.34508,
                    "lon": 12.414320000000002
                  },
                  {
                    "lat": 51.345090000000006,
                    "lon": 12.41441
                  },
                  {
                    "lat": 51.34512,
                    "lon": 12.4145
                  },
                  {
                    "lat": 51.34514,
                    "lon": 12.414560000000002
                  },
                  {
                    "lat": 51.345240000000004,
                    "lon": 12.41472
                  },
                  {
                    "lat": 51.345380000000006,
                    "lon": 12.41496
                  },
                  {
                    "lat": 51.34597,
                    "lon": 12.41594
                  },
                  {
                    "lat": 51.34637000000001,
                    "lon": 12.416640000000001
                  },
                  {
                    "lat": 51.3464,
                    "lon": 12.416690000000001
                  },
                  {
                    "lat": 51.346500000000006,
                    "lon": 12.41685
                  },
                  {
                    "lat": 51.34655000000001,
                    "lon": 12.41693
                  },
                  {
                    "lat": 51.3466,
                    "lon": 12.41702
                  },
                  {
                    "lat": 51.34667,
                    "lon": 12.41713
                  },
                  {
                    "lat": 51.34707,
                    "lon": 12.417810000000001
                  },
                  {
                    "lat": 51.34731000000001,
                    "lon": 12.41821
                  },
                  {
                    "lat": 51.347680000000004,
                    "lon": 12.41882
                  },
                  {
                    "lat": 51.348020000000005,
                    "lon": 12.419390000000002
                  },
                  {
                    "lat": 51.34808,
                    "lon": 12.419490000000001
                  },
                  {
                    "lat": 51.348290000000006,
                    "lon": 12.419880000000001
                  },
                  {
                    "lat": 51.348530000000004,
                    "lon": 12.420280000000002
                  },
                  {
                    "lat": 51.34852000000001,
                    "lon": 12.420300000000001
                  },
                  {
                    "lat": 51.34852000000001,
                    "lon": 12.420300000000001
                  },
                  {
                    "lat": 51.34852000000001,
                    "lon": 12.42031
                  },
                  {
                    "lat": 51.348530000000004,
                    "lon": 12.420280000000002
                  },
                  {
                    "lat": 51.348710000000004,
                    "lon": 12.420570000000001
                  },
                  {
                    "lat": 51.34893,
                    "lon": 12.420940000000002
                  },
                  {
                    "lat": 51.34908,
                    "lon": 12.4212
                  },
                  {
                    "lat": 51.349270000000004,
                    "lon": 12.42153
                  },
                  {
                    "lat": 51.349720000000005,
                    "lon": 12.42228
                  },
                  {
                    "lat": 51.35031000000001,
                    "lon": 12.423280000000002
                  },
                  {
                    "lat": 51.3507,
                    "lon": 12.42387
                  },
                  {
                    "lat": 51.350840000000005,
                    "lon": 12.424080000000002
                  },
                  {
                    "lat": 51.35096000000001,
                    "lon": 12.42431
                  },
                  {
                    "lat": 51.351710000000004,
                    "lon": 12.425880000000001
                  },
                  {
                    "lat": 51.35168,
                    "lon": 12.425920000000001
                  },
                  {
                    "lat": 51.35168,
                    "lon": 12.425920000000001
                  },
                  {
                    "lat": 51.351710000000004,
                    "lon": 12.425880000000001
                  },
                  {
                    "lat": 51.35175,
                    "lon": 12.42595
                  },
                  {
                    "lat": 51.351780000000005,
                    "lon": 12.42604
                  },
                  {
                    "lat": 51.35184,
                    "lon": 12.426160000000001
                  },
                  {
                    "lat": 51.35192000000001,
                    "lon": 12.42631
                  },
                  {
                    "lat": 51.351940000000006,
                    "lon": 12.42636
                  },
                  {
                    "lat": 51.351980000000005,
                    "lon": 12.426440000000001
                  },
                  {
                    "lat": 51.35204,
                    "lon": 12.42656
                  },
                  {
                    "lat": 51.35230000000001,
                    "lon": 12.42712
                  },
                  {
                    "lat": 51.35372,
                    "lon": 12.430090000000002
                  },
                  {
                    "lat": 51.35380000000001,
                    "lon": 12.430280000000002
                  },
                  {
                    "lat": 51.35407000000001,
                    "lon": 12.430840000000002
                  },
                  {
                    "lat": 51.35405,
                    "lon": 12.43087
                  },
                  {
                    "lat": 51.35405,
                    "lon": 12.43087
                  },
                  {
                    "lat": 51.354040000000005,
                    "lon": 12.43087
                  },
                  {
                    "lat": 51.35407000000001,
                    "lon": 12.430840000000002
                  },
                  {
                    "lat": 51.354130000000005,
                    "lon": 12.430950000000001
                  },
                  {
                    "lat": 51.35517,
                    "lon": 12.43313
                  },
                  {
                    "lat": 51.35530000000001,
                    "lon": 12.43341
                  },
                  {
                    "lat": 51.355410000000006,
                    "lon": 12.433650000000002
                  },
                  {
                    "lat": 51.35546,
                    "lon": 12.433750000000002
                  },
                  {
                    "lat": 51.35571,
                    "lon": 12.434260000000002
                  },
                  {
                    "lat": 51.35568000000001,
                    "lon": 12.4343
                  },
                  {
                    "lat": 51.35568000000001,
                    "lon": 12.4343
                  },
                  {
                    "lat": 51.35568000000001,
                    "lon": 12.4343
                  },
                  {
                    "lat": 51.35571,
                    "lon": 12.434260000000002
                  },
                  {
                    "lat": 51.35573,
                    "lon": 12.434320000000001
                  },
                  {
                    "lat": 51.35925,
                    "lon": 12.441680000000002
                  },
                  {
                    "lat": 51.35961,
                    "lon": 12.442440000000001
                  },
                  {
                    "lat": 51.359840000000005,
                    "lon": 12.44293
                  },
                  {
                    "lat": 51.359950000000005,
                    "lon": 12.44316
                  },
                  {
                    "lat": 51.359930000000006,
                    "lon": 12.443190000000001
                  },
                  {
                    "lat": 51.359930000000006,
                    "lon": 12.443190000000001
                  },
                  {
                    "lat": 51.359950000000005,
                    "lon": 12.44316
                  },
                  {
                    "lat": 51.360020000000006,
                    "lon": 12.4433
                  },
                  {
                    "lat": 51.36012,
                    "lon": 12.443520000000001
                  },
                  {
                    "lat": 51.36019,
                    "lon": 12.443670000000001
                  },
                  {
                    "lat": 51.360290000000006,
                    "lon": 12.44387
                  },
                  {
                    "lat": 51.36124,
                    "lon": 12.445870000000001
                  },
                  {
                    "lat": 51.36133,
                    "lon": 12.446050000000001
                  },
                  {
                    "lat": 51.36142,
                    "lon": 12.446240000000001
                  },
                  {
                    "lat": 51.361470000000004,
                    "lon": 12.44635
                  },
                  {
                    "lat": 51.361700000000006,
                    "lon": 12.44682
                  },
                  {
                    "lat": 51.36168000000001,
                    "lon": 12.446850000000001
                  },
                  {
                    "lat": 51.36168000000001,
                    "lon": 12.446850000000001
                  },
                  {
                    "lat": 51.36168000000001,
                    "lon": 12.446850000000001
                  },
                  {
                    "lat": 51.361700000000006,
                    "lon": 12.44682
                  },
                  {
                    "lat": 51.363780000000006,
                    "lon": 12.45119
                  },
                  {
                    "lat": 51.3639,
                    "lon": 12.451450000000001
                  },
                  {
                    "lat": 51.36408,
                    "lon": 12.451810000000002
                  },
                  {
                    "lat": 51.36431,
                    "lon": 12.452290000000001
                  },
                  {
                    "lat": 51.36428,
                    "lon": 12.45232
                  },
                  {
                    "lat": 51.364290000000004,
                    "lon": 12.45232
                  },
                  {
                    "lat": 51.364290000000004,
                    "lon": 12.45232
                  },
                  {
                    "lat": 51.367270000000005,
                    "lon": 12.46029
                  },
                  {
                    "lat": 51.367270000000005,
                    "lon": 12.46029
                  },
                  {
                    "lat": 51.36726,
                    "lon": 12.460280000000001
                  },
                  {
                    "lat": 51.36726,
                    "lon": 12.460280000000001
                  },
                  {
                    "lat": 51.367290000000004,
                    "lon": 12.460360000000001
                  },
                  {
                    "lat": 51.36732000000001,
                    "lon": 12.460450000000002
                  },
                  {
                    "lat": 51.36732000000001,
                    "lon": 12.460460000000001
                  },
                  {
                    "lat": 51.367380000000004,
                    "lon": 12.46062
                  },
                  {
                    "lat": 51.36741000000001,
                    "lon": 12.460700000000001
                  },
                  {
                    "lat": 51.36746,
                    "lon": 12.46085
                  },
                  {
                    "lat": 51.36750000000001,
                    "lon": 12.46094
                  },
                  {
                    "lat": 51.36757000000001,
                    "lon": 12.46114
                  },
                  {
                    "lat": 51.367580000000004,
                    "lon": 12.461160000000001
                  },
                  {
                    "lat": 51.36766,
                    "lon": 12.461400000000001
                  },
                  {
                    "lat": 51.36851000000001,
                    "lon": 12.463780000000002
                  },
                  {
                    "lat": 51.369150000000005,
                    "lon": 12.46549
                  },
                  {
                    "lat": 51.369400000000006,
                    "lon": 12.4662
                  },
                  {
                    "lat": 51.36985000000001,
                    "lon": 12.46743
                  },
                  {
                    "lat": 51.36994000000001,
                    "lon": 12.467680000000001
                  },
                  {
                    "lat": 51.370110000000004,
                    "lon": 12.46817
                  },
                  {
                    "lat": 51.370490000000004,
                    "lon": 12.469220000000002
                  },
                  {
                    "lat": 51.37050000000001,
                    "lon": 12.46925
                  },
                  {
                    "lat": 51.37107,
                    "lon": 12.4708
                  },
                  {
                    "lat": 51.37118,
                    "lon": 12.471110000000001
                  },
                  {
                    "lat": 51.37122,
                    "lon": 12.471240000000002
                  },
                  {
                    "lat": 51.37131,
                    "lon": 12.471490000000001
                  },
                  {
                    "lat": 51.372130000000006,
                    "lon": 12.473770000000002
                  },
                  {
                    "lat": 51.372310000000006,
                    "lon": 12.474290000000002
                  },
                  {
                    "lat": 51.372440000000005,
                    "lon": 12.474660000000002
                  },
                  {
                    "lat": 51.372710000000005,
                    "lon": 12.475430000000001
                  },
                  {
                    "lat": 51.37272,
                    "lon": 12.47544
                  },
                  {
                    "lat": 51.372730000000004,
                    "lon": 12.47544
                  },
                  {
                    "lat": 51.37272,
                    "lon": 12.47544
                  },
                  {
                    "lat": 51.37272,
                    "lon": 12.47544
                  },
                  {
                    "lat": 51.37272,
                    "lon": 12.47544
                  },
                  {
                    "lat": 51.37276000000001,
                    "lon": 12.475560000000002
                  },
                  {
                    "lat": 51.372820000000004,
                    "lon": 12.475740000000002
                  },
                  {
                    "lat": 51.372890000000005,
                    "lon": 12.47592
                  },
                  {
                    "lat": 51.372910000000005,
                    "lon": 12.47597
                  },
                  {
                    "lat": 51.373650000000005,
                    "lon": 12.47803
                  },
                  {
                    "lat": 51.37483,
                    "lon": 12.48127
                  },
                  {
                    "lat": 51.374860000000005,
                    "lon": 12.48136
                  },
                  {
                    "lat": 51.374860000000005,
                    "lon": 12.48136
                  },
                  {
                    "lat": 51.37487,
                    "lon": 12.481370000000002
                  },
                  {
                    "lat": 51.37487,
                    "lon": 12.481370000000002
                  },
                  {
                    "lat": 51.37487,
                    "lon": 12.481370000000002
                  },
                  {
                    "lat": 51.37489000000001,
                    "lon": 12.481430000000001
                  },
                  {
                    "lat": 51.37492,
                    "lon": 12.481510000000002
                  },
                  {
                    "lat": 51.37494,
                    "lon": 12.481580000000001
                  },
                  {
                    "lat": 51.37498,
                    "lon": 12.48168
                  },
                  {
                    "lat": 51.37507,
                    "lon": 12.48192
                  },
                  {
                    "lat": 51.37519,
                    "lon": 12.482270000000002
                  },
                  {
                    "lat": 51.37538000000001,
                    "lon": 12.482790000000001
                  },
                  {
                    "lat": 51.376050000000006,
                    "lon": 12.48465
                  },
                  {
                    "lat": 51.37623000000001,
                    "lon": 12.485170000000002
                  },
                  {
                    "lat": 51.37644,
                    "lon": 12.48576
                  },
                  {
                    "lat": 51.376560000000005,
                    "lon": 12.48609
                  },
                  {
                    "lat": 51.37657,
                    "lon": 12.48609
                  },
                  {
                    "lat": 51.376560000000005,
                    "lon": 12.48609
                  },
                  {
                    "lat": 51.376560000000005,
                    "lon": 12.48609
                  }
                ],
                "length": 248
              },
              "steps": [],
              "routeShortName": "3",
              "routeLongName": "Tram 3",
              "wheelchairAccessible": 1,
              "duration": 1620,
              "alerts": [],
              "departureDelayedTime": 1740064200000,
              "arrivalDelayedTime": 1740065820000,
              "departureDelayedTimeHHMM": "16:10",
              "arrivalDelayedTimeHHMM": "16:37",
              "startTimeHHMM": "16:10",
              "endTimeHHMM": "16:37",
              "cancelled": false,
              "wheelchairBoardingVehicle": null
            },
            {
              "startTime": 1740065820000,
              "endTime": 1740066180000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 370,
              "mode": "WALK",
              "transitLeg": false,
              "route": "",
              "from": {
                "name": "Taucha (b. Leipzig), Freiligrathstr.",
                "stopId": "0011283",
                "lon": 12.486095,
                "lat": 51.376567,
                "arrival": 1740065820000,
                "departure": 1740065820000,
                "zoneId": "168",
                "wheelchairBoarding": 0,
                "departureDelayedTime": 1740065820000,
                "arrivalDelayedTime": 1740065820000,
                "departureDelayedTimeHHMM": "16:37",
                "arrivalDelayedTimeHHMM": "16:37",
                "arrivalHHMM": "16:37",
                "departureHHMM": "16:37",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false,
                "hafas_id": "1006202",
                "hafas_name": "Taucha, Freiligrathstraße"
              },
              "to": {
                "name": "Destination",
                "lon": 12.48922,
                "lat": 51.37435,
                "arrival": 1740066180000,
                "departureDelayedTime": 1740066180000,
                "arrivalDelayedTime": 1740066180000,
                "arrivalDelayedTimeHHMM": "16:43",
                "arrivalHHMM": "16:43",
                "departureHHMM": "16:43",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.376560000000005,
                    "lon": 12.48609
                  },
                  {
                    "lat": 51.37651,
                    "lon": 12.48614
                  },
                  {
                    "lat": 51.37659000000001,
                    "lon": 12.48637
                  },
                  {
                    "lat": 51.37666,
                    "lon": 12.48657
                  },
                  {
                    "lat": 51.37662,
                    "lon": 12.48662
                  },
                  {
                    "lat": 51.376580000000004,
                    "lon": 12.48666
                  },
                  {
                    "lat": 51.376450000000006,
                    "lon": 12.486780000000001
                  },
                  {
                    "lat": 51.37588,
                    "lon": 12.48731
                  },
                  {
                    "lat": 51.37581,
                    "lon": 12.48737
                  },
                  {
                    "lat": 51.375780000000006,
                    "lon": 12.487400000000001
                  },
                  {
                    "lat": 51.375870000000006,
                    "lon": 12.487660000000002
                  },
                  {
                    "lat": 51.37538000000001,
                    "lon": 12.488130000000002
                  },
                  {
                    "lat": 51.37505,
                    "lon": 12.48845
                  },
                  {
                    "lat": 51.374930000000006,
                    "lon": 12.488560000000001
                  },
                  {
                    "lat": 51.37489000000001,
                    "lon": 12.48863
                  },
                  {
                    "lat": 51.37436,
                    "lon": 12.489120000000002
                  },
                  {
                    "lat": 51.374320000000004,
                    "lon": 12.489160000000002
                  }
                ],
                "length": 17
              },
              "steps": [
                {
                  "distance": 35,
                  "relativeDirection": "DEPART",
                  "streetName": "Leipziger Straße",
                  "absoluteDirection": "NORTHEAST",
                  "lon": 12.4861469,
                  "lat": 51.3765115
                },
                {
                  "distance": 115,
                  "relativeDirection": "RIGHT",
                  "streetName": "Ferdinand-Lassalle-Straße",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.4865794,
                  "lat": 51.376668
                },
                {
                  "distance": 222,
                  "relativeDirection": "LEFT",
                  "streetName": "path",
                  "absoluteDirection": "NORTHEAST",
                  "lon": 12.4874093,
                  "lat": 51.3757811,
                  "alerts": []
                }
              ],
              "alerts": [],
              "rentedBike": false,
              "duration": 360,
              "departureDelayedTime": 1740065820000,
              "arrivalDelayedTime": 1740066180000,
              "departureDelayedTimeHHMM": "16:37",
              "arrivalDelayedTimeHHMM": "16:43",
              "startTimeHHMM": "16:37",
              "endTimeHHMM": "16:43",
              "cancelled": false
            }
          ],
          "otpVersion": "2.1",
          "startTimeHHMM": "15:59",
          "endTimeHHMM": "16:42",
          "durationHHMM": "00:44",
          "zoneInfo": {
            "zones": [
              "110",
              "168"
            ],
            "orderedZones": [
              "110",
              "168"
            ],
            "shortDistanceTicket": false
          },
          "index": 3
        },
        {
          "duration": 2100,
          "startTime": 1740064740000,
          "endTime": 1740066840000,
          "walkTime": 960,
          "transitTime": 1140,
          "waitingTime": 0,
          "walkDistance": 997,
          "transfers": 0,
          "legs": [
            {
              "startTime": 1740064740000,
              "endTime": 1740064980000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 181,
              "mode": "WALK",
              "transitLeg": false,
              "route": "",
              "from": {
                "name": "Origin",
                "lon": 12.3749,
                "lat": 51.33394,
                "departure": 1740064740000,
                "departureDelayedTime": 1740064740000,
                "departureDelayedTimeHHMM": "16:19",
                "arrivalHHMM": "16:19",
                "departureHHMM": "16:19",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "to": {
                "name": "Leipzig, Wilhelm-Leuschner-Platz (S-Bahn)",
                "stopId": "8012202",
                "lon": 12.375394,
                "lat": 51.335396,
                "arrival": 1740064980000,
                "departure": 1740064980000,
                "zoneId": "110",
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740064980000,
                "arrivalDelayedTime": 1740064980000,
                "departureDelayedTimeHHMM": "16:23",
                "arrivalDelayedTimeHHMM": "16:23",
                "arrivalHHMM": "16:23",
                "departureHHMM": "16:23",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.333940000000005,
                    "lon": 12.37522
                  },
                  {
                    "lat": 51.334010000000006,
                    "lon": 12.37522
                  },
                  {
                    "lat": 51.33402,
                    "lon": 12.37522
                  },
                  {
                    "lat": 51.33413,
                    "lon": 12.375210000000001
                  },
                  {
                    "lat": 51.334160000000004,
                    "lon": 12.37536
                  },
                  {
                    "lat": 51.3342,
                    "lon": 12.37536
                  },
                  {
                    "lat": 51.334250000000004,
                    "lon": 12.37537
                  },
                  {
                    "lat": 51.33431,
                    "lon": 12.37537
                  },
                  {
                    "lat": 51.334360000000004,
                    "lon": 12.37537
                  },
                  {
                    "lat": 51.334360000000004,
                    "lon": 12.37541
                  },
                  {
                    "lat": 51.334360000000004,
                    "lon": 12.37545
                  },
                  {
                    "lat": 51.334450000000004,
                    "lon": 12.37551
                  },
                  {
                    "lat": 51.33455000000001,
                    "lon": 12.37559
                  },
                  {
                    "lat": 51.33457000000001,
                    "lon": 12.375610000000002
                  },
                  {
                    "lat": 51.33467,
                    "lon": 12.37559
                  },
                  {
                    "lat": 51.334700000000005,
                    "lon": 12.375630000000001
                  },
                  {
                    "lat": 51.334860000000006,
                    "lon": 12.375560000000002
                  },
                  {
                    "lat": 51.33487,
                    "lon": 12.375560000000002
                  },
                  {
                    "lat": 51.33487,
                    "lon": 12.375580000000001
                  },
                  {
                    "lat": 51.334880000000005,
                    "lon": 12.37559
                  },
                  {
                    "lat": 51.335040000000006,
                    "lon": 12.375530000000001
                  },
                  {
                    "lat": 51.33514,
                    "lon": 12.3755
                  },
                  {
                    "lat": 51.33540000000001,
                    "lon": 12.375440000000001
                  },
                  {
                    "lat": 51.335390000000004,
                    "lon": 12.375390000000001
                  }
                ],
                "length": 24
              },
              "steps": [
                {
                  "distance": 22,
                  "relativeDirection": "DEPART",
                  "streetName": "path",
                  "absoluteDirection": "NORTH",
                  "lon": 12.3752261,
                  "lat": 51.3339461
                },
                {
                  "distance": 64,
                  "relativeDirection": "RIGHT",
                  "streetName": "path",
                  "absoluteDirection": "EAST",
                  "lon": 12.3752174,
                  "lat": 51.3341368
                },
                {
                  "distance": 17,
                  "relativeDirection": "LEFT",
                  "streetName": "path",
                  "absoluteDirection": "NORTH",
                  "lon": 12.3756108,
                  "lat": 51.3345729
                },
                {
                  "distance": 62,
                  "relativeDirection": "RIGHT",
                  "streetName": "Leipzig Wilhelm-Leuschner-Platz",
                  "absoluteDirection": "EAST",
                  "lon": 12.3755624,
                  "lat": 51.3348753
                }
              ],
              "rentedBike": false,
              "duration": 240,
              "alerts": [],
              "departureDelayedTime": 1740064740000,
              "arrivalDelayedTime": 1740064980000,
              "departureDelayedTimeHHMM": "16:19",
              "arrivalDelayedTimeHHMM": "16:23",
              "startTimeHHMM": "16:19",
              "endTimeHHMM": "16:23",
              "cancelled": false
            },
            {
              "startTime": 1740064980000,
              "endTime": 1740066120000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 11298,
              "mode": "SUBURB",
              "transitLeg": true,
              "route": "S4",
              "agencyName": "800486",
              "agencyUrl": "https://www.mdv.de/partner/",
              "routeColor": "139640",
              "routeType": 109,
              "routeId": "800486S4",
              "headsign": "Torgau",
              "agencyId": "1:800486",
              "tripId": "2127",
              "serviceDate": "20250220",
              "from": {
                "name": "Leipzig, Wilhelm-Leuschner-Platz (S-Bahn)",
                "stopId": "8012202",
                "lon": 12.375394,
                "lat": 51.335396,
                "arrival": 1740064980000,
                "departure": 1740064980000,
                "zoneId": "110",
                "stopSequence": 8,
                "wheelchairBoarding": 1,
                "track": "2",
                "scheduledTrack": "2",
                "departureDelayedTime": 1740064980000,
                "arrivalDelayedTime": 1740064980000,
                "departureDelayedTimeHHMM": "16:23",
                "arrivalDelayedTimeHHMM": "16:23",
                "arrivalHHMM": "16:23",
                "departureHHMM": "16:23",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "to": {
                "name": "Taucha (Leipzig)",
                "stopId": "8013093",
                "lon": 12.484471,
                "lat": 51.379017,
                "arrival": 1740066120000,
                "departure": 1740066120000,
                "zoneId": "168",
                "stopSequence": 15,
                "wheelchairBoarding": 1,
                "track": "1",
                "scheduledTrack": null,
                "departureDelayedTime": 1740066120000,
                "arrivalDelayedTime": 1740066120000,
                "departureDelayedTimeHHMM": "16:42",
                "arrivalDelayedTimeHHMM": "16:42",
                "arrivalHHMM": "16:42",
                "departureHHMM": "16:42",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "intermediateStops": [
                {
                  "name": "Leipzig, Markt (S-Bahn)",
                  "stopId": "8012186",
                  "lon": 12.374612,
                  "lat": 51.34064,
                  "arrival": 1740065040000,
                  "departure": 1740065100000,
                  "zoneId": "110",
                  "stopSequence": 9,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740065100000,
                  "arrivalDelayedTime": 1740065040000,
                  "departureDelayedTimeHHMM": "16:25",
                  "arrivalDelayedTimeHHMM": "16:24",
                  "arrivalHHMM": "16:24",
                  "departureHHMM": "16:25",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false
                },
                {
                  "name": "Leipzig, Hbf (tief) (S-Bahn)",
                  "stopId": "8098205",
                  "lon": 12.380428,
                  "lat": 51.345696,
                  "arrival": 1740065160000,
                  "departure": 1740065280000,
                  "zoneId": "110",
                  "stopSequence": 10,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740065280000,
                  "arrivalDelayedTime": 1740065160000,
                  "departureDelayedTimeHHMM": "16:28",
                  "arrivalDelayedTimeHHMM": "16:26",
                  "arrivalHHMM": "16:26",
                  "departureHHMM": "16:28",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false
                },
                {
                  "name": "Leipzig, Nord (S-Bahn)",
                  "stopId": "8012196",
                  "lon": 12.40106,
                  "lat": 51.364162,
                  "arrival": 1740065460000,
                  "departure": 1740065460000,
                  "zoneId": "110",
                  "stopSequence": 11,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740065460000,
                  "arrivalDelayedTime": 1740065460000,
                  "departureDelayedTimeHHMM": "16:31",
                  "arrivalDelayedTimeHHMM": "16:31",
                  "arrivalHHMM": "16:31",
                  "departureHHMM": "16:31",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false
                },
                {
                  "name": "Leipzig, Mockauer Straße (S-Bahn)",
                  "stopId": "8012273",
                  "lon": 12.4121,
                  "lat": 51.3738,
                  "arrival": 1740065640000,
                  "departure": 1740065640000,
                  "zoneId": "110",
                  "stopSequence": 12,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740065640000,
                  "arrivalDelayedTime": 1740065640000,
                  "departureDelayedTimeHHMM": "16:34",
                  "arrivalDelayedTimeHHMM": "16:34",
                  "arrivalHHMM": "16:34",
                  "departureHHMM": "16:34",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false
                },
                {
                  "name": "Leipzig, Thekla (S-Bahn)",
                  "stopId": "8012195",
                  "lon": 12.430751,
                  "lat": 51.371626,
                  "arrival": 1740065760000,
                  "departure": 1740065760000,
                  "zoneId": "110",
                  "stopSequence": 13,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740065760000,
                  "arrivalDelayedTime": 1740065760000,
                  "departureDelayedTimeHHMM": "16:36",
                  "arrivalDelayedTimeHHMM": "16:36",
                  "arrivalHHMM": "16:36",
                  "departureHHMM": "16:36",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false
                },
                {
                  "name": "Leipzig, Heiterblick (S-Bahn)",
                  "stopId": "8012190",
                  "lon": 12.459979,
                  "lat": 51.369339,
                  "arrival": 1740065940000,
                  "departure": 1740066000000,
                  "zoneId": "110",
                  "stopSequence": 14,
                  "wheelchairBoarding": 1,
                  "departureDelayedTime": 1740066000000,
                  "arrivalDelayedTime": 1740065940000,
                  "departureDelayedTimeHHMM": "16:40",
                  "arrivalDelayedTimeHHMM": "16:39",
                  "arrivalHHMM": "16:39",
                  "departureHHMM": "16:40",
                  "arrivalDelay": 0,
                  "departureDelay": 0,
                  "cancelled": false
                }
              ],
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.33540000000001,
                    "lon": 12.37546
                  },
                  {
                    "lat": 51.335440000000006,
                    "lon": 12.37545
                  },
                  {
                    "lat": 51.33637,
                    "lon": 12.375280000000002
                  },
                  {
                    "lat": 51.336830000000006,
                    "lon": 12.37517
                  },
                  {
                    "lat": 51.33695,
                    "lon": 12.37513
                  },
                  {
                    "lat": 51.337770000000006,
                    "lon": 12.37475
                  },
                  {
                    "lat": 51.338190000000004,
                    "lon": 12.37465
                  },
                  {
                    "lat": 51.33919,
                    "lon": 12.374600000000001
                  },
                  {
                    "lat": 51.339740000000006,
                    "lon": 12.374540000000001
                  },
                  {
                    "lat": 51.34033,
                    "lon": 12.374600000000001
                  },
                  {
                    "lat": 51.340630000000004,
                    "lon": 12.374680000000001
                  },
                  {
                    "lat": 51.340630000000004,
                    "lon": 12.374680000000001
                  },
                  {
                    "lat": 51.34069,
                    "lon": 12.3747
                  },
                  {
                    "lat": 51.340880000000006,
                    "lon": 12.374780000000001
                  },
                  {
                    "lat": 51.341330000000006,
                    "lon": 12.375010000000001
                  },
                  {
                    "lat": 51.341640000000005,
                    "lon": 12.375240000000002
                  },
                  {
                    "lat": 51.34194,
                    "lon": 12.375490000000001
                  },
                  {
                    "lat": 51.3423,
                    "lon": 12.37588
                  },
                  {
                    "lat": 51.342580000000005,
                    "lon": 12.376220000000002
                  },
                  {
                    "lat": 51.342850000000006,
                    "lon": 12.37659
                  },
                  {
                    "lat": 51.34386000000001,
                    "lon": 12.378250000000001
                  },
                  {
                    "lat": 51.34416,
                    "lon": 12.3787
                  },
                  {
                    "lat": 51.34443,
                    "lon": 12.37911
                  },
                  {
                    "lat": 51.344750000000005,
                    "lon": 12.37953
                  },
                  {
                    "lat": 51.345400000000005,
                    "lon": 12.380180000000001
                  },
                  {
                    "lat": 51.345670000000005,
                    "lon": 12.38047
                  },
                  {
                    "lat": 51.345670000000005,
                    "lon": 12.38047
                  },
                  {
                    "lat": 51.345670000000005,
                    "lon": 12.38047
                  },
                  {
                    "lat": 51.346360000000004,
                    "lon": 12.381210000000001
                  },
                  {
                    "lat": 51.34713000000001,
                    "lon": 12.382040000000002
                  },
                  {
                    "lat": 51.350440000000006,
                    "lon": 12.386370000000001
                  },
                  {
                    "lat": 51.351710000000004,
                    "lon": 12.38807
                  },
                  {
                    "lat": 51.35183000000001,
                    "lon": 12.388230000000002
                  },
                  {
                    "lat": 51.352180000000004,
                    "lon": 12.38868
                  },
                  {
                    "lat": 51.352340000000005,
                    "lon": 12.38887
                  },
                  {
                    "lat": 51.35269,
                    "lon": 12.38926
                  },
                  {
                    "lat": 51.353060000000006,
                    "lon": 12.389660000000001
                  },
                  {
                    "lat": 51.35313000000001,
                    "lon": 12.38973
                  },
                  {
                    "lat": 51.35347,
                    "lon": 12.39009
                  },
                  {
                    "lat": 51.35421,
                    "lon": 12.390880000000001
                  },
                  {
                    "lat": 51.354580000000006,
                    "lon": 12.391280000000002
                  },
                  {
                    "lat": 51.355720000000005,
                    "lon": 12.392640000000002
                  },
                  {
                    "lat": 51.357490000000006,
                    "lon": 12.394770000000001
                  },
                  {
                    "lat": 51.357620000000004,
                    "lon": 12.39492
                  },
                  {
                    "lat": 51.35942000000001,
                    "lon": 12.39709
                  },
                  {
                    "lat": 51.360730000000004,
                    "lon": 12.39864
                  },
                  {
                    "lat": 51.360910000000004,
                    "lon": 12.398850000000001
                  },
                  {
                    "lat": 51.361290000000004,
                    "lon": 12.399220000000001
                  },
                  {
                    "lat": 51.36146,
                    "lon": 12.399370000000001
                  },
                  {
                    "lat": 51.361650000000004,
                    "lon": 12.399510000000001
                  },
                  {
                    "lat": 51.36245,
                    "lon": 12.400110000000002
                  },
                  {
                    "lat": 51.36301,
                    "lon": 12.40052
                  },
                  {
                    "lat": 51.363220000000005,
                    "lon": 12.40066
                  },
                  {
                    "lat": 51.363510000000005,
                    "lon": 12.40085
                  },
                  {
                    "lat": 51.363640000000004,
                    "lon": 12.400910000000001
                  },
                  {
                    "lat": 51.3639,
                    "lon": 12.40103
                  },
                  {
                    "lat": 51.36415,
                    "lon": 12.40112
                  },
                  {
                    "lat": 51.36415,
                    "lon": 12.40112
                  },
                  {
                    "lat": 51.36415,
                    "lon": 12.40112
                  },
                  {
                    "lat": 51.36444,
                    "lon": 12.40121
                  },
                  {
                    "lat": 51.36473,
                    "lon": 12.40126
                  },
                  {
                    "lat": 51.36496,
                    "lon": 12.401280000000002
                  },
                  {
                    "lat": 51.365280000000006,
                    "lon": 12.401290000000001
                  },
                  {
                    "lat": 51.36560000000001,
                    "lon": 12.40126
                  },
                  {
                    "lat": 51.36587,
                    "lon": 12.40122
                  },
                  {
                    "lat": 51.36614,
                    "lon": 12.401140000000002
                  },
                  {
                    "lat": 51.36634,
                    "lon": 12.40108
                  },
                  {
                    "lat": 51.36663,
                    "lon": 12.400950000000002
                  },
                  {
                    "lat": 51.36695,
                    "lon": 12.400810000000002
                  },
                  {
                    "lat": 51.368190000000006,
                    "lon": 12.40018
                  },
                  {
                    "lat": 51.36836,
                    "lon": 12.400100000000002
                  },
                  {
                    "lat": 51.36957,
                    "lon": 12.399560000000001
                  },
                  {
                    "lat": 51.36977,
                    "lon": 12.39948
                  },
                  {
                    "lat": 51.36994000000001,
                    "lon": 12.39943
                  },
                  {
                    "lat": 51.37022,
                    "lon": 12.399370000000001
                  },
                  {
                    "lat": 51.37033,
                    "lon": 12.399350000000002
                  },
                  {
                    "lat": 51.37057,
                    "lon": 12.39933
                  },
                  {
                    "lat": 51.370830000000005,
                    "lon": 12.39934
                  },
                  {
                    "lat": 51.371030000000005,
                    "lon": 12.39938
                  },
                  {
                    "lat": 51.371230000000004,
                    "lon": 12.39944
                  },
                  {
                    "lat": 51.371640000000006,
                    "lon": 12.399590000000002
                  },
                  {
                    "lat": 51.37182000000001,
                    "lon": 12.399680000000002
                  },
                  {
                    "lat": 51.372110000000006,
                    "lon": 12.399880000000001
                  },
                  {
                    "lat": 51.37223,
                    "lon": 12.399980000000001
                  },
                  {
                    "lat": 51.37239,
                    "lon": 12.400120000000001
                  },
                  {
                    "lat": 51.372550000000004,
                    "lon": 12.40027
                  },
                  {
                    "lat": 51.37272,
                    "lon": 12.40046
                  },
                  {
                    "lat": 51.372870000000006,
                    "lon": 12.40065
                  },
                  {
                    "lat": 51.37299,
                    "lon": 12.400820000000001
                  },
                  {
                    "lat": 51.3731,
                    "lon": 12.40098
                  },
                  {
                    "lat": 51.37323000000001,
                    "lon": 12.40121
                  },
                  {
                    "lat": 51.37339000000001,
                    "lon": 12.40154
                  },
                  {
                    "lat": 51.373490000000004,
                    "lon": 12.40177
                  },
                  {
                    "lat": 51.37359000000001,
                    "lon": 12.40201
                  },
                  {
                    "lat": 51.37369,
                    "lon": 12.4023
                  },
                  {
                    "lat": 51.37379000000001,
                    "lon": 12.40258
                  },
                  {
                    "lat": 51.373940000000005,
                    "lon": 12.403110000000002
                  },
                  {
                    "lat": 51.374050000000004,
                    "lon": 12.403590000000001
                  },
                  {
                    "lat": 51.37418,
                    "lon": 12.404230000000002
                  },
                  {
                    "lat": 51.37422,
                    "lon": 12.404570000000001
                  },
                  {
                    "lat": 51.37427,
                    "lon": 12.405030000000002
                  },
                  {
                    "lat": 51.374300000000005,
                    "lon": 12.405330000000001
                  },
                  {
                    "lat": 51.37431,
                    "lon": 12.405590000000002
                  },
                  {
                    "lat": 51.374320000000004,
                    "lon": 12.40591
                  },
                  {
                    "lat": 51.374320000000004,
                    "lon": 12.406220000000001
                  },
                  {
                    "lat": 51.374300000000005,
                    "lon": 12.4068
                  },
                  {
                    "lat": 51.37424000000001,
                    "lon": 12.407490000000001
                  },
                  {
                    "lat": 51.374210000000005,
                    "lon": 12.40788
                  },
                  {
                    "lat": 51.37382,
                    "lon": 12.4121
                  },
                  {
                    "lat": 51.37382,
                    "lon": 12.4121
                  },
                  {
                    "lat": 51.37373,
                    "lon": 12.413110000000001
                  },
                  {
                    "lat": 51.373630000000006,
                    "lon": 12.41416
                  },
                  {
                    "lat": 51.37323000000001,
                    "lon": 12.418500000000002
                  },
                  {
                    "lat": 51.37312000000001,
                    "lon": 12.41975
                  },
                  {
                    "lat": 51.37286,
                    "lon": 12.422630000000002
                  },
                  {
                    "lat": 51.37272,
                    "lon": 12.424050000000001
                  },
                  {
                    "lat": 51.37268,
                    "lon": 12.424700000000001
                  },
                  {
                    "lat": 51.372580000000006,
                    "lon": 12.42562
                  },
                  {
                    "lat": 51.372510000000005,
                    "lon": 12.42622
                  },
                  {
                    "lat": 51.37239,
                    "lon": 12.42706
                  },
                  {
                    "lat": 51.37228,
                    "lon": 12.427760000000001
                  },
                  {
                    "lat": 51.372080000000004,
                    "lon": 12.428790000000001
                  },
                  {
                    "lat": 51.371970000000005,
                    "lon": 12.429440000000001
                  },
                  {
                    "lat": 51.371750000000006,
                    "lon": 12.430470000000001
                  },
                  {
                    "lat": 51.37167,
                    "lon": 12.43078
                  },
                  {
                    "lat": 51.37167,
                    "lon": 12.43078
                  },
                  {
                    "lat": 51.37153000000001,
                    "lon": 12.43139
                  },
                  {
                    "lat": 51.37138,
                    "lon": 12.431970000000002
                  },
                  {
                    "lat": 51.370940000000004,
                    "lon": 12.433980000000002
                  },
                  {
                    "lat": 51.37051,
                    "lon": 12.43585
                  },
                  {
                    "lat": 51.370360000000005,
                    "lon": 12.436670000000001
                  },
                  {
                    "lat": 51.37028,
                    "lon": 12.43701
                  },
                  {
                    "lat": 51.37017,
                    "lon": 12.437410000000002
                  },
                  {
                    "lat": 51.370000000000005,
                    "lon": 12.43791
                  },
                  {
                    "lat": 51.36981,
                    "lon": 12.438410000000001
                  },
                  {
                    "lat": 51.36957,
                    "lon": 12.43903
                  },
                  {
                    "lat": 51.3693,
                    "lon": 12.439660000000002
                  },
                  {
                    "lat": 51.369080000000004,
                    "lon": 12.440140000000001
                  },
                  {
                    "lat": 51.36838,
                    "lon": 12.441640000000001
                  },
                  {
                    "lat": 51.368140000000004,
                    "lon": 12.442160000000001
                  },
                  {
                    "lat": 51.36787,
                    "lon": 12.442730000000001
                  },
                  {
                    "lat": 51.36697,
                    "lon": 12.44467
                  },
                  {
                    "lat": 51.36648,
                    "lon": 12.44574
                  },
                  {
                    "lat": 51.366290000000006,
                    "lon": 12.44621
                  },
                  {
                    "lat": 51.366170000000004,
                    "lon": 12.44658
                  },
                  {
                    "lat": 51.36605,
                    "lon": 12.446980000000002
                  },
                  {
                    "lat": 51.36598000000001,
                    "lon": 12.4473
                  },
                  {
                    "lat": 51.365880000000004,
                    "lon": 12.447980000000001
                  },
                  {
                    "lat": 51.365840000000006,
                    "lon": 12.448350000000001
                  },
                  {
                    "lat": 51.36582000000001,
                    "lon": 12.4487
                  },
                  {
                    "lat": 51.36581,
                    "lon": 12.449090000000002
                  },
                  {
                    "lat": 51.36583,
                    "lon": 12.449530000000001
                  },
                  {
                    "lat": 51.365840000000006,
                    "lon": 12.449660000000002
                  },
                  {
                    "lat": 51.36589000000001,
                    "lon": 12.45011
                  },
                  {
                    "lat": 51.36592,
                    "lon": 12.450380000000001
                  },
                  {
                    "lat": 51.365970000000004,
                    "lon": 12.450650000000001
                  },
                  {
                    "lat": 51.3661,
                    "lon": 12.451220000000001
                  },
                  {
                    "lat": 51.366170000000004,
                    "lon": 12.45147
                  },
                  {
                    "lat": 51.36634,
                    "lon": 12.452000000000002
                  },
                  {
                    "lat": 51.366580000000006,
                    "lon": 12.45264
                  },
                  {
                    "lat": 51.367450000000005,
                    "lon": 12.454910000000002
                  },
                  {
                    "lat": 51.36751,
                    "lon": 12.455060000000001
                  },
                  {
                    "lat": 51.36806000000001,
                    "lon": 12.45667
                  },
                  {
                    "lat": 51.36867,
                    "lon": 12.45832
                  },
                  {
                    "lat": 51.368950000000005,
                    "lon": 12.459040000000002
                  },
                  {
                    "lat": 51.36932,
                    "lon": 12.459980000000002
                  },
                  {
                    "lat": 51.36932,
                    "lon": 12.459990000000001
                  },
                  {
                    "lat": 51.36932,
                    "lon": 12.459990000000001
                  },
                  {
                    "lat": 51.37236000000001,
                    "lon": 12.4677
                  },
                  {
                    "lat": 51.37312000000001,
                    "lon": 12.46963
                  },
                  {
                    "lat": 51.37595,
                    "lon": 12.4768
                  },
                  {
                    "lat": 51.376090000000005,
                    "lon": 12.47714
                  },
                  {
                    "lat": 51.378980000000006,
                    "lon": 12.4845
                  }
                ],
                "length": 173
              },
              "steps": [],
              "routeShortName": "S4",
              "routeLongName": "S-Bahn S4",
              "wheelchairAccessible": 1,
              "duration": 1140,
              "alerts": [],
              "departureDelayedTime": 1740064980000,
              "arrivalDelayedTime": 1740066120000,
              "departureDelayedTimeHHMM": "16:23",
              "arrivalDelayedTimeHHMM": "16:42",
              "startTimeHHMM": "16:23",
              "endTimeHHMM": "16:42",
              "cancelled": false,
              "wheelchairBoardingVehicle": null
            },
            {
              "startTime": 1740066120000,
              "endTime": 1740066840000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 816,
              "mode": "WALK",
              "transitLeg": false,
              "route": "",
              "from": {
                "name": "Taucha (Leipzig)",
                "stopId": "8013093",
                "lon": 12.484471,
                "lat": 51.379017,
                "arrival": 1740066120000,
                "departure": 1740066120000,
                "zoneId": "168",
                "wheelchairBoarding": 1,
                "departureDelayedTime": 1740066120000,
                "arrivalDelayedTime": 1740066120000,
                "departureDelayedTimeHHMM": "16:42",
                "arrivalDelayedTimeHHMM": "16:42",
                "arrivalHHMM": "16:42",
                "departureHHMM": "16:42",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "to": {
                "name": "Destination",
                "lon": 12.48922,
                "lat": 51.37435,
                "arrival": 1740066840000,
                "departureDelayedTime": 1740066840000,
                "arrivalDelayedTime": 1740066840000,
                "arrivalDelayedTimeHHMM": "16:54",
                "arrivalHHMM": "16:54",
                "departureHHMM": "16:54",
                "arrivalDelay": 0,
                "departureDelay": 0,
                "cancelled": false
              },
              "legGeometry": {
                "points": [
                  {
                    "lat": 51.37901,
                    "lon": 12.484470000000002
                  },
                  {
                    "lat": 51.37903000000001,
                    "lon": 12.48445
                  },
                  {
                    "lat": 51.37924,
                    "lon": 12.484990000000002
                  },
                  {
                    "lat": 51.379250000000006,
                    "lon": 12.48498
                  },
                  {
                    "lat": 51.379340000000006,
                    "lon": 12.48521
                  },
                  {
                    "lat": 51.379360000000005,
                    "lon": 12.485190000000001
                  },
                  {
                    "lat": 51.37933,
                    "lon": 12.48512
                  },
                  {
                    "lat": 51.37921000000001,
                    "lon": 12.485230000000001
                  },
                  {
                    "lat": 51.37919,
                    "lon": 12.48526
                  },
                  {
                    "lat": 51.379180000000005,
                    "lon": 12.48529
                  },
                  {
                    "lat": 51.379160000000006,
                    "lon": 12.48545
                  },
                  {
                    "lat": 51.379160000000006,
                    "lon": 12.48558
                  },
                  {
                    "lat": 51.379160000000006,
                    "lon": 12.48573
                  },
                  {
                    "lat": 51.37912000000001,
                    "lon": 12.485790000000001
                  },
                  {
                    "lat": 51.37894000000001,
                    "lon": 12.485970000000002
                  },
                  {
                    "lat": 51.37903000000001,
                    "lon": 12.48619
                  },
                  {
                    "lat": 51.37897,
                    "lon": 12.48629
                  },
                  {
                    "lat": 51.378420000000006,
                    "lon": 12.4868
                  },
                  {
                    "lat": 51.378350000000005,
                    "lon": 12.48685
                  },
                  {
                    "lat": 51.378220000000006,
                    "lon": 12.486960000000002
                  },
                  {
                    "lat": 51.378080000000004,
                    "lon": 12.487100000000002
                  },
                  {
                    "lat": 51.37776,
                    "lon": 12.487400000000001
                  },
                  {
                    "lat": 51.37726000000001,
                    "lon": 12.487850000000002
                  },
                  {
                    "lat": 51.37722,
                    "lon": 12.48789
                  },
                  {
                    "lat": 51.37716,
                    "lon": 12.487940000000002
                  },
                  {
                    "lat": 51.377120000000005,
                    "lon": 12.48783
                  },
                  {
                    "lat": 51.37708000000001,
                    "lon": 12.48788
                  },
                  {
                    "lat": 51.377030000000005,
                    "lon": 12.48792
                  },
                  {
                    "lat": 51.376900000000006,
                    "lon": 12.488040000000002
                  },
                  {
                    "lat": 51.37624,
                    "lon": 12.488660000000001
                  },
                  {
                    "lat": 51.375620000000005,
                    "lon": 12.489230000000001
                  },
                  {
                    "lat": 51.375600000000006,
                    "lon": 12.489260000000002
                  },
                  {
                    "lat": 51.37559,
                    "lon": 12.489260000000002
                  },
                  {
                    "lat": 51.37541,
                    "lon": 12.48943
                  },
                  {
                    "lat": 51.37505,
                    "lon": 12.48845
                  },
                  {
                    "lat": 51.374930000000006,
                    "lon": 12.488560000000001
                  },
                  {
                    "lat": 51.37489000000001,
                    "lon": 12.48863
                  },
                  {
                    "lat": 51.37436,
                    "lon": 12.489120000000002
                  },
                  {
                    "lat": 51.374320000000004,
                    "lon": 12.489160000000002
                  }
                ],
                "length": 39
              },
              "steps": [
                {
                  "distance": 46,
                  "relativeDirection": "DEPART",
                  "streetName": "Taucha (Leipzig)",
                  "absoluteDirection": "NORTHEAST",
                  "lon": 12.4844547,
                  "lat": 51.3790332
                },
                {
                  "distance": 22,
                  "relativeDirection": "RIGHT",
                  "streetName": "path",
                  "absoluteDirection": "NORTHEAST",
                  "lon": 12.4849877,
                  "lat": 51.3792561
                },
                {
                  "distance": 58,
                  "relativeDirection": "HARD_LEFT",
                  "streetName": "underpass",
                  "absoluteDirection": "SOUTHWEST",
                  "lon": 12.4851939,
                  "lat": 51.3793657
                },
                {
                  "distance": 30,
                  "relativeDirection": "RIGHT",
                  "streetName": "Bahnhofstraße",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.4857308,
                  "lat": 51.3791677
                },
                {
                  "distance": 19,
                  "relativeDirection": "LEFT",
                  "streetName": "Weststraße",
                  "absoluteDirection": "NORTHEAST",
                  "lon": 12.4859759,
                  "lat": 51.3789482
                },
                {
                  "distance": 242,
                  "relativeDirection": "RIGHT",
                  "streetName": "Südstraße",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.4861973,
                  "lat": 51.3790364
                },
                {
                  "distance": 9,
                  "relativeDirection": "RIGHT",
                  "streetName": "Leipziger Straße",
                  "absoluteDirection": "SOUTHWEST",
                  "lon": 12.4879439,
                  "lat": 51.377163
                },
                {
                  "distance": 220,
                  "relativeDirection": "LEFT",
                  "streetName": "Karl-Marx-Straße",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.4878382,
                  "lat": 51.3771249
                },
                {
                  "distance": 79,
                  "relativeDirection": "RIGHT",
                  "streetName": "Friedrich-Engels-Straße",
                  "absoluteDirection": "SOUTHWEST",
                  "lon": 12.4894307,
                  "lat": 51.3754185
                },
                {
                  "distance": 95,
                  "relativeDirection": "LEFT",
                  "streetName": "path",
                  "absoluteDirection": "SOUTHEAST",
                  "lon": 12.4884558,
                  "lat": 51.3750563,
                  "alerts": []
                }
              ],
              "alerts": [],
              "rentedBike": false,
              "duration": 720,
              "departureDelayedTime": 1740066120000,
              "arrivalDelayedTime": 1740066840000,
              "departureDelayedTimeHHMM": "16:42",
              "arrivalDelayedTimeHHMM": "16:54",
              "startTimeHHMM": "16:42",
              "endTimeHHMM": "16:54",
              "cancelled": false
            }
          ],
          "otpVersion": "2.1",
          "startTimeHHMM": "16:19",
          "endTimeHHMM": "16:53",
          "durationHHMM": "00:35",
          "zoneInfo": {
            "zones": [
              "110",
              "168"
            ],
            "orderedZones": [
              "110",
              "168"
            ],
            "shortDistanceTicket": false
          },
          "index": 4
        }
      ]
    }
  }