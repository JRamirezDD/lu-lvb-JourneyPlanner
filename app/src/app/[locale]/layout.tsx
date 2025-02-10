import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/navbar/Navbar";
import { SettingsProvider } from "@/contexts/settingsContext";
import React from "react";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SettingsProvider initialLanguage={language}>
          <div className="w-full flex flex-col min-h-screen">
            <Navbar locale={language} />
            <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
        </SettingsProvider>
      </body>
    </html>
  );
}
