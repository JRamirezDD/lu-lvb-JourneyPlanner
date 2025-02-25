import React from "react";
import { render, screen } from "@testing-library/react";
import MainView from "@/components/MainView";

// Integration Test verifies that MainView components (map and control panel) are being rendered as expected.
    // Some examples of fail scenarios include:
        // Invalid API keys
        // Invalid data being passed to the component
        // Incorrect data formatting
        // Bad code logic
            // Sometimes code will run with npm run dev, but when building the project errors will occur. This test aims to prevent that from occurring with the UI components.
        // etc...

describe("MainView Integration Test", () => {
  test("renders ControlPanel with navigation buttons and the Map component", () => {
    render(<MainView />);

    // Verify that control pannel and buttons have been rendered.
    expect(screen.getByRole("button", { name: /plan/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /routes/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /details/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /station/i })).toBeInTheDocument();

    // Verify that the Map component has been rendered by checking the test id.
    expect(screen.getByTestId("map-container")).toBeInTheDocument();
  });
});
