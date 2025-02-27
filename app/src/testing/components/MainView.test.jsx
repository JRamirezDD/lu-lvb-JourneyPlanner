import React from "react";
import { render, screen } from "@testing-library/react";
import MainView from "@/components/MainView";
import { SettingsProvider } from "@/contexts/settingsContext";
import { UIProvider } from "@/contexts/uiContext";
import { MapProvider } from "@/contexts/mapContext";
import { AutocompleteDataProvider } from "@/contexts/DataContext/autocompleteDataContext";
import { OtpDataProvider } from "@/contexts/DataContext/routingDataContext";
import { StopmonitorDataProvider } from "@/contexts/DataContext/stopmonitorDataContext";

// Integration Test verifies that MainView components (map and control panel) are being rendered as expected.
    // Some examples of fail scenarios include:
        // Invalid API keys
        // Invalid data being passed to the component
        // Incorrect data formatting
        // Bad code logic
            // Sometimes code will run with npm run dev, but when building the project errors will occur. This test aims to prevent that from occurring with the UI components.
        // etc...

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

describe("MainView Integration Test", () => {
  test("renders ControlPanel with navigation buttons and the Map component", () => {
    render(
      <SettingsProvider initialLanguage="en">
        <UIProvider>
          <MapProvider>
            <AutocompleteDataProvider>
              <OtpDataProvider>
                <StopmonitorDataProvider>
                  <MainView />
                </StopmonitorDataProvider>
              </OtpDataProvider>
            </AutocompleteDataProvider>
          </MapProvider>
        </UIProvider>
      </SettingsProvider>
    );

    // Verify that control panel and buttons have been rendered.
    expect(screen.getAllByRole("button", { name: /plan/i })).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /routes/i })).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /details/i })).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /station/i })).toBeInTheDocument();

    // Verify that the Map component has been rendered by checking the test id.
    expect(screen.getByTestId("map-container")).toBeInTheDocument();
  });
});
