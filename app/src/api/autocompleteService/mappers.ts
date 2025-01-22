import { AutocompleteItem, TagItem } from "./dto/autocompleteItem";


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