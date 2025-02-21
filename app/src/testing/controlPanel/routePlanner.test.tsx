import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import RoutePlanner from "@/components/controlPanel/RoutePlanner";

// Mock the contexts
jest.mock("@/contexts/settingsContext", () => ({
  useSettingsContext: () => ({
    translations: {},
    transportModes: ["TRAM", "BUS", "WALK"],
    toggleTransportMode: jest.fn()
  })
}));

jest.mock("@/contexts/DataContext/autocompleteDataContext", () => ({
  useAutocompleteDataContext: () => ({
    autocompleteData: [],
    fetchAutocompleteData: jest.fn(),
    loadingAutocomplete: false
  })
}));

jest.mock("@/contexts/DataContext/routingDataContext", () => ({
  useOtpDataContext: () => ({
    fetchOtpData: jest.fn()
  })
}));

describe('RoutePlanner', () => {
  test("autocomplete functionality", async () => {
    const mockSetActiveView = jest.fn();
    render(<RoutePlanner setActiveView={mockSetActiveView} />);
    
    const originInput = screen.getByPlaceholderText("Origin");
    fireEvent.change(originInput, { target: { value: "Leipzig" } });
    
    expect(originInput).toHaveValue("Leipzig");
  });
});
