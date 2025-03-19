// ScenarioLoader.tsx
"use client";

import { useEffect } from "react";
import { useSettingsContext } from "@/contexts/settingsContext";
import { useMapContext } from "@/contexts/mapContext";
import { useControLPanelContext } from "@/contexts/controlPanelContext";
import { useLocationContext } from "@/contexts/locationContext";
import { useUIContext } from "@/contexts/uiContext";
import { backupLayerConfig, busLayerConfig, destinationLayerConfig, intermediateStopsLayerConfig, legStartEndLayerConfig, originLayerConfig, suburbLayerConfig, trainLayerConfig, walkLayerConfig } from "@/components/map/layers/ItineraryLayer";
import { mockOtpResponse } from "@/api/routingService/dto/__mock__/otpResponse.mock";
import { fetchOtpData } from "@/api/routingService/routingService";
import { Itinerary } from "@/types/Itinerary";
import { Scenario } from "../types/Scenario";

export default function ScenarioLoader({ scenario }: { scenario: Scenario }) {
  const controlPanelCtx = useControLPanelContext();
  const locationCtx = useLocationContext();
  const mapCtx = useMapContext();
  const settingsCtx = useSettingsContext();
  const uiCtx = useUIContext();
    // rest of contexts

    if (!scenario) return;

    const scenarios: Record<Scenario, () => void> = {
      // define scenarios
      ITINERARY_VIEW_SCENARIO: () => {
        console.log("Scenario: itineraryViewScenario");
        // ControlPanelContext
        controlPanelCtx.selectedItem = null;
        controlPanelCtx.controlPanelIsExpanded = true;
        controlPanelCtx.selectedOrigin = null;
        controlPanelCtx.selectedDestination = null;

        // LocationContext
        locationCtx.currentLocation = null;
        locationCtx.locationIsEnabled = false;
        locationCtx.error = null;

        // Map Context
        mapCtx.currentPosition = null;
        mapCtx.visibleLayers = [intermediateStopsLayerConfig.id, walkLayerConfig.id, suburbLayerConfig.id, busLayerConfig.id, trainLayerConfig.id, backupLayerConfig.id, legStartEndLayerConfig.id, destinationLayerConfig.id, originLayerConfig.id];
        fetchOtpData({}).then((data) => {
          mapCtx.selectedItinerary = new Itinerary(data.plan.from, data.plan.to, data.plan.itineraries[0]);
        });
        mapCtx.selectedStop = null;
        mapCtx.selectedNearbySearchItem = null;
        mapCtx.resetCenterCounter = 0;
        mapCtx.zoominLevel = 0;
        mapCtx.zoomoutLevel = 0;
        
        // Settings Context
        settingsCtx.language = "en";
        settingsCtx.avoidWalking = false;
        settingsCtx.wheelchairAccessible = false;

        // UI Context
        uiCtx.viewMode = "ITINERARY";
        uiCtx.previousViewMode = "DEFAULT";
        uiCtx.navigationHistory = ["DEFAULT"];
      },
      DEFAULT: () => {},
    };

    scenarios[scenario]?.();

    return null;
}
