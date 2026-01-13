"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Settings, Zap, Thermometer, ShieldAlert, ChevronRight, Activity, Cpu } from 'lucide-react';
import Image from 'next/image';

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
            className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:flex items-center justify-center"
            animate={{
                x: mousePos.x - 20,
                y: mousePos.y - 20,
                scale: isSpecArea ? 1.5 : 1
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
        >
            <div className={`w-10 h-10 border ${isSpecArea ? 'border-red-600 ring-2 ring-red-600/40' : 'border-red-500/30'} rounded-full flex items-center justify-center transition-colors duration-300`}>
                <div className={`w-1 h-1 ${isSpecArea ? 'bg-red-600' : 'bg-red-500'} rounded-full`}></div>
                {/* Crosshair Lines */}
                <div className={`absolute w-full h-[1px] ${isSpecArea ? 'bg-red-600' : 'bg-red-500/30'}`}></div>
                <div className={`absolute h-full w-[1px] ${isSpecArea ? 'bg-red-600' : 'bg-red-500/30'}`}></div>
            </div>
        </motion.div>
    );
};

// --- MAIN PAGE COMPONENT ---
export default function SiliminProject() {
    const [isSpecArea, setIsSpecArea] = useState(false);
    const { scrollYProgress } = useScroll();

    // Parallax for blueprint background
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const specs = [
        { label: "Engine Type", stock: "SOHC, 2-Valve, Air Cooled", silimin: "SOHC, 4-Valve, VVA, Liquid Cooled", delta: "MASSIVE UPGRADE" },
        { label: "Displacement", stock: "124.8 cc", silimin: "155.1 cc", delta: "+24.3%" },
        { label: "Power Output", stock: "~9.9 HP @ 7500 RPM", silimin: "~19.0 HP @ 10000 RPM", delta: "+91.9%" },
        { label: "Transmission", stock: "4-Speed Rotary", silimin: "6-Speed w/ Assist & Slipper", delta: "TRACK READY" },
        { label: "Cooling System", stock: "Natural Air", silimin: "Radiator Liquid Cooled", delta: "PRECISION THERMAL" },
    ];

    return (
        <div className="text-zinc-600 dark:text-zinc-200 min-h-screen font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
            <CustomCursor isSpecArea={isSpecArea} />

            {/* HERO HEADER: "The Reanimation" */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                {/* Blueprint Background (Updated to Red) */}
                <motion.div
                    style={{ y: bgY }}
                    className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#991b1b44_1px,transparent_1px),linear-gradient(to_bottom,#991b1b44_1px,transparent_1px)] bg-[size:50px_50px]"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-transparent to-[#02040a]"></div>
                </motion.div>

                {/* CAD Overlay Graphics */}
                <div className="absolute inset-0 pointer-events-none font-mono text-[8px] text-red-500/40 p-10 uppercase tracking-widest hidden md:block">
                    <div className="absolute bottom-10 left-10 max-w-xs">
                        [SYS LOG] INITIALIZING SWAP CORE... <br />
                        [SYS LOG] CHASSIS INTEGRITY CHECK: 98.2% <br />
                        [SYS LOG] VVA MAPPING: ACTIVE
                    </div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[8vw] lg:text-[10vw] font-black leading-none tracking-tighter uppercase italic mb-8"
                        >
                            PROJECT <br /> <span className="text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">SILIMIN:</span> TYPE-01
                        </motion.h1>

                        <p className="max-w-3xl text-lg md:text-xl text-zinc-400 font-medium leading-relaxed mb-12">
                            "A Frankenstein of engineering. Supra X 125 FI chassis re-engineered to house the high-revving Yamaha R15 V3 VVA heart."
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-red-600 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-red-600/40">
                                [ ACCESS SCHEMATICS ]
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECHNICAL PHILOSOPHY */}
            <section className="py-40 bg-zinc-950/45 border-y border-zinc-900">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 text-red-500">
                            <Settings className="w-6 h-6 animate-spin-slow" />
                            <span className="font-mono text-xs uppercase tracking-[0.5em]">Reflection</span>
                        </div>
                        <h2 className="text-4xl text-zinc-300 md:text-5xl font-black uppercase tracking-tighter leading-none italic">
                            Not Only <br /> <span className="text-red-600">Swap Engine.</span>
                        </h2>
                        <p className="text-xl text-zinc-800 dark:text-zinc-300 leading-relaxed italic border-l-4 border-red-600 pl-8">
                            "The Supra X 125 FI underbone frame is designed for low torque loads. Installing an R15 V3 VVA engine with instant power surges from VVA technology risks causing chassis twist."
                        </p>
                    </div>
                </div>
            </section>

            {/* COMPARATIVE SPECIFICATIONS */}
            <section
                onMouseEnter={() => setIsSpecArea(true)}
                onMouseLeave={() => setIsSpecArea(false)}
                className="py-40 relative overflow-hidden"
            >
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="mb-20 space-y-4">
                        <h3 className="text-[10px] font-mono uppercase tracking-[0.5em] text-red-600">// SCANNING PERFORMANCE...</h3>
                        <h2 className="text-5xl font-black uppercase italic tracking-tighter">TECHNICAL COMPARISON</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b-2 border-zinc-800">
                                    <th className="py-6 text-left font-mono text-xs text-zinc-500 dark:text-zinc-400 uppercase">Specification</th>
                                    <th className="py-6 text-left font-mono text-xs text-zinc-500 dark:text-zinc-400 uppercase">Stock (Supra X)</th>
                                    <th className="py-6 text-left font-mono text-xs text-red-500 uppercase">Silimin (R15 V3)</th>
                                    <th className="py-6 text-right font-mono text-xs text-red-600 uppercase">Delta Δ</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-900">
                                {specs.map((spec, i) => (
                                    <motion.tr
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group hover:bg-red-950/10 transition-colors"
                                    >
                                        <td className="py-8 font-black uppercase text-sm tracking-tight">{spec.label}</td>
                                        <td className="py-8 text-zinc-500 dark:text-zinc-400 text-sm">{spec.stock}</td>
                                        <td className="py-8 text-red-500 font-bold text-sm">{spec.silimin}</td>
                                        <td className="py-8 text-right font-mono font-bold text-red-600 text-sm">{spec.delta}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* LOG ANALYSIS */}
            <section className="py-40 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
                        alt="Technical Background"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>

                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="mb-24">
                        <h3 className="text-red-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">The Analysis Log</h3>
                        <h2 className="text-5xl font-black uppercase italic tracking-tighter">ENGINEERING CHALLENGES <br /> & STRUCTURAL ANALYSIS</h2>
                        <div className="h-1 w-24 bg-red-600 mt-8"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 font-mono">
                        {[
                            { title: "Structural Reinforcement & Torque Reaction", desc: "The Supra X 125 underbone chassis was designed for low-torque loads (±9 Nm). Installing the R15 V3 VVA engine (±14.7 Nm) with instant power surges posed a significant risk of chassis twist.", sol: "Integrated sub-frame reinforcement at critical junctions and re-engineered the engine mounting using high-carbon steel plates." },
                            { title: "Precision Drive-Line Alignment", desc: "A mere 1mm deviation in sprocket alignment results in power transmission failure and severe chain-snap risk at high RPM.", sol: "Employed laser alignment methods to determine the axis between the R15 output shaft and the rear sprocket." },
                            { title: "Thermal Dissipation in Constricted Space", desc: "The liquid-cooled R15 engine requires constant airflow to the radiator, while the Supra fairing is notoriously narrow and restricted.", sol: "Custom-mounted the radiator within the inner fender area with optimized coolant routing." },
                            { title: "Electrical Architecture & VVA Mapping", desc: "Integrating the complex Yamaha R15 V3 wiring harness into the minimalist Honda Supra electrical system.", sol: "Executed system integration at the ECU level, ensuring VVA engages at 7,400 RPM without interference." }
                        ].map((point, idx) => (
                            <div key={idx} className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                                        <span className="text-red-500 font-bold">0{idx + 1}</span>
                                    </div>
                                    <h4 className="text-lg font-bold uppercase text-zinc-800 dark:text-zinc-50">{point.title}</h4>
                                </div>
                                <div className="space-y-4 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed pl-14 border-l border-red-900/50">
                                    <p>{point.desc}</p>
                                    <p className="text-red-500">
                                        <span className="font-bold">[SOLUTION]:</span> {point.sol}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Engineer's Note */}
                    <div className="mt-32 p-12 bg-zinc-950/30 border border-zinc-800 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                            <Cpu className="w-12 h-12 text-red-600" />
                        </div>
                        <h5 className="font-mono text-red-500 text-[10px] uppercase tracking-widest mb-6">// Engineer Note</h5>
                        <p className="text-2xl md:text-3xl font-black italic text-white tracking-tight leading-tight uppercase">
                            "In this project, I am the god of small things. Every bolt torque, every wiring solder, and every weld bead determines whether this machine becomes a masterpiece or a disaster. I chose the former."
                        </p>
                    </div>
                </div>
            </section>

            {/* DYNO ROOM SECTION */}
            <section className="py-40 relative overflow-hidden">
                {/* Dyno Graph Background (Updated to Red) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 1000 400">
                        <path d="M0,400 Q200,350 400,200 T800,50" fill="none" stroke="white" strokeWidth="2" strokeDasharray="10,5" />
                        <path d="M0,400 Q150,380 300,300 T900,100" fill="none" stroke="#dc2626" strokeWidth="3" />
                        <line x1="600" y1="0" x2="600" y2="400" stroke="#ef4444" strokeWidth="1" strokeDasharray="5,5" />
                    </svg>
                    <div className="absolute top-[25%] left-[61%] text-[8px] font-mono text-red-600 uppercase">VVA Engagement Point</div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-none">THE <br /> DYNO ROOM.</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="p-8 bg-black/50 border border-zinc-800 backdrop-blur-sm">
                                    <span className="text-[10px] font-mono text-red-700 uppercase tracking-widest">Est Top Speed</span>
                                    <div className="text-4xl font-black text-white italic mt-2 tracking-tighter">146+ KM/H</div>
                                </div>
                                <div className="p-8 bg-black/50 border border-red-900/30 backdrop-blur-sm">
                                    <span className="text-[10px] font-mono text-zinc-50 dark:text-zinc-500 uppercase tracking-widest">Total Weight</span>
                                    <div className="text-4xl font-black text-red-500 italic mt-2 tracking-tighter">103 KG</div>
                                </div>
                            </div>

                            <div className="relative group aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center opacity-40 text-xs font-mono uppercase tracking-widest">
                                    [ Engine Mount Schematics ]
                                </div>
                                <div className="absolute top-10 left-10 p-2 border-l border-t border-red-500">
                                    <span className="text-[8px] font-mono text-red-500">REF: REINFORCED SUBFRAME A1</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">// Performance Logs</p>
                            <ul className="space-y-4">
                                {[
                                    "Massive Torque increase on low to mid range.",
                                    "Seamless VVA transition at 7,400 RPM.",
                                    "Slipper clutch prevents rear wheel hop on downshifts.",
                                    "Power-to-weight ratio surpassing stock 150cc motorcycles."
                                ].map((log, i) => (
                                    <li key={i} className="flex items-start gap-4 p-4 bg-zinc-900/30 border border-zinc-800 hover:border-red-600/50 transition-all">
                                        <ChevronRight className="w-4 h-4 text-red-600 mt-1" />
                                        <span className="text-sm font-medium">{log}</span>
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
                        <h3 className="text-red-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Challenge Logbook</h3>
                        <h2 className="text-5xl font-black uppercase italic tracking-tighter">TROUBLESHOOT PHASE</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { Icon: Zap, title: "Electrical Mapping", desc: "Integrasi ECU dan sensor-sensor vital agar dashboard tetap informatif." },
                            { Icon: Activity, title: "Structural Modification", desc: "Proses pemotongan dan penguatan rangka agar tidak twist saat menerima torsi VVA." },
                            { Icon: Thermometer, title: "Thermal Management", desc: "Custom piping untuk jalur liquid coolant di ruang fairing yang sempit." }
                        ].map((item, i) => (
                            <div key={i} className="p-10 border border-zinc-900 hover:border-red-600 transition-colors group">
                                <item.Icon className="w-10 h-10 text-red-600 mb-8" />
                                <h4 className="text-xl font-black uppercase mb-4">{item.title}</h4>
                                <p className="text-zinc-700 dark:text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FOOTER SECTION */}
            <section className="py-32 border-t border-zinc-900">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="space-y-6 max-w-xl">
                            <h2 className="text-[12vw] md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8]">
                                OPTIMIZED <br /> FOR <br /> <span className="text-red-600 [text-shadow:0_0_30px_rgba(220,38,38,0.5)]">WILD.</span>
                            </h2>
                            <p className="text-xl text-zinc-500 font-bold uppercase italic tracking-widest">
                                "Built by an Engineer. Self Tested."
                            </p>
                        </div>

                        <div className="relative group w-full md:w-[400px] aspect-[4/5] bg-zinc-900 border border-zinc-800 hover:grayscale-0 transition-all duration-700">
                            <div className="absolute inset-0 flex items-center justify-center text-xs font-mono uppercase tracking-widest text-zinc-700">
                                <img src="/muhammad_zhifrantino.webp" alt="Silimin The Engineer" 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 [@media(any-hover:hover)]:grayscale group-hover:grayscale-0" 
                                />
                            </div>
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-red-600 text-white shadow-[0_10px_30px_rgba(220,38,38,0.4)]">
                                <span className="text-[10px] font-mono uppercase tracking-widest block mb-2">Subject 01</span>
                                <span className="text-2xl font-black uppercase italic">The Engineer</span>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        </div>
    );
}