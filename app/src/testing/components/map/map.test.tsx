import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MapWidget from '@/components/map/MapWidget';
import { UIProvider, useUIContext } from '@/contexts/uiContext';
import { MapProvider, useMapContext } from '@/contexts/mapContext';
import maplibregl from 'maplibre-gl';
import { StopmonitorDataProvider } from '@/contexts/DataContext/stopmonitorDataContext';


jest.mock('maplibre-gl', () => ({
    Map: jest.fn(() => ({
      on: jest.fn((event, callback) => {
        if (event === 'load' || event === 'moveend' || event === 'click') {
          callback();
        }
      }),
      off: jest.fn(),
      remove: jest.fn(),
      addSource: jest.fn(),
      getSource: jest.fn(),
      getLayer: jest.fn(() => ({})),
      removeLayer: jest.fn(),
      removeSource: jest.fn(),
      loadImage: jest.fn((url, callback) => {
        callback(null, { width: 1, height: 1 });
      }),
      addImage: jest.fn(),
      queryRenderedFeatures: jest.fn((point) => {
        return [{
          geometry: {
            type: 'Point',
            coordinates: [10, 20],
          },
        }];
      }),
      getCanvas: jest.fn(() => ({ style: { cursor: '' } })),
      resize: jest.fn(),
      getBounds: jest.fn(() => ({
        getSouthWest: jest.fn(() => ({ lng: 0, lat: 0 })),
        getNorthEast: jest.fn(() => ({ lng: 1, lat: 1 })),
        getCenter: jest.fn(() => ({ lng: 0.5, lat: 0.5 })),
      })),
    })),
    LngLatBounds: jest.fn((sw, ne) => ({
      getSouthWest: jest.fn(() => sw),
      getNorthEast: jest.fn(() => ne),
      getCenter: jest.fn(() => ({
        lng: (sw.lng + ne.lng) / 2,
        lat: (sw.lat + ne.lat) / 2,
      })),
      contains: jest.fn(() => true),
    })),
  }));
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
    setSelectedItinerary: jest.fn(), // Add this line
    selectedItinerary: null,
  })),
}));

describe('Map Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (maplibregl.Map as jest.Mock).mockClear();
  });

  it('renders the map container', () => {
    render(
      <UIProvider>
        <MapProvider>
          <StopmonitorDataProvider>
            <MapWidget />
          </StopmonitorDataProvider>
        </MapProvider>
      </UIProvider>
    );
    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  it('initializes maplibre-gl map on mount', () => {
    render(
      <UIProvider>
        <MapProvider>
          <StopmonitorDataProvider>
            <MapWidget />
          </StopmonitorDataProvider>
        </MapProvider>
      </UIProvider>
    );
    expect(maplibregl.Map).toHaveBeenCalledTimes(1);
  });

  it('adds click listener on map load', () => {
    const mapMock = new (maplibregl.Map as jest.Mock)();
    (maplibregl.Map as jest.Mock).mockReturnValue(mapMock);

    render(
      <UIProvider>
        <MapProvider>
          <StopmonitorDataProvider>
            <MapWidget />
          </StopmonitorDataProvider>
        </MapProvider>
      </UIProvider>
    );

    expect(mapMock.on).toHaveBeenCalledWith('click', expect.any(Function));
  });

// a temporarily disabled feature that will probably be replaced with another feature later:

//   it('logs coordinates on map click', () => {
//     const mapMock = new (maplibregl.Map as jest.Mock)();
//     (maplibregl.Map as jest.Mock).mockReturnValue(mapMock);
//     const queryRenderedFeaturesMock = jest.fn((point) => {
//       return [{
//         geometry: {
//           type: 'Point',
//           coordinates: [10, 20],
//         },
//       }];
//     });
//     mapMock.queryRenderedFeatures = queryRenderedFeaturesMock;
//     const consoleSpy = jest.spyOn(console, 'log');

//     render(
//       <UIProvider>
//         <MapProvider>
//           <StopmonitorDataProvider>
//             <MapWidget />
//           </StopmonitorDataProvider>
//         </MapProvider>
//       </UIProvider>
//     );

//     const clickCallback = mapMock.on.mock.calls.find((call: string[]) => call[0] === 'click')[1];
//     clickCallback({ point: { x: 10, y: 10 } });

//     expect(consoleSpy).toHaveBeenCalledWith('Clicked coordinates:', [10, 20]);
//     consoleSpy.mockRestore();
//   });
});