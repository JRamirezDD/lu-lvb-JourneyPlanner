import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import RoutePlanner from "@/components/controlPanel/RoutePlanner";
import Image from 'next/image';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img alt="mocked image" {...props} />;
  },
}));

// Mock the contexts
jest.mock("@/contexts/settingsContext", () => ({
  useSettingsContext: () => ({
    translations: {},
    transportModes: "WALK,TRAM,BUS",
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

  test("autocomplete functionality", async () => {
    const mockSetActiveView = jest.fn();
    render(<RoutePlanner setActiveView={mockSetActiveView} />);
    
    const destinationInput = screen.getByPlaceholderText("Destination");
    fireEvent.change(destinationInput, { target: { value: "Markt" } });

    expect(destinationInput).toHaveValue("Markt");
  });

  test("Turn off transport mode Walk", async () => {
    const mockSetActiveView = jest.fn();
    const mockToggleTransportMode = jest.fn();
    
    render(<RoutePlanner setActiveView={mockSetActiveView} />);
    
    // Click the Transport filter button to open the filter panel
    const transportButton = screen.getByRole('button', { name: /transport/i });
    fireEvent.click(transportButton);

    // Find and click the Walk toggle button
    const walkListItem = screen.getByText("Walk").closest('li');
    const toggleButton = walkListItem?.querySelector('button');
    if (!toggleButton) throw new Error('Toggle button not found');
    fireEvent.click(toggleButton);

    // Expect off toggle button
    expect(toggleButton).toHaveClass('relative w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 bg-[#1a365d]');
  });
});
