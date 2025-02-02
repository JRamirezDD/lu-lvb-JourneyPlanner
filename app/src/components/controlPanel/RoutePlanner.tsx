import { useState } from "react";
import { Filter, ArrowUpDown, ChevronDown, ChevronUp, Calendar } from "lucide-react"; // Icons
import Image from 'next/image';
import TramLogo from "../../../public/Tram-Logo.svg";
import S_BahnLogo from "../../../public/S-Bahn-Logo.svg";
import BusLogo from "../../../public/Bus-Logo.svg"; 
import TransportFilter from "./filters/TransportFilter";
import DepartureFilter from "./filters/DepartureFilter";
import { useTranslations } from 'next-intl';

type ViewState = "planner" | "routes" | "details" | "station";

const transportOptions = [
  { type: "Tram", logo: TramLogo },
  { type: "S-Bahn", logo: S_BahnLogo },
  { type: "Bus", logo: BusLogo },
];

const RoutePlanner = ({ setActiveView }: { setActiveView: (view: ViewState) => void }) => {
  const t = useTranslations('ControlPanel.planner');
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<{ [key: string]: boolean }>({
    "Tram": true,
    "S-Bahn": true,
    "Bus": true,
  });
  const [showDepartureFilter, setShowDepartureFilter] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [defaultDate] = useState(new Date());
  
  const isDepartureModified = selectedDate.getTime() !== defaultDate.getTime();
  const formattedTime = selectedDate.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

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
      <h2 className="text-lg font-bold">{t('title')}</h2>

      {/* Input Fields with Swap Button */}
      <div className="relative flex flex-col gap-2">
        <input
          type="text"
          placeholder={t('origin')}
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={swapLocations}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-1 rounded-full hover:bg-gray-300"
        >
          <ArrowUpDown size={18} />
        </button>
        <input
          type="text"
          placeholder={t('destination')}
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
          className="flex items-center justify-between bg-gray-800 text-white px-4 py-2 rounded-md transition-all hover:bg-gray-700"
        >
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>
              {isDepartureModified 
                ? t('filters.departureAt', { time: formattedTime })
                : t('filters.departureNow')
              }
            </span>
          </div>
          {showDepartureFilter ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {/* Transport Filter Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-between bg-gray-800 text-white px-4 py-2 rounded-md transition-all hover:bg-gray-700"
        >
          <div className="flex items-center gap-2">
            <Filter size={18} />
            <span>{t('filters.transport')}</span>
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
      <button onClick={() => setActiveView("routes")} className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600">
        {t('seeRoutes')}
      </button>
    </div>
  );
};

export default RoutePlanner;
