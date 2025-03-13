import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import PersonStanding from "../../../public/icons/otp-icons/Walk.svg";
import Car from "../../../public/icons/otp-icons/Car.svg";
import Bike from "../../../public/icons/otp-icons/Bike.svg";
import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import RoutePlanner from "./RoutePlanner";
import { useSettingsContext } from "@/contexts/settingsContext";
import { useOtpDataContext } from "@/contexts/DataContext/routingDataContext";
import { ViewMode } from "@/types/ViewMode";
import { useMapContext } from "@/contexts/mapContext";
import { Itinerary } from "@/types/Itinerary";
import { RequestParameters } from "@/api/routingService/dto/otpRequest";
import { TransportMode } from "@/types/TransportMode";


const RouteView = ({ setActiveView }: { setActiveView: (view: ViewMode) => void }) => {
  const { translations } = useSettingsContext();
  const { otpData, loadingOtp, errorOtp, setSelectedItineraryIndex, fetchOtpData, lastOrigin, lastDestination, lastOriginCoordinates, lastDestinationCoordinates, lastTransportModes, lastDate, lastTime, setLastSearchParams } = useOtpDataContext();
  const { setSelectedItinerary } = useMapContext();
  const [selectedRouteIndex, setSelectedRouteIndex] = useState(-1);

  const formatDuration = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`;
  };

  const formatTime = (timestamp: number): string => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  // Function to calculate and format time difference for delays/early arrivals
  const formatTimeDifference = (scheduledTime: number, actualTime: number): { text: string, color: string } => {
    if (!scheduledTime || !actualTime) return { text: "", color: "" };
    
    const diffInSeconds = (actualTime - scheduledTime) / 1000;
    const diffInMinutes = Math.round(diffInSeconds / 60);
    
    if (diffInMinutes === 0) return { text: "", color: "" };
    
    if (diffInMinutes > 0) {
      return { 
        text: `+${diffInMinutes}m`, 
        color: "text-red-600" 
      };
    } else {
      return { 
        text: `${diffInMinutes}m`, 
        color: "text-green-600" 
      };
    }
  };

  const getTransportType = (mode: string): "Tram" | "Bus" | "S-Bahn" | "Walk" | "Car" | "Bike" => {
    switch (mode) {
      case "TRAM": return "Tram";
      case "BUS": return "Bus";
      case "SUBURB": return "S-Bahn";
      case "WALK": return "Walk";
      case "CAR": return "Car";
      case "BIKE": return "Bike";
      default: return "Walk";
    }
  };


  const handleEarlierSearch = () => {
    console.log("handleEarlierSearch");
    // Calculate the adjusted time
    const adjustedTime = lastTime ? adjustTimeString(lastTime, -5) : undefined;
    
    // Update the last search params in context
    if (adjustedTime) {
      setLastSearchParams(
        lastOrigin,
        lastDestination,
        lastOriginCoordinates,
        lastDestinationCoordinates,
        lastTransportModes as TransportMode[],
        lastDate,
        adjustedTime
      );
    }
    
    // Fetch otp data with earlier search time
    const params: Partial<RequestParameters> = {
      From: lastOriginCoordinates,
      To: lastDestinationCoordinates,
      Travelmode: lastTransportModes as TransportMode[],
      date: lastDate,
      time: adjustedTime,
      numItineraries: 5,
      arriveBy: false  // Always use departure time for earlier/later buttons
    };
    fetchOtpData(params);
  };

  const handleLaterSearch = () => {
    console.log("handleLaterSearch");
    // Calculate the adjusted time
    const adjustedTime = lastTime ? adjustTimeString(lastTime, 5) : undefined;
    
    // Update the last search params in context
    if (adjustedTime) {
      setLastSearchParams(
        lastOrigin,
        lastDestination,
        lastOriginCoordinates,
        lastDestinationCoordinates,
        lastTransportModes as TransportMode[],
        lastDate,
        adjustedTime
      );
    }
    
    // Fetch otp data with later search time
    const params: Partial<RequestParameters> = {
      From: lastOriginCoordinates,
      To: lastDestinationCoordinates,
      Travelmode: lastTransportModes as TransportMode[],
      date: lastDate,
      time: adjustedTime,
      numItineraries: 5,
      arriveBy: false  // Always use departure time for earlier/later buttons
    };
    fetchOtpData(params);
  };

  // Helper function to adjust time string by minutes
  const adjustTimeString = (timeStr: string, minutesToAdd: number): string => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes + minutesToAdd, 0, 0);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  // Sort itineraries by arrival time
  const sortedItineraries = useMemo(() => {
    if (!otpData || !otpData.plan || !otpData.plan.itineraries) return [];
    
    return [...otpData.plan.itineraries]
      .sort((a, b) => a.endTime - b.endTime)
      .slice(0, 5);
  }, [otpData]);

  const handleRouteClick = (index: number) => {
    // Find the original index in the unsorted itineraries array
    if (otpData && sortedItineraries) {
      const selectedItinerary = sortedItineraries[index];
      const originalIndex = otpData.plan.itineraries.findIndex(
        itinerary => itinerary.startTime === selectedItinerary.startTime && 
                    itinerary.endTime === selectedItinerary.endTime
      );
      
      // Set the selected itinerary index in the context
      const actualIndex = originalIndex !== -1 ? originalIndex : index;
      setSelectedItineraryIndex(actualIndex);
      
      // Create an Itinerary object from the OtpItinerary
      const itinerary = otpData.plan.itineraries[actualIndex];
      const mapItinerary = new Itinerary(
        otpData.plan.from,
        otpData.plan.to,
        itinerary
      );
      
      // Send the selected itinerary to the map context
      setSelectedItinerary(mapItinerary);
      
      // Navigate to the itinerary view
      setActiveView("ITINERARY");
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!sortedItineraries.length) return;
    const maxRoutes = Math.min(sortedItineraries.length, 5);

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedRouteIndex(prev => 
          prev < maxRoutes - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedRouteIndex(prev => prev > -1 ? prev - 1 : -1);
        break;
      case 'Enter':
        if (selectedRouteIndex >= 0) {
          handleRouteClick(selectedRouteIndex);
        }
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedRouteIndex, sortedItineraries]);

  return (
    <div className="flex flex-col gap-6">
      {/* Route Planner Section */}
      <RoutePlanner setActiveView={setActiveView} />

      {/* Routes List Section */}
      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">
            {translations?.ControlPanel?.routes?.availableRoutes || "Available Routes"}
          </h2>
          
          {/* Earlier/Later buttons */}
          {otpData && otpData.plan && otpData.plan.itineraries && otpData.plan.itineraries.length > 0 && (
            <div className="flex gap-2">
              <button 
                onClick={handleEarlierSearch}
                disabled={loadingOtp}
                className="flex items-center gap-1 px-3 py-1 bg-white text-primary-blue rounded-md border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={16} />
                <span>{translations?.ControlPanel?.routes?.earlier || "Earlier"}</span>
              </button>
              <button 
                onClick={handleLaterSearch}
                disabled={loadingOtp}
                className="flex items-center gap-1 px-3 py-1 bg-white text-primary-blue rounded-md border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{translations?.ControlPanel?.routes?.later || "Later"}</span>
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        {loadingOtp && (
          <div className="p-4 text-center text-gray-600">
            Loading routes...
          </div>
        )}

        {errorOtp && (
          <div className="p-4 text-center text-red-600">
            {errorOtp}
          </div>
        )}
        
        {!loadingOtp && !errorOtp && otpData && (
          <ul className="space-y-3">
            {sortedItineraries.map((itinerary, idx) => {
              // Calculate delays for departure and arrival
              const departureDelay = itinerary.legs[0]?.departureDelay || 0;
              const arrivalDelay = itinerary.legs[itinerary.legs.length - 1]?.arrivalDelay || 0;
              
              const scheduledDepartureTime = itinerary.startTime - (departureDelay * 1000);
              const scheduledArrivalTime = itinerary.endTime - (arrivalDelay * 1000);
              
              const departureDiff = formatTimeDifference(scheduledDepartureTime, itinerary.startTime);
              const arrivalDiff = formatTimeDifference(scheduledArrivalTime, itinerary.endTime);
              
              return (
                <li
                  key={idx}
                  className={`border border-primary-blue/10 rounded-lg cursor-pointer transition-colors overflow-hidden ${
                    idx === selectedRouteIndex 
                      ? 'bg-primary-yellow/10' 
                      : 'hover:bg-primary-yellow/5'
                  }`}
                  onClick={() => handleRouteClick(idx)}
                >
                  {/* Time Header */}
                  <div className="flex items-center justify-between p-2 bg-primary-yellow/5">
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        {/* Departure Time */}
                        <div className="flex items-center">
                          <span className="font-medium">
                            {formatTime(itinerary.startTime)}
                          </span>
                          {departureDiff.text && (
                            <span className={`text-sm font-medium ml-1 ${departureDiff.color}`}>
                              {departureDiff.text}
                            </span>
                          )}
                        </div>
                        
                        {/* Separator */}
                        <span className="mx-3 font-medium">→</span>
                        
                        {/* Arrival Time */}
                        <div className="flex items-center">
                          <span className="font-medium">
                            {formatTime(itinerary.endTime)}
                          </span>
                          {arrivalDiff.text && (
                            <span className={`text-sm font-medium ml-1 ${arrivalDiff.color}`}>
                              {arrivalDiff.text}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{formatDuration(itinerary.duration)}</span>
                    </div>
                  </div>

                  {/* Route Visualization */}
                  <div className="p-3 flex items-center gap-1">
                    {itinerary.legs.map((leg, index) => (
                      <React.Fragment key={index}>
                        {/* Transport Icon */}
                        {leg.mode === "WALK" ? (
                          <div className="flex items-center gap-1 text-gray-600 bg-gray-100 px-2 py-1 rounded text-sm">
                            <Image 
                              src={PersonStanding}
                              alt="Walking"
                              width={14}
                              height={14}
                            />
                            <span>{Math.round(leg.duration / 60)}</span>
                          </div>
                        ) : (
                          <div className={`px-3 py-1 rounded font-medium ${
                            leg.mode === 'TRAM' ? 'bg-red-600 text-white' :
                            leg.mode === 'BUS' ? 'bg-purple-600 text-white' :
                            leg.mode === 'SUBURB' ? 'bg-green-600 text-white' :
                            'bg-green-600 text-white'
                          }`}>
                            {leg.route ? `${getTransportType(leg.mode)} ${leg.route}` : getTransportType(leg.mode)}
                          </div>
                        )}

                        {/* Connector Line */}
                        {index < itinerary.legs.length - 1 && (
                          <div className="h-[2px] w-4 bg-gray-300" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Departure Info */}
                  <div className="px-3 pb-2 text-sm text-gray-600">
                    {translations?.ControlPanel?.routes?.leaves || "Leaves"} {formatTime(itinerary.startTime)}{" "}
                    {departureDiff.text && (
                      <span className={`text-sm font-medium ${departureDiff.color}`}>
                        {departureDiff.text}
                      </span>
                    )}{" "}
                    {translations?.ControlPanel?.routes?.from || "from"} {itinerary.legs[0].from.name}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RouteView;
