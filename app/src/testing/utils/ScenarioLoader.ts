// ScenarioLoader.tsx
"use client";

import { useEffect } from "react";
import { useSettingsContext } from "@/contexts/settingsContext";
import { useMapContext } from "@/contexts/mapContext";

export default function ScenarioLoader({ scenario }: { scenario: "default" | "scenario1" | "scenario2" | "scenario3" }) {
  const settingsCtx = useSettingsContext();
  const mapCtx = useMapContext();
  // rest of contexts

  useEffect(() => {
    if (!scenario) return;

    const scenarios: { [key: string]: () => void } = {

        // define scenarios
      scenario1: () => {
        settingsCtx.setLanguage("en");
        settingsCtx.setAvoidWalking(false);
        mapCtx.setCurrentPosition({ lat: 50.0, lon: 14.0 });
      },
      scenario2: () => {
        settingsCtx.setLanguage("de");
        settingsCtx.setAvoidWalking(true);
        mapCtx.setCurrentPosition({ lat: 52.5, lon: 13.4 });
      },
      scenario3: () => {
        settingsCtx.setLanguage("en");
        settingsCtx.setAvoidWalking(true);
        mapCtx.setCurrentPosition({ lat: 48.8, lon: 2.35 });
      },
      default: () => {},
    };

    scenarios[scenario]?.();
  }, [scenario]);

  return null;
}
