"use client";
import React from "react";
import { useMapContext } from "@/contexts/mapContext";

const IncreaseZoomButton: React.FC = () => {
  const { increaseZoomLevel } = useMapContext();

  return (
    <button
      onClick={increaseZoomLevel}
      style={{
        zIndex: 1000,
        cursor: "pointer",
        background: "transparent",
        border: "none",
      }}
    >
      <img
        src="/lu-lvb-JourneyPlanner/icons/map-icons/increase-zoom-button-icon.png"
        alt="Center Map"
        style={{ width: "32px", height: "32px" }}
      />
    </button>
  );
};

export default IncreaseZoomButton;
