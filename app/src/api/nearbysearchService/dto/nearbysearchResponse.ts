import { GeoJsonConvertible } from "@/types/GeoJsonConvertible";
import { NearbySearchItemType } from "@/types/nearbysearch/NearbySearchItemType";
import { plainToInstance, Transform } from 'class-transformer';
import { Feature, Point, FeatureCollection, Position } from "geojson";


/**
 * The overall response for a nearby search (an array of search items).
 */

export class NearBySearchResponse extends GeoJsonConvertible {
  constructor(public searchItemsJson: SearchItemJson[]) {
    super();
  }

  toGeoJsonFeatures(): Feature<Point>[] {
    return this.searchItemsJson.map((item) => item.toGeoJsonFeature());
  }

  toGeoJson(): FeatureCollection<Point> {
    const geojson: FeatureCollection<Point> = {
      type: 'FeatureCollection',
      features: this.toGeoJsonFeatures(),
    };
    return geojson;
  }
}

export class SearchItemJson extends GeoJsonConvertible {
  // The Transform decorator checks the parent object (obj) for the type field and returns
  // an instance of the appropriate class for the "data" field.
  @Transform(({ value, obj }) => {
    switch (obj.type) {
      case "free_floating":
        return plainToInstance(BikeFreeSearchJson, value);
      case "station":
        return plainToInstance(BikeStationSearchJson, value);
      case "stop":
        return plainToInstance(Stop, value);
      case "mobistation":
        return plainToInstance(Mobistation, value);
      case "flinkster":
        return plainToInstance(FlinksterSearchJson, value);
      case "taxi":
        return plainToInstance(Taxi, value);
      case "escooter":
        return plainToInstance(EscooterFreeSearchJson, value);
      case "escooter_station":
        return plainToInstance(EscooterStationSearchJson, value);
      case "ticket-seller":
        return plainToInstance(TicketSeller, value);
      case "flexa":
        return plainToInstance(Flexa, value);
      default:
        return value; 
    }
  }, { toClassOnly: true })
  public data: any;

  constructor(
    public id: string,
    public name: string,
    public lat: number,
    public lon: number,
    public type: NearbySearchItemType,
    public source: string,
    public provider: string,
    data: BikeFreeSearchJson | BikeStationSearchJson | Stop | Mobistation | FlinksterSearchJson | Taxi | EscooterFreeSearchJson | EscooterStationSearchJson | TicketSeller | Flexa,
    public prov_id: string,
    public mobistation_id: string,
    public dist_to_center: number
  ) {
    super();
    this.data = data;
  }

  toGeoJsonFeature(): Feature<Point> {
    const feature: Feature<Point> = {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [this.lon, this.lat] as Position,
      },
      properties: {
        name: this.name,
        type: this.type,
        item: this,
      },
    };
    return feature;
  }

  toGeoJson(): Feature<Point> {
    return this.toGeoJsonFeature();
  }
}

export class BikeFreeSearchJson { //For a free-floating bike 
  constructor(
    public uid: number | null,
    public state: "ok",
    public active: boolean,
    public number: string,
    public bike_type: number,
    public lock_types: string[],
    public vehicletype: "bike",
    public bikeTypeName: string,
    public boardcomputer: number,
    public electric_lock: boolean
  ) {
  }
}

export class BikeStationSearchJson {    //For a bike station (when the source is Nextbike and type is "station")
  constructor(
    public uid: number,
    public number: string,
    public num_spaces: number,
    public num_vehicles: number,
    public vehicletype: "bike",
    public terminal_type: string,
    public num_free_spaces: number,
    public num_available_vehicles: number
  ) {
  }
}

export class FlinksterSearchJson {    //For a Flinkster search item
  constructor(
    public address: FlinksterAddress,
    public attributes: FlinksterAttributes,
    public vehicletype: "car",
    public providerAreaId: string
  ) {
  }
}

export class FlinksterAddress {
  zip: string;
  city: string;
  number: string;
  street: string;

  constructor(zip: string, city: string, number: string, street: string) {
    this.zip = zip;
    this.city = city;
    this.number = number;
    this.street = street;
  }
}

export class FlinksterAttributes {
  parking: { description: string };
  locationnote: { description: string };

  constructor(parkingDescription: string, locationNoteDescription: string) {
    this.parking = { description: parkingDescription };
    this.locationnote = { description: locationNoteDescription };
  }
}

/**
 * taxi-based items.
 */
export class Taxi {
  phone: string;

  constructor(phone: string) {
    this.phone = phone;
  }
}
  /**
 * mobistation items
 */
export class Mobistation {
  constructor(
    public address: MobistationAddress,
    public stop_id: string | null,
    public bike_racks: number | null,
    public parking_spaces: number | null,
    public charging_points: number,
    public taxi_station_id: string | null,
    public car_sharing_places: number,
    public escooter_station_id: string | null,
    public nextbike_station_id: string | null,
    public teilauto_station_id: string | null,
    public e_car_sharing_places: number | null,
    public disabled_parking_spaces: number | null,
    public escooter_station_information: any | null,
    public nextbike_station_information: any | null,
    public teilauto_station_information: any | null
  ) {
  }
}

export class MobistationAddress {
  city: string;
  street: string;
  postalcode: string;

  constructor(city: string, street: string, postalcode: string) {
    this.city = city;
    this.street = street;
    this.postalcode = postalcode;
  }
}

/**
 * For a public transport stop (when the source is "gtfs-mdv").
 */
export class Stop {
  constructor(
    public address: StopAddress,
    public zone_id: string,
    public wheelchair_boarding: 0 | 1 | 2 | null
  ) {
  }
}

export class StopAddress {
  constructor(
    public city: string,
    public state: string,
    public county: string,
    public district: string,
    public postalcode: string
  ) {
  }
}

/**
 * For an e-scooter that is free-floating.
 */
export class EscooterFreeSearchJson {
  constructor(
    public uid: string,
    public code: string,
    public price: Price,
    public zone_id: string,
    public provider: string,
    public iotVendor: string,
    public vehicletype: "escooter",
    public licencePlate: string,
    public battery_level: number
  ) {
  }
}

export class Price {   
  price_id?: string;
  start_price: string;
  price_per_min: string;

  constructor(start_price: string, price_per_min: string, price_id?: string) {
    this.price_id = price_id;
    this.start_price = start_price;
    this.price_per_min = price_per_min;
  }
}

/**
 * For an e-scooter station.
 */
export class EscooterStationSearchJson {
  constructor(
    public provider: ("voi" | "tier")[],
    public num_spaces: number,
    public vehicletype: "escooter",
    public num_vehicles: number,
    public num_free_spaces: number,
    public num_available_vehicles?: number
  ) {
  }
}

/**
 * For ticket seller items.
 */
export type TicketSellerType =
  | "ticket-machine"
  | "lvb-services"
  | "shop"
  | "konsum"
  | "service-point";

export class TicketSellerNotes {  
  machineNumber: number;

  constructor(machineNumber: number) {
    this.machineNumber = machineNumber;
  }
}

export class TicketSeller {
  constructor(
    public city: string,
    public type: TicketSellerType,
    public notes: TicketSellerNotes | null,
    public street: string,
    public postcode: string,
    public housenumber: string,
    public addressExact: boolean
  ) {
  }
}

export class Flexa {    //For Flexa items.
  constructor(
    public address: FlexaAddress,
    public flexaId: number,
    public flexaName: string,
    public suspendedTo: string | null,
    public suspendedFrom: string | null,
    public transferToPublicTransport: number | null
  ) {
  }
}
export class FlexaAddress {
  constructor(
    public city: string,
    public state: string,
    public county: string,
    public district: string,
    public postalcode: string
  ) {
  }
}
