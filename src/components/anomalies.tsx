"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';

interface MousePos {
  x: number;
  y: number;
}

interface EyeProps {
  size?: string;
  pupilSize?: string;
  mousePos: MousePos;
  color?: string;
}

interface BugProps {
  mousePos: MousePos;
  active: boolean;
}

const TrackingEye = ({
  size = "w-12 h-12",
  pupilSize = "w-5 h-5",
  mousePos,
  color = "bg-white"
}: EyeProps) => {
  const eyeRef = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    if (!eyeRef.current) return;
    const rect = eyeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = mousePos.x - centerX;
    const deltaY = mousePos.y - centerY;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const maxMove = rect.width / 4;
    const angle = Math.atan2(deltaY, deltaX);

    const moveX = Math.cos(angle) * Math.min(distance / 15, maxMove);
    const moveY = Math.sin(angle) * Math.min(distance / 15, maxMove);

    x.set(moveX);
    y.set(moveY);
  }, [mousePos, x, y]);

  return (
    <div
      ref={eyeRef}
      className={`${size} ${color} rounded-full border border-zinc-800 flex items-center justify-center relative overflow-hidden shadow-inner`}
    >
      <motion.div
        style={{ x, y }}
        className={`${pupilSize} bg-black rounded-full`}
      />
    </div>
  );
};

const Neon = ({ mousePos, active }: BugProps) => {
  // State buat posisi jalan-jalan
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!active) return;

    // Fungsi buat pindah ke posisi acak
    const moveRandomly = () => {
      const randomX = Math.random() * (window.innerWidth - 100); // -100 biar gak off-screen
      const randomY = Math.random() * (window.innerHeight - 100);
      setPosition({ x: randomX, y: randomY });
    };

    // Pindah pertama kali
    moveRandomly();

    // Interval jalan-jalannya (misal tiap 3 detik pindah)
    const interval = setInterval(moveRandomly, 3000);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <motion.div
      animate={{
        x: position.x,
        y: position.y,
        rotate: active ? [0, -0, 0, 0] : 0 // Kasih sedikit goyangan pas jalan
      }}
      transition={{
        duration: 3, // Durasi perjalanan (makin lama makin lemot/smooth)
        ease: "easeInOut",
        rotate: { repeat: Infinity, duration: 0.5 }
      }}
      className="fixed top-0 left-0 w-24 h-24 bg-[#000000] rounded-t-full flex items-start justify-center pt-6 gap-1 z-30 shadow-[0_0_20px_rgba(255,255,255,0.5)] pointer-events-none"
    >
      <TrackingEye size="w-7 h-7" pupilSize="w-3 h-3" mousePos={mousePos} color="bg-red-500" />
      <TrackingEye size="w-7 h-7" pupilSize="w-3 h-3" mousePos={mousePos} color="bg-red-500" />
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-4 bg-[#000000] rounded-full"></div>
    </motion.div>
  );
};

{/* 
const BlueprintDrone = ({ mousePos, active }) => (
  <motion.div 
    animate={{ y: active ? 0 : 120 }}
    transition={{ delay: 0.1 }}
    className="relative w-16 h-48 bg-blue-600 rounded-t-xl flex flex-col items-center pt-8 z-20 border-x border-t border-white/20"
  >
    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:10px_10px]"></div>
    <TrackingEye size="w-10 h-10" pupilSize="w-4 h-4" mousePos={mousePos} color="bg-zinc-200" />
    <div className="mt-4 text-[8px] font-mono text-white/50 uppercase tracking-tighter">Unit_B14</div>
  </motion.div>
); */}

const Stalker = ({ mousePos, active }: BugProps) => {
  // State buat posisi jalan-jalan
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!active) return;

    // Fungsi buat pindah ke posisi acak
    const moveRandomly = () => {
      const randomX = Math.random() * (window.innerWidth - 100); // -100 biar gak off-screen
      const randomY = Math.random() * (window.innerHeight - 100);
      setPosition({ x: randomX, y: randomY });
    };

    // Pindah pertama kali
    moveRandomly();

    // Interval jalan-jalannya (misal tiap 3 detik pindah)
    const interval = setInterval(moveRandomly, 3000);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <motion.div
      animate={{
        x: position.x,
        y: position.y,
        rotate: active ? [0, -0, 0, 0] : 0 // Kasih sedikit goyangan pas jalan
      }}
      transition={{
        duration: 3, // Durasi perjalanan (makin lama makin lemot/smooth)
        ease: "easeInOut",
        rotate: { repeat: Infinity, duration: 0.5 }
      }}
      className="relative w-14 h-32 bg-zinc-800 rounded-t-full flex justify-center pt-6 z-10 border-t shadow-[0_0_20px_rgba(255,255,255,1)]"
    >
      <TrackingEye size="w-6 h-6" pupilSize="w-2 h-2" mousePos={mousePos} color="bg-zinc-400" />
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-4 bg-[#000000] rounded-full"></div>
    </motion.div>
  );
};

const HazardIcon = () => (
  <svg
    width="24" height="24" viewBox="0 0 24 24" fill="none"
    className="animate-[pulse_0.2s_ease-in-out_infinite] drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
  >
    {/* Layer bawah buat efek ghosting/glitch */}
    <path
      d="M12 2L1 21H23L12 2Z"
      stroke="rgba(239,68,68,0.5)"
      strokeWidth="2"
      className="animate-[bounce_0.1s_infinite]"
    />
    {/* Layer utama */}
    <path d="M12 2L1 21H23L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const GhostFollower = ({ mousePos, active }: BugProps) => {
  const springConfig = { stiffness: 60, damping: 15 };
  const ghostX = useSpring(0, springConfig);
  const ghostY = useSpring(0, springConfig);

  useEffect(() => {
    if (active) {
      ghostX.set(mousePos.x - 100);
      ghostY.set(mousePos.y - 100);
    }
  }, [mousePos, active, ghostX, ghostY]);

  return (
    <motion.div
      style={{
        x: ghostX,
        y: ghostY,
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 200,
      }}
      animate={{
        opacity: active ? 1 : 0,
        scale: active ? 1 : 0.5,
      }}
      className="w-36 h-36 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
    >
      <svg 
        viewBox="0 0 512 512" 
        className="w-full h-full fill-black dark:fill-white opacity-80"
      >
        <path d="M508.374,432.802c0,0-46.6-39.038-79.495-275.781C420.046,69.341,346.023,0.882,256,0.882c-90.015,0-164.046,68.458-172.879,156.138C50.226,393.763,3.626,432.802,3.626,432.802c-15.107,25.181,20.733,28.178,38.699,27.94c35.254-0.478,35.254,40.294,70.516,40.294c35.254,0,35.254-35.261,70.508-35.261s37.396,45.343,72.65,45.343s37.389-45.343,72.651-45.343c35.254,0,35.254,35.261,70.508,35.261s35.27-40.772,70.524-40.294C487.641,460.98,523.48,457.982,508.374,432.802z M208.769,225.031c-12.518,0-22.676-10.15-22.676-22.675c0-12.518,10.158-22.66,22.676-22.66c12.516,0,22.66,10.142,22.66,22.66C231.429,214.881,221.285,225.031,208.769,225.031z M297.983,225.031c-12.525,0-22.668-10.15-22.668-22.675c0-12.518,10.143-22.66,22.668-22.66c12.509,0,22.667,10.142,22.667,22.66C320.65,214.881,310.492,225.031,297.983,225.031z"/>
      </svg>
      
      <div className="absolute top-[35%] left-[34%]">
        <TrackingEye size="w-6 h-6" pupilSize="w-3 h-3" mousePos={mousePos} color="bg-red-600" />
      </div>
      <div className="absolute top-[35%] right-[32%]">
        <TrackingEye size="w-6 h-6" pupilSize="w-3 h-3" mousePos={mousePos} color="bg-red-600" />
      </div>
    </motion.div>
  );
};

export default function SystemAnomalies({ isBugActive }: { isBugActive: boolean }) {
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isBugActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-[200] flex items-center justify-center"
          >
              <Neon mousePos={mousePos} active={true} />
              <Stalker mousePos={mousePos} active={true} />
              <GhostFollower mousePos={mousePos} active={true} />

            {/* Error Message Overlay */}
            <div className="bg-red-600/10 backdrop-blur-sm border border-red-600 p-4 font-mono text-red-600 text-md uppercase tracking-widest flex items-center gap-4">
              <HazardIcon />
              <span className="animate-pulse">
                BUG_WARN: Web-Infected-by-Unkown_Bug-21-12/xx_04
              </span>
              <HazardIcon />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}