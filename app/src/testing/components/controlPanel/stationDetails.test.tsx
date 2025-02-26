import { render, screen } from "@testing-library/react";
import StationDetails from "@/components/controlPanel/StationDetails";

// Mock the contexts
jest.mock("@/contexts/settingsContext", () => ({
  useSettingsContext: () => ({
    translations: {}
  })
}));

jest.mock("@/contexts/DataContext/stopmonitorDataContext", () => ({
  useStopmonitorDataContext: () => ({
    stopMonitorData: { items: [] },
    loadingStopMonitor: false,
    errorStopMonitor: null,
    fetchStopMonitor: jest.fn()
  })
}));

test("displays station details for a given stop ID", () => {
  const stopId = "0013000";
  render(<StationDetails stopId={stopId} />);
  // Test for something that should be rendered with the given stopId
  expect(screen.getByText(/Route/)).toBeInTheDocument();

});