"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '@/styles/hover.css';

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax logic: Foreground moves faster than background elements
  const yHeadline = useTransform(scrollY, [0, 500], [0, -120]);
  const yBackground = useTransform(scrollY, [0, 500], [0, -60]);

  return (
    <div className="relative">
        <motion.div
          style={{ y: yBackground }}
          className="absolute inset-0 w-full opacity-20 dark:opacity-50 bg-[linear-gradient(to_right,#3b82f622_1px,transparent_1px),linear-gradient(to_bottom,#3b82f622_1px,transparent_1px)] bg-[size:40px_40px]"
        ></motion.div>
        <section className="relative min-h-screen flex flex-col items-start w-full overflow-hidden pt-32 pb-20 px-[5vw] bg-transparent">

          {/* 1. INDUSTRIAL NOISE & GRAIN OVERLAY */}
          <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.04] dark:opacity-[0.06] mix-blend-overlay">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
          </div>
          <motion.div
            style={{ y: yHeadline }}
            className="relative z-10 w-full"
          >
            {/* Status indicator */}
            <div className="flex items-center gap-4 mb-10">
              <span className="h-[1px] w-12 bg-zinc-800 dark:bg-zinc-200"></span>
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500 animate-pulse">
                Status: ACTIVE EVOLUTING // SYSTEM READY
              </span>
            </div>

            {/* PRIMARY HEADLINE */}
            <h1 className="text-[clamp(3rem,10vw,12rem)] font-black leading-[0.8] tracking-tighter uppercase mb-16">CRAFTING
              <br />
            <span className="wiggle-text italic text-zinc-800" data-text="DIGITAL">DIGITAL</span>
              <br />
              <span className="group relative inline-block">ENGINES</span>
              <span className="inline-block w-[0.3em] h-[0.1em] bg-black dark:bg-white ml-2 mb-[0.15em] animate-blink-cursor"></span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
              {/* Desc */}
              <div className="lg:col-span-7 space-y-10">
                <p className="text-xl md:text-3xl text-zinc-600 dark:text-zinc-400 leading-tight font-medium">
                  The <span className="text-black dark:text-white font-bold">Architect of System.</span> <br />
                  Bridging the gap between <span className="italic">Mechanical Engineering</span> and <span className="italic font-bold text-black dark:text-white">Full-stack Development.</span>
                </p>

                <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed font-mono text-sm opacity-80">
                  &gt; Analyzing engine dynamics... <br />
                  &gt; Solving complex technical problems through functional logic. <br />
                  &gt; Lead developer of <a href="https://siliminpro.fly.dev" target="_blank" className="underline decoration-1 underline-offset-4 hover:text-black dark:hover:text-white transition-colors">SiliminPro</a>.
                </p>

                <div className="flex items-center gap-6 pt-6">
                  <a
                    href="#projects"
                    className="group relative px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-sm text-[10px] font-black uppercase tracking-[0.3em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,0.05)]"
                  >
                    <span className="relative z-10">[ VIEW SYSTEMS ]</span>
                  </a>

                  <a
                    href="#about"
                    className="text-[10px] font-black uppercase tracking-[0.3em] border-b border-zinc-800 dark:border-zinc-200 pb-1 hover:text-blue-500 hover:border-blue-500 transition-all"
                  >
                    Read Manifest →
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="lg:col-span-5 flex lg:justify-end items-end pb-4">
                <div className="space-y-6 text-right hidden lg:block border-r border-zinc-200 dark:border-zinc-800 pr-8">
                  <div className="group relative">
                    <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Core</p>
                    <p className="text-xs font-bold uppercase leading-none">
                      The world doesn't owe me a thing
                      <span className="block mt-2 text-[7px] font-mono uppercase tracking-[0.2em] opacity-0 group-hover:opacity-40 transition-all pointer-events-none italic">
                        — Boot Scraper. Credits to Lamb of God.
                      </span>
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Primary_Tools</p>
                    <p className="text-xs font-bold uppercase">VSCode / PS / SolidWorks</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Current_Build</p>
                    <p className="text-xs font-bold uppercase underline decoration-zinc-500">Engine_Calc v2.1.0</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
  );
}