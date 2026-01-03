import React from 'react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 flex flex-col items-start w-full">
      {/* Background Subtle Label - Biar berasa vibe engineer */}
      <div className="absolute top-40 right-0 hidden lg:block select-none opacity-5 dark:opacity-10 pointer-events-none">
        <span className="text-[15vw] font-black leading-none uppercase tracking-tighter">
          Overkill
        </span>
      </div>

      <div className="relative z-10 w-full">
        {/* Meta info kecil di atas headline */}
        <div className="flex items-center gap-4 mb-8">
          <span className="h-[1px] w-12 bg-zinc-800 dark:bg-zinc-200"></span>
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">
            System Status: Fully Operational / 2026
          </span>
        </div>

        {/* Headline Utama - Pake viewport width (vw) biar melar seukuran layar */}
        <h1 className="text-[clamp(3rem,10vw,12rem)] font-black leading-[0.8] tracking-tighter uppercase mb-12">
          CRAFTING <br />
          <span className="text-zinc-400 dark:text-zinc-800 italic">DIGITAL</span> <br />
          ENGINES.
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
          {/* Deskripsi - Porsi kolom 7 dari 12 */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-xl md:text-3xl text-zinc-600 dark:text-zinc-400 leading-tight font-medium">
              I am <span className="text-black dark:text-white font-bold">Muhammad Zhifrantino.</span> <br />
              Bridging the gap between <span className="italic">Mechanical Engineering</span> and <span className="italic font-bold text-black dark:text-white">Full-stack Development.</span>
            </p>
            
            <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
              As the lead developer of <a href="https://siliminpro.fly.dev" target="_blank" className="underline decoration-2 underline-offset-4 hover:text-black dark:hover:text-white transition-colors">SiliminPro</a>, 
              I build high-performance tools that solve complex technical problems through pure, functional logic.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="#projects"
                className="group relative px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-black uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">View My Systems</span>
              </a>
              
              <a 
                href="#about" 
                className="text-sm font-bold uppercase tracking-widest border-b-2 border-zinc-800 dark:border-zinc-200 pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-all"
              >
                Read Manifest →
              </a>
            </div>
          </div>

          {/* Stats/Side Info - Porsi kolom 5 dari 12 buat ngisi space monitor lebar */}
          <div className="lg:col-span-5 flex lg:justify-end items-end pb-4">
            <div className="space-y-4 text-right hidden lg:block">
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Core Philosophy</p>
                <p className="text-sm font-bold uppercase">Discipline Over Dopamine</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Primary Tools</p>
                <p className="text-sm font-bold uppercase">Next.js / Flask / SolidWorks</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Current Build</p>
                <p className="text-sm font-bold uppercase underline decoration-zinc-500">Engine Calc v2.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}