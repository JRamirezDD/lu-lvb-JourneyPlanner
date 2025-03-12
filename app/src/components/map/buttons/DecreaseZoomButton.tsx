"use client";
import React from "react";
import { useMapContext } from "@/contexts/mapContext";

const DecreaseZoomButton: React.FC = () => {
  const { decreaseZoomLevel } = useMapContext();

  return (
    <button
      onClick={decreaseZoomLevel}
      style={{
        zIndex: 1000,
        cursor: "pointer",
        background: "transparent",
        border: "none",
      }}
    >
      <img
        src="/lu-lvb-JourneyPlanner/icons/decrease-zoom-button-icon.png"
        alt="Center Map"
        style={{ width: "32px", height: "32px" }}
      />
    </button>
  );
};

export default DecreaseZoomButton;
