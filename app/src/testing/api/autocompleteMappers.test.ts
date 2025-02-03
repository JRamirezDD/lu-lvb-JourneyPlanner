import { toTagItem, toAutocompleteItem } from "@/api/autocompleteService/mappers";
import { mockAutocompleteResponse } from "@/api/autocompleteService/dto/__mock__/autocompleteResponse.mock";
import { AutocompleteItem, toGeoJsonCollection } from "@/api/autocompleteService/dto/autocompleteitemResponse";

describe("autocompleteService Mappers", () => {
    it("should print all autocomplete responses as a list of points. Needs to be checked manually.", () => {
        const results = mockAutocompleteResponse.map(toAutocompleteItem);
        const geoJson = toGeoJsonCollection(results);
        
        //console.log("Full GeoJSON collection:", geoJson);
    
        expect(geoJson).toBeDefined(); 
    });
    

    it("should map raw TagItem data to TagItem DTO", () => {
        const rawTag = mockAutocompleteResponse[0].tags; 
        expect(rawTag).toBeDefined(); 
        
        if (rawTag) {  
            const result = toTagItem(rawTag); 
        
            expect(result).toEqual({
                stop_id: rawTag.stop_id,
                lvb_gtfs_stop_id: rawTag.lvb_gtfs_stop_id,
            });
        }
    });
    
    it("should map raw AutocompleteItem data to AutocompleteItem DTO", () => {
        const rawItem = mockAutocompleteResponse[0];
        const result = toAutocompleteItem(rawItem);

        expect(result).toEqual({
            ExtraOrder: rawItem.ExtraOrder,
            data: rawItem.data,
            id: rawItem.id,
            landkreis: rawItem.landkreis,
            lat: rawItem.lat,
            lon: rawItem.lon,
            name: rawItem.name,
            postalcode: rawItem.postalcode,
            ptype: rawItem.ptype,
            stadt: rawItem.stadt,
            stadtteil: rawItem.stadtteil,
            streetname: rawItem.streetname,
            housenumber: rawItem.housenumber,
            priority: rawItem.priority,
            sim: rawItem.sim,
            tags: toTagItem(rawItem.tags)
        });
    });

    it("should correctly map all raw AutocompleteResponse data to DTOs", () => {
        const results = mockAutocompleteResponse.map(toAutocompleteItem);

        expect(results.length).toBe(mockAutocompleteResponse.length);

        mockAutocompleteResponse.forEach((rawItem, index) => {
            expect(results[index]).toEqual({
                ExtraOrder: rawItem.ExtraOrder,
                data: rawItem.data,
                id: rawItem.id,
                landkreis: rawItem.landkreis,
                lat: rawItem.lat,
                lon: rawItem.lon,
                name: rawItem.name,
                postalcode: rawItem.postalcode,
                ptype: rawItem.ptype,
                stadt: rawItem.stadt,
                stadtteil: rawItem.stadtteil,
                streetname: rawItem.streetname,
                housenumber: rawItem.housenumber,
                priority: rawItem.priority,
                sim: rawItem.sim,
                tags: rawItem.tags ? toTagItem(rawItem.tags) : null,
            });
        });
    });
});
