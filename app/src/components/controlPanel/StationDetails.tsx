import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, Star, AlertTriangle } from "lucide-react";
import { useSettingsContext } from "@/contexts/settingsContext";
import { useStopmonitorDataContext } from "@/contexts/DataContext/stopmonitorDataContext";
import { useUIContext } from "@/contexts/uiContext";
import { useMapContext } from "@/contexts/mapContext";
import TramLogo from "../../../public/icons/otp-icons/Tram-Logo.svg";
import S_BahnLogo from "../../../public/icons/otp-icons/S-Bahn-Logo.svg";
import BusLogo from "../../../public/icons/otp-icons/Bus-Logo.svg";
import TrainLogo from "../../../public/icons/otp-icons/Train.svg";
import Image from "next/image";

interface Departure {
  line: string;
  type: "tram" | "bus" | "s-bahn" | "train" | "regional";
  color: string;
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
  const { setSelectedNearbySearchItem, setSelectedStop } = useMapContext();
  
  // Add debug logging for UI context
  console.log("StationDetails UI Context:", { viewMode, previousViewMode, navigationHistory });
  console.log("StationDetails Props:", { stopId, stopName });
  
  // Default values for stopId and stopName
  const effectiveStopId = stopId || "0013000"; // Default to "0013000" if no stopId provided
  const effectiveStopName = stopName || "Leipzig Hauptbahnhof"; // Default name if none provided
  
  const [activeTab, setActiveTab] = useState<"now" | "disruptions">("now");
  const [currentFetchId, setCurrentFetchId] = useState<string | null>(null);

  // Handle back button click
  const handleBackClick = () => {
    console.log("Back button clicked, clearing selections and navigating back");
    
    // Clear both selection sources to prevent bugs when searching multiple times
    setSelectedNearbySearchItem(null);
    setSelectedStop(null);
    
    // Navigate back to previous view
    goToPreviousViewMode();
  };

  // Reset the tab when the stopId changes
  useEffect(() => {
    setActiveTab("now");
    
    // Generate a new fetch ID to track the current fetch
    setCurrentFetchId(effectiveStopId);
    
    console.log("StopId changed, resetting tab and setting new fetch ID:", effectiveStopId);
  }, [effectiveStopId]);

  useEffect(() => {
    // Fetch stop monitor data when component mounts or stopId changes
    const fetchData = async () => {
      // Store the current fetch ID to check if it's still valid when the fetch completes
      const fetchId = effectiveStopId;
      setCurrentFetchId(fetchId);
      
      try {
        console.log("Fetching stop monitor data for stopId:", effectiveStopId);
        await fetchStopMonitor({
          stopid: effectiveStopId,
          date: new Date().toISOString().split('T')[0].replace(/-/g, ''), // Format: YYYYMMDD
          minutes: "60",  // Show next hour of departures
          max_items: "10" // Limit to 10 items
        });
        
        // Check if this fetch is still the current one
        if (fetchId !== effectiveStopId) {
          console.log("Fetch completed but a newer fetch was initiated, ignoring results");
          return;
        }
        
        console.log("Fetch completed successfully for stopId:", effectiveStopId);
      } catch (error) {
        console.error('Error fetching stop monitor data:', error);
      }
    };

    fetchData();
  }, [effectiveStopId, fetchStopMonitor]);

  // Add logging
  console.log('StopMonitor Data:', {
    data: stopMonitorData,
    loading: loadingStopMonitor,
    error: errorStopMonitor,
    items: stopMonitorData?.items,
    firstItem: stopMonitorData?.items?.[0]
  });

  const getTransportType = (type: string, line: string): "tram" | "bus" | "s-bahn" | "train" | "regional" => {
    // First check the line prefix for regional trains
    if (line.startsWith('RE') || line.startsWith('RB')) {
      return "regional";
    }
    
    // Then check the line prefix for S-Bahn
    if (line.startsWith('S')) {
      return "s-bahn";
    }
    
    // Finally check the transport type
    const lowerType = type.toLowerCase();
    if (lowerType.includes("tram")) return "tram";
    if (lowerType.includes("bus")) return "bus";
    if (lowerType.includes("train") || lowerType.includes("rail")) return "train";
    if (lowerType.includes("s-bahn") || lowerType.includes("sbahn")) return "s-bahn";
    
    // Default fallback based on line prefix
    if (line.startsWith('T')) return "tram";
    if (line.startsWith('B')) return "bus";
    
    return "s-bahn"; // Default fallback
  };

  const getTransportColor = (type: string, line: string): string => {
    const transportType = getTransportType(type, line);
    switch (transportType) {
      case "tram": return "bg-red-600";
      case "bus": return "bg-purple-600";
      case "train": return "bg-blue-600";
      case "regional": return "bg-blue-600";
      case "s-bahn": return "bg-green-600";
      default: return "bg-gray-600";
    }
  };

  const formatTime = (time: string) => {
    return time.substring(0, 5); // Format HH:MM
  };

  const departures = stopMonitorData?.items.map(item => ({
    line: item.line,
    type: getTransportType(item.transport_type, item.line),
    color: item.route_color === "" ? "bg-gray-600" : "#" + item.route_color,    
    destination: item.trip_headsign,
    time: formatTime(item.departure_time),
    platform: item.track || item.track_scheduled || "",
    minutes: Math.round(item.dep_waiting_time / 60)
  })) || [];

  // Get the appropriate icon for each transport type
  const getTransportIcon = (type: "tram" | "bus" | "s-bahn" | "train" | "regional") => {
    switch (type) {
      case "tram": return TramLogo;
      case "bus": return BusLogo;
      case "s-bahn": return S_BahnLogo;
      case "train": return TrainLogo;
      case "regional": return TrainLogo;
      default: return null;
    }
  };

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
          onClick={handleBackClick}
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
              <div className="grid grid-cols-12 gap-4 px-4 py-2 bg-gray-50 text-sm text-gray-600">
                <div className="col-span-2">{translations?.ControlPanel?.station?.columns?.route || "Route"}</div>
                <div className="col-span-6">{translations?.ControlPanel?.station?.columns?.destination || "Destination"}</div>
                <div className="col-span-2 text-right">{translations?.ControlPanel?.station?.columns?.leavingAt || "Leaving At"}</div>
                <div className="col-span-2 text-right">{translations?.ControlPanel?.station?.columns?.platform || "Platform"}</div>
              </div>

              {/* Departures */}
              {departures.map((departure, index) => (
                <div key={index} className="grid grid-cols-12 gap-5 px-4 py-3 border-b hover:bg-[#fef9c3]/10 items-center">
                  <div className="col-span-2 flex justify-start">
                    <div
                      className={`inline-flex px-2 py-0.5 min-w-[60px] justify-center rounded-md font-medium text-white tracking-wider items-center gap-1`}
                      style={{
                        backgroundColor: departure.color
                      }}
                    >
                      {getTransportIcon(departure.type) && (
                        <Image 
                          src={getTransportIcon(departure.type)} 
                          alt={departure.type} 
                          width={16}
                          height={16}
                        />
                      )}
                      {departure.line}
                    </div>
                  </div>
                  <div className="col-span-6 font-medium text-gray-900 pl-2">{departure.destination}</div>
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
                  <div className="flex flex-wrap gap-3 mb-3">
                    {disruption.lines.map((line) => {
                      // Determine color based on line prefix
                      let bgColor = "bg-gray-100";
                      let type: "tram" | "bus" | "s-bahn" | "train" | "regional" = "train";
                      
                      if (line.startsWith('RE') || line.startsWith('RB')) {
                        bgColor = "bg-blue-100 text-blue-800";
                        type = "regional";
                      }
                      else if (line.startsWith('S')) {
                        bgColor = "bg-green-100 text-green-800";
                        type = "s-bahn";
                      }
                      else if (line.match(/^\d+E?$/)) {
                        bgColor = "bg-red-100 text-red-800";
                        type = "tram";
                      }
                      else if (line.match(/^\d+[A-Z]$/)) {
                        bgColor = "bg-purple-100 text-purple-800";
                        type = "bus";
                      }
                      
                      return (
                        <span key={line} className={`px-2 py-0.5 min-w-[60px] text-center rounded text-sm font-medium tracking-wider flex items-center justify-center gap-1 ${bgColor}`}>
                          {getTransportIcon(type) && (
                            <Image 
                              src={getTransportIcon(type)} 
                              alt={type} 
                              width={12}
                              height={12}
                            />
                          )}
                          {line}
                        </span>
                      );
                    })}
                  </div>
                  <p className="text-gray-700 mt-2">{disruption.message}</p>
                  <p className="text-sm text-gray-500 mt-3">{translations?.ControlPanel?.station?.disruption?.until || "Until"}: {disruption.until}</p>
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
