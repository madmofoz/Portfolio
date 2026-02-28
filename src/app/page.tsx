"use client"
import React, { useState, useEffect } from 'react';
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/zhifrantino";
import ProjectCard from "@/components/projectcard";
import Footer from "@/components/footer";
import Anomalies from "@/components/anomalies";
import { PROJECTS } from "@/constants";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [isBugActive, setIsBugActive] = useState(false);

  const handleSecurityClick = () => {
    setClickCount((prev) => {
      const newCount = prev + 1;

      if (newCount >= 3) {
        setIsBugActive(true);

        setTimeout(() => {
          setIsBugActive(false);
          setClickCount(0);
        }, 20000);

        return 0;
      }
      return newCount;
    });
  };

  useEffect(() => {
    if (clickCount > 0 && !isBugActive) {
      const timer = setTimeout(() => {
        setClickCount(0);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [clickCount, isBugActive]);

  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300">

      <main className="w-full px-[5vw]">
        <div onClick={handleSecurityClick}>
          <section id="home"><Hero /></section>
        </div>

        <section id="projects" className="py-32 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-10 mb-20">
            <h2 className="text-5xl font-black tracking-tighter uppercase leading-none">Recent Projects</h2>
            <div className="h-0.5 w-full bg-zinc-900 dark:bg-zinc-100"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tech={project.tech}
                link={project.link}
              />
            ))}
          </div>
        </section>

        <About />
      </main>

      <Anomalies isBugActive={isBugActive} />
    </div>
  );
}