import { ChevronLeft, ChevronRight, Clock, Info, ChevronDown } from "lucide-react";
import PersonStanding from "../../../public/Walk.svg";
import Image from "next/image";
import { useState } from "react";
import { useSettingsContext } from "@/contexts/settingsContext";
import { useOtpDataContext } from "@/contexts/DataContext/routingDataContext";
import { TransportMode } from "@/types/TransportMode";
import TramLogo from "../../../public/Tram-Logo.svg";
import S_BahnLogo from "../../../public/S-Bahn-Logo.svg";
import BusLogo from "../../../public/Bus-Logo.svg";

interface RouteData {
  id: number;
  duration: string;
  startTime: string;
  endTime: string;
  walkDistance: string;
  walkDuration: string;
  steps: {
    time: string;
    type: "start" | "walk" | "tram" | "bus" | "s-bahn" | "transfer" | "end";
    line?: string;
    from?: string;
    to?: string;
    duration?: string;
    distance?: string;
    platform?: string;
    direction?: string;
    stops?: number;
    stopDuration?: string;
    transferDuration?: string;
  }[];
}

const routes: RouteData[] = [
  {
    id: 1,
    duration: "28 min",
    startTime: "13:05",
    endTime: "13:33",
    walkDistance: "400 m",
    walkDuration: "6 min",
    steps: [
      { time: "13:05", type: "start", from: "Leipzig Hauptbahnhof", to: "Willy-Brandt-Platz" },
      { time: "13:07", type: "tram", line: "4", direction: "toStotteritz", platform: "2", stops: 5, stopDuration: "12" },
      { time: "13:19", type: "transfer", from: "Markt", transferDuration: "4" },
      { time: "13:23", type: "tram", line: "15", direction: "toMeusdorf", platform: "1", stops: 2, stopDuration: "8" },
      { time: "13:33", type: "end", from: "Universität Leipzig", to: "Augustusplatz" }
    ]
  }
];

type LegType = 'START' | 'END' | 'WALK' | 'TRANSFER' | TransportMode;

const getTransportColor = (mode: TransportMode) => {
  switch (mode) {
    case "TRAM": return "bg-red-600";
    case "SUBURB": return "bg-green-600";
    case "BUS": return "bg-purple-600";
    case "WALK": return "bg-gray-200";
    default: return "bg-gray-400";
  }
};

const getLineColor = (mode: TransportMode) => {
  switch (mode) {
    case "TRAM": return "border-red-600";
    case "SUBURB": return "border-green-600";
    case "BUS": return "border-purple-600";
    default: return "border-gray-200";
  }
};

const getLegType = (mode: TransportMode): LegType => {
  if (mode === 'WALK') return 'WALK';
  if (mode === 'TRANSFER') return 'TRANSFER';
  return mode;
};

const formatTime = (timestamp: number): string => {
  // Convert the timestamp to a Date object
  const date = new Date(timestamp);
  
  // Extract hours and minutes from the timestamp
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  
  // Format as HH:MM
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`;
};

const getTransportLogo = (mode: TransportMode) => {
  switch (mode) {
    case "TRAM": return TramLogo;
    case "SUBURB": return S_BahnLogo;
    case "BUS": return BusLogo;
    default: return null;
  }
};

const SelectedRouteDetails = () => {
  const { otpData, selectedItineraryIndex, setSelectedItineraryIndex } = useOtpDataContext();
  const { translations } = useSettingsContext();
  const [expandedLegs, setExpandedLegs] = useState<number[]>([]);

  // Fixed debug logging
  console.log('Selected Itinerary Data:', {
    otpData,
    selectedItineraryIndex,
    legs: selectedItineraryIndex !== null ? otpData?.plan?.itineraries?.[selectedItineraryIndex]?.legs : null
  });

  if (!otpData || selectedItineraryIndex === null) {
    return <div>No route selected</div>;
  }

  const selectedItinerary = otpData.plan.itineraries[selectedItineraryIndex];
  const totalRoutes = Math.min(otpData.plan.itineraries.length, 5);

  // Updated location name handler with more defensive checks
  const getLocationName = (leg: any, isDestination: boolean) => {
    try {
      // Debug log
      console.log('Leg data:', leg);
      
      if (!leg) return "Unknown location";

      const location = isDestination ? leg.to.name : leg.from.name;
      
      // Debug log
      console.log('Location data:', location);

      // Handle different possible formats
      if (!location) return "Unknown location";
      if (typeof location === 'string') return location;
      if (typeof location.name === 'string') return location.name;
      if (typeof location === 'object' && 'name' in location) {
        return String(location.name);
      }

      return "Unknown location";
    } catch (error) {
      console.error('Error getting location name:', error);
      return "Unknown location";
    }
  };

  const handlePrevRoute = () => {
    if (selectedItineraryIndex > 0) {
      setSelectedItineraryIndex(selectedItineraryIndex - 1);
    }
  };

  const handleNextRoute = () => {
    if (selectedItineraryIndex < totalRoutes - 1) {
      setSelectedItineraryIndex(selectedItineraryIndex + 1);
    }
  };

  const toggleLegExpansion = (index: number) => {
    setExpandedLegs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-[#1a365d] text-white">
        <div className="flex items-center gap-4">
          <div>
            <div className="text-sm opacity-80">
              {formatTime(selectedItinerary.startTime)} - {formatTime(selectedItinerary.endTime)}
            </div>
            <div className="font-medium">{formatDuration(selectedItinerary.duration)}</div>
          </div>
        </div>
        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevRoute}
            disabled={selectedItineraryIndex === 0}
            className={`p-1 rounded ${
              selectedItineraryIndex === 0 ? 'text-gray-400' : 'hover:bg-[#2d4a7c]'
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          <span className="text-sm">
            {selectedItineraryIndex + 1} / {totalRoutes}
          </span>
          <button
            onClick={handleNextRoute}
            disabled={selectedItineraryIndex === totalRoutes - 1}
            className={`p-1 rounded ${
              selectedItineraryIndex === totalRoutes - 1 ? 'text-gray-400' : 'hover:bg-[#2d4a7c]'
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Steps Timeline */}
      <div className="p-4">
        <div className="space-y-6">
          {selectedItinerary.legs.map((leg, index) => (
            <div key={index} className="flex gap-4">
              {/* Time Column */}
              <div className="w-16 flex flex-col items-center">
                <span className="font-medium text-gray-900">{formatTime(leg.startTime)}</span>
                {index < selectedItinerary.legs.length - 1 && (
                  <div className={`h-full border-l-4 my-2 transition-all ${getLineColor(leg.mode)}`} />
                )}
              </div>

              {/* Content Column */}
              <div className="flex-1 pb-8">
                {/* Transport */}
                {getLegType(leg.mode) !== 'WALK' && (
                  <div className="flex items-center gap-3 mb-2">
                    {/* Transport Icon outside bubble */}
                    {getTransportLogo(leg.mode) && (
                      <Image 
                        src={getTransportLogo(leg.mode)!} 
                        alt={leg.mode} 
                        width={24} 
                        height={24} 
                      />
                    )}
                    {/* Route number in colored bubble */}
                    {leg.route && (
                      <div className={`px-3 py-1.5 rounded-full shadow-sm ${getTransportColor(leg.mode)}`}>
                        <span className="text-white font-medium">
                          {leg.route}
                        </span>
                      </div>
                    )}

                    {/* Additional Info */}
                    {(leg.mode === "TRAM" || leg.mode === "SUBURB" || leg.mode === "BUS") && (
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Info size={16} />
                          <span>
                            {translations?.ControlPanel?.routeDetails?.platform?.replace("{number}", leg.mode || "")}
                          </span>
                          •
                          <button 
                            onClick={() => toggleLegExpansion(index)}
                            className="flex items-center gap-1 hover:text-gray-900"
                          >
                            <span>
                              {translations?.ControlPanel?.routeDetails?.stops?.replace(
                                "{count}", 
                                leg.intermediateStops?.length?.toString() || "0"
                              )}
                            </span>
                            <ChevronDown 
                              size={16} 
                              className={`transform transition-transform ${
                                expandedLegs.includes(index) ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        </div>

                        {/* Collapsible Stops List */}
                        {expandedLegs.includes(index) && leg.intermediateStops && (
                          <div className="ml-6 mt-2 space-y-2">
                            {leg.intermediateStops.map((stop, stopIndex) => (
                              <div key={stopIndex} className="text-sm text-gray-600">
                                {stop.name}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
                
                {/* Location Name */}
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${
                    getLegType(leg.mode) === 'START' ? 'bg-green-500' :
                    getLegType(leg.mode) === 'END' ? 'bg-red-500' :
                    getLegType(leg.mode) === 'WALK' ? 'bg-gray-400' :
                    getTransportColor(leg.mode)
                  } ${
                    getLegType(leg.mode) !== 'WALK' && 
                    getLegType(leg.mode) !== 'START' && 
                    getLegType(leg.mode) !== 'END'
                      ? 'ring-2 ring-offset-2 ring-opacity-50' : ''
                  }`} />
                  <div>
                    <div className="font-medium text-gray-900">
                      {getLocationName(leg, index === 0)}
                    </div>
                    {index === selectedItinerary.legs.length - 1 && (
                      <div className="text-sm text-gray-600">
                        {getLocationName(leg, false)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Transfer Info */}
                {getLegType(leg.mode) === 'TRANSFER' && (
                  <div className="mt-2 text-sm font-medium text-orange-600">
                    {translations?.ControlPanel?.routeDetails?.transfer?.replace(
                      "{duration}",
                      leg.duration || "0"
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedRouteDetails;
