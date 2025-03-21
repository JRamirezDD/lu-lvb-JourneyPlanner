"use client";
import React, { useEffect, useState } from "react";
import ControlPanel from "../components/controlPanel/ControlPanel";
import MapComponent from "../components/map/MapComponent";
import { useControLPanelContext } from "@/contexts/controlPanelContext";

const MainView: React.FC = () => {
  const [isVertical, setIsVertical] = useState(false);
  const { controlPanelIsExpanded, setControlPanelIsExpanded } = useControLPanelContext();
  const minPanelHeight = 150; // Minimum height in vertical mode
  const maxPanelHeight = 500; // Expanded height in vertical mode
  const sidebarWidth = 450; // Width of control panel in horizontal mode  

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

    const startY = "touches" in e ? e.touches[0].clientY : e.clientY;

    const onMove = (event: MouseEvent | TouchEvent) => {
        if (event.cancelable) {
          event.preventDefault();
        }

        const clientY = "touches" in event ? event.touches[0].clientY : (event as MouseEvent).clientY;
        if (clientY < startY) {
            setControlPanelIsExpanded(true);
        } else {
            setControlPanelIsExpanded(false);
        }
    };

    const onEnd = (event: MouseEvent | TouchEvent) => {
        document.body.style.userSelect = "auto"; // Re-enable text selection
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onEnd);
        window.removeEventListener("touchmove", onMove);
        window.removeEventListener("touchend", onEnd);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onMove, { passive: false });
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
          id="map-component"
          style={{
            flex: isVertical ? "none" : `0 0 ${sidebarWidth}px`,
            width: isVertical ? "100%" : `${sidebarWidth}px`,
            height: isVertical ? `calc(100% - ${minPanelHeight}px)` : "100%", // Map gets a fixed space in vertical mode
            position: "relative",
            zIndex: isVertical && controlPanelIsExpanded ? 0 : 1, // Ensure map is under panel when expanded
          }}
        >
          <MapComponent />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: controlPanelIsExpanded ? `${maxPanelHeight}px` : `${minPanelHeight}px`,
            backgroundColor: "white",
            boxShadow: "0 -2px 10px rgba(0,0,0,0.2)",
            transition: "height 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
            zIndex: 2, // Ensure panel is above map when expanded
            display: "flex", 
            flexDirection: "column", 
          }}
        >
      <div
        id="interaction-box"
        style={{
          height: "50px", // Interaction box thickness
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
          id="click-handle"
          style={{
            width: "160px",
            height: "20px",
            alignContent: "center",
            display: "flex",
            justifyContent: "center",
          }}
          onClick={(e) => {
            e.stopPropagation(); // Prevents event from interfering with drag logic
            setControlPanelIsExpanded(!controlPanelIsExpanded); // Toggle expansion
          }}
        >
        <div
          style={{
            width: "60px",
            height: "6px",
            backgroundColor: "#999",
            borderRadius: "5px",
          }}
        />
        </div>
        </div>
            <div
              id="control-panel-component"
              style={{
                flexGrow: 1, // Ensures the control panel fills remaining space
                overflow: "hidden", // Prevents unwanted scrolling
                pointerEvents: controlPanelIsExpanded ? "all" : "none", // Disable interactions when collapsed
                opacity: controlPanelIsExpanded ? 1 : 0.5, // Reduce opacity when collapsed for visual feedback
                transition: "opacity 0.2s ease-in-out", 
              }}
            >
              <ControlPanel />
            </div>
          </div></>
      ) : (
        <>
          <div id="control-panel-component" style={{ position: "relative", overflow: "hidden", width: "100%", height: "auto" }}>
            <ControlPanel />
          </div>
          <div id="map-component" style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%" }}>
            <MapComponent />
          </div>
        </>
      )}
    </div>
  );
};

export default MainView;