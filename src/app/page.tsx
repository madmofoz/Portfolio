"use client";

import React, { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/zhifrantino";
import ProjectCard from "@/components/projectcard";
import Anomalies from "@/components/anomalies";
import { PROJECTS } from "@/constants";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [isBugActive, setIsBugActive] = useState(false);

  // Triple-click security breach trigger
  const handleSecurityClick = useCallback(() => {
    setClickCount((prev) => {
      const nextCount = prev + 1;
      if (nextCount >= 3) {
        setIsBugActive(true);
        setTimeout(() => {
          setIsBugActive(false);
          setClickCount(0);
        }, 20000);
        return 0;
      }
      return nextCount;
    });
  }, []);

  useEffect(() => {
    if (clickCount > 0 && !isBugActive) {
      const timer = setTimeout(() => setClickCount(0), 400);
      return () => clearTimeout(timer);
    }
  }, [clickCount, isBugActive]);

  return (
    <div className="min-h-screen overflow-x-hidden text-zinc-900 dark:text-zinc-100 selection:bg-[#ff2400] selection:text-white transition-colors duration-500">
      <Navbar />

      <main className="w-full">
        {/* HERO SECTION WRAPPER */}
        <div onClick={handleSecurityClick} role="presentation">
          <section id="home">
            <Hero />
          </section>
        </div>

        {/* PROJECTS SHOWCASE SECTION */}
        <section
          id="projects"
          className="py-28 border-t border-zinc-300 dark:border-zinc-800"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            {/* INDUSTRIAL SECTION HEADER */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-300 dark:border-zinc-800 pb-4 mb-10 font-mono">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[10px] tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
                  <span className="w-1.5 h-1.5 bg-[#ff2400]" />
                  <span>REGISTRY // BUILDS_CATALOG</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase leading-none text-zinc-950 dark:text-white">
                  FEATURED <br className="sm:hidden" />
                  <span className="text-[#ff2400]">PROJECTS</span>
                </h2>
              </div>

              <div className="text-[10px] tracking-widest text-zinc-400 dark:text-zinc-600">
                COUNT: [{String(PROJECTS.length).padStart(2, "0")}] // STATUS: OPERATIONAL
              </div>
            </div>

            {/* BENTO PROJECT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {PROJECTS.map((project, index) => (
                <ProjectCard
                  key={project.title || index}
                  index={index + 1}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT / DOSSIER SECTION */}
        <About />
      </main>
      <Anomalies isBugActive={isBugActive} />
    </div>
  );
}