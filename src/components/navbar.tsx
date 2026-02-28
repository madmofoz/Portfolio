"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

// basic nav
const NAV_LINKS = [
  { name: "Home", href: "/#home" },
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/#about" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  // FIX: Handling hydration and initial theme detection
  useEffect(() => {
    setMounted(true);
    
    // Check initial state from the actual DOM element
    const isDarkModeActive = document.documentElement.classList.contains("dark");
    setIsDark(isDarkModeActive);

    // FIX: Sync state if the HTML class changes from outside this component
    const observer = new MutationObserver(() => {
      const isNowDark = document.documentElement.classList.contains("dark");
      setIsDark(isNowDark);
    });

    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ["class"] 
    });

    return () => observer.disconnect();
  }, []);

  // CHANGE: Centralized theme toggle logic
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Avoid hydration mismatch (flicker)
  if (!mounted) {
    return (
      <nav className="fixed w-full top-0 bg-white/80 dark:bg-black/90 backdrop-blur-md z-[100] border-b border-zinc-200 dark:border-zinc-800">
        <div className="w-full px-[5vw] py-5 flex justify-between items-center">
          <div className="font-black text-xl tracking-[0.2em] uppercase">.MADMOFOZ</div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed w-full top-0 bg-white/80 dark:bg-black/10 backdrop-blur-xs z-[100] border-b border-zinc-200 dark:border-zinc-800">
      <div className="w-full px-[5vw] py-5 flex justify-between items-center">
        
        {/* Logo / Branding */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="h-8 w-8 bg-black dark:bg-white flex items-center justify-center rounded-sm transition-transform group-hover:rotate-720 duration-1000">
            <span className="text-white dark:text-black font-black text-xs">Z</span>
          </div>
          <span className="font-black text-xl tracking-[0.2em] text-black dark:text-white uppercase">
            .MΛDMOFOZ
          </span>
        </Link>

        {/* Navigation & Theme Toggle */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-black dark:hover:text-white transition-all relative group no-underline"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black dark:bg-white transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Theme Toggle Button (animaet) */}
          <button
            onClick={toggleTheme}
            className="relative h-10 w-10 flex items-center justify-center rounded-sm border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all active:scale-90 group overflow-hidden"
            aria-label="Toggle Theme"
          >
            <div className={`transition-all duration-700 transform ${isDark ? 'rotate-[360deg] scale-100' : 'rotate-0 scale-0 opacity-0'}`}>
              {/* moon icon (adrk) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-white">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            </div>
            <div className={`absolute transition-all duration-700 transform ${!isDark ? 'rotate-0 scale-100' : '-rotate-[360deg] scale-0 opacity-0'}`}>
              {/* sun icon (light) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600 group-hover:text-black">
                <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
              </svg>
            </div>
          </button>

          {/* Action Button
          <a
            href="https://wa.me/628123456789"
            className="hidden sm:block px-5 py-2 bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-widest rounded-sm hover:invert transition-all active:scale-95 no-underline border border-transparent"
          >
            Contact
          </a> */}
        </div>
      </div>
    </nav>
  );
}