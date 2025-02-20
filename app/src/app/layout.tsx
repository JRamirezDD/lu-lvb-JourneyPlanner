"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { SettingsProvider } from "@/contexts/settingsContext";
import { AutocompleteDataProvider } from "@/contexts/DataContext/autocompleteDataContext";
import { OtpDataProvider } from "@/contexts/DataContext/routingDataContext";
import { StopmonitorDataProvider } from "@/contexts/DataContext/stopmonitorDataContext";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <AutocompleteDataProvider>
          <SettingsProvider initialLanguage="en">
            <OtpDataProvider>
              <StopmonitorDataProvider>
                {children}
              </StopmonitorDataProvider>
            </OtpDataProvider>
          </SettingsProvider>
        </AutocompleteDataProvider>
      </body>
    </html>
  );
}
