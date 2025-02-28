import {
    toSearchItemJson,
    toNearBySearchResponse,
    toBikeFreeSearchJson,
    toBikeStationSearchJson,
    toFlinksterSearchJson,
    toTaxi,
    toMobistation,
    toStop,
    toEscooterFreeSearchJson,
    toEscooterStationSearchJson,
    toTicketSeller,
    toFlexa,
  } from "@/api/nearbysearchService/mappers";
  import { NearBySearchResponse, SearchItemJson, Price } from "@/api/nearbysearchService/dto/nearbysearchResponse";
  
  describe("nearBySearchService Mappers", () => {
    // Sample mock objects for each variant
  
    const rawBikeFree = {
      uid: 12345,
      state: "ok",
      active: true,
      number: "BF-001",
      bike_type: 71,
      lock_types: ["frame_lock"],
      vehicletype: "bike",
      bikeTypeName: "Standard Bike",
      boardcomputer: 987654321,
      electric_lock: true,
    };
  
    const rawBikeStation = {
      uid: 67890,
      number: "BS-001",
      num_spaces: 10,
      vehicletype: "bike",
      num_vehicles: 4,
      terminal_type: "station",
      num_free_spaces: 6,
      num_available_vehicles: 4,
    };
  
    const rawFlinkster = {
      address: {
        zip: "04109",
        city: "Leipzig",
        number: "7",
        street: "Willy-Brandt-Platz",
      },
      attributes: {
        parking: { description: "10 parking spots available" },
        locationnote: { description: "Near main station" },
      },
      vehicletype: "car",
      providerAreaId: "409668",
    };
  
    const rawTaxi = {
      phone: "0341 4884",
    };
  
    const rawMobistation = {
      address: {
        city: "Leipzig",
        street: "Wintergartenstraße",
        postalcode: "04315",
      },
      stop_id: "gtfs-mdv-0012705",
      bike_racks: 5,
      parking_spaces: 20,
      charging_points: 2,
      taxi_station_id: null,
      car_sharing_places: 0,
      escooter_station_id: null,
      nextbike_station_id: null,
      teilauto_station_id: null,
      e_car_sharing_places: null,
      disabled_parking_spaces: null,
      escooter_station_information: null,
      nextbike_station_information: null,
      teilauto_station_information: null,
    };
  
    const rawStop = {
      address: {
        city: "Leipzig",
        state: "Sachsen",
        county: "Leipzig",
        district: "Zentrum-Ost",
        postalcode: "04103",
      },
      zone_id: "110",
      wheelchair_boarding: 1,
    };
  
    const rawEscooterFree = {
      uid: "e168cddb-8fd5-42c8-ad96-0c46d9d465c7",
      code: "373666",
      price: {
        price_id: "price123",
        start_price: "1.00",
        price_per_min: "0.22",
      },
      zone_id: "LEIPZIG",
      provider: "tier",
      iotVendor: "ninebot_g3",
      vehicletype: "escooter",
      licencePlate: "247IIC",
      battery_level: 86,
    };
  
    const rawEscooterStation = {
      provider: ["voi", "tier"],
      num_spaces: 6,
      vehicletype: "escooter",
      num_vehicles: 3,
      num_free_spaces: 3,
      num_available_vehicles: 3,
    };
  
    const rawTicketSeller = {
      city: "Leipzig",
      type: "ticket-machine",
      notes: { machineNumber: 1151 },
      street: "Paul-List-Straße",
      postcode: "04103",
      housenumber: "5",
      addressExact: true,
    };
  
    const rawFlexa = {
      address: {
        city: "Leipzig",
        state: "Sachsen",
        county: "Leipzig",
        district: "Zentrum-Ost",
        postalcode: "04103",
      },
      flexaId: 511,
      flexaName: "SC 2",
      suspendedTo: "2023-08-25T00:00:00Z",
      suspendedFrom: "2023-08-25T00:00:00Z",
      transferToPublicTransport: 4,
    };
  
    const rawSearchItemBikeFree = {
      id: "bikefree-1",
      name: "Bike Free 1",
      lat: "51.35",
      lon: "12.35",
      type: "free_floating",
      source: "nextbike",
      provider: "nextbike Leipzig",
      data: rawBikeFree,
      prov_id: "nextbike-nextbike Leipzig",
      mobistation_id: "null",
    };
  
    const rawSearchItemBikeStation = {
      id: "bikestation-1",
      name: "Bike Station 1",
      lat: "51.36",
      lon: "12.36",
      type: "station",
      source: "nextbike",
      provider: "nextbike Leipzig",
      data: rawBikeStation,
      prov_id: "nextbike-nextbike Leipzig",
      mobistation_id: "null",
    };
  
    // Additional combined response mock that contains multiple items
    const rawNearBySearchResponse = {
      items: [
        rawSearchItemBikeFree,
        {
          ...rawSearchItemBikeFree,
          id: "escooterfree-1",
          name: "Escooter Free 1",
          lat: "51.37",
          lon: "12.37",
          type: "free_floating",
          source: "tier",
          provider: "tier",
          data: rawEscooterFree,
          prov_id: "tier-tier",
          mobistation_id: "null",
        },
        {
          ...rawSearchItemBikeFree,
          id: "ticketSeller-1",
          name: "Ticket Seller 1",
          lat: "51.38",
          lon: "12.38",
          type: "ticket_seller",
          source: "ticket-seller",
          provider: "ticket-seller",
          data: rawTicketSeller,
          prov_id: "ticket-seller-ticket-seller",
          mobistation_id: "null",
        },
      ],
    };
  
    it("should map raw BikeFreeSearchJson data correctly", () => {
      const result = toBikeFreeSearchJson(rawBikeFree);
      expect(result).toEqual({
        uid: rawBikeFree.uid,
        state: rawBikeFree.state,
        active: rawBikeFree.active,
        number: rawBikeFree.number,
        bike_type: rawBikeFree.bike_type,
        lock_types: rawBikeFree.lock_types,
        vehicletype: rawBikeFree.vehicletype,
        bikeTypeName: rawBikeFree.bikeTypeName,
        boardcomputer: rawBikeFree.boardcomputer,
        electric_lock: rawBikeFree.electric_lock,
      });
    });
  
    it("should map raw BikeStationSearchJson data correctly", () => {
      const result = toBikeStationSearchJson(rawBikeStation);
      expect(result).toEqual({
        uid: rawBikeStation.uid,
        number: rawBikeStation.number,
        num_spaces: rawBikeStation.num_spaces,
        vehicletype: rawBikeStation.vehicletype,
        num_vehicles: rawBikeStation.num_vehicles,
        terminal_type: rawBikeStation.terminal_type,
        num_free_spaces: rawBikeStation.num_free_spaces,
        num_available_vehicles: rawBikeStation.num_available_vehicles,
      });
    });
  
    it("should map raw FlinksterSearchJson data correctly", () => {
      const result = toFlinksterSearchJson(rawFlinkster);
      expect(result).toEqual({
        address: {
          zip: rawFlinkster.address.zip,
          city: rawFlinkster.address.city,
          number: rawFlinkster.address.number,
          street: rawFlinkster.address.street,
        },
        attributes: {
          parking: { description: rawFlinkster.attributes.parking.description },
          locationnote: { description: rawFlinkster.attributes.locationnote.description },
        },
        vehicletype: rawFlinkster.vehicletype,
        providerAreaId: rawFlinkster.providerAreaId,
      });
    });
  
    it("should map raw Taxi data correctly", () => {
      const result = toTaxi(rawTaxi);
      expect(result).toEqual({
        phone: rawTaxi.phone,
      });
    });
  
    it("should map raw Mobistation data correctly", () => {
      const result = toMobistation(rawMobistation);
      expect(result).toEqual({
        address: {
          city: rawMobistation.address.city,
          street: rawMobistation.address.street,
          postalcode: rawMobistation.address.postalcode,
        },
        stop_id: rawMobistation.stop_id,
        bike_racks: rawMobistation.bike_racks,
        parking_spaces: rawMobistation.parking_spaces,
        charging_points: rawMobistation.charging_points,
        taxi_station_id: rawMobistation.taxi_station_id,
        car_sharing_places: rawMobistation.car_sharing_places,
        escooter_station_id: rawMobistation.escooter_station_id,
        nextbike_station_id: rawMobistation.nextbike_station_id,
        teilauto_station_id: rawMobistation.teilauto_station_id,
        e_car_sharing_places: rawMobistation.e_car_sharing_places,
        disabled_parking_spaces: rawMobistation.disabled_parking_spaces,
        escooter_station_information: rawMobistation.escooter_station_information,
        nextbike_station_information: rawMobistation.nextbike_station_information,
        teilauto_station_information: rawMobistation.teilauto_station_information,
      });
    });
  
    it("should map raw Stop data correctly", () => {
      const result = toStop(rawStop);
      expect(result).toEqual({
        address: {
          city: rawStop.address.city,
          state: rawStop.address.state,
          county: rawStop.address.county,
          district: rawStop.address.district,
          postalcode: rawStop.address.postalcode,
        },
        zone_id: rawStop.zone_id,
        wheelchair_boarding: rawStop.wheelchair_boarding,
      });
    });
  
    it("should map raw EscooterFreeSearchJson data correctly", () => {
      const result = toEscooterFreeSearchJson(rawEscooterFree);
      expect(result).toEqual({
        uid: rawEscooterFree.uid,
        code: rawEscooterFree.code,
        price: {
          price_id: rawEscooterFree.price.price_id,
          start_price: rawEscooterFree.price.start_price,
          price_per_min: rawEscooterFree.price.price_per_min,
        } as Price,
        zone_id: rawEscooterFree.zone_id,
        provider: rawEscooterFree.provider,
        iotVendor: rawEscooterFree.iotVendor,
        vehicletype: rawEscooterFree.vehicletype,
        licencePlate: rawEscooterFree.licencePlate,
        battery_level: rawEscooterFree.battery_level,
      });
    });
  
    it("should map raw EscooterStationSearchJson data correctly", () => {
      const result = toEscooterStationSearchJson(rawEscooterStation);
      expect(result).toEqual({
        provider: rawEscooterStation.provider,
        num_spaces: rawEscooterStation.num_spaces,
        vehicletype: rawEscooterStation.vehicletype,
        num_vehicles: rawEscooterStation.num_vehicles,
        num_free_spaces: rawEscooterStation.num_free_spaces,
        num_available_vehicles: rawEscooterStation.num_available_vehicles,
      });
    });
  
    it("should map raw TicketSeller data correctly", () => {
      const result = toTicketSeller(rawTicketSeller);
      expect(result).toEqual({
        city: rawTicketSeller.city,
        type: rawTicketSeller.type,
        notes: { machineNumber: rawTicketSeller.notes.machineNumber },
        street: rawTicketSeller.street,
        postcode: rawTicketSeller.postcode,
        housenumber: rawTicketSeller.housenumber,
        addressExact: rawTicketSeller.addressExact,
      });
    });
  
    it("should map raw Flexa data correctly", () => {
      const result = toFlexa(rawFlexa);
      expect(result).toEqual({
        address: {
          city: rawFlexa.address.city,
          state: rawFlexa.address.state,
          county: rawFlexa.address.county,
          district: rawFlexa.address.district,
          postalcode: rawFlexa.address.postalcode,
        },
        flexaId: rawFlexa.flexaId,
        flexaName: rawFlexa.flexaName,
        suspendedTo: rawFlexa.suspendedTo,
        suspendedFrom: rawFlexa.suspendedFrom,
        transferToPublicTransport: rawFlexa.transferToPublicTransport,
      });
    });
  
    it("should map a complete raw nearby search response correctly", () => {
      const result: NearBySearchResponse = toNearBySearchResponse(rawNearBySearchResponse);
      expect(result.items.length).toBe(rawNearBySearchResponse.items.length);
  
      // Check that the first item (bike free) is mapped as expected.
      const mappedBikeFree: SearchItemJson = toSearchItemJson(rawSearchItemBikeFree);
      expect(result.items[0]).toEqual(mappedBikeFree);
    });
  });
  