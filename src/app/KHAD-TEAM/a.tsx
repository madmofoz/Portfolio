"use client";
import React, { useState, useEffect, useRef } from "react";
// Import aset lokal
import EntryPhoto from "@/assets/khad-all-team-2024.webp";

/**
 * PROJECT: KHAD TEAM - THE APEX GRID
 * Perbaikan: Struktur komponen dipisah dan sintaks diperketat.
 */

export default function KhadTeam() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full bg-[#020617] text-white overflow-hidden font-sans">
      
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
            <span className="text-red-500 font-black italic tracking-widest text-xs uppercase">
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
            Menerjemahkan telemetri balap yang kompleks menjadi narasi digital.
            <span className="text-white"> 18 bingkai murni pencarian teknik.</span>
          </p>
        </div>

        {/* --- THE TECHNICAL STICKY ENTRY --- */}
        <TechnicalEntryScroll imageSrc={EntryPhoto.src} />

        {/* --- THE GRID ENGINE (LAP 1) --- */}
        <div className="px-[5vw]">
          <div className="mb-40 pt-32">
            <div className="flex items-end gap-6 mb-16">
              <h3 className="text-8xl font-black italic opacity-10 leading-none">LAP 01</h3>
              <div className="pb-2">
                <span className="block text-[10px] font-mono text-zinc-500 tracking-[0.4em] uppercase">Sector: 01</span>
                <span className="text-2xl font-bold uppercase tracking-tighter text-white">The Machine</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-start">
              <div className="lg:col-span-3 grid grid-cols-2 gap-6">
                <PhotoFrame id={1} className="md:-translate-y-8" />
                <PhotoFrame id={2} className="md:translate-y-8" />
              </div>
              <div className="lg:col-span-3">
                <PhotoFrame id={3} className="aspect-square lg:aspect-video" isHighlight />
              </div>
              <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <PhotoFrame id={4} />
                <PhotoFrame id={5} />
                <PhotoFrame id={6} />
              </div>
            </div>
          </div>
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

function TechnicalEntryScroll({ imageSrc }: { imageSrc: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Hitung progres (0 sampai 1) selama container melewati viewport
      const totalScrollable = rect.height - windowHeight;
      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full bg-black/40">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center px-[5vw]">
        
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #444 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        {/* Frame Foto Utama */}
        <div className="relative w-full max-w-4xl h-[80vh] border border-zinc-800 bg-zinc-950 overflow-hidden rounded-sm group">
          <div 
            className="absolute top-0 left-0 w-full transition-transform duration-100 ease-out"
            style={{ 
              // Menghitung pergerakan: karena foto 1:2, kita geser maksimal sekitar 50-60% ke atas
              transform: `translateY(-${scrollProgress * 60}%)`, 
            }}
          >
            <img 
              src={imageSrc}
              alt="Vertical Telemetry"
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          {/* Overlay UI */}
          <div className="absolute inset-0 pointer-events-none z-20">
            <div className="absolute top-10 left-10 space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
                <span className="text-[10px] font-mono text-white tracking-[0.4em] uppercase">Reading_Full_Telemetry</span>
              </div>
            </div>

            <div className="absolute bottom-10 right-10 text-right">
              <h4 className="text-4xl font-black italic tracking-tighter uppercase leading-none mb-2">Technical_Analysis</h4>
              <div className="text-[10px] font-mono text-red-500">
                SCROLL_PROGRESS: {(scrollProgress * 100).toFixed(0)}%
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar Samping */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 h-64 w-[2px] bg-zinc-800 hidden md:block">
           <div 
             className="w-full bg-red-600 transition-all duration-100"
             style={{ height: `${scrollProgress * 100}%` }}
           ></div>
        </div>
      </div>
    </div>
  );
}

// --- Komponen Frame Foto Grid ---
interface PhotoFrameProps {
  id: number;
  className?: string;
  isHighlight?: boolean;
}

function PhotoFrame({ id, className = "", isHighlight = false }: PhotoFrameProps) {
  return (
    <div className={`group relative overflow-hidden border border-zinc-900 transition-all duration-700 ${className}`}>
      <div className="absolute top-2 left-2 z-20">
        <span className="text-[8px] font-mono bg-black/50 backdrop-blur-md px-2 py-0.5 uppercase tracking-widest text-white">
          Frame_{id.toString().padStart(2, '0')}
        </span>
      </div>
      <div className={`relative overflow-hidden ${isHighlight ? 'aspect-video lg:aspect-[21/9]' : 'aspect-square'}`}>
        <img 
          src={`https://images.unsplash.com/photo-1547744037-b80bdba1b6f0?q=80&w=800&auto=format&fit=crop&v=${id}`}
          alt={`Racing Frame ${id}`}
          className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 border-0 group-hover:border-2 border-red-600 transition-all pointer-events-none"></div>
    </div>
  );
}