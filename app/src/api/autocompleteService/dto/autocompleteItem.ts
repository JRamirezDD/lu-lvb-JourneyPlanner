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

// Map function for transforming TagItem data
export const toTagItem = (tag: any): TagItem => {
    return {
        stop_id: tag.stop_id,
        lvb_gtfs_stop_id: tag.lvb_gtfs_stop_id,
    };
};

// Map function for transforming AutocompleteItem data
export const toAutocompleteItem = (data: any): AutocompleteItem => {
    return {
        ExtraOrder: data.ExtraOrder || {},
        data: data.data,
        id: data.id,
        landkreis: data.landkreis,
        lat: data.lat,
        lon: data.lon,
        name: data.name,
        postalcode: data.postalcode,
        ptype: data.ptype,
        stadt: data.stadt,
        stadtteil: data.stadtteil,
        streetname: data.streetname,
        housenumber: data.housenumber,
        priority: data.priority,
        sim: data.sim,
        tags: data.tags ? data.tags.map(toTagItem) : [], // Transform tags if they exist
    };
};

export type AutocompleteResponse = AutocompleteItem[]; // Array of results
