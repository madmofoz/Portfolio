"use client";
 
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Settings, Zap, Sun, Bot, Search, Leaf, AlertTriangle, Recycle } from 'lucide-react';
 
export default function FailedIdealArchive() {
 
  return (
    <div className="font-sans duration-700 overflow-x-hidden">
 
      {/* HERO SECTION: "The Archives" */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
 
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-block px-3 py-1 border text-[12px] font-black uppercase tracking-[0.4em]">
              The Archives: Anatomy of a Failed Ideal
            </div>
            <h1 className="text-[8vw] lg:text-[4vw] font-black leading-[0.85] tracking-tight uppercase italic">
              A Chronicle of <br />
              <span className="drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">Physics,</span> <br />
              Financial <span className="drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">Realities,</span> <br />
              and The Art of
              <span className="drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]"> Pulling the Plug.</span>
            </h1>
            <p className="max-w-md text-lg md:text-xl font-medium leading-tight font-mono uppercase tracking-widest text-zinc-400">
              3 Phases. 7 Files. 1 Terminated Project.
            </p>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full aspect-[3/4] max-w-md overflow-hidden group border shadow-2xl transition-colors duration-700">
              <div className="absolute inset-0 bg-sky-500/5 animate-pulse-slow" />
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 bg-[#38BDF8] text-black font-black uppercase italic tracking-tighter text-2xl rotate-3 shadow-2xl">
              Status: Terminated
            </div>
          </motion.div>
        </div>
      </section>
 
      {/* REFLECTION */}
      <section className="py-40 bg-zinc-950/45 border-y border-zinc-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-red-500">
              <Settings className="w-6 h-6 animate-spin-slow" />
              <span className="font-mono text-xs uppercase tracking-[0.5em]">Reflection</span>
            </div>
            <h2 className="text-4xl text-zinc-300 md:text-5xl font-black uppercase tracking-tighter leading-none italic">
              Not Only <br /> <span className="text-red-600">Innovation.</span>
            </h2>
            <p className="text-xl text-zinc-800 dark:text-zinc-300 leading-relaxed italic border-l-4 border-red-600 pl-8">
              Green-tech innovations are often nothing more than an aesthetic illusion, designed to look good on paper but which fail miserably when faced with the realities on the ground. This project almost became one such deception.
            </p>
 
            <p className="text-xl text-zinc-800 dark:text-zinc-300 leading-relaxed italic border-l-4 border-red-600 pl-8">
              No massive R&D team. No corporate funding. This is the result of months of self-isolation—spent in the company of a Legion 5 screen forced to render fluid flow simulations until it reached thermal throttling, cup after cup of Circle K coffee at 3 am, and a one-man battle against the constraints of mechanics, thermodynamics and budget limitations.
            </p>
 
            <p className="text-[#0EA5E9]/90 dark:text-[#38BDF8] font-mono text-sm uppercase tracking-widest pt-4">
              This is the record of its evolution.
            </p>
          </div>
        </div>
      </section>
 
      {/* THE EVOLUTION ARCHIVE */}
      <section className="py-40 relative overflow-hidden transition-colors duration-700">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="mb-24 space-y-4">
            <h3 className="text-[#0EA5E9]/90 dark:text-[#38BDF8] font-mono text-[14px] uppercase tracking-[0.5em] font-bold">
              [FIELD LOG]: PROJECT EVOLUTION
            </h3>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
              THE EVOLUTION<br /> ARCHIVE.
            </h2>
          </div>
 
          {/* PHASE 1 */}
          <div className="mb-28 space-y-10">
            <div className="space-y-3">
              <span className="font-mono text-[13px] uppercase tracking-[0.3em] text-zinc-400">Phase 1</span>
              <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">The Power Crisis</h3>
              <p className="max-w-2xl text-sm md:text-base font-mono leading-relaxed text-zinc-300">
                Before I can solve the air filtration problem, I need to solve the energy problem. How can I power such a heavy system off-grid?
              </p>
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
              <div className="p-10 border border-white/10 bg-black/5 space-y-6">
                <div className="flex items-center gap-4">
                  <Zap className="text-[#38BDF8]" size={24} />
                  <h4 className="text-sm font-bold uppercase tracking-widest">File 01: The R15-V3 Compound Wind Turbine</h4>
                </div>
                <p className="text-[13px] leading-relaxed text-zinc-300">
                  My first idea was wind power. I designed a Vertical Axis Wind Turbine (VAWT) with the aim of supplying 220VAC. Realising that the wind's rotation was too slow, I designed an 11-stage compound gearbox transmission from scratch. Drawing on my knowledge of engine tuning, I adapted the gear ratios from a Yamaha R15 V3 motorbike engine to increase the rotational speed (step-up). On paper, I successfully simulated an input of 100 RPM resulting in an output of over 400 RPM.
                </p>
                <div className="inline-block px-3 py-1 bg-red-600/20 border border-red-600/40 text-red-500 text-[11px] font-black uppercase tracking-widest">
                  Verdict: Terminated
                </div>
                <p className="text-[13px] text-zinc-400">
                  Financial calculations show that this project requires a generator, a transformer and large components, with estimated costs exceeding Rp 10 million. That is far too expensive for a prototype.
                </p>
              </div>
 
              <div className="p-10 border border-white/10 bg-black/5 space-y-6">
                <div className="flex items-center gap-4">
                  <Sun className="text-[#38BDF8]" size={24} />
                  <h4 className="text-sm font-bold uppercase tracking-widest">File 02: Concentrated Solar Peltier Array</h4>
                </div>
                <p className="text-[13px] leading-relaxed text-zinc-300">
                  Disappointed with the wind, I turned my attention to solar thermodynamics. Using an acrylic convex lens, I designed a heat-concentrating array focused onto a thermoelectric generator (Peltier) module to be converted into electrical energy. To meet the standard car battery current rating (40A), my mathematical calculations showed that I would need more than 63 Peltier modules connected in series.
                </p>
                <div className="inline-block px-3 py-1 bg-red-600/20 border border-red-600/40 text-red-500 text-[11px] font-black uppercase tracking-widest">
                  Verdict: Terminated
                </div>
                <p className="text-[13px] text-zinc-400">
                  The thermal-to-electrical conversion efficiency of Peltier devices turns out to be very poor (massive power loss). Assembling 63 modules would simply waste millions of rupiah for an output that is not worth the cost.
                </p>
              </div>
            </div>
          </div>
 
          {/* PHASE 2 */}
          <div className="mb-28 space-y-10">
            <div className="space-y-3">
              <span className="font-mono text-[13px] uppercase tracking-[0.3em] text-zinc-400">Phase 2</span>
              <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">The Mechatronics Detour</h3>
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
              <div className="p-10 border border-white/10 bg-black/5 space-y-6 md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-4">
                  <Bot className="text-[#38BDF8]" size={24} />
                  <h4 className="text-sm font-bold uppercase tracking-widest">File 03: The Cyber-Scarecrow (Agri-Robot)</h4>
                </div>
                <p className="text-[13px] leading-relaxed text-zinc-300">
                  Amidst the deadlock caused by the energy crisis affecting major projects, my engineering mind turned to designing agricultural mechatronics. Instead of building an expensive, power-hungry drone, I designed a solar-powered winged robot with a Line Follower system (Arduino) that patrols around rice paddies using a loop of wire. A low-cost solution with a high coverage area. However, this was merely a side project. My focus had to return to the issue of air pollution in public spaces.
                </p>
                <div className="inline-block px-3 py-1 bg-zinc-500/20 border border-zinc-500/40 text-zinc-300 text-[11px] font-black uppercase tracking-widest">
                  Status: Side-Quest
                </div>
              </div>
            </div>
          </div>
 
          {/* PHASE 3 */}
          <div className="space-y-10">
            <div className="space-y-3">
              <span className="font-mono text-[13px] uppercase tracking-[0.3em] text-zinc-400">Phase 3</span>
              <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">The Air Purifier Evolution</h3>
              <p className="max-w-2xl text-sm md:text-base font-mono leading-relaxed text-zinc-300">
                Powered by conventional solar panels, I set about redesigning the air purifier once again. I dismantled and scrapped my own design four times in a row in search of an elusive point of equilibrium.
              </p>
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
              <div className="p-10 border border-white/10 bg-black/5 space-y-6">
                <div className="flex items-center gap-4">
                  <Search className="text-[#38BDF8]" size={24} />
                  <h4 className="text-sm font-bold uppercase tracking-widest">File 04: Mark I — The Naïve Baseline</h4>
                </div>
                <p className="text-[13px] leading-relaxed text-zinc-300">
                  The first air prototype was designed purely as a mechanical filtration system with no biological elements whatsoever. Contaminated air is drawn in, filtered and expelled.
                </p>
                <div className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[11px] font-black uppercase tracking-widest">
                  Verdict: Baseline Only
                </div>
                <p className="text-[13px] text-zinc-400">
                  Does it work mechanically? Yes. However, this design is too basic and lacks the circular economy innovations needed to be implemented as a solution for the future.
                </p>
              </div>
 
              <div className="p-10 border border-white/10 bg-black/5 space-y-6">
                <div className="flex items-center gap-4">
                  <Leaf className="text-[#38BDF8]" size={24} />
                  <h4 className="text-sm font-bold uppercase tracking-widest">File 05: Mark II — The Eco-Utopia</h4>
                </div>
                <p className="text-[13px] leading-relaxed text-zinc-300">
                  To get round the proposal panel's 'environmentally friendly' standards, I incorporated a hydroponic system to act as a natural air filter. I designed a system comprising two tanks (upper and lower) complete with a water circulation pump. On paper, it was a sexy green utopia.
                </p>
                <div className="inline-block px-3 py-1 bg-red-600/20 border border-red-600/40 text-red-500 text-[11px] font-black uppercase tracking-widest">
                  Verdict: Scrapped
                </div>
                <p className="text-[13px] text-zinc-400">
                  The feasibility study has shown that this is a maintenance nightmare. Forcing plants to survive by absorbing concentrated pollutants is operational nonsense, and maintaining a hydroponic system on public roads is completely unrealistic.
                </p>
              </div>
 
              <div className="p-10 border border-white/10 bg-black/5 space-y-6">
                <div className="flex items-center gap-4">
                  <AlertTriangle className="text-[#38BDF8]" size={24} />
                  <h4 className="text-sm font-bold uppercase tracking-widest">File 06: Mark III — The Industrial Logic</h4>
                </div>
                <p className="text-[13px] leading-relaxed text-zinc-300">
                  I abandoned the utopian vision of greenery and turned to brutal industrial logic. I designed a wet scrubber system combined with synthetic polyurethane sponges. Dust particles are forcibly flushed into a pressurised water reservoir, whilst the remaining toxic gases are mechanically filtered out.
                </p>
                <div className="inline-block px-3 py-1 bg-red-600/20 border border-red-600/40 text-red-500 text-[11px] font-black uppercase tracking-widest">
                  Verdict: Scrapped
                </div>
                <p className="text-[13px] text-zinc-400">
                  An ecological flaw has emerged. Polyurethane is a synthetic polymer. Creating an air purifier that ultimately produces non-biodegradable microplastic waste is a technical hypocrisy.
                </p>
              </div>
 
              <div className="p-10 border border-[#38BDF8]/40 bg-[#38BDF8]/5 space-y-6">
                <div className="flex items-center gap-4">
                  <Recycle className="text-[#38BDF8]" size={24} />
                  <h4 className="text-sm font-bold uppercase tracking-widest">File 07: Mark IV — The Biopolymer Apex</h4>
                </div>
                <p className="text-[13px] leading-relaxed text-zinc-300">
                  The ultimate pivot. I ventured into the field of materials science. I replaced plastic foam with a cellulose biopolymer filter engineered from banana pseudostem waste. The statistics speak for themselves: East Java accounts for 30 per cent of national banana production, generating millions of tonnes of pseudostem waste that rots away to no avail. I am not merely filtering the air; I am transforming vast quantities of agricultural waste into high-performance particulate traps.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#38BDF8]/20 border border-[#38BDF8]/50 text-[#38BDF8] text-[11px] font-black uppercase tracking-widest">
                  <ShieldCheck size={12} /> Verdict: Validated
                </div>
                <p className="text-[13px] text-zinc-400">
                  This design is perfect. Computational Fluid Dynamics (CFD) simulations validate its aerodynamics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* TERMINAL DIRECTIVE: Engineer's Note */}
      <section className="py-40">
        <div className="container mx-auto px-6 max-w-5xl space-y-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-[0.9]">
            The Terminal Directive: <br /> <span className="text-[#38BDF8]">Why I Pulled the Plug.</span>
          </h2>
 
          <div className="space-y-6 font-mono text-sm md:text-base leading-relaxed text-zinc-300">
            <p>
              If the Mark IV was mechanically flawless, why did this machine never make it to the production line?
            </p>
            <p>
              Because pure engineering demands brutal financial honesty. As a Systems Analyst, I carried out the final stage of the cost-benefit analysis. The laws of electricity are non-negotiable: a high-static-pressure centrifugal blower requires a constant power draw that is simply too great.
            </p>
            <p>
              To provide this power off-grid 24/7 in public spaces, this solar power system would require me to use a LiFePO4 battery bank of enormous capacity. If produced, the hardware cost per unit would skyrocket, far exceeding the value of its efficiency.
            </p>
          </div>
 
          <div className="border-l-4 border-[#38BDF8] pl-8 space-y-6">
            <p className="text-xl md:text-2xl font-black italic uppercase tracking-tight leading-tight">
              I solved the fluid dynamics. I engineered the biopolymer. I proved the concept. And then, I killed it.
            </p>
          </div>
 
          <div className="p-12 border-l-4 border-[#0EA5E9]/90 dark:border-[#38BDF8]">
            <h5 className="font-mono text-[#0EA5E9]/90 dark:text-[#38BDF8] text-[16px] uppercase tracking-widest mb-4">Verdict:</h5>
            <p className="text-xl md:text-3xl font-black italic uppercase tracking-tighter leading-[0.95]">
              'Sometimes, the greatest achievement in engineering is not forcing a prototype into production to make it appear a success. Rather, it is possessing the analytical acumen and the ruthlessly precise mathematical calculations needed to scrap the project before it becomes a financial disaster. Engineering is not just about making things work; it is about making things make sense.'
            </p>
          </div>
        </div>
      </section>
 
      {/* FOOTER */}
      <section className="py-40 border-t transition-colors duration-700">
        <div className="container mx-auto px-6 text-center space-y-12">
          <div className="flex justify-center">
            <div className="h-16 w-16 bg-[#38BDF8] flex items-center justify-center text-black">
              <Zap size={32} fill="black" />
            </div>
          </div>
          <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8]">
            I SOLVED IT. I PROVED IT. <br /> I <span className="text-[#38BDF8] underline underline-offset-10">KILLED</span> IT.
          </h2>
          <p className="text-zinc-400 font-mono text-[13px] uppercase tracking-[0.4em]">
            Anatomy of a failed ideal.
          </p>
        </div>
      </section>
    </div>
  );
}