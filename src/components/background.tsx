"use client";

import React, { useEffect, useState } from 'react';
import DotGrid from './DotGrid';
import Particles from './Particles';

export default function Background() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Memantau perubahan class 'dark' di documentElement
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? 'dark' : 'light');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    // Initial check
    setTheme(document.documentElement.classList.contains("dark") ? 'dark' : 'light');

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-white dark:bg-black transition-colors duration-700">
      {theme === 'dark' ? (
        <Particles
          particleCount={150}
          speed={0.15}
          particleBaseSize={80}
          className="w-full h-full"
          moveParticlesOnHover={true}
          disableRotation={false}
          pixelRatio={1}
          particleColors={['#2E1A78', '#e8c040 ', '#FFFFFF', '#FF0000']}
        />
      ) : (
        <DotGrid
          dotSize={5}
          gap={35}
          baseColor="#d4d4d8"
          activeColor="#000000"
          proximity={100}
          speedTrigger={10}
          returnDuration={1} style={undefined} />
      )}
    </div>
  );
}