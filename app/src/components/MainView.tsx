"use client";
import Map from "@/components/Map";
import ControlPanel from "./controlPanel/ControlPanel";

const MainView: React.FC = () => {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "30% 70%",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Left Column: Control Panel */}
      <div style={{ position: "relative", overflow: "hidden", height: "100%" }}>
        <ControlPanel />
      </div>
      {/* Right Column: Map */}
      <div style={{ position: "relative", height: "100%", width: "100%", overflow: "hidden" }}>
        <Map />
      </div>
    </main>
  );
};

export default MainView;
