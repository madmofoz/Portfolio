"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import label2 from "@/assets/empire/label2.webp";
import primary from "@/assets/empire/primary.webp";

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 border border-[#8B0000] rounded-full pointer-events-none z-[9999] flex items-center justify-center hidden md:flex"
            animate={{ x: mousePos.x - 12, y: mousePos.y - 12 }}
            transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
        >
            <div className="w-1 h-1 bg-[#8B0000] rounded-full"></div>
            <div className="absolute w-[30px] h-[1px] bg-[#8B0000]/30"></div>
            <div className="absolute h-[30px] w-[1px] bg-[#8B0000]/30"></div>
        </motion.div>
    );
};

const NoiseOverlay = () => (
    <div className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.05] contrast-150 brightness-100">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
    </div>
);

// --- HALAMAN UTAMA ---

export default function App() {
    const { scrollYProgress } = useScroll();
    const bottleRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <div className="bg-[#050505] text-zinc-100 selection:bg-[#8B0000] selection:text-white min-h-screen font-sans overflow-x-hidden">
            <CustomCursor />
            <NoiseOverlay />
            <Navbar />

            <main>
                {/* 1. HERO SECTION (The Ignition) */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000]/10 to-transparent z-0"></div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="text-[15vw] lg:text-[18vw] font-serif font-black leading-none tracking-tighter uppercase mb-4 text-white drop-shadow-[0_0_30px_rgba(139,0,0,0.3)]">
                                ARAK <br /> EMPIRE*
                            </h1>
                            <p className="text-lg md:text-2xl font-light italic tracking-[0.2em] text-zinc-400 max-w-2xl mx-auto mb-12">
                                "Tradition Distilled. A high-octane spirit for the restless soul."
                            </p>
                            <button className="group relative px-12 py-5 border border-white/20 [@media(any-hover:hover)]:hover:border-[#8B0000] transition-all duration-500 overflow-hidden">
                                <span className="relative z-10 font-bold uppercase tracking-widest text-xs [@media(any-hover:hover)]:group-hover:text-white transition-colors">
                                    [ VIEW THE CRAFT ]
                                </span>
                                <div className="absolute inset-0 bg-[#8B0000] translate-y-full [@media(any-hover:hover)]:group-hover:translate-y-0 transition-transform duration-500"></div>
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        style={{ rotate: bottleRotate }}
                        className="absolute -right-20 lg:-right-40 bottom-0 opacity-15 pointer-events-none"
                    >
                        <div className="text-[40vw] font-black text-[#8B0000]">01</div>
                    </motion.div>
                </section>

                {/* 2. THE BRIEF (The Problem) */}
                <section className="py-40 border-y border-zinc-900 bg-zinc-950/50">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="flex items-center gap-6 mb-12">
                            <span className="text-[#8B0000] font-mono text-sm tracking-[0.5em]">01 // PROBLEM_SPEC</span>
                            <div className="h-px flex-1 bg-zinc-800"></div>
                        </div>
                        <p className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight italic uppercase text-zinc-300">
                            <span className="text-[#8B0000]">&gt; </span> "The arak market is often trapped in low stigma and repetitive designs. The challenge is to redefine <span className="text-[#8B0000]">Traditional Spirit</span> into a high-torque urban identity."
                        </p>
                        <div className="mt-12 text-zinc-500 font-mono text-xs uppercase tracking-widest flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-[#8B0000] animate-pulse"></div>
                            <span>Note: Visual Impact Critical</span>
                        </div>
                    </div>
                </section>

                {/* 3. VISUAL IDENTITY (The Blueprint) */}
                <section className="py-40 bg-[#050505]">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            <div className="lg:col-span-4 space-y-12">
                                <h3 className="text-6xl font-black uppercase italic tracking-tighter">THE <br /> BLUEPRINT.</h3>

                                <div className="space-y-4">
                                    <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">// Fuel Composition</h4>
                                    <div className="flex gap-4">
                                        <div className="h-20 w-16 bg-[#050505] border border-zinc-800 flex items-end p-2"><span className="text-[8px] font-mono text-zinc-500">#050505</span></div>
                                        <div className="h-20 w-16 bg-[#8B0000] flex items-end p-2"><span className="text-[8px] font-mono text-white/50">#RED...</span></div>
                                        <div className="h-20 w-16 bg-[#C0C0C0] flex items-end p-2"><span className="text-[8px] font-mono text-black/50">#F0F0F0</span></div>
                                    </div>
                                </div>

                                <div className="p-8 border border-zinc-900 bg-zinc-950">
                                    <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500 mb-6">// Under Developing...</h4>
                                    <p className="text-5xl font-black uppercase italic tracking-tighter">Under Dev . . .</p>
                                    <p className="text-sm text-zinc-500 mt-4 leading-relaxed font-mono">Under Developing...</p>
                                </div>
                            </div>

                            <div className="lg:col-span-8 grid grid-cols-2 gap-8">
                                <div className="aspect-[3/4] bg-zinc-900 group overflow-hidden relative border border-zinc-800">
                                    <div className="absolute inset-0 bg-[#8B0000]/20 mix-blend-multiply opacity-0 [@media(any-hover:hover)]:group-hover:opacity-100 transition-opacity"></div>
                                    <div className="p-10 flex flex-col justify-between h-full">
                                        <span className="text-[10px] font-mono text-zinc-500 uppercase">Primary_Label  </span>
                                        <div className="w-full h-px bg-zinc-800 [@media(any-hover:hover)]:group-hover:bg-[#8B0000] transition-colors"></div>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-10 [@media(any-hover:hover)]:group-hover:opacity-100 [@media(any-hover:hover)]:group-hover:scale-105 transition-all duration-500">
                                        <img src={primary.src} alt="Primary Image" />
                                    </div>
                                </div>
                                <div className="aspect-square bg-zinc-950 border border-zinc-800 mt-12 group overflow-hidden flex items-center justify-center relative">
                                    <div className="w-3/4 h-3/4 border-[10px] border-[#8B0000] rotate-45 [@media(any-hover:hover)]:group-hover:rotate-90 transition-transform duration-1000"></div>
                                    <div className="absolute text-[10px] font-mono uppercase tracking-widest text-zinc-700">Under_Developing...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. THE SOLUTION (The Engineering) */}
                <section className="py-40 border-t border-zinc-900 bg-[#080808]">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
                        {[
                            { title: "Dark Aesthetic", desc: "Under Developing..." },
                            { title: "Balanced", desc: "Under Developing..." },
                            { title: "High-Contrast Copy", desc: "Under Developing..." }
                        ].map((feature, i) => (
                            <div key={i} className="space-y-6 group">
                                <div className="text-[#8B0000] text-3xl font-black italic">0{i + 1}.</div>
                                <h4 className="text-2xl font-bold uppercase tracking-tight">{feature.title}</h4>
                                <p className="text-zinc-500 leading-relaxed [@media(any-hover:hover)]:group-hover:text-zinc-300 transition-colors">{feature.desc}</p>
                                <div className="h-1 w-0 bg-[#8B0000] [@media(any-hover:hover)]:group-hover:w-full transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. CONCEPT GALLERY (The Chaos) */}
                <section className="py-40 px-6">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        <div className="aspect-video bg-zinc-900 flex items-center justify-center border border-zinc-800 text-zinc-700 font-mono text-xs">[ Under Developing... ]</div>
                        <div className="aspect-square bg-zinc-900 flex flex-col items-center justify-center p-10 border border-zinc-800 text-center">
                            <span className="text-4xl font-black uppercase italic mb-4">BE BRAVE.</span>
                            <span className="text-4xl font-black uppercase italic text-[#8B0000]">BE WISE.</span>
                        </div>
                        <div className="aspect-[4/5] bg-zinc-900 flex items-center justify-center border border-zinc-800 text-zinc-700 font-mono text-xs">[ Under Developing... ]</div>
                        <div className="aspect-video bg-zinc-900 flex items-center justify-center border border-zinc-800 text-zinc-700 font-mono text-xs">[ Under Developing... ]</div>
                        {/* ITEM DENGAN TEKS DI ATAS FOTO */}
                        <div className="aspect-[3/4] bg-zinc-900 flex flex-col items-center justify-between border border-zinc-800 p-6 overflow-hidden group">
                            <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em] mb-4">
                                [ Limited Design with Times New Roman Fonts ]
                            </span>
                            <div className="flex-1 w-full flex items-center justify-center overflow-hidden grayscale [@media(any-hover:hover)]:group-hover:grayscale-0 transition-all duration-700">
                                <img
                                    src={label2.src}
                                    alt="Label Desain Terbatas"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. The Business Logic */}
                <section className="py-40 bg-black border-y border-[#8B0000]/20">
                    <div className="max-w-4xl mx-auto px-6">
                        <h3 className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#8B0000] mb-12">Performance Metrics // Profit Ratio (%)</h3>
                        <div className="flex items-end gap-2 h-64 border-l border-b border-zinc-900 p-4">
                            {[50.84, 55.93, 57.85].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    viewport={{ once: true }}
                                    className="flex-1 bg-gradient-to-t from-[#8B0000] to-[#8B0000]/20 border-x border-black"
                                ></motion.div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
                            <span>B_01</span>
                            <span>B_02</span>
                            <span>B_03</span>
                        </div>
                    </div>
                </section>
            </main>

            {/* 7. DISCLAIMER & LEGAL */}
            <div className="py-20 bg-black text-center px-6">
                <div className="max-w-xl mx-auto p-8 md:p-12 border border-zinc-900/50 bg-zinc-950/20">
                    <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#8B0000] mb-4">Top Secret Document // Legal Access Only</p>
                    <p className="text-2xl font-black italic uppercase tracking-widest text-white mb-6">21+. Drink Safely & Responsibly.</p>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase leading-relaxed">
                        Distribution restricted to authorized souls. Consumption by the brave only. Excess torque may lead to enlightenment.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}