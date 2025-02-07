import { ChevronLeft, ChevronRight, Clock, Info } from "lucide-react";
import PersonStanding from "../../../public/Walk.svg";
import Image from "next/image";
import { useState } from "react";
import { useSettingsContext } from "@/contexts/settingsContext";

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

const getTransportColor = (type: string) => {
  switch (type) {
    case "tram":
      return "bg-red-600";
    case "s-bahn":
      return "bg-green-600";
    case "bus":
      return "bg-purple-600";
    case "walk":
      return "bg-gray-200";
    default:
      return "bg-gray-400";
  }
};

const getLineColor = (type: string) => {
  switch (type) {
    case "tram":
      return "border-red-600";
    case "s-bahn":
      return "border-green-600";
    case "bus":
      return "border-purple-600";
    default:
      return "border-gray-200";
  }
};

const SelectedRouteDetails = () => {
  const { translations } = useSettingsContext(); // Get translations from context
  const [currentRouteIndex, setCurrentRouteIndex] = useState(0);
  const currentRoute = routes[currentRouteIndex];

  const handlePrevRoute = () => {
    setCurrentRouteIndex((prev) => (prev > 0 ? prev - 1 : routes.length - 1));
  };

  const handleNextRoute = () => {
    setCurrentRouteIndex((prev) => (prev < routes.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-[#1a365d] text-white">
        <button className="p-2 hover:bg-gray-100 rounded-full" onClick={handlePrevRoute}>
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-xl font-bold">
          {translations?.ControlPanel?.routeDetails?.itinerary || "Itinerary"} ({currentRouteIndex + 1}/{routes.length})
        </h2>
        <button className="p-2 hover:bg-gray-100 rounded-full" onClick={handleNextRoute}>
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Journey Overview */}
      <div className="flex justify-between items-center p-4 border-b bg-gray-50">
        <div className="flex items-center gap-3">
          <Clock size={20} className="text-gray-700" />
          <div>
            <div className="font-medium text-lg">{currentRoute.duration}</div>
            <div className="text-sm text-gray-600">
              {currentRoute.startTime} - {currentRoute.endTime}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image src={PersonStanding} alt="Walking" width={20} height={20} className="text-gray-700" />
          <div>
            <div className="font-medium">{currentRoute.walkDistance}</div>
            <div className="text-sm text-gray-600">{currentRoute.walkDuration}</div>
          </div>
        </div>
      </div>

      {/* Required Ticket */}
      <div className="flex justify-between items-center px-6 py-3 border-b bg-[#fef9c3]/30">
        <div className="text-gray-700">{translations?.ControlPanel?.routeDetails?.requiredTicket || "Required Ticket"}</div>
      </div>

      {/* Detailed Steps */}
      <div className="flex-1">
        <div className="relative p-4">
          {currentRoute.steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              {/* Time Column */}
              <div className="w-16 flex flex-col items-center">
                <span className="font-medium text-gray-900">{step.time}</span>
                {index < currentRoute.steps.length - 1 && (
                  <div className={`h-full border-l-4 my-2 transition-all ${getLineColor(step.type)}`} />
                )}
              </div>

              {/* Content Column */}
              <div className="flex-1 pb-8">
                {/* Transport Badge and Info */}
                {step.type !== "start" && step.type !== "end" && (
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm ${getTransportColor(step.type)}`}>
                      {step.type === "walk" ? (
                        <>
                          <Image src={PersonStanding} alt="Walking" width={18} height={18} className="text-gray-700" />
                          <span className="text-gray-700 font-medium">
                            {translations?.ControlPanel?.routeDetails?.walkTime?.replace(
                              "{duration}",
                              step.duration || "0"
                            ) || `Walk ${step.duration} min`}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-white font-medium">{step.line}</span>
                          <span className="text-white/90">
                            {translations?.ControlPanel?.routeDetails?.directions?.step.direction || ""}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Additional Info */}
                    {(step.type === "tram" || step.type === "s-bahn" || step.type === "bus") && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Info size={16} />
                        <span>
                          {step.platform === "underground"
                            ? translations?.ControlPanel?.routeDetails?.underground || "Underground"
                            : translations?.ControlPanel?.routeDetails?.platform?.replace("{number}", step.platform || "")}
                        </span>
                        •
                        <span>
                          {translations?.ControlPanel?.routeDetails?.stops?.replace("{count}", step.stops?.toString() || "0")} (
                          {translations?.ControlPanel?.routeDetails?.duration?.replace(
                            "{duration}",
                            step.stopDuration || "0"
                          )}
                          )
                        </span>
                      </div>
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
