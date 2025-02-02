"use client"

import { useState } from "react";
import RoutePlanner from "./RoutePlanner";
import RouteView from "./RouteView";
import SelectedRouteDetails from "./SelectedRouteDetails";
import StationDetails from "./StationDetails";

const ControlPanel = () => {
  const [activeView, setActiveView] = useState<"planner" | "routes" | "details" | "station">("planner");
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Control Panel */}
      <aside className={`w-[30rem] h-screen bg-white shadow-lg fixed left-0 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Toggle button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-10 top-4 w-10 h-10 bg-white shadow-lg rounded-r flex items-center justify-center"
        >
          {isOpen ? '←' : '→'}
        </button>

        <div className="p-4">
          <nav className="flex space-x-2 mb-4">
            <button onClick={() => setActiveView("planner")}>Plan</button>
            <button onClick={() => setActiveView("routes")}>Routes</button>
            <button onClick={() => setActiveView("details")}>Details</button>
            <button onClick={() => setActiveView("station")}>Station</button>
          </nav>

          {activeView === "planner" && <RoutePlanner setActiveView={setActiveView} />}
          {activeView === "routes" && <RouteView setActiveView={setActiveView} />}
          {activeView === "details" && <SelectedRouteDetails />}
          {activeView === "station" && <StationDetails />}
        </div>
      </aside>
    </>
  );
};

export default ControlPanel;
