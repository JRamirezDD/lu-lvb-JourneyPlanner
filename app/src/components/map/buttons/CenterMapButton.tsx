"use client";
import React, { useEffect, useState } from "react";
import { useMapContext } from "@/contexts/mapContext";
import { useLocationContext } from "@/contexts/locationContext";
import { motion, AnimatePresence } from "framer-motion";

const CenterMapButton: React.FC = () => {
  const { resetCenterTrigger } = useMapContext();
  const { locationIsEnabled, error } = useLocationContext();

  const [showError, setShowError] = React.useState(false);

  const handleClick = () => {
    if (error) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000); // Hide after 3 seconds
      return;
    }

    resetCenterTrigger();
  };

  return (
    <div className="relative">
      <button
        onClick={() => handleClick()}
        style={{
          zIndex: 1000,
          cursor: "pointer",
          background: "transparent",
          border: "none",
        }}
      >
      <img
        src="/lu-lvb-JourneyPlanner/icons/map-icons/center-map-button-icon.png"
        alt="Center Map"
        style={{ width: "32px", height: "32px" }}
      />
      </button>

      {showError && (
        <div className="absolute bottom-full right-0 mb-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="bg-red-500 text-white text-sm px-3 py-2 rounded-xl shadow-md"
          >
            {error}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CenterMapButton;