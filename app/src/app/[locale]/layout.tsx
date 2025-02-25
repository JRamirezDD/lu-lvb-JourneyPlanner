import { Roboto } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/navbar/Navbar";
import { SettingsProvider } from "@/contexts/settingsContext";
import React from "react";
import { UIProvider } from "@/contexts/uiContext";
import { MapProvider } from "@/contexts/mapContext";
import { AutocompleteDataProvider } from "@/contexts/DataContext/autocompleteDataContext";
import { OtpDataProvider } from "@/contexts/DataContext/routingDataContext";
import { StopmonitorDataProvider } from "@/contexts/DataContext/stopmonitorDataContext";

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
  // Await params to extract the locale
  const { locale } = await params;

  // Ensure a default locale
  const language = locale === "de" ? "de" : "en"; 

  return (
    <html lang={language}>
      <body className={`${roboto.className} antialiased`}>

          <SettingsProvider initialLanguage={language}>
          <UIProvider>
          <MapProvider>
            <AutocompleteDataProvider>
            <OtpDataProvider>
            <StopmonitorDataProvider>
            <div className="w-full flex flex-col min-h-screen">
              <Navbar locale={language} />
              <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </div>
            </StopmonitorDataProvider>
            </OtpDataProvider>
            </AutocompleteDataProvider>
          </MapProvider>
          </UIProvider>
          </SettingsProvider>
        </body>
    </html>
  );
}
