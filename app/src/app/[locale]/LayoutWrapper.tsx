"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar/Navbar";

const LayoutWrapper = ({ locale, children }: { locale: "en" | "de"; children: React.ReactNode }) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  // Function to update navbar height dynamically
  const updateNavbarHeight = () => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
    setViewportHeight(window.innerHeight); // Ensure height adapts to mobile browser UI changes
  };

  useEffect(() => {
    updateNavbarHeight(); // Initial calculation

    // Listen for resize events to adjust dynamically
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  return (
    <div className="w-full flex flex-col" style={{ height: viewportHeight, overflow: "hidden" }}>
      <div ref={navbarRef}>
        <Navbar locale={locale} />
      </div>
      <div
        className="flex-1 overflow-auto"
        style={{ height: `calc(${viewportHeight}px - ${navbarHeight}px)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutWrapper;
