import { GeoJsonConvertible } from "@/types/GeoJsonConvertible";

// Expected DTO for the API response
/* 

To convert autocomplete API responses to a GeoJSON:
- For one response item: 
        const rawItem = APIRESPONSE[NUMBER];
        const autocompleteItem = toAutocompleteItem(rawItem); // Convert to DTO 
        const geoJsonForRawItem = autocompleteItem.toGeoJson(); // Get GeoJSON
- For one full response:
        const results = APIRESPONSE.map(toAutocompleteItem);
        const geoJson = toGeoJsonCollection(results);

*/ 
export class TagItem extends GeoJsonConvertible {
    constructor(
        public stop_id: string,
        public lvb_gtfs_stop_id: number
    ) {
        super();
    }

    toGeoJson(): string {
        return JSON.stringify({
            type: "Feature",
            properties: {
                stop_id: this.stop_id,
                lvb_gtfs_stop_id: this.lvb_gtfs_stop_id
            },
            geometry: {
                type: "Point",
                coordinates: [] 
            }
        });
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
        public tags: TagItem | null = null // Additional tags for the item
    ) {
        super();
    }

    toGeoJson(): string {
        return JSON.stringify({
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [this.lon, this.lat] 
            },
            properties: {
                id: this.id,
                name: this.name,
                postalcode: this.postalcode,
                city: this.stadt,
                district: this.stadtteil,
                street: this.streetname,
                housenumber: this.housenumber,
                priority: this.priority,
                similarity: this.sim,
                type: this.ptype,
                tags: this.tags ? JSON.parse(this.tags.toGeoJson()).properties : null
            }
        });
    }
}

// Converts an array of AutocompleteItem into a valid GeoJSON FeatureCollection
export function toGeoJsonCollection(items: AutocompleteItem[]): string {
    return JSON.stringify({
        type: "FeatureCollection",
        features: items.map(item => JSON.parse(item.toGeoJson()))
    });
}

