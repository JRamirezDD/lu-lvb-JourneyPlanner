import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Map from '@/components/Map'; 
import { UIProvider, useUIContext } from '@/contexts/uiContext'; 
import { MapProvider, useMapContext } from '@/contexts/mapContext'; 
import mapboxgl from 'mapbox-gl';
import { FeatureCollection, Point, LineString } from 'geojson';

// Mock mapbox-gl
jest.mock('mapbox-gl', () => ({
  accessToken: '',
  Map: jest.fn(() => ({
    on: jest.fn((event, callback) => {
      if (event === 'style.load') {
        callback();
      }
    }),
    off: jest.fn(),
    remove: jest.fn(),
    addLayer: jest.fn(),
    addSource: jest.fn(),
    getSource: jest.fn(),
    getLayer: jest.fn(),
    removeLayer: jest.fn(),
    removeSource: jest.fn(),
    loadImage: jest.fn((url, callback) => {
        callback(null, {width:1, height:1})
    }),
    addImage: jest.fn(),
    queryRenderedFeatures: jest.fn(() => []),
    getCanvas: jest.fn(() => ({ style: { cursor: '' } })),
  })),
}));

// Mock contexts
jest.mock('@/contexts/uiContext', () => ({
  UIProvider: ({ children }: any) => <>{children}</>,
  useUIContext: jest.fn(() => ({
    viewMode: 'DEFAULT',
    setViewMode: jest.fn(),
  })),
}));

jest.mock('@/contexts/mapContext', () => ({
  MapProvider: ({ children }: any) => <>{children}</>,
  useMapContext: jest.fn(() => ({
    selectedStop: null,
    setSelectedStop: jest.fn(),
  })),
}));

// Mock createItineraryLayerData
jest.mock('./map/layers/ItineraryLayer', () => ({
  createItineraryLayerData: jest.fn(() => ({
    type: 'FeatureCollection',
    features: [],
  } as FeatureCollection<Point | LineString>)),
}));

// Mock stopsLayer
jest.mock('./map/layers/StopsLayer', () => ({
    default: jest.fn(() => ({
        type: 'FeatureCollection',
        features: [],
      } as FeatureCollection<Point>),
    )
}));

describe('Map Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        (mapboxgl.Map as jest.Mock).mockClear();
    });

    it('renders the map container', () => {
        render(
            <UIProvider>
                <MapProvider>
                    <Map />
                </MapProvider>
            </UIProvider>
        );
        expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('initializes Mapbox map on mount', () => {
        render(
            <UIProvider>
                <MapProvider>
                    <Map />
                </MapProvider>
            </UIProvider>
        );
        expect(mapboxgl.Map).toHaveBeenCalledTimes(1);
    });

    it('adds click listener on style load', () => {
        const mapMock = new (mapboxgl.Map as jest.Mock)();
        (mapboxgl.Map as jest.Mock).mockReturnValue(mapMock);

        render(
            <UIProvider>
                <MapProvider>
                    <Map />
                </MapProvider>
            </UIProvider>
        );

        expect(mapMock.on).toHaveBeenCalledWith('click', expect.any(Function));
    });

    it('logs coordinates on map click', () => {
        const mapMock = new (mapboxgl.Map as jest.Mock)();
        (mapboxgl.Map as jest.Mock).mockReturnValue(mapMock);
        const queryRenderedFeaturesMock = jest.fn(() => [{
            geometry: {
                type: 'Point',
                coordinates: [10, 20],
            },
        }]);
        mapMock.queryRenderedFeatures = queryRenderedFeaturesMock;
        const consoleSpy = jest.spyOn(console, 'log');

        render(
            <UIProvider>
                <MapProvider>
                    <Map />
                </MapProvider>
            </UIProvider>
        );

        const clickCallback = mapMock.on.mock.calls.find((call: string[]) => call[0] === 'click')[1];
        clickCallback({ point: { x: 10, y: 10 } });

        expect(consoleSpy).toHaveBeenCalledWith('Clicked coordinates:', [10, 20]);
        consoleSpy.mockRestore();
    });
});