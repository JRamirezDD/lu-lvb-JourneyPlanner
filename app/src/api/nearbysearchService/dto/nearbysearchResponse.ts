/**
 * Base DTO for the default search item.
 */
export interface SearchItemJson {
    id: string;
    name: string;
    lat: number; // latitude (see below)
    lon: number; // longitude (see below)
    type: string; // e.g. "station", "stop", "free_floating", etc.
    source: string; // e.g. "nextbike", "taxi", etc.
    provider: string; // e.g. "nextbike Leipzig"
    /**
     * Data required to book or rent a vehicle. This can be one of the following types.
     */
    data:
      | BikeFreeSearchJson
      | BikeStationSearchJson
      | FlinksterSearchJson
      | Taxi
      | Mobistation
      | Stop
      | EscooterFreeSearchJson
      | EscooterStationSearchJson
      | TicketSeller
      | Flexa;
    prov_id: string;
    mobistation_id: string;
  }
  
  /** Latitude: number between -90 and 90 */
  export type Latitude = number;
  
  /** Longitude: number between -180 and 180 */
  export type Longitude = number;
  
  /* ***************************************************************
     Variant DTOs for the "data" property
     *************************************************************** */
  
  /**
   * For a free-floating bike (or a bike that is not part of a station)
   */
  export interface BikeFreeSearchJson {
    uid: number | null;
    state: "ok";
    active: boolean;
    number: string;
    bike_type: number;
    lock_types: string[];
    vehicletype: "bike";
    bikeTypeName: string;
    boardcomputer: number;
    electric_lock: boolean;
  }
  
  /**
   * For a bike station (when the source is Nextbike and type is "station")
   */
  export interface BikeStationSearchJson {
    uid: number;
    number: string;
    num_spaces: number;
    vehicletype: "bike";
    num_vehicles: number;
    terminal_type: string;
    num_free_spaces: number;
    num_available_vehicles: number;
  }
  
  /**
   * For a Flinkster search item
   */
  export interface FlinksterSearchJson {
    address: FlinksterAddress;
    attributes: FlinksterAttributes;
    vehicletype: "car"; // as per enum in swagger
    providerAreaId: string;
  }
  
  export interface FlinksterAddress {
    zip: string;
    city: string;
    number: string;
    street: string;
  }
  
  export interface FlinksterAttributes {
    parking: {
      description: string;
    };
    locationnote: {
      description: string;
    };
  }
  
  /**
   * For taxi-based items.
   */
  export interface Taxi {
    phone: string;
  }
  
  /**
   * For mobistation items (often used when the source is "lvb").
   */
  export interface Mobistation {
    address: MobistationAddress;
    stop_id: string | null;
    bike_racks: number | null;
    parking_spaces: number | null;
    charging_points: number;
    taxi_station_id: string | null;
    car_sharing_places: number;
    escooter_station_id: string | null;
    nextbike_station_id: string | null;
    teilauto_station_id: string | null;
    e_car_sharing_places: number | null;
    disabled_parking_spaces: number | null;
    escooter_station_information: any | null;
    nextbike_station_information: any | null;
    teilauto_station_information: any | null;
  }
  
  export interface MobistationAddress {
    city: string;
    street: string;
    postalcode: string;
  }
  
  /**
   * For a public transport stop (when the source is "gtfs-mdv").
   */
  export interface Stop {
    address: StopAddress;
    zone_id: string;
    wheelchair_boarding: 0 | 1 | 2 | null;
  }
  
  export interface StopAddress {
    city: string;
    state: string;
    county: string;
    district: string;
    postalcode: string;
  }
  
  /**
   * For an e-scooter that is free-floating.
   */
  export interface EscooterFreeSearchJson {
    uid: string;
    code: string;
    price: Price;
    zone_id: string;
    provider: string; // note: expected value “tier,voi”
    iotVendor: string;
    vehicletype: "escooter";
    licencePlate: string;
    battery_level: number;
  }
  
  export interface Price {
    price_id?: string;
    start_price: string;
    price_per_min: string;
  }
  
  /**
   * For an e-scooter station.
   */
  export interface EscooterStationSearchJson {
    provider: ("voi" | "tier")[];
    num_spaces: number;
    vehicletype: "escooter";
    num_vehicles: number;
    num_free_spaces: number;
    num_available_vehicles?: number;
  }
  
  /**
   * For ticket seller items.
   */
  export type TicketSellerType = "ticket-machine" | "lvb-services" | "shop" | "konsum" | "service-point";
  
  export interface TicketSellerNotes {
    machineNumber: number;
  }
  
  export interface TicketSeller {
    city: string;
    type: TicketSellerType;
    notes: TicketSellerNotes | null;
    street: string;
    postcode: string;
    housenumber: string;
    addressExact: boolean;
  }
  
  /**
   * For Flexa items.
   */
  export interface Flexa {
    address: FlexaAddress;
    flexaId: number;
    flexaName: string;
    suspendedTo: string | null; // date-time string
    suspendedFrom: string | null; // date-time string
    transferToPublicTransport: number | null;
  }
  
  export interface FlexaAddress {
    city: string;
    state: string;
    county: string;
    district: string;
    postalcode: string;
  }
  
  /* ***************************************************************
     Overall response DTO
     *************************************************************** */
  
  /**
   * The overall response for a nearby search (an array of search items).
   */
  export interface NearBySearchResponse {
    items: SearchItemJson[];
  }
  