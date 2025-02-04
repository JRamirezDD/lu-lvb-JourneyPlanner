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
        {/* Toggle button - centered vertically */}
        <div className="absolute -right-10 top-1/2 -translate-y-1/2">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-20 bg-[#1a365d] text-white shadow-lg rounded-r flex items-center justify-center hover:bg-[#2d4a7c] transition-colors"
          >
            {isOpen ? '←' : '→'}
          </button>
        </div>

        {/* Scrollable content container with extra padding at bottom */}
        <div className="h-full overflow-y-auto">
          <div className="p-4 pb-32">
            <nav className="flex space-x-2 mb-4">
              <button 
                onClick={() => setActiveView("planner")} 
                className={`px-4 py-2 rounded transition-colors ${
                  activeView === "planner" ? 'bg-[#1a365d] text-white' : 'hover:bg-[#fef9c3]'
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
      </aside>
    </>
    
  );
};

export default ControlPanel;
