import { useState, useEffect } from "react";
import { Filter, ArrowUpDown, ChevronDown, ChevronUp, Calendar } from "lucide-react"; // Icons
import TramLogo from "../../../public/Tram-Logo.svg";
import S_BahnLogo from "../../../public/S-Bahn-Logo.svg";
import BusLogo from "../../../public/Bus-Logo.svg"; 
import TransportFilter from "./filters/TransportFilter";
import DepartureFilter from "./filters/DepartureFilter";
import { useSettingsContext } from "@/contexts/settingsContext"; // Import context

type ViewState = "planner" | "routes" | "details" | "station";

const transportOptions = [
  { type: "Tram", logo: TramLogo },
  { type: "S-Bahn", logo: S_BahnLogo },
  { type: "Bus", logo: BusLogo },
];

const RoutePlanner = ({ setActiveView }: { setActiveView: (view: ViewState) => void }) => {
  const { translations } = useSettingsContext(); // Get translations from context

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<{ [key: string]: boolean }>({
    "Tram": true,
    "S-Bahn": true,
    "Bus": true,
    "Bike": false,
    "Walk": false,
    "Car": false,
  });
  const [showDepartureFilter, setShowDepartureFilter] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [defaultDate, setDefaultDate] = useState<Date | null>(null);
  
  useEffect(() => {
    const now = new Date();
    setSelectedDate(now);
    setDefaultDate(now);
  }, []);
  
  const isDepartureModified = selectedDate && defaultDate 
    ? selectedDate.getTime() !== defaultDate.getTime()
    : false;
    
  const formattedTime = selectedDate
    ? selectedDate.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    : '';

  const toggleFilter = (type: string) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [type]: !prevFilters[type],
    }));
  };

  const swapLocations = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  return (
    <div className="flex flex-col gap-4 p-4 w-full">
      <h2 className="text-lg font-bold">{translations?.ControlPanel?.planner?.title || "Plan Your Journey"}</h2>

      {/* Input Fields*/}
      <div className="relative flex flex-col gap-2">
        <input
          type="text"
          placeholder={translations?.ControlPanel?.planner?.origin || "Origin"}
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="w-full p-2 border border-[#1a365d]/20 rounded focus:border-[#1a365d] focus:ring-1 focus:ring-[#1a365d] outline-none"
        />
        {/* Swap Button */}
        <button
          onClick={swapLocations}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#1a365d]/10 p-1 rounded-full hover:bg-[#fef9c3] transition-colors"
        >
          <ArrowUpDown size={18} className="text-[#1a365d]" />
        </button>
        <input
          type="text"
          placeholder={translations?.ControlPanel?.planner?.destination || "Destination"}
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Filter Buttons Container */}
      <div className="grid grid-cols-2 gap-2">
        {/* Departure Filter Button */}
        <button
          onClick={() => setShowDepartureFilter(!showDepartureFilter)}
          className="flex items-center justify-between bg-[#1a365d] text-white px-4 py-2 rounded-md transition-all hover:bg-[#2d4a7c]"
          suppressHydrationWarning
        >
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>
              {isDepartureModified 
                ? translations?.ControlPanel?.planner?.filters?.departureAt?.replace("{time}", formattedTime) || `Departure at ${formattedTime}`
                : translations?.ControlPanel?.planner?.filters?.departureNow || "Depart Now"
              }
            </span>
          </div>
          {showDepartureFilter ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {/* Transport Filter Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-between bg-[#1a365d] text-white px-4 py-2 rounded-md transition-all hover:bg-[#2d4a7c]"
        >
          <div className="flex items-center gap-2">
            <Filter size={18} />
            <span>{translations?.ControlPanel?.planner?.filters?.transportButton || "Transport"}</span>
          </div>
          {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {/* Filter Components */}
      {showDepartureFilter && (
        <DepartureFilter 
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}
      {showFilters && (
        <TransportFilter 
          activeFilters={activeFilters} 
          toggleFilter={toggleFilter}
        />
      )}

      {/* See Routes Button */}
      <button 
        onClick={() => setActiveView("routes")} 
        className="bg-[#1a365d] text-white p-2 rounded w-full hover:bg-[#2d4a7c] transition-colors"
      >
        {translations?.ControlPanel?.planner?.seeRoutes || "See Routes"}
      </button>
    </div>
  );
};

export default RoutePlanner;
