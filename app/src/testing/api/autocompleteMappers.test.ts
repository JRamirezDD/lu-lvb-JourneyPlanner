import { toAutocompleteItem, toTagItem } from '@/api/autocompleteService/mappers';

describe('Mapper Functions', () => {
    test('toTagItem maps correctly', () => {
        const rawTag = { stop_id: '0011420', lvb_gtfs_stop_id: 11420 };
        const tag = toTagItem(rawTag);
        expect(tag.stop_id).toBe('0011420');
        expect(tag.lvb_gtfs_stop_id).toBe(11420);
    });

    test('toAutocompleteItem maps correctly', () => {
        const rawData = {
            ExtraOrder: {},
            data: 'Mobilitätsstation 3',
            id: 'pois_s373327',
            landkreis: 'Leipzig',
            lat: 51.230301,
            lon: 12.715422,
            name: 'Mobilitätsstation 3 - Augustusplatz',
            postalcode: '04109',
            ptype: 'S',
            stadt: 'Leipzig',
            stadtteil: 'Zentrum',
            streetname: 'Augustusplatz',
            housenumber: '5-6',
            priority: 1.85,
            sim: 1.47,
            tags: [{ stop_id: '0011420', lvb_gtfs_stop_id: 11420 }],
        };

        const result = toAutocompleteItem(rawData);
        expect(result).toHaveProperty('data', 'Mobilitätsstation 3');
        expect(result.tags[0].stop_id).toBe('0011420');
    });
});
