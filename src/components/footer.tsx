export default function Footer() {
  return (
    <footer className="w-full py-24 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black overflow-hidden">
      <div className="w-full px-[5vw]">
        
        {/* Socials & Context */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400">Connectivity / Socials</h4>
            <div className="flex flex-wrap gap-8 text-xl font-black uppercase italic tracking-tighter">
              <a href="https://instagram.com/madmofoz" target="_blank" className="hover:text-zinc-500 transition-colors underline decoration-2 underline-offset-8 decoration-zinc-300 dark:decoration-zinc-800">Instagram</a>
              <a href="https://github.com/madmofoz" target="_blank" className="hover:text-zinc-500 transition-colors underline decoration-2 underline-offset-8 decoration-zinc-300 dark:decoration-zinc-800">GitHub</a>
              <a href="https://linkedin.com/in/madmofoz" target="_blank" className="hover:text-zinc-500 transition-colors underline decoration-2 underline-offset-8 decoration-zinc-300 dark:decoration-zinc-800">LinkedIn</a>
            </div>
          </div>

          <div className="text-left md:text-right space-y-4">
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">System Architecture</p>
            <p className="text-sm font-bold uppercase leading-none">
              Built with Next.js & Tailwind <br />
              <span className="text-zinc-400 text-[10px]">Optimized for Wide Monitors v2.6.0</span>
            </p>
          </div>
        </div>

        {/* The Giant Branding */}
        <div className="relative">
          <h2 className="text-[18vw] font-black leading-[0.7] tracking-tighter uppercase text-zinc-100 dark:text-zinc-950 select-none pointer-events-none mb-12">
            ZHIFRANTINO
          </h2>
          
          {/* Copyright & Sub-label */}
          <div className="absolute bottom-4 left-0 w-full flex flex-col md:flex-row justify-between items-end gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.5em] text-zinc-500">The Architect of Chaos</span>
              <span className="text-xs font-bold uppercase tracking-widest">© {new Date().getFullYear()} All Rights Reserved</span>
            </div>
            
            <div className="hidden lg:flex items-center gap-4 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              <span className="hidden">Status: The Developers Are Doing Calisthenics</span>
              <span className="h-1 w-1 bg-zinc-400 rounded-full"></span>
              <span>Yogyakarta, ID</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}