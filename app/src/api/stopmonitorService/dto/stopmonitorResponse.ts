import { GeoJsonConvertible } from "@/types/GeoJsonConvertible";

export class MonitorItem extends GeoJsonConvertible {
    constructor(
        public arrival_time: string,
        public date: string,
        public departure_time: string,
        public departure_date: string,
        public trip_id: string,
        public stop_id: string,
        public parent_id: string,
        public route_id: string,
        public trip_headsign: string,
        public route_color: string,
        public directionId: string,
        public agencyName: string,
        public trip_cancelled: boolean,
        public stop_cancelled: boolean,
        public waiting_time: number,
        public dep_waiting_time: number,
        public line: string,
        public transport_type: string,
        public trip_accessible_scheduled?: boolean,
        public trip_accessible?: boolean,
        public track_scheduled?: string,
        public track?: string,
        public delay_time?: number,
        public departure_delay?: number,
        public alerts?: Alert[]
    ) {
        super();
    }

    toGeoJson(): string {
        throw new Error("Not Implemented");
    }
}

export class MonitorResponse extends GeoJsonConvertible {
    constructor(public items: MonitorItem[]) {
        super();
    }

    toGeoJson(): string {
        throw new Error("Not Implemented");
    }
}

export class DirectionInfo extends GeoJsonConvertible {
    constructor(
        public directionId: string,
        public agencyName: string,
        public line: string,
        public route_color: string,
        public directionName: string,
        public transport_type: string,
        public headsigns: string[]
    ) {
        super();
    }

    toGeoJson(): string {
        throw new Error("Not Implemented");
    }
}

export class DirectionResponse extends GeoJsonConvertible {
    constructor(public items: DirectionInfo[]) {
        super();
    }

    toGeoJson(): string {
        throw new Error("Not Implemented");
    }
}

export class StopsItem extends GeoJsonConvertible {
    constructor(
        public stop_name: string,
        public stop_id: string,
        public lat: number,
        public lon: number,
        public priority: number
    ) {
        super();
    }

    toGeoJson(): string {
        throw new Error("Not Implemented");
    }
}

export class StopsResponse extends GeoJsonConvertible {
    constructor(public items: StopsItem[]) {
        super();
    }

    toGeoJson(): string {
        throw new Error("Not Implemented");
    }
}

export class StopTimesResponse extends GeoJsonConvertible {
    constructor(
        public tripInfo: TripInfo,
        public beforeGivenStop?: StopTimesItem[],
        public atGivenStop?: StopTimesItem,
        public afterGivenStop?: StopTimesItem[]
    ) {
        super();
    }

    toGeoJson(): string {
        throw new Error("Not Implemented");
    }
}

export class TripInfo extends GeoJsonConvertible {
    constructor(
        public trip_id: string,
        public service_date: string,
        public route_id: string,
        public route_color: string,
        public directionId: string,
        public agencyName: string,
        public default_headsign: string,
        public trip_cancelled: boolean,
        public transport_type: string,
        public line: string,
        public trip_accessible_scheduled?: boolean,
        public trip_accessible?: boolean
    ) {
        super();
    }

    toGeoJson(): string {
        throw new Error("Not Implemented");
    }
}

export class StopTimesItem extends GeoJsonConvertible {
    constructor(
        public arrival_time: string,
        public date: string,
        public departure_time: string,
        public departure_date: string,
        public stop_id: string,
        public parent_id: string,
        public stop_name: string,
        public stop_sequence: number,
        public trip_headsign: string,
        public stop_cancelled: boolean,
        public track_scheduled?: string,
        public track?: string,
        public delay_time?: number,
        public departure_delay?: number,
        public alerts?: Alert[]
    ) {
        super();
    }

    toGeoJson(): string {
        throw new Error("Not Implemented");
    }
}

export class Alert extends GeoJsonConvertible {
    constructor(
        public effectiveStartDate: number,
        public effectiveEndDate: number,
        public alertDescriptionText: string,
        public alertCategory: number,
        public alertUrl?: string,
        public alertHeaderText?: string
    ) {
        super();
    }

    toGeoJson(): string {
        throw new Error("Not Implemented");
    }
}
