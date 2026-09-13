import { siteConfig } from "@/constants/metadata";
import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  const codeSkills = ["Next.js", "React", "TypeScript", "Flask", "Tailwind CSS"];
  const engineeringSkills = ["SolidWorks", "Engine Dynamics", "ECU Calibration", "Fabrication"];
  const otherSkills = ["System Architecture", "Branding", "UI/UX Layout"];

  return (
    <section id="about" className="relative py-28 border-t border-zinc-300 dark:border-zinc-800 bg-transparent text-zinc-900 dark:text-zinc-100 select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* SECTION TELEMETRY HEADER */}
        <div className="flex items-center justify-between border-b border-zinc-300 dark:border-zinc-800 pb-3 mb-12 font-mono text-[11px] tracking-widest text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#ff2400]" />
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">DOSSIER // ARCHITECT_PROFILE</span>
          </div>
          <div className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">
            SEC_ID: 0x02_ABOUT
          </div>
        </div>

        {/* BENTO ARCHITECTURE WRAPPER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3">

          {/* CELL 1: STATEMENT / CORE BIO (Col 8) */}
          <div className="md:col-span-8 border border-zinc-300 dark:border-zinc-800 p-6 md:p-10 relative flex flex-col justify-between group">
            <span className="absolute top-2 left-2 font-mono text-[10px] text-zinc-400 dark:text-zinc-600">+</span>
            <span className="absolute top-2 right-2 font-mono text-[10px] text-zinc-400 dark:text-zinc-600">+</span>
            <span className="absolute bottom-2 left-2 font-mono text-[10px] text-zinc-400 dark:text-zinc-600">+</span>
            <span className="absolute bottom-2 right-2 font-mono text-[10px] text-zinc-400 dark:text-zinc-600">+</span>

            <div>
              <div className="inline-flex items-center gap-2 px-2 py-0.5 mb-6 border border-zinc-300 dark:border-zinc-800 font-mono text-[10px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                <span>IDENTITY</span>
                <span className="text-zinc-400 dark:text-zinc-600">|</span>
                <span className="text-[#ff2400] font-semibold">ORIGIN</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-zinc-950 dark:text-white mb-6">
                MUHAMMAD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-zinc-500 to-zinc-400 dark:from-zinc-100 dark:via-zinc-400 dark:to-zinc-600">
                  ZHIFRANTINO
                </span>
              </h2>

              <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
                A continuous experiment between <span className="text-zinc-950 dark:text-white font-bold">Digital Systems</span> and <span className="text-zinc-950 dark:text-white font-bold">Mechanical Precision</span>. Focused on deterministic architecture, high-efficiency computation, and heavy-duty engineering solutions.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                “I cut the weight of connection that led myself astray.”
              </span>
              <span >
                <a
                href="https://open.spotify.com/track/2calJdlU1JseiOf7c5jXwP"
                target="_blank"
                rel="noreferrer"
                className="text-[9px] font-mono tracking-widest text-[#ff2400] uppercase"
              >
                REF: LoG // OMENS
              </a>
              </span>
            </div>
          </div>

          {/* CELL 2: CORE METRIC / PHILOSOPHY (Col 4) */}
          <div className="md:col-span-4 border border-zinc-300 dark:border-zinc-800 p-6 flex flex-col justify-between font-mono">
            <div>
              <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800/80 pb-2 mb-4 text-[10px] tracking-wider text-zinc-500 dark:text-zinc-400">
                <span>SYSTEM_AXIOM</span>
                <span className="text-[#ff2400] font-bold">02_MIND</span>
              </div>

              <div className="space-y-4 text-xs text-zinc-600 dark:text-zinc-400">
                <p className="text-zinc-900 dark:text-zinc-200 font-bold text-sm uppercase leading-tight">
                  Deterministic Step Execution
                </p>
                <p className="leading-relaxed">
                  Every problem broken down into calculated tolerances. Software interfaces built with the resilience of mechanical torque.
                </p>
              </div>
            </div>

            <div className="mt-8 p-3 border border-zinc-300 dark:border-zinc-800 bg-zinc-100/40 dark:bg-zinc-900/30 text-[10px] text-zinc-500 dark:text-zinc-400">
              STATE: DISCIPLINE_OVER_DRIFT
            </div>
          </div>

          {/* CELL 3: THREE PILLARS (Col 12 - 3 sub-columns) */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                id: "MOD_01",
                title: "DIGITAL SYSTEMS",
                desc: "Full-stack development, distributed architecture, and data engineering. Translating physical principles into deterministic code.",
              },
              {
                id: "MOD_02",
                title: "MECHANICAL CRAFT",
                desc: "Precision engineering down to tight tolerances. From CAD modelling in SolidWorks to engine swaps and ECU mapping.",
              },
              {
                id: "MOD_03",
                title: "RIGOR & DISCIPLINE",
                desc: "High physical output and calisthenics training to maintain raw mental endurance and structured problem-solving under stress.",
              },
            ].map((pillar) => (
              <div
                key={pillar.id}
                className="group relative border border-zinc-300 dark:border-zinc-800 p-6 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800/80 pb-2 mb-4 font-mono text-[10px] text-zinc-400 dark:text-zinc-600">
                    <span>{pillar.id}</span>
                    <span className="group-hover:text-[#ff2400] transition-colors">[READY]</span>
                  </div>
                  <h3 className="text-base font-black tracking-tight uppercase text-zinc-950 dark:text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
                <div className="h-[2px] w-0 bg-[#ff2400] group-hover:w-full transition-all duration-500 mt-6" />
              </div>
            ))}
          </div>

          {/* CELL 4: THE ARSENAL / TECH STACK (Col 12) */}
          <div className="md:col-span-12 border border-zinc-300 dark:border-zinc-800 p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800/80 pb-3 mb-6 font-mono text-[10px] tracking-widest text-zinc-500 dark:text-zinc-400">
              <span>HARDWARE & SOFTWARE ARSENAL</span>
              <span className="text-zinc-400 dark:text-zinc-600">READY_FOR_DEPLOYMENT</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "SYS // CODE", skills: codeSkills },
                { label: "ENG // MECHANICAL", skills: engineeringSkills },
                { label: "OPS // ARCHITECTURE", skills: otherSkills },
              ].map((cat) => (
                <div key={cat.label} className="space-y-3 font-mono">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {cat.label}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 border border-zinc-300 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-300 bg-zinc-100/40 dark:bg-zinc-900/40"
                      >
                        [{skill}]
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CELL 5: CONNECTIVITY / SOCIAL TERMINAL (Col 12) */}
          <div className="md:col-span-12 border border-zinc-300 dark:border-zinc-800 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff2400] font-bold">
                COMMUNICATION // CHANNELS
              </span>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                Initiate connection for technical collaboration or deployment.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs font-bold uppercase">
              {[
                { name: "Instagram", href: siteConfig.links.instagram },
                { name: "GitHub", href: siteConfig.links.github },
                { name: "LinkedIn", href: siteConfig.links.linkedin },
                { name: "Contra", href: siteConfig.links.contra },
                { name: "Email", href: `mailto:${siteConfig.email}` },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-500 dark:hover:border-zinc-600 text-zinc-900 dark:text-zinc-100 hover:text-[#ff2400] dark:hover:text-[#ff2400] transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400 dark:text-zinc-600" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}