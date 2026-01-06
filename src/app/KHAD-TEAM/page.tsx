"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from '@/components/navbar';
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

/**
 * PROJECT: KHAD TEAM - THE APEX GRID
 * Fix: Responsive Sticky Scroll for High-Aspect Images (1620x3240)
 * Gacor di HP, Presisi di Desktop.
 */

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full bg-[#020617] text-white overflow-x-hidden font-sans">
      <Navbar />
      
      {/* --- DEKORASI TRIPLE LINING --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[120%] h-[20px] bg-red-600 rotate-[15deg] opacity-20"></div>
        <div className="absolute top-[-8%] left-[-5%] w-[120%] h-[20px] bg-white rotate-[15deg] opacity-20"></div>
        <div className="absolute top-[-6%] left-[-5%] w-[120%] h-[20px] bg-blue-900 rotate-[15deg] opacity-20"></div>
      </div>

      <div className="relative z-10 w-full py-24">
        
        {/* --- HERO SECTION --- */}
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

        {/* --- THE TECHNICAL STICKY ENTRY (FIXED RESPONSIVE) --- */}
        <TechnicalEntryScroll />

        {/* --- THE GRID ENGINE (LAP 1-3) --- */}
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

// --- KOMPONEN SCROLL KHUSUS FOTO TINGGI ---

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
    <div ref={containerRef} className="relative h-[175vh] w-full bg-transparent md:h-[150vh]">
      
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center px-4 md:px-[5vw]">
        
        {/* Background Grid & Blueprints (Vibe Engineer) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #444 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[2px] h-32 bg-gradient-to-b from-transparent via-red-600 to-transparent hidden lg:block"></div>

        <div className="relative w-full max-w-2xl h-[85vh] md:h-[80vh] border border-zinc-800 bg-zinc-950 overflow-hidden rounded-sm group shadow-2xl shadow-red-900/10">
          
          <div 
            className="absolute top-0 left-0 w-full transition-transform duration-75 ease-out will-change-transform"
            style={{ 
              transform: `translateY(-${scrollProgress * 50}%)`,
            }}
          >
            <img 
              src={typeof EntryPhoto === 'string' ? EntryPhoto : EntryPhoto.src}
              alt="KHAD TEAM 2024 - The Apex Structure"
              className="w-full h-auto grayscale [@media(any-hover:hover)]:group-hover:grayscale-0 transition-all duration-1000 brightness-75 [@media(any-hover:hover)]:group-hover:brightness-100"
            />
          </div>

          {/* Overlay HUD (Fixed) */}
          <div className="absolute inset-0 pointer-events-none p-6 md:p-10 flex flex-col justify-between z-20">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
                  <span className="text-[10px] font-mono text-white tracking-[0.4em] uppercase">Telemetry_Active</span>
                </div>
                <p className="text-[8px] font-mono text-zinc-500">RES: 1620x3240 // ASPECT: 1:2</p>
              </div>
              <div className="px-3 py-1 border border-zinc-800 bg-black/50 text-[10px] font-mono">
                SEC_00
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div className="text-[10px] font-mono-bold text-red-500 bg-black/45 p-2">
                SCAN_PROG: <span className="inline-block w-8">{(scrollProgress * 100).toFixed(0)}%</span>
              </div>
              <div className="text-right">
                <h4 className="text-3xl md:text-4xl text-blue-950 font-black italic tracking-tighter uppercase leading-none mb-2 ">Structure</h4>
                <p className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Team Identity // Deployment 2024</p>
              </div>
            </div>

            {/* Brackets Corner */}
            <div className="absolute top-4 right-4 h-10 w-10 border-t border-r border-red-600/30"></div>
            <div className="absolute bottom-4 left-4 h-10 w-10 border-b border-l border-red-600/30"></div>
          </div>
        </div>

        {/* Side Vertical Scroll Indicator */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 h-64 w-[1px] bg-zinc-800 hidden lg:block">
           <div 
             className="w-full bg-red-600 shadow-[0_0_10px_#ef4444]"
             style={{ height: `${scrollProgress * 100}%` }}
           ></div>
           <div className="absolute -right-4 top-0 text-[8px] font-mono text-zinc-500 uppercase">Start</div>
           <div className="absolute -right-4 bottom-0 text-[8px] font-mono text-zinc-500 uppercase">FInish</div>
        </div>
      </div>
    </div>
  );
}

// --- LAP SECTIONS (MACHINE, TEAM, IDENTITY) ---

function LapOne() {
  return (
    <div className="mb-40">
          <div className="flex items-end gap-6 mb-16">
            <h3 className="text-8xl font-black italic opacity-10 leading-none text-white">LAP 01</h3>
            <div className="pb-2">
              <span className="block text-[10px] font-mono text-zinc-500 tracking-[0.4em] uppercase">Sector: 01</span>
              <span className="text-2xl font-bold uppercase tracking-tighter text-white">The Machine</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-start">
            {/* Grup Kiri: 2 Gambar Kotak */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-6">
              <div className="aspect-square overflow-hidden border border-white/5">
                <img src={day1_1.src} className="w-full h-full object-cover md:-translate-y-8 transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="aspect-square overflow-hidden border border-white/5">
                <img src={day1_2.src} className="w-full h-full object-cover md:translate-y-8 transition-transform duration-500 hover:scale-110" />
              </div>
            </div>

            {/* Grup Kanan: 1 Gambar Highlight (Video Aspect) */}
            <div className="lg:col-span-3">
              <div className="aspect-square lg:aspect-video overflow-hidden border border-white/5">
                <img src={day1_3.src} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            </div>

            {/* Baris Bawah: 3 Gambar Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-square overflow-hidden border border-white/5">
                <img src={day1_4.src} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="aspect-square overflow-hidden border border-white/5">
                <img src={day1_5.src} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="aspect-square overflow-hidden border border-white/5">
                <img src={day1_6.src} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
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
              <span className="text-2xl font-bold uppercase tracking-tighter">Team & Pitlane</span>
            </div>
            <h3 className="text-8xl font-black italic opacity-10 leading-none">LAP 02</h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <img src={day2_4.src} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            <div className="flex items-center justify-center border border-zinc-800 p-4">
              <span className="text-[12px] font-mono tracking-[0.8em] uppercase text-zinc-600 rotate-90 lg:rotate-0">Teamwork</span>
            </div>
            <img src={day2_1.src} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            <img src={day2_2.src} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            <img src={day2_3.src} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            <div className="flex items-center justify-center bg-red-600/10 border border-red-600/20 p-4">
              <span className="text-[16px] font-mono tracking-[0.8em] uppercase text-red-500">Precision</span>
            </div>
            <div className="hidden lg:flex items-center justify-center border border-zinc-800 p-4">
              <span className="text-[14px] font-mono tracking-[0.8em] uppercase text-zinc-600">Focus</span>
            </div>
            <img src={day2_5.src} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            <img src={day2_6.src} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
          </div>
        </div>
  );
}

function LapThree() {
  return (
    <div className="mb-40">
          <div className="flex items-end gap-6 mb-16">
            <h3 className="text-8xl font-black italic opacity-10 leading-none">LAP 03</h3>
            <div className="pb-2">
              <span className="block text-[10px] font-mono text-zinc-500 tracking-[0.4em] uppercase">Sector: 03</span>
              <span className="text-2xl font-bold uppercase tracking-tighter">Identity & Details</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <img src={day3_2.src} className="md:translate-x-4 transition-transform duration-500 hover:scale-110" />
            <img src={day3_3.src} className="md:-translate-x-4 transition-transform duration-500 hover:scale-110" />
            <img src={day3_4.src} className="md:translate-x-4 transition-transform duration-500 hover:scale-110" />
            <img src={day3_5.src} className="md:-translate-x-4 transition-transform duration-500 hover:scale-110" />
            <img src={day3_1.src} className="md:col-span-2 transition-transform duration-500 hover:scale-110" />
            <div>
              <div className="h-184 w-184 aspect-square lg:aspect-video overflow-hidden border border-white/5">
                <img src={day3_6.src} className="object-top w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
  );
}
function Info() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-24 border-y border-zinc-900 bg-zinc-950/50 p-10 rounded-3xl">
          <div className="space-y-8">
            <h4 className="text-xs font-mono uppercase tracking-[0.5em] text-red-600">Race Livery Colors</h4>
            <div className="flex items-center gap-6">
              <ColorSwatch color="#020617" label="NAVY" hex="#020617" />
              <ColorSwatch color="#ef4444" label="RED" hex="#EF4444" />
              <ColorSwatch color="#ffffff" label="WHITE" hex="#FFFFFF" />
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-[0.5em] text-zinc-500">Pitstop Info</h4>
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase">Typeface: Bold Sans Serif</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
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
          <p className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter mb-12 max-w-3xl mx-auto">
            "In racing, clarity is speed. <span className="text-zinc-600">The design must serve the function."</span>
          </p>
          <a
            href="https://instagram.com/khadteam"
            target="_blank"
            className="inline-flex items-center gap-6 bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-sm text-xs font-black uppercase tracking-[0.4em] transition-all active:scale-95 shadow-[0_10px_30px_rgba(239,68,68,0.3)]"
          >
            View Live Instagram →
          </a>
        </div>
  );
}

// --- COLOR SWATCH COMPONENT ---
function ColorSwatch({ color, label, hex }: { color: string; label: string; hex: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-10 w-10 rounded-sm border border-zinc-800"
        style={{ backgroundColor: color }}
      ></div>
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
        <span className="text-[8px] font-mono text-zinc-600">{hex}</span>
      </div>
    </div>
  );
}