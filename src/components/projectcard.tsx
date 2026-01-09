import React from 'react'

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export default function ProjectCard({ title, description, tech, link }: ProjectProps) {
  return (
    <div className="group relative w-full p-8 md:p-12 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:border-zinc-400 dark:hover:border-zinc-500 flex flex-col justify-between">
      
      {/* Background Index Decor */}
      <div className="absolute top-8 right-8 opacity-[0.03] dark:opacity-[0.07] select-none pointer-events-none">
        <span className="text-[10vw] font-black leading-none uppercase tracking-tighter italic">
            - Project
        </span>
      </div>

      <div className="relative z-10 space-y-8">
        {/* Info Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-black dark:bg-white animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-500">
              Operational System
            </span>
          </div>

          {/* Title - Reduced size slightly for 2-column fit */}
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase italic leading-[0.9] text-black dark:text-white transition-transform group-hover:translate-x-2 duration-500">
            {title}
          </h3>

          <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-full leading-relaxed font-medium">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span 
                key={item} 
                className="px-4 py-1.5 bg-zinc-200 dark:bg-zinc-800 text-black dark:text-zinc-300 text-[9px] font-black uppercase tracking-widest rounded-full border border-transparent hover:border-zinc-400 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Action Section */}
        <div className="pt-6 flex flex-col gap-4">
          <a 
            href={link} 
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center gap-4 text-xl font-black italic uppercase tracking-tighter text-black dark:text-white no-underline"
          >
            <span className="relative z-10 underline decoration-[3px] underline-offset-8 decoration-zinc-500 group-hover/btn:decoration-black dark:group-hover/btn:decoration-white transition-all">
            wtf is that →
            </span>
          </a>
          
          <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest leading-tight">
            Deployment: Ready // Encryption: Active
          </div>
        </div>
      </div>

      {/* Decorative Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1.5 bg-black dark:bg-white w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
    </div>
  )
}