"use client";

import { useEffect, useState, useRef } from "react";
import RoutePlanner from "./RoutePlanner";
import RouteView from "./RouteView";
import SelectedRouteDetails from "./SelectedRouteDetails";
import StationDetails from "./StationDetails";
import { useUIContext } from "@/contexts/uiContext";
import { useMapContext } from "@/contexts/mapContext";
import { Stop } from "@/api/nearbysearchService/dto/nearbysearchResponse";
import extractTrailingDigits from "@/utils/extractTrailingDigits";

const ControlPanel = () => {
  const { viewMode, setViewMode } = useUIContext();
  const { selectedStop } = useMapContext();
  const { selectedNearbySearchItem } = useMapContext();

  // We'll store the stable Stop ID here.
  const [stableStopId, setStableStopId] = useState<string | null>(null);
  const [stableStopName, setStableStopName] = useState<string | null>(null);
  // Use a ref to ensure we only update when a new Stop is selected.

  // When a new nearby search item is selected…
  useEffect(() => {
    if (selectedNearbySearchItem?.data instanceof Stop) {
      const newStopId = extractTrailingDigits(selectedNearbySearchItem.id);
      setStableStopId(newStopId);
      setStableStopName(selectedNearbySearchItem.name);
      setViewMode("STATION");
      console.log("Updated stableStopId to:", newStopId);
    } else {
      // When a non-Stop is selected, do nothing so stableStopId remains unchanged.
      console.log("Selected item is not a Stop; stableStopId remains:", stableStopId);
    }
  }, [selectedNearbySearchItem, setViewMode]);

  return (
    <div className="w-full h-full bg-white shadow-lg overflow-y-auto text-primary-blue">
      <div className="p-4 pb-32">
        <nav className="flex space-x-2 mb-4">
          <button
            onClick={() => setViewMode("STATION")}
            className={`px-4 py-2 rounded transition-colors ${
              viewMode === "STATION"
                ? "bg-primary-yellow text-primary-blue"
                : "hover:bg-primary-yellow/10"
            }`}
          >
            Station
          </button>
        </nav>

        {viewMode === "DEFAULT" && <RoutePlanner setActiveView={setViewMode} />}
        {viewMode === "PLAN" && <RouteView setActiveView={setViewMode} />}
        {viewMode === "ITINERARY" && <SelectedRouteDetails />}
        {viewMode === "STATION" && (
          <StationDetails 
            stopId={selectedStop?.stop_id} 
            stopName={selectedStop?.stop_name} 
          />
        )}
        {viewMode === "STATION" && stableStopId && (
          <StationDetails 
            stopId={stableStopId} 
            stopName={stableStopName} 
          />
        )}
      </div>
    </div>
  );
};

export default ControlPanel;
