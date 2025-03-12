"use client";
import React from "react";
import MapWidget from "./MapWidget";
import CenterMapButton from "./buttons/CenterMapButton"; // Your button component
import IncreaseZoomButton from "./buttons/IncreaseZoomButton";
import DecreaseZoomButton from "./buttons/DecreaseZoomButton";

const MapComponent: React.FC = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Map widget */}
      <MapWidget />

      {/* Overlay container for buttons, positioned bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: "64px",
          right: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px", // space between buttons
        }}
      >
        <CenterMapButton />
        <IncreaseZoomButton />
        <DecreaseZoomButton />
      </div>
    </div>
  );
};

export default MapComponent;
