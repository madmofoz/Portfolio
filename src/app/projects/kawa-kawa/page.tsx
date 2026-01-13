"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Type, Eye, Zap, Search, Sun, Moon, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import ads from "@/assets/kawa-kawa/ads- v2.webp";
import label from "@/assets/kawa-kawa/artboard-1.webp";
import text from "@/assets/kawa-kawa/artboard-5.webp";

export default function KawaKawaProject() {

  return (
    <div className="font-sans duration-700 overflow-x-hidden">

      {/* HERO SECTION: "The Urban Release" */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className={`inline-block px-3 py-1 border text-[10px] font-black uppercase tracking-[0.4em]`}>
              Project: Visual Identity
            </div>
            <h1 className="text-[8vw] lg:text-[6vw] font-black leading-[0.85] tracking-tighter uppercase italic">
              THE URBAN <br /> 
              <span className={`drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]`}>RELEASE:</span> <br /> 
              STAY WILD <br /> N FREE.
            </h1>
            <p className={`max-w-md text-lg md:text-xl font-medium leading-tight`}>
              A visual manifestation of youth freedom and freestyle energy, designed for the iconic Kawa Kawa label contest.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center"
          >
            <div className={`relative w-full aspect-[3/4] max-w-md overflow-hidden group border shadow-2xl transition-colors duration-7000`}>
              <Image 
                src={ads} 
                alt="Kawa Kawa Bottle Mockup" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-lime-500/5 animate-pulse-slow"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 bg-[#39FF14] text-black font-black uppercase italic tracking-tighter text-2xl rotate-3 shadow-2xl">
              ARTBOARD 08
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECHNICAL REPORT: Precision Graphics & Compliance Audit */}
      <section className={`py-40 relative overflow-hidden transition-colors duration-700`}>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="mb-24 space-y-4">
            <h3 className="text-[#30ec0e]/70 dark:text-[#39FF14] font-mono text-[14px] uppercase tracking-[0.5em] font-bold">
              [TECHNICAL REPORT]: Graphics & Compliance Audit
            </h3>
            <h2 className={`text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none`}>
              VISUAL ASSETS<br />  BREAKDOWN.
            </h2>
            <p className={`max-w-3xl text-sm md:text-base font-mono leading-relaxed mt-6`}>
              While the visual aesthetic leans into the "Stay Wild" urban culture, the execution remains rooted in the rigorous standards of Mechanical Engineering. I treated the label like a high-performance machine part—flawless, legal, and optimized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-mono">
            {/* Audit Point 1 */}
            <div className={`p-10 border transition-all group bg-black/5`}>
              <div className="flex items-center gap-4 mb-8">
                <Search className="text-[#39FF14]" size={24} />
                <h4 className="text-sm font-bold uppercase tracking-widest">01. System Audit</h4>
              </div>
              <div className="space-y-4 text-[11px] leading-relaxed uppercase">
                <p>Identified critical linguistic errors in contest assets (e.g., 'Fermentas' in mandatory copy).</p>
                <div className="relative inline-block group/tip cursor-help">
                  <span className="bg-[#28ec05]/20 text-[#30ec0e] px-2 py-1 rounded-sm font-bold border border-[#39FF14]/30">
                    [ACTION]: Rectified to 'Fermentasi'
                  </span>
                  {/* Spotlight Tooltip */}
                  <div className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-red-600 text-white text-[10px] font-bold opacity-0 group-hover/tip:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl">
                    <AlertTriangle className="inline-block mr-2" size={12} />
                    RECTIFIED FROM TEMPLATE ERROR: 'FERMENTAS'
                  </div>
                </div>
              </div>
            </div>

            {/* Audit Point 2 */}
            <div className={`p-10 border transition-all bg-black/5`}>
              <div className="flex items-center gap-4 mb-8">
                <ShieldCheck className="text-[#39FF14]" size={24} />
                <h4 className="text-sm font-bold uppercase tracking-widest">02. Risk Mitigation</h4>
              </div>
              <div className="space-y-4 text-[11px] leading-relaxed uppercase">
                <p>Ensured 100% Free-for-Commercial-Use licenses to shield brand from copyright infringement.</p>
                <p className="text-zinc-600 dark:text-zinc-200">Result: Production-ready asset that is legally bulletproof.</p>
              </div>
            </div>

            {/* Audit Point 3 */}
            <div className={`p-10 border transition-all bg-black/5`}>
              <div className="flex items-center gap-4 mb-8">
                <Zap className="text-[#39FF14]" size={24} />
                <h4 className="text-sm font-bold uppercase tracking-widest">03. Chromatic Optimization</h4>
              </div>
              <div className="space-y-4 text-[11px] leading-relaxed uppercase">
                <p>Strategic application of Neon Green against deep monochromatic index for maximum standout.</p>
                <p className="text-zinc-600 dark:text-zinc-200">Status: immediate psychological link to <span className="dark:text-[#39FF14]">Green Grape</span> established.</p>
              </div>
            </div>

            {/* Audit Point 4 */}
            <div className={`p-10 border transition-all bg-black/5`}>
              <div className="flex items-center gap-4 mb-8">
                <Eye className="text-[#39FF14]" size={24} />
                <h4 className="text-sm font-bold uppercase tracking-widest">04. Structured Compliance</h4>
              </div>
              <div className="space-y-4 text-[11px] leading-relaxed uppercase">
                <p>Maintaining street-art vibe without compromising readability of Indonesian beverage legal disclosures.</p>
                <p className="text-[#39FF14]">[SURGICAL PRECISION APPLIED]</p>
              </div>
            </div>
          </div>

          {/* Engineer's Note */}
          <div className={`mt-24 p-12 border-l-4 border-[#30ec0e]/70 dark:border-[#39FF14] relative`}>
            <h5 className="font-mono text-[#30ec0e]/70 dark:text-[#39FF14] text-[16px] uppercase tracking-widest mb-4">Engineer's Note:</h5>
            <p className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter leading-[0.85]">
              "Design without precision is just noise. I don't just build visuals; I build assets that are structurally sound, legally compliant, and strategically lethal."
            </p>
          </div>
        </div>
      </section>

      {/* VISUAL GALLERY: "Breaking the Routine" */}
      <section className="py-40">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-[0.8]">
              BREAKING THE <br /> <span className="text-[#39FF14]">ROUTINE.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Full View */}
            <div className="md:col-span-8 group relative aspect-video bg-zinc-900 overflow-hidden border border-white/5">
              {/*v<Image 
                src={text}
                alt="Full Label Layout" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop'; }}
              /> */}
              <div className="absolute top-6 left-6 px-3 py-1 bg-[#39FF14] text-black text-[10px] font-black uppercase">LAYOUT SYSTEM 01</div>
            </div>

            {/* Tagline & Silhouette */}
            <div className="md:col-span-4 grid grid-rows-2 gap-8">
              <div className={`border p-10 flex flex-col justify-center transition-colors duration-700`}>
                <span className="text-[#30ec0e]/70 dark:text-[#39FF14] font-mono text-[12px] uppercase tracking-widest mb-4">#Identity Tag</span>
                <h4 className="text-4xl lg:text-5xl font-black italic uppercase leading-none tracking-tighter">
                  STAY YOUNG <br /> N DANGEROU
                  <span className="text-[#39FF14] inline-block animate-glow-5">5</span>
                </h4>
                <p className="text-[12px] font-mono text-zinc-500 mt-4 uppercase tracking-widest">5 Years Kawa Kawa Homage</p>
              </div>
              <div className="relative group overflow-hidden bg-zinc-900 aspect-square md:aspect-auto">
                 <Image 
                  src={label} 
                  alt="Silhouette Detail" 
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-opacity duration-700" 
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?q=80&w=2070&auto=format&fit=crop'; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER: "Responsible Freedom" */}
      <section className={`py-40 border-t transition-colors duration-700`}>
        <div className="container mx-auto px-6 text-center space-y-12">
          <div className="flex justify-center">
             <div className="h-16 w-16 bg-[#39FF14] flex items-center justify-center text-black">
                <Zap size={32} fill="black" />
             </div>
          </div>
          <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8]">
            A CELEBRATION OF <br /> RESPONSIBLE <span className="text-[#39FF14] underline underline-offset-10 ">FREEDOM.</span>
          </h2>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.5em]">
            Precisely designed, wildly executed.
          </p>
        </div>
      </section>
    </div>
  );
}