import { useState, useEffect } from "react";
import { ChevronLeft, Star, AlertTriangle, Clock, Info } from "lucide-react";
import { useSettingsContext } from "@/contexts/settingsContext";
import { useStopmonitorDataContext } from "@/contexts/DataContext/stopmonitorDataContext";

interface Departure {
  line: string;
  type: "tram" | "bus" | "s-bahn";
  destination: string;
  time: string;
  platform: string;
  minutes: number;
}

interface Disruption {
  type: "delay" | "cancellation" | "construction";
  lines: string[];
  message: string;
  until: string;
}

interface StationDetailsProps {
  stopId: string;
  stopName: string;
}

const StationDetails = ({ stopId, stopName }: StationDetailsProps) => {  // Default to Leipzig Hauptbahnhof for now
  const { translations } = useSettingsContext();
  const { 
    stopMonitorData, 
    loadingStopMonitor, 
    errorStopMonitor,
    fetchStopMonitor 
  } = useStopmonitorDataContext();
  
  const [activeTab, setActiveTab] = useState<"now" | "timetable" | "disruptions">("now");

  useEffect(() => {
    // Fetch stop monitor data when component mounts
    const fetchData = async () => {

      try {
        console.log("Fetching stop monitor data for stopId:", stopId);
        await fetchStopMonitor({
          stopid: stopId,
          date: new Date().toISOString().split('T')[0].replace(/-/g, ''), // Format: YYYYMMDD
          minutes: "60",  // Show next hour of departures
          max_items: "10" // Limit to 10 items
        });
      } catch (error) {
        console.error('Error fetching stop monitor data:', error);
      }
    };

    fetchData();
  }, [stopId]);

  // Add logging
  console.log('StopMonitor Data:', {
    data: stopMonitorData,
    loading: loadingStopMonitor,
    error: errorStopMonitor,
    items: stopMonitorData?.items,
    firstItem: stopMonitorData?.items?.[0]
  });

  const getTransportType = (type: string): "tram" | "bus" | "s-bahn" => {
    switch (type.toLowerCase()) {
      case "tram": return "tram";
      case "bus": return "bus";
      default: return "s-bahn";
    }
  };

  const formatTime = (time: string) => {
    return time.substring(0, 5); // Format HH:MM
  };

  const departures = stopMonitorData?.items.map(item => ({
    line: item.line,
    type: getTransportType(item.transport_type),
    destination: item.trip_headsign,
    time: formatTime(item.departure_time),
    platform: item.track || item.track_scheduled || "",
    minutes: Math.round(item.dep_waiting_time / 60)
  })) || [];

  const disruptions: Disruption[] = [
    {
      type: "construction",
      lines: ["11", "15"],
      message: "Bauarbeiten zwischen Wilhelm-Leuschner-Platz und Augustusplatz. Bitte planen Sie mehr Zeit ein.",
      until: "15.04.2024",
    },
    {
      type: "delay",
      lines: ["S3"],
      message: "Verzögerungen wegen technischer Störung am Hauptbahnhof.",
      until: "Heute",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b bg-primary-yellow text-primary-blue">
        <button className="p-2 hover:bg-primary-yellow/80 rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button>
        <div className="flex-1">
          <h2 className="text-xl font-bold">Station {stopName}</h2>
        </div>
        <button className="p-2 hover:bg-[#2d4a7c] rounded-full transition-colors">
          <Star size={24} />
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b">
        {(["now", "timetable", "disruptions"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-4 py-3 transition-colors ${
              activeTab === tab 
                ? "text-primary-blue font-medium border-b-2 border-primary-blue" 
                : "text-primary-blue/60 hover:bg-primary-yellow/10"
            }`}
          >
            {translations?.ControlPanel?.station?.[tab] || (tab === "now" ? "Right Now" : tab)}
          </button>
        ))}
      </div>

      {/* Station tabs */}
      {(activeTab === 'now' || activeTab === 'timetable') && (
        <div className="flex flex-col">
          {loadingStopMonitor && (
            <div className="p-4 text-center text-gray-600">
              Loading departures...
            </div>
          )}

          {errorStopMonitor && (
            <div className="p-4 text-center text-red-600">
              {errorStopMonitor}
            </div>
          )}

          {!loadingStopMonitor && !errorStopMonitor && (
            <>
              <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-gray-50 text-sm text-gray-600">
                <div className="col-span-2">{translations?.ControlPanel?.station?.columns?.route || "Route"}</div>
                <div className="col-span-6">{translations?.ControlPanel?.station?.columns?.destination || "Destination"}</div>
                <div className="col-span-2 text-right">{translations?.ControlPanel?.station?.columns?.leavingAt || "Leaving At"}</div>
                <div className="col-span-2 text-right">{translations?.ControlPanel?.station?.columns?.platform || "Platform"}</div>
              </div>

              {/* Departures */}
              {departures.map((departure, index) => (
                <div key={index} className="grid grid-cols-12 gap-2 px-4 py-3 border-b hover:bg-[#fef9c3]/10 items-center">
                  <div className="col-span-2">
                    <div
                      className={`inline-flex px-3 py-1 rounded-md font-medium text-white ${
                        departure.type === "tram" ? "bg-red-600" : departure.type === "bus" ? "bg-purple-600" : "bg-green-600"
                      }`}
                    >
                      {departure.line}
                    </div>
                  </div>
                  <div className="col-span-6 font-medium text-gray-900">{departure.destination}</div>
                  <div className="col-span-2 text-right">
                    <div className="font-medium text-gray-900">{departure.time}</div>
                    {activeTab === "now" && (
                      <div className="text-sm text-green-600">
                        {translations?.ControlPanel?.station?.minutes?.replace("{count}", departure.minutes.toString()) || `${departure.minutes} min`}
                      </div>
                    )}
                  </div>
                  <div className="col-span-2 text-right font-medium">{departure.platform}</div>
                </div>
              ))}
            </>
          )}
        </div>
      )}

      {/* Disruptions Tab Content */}
      {activeTab === "disruptions" && (
        <div className="p-4 space-y-4">
          {disruptions.length === 0 ? (
            <p className="text-center text-gray-600 py-8">{translations?.ControlPanel?.station?.noDisruptions || "No current disruptions"}</p>
          ) : (
            disruptions.map((disruption, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="bg-[#1a365d] text-white px-4 py-2 flex items-center gap-2">
                  <AlertTriangle size={18} />
                  <span className="font-medium">
                    {translations?.ControlPanel?.station?.disruption?.type?.[disruption.type] || disruption.type}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    {disruption.lines.map((line) => (
                      <span key={line} className="px-2 py-1 bg-gray-100 rounded text-sm font-medium">
                        {line}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700">{disruption.message}</p>
                  <p className="text-sm text-gray-500 mt-2">{translations?.ControlPanel?.station?.disruption?.until || "Until"}: {disruption.until}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default StationDetails;
