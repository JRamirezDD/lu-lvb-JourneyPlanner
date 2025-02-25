"use client";

import { useState } from "react";
import RoutePlanner from "./RoutePlanner";
import RouteView from "./RouteView";
import SelectedRouteDetails from "./SelectedRouteDetails";
import StationDetails from "./StationDetails";

const ControlPanel = () => {
  const [activeView, setActiveView] = useState<
    "planner" | "routes" | "details" | "station"
  >("planner");

  return (
    <div className="w-full h-full bg-white shadow-lg overflow-y-auto">
      <div className="p-4 pb-32">
        <nav className="flex space-x-2 mb-4">
          <button
            onClick={() => setActiveView("planner")}
            className={`px-4 py-2 rounded transition-colors ${
              activeView === "planner"
                ? "bg-[#1a365d] text-white"
                : "hover:bg-[#fef9c3]"
            }`}
          >
            Plan
          </button>
          <button onClick={() => setActiveView("routes")}>Routes</button>
          <button onClick={() => setActiveView("details")}>Details</button>
          <button onClick={() => setActiveView("station")}>Station</button>
        </nav>

            {activeView === "planner" && <RoutePlanner setActiveView={setActiveView} />}
            {activeView === "routes" && <RouteView setActiveView={setActiveView} />}
            {activeView === "details" && <SelectedRouteDetails />}
            {activeView === "station" && <StationDetails />}
      </div>
    </div>
  );
};

export default ControlPanel;
