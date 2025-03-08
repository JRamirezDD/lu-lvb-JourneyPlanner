"use client";

import { useEffect, useState } from "react";
import RoutePlanner from "./RoutePlanner";
import RouteView from "./RouteView";
import SelectedRouteDetails from "./SelectedRouteDetails";
import StationDetails from "./StationDetails";
import { useUIContext } from "@/contexts/uiContext";
import { useMapContext } from "@/contexts/mapContext";
import { ViewMode } from "@/types/ViewMode";

const ControlPanel = () => {
  const { viewMode, setViewMode } = useUIContext();
  const { selectedStop } = useMapContext();


  // If change in stationId, set viewMode to STATION
  useEffect(() => {
    if (selectedStop) {
      setViewMode("STATION");
    }
  }, [selectedStop]);

  return (
    <div className="w-full h-full bg-white shadow-lg overflow-y-auto text-primary-blue">
      <div className="p-4 pb-32">

        {viewMode === "DEFAULT" && <RoutePlanner setActiveView={setViewMode} />}
        {viewMode === "PLAN" && <RouteView setActiveView={setViewMode} />}
        {viewMode === "ITINERARY" && <SelectedRouteDetails />}
        {viewMode === "STATION" && selectedStop && (
          <StationDetails 
            stopId={selectedStop.stop_id} 
            stopName={selectedStop.stop_name} 
          />
        )}
      </div>
    </div>
  );
};

export default ControlPanel;
