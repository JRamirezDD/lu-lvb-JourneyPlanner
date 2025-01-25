import { GeoJsonConvertible } from "@/types/GeoJsonConvertible";

// Expected DTO for the API response
export class TagItem extends GeoJsonConvertible {
    constructor(
        public stop_id: string,
        public lvb_gtfs_stop_id: number
    ) {
        super();
    }

    toGeoJson(): string {
        throw new Error("Not Implemented");
    }
}

// Expected DTO for the API response
export class AutocompleteItem extends GeoJsonConvertible {
    constructor(
        public ExtraOrder: object, // Optional backward compatibility
        public data: string, // Full address found
        public id: string, // Unique object ID
        public landkreis: string, // German district
        public lat: number, // Latitude
        public lon: number, // Longitude
        public name: string, // Name or address
        public postalcode: string, // Postal code
        public ptype: 'P' | 'S' | 'W' | 'V' | 'N', // Type (Point of interest, Stop, Way, Virtual Stop, Address)
        public stadt: string, // City
        public stadtteil: string, // City district
        public streetname: string, // Street name
        public housenumber: string, // House number
        public priority: number, // Priority of the result
        public sim: number, // Similarity score
        public tags: TagItem[] // Additional tags for the item
    ) {
        super();
    }

    toGeoJson(): string {
        throw new Error("Not Implemented");
    }
}

export type AutocompleteResponse = AutocompleteItem[]; // Array of results
