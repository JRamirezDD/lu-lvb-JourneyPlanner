"use client";

import { LocationContext } from "@/contexts/locationContext";
import { Coordinates } from "@/types/Coordinates";
import React, { useContext, useEffect, useRef } from "react";

const LocationUpdater: React.FC = () => {
  const { updateLocation, locationIsEnabled, setIsEnabled } = useContext(LocationContext);
  const lastUpdateRef = useRef(0);
  // Set the desired update interval in milliseconds (e.g., 10000ms = 10 seconds)
  const updateInterval = 50;

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const currentTimestamp = Date.now();
          if (currentTimestamp - lastUpdateRef.current < updateInterval) {
            return;
          }
          lastUpdateRef.current = currentTimestamp;
          
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const coords: Coordinates = { lat, lon };
          const heading = position.coords.heading;
          const speed = position.coords.speed;
          const timestamp = position.timestamp;
          const accuracy = position.coords.accuracy
          console.log("ACCURACY LOADED ", accuracy)

          if (accuracy > 500) { // 500 meters from estimated centerl
            console.warn(`Accuracy is too low ${accuracy}, skipping update`);
            throw new Error("Accuracy is too low, skipping update");
          }

          updateLocation({ timestamp, coords, heading, speed, accuracy });
        },
        (error) => { 
            console.error("Error loading position", error) 
            setIsEnabled(false);
        },
        { enableHighAccuracy: false, timeout: 5000 }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

    if (!locationIsEnabled) {
      setIsEnabled(true);
    }

  }, [updateLocation]);

  return null;
};

export default LocationUpdater;
