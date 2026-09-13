"use client";

import React, { useEffect, useState } from "react";
import DotGrid from "./DotGrid";
import Bento from "./bento";

export default function Background() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Initial check setelah komponen mount di client
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
    setMounted(true);

    // 2. Pantau perubahan class 'dark' di root HTML
    const observer = new MutationObserver(() => {
      const currentDark = document.documentElement.classList.contains("dark");
      setTheme(currentDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Mencegah mismatch render sebelum client mounted
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden transition-colors duration-500">
      {/* Vignette Overlay untuk memberi depth/kedalaman mekanikal */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)] dark:block hidden" />

      {theme === "dark" ? (
        <div className="w-full h-full pointer-events-auto">
          <Bento/>
        </div>
      ) : (
        <div className="w-full h-full pointer-events-auto">
          <DotGrid/>
        </div>
      )}
    </div>
  );
}