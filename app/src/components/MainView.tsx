"use client";
import Map from "@/components/Map";
import ControlPanel from "./controlPanel/ControlPanel";

const MainView: React.FC = () => {
  return (
    <main className="grid grid-cols-[25%_75%] h-screen w-screen">
      {/* Left Column: Control Panel */}
      <div className="relative overflow-hidden h-full w-full p-2.5">
        <ControlPanel />
      </div>
      {/* Right Column: Map */}
      <div className="relative h-full w-full overflow-hidden p-2.5">
        <Map />
      </div>
    </main>
  );
};

export default MainView;
