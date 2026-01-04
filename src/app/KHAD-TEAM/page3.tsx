"use client"
import React, { useState, useEffect } from "react";
// Import aset lokal dari folder src/assets/
import EntryPhoto from "@/assets/khad-all-team-2024.webp";

/**
 * PROJECT: KHAD TEAM - THE APEX GRID
 * Concept: Visualizing Velocity
 * Note: Menggunakan aset lokal khad-all-team-2024.webp untuk Technical Entry.
 */

export default function KhadTeam() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full bg-[#020617] text-white overflow-hidden font-sans">
      
      {/* --- TRIPLE LINING DECORATION --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[120%] h-[20px] bg-red-600 rotate-[15deg] opacity-40"></div>
        <div className="absolute top-[-8%] left-[-5%] w-[120%] h-[20px] bg-white rotate-[15deg] opacity-40"></div>
        <div className="absolute top-[-6%] left-[-5%] w-[120%] h-[20px] bg-blue-900 rotate-[15deg] opacity-40"></div>
      </div>

      <div className="relative z-10 w-full px-[5vw] py-24">
        
        {/* --- HERO SECTION --- */}
        <div className="min-h-[60vh] flex flex-col justify-center mb-24 border-l-4 border-red-600 pl-8">
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
            Translating complex race telemetry and team dedication into a cohesive digital narrative. 
            <span className="text-white"> 18 frames of pure engineering pursuit.</span>
          </p>
        </div>

        {/* --- THE TECHNICAL ENTRY (Using Local Asset) --- */}
        <div className="mb-40 group">
          <div className="relative w-full aspect-video md:aspect-[21/9] border border-zinc-800 overflow-hidden bg-zinc-900 rounded-sm">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #444 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            
            <img 
              src="{EntryPhoto.src || EntryPhoto}"
              alt="Khad Team Hero Asset" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            <div className="absolute top-6 left-6 flex flex-col gap-1">
              <span className="text-[10px] font-mono text-red-500 font-bold uppercase tracking-[0.4em]">Asset_Ref: KT_00</span>
              <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest italic">Source: src/assets/khad-all-team-2024.webp</span>
            </div>

            <div className="absolute bottom-8 right-8 text-right space-y-2">
               <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">TECHNICAL_ENTRY</h3>
               <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em]">Module: Apex_Visual_Link</p>
            </div>

            <div className="absolute top-4 right-4 h-8 w-8 border-t border-r border-red-600"></div>
            <div className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-red-600"></div>
          </div>
          
          <div className="flex items-center gap-4 mt-8 opacity-40">
            <div className="h-[2px] w-20 bg-red-600"></div>
            <span className="text-[10px] font-mono uppercase tracking-[0.5em]">Advancing to Sector 01</span>
          </div>
        </div>

        {/* --- THE GRID ENGINE --- */}
        
        {/* LAP 1: THE MACHINE */}
        <div className="mb-40">
          <div className="flex items-end gap-6 mb-16">
            <h3 className="text-8xl font-black italic opacity-10 leading-none">LAP 01</h3>
            <div className="pb-2">
              <span className="block text-[10px] font-mono text-zinc-500 tracking-[0.4em] uppercase">Sector: 01</span>
              <span className="text-2xl font-bold uppercase tracking-tighter">The Machine</span>
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

        {/* LAP 2: THE TEAM */}
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
            <PhotoFrame id={7} />
            <div className="flex items-center justify-center border border-zinc-800 p-4">
              <span className="text-[10px] font-mono tracking-[0.8em] uppercase text-zinc-600 rotate-90 lg:rotate-0">Teamwork</span>
            </div>
            <PhotoFrame id={8} />
            <PhotoFrame id={9} />
            <PhotoFrame id={10} />
            <div className="flex items-center justify-center bg-red-600/10 border border-red-600/20 p-4">
              <span className="text-[10px] font-mono tracking-[0.8em] uppercase text-red-500">Precision</span>
            </div>
            <div className="hidden lg:flex items-center justify-center border border-zinc-800 p-4">
              <span className="text-[10px] font-mono tracking-[0.8em] uppercase text-zinc-600">Focus</span>
            </div>
            <PhotoFrame id={11} />
            <PhotoFrame id={12} />
          </div>
        </div>

        {/* LAP 3: THE IDENTITY */}
        <div className="mb-40">
          <div className="flex items-end gap-6 mb-16">
            <h3 className="text-8xl font-black italic opacity-10 leading-none">LAP 03</h3>
            <div className="pb-2">
              <span className="block text-[10px] font-mono text-zinc-500 tracking-[0.4em] uppercase">Sector: 03</span>
              <span className="text-2xl font-bold uppercase tracking-tighter">Identity & Details</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PhotoFrame id={13} className="md:translate-x-4" />
            <PhotoFrame id={14} className="md:-translate-x-4" />
            <PhotoFrame id={15} className="md:translate-x-4" />
            <PhotoFrame id={16} className="md:-translate-x-4" />
            <PhotoFrame id={17} className="md:col-span-2" />
            <PhotoFrame id={18} className="md:col-span-2 aspect-video" isEpic />
          </div>
        </div>

        {/* --- PITSTOP TECH INFO --- */}
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

        {/* --- FINISH LINE --- */}
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

      </div>

      <footer className="h-2 w-full flex">
        <div className="flex-1 bg-red-600"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-blue-900"></div>
      </footer>
    </section>
  );
}

// --- Internal UI Components ---

function PhotoFrame({ id, className = "", isHighlight = false, isEpic = false }: { id: number; className?: string; isHighlight?: boolean; isEpic?: boolean }) {
  return (
    <div className={`group relative overflow-hidden border border-zinc-900 transition-all duration-700 ${className}`}>
      <div className="absolute top-2 left-2 z-20">
        <span className="text-[8px] font-mono bg-black/50 backdrop-blur-md px-2 py-0.5 uppercase tracking-widest">
          Frame_{id.toString().padStart(2, '0')}
        </span>
      </div>

      <div className={`relative overflow-hidden ${isHighlight ? 'aspect-video lg:aspect-[21/9]' : 'aspect-square'}`}>
        <img 
          src={`https://images.unsplash.com/photo-1547744037-b80bdba1b6f0?q=80&w=800&auto=format&fit=crop&v=${id}`}
          alt={`Racing Frame ${id}`}
          className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        {isEpic && (
          <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 to-transparent"></div>
        )}
      </div>

      <div className="absolute inset-0 border-0 group-hover:border-2 border-red-600 transition-all pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-600 group-hover:w-full transition-all duration-1000"></div>
    </div>
  );
}

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