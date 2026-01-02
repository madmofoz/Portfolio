import Link from "next/link";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Initial */}
        <span className="font-bold text-xl tracking-tighter text-black dark:text-white">
          <span className="text-amber-200">.MAD</span>MOFO<span className="text-amber-200">Z</span>
        </span>

        {/* Links */}
        <div className="space-x-6 flex items-center">
          {NAV_LINKS.map((link) => (
            <Link
    key={link.name}
    href={link.href}
    className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
  >
    {link.name}
  </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}