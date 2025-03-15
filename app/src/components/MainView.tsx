// MainView.tsx
"use client";
import React, { useEffect, useState } from "react";
import ControlPanel from "./controlPanel/ControlPanel";
import { MapWidget } from "./map/MapWidget";
import CenterMapButton from "./map/buttons/CenterMapButton";
import MapComponent from "./map/MapComponent";

const MainView: React.FC = () => {
  const [isVertical, setIsVertical] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Track state for use in vertical mode
  const minPanelHeight = 100; // Minimum height in vertical mode
  const maxPanelHeight = 500; // Expanded height in vertical mode
  const sidebarWidth = 450; // Width of control panel in horizontal mode  
  const [activeView, setActiveView] = useState<"planner" | "routes" | "details" | "station">("planner");

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent text selection
    document.body.style.userSelect = "none"; // Disable text selection globally

    if (e.type === "touchstart") {
      e.stopPropagation();
    }

    const startY = "touches" in e ? e.touches[0].clientY : e.clientY;

    const onMove = (event: MouseEvent | TouchEvent) => {
      if (event.cancelable) event.preventDefault(); // Prevent browser default behaviors (like pull-to-refresh)
      if (event.type === "touchmove") {
        event.stopPropagation();
      }

      const clientY = "touches" in event ? event.touches[0].clientY : (event as MouseEvent).clientY;
      if (clientY < startY) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    };

    const onEnd = (event: MouseEvent | TouchEvent) => {
      document.body.style.userSelect = "auto"; // Re-enable text selection
      if (event.type === "touchend") {
        event.stopPropagation();
      }
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onEnd);
  };

  const containerStyle: React.CSSProperties = isVertical
    ? {
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
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
        <><div
          style={{
            flex: isVertical ? "none" : `0 0 ${sidebarWidth}px`,
            width: isVertical ? "100%" : `${sidebarWidth}px`,
            height: isVertical ? `calc(100% - ${minPanelHeight}px)` : "100%", // Map gets a fixed space in vertical mode
            position: "relative",
            zIndex: isVertical && isExpanded ? 0 : 1, // Ensure map is under panel when expanded
          }}
        >
          <MapComponent />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: isExpanded ? `${maxPanelHeight}px` : `${minPanelHeight}px`,
            backgroundColor: "white",
            boxShadow: "0 -2px 10px rgba(0,0,0,0.2)",
            transition: "height 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
            zIndex: 2, // Ensure panel is above map when expanded
            overflow: "hidden", // Ensures contents stay within bounds
            display: "flex", 
            flexDirection: "column", 
          }}
        >
            <div
              style={{
                height: "50px", // Interaction thickness
                cursor: "ns-resize",
                backgroundColor: "white", // Should match ControlPanel color
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0, // Prevents the drag handle from shrinking
              }}
              onMouseDown={handleDragStart} // Desktop support
              onTouchStart={handleDragStart} // Mobile support
            >
              <div
                style={{
                  width: "60px",
                  height: "6px",
                  backgroundColor: "#999",
                  borderRadius: "5px",
                }} />
            </div>
            <div
              style={{
                flexGrow: 1, // Ensures the control panel fills remaining space
                overflow: "hidden", // Prevents unwanted scrolling
                pointerEvents: isExpanded ? "auto" : "none", // Disable interactions when collapsed
                opacity: isExpanded ? 1 : 0.5, // Reduce opacity when collapsed for visual feedback
                transition: "opacity 0.2s ease-in-out", 
              }}
            >
              <ControlPanel />
            </div>
          </div></>
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