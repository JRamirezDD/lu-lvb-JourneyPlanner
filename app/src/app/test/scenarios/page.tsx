"use client";

import { useSearchParams } from "next/navigation";
import { SettingsProvider } from "@/contexts/settingsContext";
import { MapProvider } from "@/contexts/mapContext";
import { LocationProvider } from "@/contexts/locationContext";
import { UIProvider } from "@/contexts/uiContext";
import { ControlPanelProvider } from "@/contexts/controlPanelContext";
import { AutocompleteDataProvider } from "@/contexts/DataContext/autocompleteDataContext";
import { OtpDataProvider } from "@/contexts/DataContext/routingDataContext";
import { StopmonitorDataProvider } from "@/contexts/DataContext/stopmonitorDataContext";
import { NearbySearchDataProvider } from "@/contexts/DataContext/nearbySearchDataContext";
import ScenarioLoader from "@/components/ScenarioLoader"; // ScenarioLoader as previously defined
import MainView from "@/components/MainView";

export default function ScenarioTestPage() {
  const params = useSearchParams();
  const scenario = params.get("scenario") || "default";

  return (
    <SettingsProvider initialLanguage="en">
      <LocationProvider>
        <UIProvider>
          <MapProvider>
            <ControlPanelProvider>
              <AutocompleteDataProvider>
                <OtpDataProvider>
                  <StopmonitorDataProvider>
                    <NearbySearchDataProvider>
                      <ScenarioLoader scenario={scenario} />
                      <MainView />
                    </NearbySearchDataProvider>
                  </StopmonitorDataProvider>
                </OtpDataProvider>
              </AutocompleteDataProvider>
            </ControlPanelProvider>
          </MapProvider>
        </UIProvider>
      </LocationProvider>
    </SettingsProvider>
  );
}
