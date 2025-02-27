"use client";

import { useState } from "react";
import RoutePlanner from "./RoutePlanner";
import RouteView from "./RouteView";
import SelectedRouteDetails from "./SelectedRouteDetails";
import StationDetails from "./StationDetails";

interface ControlPanelProps {
  activeView: "planner" | "routes" | "details" | "station";
  setActiveView: (view: "planner" | "routes" | "details" | "station") => void;
  selectedStop: { stop_id: string; stop_name: string } | null;
}

const ControlPanel = ({ activeView, setActiveView, selectedStop }: ControlPanelProps) => {
  return (
    <div className="w-full h-full bg-white shadow-lg overflow-y-auto text-primary-blue">
      <div className="p-4 pb-32">
        <nav className="flex space-x-2 mb-4">
          <button
            onClick={() => setActiveView("planner")}
            className={`px-4 py-2 rounded transition-colors ${
              activeView === "planner"
                ? "bg-primary-yellow text-primary-blue"
                : "hover:bg-primary-yellow/10"
            }`}
          >
            Plan
          </button>
          <button 
            onClick={() => setActiveView("routes")}
            className={`px-4 py-2 rounded transition-colors ${
              activeView === "routes"
                ? "bg-primary-yellow text-primary-blue"
                : "hover:bg-primary-yellow/10"
            }`}
          >
            Routes
          </button>
          <button
            onClick={() => setActiveView("details")}
            className={`px-4 py-2 rounded transition-colors ${
              activeView === "details"
                ? "bg-primary-yellow text-primary-blue"
                : "hover:bg-primary-yellow/10"
            }`}
          >
            Details
          </button>
          <button
            onClick={() => setActiveView("station")}
            className={`px-4 py-2 rounded transition-colors ${
              activeView === "station"
                ? "bg-primary-yellow text-primary-blue"
                : "hover:bg-primary-yellow/10"
            }`}
          >
            Station
          </button>
        </nav>

        {activeView === "planner" && <RoutePlanner setActiveView={setActiveView} />}
        {activeView === "routes" && <RouteView setActiveView={setActiveView} />}
        {activeView === "details" && <SelectedRouteDetails />}
        {activeView === "station" && selectedStop && (
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
