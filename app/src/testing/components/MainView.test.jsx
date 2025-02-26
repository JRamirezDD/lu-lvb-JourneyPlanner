import React from "react";
import { render, screen } from "@testing-library/react";
import MainView from "@/components/MainView";

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
    render(<MainView />);

    // Verify that control panel and buttons have been rendered.
    expect(screen.getByRole("button", { name: /plan/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /routes/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /details/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /station/i })).toBeInTheDocument();

    // Verify that the Map component has been rendered by checking the test id.
    expect(screen.getByTestId("map-container")).toBeInTheDocument();
  });
});
