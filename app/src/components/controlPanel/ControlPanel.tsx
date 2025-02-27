"use client";

import { useState } from "react";
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

  return (
    <div className="w-full h-full bg-white shadow-lg overflow-y-auto text-primary-blue">
      <div className="p-4 pb-32">
        <nav className="flex space-x-2 mb-4">
          <button
            onClick={() => setViewMode("DEFAULT")}
            className={`px-4 py-2 rounded transition-colors ${
              viewMode === "PLAN"
                ? "bg-primary-yellow text-primary-blue"
                : "hover:bg-primary-yellow/10"
            }`}
          >
            Plan
          </button>
          <button 
            onClick={() => setViewMode("PLAN")}
            className={`px-4 py-2 rounded transition-colors ${
              viewMode === "PLAN"
                ? "bg-primary-yellow text-primary-blue"
                : "hover:bg-primary-yellow/10"
            }`}
          >
            Routes
          </button>
          <button
            onClick={() => setViewMode("ITINERARY")}
            className={`px-4 py-2 rounded transition-colors ${
              viewMode === "ITINERARY"
                ? "bg-primary-yellow text-primary-blue"
                : "hover:bg-primary-yellow/10"
            }`}
          >
            Details
          </button>
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
