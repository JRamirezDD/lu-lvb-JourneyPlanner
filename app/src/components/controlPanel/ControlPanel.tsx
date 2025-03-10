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
  const { selectedStop, selectedNearbySearchItem, setSelectedNearbySearchItem } = useMapContext();

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
      
      // Set the view mode to STATION
      // The UIContext will handle preserving the previous view mode
      console.log("Setting view mode to STATION from map selection");
      setViewMode("STATION");
      console.log("Updated stableStopId to:", newStopId);
    } else {
      // When a non-Stop is selected, do nothing so stableStopId remains unchanged.
      console.log("Selected item is not a Stop; stableStopId remains:", stableStopId);
    }
  }, [selectedNearbySearchItem, setViewMode]);

  // Clear selectedNearbySearchItem when navigating away from STATION view
  useEffect(() => {
    if (viewMode !== "STATION" && selectedNearbySearchItem) {
      console.log("Clearing selectedNearbySearchItem as we're no longer in STATION view");
      setSelectedNearbySearchItem(null);
    }
  }, [viewMode, selectedNearbySearchItem, setSelectedNearbySearchItem]);

  return (
    <div className="w-full h-full bg-white shadow-lg overflow-y-auto text-primary-blue">
      <div className="p-4 pb-32">  

        {viewMode === "DEFAULT" && <RoutePlanner setActiveView={setViewMode} />}
        {viewMode === "PLAN" && <RouteView setActiveView={setViewMode} />}
        {viewMode === "ITINERARY" && <SelectedRouteDetails />}
        {viewMode === "STATION" && selectedStop && (
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
