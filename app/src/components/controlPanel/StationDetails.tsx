import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, Star, AlertTriangle, Clock, Info } from "lucide-react";
import { useSettingsContext } from "@/contexts/settingsContext";
import { useStopmonitorDataContext } from "@/contexts/DataContext/stopmonitorDataContext";
import { useUIContext } from "@/contexts/uiContext";
import { useMapContext } from "@/contexts/mapContext";

interface Departure {
  line: string;
  type: "tram" | "bus" | "s-bahn";
  destination: string;
  time: string;
  platform: string;
  minutes: number;
}

interface Disruption {
  type: string;
  lines: string[];
  message: string;
  until: string;
  header?: string;
}

interface StationDetailsProps {
  stopId: string;
  stopName: string | null;
}

const StationDetails = ({ stopId, stopName }: StationDetailsProps) => {
  const { translations } = useSettingsContext();
  const { 
    stopMonitorData, 
    loadingStopMonitor, 
    errorStopMonitor,
    fetchStopMonitor 
  } = useStopmonitorDataContext();
  const { goToPreviousViewMode, viewMode, previousViewMode, navigationHistory } = useUIContext();
  const { setSelectedNearbySearchItem } = useMapContext();
  
  // Add debug logging for UI context
  console.log("StationDetails UI Context:", { viewMode, previousViewMode, navigationHistory });
  
  // Default values for stopId and stopName
  const effectiveStopId = stopId || "0013000"; // Default to "0013000" if no stopId provided
  const effectiveStopName = stopName || "Leipzig Hauptbahnhof"; // Default name if none provided
  
  const [activeTab, setActiveTab] = useState<"now" | "disruptions">("now");

  useEffect(() => {
    // Fetch stop monitor data when component mounts
    const fetchData = async () => {

      try {
        console.log("Fetching stop monitor data for stopId:", effectiveStopId);
        await fetchStopMonitor({
          stopid: effectiveStopId,
          date: new Date().toISOString().split('T')[0].replace(/-/g, ''), // Format: YYYYMMDD
          minutes: "60",  // Show next hour of departures
          max_items: "10" // Limit to 10 items
        });
      } catch (error) {
        console.error('Error fetching stop monitor data:', error);
      }
    };

    fetchData();
  }, [effectiveStopId]);

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

  // Extract alerts from stopMonitorData
  const disruptions: Disruption[] = useMemo(() => {
    if (!stopMonitorData?.items) return [];
    
    // Create a map to deduplicate alerts
    const alertMap = new Map<string, Disruption>();
    
    // Process all items and their alerts
    stopMonitorData.items.forEach(item => {
      if (item.alerts && item.alerts.length > 0) {
        item.alerts.forEach(alert => {
          // Use the description text as a unique key
          const key = alert.alertDescriptionText;
          
          if (!alertMap.has(key)) {
            // Format the date for display
            const endDate = new Date(alert.effectiveEndDate);
            const formattedDate = endDate.toLocaleDateString();
            
            // Map alert category to a type
            let type = "info";
            if (alert.alertCategory === 1) type = "delay";
            if (alert.alertCategory === 2) type = "cancellation";
            if (alert.alertCategory === 3) type = "construction";
            
            alertMap.set(key, {
              type: type,
              lines: [item.line], // Start with this line
              message: alert.alertDescriptionText,
              until: formattedDate,
              header: alert.alertHeaderText
            });
          } else {
            // Add this line to existing alert if not already included
            const existingAlert = alertMap.get(key)!;
            if (!existingAlert.lines.includes(item.line)) {
              existingAlert.lines.push(item.line);
            }
          }
        });
      }
    });
    
    return Array.from(alertMap.values());
  }, [stopMonitorData]);

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b bg-primary-yellow text-primary-blue">
        <button 
          className="p-2 hover:bg-primary-yellow/80 rounded-full transition-colors"
          onClick={() => {
            console.log("Back button clicked, navigating using goToPreviousViewMode");
            goToPreviousViewMode();
            setSelectedNearbySearchItem(null);
          }}
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex-1">
          <h2 className="text-xl font-bold">Station {effectiveStopName}</h2>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b">
        {(["now", "disruptions"] as const).map((tab) => (
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
      {activeTab === 'now' && (
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
                    <div className="text-sm text-green-600">
                      {translations?.ControlPanel?.station?.minutes?.replace("{count}", departure.minutes.toString()) || `${departure.minutes} min`}
                    </div>
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
                    {disruption.header || translations?.ControlPanel?.station?.disruption?.type?.[disruption.type] || disruption.type}
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
