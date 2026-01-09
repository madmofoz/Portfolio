"use client";
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/navbar';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialDark = savedTheme ? savedTheme === 'dark' : supportDarkMode;
    setIsDark(initialDark);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark, mounted]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors duration-500 overflow-x-hidden selection:bg-blue-500 selection:text-white">
      
        <Navbar />
      
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <CoreFeaturesSection />
        <NarrativeSection />
        <TechnicalSpecsSection />
        <CTASection />
      </main>

      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 text-center text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-500">
        Engineered by Zhifrantino © 2026 // SiliminPro Terminal
      </footer>
    </div>
  );
}

// --- components ---

function HeroSection() {
  // Logic untuk generate Ticks
  const center = 160;
  const radiusOuter = 110;
  const radiusInnerMinor = 102;
  const radiusInnerMajor = 96;
  const totalTicks = 27; // 270° / 10°
  const startAngle = -135; // degrees

  const ticks = [];
  for (let i = 0; i <= totalTicks; i++) {
    const angle = (startAngle + i * 10) * Math.PI / 180;
    const isMajor = i % 3 === 0;

    const x1 = center + Math.cos(angle) * radiusOuter;
    const y1 = center + Math.sin(angle) * radiusOuter;
    const x2 = center + Math.cos(angle) * (isMajor ? radiusInnerMajor : radiusInnerMinor);
    const y2 = center + Math.sin(angle) * (isMajor ? radiusInnerMajor : radiusInnerMinor);

    ticks.push({ x1, y1, x2, y2, isMajor });
  }


  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[radial-gradient(#80808012_1px,transparent_1px)] bg-[size:32px_32px]">
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-40">
        <div className="absolute top-1/4 left-10 w-px h-64 bg-gradient-to-b from-blue-500 to-transparent"></div>
        <div className="absolute bottom-1/4 right-10 w-px h-64 bg-gradient-to-t from-orange-500 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-500/30 rounded-full bg-blue-500/5">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-500">The Ignition System</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8]">
            Silimin<span className="text-blue-500 italic">Pro</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-zinc-400 uppercase italic">
            The Precision Engine.
          </h2>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-lg leading-relaxed font-medium">
            Built by engineers, for engineers. No spreadsheets, no bullshit. <span className="text-zinc-900 dark:text-white">Just pure torque</span> and device agnostic.
          </p>
          <div className="pt-4">
            <a href="#projects" className="group relative inline-flex items-center gap-4 px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black font-black uppercase tracking-widest text-xs overflow-hidden no-underline">
              <span className="relative z-10">Initialize System</span>
              <div className="absolute inset-0 bg-blue-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-3000"></div>
            </a>
          </div>
        </div>

        {/* RADIAL DIAL SVG INTEGRATION */}
        <div className="relative flex items-center justify-center scale-125 md:scale-150">
          <style>{`
            .radial-dial {
              opacity: 0.9;
              filter: drop-shadow(0 0 20px rgba(10, 132, 255, 0.2));
            }
            .ticks line {
              stroke: currentColor;
              stroke-width: 1;
              opacity: 0.4;
            }
            .ticks line.major {
              stroke-width: 2;
              opacity: 0.7;
            }
            .pointer {
              stroke: #0a84ff;
              stroke-width: 2;
              transform-origin: 160px 160px;
              animation: pointerIdle 7s infinite ease-in-out;
            }
            @keyframes pointerIdle {
              0%   { transform: rotate(-30deg); }
              50%  { transform: rotate(180deg); }
              100% { transform: rotate(-30deg); }
            }
          `}</style>
          
          <svg
            className="radial-dial text-zinc-400 dark:text-zinc-500"
            width="320"
            height="320"
            viewBox="0 0 320 320"
          >
            <path
              d="M 80 80 A 100 100 0 1 1 240 242"
              fill="none"
              stroke="rgba(0,140,255,0.25)"
              strokeWidth="2"
            />  

            <g className="ticks">
              {ticks.map((t, i) => (
                <line
                  key={i}
                  x1={t.x1}
                  y1={t.y1}
                  x2={t.x2}
                  y2={t.y2}
                  className={t.isMajor ? "major" : "minor"}
                />
              ))}
            </g>

            <line
              x1="160"
              y1="160"
              x2="160"
              y2="75"
              className="pointer"
            />

            <circle cx="160" cy="160" r="4" fill="#0a84ff" />
          </svg>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pt-24">
             <span className="text-2xl font-black italic opacity-20"><br />x 1000</span>
          </div>
        </div>
        
      </div>
    </section>
  );
}

function ProblemSolutionSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden border-y border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col lg:flex-row w-full h-full min-h-[80vh]">
        <div className="flex-1 p-12 lg:p-24 bg-zinc-100 dark:bg-zinc-900 flex flex-col justify-center relative group overflow-hidden">
          <div className="absolute top-10 right-10 text-[8rem] font-black opacity-5 italic select-none">MESS</div>
          <div className="space-y-6 relative z-10">
            <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-red-500">01 / The Legacy Mess</h3>
            <h4 className="text-5xl font-black uppercase tracking-tighter leading-none italic">
              Guesswork & <br/> Paper Trail.
            </h4>
            <div className="p-6 border-2 border-dashed border-red-500/20 bg-red-500/5 rounded-lg opacity-60 filter blur-[1px] group-hover:blur-0 transition-all duration-700">
               <pre className="text-[10px] font-mono text-zinc-400">
                 {`[!] Error: Formula not found
                  Piston D: 52mm ?
                  Stroke: 57.9mm ?
                  Compression: (Vd + Vc) / Vc ...
                  Wait, Vc is unknown?
                  # CORE_DUMP: Paper messy`}
               </pre>
            </div>
            <p className="text-zinc-500">Messy spreadsheets, manual formulas prone to error, and oil-stained paper won't build a champion engine.</p>
          </div>
        </div>

        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:border-zinc-800 -rotate-12 transform origin-center z-20"></div>

        <div className="flex-1 p-12 lg:p-24 bg-zinc-50 dark:bg-black flex flex-col justify-center relative group overflow-hidden">
          <div className="absolute bottom-10 left-10 text-[8rem] font-black opacity-9 italic select-none">PRECISION</div>
          <div className="space-y-6 relative z-10">
            <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-blue-500">02 / Digital Standard</h3>
            <h4 className="text-5xl font-black uppercase tracking-tighter leading-none italic">
              Digital <br/> Precision.
            </h4>
            <div className="p-6 border-2 border-blue-500/30 bg-blue-500/5 rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500 group-hover:border-blue-500">
               <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono uppercase text-blue-500">Module: Compression_Calc</span>
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
               </div>
               <div className="text-4xl font-black text-zinc-900 dark:text-white font-mono tracking-tighter">
                  12.5 : 1
               </div>
               <div className="mt-2 h-1 w-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                  <div className="h-full bg-blue-500 w-[75%]"></div>
               </div>
            </div>
            <p className="text-zinc-500">One calculator, instant results, absolute accuracy. Focus on the engine, let SiliminPro handle the math.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreFeaturesSection() {
  const features = [
    {
      id: "01",
      title: "Automotive Tuning",
      icon: "⚡",
      desc: "Dynamic compression, displacement, top speed. Tune it right with real-world physics."
    },
    {
      id: "02",
      title: "Mechanical Engineering",
      icon: "⚙️",
      desc: "Thermodynamics, stress analysis, structural integrity. Solid foundation for every build."
    },
    {
      id: "03",
      title: "The Logic Core",
      icon: "{ }",
      desc: "Complex formulas translated into seamless Python (Flask) logic. Clean code, clean hoods."
    }
  ];

  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-20">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic">Blueprint Components</h2>
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f) => (
            <div key={f.id} className="group relative p-10 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 rounded-sm hover:border-blue-500 transition-all duration-500">
               <div className="absolute top-2 left-2 w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
               <div className="absolute top-2 right-2 w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
               <div className="absolute bottom-2 left-2 w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
               <div className="absolute bottom-2 right-2 w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>

               <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0">
                 {f.icon}
               </div>
               <h4 className="text-xs font-mono uppercase tracking-[0.4em] text-zinc-500 mb-4">{f.id} // System</h4>
               <h5 className="text-2xl font-black uppercase tracking-tight mb-6">{f.title}</h5>
               <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">{f.desc}</p>
               
               <div className="mt-12 overflow-hidden h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <pre className="text-[8px] font-mono leading-tight">
                    {`def calculate_displacement(bore, stroke, cylinders):
                      radius = bore / 2
                      area = Math.PI * (radius ** 2)
                        return (area * stroke * cylinders) / 1000`}
                  </pre>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NarrativeSection() {
  return (
    <section className="py-32 bg-zinc-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-25 scale-150 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="relative aspect-square md:aspect-video lg:aspect-square group overflow-hidden border border-white/10 rounded-3xl">
           <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-orange-600/20 mix-blend-overlay"></div>
           <div className="flex h-full w-full">
              <div className="w-1/2 h-full bg-zinc-800 flex items-center justify-center border-r border-white/10 overflow-hidden hover-scale:105">
                 <div className="text-[10px] font-mono opacity-40 rotate-90 whitespace-nowrap">MECHANICAL_HANDS_DIRTY</div>
              </div>
              <div className="w-1/2 h-full bg-zinc-950 flex items-center justify-center overflow-hidden">
                 <div className="text-[10px] font-mono opacity-40 rotate-90 whitespace-nowrap">DIGITAL_TERMINAL_CLEAN</div>
              </div>
           </div>
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center text-black font-black italic shadow-2xl">VS</div>
           </div>
        </div>

        <div className="space-y-8">
           <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-blue-400">Garage to Code</h3>
           <blockquote className="text-3xl md:text-5xl font-black tracking-tight leading-tight italic uppercase">
             "I don't trust a tool if I don't know how it works. <span className="text-zinc-500">SiliminPro was born in the garage,</span> forged in the terminal."
           </blockquote>
           <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-blue-500"></div>
              <span className="text-xl font-mono italic">— Tino, an oulier system.</span>
           </div>
        </div>
      </div>
    </section>
  );
}

function TechnicalSpecsSection() {
  const specs = [
    { label: "Core Architecture", value: "Next.js 16 + Tailwind v4" },
    { label: "Backend Logic", value: "Python Flask // Microservices" },
    { label: "Calculations", value: "Engine Tuning +" },
    { label: "Design Philosophy", value: "Clean Industrial Functionalism" },
    { label: "Deployment", value: "Fly.io // Global Distribution" },
    { label: "Author Status", value: "Developing...." }
  ];

  return (
    <section className="py-32 px-6 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-zinc-400 mb-12 text-center">Technical Data Sheet</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {specs.map((s, i) => (
            <div key={i} className="flex justify-between items-end border-b border-zinc-100 dark:border-zinc-800 pb-2 group">
              <span className="text-[10px] font-mono uppercase text-zinc-400 group-hover:text-blue-500 transition-colors">{s.label}</span>
              <span className="text-sm font-black uppercase tracking-tight">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="ignite" className="py-40 px-6 flex flex-col items-center justify-center bg-[radial-gradient(#80808012_1px,transparent_1px)] bg-[size:48px_48px]">
      <div className="text-center space-y-12 max-w-2xl">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic">
          Ready to <br/> <span className="text-blue-600 dark:text-blue-400 animate-pulse">Ignite?</span>
        </h2>
        <p className="text-zinc-500 text-lg">Stop the doubt, start the calculation. Enter the SiliminPro ecosystem now.</p>
        
        <div className="relative group p-1">
          <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          
          <a href="https://siliminpro.fly.dev" target="_blank" className="relative block w-full md:w-[400px] h-[80px] bg-red-600 dark:bg-red-500 hover:bg-red-700 dark:hover:bg-red-600 rounded-full border-[8px] border-zinc-900/10 dark:border-white/10 shadow-inner overflow-hidden transition-all active:scale-95 flex items-center justify-center group no-underline">
            <span className="text-white text-xl font-black italic uppercase tracking-[0.2em] relative z-10 flex items-center gap-4">
              [ IGNITE THE TOOL → ]
            </span>
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10"></div>
          </a>
        </div>
        
        <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400">
           Engine Safety: Locked & Loaded // Waiting for Signal
        </div>    
      </div>
    </section>
  );
}