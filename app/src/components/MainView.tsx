"use client";
import { useEffect, useState } from "react";
import Map from "@/components/Map";
import ControlPanel from "./controlPanel/ControlPanel";

const MainView: React.FC = () => {
  const [isVertical, setIsVertical] = useState(false);

  // Listen for window resizes and toggle vertical mode when width <= 900px.
  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth <= 900);
    };
    // Set initial mode.
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define container style based on the mode.
  const containerStyle = isVertical
    ? {
        display: "grid",
        gridTemplateRows: "1fr auto", // Map takes all remaining space, control panel takes auto height.
        width: "100%",
        height: "100%",
      }
    : {
        display: "grid",
        gridTemplateColumns: "450px 100%", // ControlPanel fixed width and Map takes rest.
        width: "100%",
        height: "100%",
      };

  return (
    <div style={containerStyle}>
      {isVertical ? (
        // Vertical mode: Map on top, ControlPanel below.
        <>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "100%",
            }}
          >
            <Map />
          </div>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "auto",
            }}
          >
            <ControlPanel />
          </div>
        </>
      ) : (
        // Horizontal mode: ControlPanel on the left, Map on the right.
        <>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "100%",
            }}
          >
            <ControlPanel />
          </div>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "100%",
            }}
          >
            <Map />
          </div>
        </>
      )}
    </div>
  );
};

export default MainView;
