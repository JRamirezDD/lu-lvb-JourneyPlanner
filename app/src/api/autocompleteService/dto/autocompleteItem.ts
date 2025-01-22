// Expected DTO for the API response
export interface TagItem {
    stop_id: string;
    lvb_gtfs_stop_id: number;
}

// Expected DTO for the API response
export interface AutocompleteItem {
    ExtraOrder: object; // Optional backward compatibility
    data: string; // Full address found
    id: string; // Unique object ID
    landkreis: string; // German district
    lat: number; // Latitude
    lon: number; // Longitude
    name: string; // Name or address
    postalcode: string; // Postal code
    ptype: 'P' | 'S' | 'W' | 'V' | 'N'; // Type (Point of interest, Stop, Way, Virtual Stop, Address)
    stadt: string; // City
    stadtteil: string; // City district
    streetname: string; // Street name
    housenumber: string; // House number
    priority: number; // Priority of the result
    sim: number; // Similarity score
    tags: TagItem[]; // Additional tags for the item
}

export type AutocompleteResponse = AutocompleteItem[]; // Array of results
