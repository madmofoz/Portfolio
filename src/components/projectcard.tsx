import React from 'react'

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export default function ProjectCard({ title, description, tech, link }: ProjectProps) {
  return (
    <div className="group relative w-full p-10 md:p-16 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-[3rem] overflow-hidden transition-all duration-700 hover:border-zinc-400 dark:hover:border-zinc-500">
      
      {/* Background Index Decor - Memberikan kesan sistem penomoran */}
      <div className="absolute top-10 right-10 opacity-[0.03] dark:opacity-[0.07] select-none pointer-events-none">
        <span className="text-[12vw] font-black leading-none uppercase tracking-tighter italic">
          Project
        </span>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-12 items-start lg:items-center">
        
        {/* Info Section */}
        <div className="space-y-8 flex-1">
          {/* Badge Status */}
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-black dark:bg-white animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-500">
              Operational System
            </span>
          </div>

          {/* Title - Bold Italic Uppercase */}
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase italic leading-[0.8] text-black dark:text-white transition-transform group-hover:translate-x-2 duration-500">
            {title}
          </h3>

          {/* Description - Lebih besar dan lega */}
          <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-3xl leading-relaxed font-medium">
            {description}
          </p>

          {/* Tech Stack - Gaya industrial tags */}
          <div className="flex flex-wrap gap-3">
            {tech.map((item) => (
              <span 
                key={item} 
                className="px-5 py-2 bg-zinc-200 dark:bg-zinc-800 text-black dark:text-zinc-300 text-[10px] font-black uppercase tracking-widest rounded-full border border-transparent hover:border-zinc-400 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Action Section */}
        <div className="w-full lg:w-auto flex flex-col items-start lg:items-end gap-6 pt-6 lg:pt-0">
          <a 
            href={link} 
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center gap-4 text-2xl font-black italic uppercase tracking-tighter text-black dark:text-white no-underline"
          >
            <span className="relative z-10 underline decoration-[4px] underline-offset-8 decoration-zinc-500 group-hover/btn:decoration-black dark:group-hover/btn:decoration-white transition-all">
              Try System →
            </span>
          </a>
          
          {/* Detail kecil penambah vibe engineer */}
          <div className="hidden lg:block text-right">
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-tight">
              Deployment: Ready <br />
              Encryption: Active <br />
              Architecture: High-Performance
            </p>
          </div>
        </div>

      </div>

      {/* Decorative Progress Bar - Animasi pas di-hover */}
      <div className="absolute bottom-0 left-0 h-1.5 bg-black dark:bg-white w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
    </div>
  )
}