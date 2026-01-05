"use client";
import React, { useState, useEffect, useRef } from "react";
import Navbar from '@/components/navbar';

// Import All Assets
import EntryPhoto from "@/assets/khad-all-team-2024.webp";
import day1_1 from "@/assets/khad-day-1/slide 2.webp";
import day1_2 from "@/assets/khad-day-1/slide 3.webp";
import day1_3 from "@/assets/khad-day-1/slide 4.webp";
import day1_4 from "@/assets/khad-day-1/slide 5.webp";
import day1_5 from "@/assets/khad-day-1/slide 6.webp";
import day1_6 from "@/assets/khad-day-1/slide 7.webp";

import day2_1 from "@/assets/khad-day-2/slide 9.webp";
import day2_2 from "@/assets/khad-day-2/slide 3.webp";
import day2_3 from "@/assets/khad-day-2/slide 4.webp";
import day2_4 from "@/assets/khad-day-2/slide 5.webp";
import day2_5 from "@/assets/khad-day-2/slide 6.webp";
import day2_6 from "@/assets/khad-day-2/slide 7.webp";

import day3_1 from "@/assets/khad-day-3/slide 2.webp";
import day3_2 from "@/assets/khad-day-3/slide 3.webp";
import day3_3 from "@/assets/khad-day-3/slide 4.webp";
import day3_4 from "@/assets/khad-day-3/slide 5.webp";
import day3_5 from "@/assets/khad-day-3/slide 6.webp";
import day3_6 from "@/assets/khad-day-3/slide 8.webp";

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full bg-[#020617] text-white overflow-x-hidden font-sans">
      <Navbar />
      
      {/* Triple Lining Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[120%] h-[20px] bg-red-600 rotate-[15deg] opacity-20"></div>
        <div className="absolute top-[-8%] left-[-5%] w-[120%] h-[20px] bg-white rotate-[15deg] opacity-20"></div>
        <div className="absolute top-[-6%] left-[-5%] w-[120%] h-[20px] bg-blue-900 rotate-[15deg] opacity-20"></div>
      </div>

      <div className="relative z-10 w-full py-24">
        
        {/* Hero Section */}
        <div className="min-h-[60vh] flex flex-col justify-center mb-24 border-l-4 border-red-600 px-[5vw]">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-red-500 font-black italic tracking-widest text-xs uppercase underline decoration-red-600 underline-offset-8">
              Lights Out & Away We Go!
            </span>
            <div className="h-px w-24 bg-red-600"></div>
          </div>
          <h1 className="text-[10vw] font-black leading-[0.8] tracking-tighter uppercase mb-4">
            KHAD <span className="text-zinc-800">TEAM.</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-black italic text-red-600 uppercase tracking-tighter mb-8">
            Visualizing Velocity
          </h2>
          <p className="max-w-2xl text-lg text-zinc-400 leading-relaxed font-medium">
            Menerjemahkan telemetri balap menjadi narasi digital.
            <span className="text-white"> 18 bingkai murni pencarian teknik.</span>
          </p>
        </div>

        {/* The Technical Sticky Entry */}
        <TechnicalEntryScroll />

        {/* The Grid Engine */}
        <div className="px-[5vw] mt-20">
          <LapOne />
          <LapTwo />
          <LapThree />
          <Info />
          <FinishLine />
        </div>
      </div>

      <footer className="h-2 w-full flex">
        <div className="flex-1 bg-red-600"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-blue-900"></div>
      </footer>
    </section>
  );
}

function TechnicalEntryScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Hitung progress scroll di area 300vh
      const totalScrollable = rect.height - windowHeight;
      const progress = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-transparent">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center px-4 md:px-[5vw]">
        
        {/* Vibe Decor */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #444 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Frame Container 
            max-w-xl biar di desktop nggak terlalu lebar, jadi foto 1:2 lu tetep proporsional.
        */}
        <div className="relative w-full max-w-xl h-[80vh] border border-zinc-800 bg-zinc-950 overflow-hidden rounded-sm group shadow-2xl">
          
          {/* FOTO TINGGI (1620x3240) 
              KUNCINYA: transform translateY(calc(-1 * progress * (TinggiGambar - TinggiKotak)))
              Karena kita nggak tau tinggi piksel aslinya di layar user, kita pake calc %
          */}
          <div 
            className="absolute top-0 left-0 w-full transition-transform duration-75 ease-out will-change-transform"
            style={{ 
              transform: `translateY(calc(-${scrollProgress} * (100% - 80vh)))`,
            }}
          >
            <img 
              src={EntryPhoto.src}
              alt="Vertical Telemetry"
              className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          {/* HUD Overlay */}
          <div className="absolute inset-0 pointer-events-none p-6 md:p-10 flex flex-col justify-between z-20">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
                  <span className="text-[10px] font-mono text-white tracking-[0.4em] uppercase">Telemetry_Active</span>
                </div>
                <p className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Res: 1620x3240 // Sector: 00</p>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div className="text-[10px] font-mono text-red-500 bg-black/40 backdrop-blur-sm p-2 border border-red-600/20">
                SCAN_PROG: {(scrollProgress * 100).toFixed(0)}%
              </div>
              <div className="text-right">
                <h4 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-none mb-2">Technical_Analysis</h4>
                <p className="text-[8px] font-mono text-zinc-500 uppercase">Khad Team Identity // Deployment 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Line */}
        <div className="absolute right-12 h-64 w-[1px] bg-zinc-800 hidden lg:block">
           <div 
             className="w-full bg-red-600 shadow-[0_0_10px_#ef4444]"
             style={{ height: `${scrollProgress * 100}%` }}
           ></div>
        </div>
      </div>
    </div>
  );
}

function LapOne() {
  return (
    <div className="mb-40">
      <div className="flex items-end gap-6 mb-16">
        <h3 className="text-8xl font-black italic opacity-10 leading-none text-white uppercase">Lap 01</h3>
        <div className="pb-2">
          <span className="block text-[10px] font-mono text-zinc-500 tracking-[0.4em] uppercase">Sector: 01</span>
          <span className="text-2xl font-bold uppercase tracking-tighter text-white italic">The Machine</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-start">
        <div className="lg:col-span-3 grid grid-cols-2 gap-6">
          <div className="aspect-square overflow-hidden border border-white/5 bg-zinc-900">
            <img src={day1_1.src} className="w-full h-full object-cover md:-translate-y-8 hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="aspect-square overflow-hidden border border-white/5 bg-zinc-900">
            <img src={day1_2.src} className="w-full h-full object-cover md:translate-y-8 hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="aspect-square lg:aspect-video overflow-hidden border border-white/5 bg-zinc-900">
            <img src={day1_3.src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
        <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[day1_4, day1_5, day1_6].map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden border border-white/5 bg-zinc-900">
              <img src={img.src} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LapTwo() {
  return (
    <div className="mb-40 relative">
      <div className="absolute -left-[5vw] top-1/2 -translate-y-1/2 opacity-5 select-none pointer-events-none">
        <span className="text-[15vw] font-black italic rotate-90 inline-block">PADDOCK</span>
      </div>
      <div className="flex items-end justify-end gap-6 mb-16 text-right">
        <div className="pb-2">
          <span className="block text-[10px] font-mono text-zinc-500 tracking-[0.4em] uppercase">Sector: 02</span>
          <span className="text-2xl font-bold uppercase tracking-tighter italic">Team & Pitlane</span>
        </div>
        <h3 className="text-8xl font-black italic opacity-10 leading-none uppercase">Lap 02</h3>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <img src={day2_4.src} className="w-full h-full object-cover hover:scale-110 transition-all duration-700 aspect-square" />
        <div className="flex items-center justify-center border border-zinc-800 p-4 bg-zinc-900/50">
          <span className="text-[12px] font-mono tracking-[0.8em] uppercase text-zinc-600 rotate-90 lg:rotate-0">Teamwork</span>
        </div>
        <img src={day2_1.src} className="w-full h-full object-cover hover:scale-110 transition-all duration-700 aspect-square" />
        <img src={day2_2.src} className="w-full h-full object-cover hover:scale-110 transition-all duration-700 aspect-square" />
        <img src={day2_3.src} className="w-full h-full object-cover hover:scale-110 transition-all duration-700 aspect-square" />
        <div className="flex items-center justify-center bg-red-600/10 border border-red-600/20 p-4">
          <span className="text-[16px] font-mono tracking-[0.8em] uppercase text-red-500">Precision</span>
        </div>
        <div className="hidden lg:flex items-center justify-center border border-zinc-800 p-4 bg-zinc-900/50">
          <span className="text-[14px] font-mono tracking-[0.8em] uppercase text-zinc-600">Focus</span>
        </div>
        <img src={day2_5.src} className="w-full h-full object-cover hover:scale-110 transition-all duration-700 aspect-square" />
        <img src={day2_6.src} className="w-full h-full object-cover hover:scale-110 transition-all duration-700 aspect-square" />
      </div>
    </div>
  );
}

function LapThree() {
  return (
    <div className="mb-40">
      <div className="flex items-end gap-6 mb-16">
        <h3 className="text-8xl font-black italic opacity-10 leading-none uppercase">Lap 03</h3>
        <div className="pb-2">
          <span className="block text-[10px] font-mono text-zinc-500 tracking-[0.4em] uppercase">Sector: 03</span>
          <span className="text-2xl font-bold uppercase tracking-tighter italic">Identity & Details</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[day3_2, day3_3, day3_4, day3_5].map((img, i) => (
          <img key={i} src={img.src} className={`${i % 2 === 0 ? 'md:translate-x-4' : 'md:-translate-x-4'} transition-transform duration-700 hover:scale-110 aspect-[3/4] object-cover bg-zinc-900 border border-white/5`} />
        ))}
        <div className="md:col-span-2 overflow-hidden border border-white/5">
          <img src={day3_1.src} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
        </div>
        <div className="md:col-span-2 aspect-video overflow-hidden border border-white/5">
          <img src={day3_6.src} className="object-top w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-24 border-y border-zinc-900 bg-zinc-950/50 p-10 rounded-3xl">
      <div className="space-y-8">
        <h4 className="text-xs font-mono uppercase tracking-[0.5em] text-red-600 italic font-bold">Race Livery Colors</h4>
        <div className="flex flex-wrap gap-8">
          <ColorSwatch color="#020617" label="NAVY" hex="#020617" />
          <ColorSwatch color="#ef4444" label="RED" hex="#EF4444" />
          <ColorSwatch color="#ffffff" label="WHITE" hex="#FFFFFF" />
        </div>
      </div>
      <div className="space-y-6">
        <h4 className="text-xs font-mono uppercase tracking-[0.5em] text-zinc-500 italic font-bold">Pitstop Info</h4>
        <div className="space-y-4">
          <p className="text-sm font-black uppercase italic tracking-widest">Typeface: Bold Sans Serif</p>
          <p className="text-zinc-400 text-sm leading-relaxed font-medium">
            Maximum readability at high speeds. The broken grid system mimics the
            unpredictability and intensity of the racetrack.
          </p>
        </div>
      </div>
    </div>
  );
}

function FinishLine() {
  return (
    <div className="py-32 text-center">
      <p className="text-2xl md:text-5xl font-black italic uppercase tracking-tighter mb-12 max-w-3xl mx-auto leading-tight">
        "In racing, clarity is speed. <br/>
        <span className="text-zinc-600">The design must serve the function."</span>
      </p>
      <a
        href="https://instagram.com/khadteam"
        target="_blank"
        className="inline-flex items-center gap-6 bg-red-600 hover:bg-black text-white px-12 py-6 rounded-sm text-xs font-black uppercase tracking-[0.4em] transition-all active:scale-95 shadow-[0_15px_40px_rgba(239,68,68,0.4)]"
      >
        View Live Instagram →
      </a>
    </div>
  );
}

function ColorSwatch({ color, label, hex }: { color: string; label: string; hex: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div
        className="h-12 w-12 rounded-sm border border-zinc-800 transition-transform group-hover:scale-110"
        style={{ backgroundColor: color }}
      ></div>
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-widest text-white">{label}</span>
        <span className="text-[9px] font-mono text-zinc-500">{hex}</span>
      </div>
    </div>
  );
}