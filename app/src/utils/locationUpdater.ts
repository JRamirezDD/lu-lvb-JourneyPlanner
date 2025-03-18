"use client";

import { LocationContext, useLocationContext } from "@/contexts/locationContext";
import { Coordinates } from "@/types/Coordinates";
import React, { useContext, useEffect, useRef } from "react";

const LocationUpdater: React.FC = () => {
  const { updateLocation, locationIsEnabled: isEnabled, setIsEnabled, error, setError } = useLocationContext();
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
            setError("Accuracy is too low, skipping update");
            throw new Error("Accuracy is too low, skipping update");
          }

          setError(null);
          updateLocation({ timestamp, coords, heading, speed, accuracy });


          if (!isEnabled) {
            setIsEnabled(true);
          }
        },
        (error) => { 
            console.error("Error loading position", error) 
            setError(error.message)
        },
        { enableHighAccuracy: false, timeout: 1000 }
      );



      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      console.error("Geolocation is not supported by this browser.");
      setError("Geolocation is not supported by this browser.");
    }
  }, [updateLocation]);

  return null;
};

export default LocationUpdater;