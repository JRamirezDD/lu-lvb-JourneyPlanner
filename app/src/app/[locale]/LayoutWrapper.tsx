"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar/Navbar";

const LayoutWrapper = ({ locale, children }: { locale: "en" | "de"; children: React.ReactNode }) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="w-full flex flex-col" style={{ height: "100vh", overflow: "hidden" }}>
      <div ref={navbarRef}>
        <Navbar locale={locale} />
      </div>
      <div className="flex-1 overflow-hidden" style={{ height: `calc(100vh - ${navbarHeight}px)` }}>
        {children}
      </div>
    </div>
  );
};

export default LayoutWrapper;
