import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="w-full px-[5vw]">
        
        {/* Main Footer Row: Architecture (Left), Identity (Center), Status (Right) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          
          {/* Architecture - Moved to Left */}
          <div className="flex flex-col items-start gap-1 flex-1">
            <h4 className="text-[9px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-600">
              // Architecture
            </h4>
            <p className="text-[11px] font-bold uppercase leading-tight">
              Next.js & Tailwind <br />
              <span className="text-zinc-400 dark:text-zinc-500 text-[9px] font-mono">Build_v2.5.0 // Operational</span>
            </p>
          </div>

          {/* Ownership & Copyright - Moved to Center */}
          <div className="flex flex-col items-center text-center gap-1 flex-1">
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-zinc-500">
              Muhammad Zhifrantino
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              © {currentYear} All Rights Reserved
            </span>
          </div>

          {/* Universal Status Bar - Stays Right */}
          <div className="flex-1 flex justify-end w-full md:w-auto">
            <div className="flex items-center gap-4 py-2 px-4 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 rounded-full">
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                <span className="text-[8px] font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-widest whitespace-nowrap">
                  Status: Stable
                </span>
              </div>
              <div className="h-3 w-px bg-zinc-300 dark:bg-zinc-700"></div>
              <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest">
                Calisthenics_Mode
              </span>
            </div>
          </div>

        </div>

        {/* NODE LOCATION 
          ------------------------------------------
          <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-900 flex justify-between items-center">
            <div className="space-y-1">
              <h4 className="text-[9px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-400">
                // Node_Location
              </h4>
              <p className="text-[10px] font-mono text-zinc-500 uppercase">
                Yogyakarta, ID // 7.7956° S, 110.3695° E
              </p>
            </div>
          </div>
        */}

      </div>
    </footer>
  );
}