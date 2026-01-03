import Link from "next/link";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-white/80 dark:bg-black/90 backdrop-blur-md z-[100] border-b border-zinc-200 dark:border-zinc-800">
      {/* Menggunakan px-[5vw] agar sejajar dengan layout konten utama yang wide */}
      <div className="w-full px-[5vw] py-5 flex justify-between items-center">
        
        {/* Logo / Branding */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="h-8 w-8 bg-black dark:bg-white flex items-center justify-center rounded-sm transition-transform group-hover:rotate-90 duration-500">
            <span className="text-white dark:text-black font-black text-xs">Z</span>
          </div>
          <span className="font-black text-xl tracking-[0.2em] text-black dark:text-white uppercase">
            .MADMOFO<span className="text-zinc-400">Z</span>
          </span>
        </Link>

        {/* System Status (Hidden on mobile) - Buat nambah vibe overkill */}
        <div className="hidden lg:flex items-center gap-6 px-6 border-l border-r border-zinc-200 dark:border-zinc-800 h-full">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
              Eng: Operational
            </span>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
            LOC: 7.7956° S, 110.3695° E
          </div>
        </div>

        {/* Links Navigation */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-black dark:hover:text-white transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black dark:bg-white transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Action Button / CTA Kecil */}
          <a
            href="https://wa.me/yourphonenumber" // Ganti dengan nomor lu
            className="hidden sm:block px-5 py-2 bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-widest rounded-sm hover:invert transition-all active:scale-95"
          >
            Contact System
          </a>

          {/* Mobile Menu Icon (Placeholder) */}
          <div className="md:hidden flex flex-col gap-1 w-6 cursor-pointer">
            <div className="h-0.5 w-full bg-black dark:bg-white"></div>
            <div className="h-0.5 w-3/4 bg-black dark:bg-white self-end"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}