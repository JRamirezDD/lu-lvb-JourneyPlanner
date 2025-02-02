import { AutocompleteItem, TagItem } from "./dto/autocompleteitemResponse";

// Map function for transforming TagItem data
export const toTagItem = (tag: any): TagItem => {
    return new TagItem(
        tag.stop_id, // Mandatory
        tag.lvb_gtfs_stop_id // Mandatory
    );
};

// Map function for transforming AutocompleteItem data
export const toAutocompleteItem = (data: any): AutocompleteItem => {
    return new AutocompleteItem(
        data.ExtraOrder || 0, // Optional 
        data.data, // Mandatory
        data.id, // Mandatory
        data.landkreis, // Mandatory
        data.lat, // Mandatory
        data.lon, // Mandatory
        data.name, // Mandatory
        data.postalcode, // Mandatory
        data.ptype, // Mandatory
        data.stadt, // Mandatory
        data.stadtteil, // Mandatory
        data.streetname, // Mandatory
        data.housenumber, // Mandatory
        data.priority, // Mandatory
        data.sim, // Mandatory
        data.tags ? toTagItem(data.tags) : null
    );
};
