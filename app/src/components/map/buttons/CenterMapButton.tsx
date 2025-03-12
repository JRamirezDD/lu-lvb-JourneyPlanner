"use client";
import React from "react";
import { useMapContext } from "@/contexts/mapContext";

const CenterMapButton: React.FC = () => {
  const { resetCenterTrigger } = useMapContext();

  return (
    <button
      onClick={resetCenterTrigger}
      style={{
        zIndex: 1000,
        cursor: "pointer",
        background: "transparent",
        border: "none",
      }}
    >
      <img
        src="/lu-lvb-JourneyPlanner/icons/center-map-button-icon.png"
        alt="Center Map"
        style={{ width: "32px", height: "32px" }}
      />
    </button>
  );
};

export default CenterMapButton;
