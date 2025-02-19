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

    toGeoJson(): object {
        const geojson = {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: null
            },
            properties: {
                trip_id: this.trip_id,
                stop_id: this.stop_id,
                route_id: this.route_id,
                trip_headsign: this.trip_headsign,
                route_color: this.route_color,
                directionId: this.directionId,
                agencyName: this.agencyName,
                trip_cancelled: this.trip_cancelled,
                stop_cancelled: this.stop_cancelled,
                waiting_time: this.waiting_time,
                dep_waiting_time: this.dep_waiting_time,
                line: this.line,
                transport_type: this.transport_type,
                track_scheduled: this.track_scheduled,
                track: this.track,
                delay_time: this.delay_time,
                departure_delay: this.departure_delay,
                alerts: this.alerts?.map(alert => alert.toGeoJson()) || []
            }
        };
        return geojson;
    }
}

export class MonitorResponse extends GeoJsonConvertible {
    constructor(public items: MonitorItem[]) {
        super();
    }

    toGeoJson(): object {
        return {
            type: "FeatureCollection",
            features: this.items.map(item => item.toGeoJson()) // No need for JSON.parse
        };
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

    toGeoJson(): object {
        const geojson = {
            type: "Feature",
            properties: {
                directionId: this.directionId,
                agencyName: this.agencyName,
                line: this.line,
                route_color: this.route_color,
                directionName: this.directionName,
                transport_type: this.transport_type,
                headsigns: this.headsigns
            }
        };
        return geojson;
    }
}

export class DirectionResponse extends GeoJsonConvertible {
    constructor(public items: DirectionInfo[]) {
        super();
    }

    toGeoJson(): object {
        const geojson = {
            type: "FeatureCollection",
            features: this.items.map(item => item.toGeoJson())
        };
        return geojson;
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

    toGeoJson(): object {
        const geojson = {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [this.lon, this.lat]
            },
            properties: {
                stop_name: this.stop_name,
                stop_id: this.stop_id,
                priority: this.priority
            }
        };
        return geojson;
    }
}

export class StopsResponse extends GeoJsonConvertible {
    constructor(public items: StopsItem[]) {
        super();
    }

    toGeoJson(): object {
        const geojson = {
            type: "FeatureCollection",
            features: this.items.map(item => item.toGeoJson())
        };
        return geojson;
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

    toGeoJson(): object {
        const geojson = {
            type: "FeatureCollection",
            features: [
                ...this.beforeGivenStop?.map(item => item.toGeoJson()) || [],
                this.atGivenStop ? this.atGivenStop.toGeoJson() : null,
                ...this.afterGivenStop?.map(item => item.toGeoJson()) || []
            ].filter(item => item !== null)
        };
        return geojson;
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

    toGeoJson(): object {
        const geojson = {
            type: "Feature",
            properties: {
                trip_id: this.trip_id,
                service_date: this.service_date,
                route_id: this.route_id,
                route_color: this.route_color,
                directionId: this.directionId,
                agencyName: this.agencyName,
                default_headsign: this.default_headsign,
                trip_cancelled: this.trip_cancelled,
                transport_type: this.transport_type,
                line: this.line
            }
        };
        return geojson;
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

    toGeoJson(): object {
        const geojson = {
            type: "Feature",
            properties: {
                arrival_time: this.arrival_time,
                date: this.date,
                departure_time: this.departure_time,
                departure_date: this.departure_date,
                stop_id: this.stop_id,
                stop_name: this.stop_name,
                stop_sequence: this.stop_sequence,
                trip_headsign: this.trip_headsign,
                stop_cancelled: this.stop_cancelled,
                track_scheduled: this.track_scheduled,
                track: this.track,
                delay_time: this.delay_time,
                departure_delay: this.departure_delay,
                alerts: this.alerts?.map(alert => alert.toGeoJson()) || []
            }
        };
        return geojson;
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

    toGeoJson(): object {
        const geojson = {
            type: "Feature",
            properties: {
                effectiveStartDate: this.effectiveStartDate,
                effectiveEndDate: this.effectiveEndDate,
                alertDescriptionText: this.alertDescriptionText,
                alertCategory: this.alertCategory,
                alertUrl: this.alertUrl,
                alertHeaderText: this.alertHeaderText
            }
        };
        return geojson;
    }
}
