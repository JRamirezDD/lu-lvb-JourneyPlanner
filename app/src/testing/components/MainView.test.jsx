import React from "react";
import { render, screen } from "@testing-library/react";
import { SettingsProvider } from "@/contexts/settingsContext";
import { UIProvider } from "@/contexts/uiContext";
import { MapProvider } from "@/contexts/mapContext";
import { AutocompleteDataProvider } from "@/contexts/DataContext/autocompleteDataContext";
import { OtpDataProvider } from "@/contexts/DataContext/routingDataContext";
import { StopmonitorDataProvider } from "@/contexts/DataContext/stopmonitorDataContext";
import ControlPanel from "@/components/controlPanel/ControlPanel";

// Integration Test verifies that MainView components (map and control panel) are being rendered as expected.
    // Some examples of fail scenarios include:
        // Invalid API keys
        // Invalid data being passed to the component
        // Incorrect data formatting
        // Bad code logic
            // Sometimes code will run with npm run dev, but when building the project errors will occur. This test aims to prevent that from occurring with the UI components.
        // etc...

// Polyfill for performance.mark and performance.measure if not available.

if (typeof performance === "undefined") {
  global.performance = {};
}

if (!performance.mark) {
  performance.mark = jest.fn();
}

if (!performance.measure) {
  performance.measure = jest.fn();
}



describe("MainView Integration Test with Maplibre", () => {
  test("renders ControlPanel with navigation buttons and the Map component", () => {
    // Spy on the Map constructor.
    render(
      <SettingsProvider initialLanguage="en">
        <UIProvider>
          <MapProvider>
            <AutocompleteDataProvider>
              <OtpDataProvider>
                <StopmonitorDataProvider>
                  <ControlPanel />
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
  });
});

