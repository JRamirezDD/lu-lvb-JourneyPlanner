import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Map from '@/components/map/MapWidget';
import { UIProvider, useUIContext } from '@/contexts/uiContext';
import { MapProvider, useMapContext } from '@/contexts/mapContext';
import maplibregl from 'maplibre-gl';
import { StopmonitorDataProvider } from '@/contexts/DataContext/stopmonitorDataContext';
import { SettingsProvider, useSettingsContext } from '@/contexts/settingsContext';
import { AutocompleteDataProvider } from '@/contexts/DataContext/autocompleteDataContext';
import { OtpDataProvider } from '@/contexts/DataContext/routingDataContext';
import MainView from '@/components/MainView';
import { NearbySearchDataProvider } from '@/contexts/DataContext/nearbySearchDataContext';


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
    // Add hasImage here
    hasImage: jest.fn(() => false),
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

  jest.mock('@/contexts/settingsContext', () => ({
    SettingsProvider: ({ children }: any) => <>{children}</>,
    useSettingsContext: jest.fn(() => ({
      
    })),
  }));


describe("MainView Integration Test with Maplibre", () => {
  test("renders ControlPanel with navigation buttons and the Map component", () => {
    render(
      <SettingsProvider initialLanguage="en">
        <UIProvider>
          <MapProvider>
            <AutocompleteDataProvider>
              <OtpDataProvider>
                <StopmonitorDataProvider>
                  <NearbySearchDataProvider>
                  <MainView />
                  </NearbySearchDataProvider>
                </StopmonitorDataProvider>
              </OtpDataProvider>
            </AutocompleteDataProvider>
          </MapProvider>
        </UIProvider>
      </SettingsProvider>
    );

    // Verify that control panel buttons have been rendered.
    expect(screen.getAllByRole("button", { name: /plan/i })).toBeTruthy();
    expect(screen.getAllByRole("button", { name: /routes/i })).toBeTruthy();
    expect(screen.getAllByRole("button", { name: /details/i })).toBeTruthy();
    expect(screen.getAllByRole("button", { name: /station/i })).toBeTruthy();

    // Verify that the map has been rendered.
    expect(screen.getByRole("region")).toBeInTheDocument();

  });
});

