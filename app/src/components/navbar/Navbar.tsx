"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = ({ locale }: { locale: "en" | "de" }) => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Measure Navbar height dynamically
  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  // Function to change the language by updating the route
  const handleLanguageChange = (newLocale: "en" | "de") => {
    if (newLocale !== locale) {
      const newPath = `/${newLocale}${pathname ? pathname.slice(3) : ''}`;
      router.push(newPath);
    }
  };

  return (
    <nav ref={navbarRef} className="w-full border-b bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <h1 className="text-lg font-bold text-[#1a365d]">Leipziger</h1>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageButton 
            lang="en" 
            currentLocale={locale} 
            onChange={handleLanguageChange} 
          />
          <LanguageButton 
            lang="de" 
            currentLocale={locale} 
            onChange={handleLanguageChange} 
          />
        </div>
      </div>
    </nav>
  );
};

// Reusable Language Button
const LanguageButton = ({ lang, currentLocale, onChange }: { 
  lang: "en" | "de"; 
  currentLocale: "en" | "de"; 
  onChange: (newLocale: "en" | "de") => void; 
}) => {
  return (
    <button
      onClick={() => onChange(lang)}
      aria-label={`Switch to ${lang.toUpperCase()} language`}
      className={`border border-[#1a365d] p-1.5 sm:p-2 rounded-md text-sm transition-colors
        ${currentLocale === lang 
          ? "bg-[#1a365d] text-white" 
          : "text-[#1a365d] hover:bg-[#fef9c3]"
        }`}
    >
      {lang.toUpperCase()}
    </button>
  );
};

export default Navbar;
