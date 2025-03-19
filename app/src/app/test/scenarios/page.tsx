"use client";

import { Suspense } from "react";
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
import MainView from "@/components/MainView";
import ScenarioLoader from "@/testing/utils/ScenarioLoader";
import { Scenario } from "@/testing/types/Scenario";

export default function ScenarioTestPage() {
  // Add block when running in production NODE_ENV mode.
  
  const params = useSearchParams();
  const scenario = (params?.get("scenario") as Scenario) || "DEFAULT";

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SettingsProvider initialLanguage={"en"}>
        <LocationProvider>
          <UIProvider>
            <MapProvider>
              <ControlPanelProvider>
                <AutocompleteDataProvider>
                  <OtpDataProvider>
                    <StopmonitorDataProvider>
                      <NearbySearchDataProvider>
                        <>
                          <ScenarioLoader scenario={scenario} />

                          <div id="app" style={{ width: "100%", height: "100%" }}>
                            <MainView />
                          </div>
                          <style jsx global>{`
                            html,
                            body,
                            #__next,
                            #app {
                              width: 100%;
                              height: 100%;
                              margin: 0;
                              padding: 0;
                            }
                          `}</style>
                        </>
                      </NearbySearchDataProvider>
                    </StopmonitorDataProvider>
                  </OtpDataProvider>
                </AutocompleteDataProvider>
              </ControlPanelProvider>
            </MapProvider>
          </UIProvider>
        </LocationProvider>
      </SettingsProvider>
    </Suspense>
  );
}
