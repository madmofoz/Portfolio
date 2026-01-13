import { siteConfig } from '@/constants/metadata';
import React from 'react';
import Image from 'next/image';

export default function About() {
  const codeSkills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Flask"];
  const engineeringSkills = ["SolidWorks", "Engine Tuning"];
  const otherSkills = ["Photoshop", "Calisthenics", "Branding"];

  return (
    <section id="about" className="py-32 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* TOP SECTION: The "Slim" Content */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">

            {/* Sticky Sidebar Header */}
            <div className="lg:col-span-3">
              <h2 className="text-4xl font-black text-black dark:text-white sticky top-32 tracking-tighter leading-none uppercase">
                ABOUT <br /> ME
              </h2>
            </div>

            {/* Main Content Body */}
            <div className="lg:col-span-9 space-y-24">

              {/* Intro Text */}
              <div className="space-y-8">
                <div className="group relative">
                  <p className="text-lg md:text-xl leading-relaxed text-zinc-500 dark:text-zinc-400">
                    I am <span className="text-black dark:text-white font-bold">Muhammad Zhifrantino</span>.
                    What will you believe?
                    <span className="block mt-2 text-[6px] font-mono uppercase tracking-[0.2em] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none italic">
                      — Ghost Shaped People. credits to Lamb of God
                    </span>
                  </p>
                </div>
                <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed tracking-tight">
                  My life is a continuous experiment between Digital <span className="text-black dark:text-white font-semibold">Logic</span> and Mechanical <span className="text-black dark:text-white font-semibold">Precision</span>.
                  I live to build systems with total control.
                </p>
              </div>

              {/* The Three Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { id: "01", title: "Digital Craft", desc: "Building SiliminPro. Translating engine mechanics into functional code." },
                  { id: "02", title: "Mechanical", desc: "Mind operates with thermodynamic precision. From CAD to manual fabrication." },
                  { id: "03", title: "Human Power", desc: "2 AM calisthenics is my method for maintaining mental discipline." }
                ].map((pillar) => (
                  <div key={pillar.id} className="group p-8 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-3xl hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-300">
                    <div className="h-1.5 w-8 bg-zinc-800 dark:bg-zinc-200 mb-6 group-hover:w-full transition-all duration-500"></div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4 font-mono">{pillar.id} / {pillar.title}</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>

              {/* Technical Stack List */}
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 whitespace-nowrap">Technical_Stack</h3>
                  <div className="h-px w-full bg-zinc-100 dark:bg-zinc-900"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[
                    { label: "// Code", skills: codeSkills },
                    { label: "// Mechanical", skills: engineeringSkills },
                    { label: "// Others", skills: otherSkills }
                  ].map((cat) => (
                    <div key={cat.label} className="space-y-4">
                      <h4 className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{cat.label}</h4>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 rounded-full text-[11px] font-bold border border-zinc-200 dark:border-zinc-800 uppercase">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Closing Quote */}
              <div className="pt-16 border-t border-zinc-100 dark:border-zinc-900">
                <p className="text-xl text-zinc-600 dark:text-zinc-400 italic">
                  "I seek challenges that force my brain to think 10 steps ahead."
                  <span className="text-black dark:text-white font-black italic text-2xl mt-4 block tracking-tighter uppercase">Let's build something.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: The "Wide" Socials */}
        <div className="w-full pt-16 border-t border-zinc-900 dark:border-zinc-100 relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="space-y-8">
              {/* Header Section */}
              <div className="flex items-center gap-4">
                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 dark:text-zinc-600 whitespace-nowrap">
                  Connectivity / Socials
                </h4>
                <div className="h-px w-full bg-zinc-100 dark:bg-zinc-900"></div>
              </div>

              {/* Links Grid */}
              <div className="flex flex-wrap gap-x-12 gap-y-6 text-2xl md:text-3xl font-black uppercase italic tracking-tighter">
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
                    className="group relative flex items-center gap-3 text-black dark:text-white no-underline transition-all duration-500 hover:text-red-600 hover:translate-x-2"
                  >
                    <span className="h-2 w-2 bg-red-600 rounded-full opacity-0 [@media(any-hover:hover)]:group-hover:opacity-100 transition-opacity"></span>

                    <span className="relative">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="text-right hidden md:block">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-none">
                Data_Transfer: Active <br />
                Signal: Encrypted
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}