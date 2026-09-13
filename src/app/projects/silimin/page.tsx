"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Settings, Zap, Thermometer, Activity, Cpu, StepForward } from 'lucide-react';
import Viewer from '@/components/viewer';

// --- CUSTOM CURSOR (CROSSHAIR) ---
const CustomCursor = ({ isSpecArea }: { isSpecArea: boolean }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:flex items-center justify-center mix-blend-difference"
            animate={{
                x: mousePos.x - 20,
                y: mousePos.y - 20,
                scale: isSpecArea ? 1.5 : 1
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
        >
            <div className={`w-10 h-10 border ${isSpecArea ? 'border-red-500/80' : 'border-white/30'} rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm`}>
                <div className={`w-1 h-1 ${isSpecArea ? 'bg-red-500' : 'bg-white/70'} rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]`}></div>
                <div className={`absolute w-full h-px ${isSpecArea ? 'bg-red-500/80' : 'bg-white/20'}`}></div>
                <div className={`absolute h-full w-px ${isSpecArea ? 'bg-red-500/80' : 'bg-white/20'}`}></div>
            </div>
        </motion.div>
    );
};

// --- MAIN PAGE COMPONENT ---
export default function SiliminProject() {
    const [isSpecArea, setIsSpecArea] = useState(false);
    const { scrollYProgress } = useScroll();

    // Parallax for background
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const specs = [
        { label: "Engine Type", stock: "SOHC, 2-Valve, Air Cooled", silimin: "SOHC, 4-Valve, VVA, Liquid Cooled", delta: "MASSIVE UPGRADE" },
        { label: "Displacement", stock: "124.8 cc", silimin: "177.22 cc", delta: "+29.58%" },
        { label: "Power Output", stock: "~9.9 HP @ 7500 RPM", silimin: "~19.0 HP @ 10000 RPM", delta: "+102.02%" },
        { label: "Transmission", stock: "4-Speed Rotary", silimin: "6-Speed w/ Assist & Slipper", delta: "TRACK READY" },
        { label: "Cooling System", stock: "Natural Air", silimin: "Radiator Liquid Cooled", delta: "THERMAL EFFICIENCY" },
    ];

    return (
        <div className="text-zinc-300 min-h-screen font-sans selection:bg-red-500/30 selection:text-white overflow-x-hidden relative">
            <CustomCursor isSpecArea={isSpecArea} />

            {/* --- GLASSMORPHISM DYNAMIC BACKGROUND --- */}
            <div className="fixed inset-0 z-[-1] bg-[#050505] overflow-hidden pointer-events-none">
                {/* Glowing Orbs for Refraction */}
                <motion.div 
                    style={{ y: bgY }}
                    className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-red-600/20 blur-[150px] rounded-full mix-blend-screen"
                />
                <motion.div 
                    style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
                    className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-red-900/30 blur-[130px] rounded-full mix-blend-screen"
                />
                <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-zinc-600/10 blur-[100px] rounded-full mix-blend-screen"></div>
                
                {/* Blueprint Grid Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            {/* HERO HEADER: "The Reanimation" */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[8vw] lg:text-[10vw] font-black leading-none tracking-tighter uppercase italic mb-8 text-white drop-shadow-2xl"
                        ><br />— <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 drop-shadow-[0_0_25px_rgba(220,38,38,0.5)]">SILIMIN </span>;
                        </motion.h1>

                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-6 mb-12 max-w-3xl">
                            <p className="text-lg md:text-xl text-zinc-300 font-medium leading-relaxed">
                                "A Frankenstein of engineering. Supra X 125 FI chassis re-engineered to house the high-revving Yamaha R15 V3 VVA heart."
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white/20 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all duration-300">
                                [ ACCESS SCHEMATICS ]
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECHNICAL PHILOSOPHY */}
            <section className="py-40 relative">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-10 md:p-16 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                        {/* Glass reflection highlight */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        
                        <div className="space-y-8 relative z-10">
                            <div className="flex items-center gap-4 text-red-400">
                                <Settings className="w-6 h-6 animate-spin-slow" />
                                <span className="font-mono text-xs uppercase tracking-[0.5em]">Reflection</span>
                            </div>
                            <h2 className="text-4xl text-white md:text-5xl font-black uppercase tracking-tighter leading-none italic">
                                Not Only <br /> <span className="text-red-500">Swap Engine.</span>
                            </h2>
                            <div className="pl-8 border-l-4 border-red-500/50 bg-white/5 backdrop-blur-sm p-6 rounded-r-xl border-y border-r border-white/5 shadow-inner">
                                <p className="text-xl text-zinc-300 leading-relaxed italic">
                                    "The Supra X 125 FI underbone frame is designed for low torque loads. Installing an R15 V3 VVA engine with instant power surges from VVA technology risks causing chassis twist."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPARATIVE SPECIFICATIONS */}
            <section
                onMouseEnter={() => setIsSpecArea(true)}
                onMouseLeave={() => setIsSpecArea(false)}
                className="py-40 relative"
            >
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="mb-16 space-y-4">
                        <h3 className="text-[10px] font-mono uppercase tracking-[0.5em] text-red-400">// SCANNING PERFORMANCE...</h3>
                        <h2 className="text-5xl font-black text-white uppercase italic tracking-tighter">TECHNICAL COMPARISON</h2>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] rounded-3xl p-8 overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-6 text-left font-mono text-xs text-white/50 uppercase">Specification</th>
                                    <th className="py-6 text-left font-mono text-xs text-white/50 uppercase">Stock (Supra X)</th>
                                    <th className="py-6 text-left font-mono text-xs text-red-400 uppercase">Silimin (R15 V3)</th>
                                    <th className="py-6 text-right font-mono text-xs text-red-500 uppercase">Delta Δ</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {specs.map((spec, i) => (
                                    <motion.tr
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group hover:bg-white/5 transition-colors duration-300 rounded-lg"
                                    >
                                        <td className="py-6 font-black text-white uppercase text-sm tracking-tight px-4 rounded-l-lg group-hover:text-red-400 transition-colors">{spec.label}</td>
                                        <td className="py-6 text-zinc-400 text-sm px-4">{spec.stock}</td>
                                        <td className="py-6 text-red-400 font-bold text-sm px-4">{spec.silimin}</td>
                                        <td className="py-6 text-right font-mono font-bold text-red-500 text-sm px-4 rounded-r-lg">{spec.delta}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* LOG ANALYSIS */}
            <section className="py-40 relative">
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="mb-20">
                        <h3 className="text-red-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">The Analysis Log</h3>
                        <h2 className="text-5xl text-white font-black uppercase italic tracking-tighter">ENGINEERING CHALLENGES <br /> & STRUCTURAL ANALYSIS</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-transparent mt-8 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
                        {[
                            { title: "Structural Reinforcement & Torque Reaction", desc: "The Supra X 125 underbone chassis was designed for low-torque loads. Installing the R15 V3 VVA engine posed a significant risk of chassis twist.", sol: "Integrated sub-frame reinforcement at critical junctions and re-engineered the engine mounting using high-carbon steel plates." },
                            { title: "Precision Drive-Line Alignment", desc: "A mere 1mm deviation in sprocket alignment results in power transmission failure and severe chain-snap risk at high RPM.", sol: "Employed laser alignment methods to determine the axis between the R15 output shaft and the rear sprocket." },
                            { title: "Thermal Dissipation Space", desc: "The liquid-cooled R15 engine requires constant airflow to the radiator, while the Supra fairing is notoriously narrow and restricted.", sol: "Custom-mounted the radiator within the inner fender area with optimized coolant routing." },
                            { title: "Electrical Architecture & VVA", desc: "Integrating the complex Yamaha R15 V3 wiring harness into the minimalist Honda Supra electrical system.", sol: "Executed system integration at the ECU level, ensuring VVA engages at 7,400 RPM without interference." }
                        ].map((point, idx) => (
                            <div key={idx} className="bg-white/[0.03] backdrop-blur-lg border border-white/10 hover:border-white/20 hover:bg-white/[0.05] shadow-xl rounded-2xl p-8 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-10 w-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                        <span className="text-red-400 font-bold">0{idx + 1}</span>
                                    </div>
                                    <h4 className="text-lg font-bold uppercase text-white">{point.title}</h4>
                                </div>
                                <div className="space-y-4 text-xs text-zinc-400 leading-relaxed">
                                    <p>{point.desc}</p>
                                    <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 mt-4 backdrop-blur-sm">
                                        <span className="text-red-400 font-bold block mb-1">[SOLUTION]:</span> 
                                        <span className="text-zinc-300">{point.sol}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Engineer's Note */}
                    <div className="mt-24 p-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl relative group overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700">
                            <Cpu className="w-24 h-24 text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
                        </div>
                        <h5 className="font-mono text-red-400 text-[10px] uppercase tracking-widest mb-6 bg-white/10 inline-block px-3 py-1 rounded-full border border-white/10">// Note</h5>
                        <p className="text-2xl md:text-3xl font-black italic text-white tracking-tight leading-tight uppercase relative z-10 drop-shadow-md">
                            "In this project, I am the god of small things. Every bolt torque, every wiring solder, and every weld bead determines whether this machine becomes a masterpiece or a disaster. I chose the former."
                        </p>
                    </div>
                </div>
            </section>

            {/* DYNO ROOM SECTION */}
            <section className="py-40 relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-white/5 backdrop-blur-2xl border border-white/10 p-10 md:p-16 rounded-[2.5rem] shadow-2xl">
                        <div className="space-y-12">
                            <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">THE <br /> DYNO ROOM.</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-lg hover:bg-white/10 transition-colors">
                                    <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest">Est Top Speed</span>
                                    <div className="text-4xl font-black text-white italic mt-2 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">146+ KM/H</div>
                                </div>
                                <div className="p-8 bg-red-950/20 border border-red-500/20 rounded-2xl backdrop-blur-md shadow-lg hover:bg-red-950/30 transition-colors">
                                    <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest">Total Weight</span>
                                    <div className="text-4xl font-black text-red-400 italic mt-2 tracking-tighter drop-shadow-[0_0_15px_rgba(220,38,38,0.4)]">103 KG</div>
                                </div>
                            </div>

                            <div className="relative group aspect-video bg-black/40 border border-white/10 rounded-2xl overflow-hidden shadow-inner">
                                <div className="absolute inset-0">
                                    <Viewer modelPath="/mounting.glb" />
                                </div>
                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 text-[10px] font-mono uppercase tracking-[0.3em] text-white">
                                    Interactive 3D Preview
                                </div>
                                <div className="absolute top-6 left-6 p-3 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl">
                                    <span className="text-[8px] font-mono text-red-400">REF: REINFORCED SUBFRAME A1</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-white/50 font-mono text-xs uppercase tracking-[0.3em] bg-white/5 inline-block px-3 py-1 rounded-full border border-white/10">// Performance Logs</p>
                            <ul className="space-y-4">
                                {[
                                    "Massive Torque increase on low to mid range.",
                                    "Seamless VVA transition at 7,400 RPM.",
                                    "Slipper clutch prevents rear wheel hop on downshifts.",
                                    "Power-to-weight ratio surpassing stock 150cc motorcycles."
                                ].map((log, i) => (
                                    <li key={i} className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-red-500/40 hover:bg-white/10 transition-all shadow-md">
                                        <div className="bg-white/10 p-2 rounded-full mt-[-2px]">
                                            <StepForward className="w-3 h-3 text-red-400" />
                                        </div>
                                        <span className="text-sm font-medium text-zinc-200">{log}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* TROUBLESHOOT PHASE */}
            <section className="py-40">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h3 className="text-red-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Challenge Logbook</h3>
                        <h2 className="text-5xl font-black text-white uppercase italic tracking-tighter">TROUBLESHOOT PHASE</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { Icon: Zap, title: "Electrical Mapping", desc: "Integrasi ECU dan sensor-sensor vital agar dashboard tetap informatif." },
                            { Icon: Activity, title: "Structural Mod", desc: "Proses pemotongan dan penguatan rangka agar tidak twist saat menerima torsi VVA." },
                            { Icon: Thermometer, title: "Thermal Mngmt", desc: "Custom piping untuk jalur liquid coolant di ruang fairing yang sempit." }
                        ].map((item, i) => (
                            <div key={i} className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-red-500/30 transition-all duration-300 shadow-xl group">
                                <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <item.Icon className="w-8 h-8 text-red-400" />
                                </div>
                                <h4 className="text-xl font-black text-white uppercase mb-4">{item.title}</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FOOTER SECTION */}
            <section className="py-32 relative border-t border-white/10 bg-white/[0.02] backdrop-blur-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                        <div className="space-y-6 max-w-xl">
                            <h2 className="text-[12vw] md:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.8] drop-shadow-lg">
                                OPTIMIZED <br /> FOR <br /> <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.6)]">WILD.</span>
                            </h2>
                            <p className="text-xl text-zinc-400 font-bold uppercase italic tracking-widest bg-white/5 inline-block px-4 py-2 rounded-xl border border-white/10">
                                "Built by an Engineer. Self Tested."
                            </p>
                        </div>

                        <div className="relative group w-full md:w-[400px] aspect-[4/5] bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <div className="absolute inset-0 flex items-center justify-center text-xs font-mono uppercase tracking-widest text-zinc-500">
                                <img src="/muhammad_zhifrantino.webp" alt="Silimin The Engineer" 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 [@media(any-hover:hover)]:grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" fetchPriority='high'
                                />
                            </div>
                            {/* Glassmorphic overlay card at the bottom */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl transition-all duration-300 group-hover:bg-red-950/60 group-hover:border-red-500/50">
                                <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest block mb-2">Subject 01</span>
                                <span className="text-2xl font-black text-white uppercase italic drop-shadow-md">The Builder</span>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        </div>
    );
}