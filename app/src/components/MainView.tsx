"use client";
import Map from "@/components/Map";
import ControlPanel from "./controlPanel/ControlPanel";

const MainView: React.FC = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "30% 70%",
        width: "100%",
        height: "100%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Left Column: Control Panel */}
      <div style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%" }}>
        <ControlPanel />
      </div>
      {/* Right Column: Map */}
      <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
        <Map />
      </div>
    </div>
  );
};

export default MainView;
