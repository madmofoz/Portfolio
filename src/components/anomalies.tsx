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

interface MonsterProps {
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

const NeonGremlin = ({ mousePos, active }: MonsterProps) => (
  <motion.div 
    animate={{ y: active ? 0 : 60 }}
    className="relative w-24 h-24 bg-[#000000] rounded-t-full flex items-start justify-center pt-6 gap-1 z-30 shadow-[0_0_20px_rgba(255,255,255,0.5)]"
  >
    <TrackingEye size="w-7 h-7" pupilSize="w-3 h-3" mousePos={mousePos} color="bg-red-500" />
    <TrackingEye size="w-7 h-7" pupilSize="w-3 h-3" mousePos={mousePos} color="bg-red-500" />
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-4 bg-[#000000] rounded-full"></div>
  </motion.div>
);

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

const GlitchStalker = ({ mousePos, active }: MonsterProps) => (
  <motion.div 
    animate={{ y: active ? 0 : 100 }}
    transition={{ delay: 0.2 }}
    className="relative w-14 h-32 bg-zinc-800 rounded-t-full flex justify-center pt-6 z-10 border-t shadow-[0_0_20px_rgba(255,255,255,1)]"
  >
    <TrackingEye size="w-6 h-6" pupilSize="w-2 h-2" mousePos={mousePos} color="bg-zinc-400" />
  </motion.div>
);

export default function SystemAnomalies({ isEasterEggActive }: { isEasterEggActive: boolean }) {
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
        {isEasterEggActive && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-[200] flex items-center justify-center"
          >
            <div className="absolute top-20 right-20 rotate-12 scale-150">
                <NeonGremlin mousePos={mousePos} active={true} />
            </div>
            
            <div className="absolute bottom-40 left-20 -rotate-12 scale-110">
                <GlitchStalker mousePos={mousePos} active={true} />
            </div>

            {/* Error Message Overlay */}
            <div className="bg-red-600/10 backdrop-blur-sm border border-red-600 p-4 font-mono text-red-600 text-xs uppercase tracking-widest animate-pulse">
                Critical Anomaly: System_Infected_by_Ghosts
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}