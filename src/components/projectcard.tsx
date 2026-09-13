import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  index?: number;
}

export default function ProjectCard({ title, description, tech, link, index = 1 }: ProjectProps) {
  const serialId = String(index).padStart(2, '0');

  return (
    <div className="group relative w-full p-6 md:p-8 border border-zinc-300 dark:border-zinc-800 bg-transparent flex flex-col justify-between overflow-hidden transition-colors duration-300 hover:border-zinc-500 dark:hover:border-zinc-600">
      
      {/* Corner Crosshairs (+) */}
      <span className="absolute top-2 left-2 font-mono text-[10px] text-zinc-400 dark:text-zinc-600 select-none">+</span>
      <span className="absolute top-2 right-2 font-mono text-[10px] text-zinc-400 dark:text-zinc-600 select-none">+</span>
      <span className="absolute bottom-2 left-2 font-mono text-[10px] text-zinc-400 dark:text-zinc-600 select-none">+</span>
      <span className="absolute bottom-2 right-2 font-mono text-[10px] text-zinc-400 dark:text-zinc-600 select-none">+</span>

      {/* Main Content Area */}
      <div className="relative z-10 space-y-6">
        
        {/* Module Header Bar */}
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800/80 pb-3 font-mono text-[10px] tracking-widest text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-[#ff2400]" />
            <span className="uppercase">PROJ.NUM_{serialId}</span>
          </div>
          <span className="text-zinc-400 dark:text-zinc-600 uppercase">LOG</span>
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight uppercase text-zinc-950 dark:text-white group-hover:text-[#ff2400] transition-colors duration-200">
            {title}
          </h3>

          <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 max-w-full leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Technical Chips / Specs */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {tech.map((item, idx) => (
            <span 
              key={`${item}-${idx}`} 
              className="px-2.5 py-1 border border-zinc-300 dark:border-zinc-800 font-mono text-[9px] font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 bg-zinc-100/50 dark:bg-zinc-900/40"
            >
              [{item}]
            </span>
          ))}
        </div>
      </div>

      {/* Action / Launch Bar */}
      <div className="relative z-10 pt-8 mt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between">
        <a 
          href={link} 
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 hover:text-[#ff2400] dark:hover:text-[#ff2400] transition-colors"
        >
          <span>SEE MORE</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </a>
      </div>

      {/* Industrial Accent Strip */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-[#ff2400] w-0 group-hover:w-full transition-all duration-500 ease-out" />
    </div>
  );
}