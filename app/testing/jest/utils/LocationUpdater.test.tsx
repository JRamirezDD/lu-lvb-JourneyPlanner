import React from 'react';
import { render, act, waitFor } from '@testing-library/react';
import { LocationProvider, useLocationContext } from '@/contexts/locationContext';
import LocationUpdater from '@/utils/locationUpdater';

// Mock geolocation API
const mockGeolocation = {
  watchPosition: jest.fn(),
  clearWatch: jest.fn(),
};
Object.defineProperty(global.navigator, 'geolocation', {
  value: mockGeolocation,
  writable: true,
});

let updateLocationMock: jest.Mock;

// Component wrapper to access context state inside the test
const TestComponent = () => {
  const { currentLocation, updateLocation, error } = useLocationContext();
  updateLocationMock = jest.fn(updateLocation);

  return (
    <div>
      <p data-testid="location">
        {currentLocation ? `Lat: ${currentLocation.coords.lat}, Lon: ${currentLocation.coords.lon}` : 'No location'}
      </p>
      <p data-testid="error">{error}</p>
    </div>
  );
};

describe('LocationUpdater', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('updates location when geolocation is available', async () => {
    // Simulated location update
    const mockPosition = {
      coords: {
        latitude: 50.1109,
        longitude: 8.6821,
        heading: 180,
        speed: 2.5,
        accuracy: 100,
      },
      timestamp: 1710328356,
    };

    // Mock watchPosition to call success callback immediately
    mockGeolocation.watchPosition.mockImplementation((success) => {
      success(mockPosition);
      return 1; // mock watch ID
    });

    const { getByTestId } = render(
      <LocationProvider>
        <LocationUpdater />
        <TestComponent />
      </LocationProvider>
    );

    // Wait for async updates to propagate
    await act(async () => {});

    // Check if location was updated
    expect(getByTestId('location').textContent).toContain(`Lat: ${mockPosition.coords.latitude}`);
    expect(getByTestId('location').textContent).toContain(`Lon: ${mockPosition.coords.longitude}`);
    });
  });

  test('handles low accuracy case correctly', async () => {
    const mockLowAccuracyPosition = {
      coords: { latitude: 40.7128, longitude: -74.006, heading: null, speed: null, accuracy: 600 },
      timestamp: Date.now(),
    };

    // Mock watchPosition with low accuracy
    mockGeolocation.watchPosition.mockImplementation((success) => {
      success(mockLowAccuracyPosition);
    });

    jest.spyOn(console, 'error').mockImplementation(() => jest.fn());
    await waitFor(() => expect(() => render
      (<LocationProvider>
        <LocationUpdater />
        <TestComponent />
      </LocationProvider>)
    ).toThrow("Accuracy is too low, skipping update")
    ); 
    jest.restoreAllMocks();
    });

  test('handles geolocation errors correctly', async () => {
    // Simulate geolocation error
    const mockError = { message: 'User denied Geolocation', code: 1 };

    mockGeolocation.watchPosition.mockImplementation((_, errorCallback) => {
      errorCallback(mockError);
    });

    const { getByTestId } = render(
      <LocationProvider>
        <LocationUpdater />
        <TestComponent />
      </LocationProvider>
    );

    await act(async () => {});

    expect(getByTestId('error').textContent).toBe(mockError.message);
  });

  test('cleans up geolocation watcher on unmount', () => {
    const { unmount } = render(
      <LocationProvider>
        <LocationUpdater />
      </LocationProvider>
    );

    unmount();
    expect(mockGeolocation.clearWatch).toHaveBeenCalled();
  });
