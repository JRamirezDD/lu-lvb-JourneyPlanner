"use client";

import { Roboto } from "next/font/google";
import "@/app/globals.css";
import { SettingsProvider } from "@/contexts/settingsContext";
import { AutocompleteDataProvider } from "@/contexts/DataContext/autocompleteDataContext";
import { OtpDataProvider } from "@/contexts/DataContext/routingDataContext";
import { StopmonitorDataProvider } from "@/contexts/DataContext/stopmonitorDataContext";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="text-base">
        {children}
      </body>
    </html>
  );
}
