import { Clock } from "lucide-react";
import PersonStanding from "../../../public/Walk.svg";
import Image from "next/image";
import React from "react";
import RoutePlanner from "./RoutePlanner";
import { useSettingsContext } from "@/contexts/settingsContext";
import { useOtpDataContext } from "@/contexts/DataContext/routingDataContext";

type ViewState = "planner" | "routes" | "details" | "station";

const RouteView = ({ setActiveView }: { setActiveView: (view: ViewState) => void }) => {
  const { translations } = useSettingsContext();
  const { otpData, loadingOtp, errorOtp, setSelectedItineraryIndex } = useOtpDataContext();

  const formatDuration = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`;
  };

  const formatTime = (timestamp: number): string => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const getTransportType = (mode: string): "Tram" | "Bus" | "S-Bahn" | "Walk" => {
    switch (mode) {
      case "TRAM": return "Tram";
      case "BUS": return "Bus";
      case "SUBURB": return "S-Bahn";
      case "WALK": return "Walk";
      default: return "Walk";
    }
  };

  const handleRouteClick = (index: number) => {
    setSelectedItineraryIndex(index);
    setActiveView("details");
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Route Planner Section */}
      <RoutePlanner setActiveView={setActiveView} />

      {/* Routes List Section */}
      <div className="border-t pt-4">
        <h2 className="text-lg font-bold mb-4">
          {translations?.ControlPanel?.routes?.availableRoutes || "Available Routes"}
        </h2>

        {loadingOtp && <div>Loading routes...</div>}
        {errorOtp && <div>Error loading routes: {errorOtp}</div>}
        
        {otpData && (
          <ul className="space-y-3">
            {otpData.plan.itineraries.slice(0, 5).map((itinerary, idx) => (
              <li
                key={idx}
                className="border border-[#1a365d]/10 rounded-lg hover:bg-[#fef9c3]/20 cursor-pointer transition-colors overflow-hidden"
                onClick={() => handleRouteClick(idx)}
              >
                {/* Time Header */}
                <div className="flex items-center justify-between p-2 bg-[#1a365d]/5">
                  <span className="font-medium">
                    {formatTime(itinerary.startTime)} - {formatTime(itinerary.endTime)}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{formatDuration(itinerary.duration)}</span>
                  </div>
                </div>

                {/* Route Visualization */}
                <div className="p-3 flex items-center gap-1">
                  {itinerary.legs.map((leg, index) => (
                    <React.Fragment key={index}>
                      {/* Transport Icon */}
                      {leg.mode === "WALK" ? (
                        <div className="flex items-center gap-1 text-gray-600 bg-gray-100 px-2 py-1 rounded text-sm">
                          <Image 
                            src={PersonStanding}
                            alt="Walking"
                            width={14}
                            height={14}
                          />
                          <span>{Math.round(leg.duration / 60)}</span>
                        </div>
                      ) : (
                        <div className={`px-3 py-1 rounded font-medium ${
                          leg.mode === 'TRAM' ? 'bg-red-600 text-white' :
                          leg.mode === 'BUS' ? 'bg-purple-600 text-white' :
                          'bg-green-600 text-white'
                        }`}>
                          {/* Add line number when available */}
                          {leg.mode}
                        </div>
                      )}

                      {/* Connector Line */}
                      {index < itinerary.legs.length - 1 && (
                        <div className="h-[2px] w-4 bg-gray-300" />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Departure Info */}
                <div className="px-3 pb-2 text-sm text-gray-600">
                  {translations?.ControlPanel?.routes?.leaves || "Leaves"} {formatTime(itinerary.startTime)}{" "}
                  {translations?.ControlPanel?.routes?.from || "from"} {itinerary.legs[0].from.name}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RouteView;
