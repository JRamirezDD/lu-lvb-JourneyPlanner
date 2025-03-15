"use client";

import { Roboto } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/navbar/Navbar";
import { SettingsProvider } from "@/contexts/settingsContext";
import React, { useEffect, useRef, useState } from "react";
import { UIProvider } from "@/contexts/uiContext";
import { MapProvider } from "@/contexts/mapContext";
import { AutocompleteDataProvider } from "@/contexts/DataContext/autocompleteDataContext";
import { OtpDataProvider } from "@/contexts/DataContext/routingDataContext";
import { StopmonitorDataProvider } from "@/contexts/DataContext/stopmonitorDataContext";
import { NearbySearchDataProvider } from "@/contexts/DataContext/nearbySearchDataContext";
import { LocationProvider } from "@/contexts/locationContext";
import LocationUpdater from "@/utils/locationUpdater";
import LayoutWrapper from "./LayoutWrapper";


const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const language = locale === "de" ? "de" : "en";

  return (
    <html lang={language}>
      <body className="antialiased">
        <SettingsProvider initialLanguage={language}>
          <LocationProvider>
            <LocationUpdater />
            <UIProvider>
              <MapProvider>
                <AutocompleteDataProvider>
                  <OtpDataProvider>
                    <StopmonitorDataProvider>
                      <NearbySearchDataProvider>
                        <LayoutWrapper locale={language}>{children}</LayoutWrapper>
                      </NearbySearchDataProvider>
                    </StopmonitorDataProvider>
                  </OtpDataProvider>
                </AutocompleteDataProvider>
              </MapProvider>
            </UIProvider>
          </LocationProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}

