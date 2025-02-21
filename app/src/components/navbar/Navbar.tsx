"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = ({ locale }: { locale: "en" | "de" }) => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  // Function to change the language by updating the route
  const handleLanguageChange = (newLocale: "en" | "de") => {
    if (newLocale !== locale) {
      // Replace the first part of the URL with the new locale (fallback to empty string if null)
      const newPath = `/${newLocale}${pathname ? pathname.slice(3) : ''}`;      router.push(newPath);
    }
  };

  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <h1 className="text-lg font-bold text-[#1a365d]">Leipziger</h1>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => handleLanguageChange("en")}
            className={`border border-[#1a365d] p-1.5 sm:p-2 rounded-md text-sm transition-colors
                ${locale === "en" 
                  ? "bg-[#1a365d] text-white" 
                  : "text-[#1a365d] hover:bg-[#fef9c3]"
                }`}
          >
            EN
          </button>
          <button
            onClick={() => handleLanguageChange("de")}
            className={`border border-[#1a365d] p-1.5 sm:p-2 rounded-md text-sm transition-colors
                ${locale === "de" 
                  ? "bg-[#1a365d] text-white" 
                  : "text-[#1a365d] hover:bg-[#fef9c3]"
                }`}
          >
            DE
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
