import {
    SearchItemJson,
    NearBySearchResponse,
    BikeFreeSearchJson,
    BikeStationSearchJson,
    FlinksterSearchJson,
    Taxi,
    Mobistation,
    Stop,
    EscooterFreeSearchJson,
    EscooterStationSearchJson,
    TicketSeller,
    Flexa,
    Price,
  } from "./dto/nearbysearchResponse";
  
  /**
   * Main mapper to convert a raw JSON object into a SearchItemJson DTO.
   */
  export const toSearchItemJson = (json: any): SearchItemJson => 
    new SearchItemJson(
      json.id,
      json.name,
      parseFloat(json.lat),
      parseFloat(json.lon),
      json.type,
      json.source,
      json.provider,
      toSearchItemData(json.data),
      json.prov_id,
      json.mobistation_id,
      json.dist_to_center,
    );
  
  /**
   * Determines the correct DTO for the "data" property based on available fields.
   */
  export const toSearchItemData = (
  json: any
): BikeFreeSearchJson | BikeStationSearchJson | FlinksterSearchJson | Taxi | Mobistation | Stop | EscooterFreeSearchJson | EscooterStationSearchJson | TicketSeller | Flexa => {
  if (typeof json === "undefined" || json === null || typeof json !== "object" || json.vehicletype == null || json.vehicletype === null || typeof json.vehicletype === "undefined") {
    return json;
}
  if (json.vehicletype === "bike") {
    if (typeof json.bike_type !== "undefined") {
      // A free-floating bike has a bike_type property
      return toBikeFreeSearchJson(json);
    }
    if (typeof json.num_spaces !== "undefined") {
      // A bike station will have properties like num_spaces
      return toBikeStationSearchJson(json);
    }
  } else if (json.vehicletype === "car") {
    // Flinkster search items use vehicletype "car"
    return toFlinksterSearchJson(json);
  } else if (json.phone) {
    return toTaxi(json);
  } else if (typeof json.charging_points !== "undefined") {
    return toMobistation(json);
  } else if (typeof json.zone_id === "string" && typeof json.wheelchair_boarding !== "undefined") {
    return toStop(json);
  } else if (json.vehicletype === "escooter") {
    if (json.code) {
      return toEscooterFreeSearchJson(json);
    }
    if (typeof json.num_spaces !== "undefined") {
      return toEscooterStationSearchJson(json);
    }
  } else if (typeof json.addressExact === "boolean") {
    // TicketSeller items contain addressExact
    return toTicketSeller(json);
  } else if (typeof json.flexaId !== "undefined") {
    return toFlexa(json);
  }
  // Fallback: return json directly (or throw an error)
  return json;
};
  
  /* ======================
     Variant Mapping Functions
     ====================== */
  
  /** Maps JSON to BikeFreeSearchJson */
  export const toBikeFreeSearchJson = (json: any): BikeFreeSearchJson => ({
    uid: json.uid,
    state: json.state,
    active: json.active,
    number: json.number,
    bike_type: json.bike_type,
    lock_types: json.lock_types,
    vehicletype: json.vehicletype,
    bikeTypeName: json.bikeTypeName,
    boardcomputer: json.boardcomputer,
    electric_lock: json.electric_lock,
  });
  
  /** Maps JSON to BikeStationSearchJson */
  export const toBikeStationSearchJson = (json: any): BikeStationSearchJson => ({
    uid: json.uid,
    number: json.number,
    num_spaces: json.num_spaces,
    vehicletype: json.vehicletype,
    num_vehicles: json.num_vehicles,
    terminal_type: json.terminal_type,
    num_free_spaces: json.num_free_spaces,
    num_available_vehicles: json.num_available_vehicles,
  });
  
  /** Maps JSON to FlinksterSearchJson */
  export const toFlinksterSearchJson = (json: any): FlinksterSearchJson => ({
    address: {
      zip: json.address.zip,
      city: json.address.city,
      number: json.address.number,
      street: json.address.street,
    },
    attributes: {
      parking: {
        description: json.attributes?.parking?.description,
      },
      locationnote: {
        description: json.attributes?.locationnote?.description,
      },
    },
    vehicletype: json.vehicletype,
    providerAreaId: json.providerAreaId,
  });
  
  /** Maps JSON to Taxi */
  export const toTaxi = (json: any): Taxi => ({
    phone: json.phone,
  });
  
  /** Maps JSON to Mobistation */
  export const toMobistation = (json: any): Mobistation => ({
    address: {
      city: json.address.city,
      street: json.address.street,
      postalcode: json.address.postalcode,
    },
    stop_id: json.stop_id,
    bike_racks: json.bike_racks,
    parking_spaces: json.parking_spaces,
    charging_points: json.charging_points,
    taxi_station_id: json.taxi_station_id,
    car_sharing_places: json.car_sharing_places,
    escooter_station_id: json.escooter_station_id,
    nextbike_station_id: json.nextbike_station_id,
    teilauto_station_id: json.teilauto_station_id,
    e_car_sharing_places: json.e_car_sharing_places,
    disabled_parking_spaces: json.disabled_parking_spaces,
    escooter_station_information: json.escooter_station_information,
    nextbike_station_information: json.nextbike_station_information,
    teilauto_station_information: json.teilauto_station_information,
  });
  
  /** Maps JSON to Stop */
  export const toStop = (json: any): Stop => ({
    address: {
      city: json.address.city,
      state: json.address.state,
      county: json.address.county,
      district: json.address.district,
      postalcode: json.address.postalcode,
    },
    zone_id: json.zone_id,
    wheelchair_boarding: json.wheelchair_boarding,
  });
  
  /** Maps JSON to EscooterFreeSearchJson */
  export const toEscooterFreeSearchJson = (json: any): EscooterFreeSearchJson => ({
    uid: json.uid,
    code: json.code,
    price: toPrice(json.price),
    zone_id: json.zone_id,
    provider: json.provider,
    iotVendor: json.iotVendor,
    vehicletype: json.vehicletype,
    licencePlate: json.licencePlate,
    battery_level: json.battery_level,
  });
  
  /** Helper to map price objects */
  export const toPrice = (json: any): Price => ({
    price_id: json.price_id,
    start_price: json.start_price,
    price_per_min: json.price_per_min,
  });
  
  /** Maps JSON to EscooterStationSearchJson */
  export const toEscooterStationSearchJson = (json: any): EscooterStationSearchJson => ({
    provider: json.provider, // assuming provider is an array of "voi" or "tier"
    num_spaces: json.num_spaces,
    vehicletype: json.vehicletype,
    num_vehicles: json.num_vehicles,
    num_free_spaces: json.num_free_spaces,
    num_available_vehicles: json.num_available_vehicles,
  });
  
  /** Maps JSON to TicketSeller */
  export const toTicketSeller = (json: any): TicketSeller => ({
    city: json.city,
    type: json.type,
    notes: json.notes ? { machineNumber: json.notes.machineNumber } : null,
    street: json.street,
    postcode: json.postcode,
    housenumber: json.housenumber,
    addressExact: json.addressExact,
  });
  
  /** Maps JSON to Flexa */
  export const toFlexa = (json: any): Flexa => ({
    address: {
      city: json.address.city,
      state: json.address.state,
      county: json.address.county,
      district: json.address.district,
      postalcode: json.address.postalcode,
    },
    flexaId: json.flexaId,
    flexaName: json.flexaName,
    suspendedTo: json.suspendedTo,
    suspendedFrom: json.suspendedFrom,
    transferToPublicTransport: json.transferToPublicTransport,
  });
  
  /* ======================
     Mapper for the overall response
     ====================== */
  // export const toNearBySearchResponse = (json: any): NearBySearchResponse => 
  //   new NearBySearchResponse((json.items || []).map((item: any) => toSearchItemJson(item)));
  

  export const toNearBySearchResponse = (data: any): NearBySearchResponse => {
    if(Array.isArray(data)){
        return new NearBySearchResponse(data.map(toSearchItemJson));
    } else if (data && data.items && Array.isArray(data.items)){
        return new NearBySearchResponse(data.items.map(toSearchItemJson));
    } else {
        console.error("toNearBySearchResponse: Invalid data format", data);
        return new NearBySearchResponse([]); // Return an empty response, or handle the error as needed.
    }
};