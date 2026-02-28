"use client";

import React, { useState, useEffect } from 'react';
import ReservoirPart from "@/assets/certs/reservoir-oil-gas-workshop-participant.png";
import ReservoirCompletion from "@/assets/certs/reservoir-oil-gas-workshop.png";
import ksk from "@/assets/certs/ksk-mataf-2024.png";
import perkap from "@/assets/certs/perkap-makrab-2025.png";
import lsp from "@/assets/certs/LSP-P1-tino.jpeg";

// Data
const certificates = [
    { id: 1, title: "KKNI 2 Certificate Competency of Maintenance Vehicle Injection System and Chassis System", issuer: "LSP SMK DP1 Jakarta", category: "Skill", image: lsp },
    { id: 2, title: "Completion Final Project at Workshop 'Fundamental Reservoir in Oil & Gas Field'", issuer: "For Engineer ID", category: "Skill", image: ReservoirCompletion },
    { id: 3, title: "Participant at Workshop 'Fundamental Reservoir in Oil & Gas Field'", issuer: "For Engineer ID", category: "Achievement", image: ReservoirPart },
    { id: 4, title: "Secretarial Staff at 'MATAF PRODI UMY 2024'", issuer: "HMM UMY 2023/ 2024", category: "Organization", image: ksk },
    { id: 5, title: "Equipment Division Staff at 'Refreshing & Spritual Building 2025'", issuer: "HMM UMY 2024/ 2025", category: "Organization", image: perkap },
];

const categories = ["All", "Skill", "Organization", "Achievement"];

export default function GalleryPage() {
    const [activeTab, setActiveTab] = useState("All");
    const [mounted, setMounted] = useState(false);
    // State untuk menyimpan gambar yang lagi dibuka
    const [selectedImg, setSelectedImg] = useState<any>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Mencegah scroll saat modal terbuka
    useEffect(() => {
        if (selectedImg) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedImg]);

    if (!mounted) return null;

    const filteredCerts = activeTab === "All"
        ? certificates
        : certificates.filter(cert => cert.category === activeTab);

    return (
        <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-300 pt-32 pb-20 px-[5vw] font-medium transition-colors duration-300">

            {/* --- HEADER SECTION --- */}
            <header className="mb-12 border-l-4 border-emerald-600 dark:border-emerald-400 pl-6">
                <h1 className="text-4xl md:text-6xl font-black text-black dark:text-white uppercase tracking-tighter italic">
                    CERTIFIED <span className="text-zinc-400 dark:text-zinc-700 transition-colors">RECORDS.</span>
                </h1>
                <p className="text-[17px] font-sans opacity-60 mt-5 max-w-xl tracking-wide leading-relaxed">
                    A curated collection of professional certifications and organizational milestones across engineering and digital disciplines.
                </p>
            </header>

            {/* --- FILTER TABS --- */}
            <div className="flex flex-wrap gap-2 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`px-5 py-2 text-[10px] font-black tracking-widest transition-all duration-300 border rounded-sm ${activeTab === cat
                                ? "bg-emerald-600 dark:bg-emerald-500 text-white dark:text-black border-emerald-600 dark:border-emerald-500"
                                : "border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:border-emerald-500 dark:hover:text-white"
                            }`}
                    >
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* --- GALLERY GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredCerts.map((cert) => (
                    <div
                        key={cert.id}
                        onClick={() => setSelectedImg(cert.image)}
                        className="group relative border border-zinc-100 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950/50 p-4 transition-all duration-500 hover:border-emerald-500/30 cursor-pointer"
                    >
                        <div className="aspect-auto overflow-hidden bg-zinc-200 dark:bg-zinc-900 relative border border-zinc-200 dark:border-zinc-800">
                            <img
                                src={typeof cert.image === 'string' ? cert.image : (cert.image as any).src}
                                alt={cert.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                            />
                            {/* Overlay hover hint */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-[10px] font-black text-white tracking-[0.3em] uppercase bg-black/60 px-4 py-2">View Full Image</span>
                            </div>
                        </div>

                        <div className="mt-5 space-y-2">
                            <span className="text-[12px] text-emerald-600 dark:text-emerald-500 font-black uppercase tracking-widest">
                                {cert.category}
                            </span>
                            <h3 className="text-xl font-black text-black dark:text-white leading-none italic tracking-tighter">
                                {cert.title}
                            </h3>
                            <p className="text-[16px] text-zinc-500 font-medium">{cert.issuer}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* LIGHTBOX */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md overflow-y-auto flex justify-center p-4 md:p-12 cursor-zoom-out"
                    onClick={() => setSelectedImg(null)}
                >
                    <button
                        onClick={() => setSelectedImg(null)}
                        className="fixed top-6 right-10 text-white/40 hover:text-white transition-colors z-[1010] p-2 hover:bg-white/10 rounded-full"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative max-w-4xl w-full h-fit flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={typeof selectedImg === 'string' ? selectedImg : selectedImg.src}
                            alt="Certificate Full"
                            className="w-full h-auto shadow-2xl animate-in zoom-in-95 duration-500 cursor-default rounded-sm"
                        />

                        <div className="mt-8 mb-4 text-center">
                            <p className="text-zinc-500 text-[10px] font-black tracking-[0.4em] uppercase italic">
                                Click anywhere to close.
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}