// MainView.tsx
"use client";
import React, { useEffect, useState } from "react";
import ControlPanel from "./controlPanel/ControlPanel";
import { MapWidget } from "./map/MapWidget";
import CenterMapButton from "./map/buttons/CenterMapButton";
import MapComponent from "./map/MapComponent";

const MainView: React.FC = () => {
  const [isVertical, setIsVertical] = useState(false);
  const [activeView, setActiveView] = useState<"planner" | "routes" | "details" | "station">("planner");

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = isVertical
    ? {
        display: "grid",
        gridTemplateRows: "1fr auto",
        width: "100%",
        height: "100%",
      }
    : {
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateColumns: "450px 1fr",
      };

  return (
    <div style={containerStyle}>
      {isVertical ? (
        <>
          <div style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%" }}>
            <MapComponent />
          </div>
          <div style={{ position: "relative", overflow: "hidden", width: "100%", height: "auto" }}>
            <ControlPanel />
          </div>
        </>
      ) : (
        <>
          <div style={{ position: "relative", overflow: "hidden", width: "100%", height: "auto" }}>
            <ControlPanel />
          </div>
          <div style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%" }}>
            <MapComponent />
          </div>
        </>
      )}
    </div>
  );
};

export default MainView;
