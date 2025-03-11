"use client";

import { LocationContext } from "@/contexts/locationContext";
import { Coordinates } from "@/types/Coordinates";
import React, { useContext, useEffect, useRef } from "react";

const LocationUpdater: React.FC = () => {
  const { updateLocation, locationIsEnabled: isEnabled, setIsEnabled } = useContext(LocationContext);
  const lastUpdateRef = useRef(0);
  // Set the desired update interval in milliseconds (e.g., 10000ms = 10 seconds)
  const updateInterval = 200;

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
          updateLocation({ timestamp, coords, heading, speed });

          if (!isEnabled) {
            setIsEnabled(true);
          }
        },
        (error) => { 
            console.error("Error watching position", error) 
        },
        { enableHighAccuracy: true, timeout: 5000 }
      );



      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [updateLocation]);

  return null;
};

export default LocationUpdater;
