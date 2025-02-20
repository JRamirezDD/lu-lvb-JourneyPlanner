"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/navbar/Navbar";
import { SettingsProvider } from "@/contexts/settingsContext";
import { AutocompleteDataProvider } from "@/contexts/DataContext/autocompleteDataContext";
import { OtpDataProvider } from "@/contexts/DataContext/routingDataContext";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function LocaleLayout({ children }: { children: React.ReactNode }) {

  return (
    <html>
      <body>
        <AutocompleteDataProvider>
          <SettingsProvider initialLanguage="en">
            <OtpDataProvider>
              {children}
            </OtpDataProvider>
          </SettingsProvider>
        </AutocompleteDataProvider>
      </body>
    </html>
  );
}
