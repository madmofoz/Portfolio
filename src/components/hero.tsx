"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  const yHeadline = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <div className="relative w-full text-zinc-900 dark:text-zinc-100 overflow-hidden min-h-screen select-none font-sans">
      <section className="relative z-10 w-full pt-28 pb-16 px-4 md:px-8 max-w-7xl mx-auto flex flex-col justify-center">
        {/* TELEMETRY HEADER BAR */}
        <div className="flex flex-wrap items-center justify-between border-b border-zinc-300 dark:border-zinc-800 pb-3 mb-6 font-mono text-[11px] tracking-widest text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#ff2400] animate-pulse" />
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">M.ZHIFRANTINO</span>
          </div>
          <div>EST. 2026</div>
        </div>

        {/* BENTO GRID WRAPPER */}
        <motion.div
          style={{ y: yHeadline }}
          className="grid grid-cols-1 md:grid-cols-12 gap-3"
        >
          {/* CELL 1: MAIN HOOK DISPLAY (Col 8) */}
          <div className="md:col-span-8 border border-zinc-300 dark:border-zinc-800 p-6 md:p-10 relative flex flex-col justify-between group overflow-hidden bg-transparent">
            {/* Corner Crosshairs */}
            <span className="absolute top-2 left-2 font-mono text-[10px] text-zinc-400 dark:text-zinc-600">+</span>
            <span className="absolute top-2 right-2 font-mono text-[10px] text-zinc-400 dark:text-zinc-600">+</span>
            <span className="absolute bottom-2 left-2 font-mono text-[10px] text-zinc-400 dark:text-zinc-600">+</span>
            <span className="absolute bottom-2 right-2 font-mono text-[10px] text-zinc-400 dark:text-zinc-600">+</span>

            <div>
              <div className="inline-flex items-center gap-2 px-2 py-0.5 mb-6 border border-zinc-300 dark:border-zinc-800 font-mono text-[10px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                <span>IDENTIFY //</span>
                <span className="text-zinc-400 dark:text-zinc-600">|</span>
                <span className="text-[#ff2400] font-semibold">ENGINEER</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.88] text-zinc-950 dark:text-white">
                CRAFTING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-zinc-500 to-zinc-400 dark:from-zinc-100 dark:via-zinc-400 dark:to-zinc-600">
                  DIGITAL
                </span>{" "}
                <br />
                <span className="text-[#ff2400]">ENGINES</span>
                <span className="inline-block w-3 h-8 bg-[#ff2400] ml-2 animate-pulse align-middle" />
              </h1>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-md font-medium leading-snug">
                Engineering mechanical systems, software, and ideas with the same obsession for how things actually work.
              </p>
              <div className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
                [BUILD → TEST → BREAK → ITERATE]
              </div>
            </div>
          </div>

          {/* CELL 2: LOG / TELEMETRY TERMINAL (Col 4) */}
          <div className="md:col-span-4 border border-zinc-300 dark:border-zinc-800 p-6 flex flex-col justify-between font-mono bg-transparent">
            <div>
              <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800/80 pb-2 mb-4 text-[10px] tracking-wider text-zinc-500 dark:text-zinc-400">
                <span>CLI_DIAG</span>
                <span className="text-[#ff2400] font-bold">REV_2.4</span>
              </div>
              <div className="text-xs space-y-2 text-zinc-600 dark:text-zinc-400">
                <p className="text-zinc-900 dark:text-zinc-200 font-semibold">&gt; Building mechanical systems, digital tools, and experiments from first principles, then testing whether they actually deserve to exist</p>
                <p className="pt-2 border-t border-zinc-200 dark:border-zinc-800/60 text-zinc-500 dark:text-zinc-400">
                  FEATURED_BUILD: <br />
                  <a
                    href="https://portfolio-zhifrantino.vercel.app/projects/siliminpro#ignite"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-950 dark:text-white hover:text-[#ff2400] dark:hover:text-[#ff2400] underline underline-offset-4 transition-colors"
                  >
                    SILIMINPRO
                  </a>
                </p>
                <p>[ENGINE CALCULATOR / WEB SYSTEM]</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 text-[11px] text-zinc-400 dark:text-zinc-500">
              <span className="text-[#ff2400] font-bold">&gt;&gt;</span> AWAITING INPUT
            </div>
          </div>

          {/* CELL 3: CTA & ACTIONS (Col 5) */}
          <div className="md:col-span-5 border border-zinc-300 dark:border-zinc-800 p-6 flex flex-col justify-between bg-transparent">
            <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-4">
              OPERATIONAL_CONTROLS
            </span>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#projects"
                className="flex-1 py-3 px-4 bg-[#ff2400] hover:bg-[#d91e00] text-white text-center font-mono font-bold text-xs uppercase tracking-wider transition-colors border border-transparent shadow-[2px_2px_0px_#09090b] dark:shadow-none"
              >
                [ EXPLORE PROJECTS ]
              </a>
              <a
                href="#about"
                className="flex-1 py-3 px-4 border border-zinc-400 dark:border-zinc-700 text-zinc-900 dark:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 text-center font-mono text-xs uppercase tracking-wider transition-colors"
              >
                READ MANIFEST →
              </a>
            </div>
          </div>

          {/* CELL 4: TOOLCHAIN / SPECS (Col 4) */}
          <div className="md:col-span-4 border border-zinc-300 dark:border-zinc-800 p-6 flex flex-col justify-between font-mono bg-transparent">
            <span className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-3">
              PRIMARY_TOOLING
            </span>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold text-zinc-800 dark:text-zinc-300">
              <div className="p-2 border border-zinc-300 dark:border-zinc-800">VSCODE</div>
              <div className="p-2 border border-zinc-300 dark:border-zinc-800">SOLIDWORKS</div>
            </div>
          </div>

          {/* CELL 5: MANIFESTO / PHILOSOPHY (Col 3) */}
          <div className="md:col-span-3 border border-zinc-300 dark:border-zinc-800 p-6 flex flex-col justify-between group bg-transparent">
            <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-2">
              AXIOM
            </span>
            <p className="text-xs font-black uppercase tracking-tight text-zinc-800 dark:text-zinc-300 leading-tight">
              BUILD IT.<br />
              TEST IT.<br />
              KNOW WHEN TO LET IT GO.
            </p>

            <p className="mt-4 text-[10px] font-medium uppercase tracking-tight text-zinc-500 dark:text-zinc-500 leading-tight">
              “You are the cause,<br />
              I am the effect.”
            </p>
            <span >
              <a
                href="https://open.spotify.com/track/3XKMWLqzFfUeZgf3ndtjUJ"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mt-3 block group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors"
              >
                REF: LoG // ONE GUN
              </a>
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}