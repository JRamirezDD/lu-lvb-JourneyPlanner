import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Map from './components/Map'; 
import { IMapContext } from '@/contexts/mapContext'; 
import { IUIContext } from '@/contexts/uiContext'; 
import mapboxgl from 'mapbox-gl';
import stopsLayer from './components/map/layers/StopsLayer'; 
import { toOtpResponse } from '@/api/routingService/mappers';
import { mockOtpResponse } from '@/api/routingService/dto/__mock__/otpResponse.mock';

// Mock mapbox-gl
jest.mock('mapbox-gl', () => ({
  Map: jest.fn(() => ({
    on: jest.fn(),
    remove: jest.fn(),
    addSource: jest.fn(),
    addLayer: jest.fn(),
    getSource: jest.fn(),
    getLayer: jest.fn(),
    removeLayer: jest.fn(),
    removeSource: jest.fn(),
    getCanvas: jest.fn(() => ({ style: {} })),
  })),
  accessToken: '',
}));

// Mock stopsLayer
jest.mock('./map/layers/StopsLayer', () => jest.fn(() => ({
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: { type: 'Point', coordinates: [12.37, 51.34] },
    properties: { stopId: 'testStopId' },
  }],
})));

describe('Map Component', () => {
  let mapInstance;
  let setSelectedStopMock;
  let selectedItineraryMock;

  beforeEach(() => {
    mapInstance = new mapboxgl.Map();
    setSelectedStopMock = jest.fn();
    selectedItineraryMock = toOtpResponse(mockOtpResponse).plan.itineraries[0].toGeoJson();
    mapboxgl.Map.mockClear();
    stopsLayer.mockClear();
    mapboxgl.Map.mockImplementation(() => mapInstance);
  });

  it('renders without crashing', () => {
    render(
      <UIContext.Provider value={{ viewMode: 'DEFAULT' }}>
        <MapContext.Provider value={{ selectedStop: null, setSelectedStop: setSelectedStopMock, selectedItinerary: selectedItineraryMock }}>
          <Map />
        </MapContext.Provider>
      </UIContext.Provider>
    );
  });

  it('initializes Mapbox map on mount', () => {
    render(
      <UIContext.Provider value={{ viewMode: 'DEFAULT' }}>
        <MapContext.Provider value={{ selectedStop: null, setSelectedStop: setSelectedStopMock, selectedItinerary: selectedItineraryMock }}>
          <Map />
        </MapContext.Provider>
      </UIContext.Provider>
    );
    expect(mapboxgl.Map).toHaveBeenCalled();
  });

  it('adds stops layer in DEFAULT mode', () => {
    render(
      <UIContext.Provider value={{ viewMode: 'DEFAULT' }}>
        <MapContext.Provider value={{ selectedStop: null, setSelectedStop: setSelectedStopMock, selectedItinerary: selectedItineraryMock }}>
          <Map />
        </MapContext.Provider>
      </UIContext.Provider>
    );
    expect(stopsLayer).toHaveBeenCalled();
    expect(mapInstance.addSource).toHaveBeenCalledWith('stops-source', expect.any(Object));
    expect(mapInstance.addLayer).toHaveBeenCalledWith(expect.objectContaining({ id: 'stops-layer' }));
  });

  it('adds itinerary layer in ITINERARY mode', () => {
    render(
      <UIContext.Provider value={{ viewMode: 'ITINERARY' }}>
        <MapContext.Provider value={{ selectedStop: null, setSelectedStop: setSelectedStopMock, selectedItinerary: selectedItineraryMock }}>
          <Map />
        </MapContext.Provider>
      </UIContext.Provider>
    );
    expect(mapInstance.addSource).toHaveBeenCalledWith('itinerary-source', expect.any(Object));
    expect(mapInstance.addLayer).toHaveBeenCalledWith(expect.objectContaining({ id: 'itinerary-layer' }));
  });

  it('removes itinerary layer in DEFAULT mode', () => {
    render(
      <UIContext.Provider value={{ viewMode: 'DEFAULT' }}>
        <MapContext.Provider value={{ selectedStop: null, setSelectedStop: setSelectedStopMock, selectedItinerary: selectedItineraryMock }}>
          <Map />
        </MapContext.Provider>
      </UIContext.Provider>
    );
    expect(mapInstance.removeLayer).toHaveBeenCalledWith('itinerary-layer');
    expect(mapInstance.removeSource).toHaveBeenCalledWith('itinerary-source');
  });

  it('calls setSelectedStop on stop click', () => {
    render(
      <UIContext.Provider value={{ viewMode: 'DEFAULT' }}>
        <MapContext.Provider value={{ selectedStop: null, setSelectedStop: setSelectedStopMock, selectedItinerary: selectedItineraryMock }}>
          <Map />
        </MapContext.Provider>
      </UIContext.Provider>
    );

    act(() => {
      const clickHandler = mapInstance.on.mock.calls.find(call => call[0] === 'click' && call[1] === 'stops-layer')[2];
      clickHandler({ features: [{ properties: { stopId: 'clickedStopId' } }] });
    });

    expect(setSelectedStopMock).toHaveBeenCalledWith('clickedStopId');
  });
});