"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function SiliminPro() {
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
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-cyan-50 transition-colors duration-500 overflow-x-hidden selection:bg-cyan-500 selection:text-black font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <main className="relative z-10">
        <HeroSection />
        <ProblemSolutionSection />
        <CoreFeaturesSection />
        <NarrativeSection />
        <TechnicalSpecsSection />
        <CTASection />
      </main>
    </div>
  );
}

// --- components ---

function HeroSection() {
  const center = 160;
  const radiusOuter = 110;
  const radiusInnerMinor = 102;
  const radiusInnerMajor = 96;
  const totalTicks = 27;
  const startAngle = 135;

  const pointerRef = useRef<SVGLineElement>(null); // Ref untuk mengontrol jarum langsung ke DOM

  // Revving Simulation
useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const revEngine = () => {
      if (!pointerRef.current) return;
      
      const isRevving = Math.random() > 0.4;
      
      let randomAngle;
      if (isRevving) {
        randomAngle = -45 + (Math.random() * 180); 
      } else {
        randomAngle = -135 + (Math.random() * 90);
      }

      pointerRef.current.style.transform = `rotate(${randomAngle}deg)`;
      
      const randomDelay = 150 + Math.random() * 450;
      timeoutId = setTimeout(revEngine, randomDelay);
    };

    timeoutId = setTimeout(revEngine, 1000); 
    return () => clearTimeout(timeoutId);
  }, []);

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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-cyan-500/30 rounded-full bg-cyan-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-cyan-300">Random Forest ML Online</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
            Silimin<span className="font-black italic text-cyan-400">Pro</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-slate-400 uppercase">
            Predictive <span className="text-fuchsia-400">Tuning</span> Matrix.
          </h2>

          <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed font-light">
            Engineered for precision. No trial and error. <span className="text-cyan-300 font-medium drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">Machine learning-backed horsepower prediction</span> and absolute computing.
          </p>

          <div className="pt-8">
            <a href="#desc" className="group relative inline-flex items-center justify-center gap-4 px-10 py-4 bg-transparent border border-cyan-500/50 text-cyan-400 font-mono uppercase tracking-widest text-sm overflow-hidden rounded-sm hover:text-black transition-colors duration-300 shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] no-underline">
              <span className="relative z-10 font-bold">Launch API_</span>
              <div className="absolute inset-0 bg-cyan-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </a>
          </div>
        </div>

        {/* CYBERNETIC HUD DIAL */}
        <div className="relative flex items-center justify-center scale-125 md:scale-150 mt-20 lg:mt-0">
          <style>{`
            .cyber-dial { opacity: 1; filter: drop-shadow(0 0 15px rgba(6, 182, 212, 0.4)); }
            .cyber-ticks line { stroke: currentColor; stroke-width: 1; opacity: 0.3; }
            .cyber-ticks line.major { stroke-width: 2; opacity: 0.8; stroke: #22d3ee; }
            
            .cyber-pointer { 
              stroke: #e879f9; 
              stroke-width: 2.5; 
              transform-origin: 160px 160px; 
              filter: drop-shadow(0 0 8px #e879f9);
              transition: transform 4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              transform: rotate(-135deg); /* Posisi idle awal (0 HP) */
            }
          `}</style>

          <svg className="cyber-dial text-slate-500 dark:text-slate-600" width="320" height="320" viewBox="0 0 320 320">

            <path d="M 89.3 230.7 A 100 100 0 1 1 230.7 230.7" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="3" />

            <g className="cyber-ticks">
              {ticks.map((t, i) => (
                <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} className={t.isMajor ? "major" : "minor"} />
              ))}
            </g>

            {/* Inject ref ke jarum di sini */}
            <line
              ref={pointerRef}
              x1="160" y1="160" x2="160" y2="70"
              className="cyber-pointer"
            />

            <circle cx="160" cy="160" r="6" fill="#e879f9" className="shadow-[0_0_10px_#e879f9]" />
            <circle cx="160" cy="160" r="12" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pt-28">
            <span className="text-lg font-mono text-cyan-400 opacity-60 tracking-widest bg-slate-950/50 px-2 rounded backdrop-blur-sm"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSolutionSection() {
  return (
    <section id="desc" className="relative min-h-[80vh] flex items-center overflow-hidden border-y border-cyan-900/30">
      <div className="flex flex-col lg:flex-row w-full h-full min-h-[80vh]">
        <div className="flex-1 p-12 lg:p-24 bg-slate-900/40 flex flex-col justify-center relative group overflow-hidden backdrop-blur-sm">
          <div className="absolute top-10 right-10 text-[8rem] font-black opacity-[0.03] text-fuchsia-500 font-mono select-none">FLAW</div>
          <div className="space-y-6 relative z-10">
            <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-fuchsia-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-fuchsia-500 rounded-sm"></span> 01 // Analog Failure
            </h3>
            <h4 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-tight">
              Blind <br /> Engineering.
            </h4>
            <div className="p-6 border border-fuchsia-500/20 bg-fuchsia-500/5 rounded-sm opacity-70 group-hover:opacity-100 transition-all duration-500 shadow-[inset_0_0_20px_rgba(217,70,239,0.05)] relative">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>
              <pre className="text-[11px] font-mono text-fuchsia-300/70">
                {`> ERROR_01: Pre-ignition risk detected
                  > ERROR_02: Stress tolerance exceeded
                  > Dwell Time: UNCALIBRATED
                  > Thermodynamics: UNSTABLE
                  > [FATAL] Structural integrity compromised.`}
              </pre>
            </div>
            <p className="text-slate-400 font-light">Relying on rough sketches and 
              <span className="font-bold"> trial and error </span> 
              when building a 
              <span className="font-bold"> custom engine swap </span> 
              can lead to mechanical failure. 
              <span className="font-bold">Engineers don't guess, we calculate.</span>
              </p>
          </div>
        </div>

        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-fuchsia-500 via-cyan-500 to-cyan-900 shadow-[0_0_10px_#22d3ee] z-20"></div>

        <div className="flex-1 p-12 lg:p-24 bg-[#050b14]/80 flex flex-col justify-center relative group overflow-hidden backdrop-blur-md">
          <div className="absolute bottom-10 left-10 text-[8rem] font-black opacity-[0.02] text-cyan-500 font-mono select-none">SYNC</div>
          <div className="space-y-6 relative z-10">
            <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-cyan-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-sm"></span> 02 // Digital Override
            </h3>
            <h4 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              Algorithmic <br /> Certainty.
            </h4>
            <div className="p-6 border border-cyan-500/30 bg-cyan-500/5 rounded-sm shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-500 group-hover:border-cyan-400 relative overflow-hidden">
              <div className="absolute -left-[100%] top-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-wider">Module::Engine_Sync</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
              </div>
              <div className="text-5xl font-black text-white font-mono tracking-tighter drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]">
                99.8 <span className="text-cyan-500 text-3xl">%</span>
              </div>
              <div className="mt-4 h-1 w-full bg-slate-800 overflow-hidden rounded-full">
                <div className="h-full bg-cyan-400 w-[100%] shadow-[0_0_10px_#22d3ee]"></div>
              </div>
              <div className="mt-2 text-[10px] font-mono text-cyan-300/50">Calculation Precision: Verified</div>
            </div>
            <p className="text-slate-400 font-light">The Flask API renders thermodynamic calculations and 
              <span className="font-bold"> real-time </span> 
              calibration predictions in milliseconds. 
              Focus on welding and 
              <span className="font-bold"> hardware </span> 
              assembly; let the terminal ( SiliminPro ) handle the maths.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreFeaturesSection() {
  const autoFeatures = [
    {
      id: "AUTO.01",
      title: "Engine Internals Matrix",
      icon: "⚙️",
      desc: "Precision calculations for engine internals. Calculating static and dynamic compression, camshaft profiles, optimum valve lift, and even cylinder pressure and crankshaft balance."
    },
    {
      id: "AUTO.02",
      title: "Airflow & Fuel Dynamics",
      icon: "💨",
      desc: "Optimization of combustion air supply and exhaust gas flow. Specialized calculator for determining ideal dimensions of Intake Runner, Exhaust, Injector Size, and Fuel Pressure Flow."
    },
    {
      id: "AUTO.03",
      title: "Drivetrain & Limits",
      icon: "🏎️",
      desc: "Mapping of final performance on the track. Calculate Theoretical Top Speed, Transmission Ratio & RPM Drop, and Safe RPM Limit based on Piston Speed and Inertia Force."
    }
  ];

  const mechFeatures = [
    {
      id: "MECH.01",
      title: "Thermodynamics Core",
      icon: "🔥",
      desc: "Calculation of thermal efficiency, analysis of heat transfer in the cylinder block, and simulation of combustion chamber pressure."
    },
    {
      id: "MECH.02",
      title: "Structural Integrity",
      icon: "🏗️",
      desc: "Stress Analysis on conrod and piston pin at top dead center (TDC) at extreme RPM. Material strength validation."
    },
    {
      id: "MECH.03",
      title: "Fluid Dynamics",
      icon: "🌊",
      desc: "Optimization of volumetric efficiency (Volumetric Efficiency). Calculation of porting flow velocity (Port Velocity) for air and fuel to prevent parasitic turbulence."
    }
  ];

  return (
    <section id="features" className="py-32 px-6 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyan-900/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* DIVISION 01: AUTOMOTIVE & TUNING */}
        <div className="mb-32">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 whitespace-nowrap">
              Division 01 // Automotive & Tuning
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {autoFeatures.map((f) => (
              <div key={f.id} className="group relative p-8 border border-slate-800 bg-slate-900/40 backdrop-blur-md rounded-xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(6,182,212,0.1)]">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/0 group-hover:border-cyan-500 transition-colors rounded-tl-lg"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500/0 group-hover:border-cyan-500 transition-colors rounded-br-lg"></div>

                <div className="text-3xl mb-6 font-mono text-cyan-500 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                  {f.icon}
                </div>
                <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-fuchsia-400 mb-3">{f.id}</h4>
                <h5 className="text-xl font-bold uppercase tracking-tight mb-4 text-slate-200">{f.title}</h5>
                <p className="text-slate-400 font-light text-sm leading-relaxed">{f.desc}</p>

                {/* Visual Fake Code Block */}
                <div className="mt-8 overflow-hidden h-20 opacity-10 group-hover:opacity-40 transition-opacity border-t border-slate-800 pt-4 blur-[1px]">
                  <pre className="text-[9px] font-mono text-cyan-300 leading-tight">
                    {`import sklearn.RandomForest
                      predict = model.fit(bore, stroke, ecu)
                      print(f"Estimated Output: {predict} HP")`}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DIVISION 02: PURE MECHANICAL ENGINEERING */}
        <div>
          <div className="flex items-center gap-6 mb-16 flex-row-reverse">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-l from-white to-slate-500 whitespace-nowrap">
              Division 02 // Mechanical Engineering
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mechFeatures.map((f) => (
              <div key={f.id} className="group relative p-8 border border-slate-800 bg-slate-900/40 backdrop-blur-md rounded-xl hover:border-fuchsia-500/50 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(232,121,249,0.1)]">
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-fuchsia-500/0 group-hover:border-fuchsia-500 transition-colors rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-fuchsia-500/0 group-hover:border-fuchsia-500 transition-colors rounded-bl-lg"></div>

                <div className="text-3xl mb-6 font-mono text-fuchsia-500 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-[0_0_8px_rgba(232,121,249,0.5)]">
                  {f.icon}
                </div>
                <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-3">{f.id}</h4>
                <h5 className="text-xl font-bold uppercase tracking-tight mb-4 text-slate-200">{f.title}</h5>
                <p className="text-slate-400 font-light text-sm leading-relaxed">{f.desc}</p>

                {/* Visual Fake Code Block */}
                <div className="mt-8 overflow-hidden h-20 opacity-10 group-hover:opacity-40 transition-opacity border-t border-slate-800 pt-4 blur-[1px]">
                  <pre className="text-[9px] font-mono text-fuchsia-300 leading-tight">
                    {`def get_thermal_efficiency(Tc, Th):
                      eff = 1 - (Tc / Th)
                      return validate_stress(eff)`}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function NarrativeSection() {
  return (
    <section className="py-20 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        <div className="relative aspect-square md:aspect-video lg:aspect-square group overflow-hidden border border-cyan-900/50 rounded-2xl bg-slate-900 shadow-[0_0_40px_rgba(6,182,212,0.05)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15)_0%,transparent_70%)]"></div>

          <div className="flex h-full w-full">
            <div className="w-1/2 h-full flex flex-col justify-center items-center border-r border-slate-800 bg-black/40 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz4KPC9zdmc+')] opacity-20"></div>
              <div className="text-[11px] font-mono text-slate-500 tracking-[0.2em] rotate-90 whitespace-nowrap">MECHANICAL_DRAFTING</div>
            </div>

            <div className="w-1/2 h-full flex flex-col justify-center items-center bg-cyan-950/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(6,182,212,0.05)_50%)] bg-[length:100%_4px]"></div>
              <div className="text-[11px] font-mono text-cyan-400 tracking-[0.2em] rotate-90 whitespace-nowrap drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">FLASK_REST_API</div>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-14 w-14 bg-slate-950 border border-cyan-500/50 rounded-lg rotate-45 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] backdrop-blur-md">
              <span className="text-cyan-400 font-mono font-bold text-sm -rotate-45">SYNC</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/50 rounded text-[10px] font-mono uppercase tracking-widest border border-slate-700">
            <span className="text-emerald-400">●</span> System Arc's Log
          </div>
          <blockquote className="text-3xl md:text-4xl font-light text-slate-300 tracking-wide leading-relaxed">
            "We build custom layouts—merging mechanical reality with digital logic.
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              {" "}This system bridges the gap between hands greasy with machine oil and the clean architecture of the Python API. 
            </span> No more blind mechanics, just pure engineering output."
          </blockquote>
          <div className="flex items-center gap-4 border-t border-slate-800 pt-6">
            <div className="h-px w-8 bg-cyan-500 shadow-[0_0_5px_#22d3ee]"></div>
            <span className="text-sm font-mono text-slate-400 uppercase tracking-widest">Tino // .MADMOFOZ</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnicalSpecsSection() {
  const specs = [
    { label: "Core Framework", value: "Flask 3.1.1 // Werkzeug 3.1.3" },
    { label: "Production Server", value: "Gunicorn 23.0.0 (WSGI)" },
    { label: "ML & Data Science", value: "Scikit-Learn 1.5.0 // NumPy 1.26.4" },
    { label: "Model Serialization", value: "Joblib 1.4.2" },
    { label: "Frontend Render", value: "Jinja2 3.1.6 // Vanilla JS" },
    { label: "Performance Tuning", value: "Flask-Compress 1.23" }
  ];

  return (
    <section className="py-24 px-6 relative border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-500 mb-12 text-center flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-slate-800"></span>
          System Requirements & Dependencies
          <span className="h-px w-12 bg-slate-800"></span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
          {specs.map((s, i) => (
            <div key={i} className="flex justify-between items-end border-b border-slate-800/80 pb-3 group hover:border-cyan-500/50 transition-colors">
              <span className="text-[11px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">{s.label}</span>
              <span className="text-sm font-bold uppercase tracking-wide text-slate-300 group-hover:text-white transition-colors">{s.value}</span>
            </div>
          ))}
        </div>

        {/* Fake Terminal Output */}
        <div className="mt-16 p-6 bg-slate-900/50 border border-slate-800 rounded-lg backdrop-blur-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="ml-2 text-[10px] font-mono text-slate-500">requirements.txt</span>
          </div>
          <pre className="text-[11px] font-mono text-cyan-300/70 leading-relaxed overflow-x-auto">
            {`blinker==1.9.0
click==8.2.1
colorama==0.4.6
Flask==3.1.1
Flask-Compress==1.23
gunicorn==23.0.0
itsdangerous==2.2.0
Jinja2==3.1.6
joblib==1.4.2
MarkupSafe==3.0.2
numpy==1.26.4
packaging==25.0
scikit-learn==1.5.0
Werkzeug==3.1.3`}
          </pre>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="ignite" className="py-32 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_60%)]"></div>

      <div className="text-center space-y-10 max-w-2xl relative z-10">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight">
          ready to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            Ignite?
          </span>
        </h2>
        <p className="text-slate-400 font-light font-mono text-sm">Bypass the analog limits. Enter the SiliminPro ecosystem.</p>

        <div className="relative group p-1 inline-block mt-8">
          <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-20 group-hover:opacity-60 group-hover:bg-cyan-400 transition-all duration-500 rounded-lg"></div>

          <a href="https://siliminpro.fly.dev" target="_blank" className="relative block w-full md:w-[350px] py-5 bg-slate-950 border border-cyan-500/50 rounded-lg overflow-hidden transition-all active:scale-[0.98] flex items-center justify-center group no-underline shadow-[inset_0_0_20px_rgba(6,182,212,0.1)] hover:border-cyan-400">
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(6,182,212,0.1)_50%)] bg-[length:100%_4px] opacity-50 group-hover:opacity-100"></div>

            <span className="text-cyan-400 text-sm font-mono font-bold uppercase tracking-[0.3em] relative z-10 flex items-center gap-3 group-hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
              [ EXECUTE_CALC ] <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </a>
        </div>

        <div className="pt-8 text-[10px] font-mono uppercase tracking-[0.4em] text-slate-600 flex items-center justify-center gap-3">
          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_5px_#22d3ee]"></span>
          API Connection Ready // Waiting for Signal
        </div>
      </div>
    </section>
  );
}