import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import './bento.css';

export default function IndustrialBackground() {
  const { scrollY } = useScroll();

  // Parallax: background grid bergerak lebih lambat dari konten utama
  const yGrid = useTransform(scrollY, [0, 800], [0, -60]);

  return (
    <div className="industrial-bg-canvas z-0">
      {/* 1. CAD Grid Layer (Parallax) */}
      <motion.div style={{ y: yGrid }} className="cad-grid-pattern" />

      {/* 2. Vignette Layer (Peredam cahaya pinggir layar) */}
      <div className="industrial-vignette" />

      {/* 3. Raw Grain/Noise SVG Layer */}
      <div className="industrial-noise">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          <filter id="industrialNoiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#industrialNoiseFilter)" />
        </svg>
      </div>
    </div>
  );
}