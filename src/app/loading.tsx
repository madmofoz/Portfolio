"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const StartupLoader = () => {
  const pathname = usePathname();
  
  const [isVisible, setIsVisible] = useState(true);
  const [lastPathname, setLastPathname] = useState(pathname);
  const [dots, setDots] = useState('');
  const [msgIndex, setMsgIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // constant sync path
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsVisible(true);
    setProgress(0);
  }

  const messages = useMemo(() => [
    "Warming up the engines...",
    "Tightening some bolts...",
    "Hydrating with some coffee...",
    "Calibrating the vibes...",
    "Lighting the cig",
    "Almost there, stay dangerous...",
  ], []);
  
  const customIcons = useMemo(() => [
    "/icons/bolt.svg", 
    "/icons/chat.svg", 
    "/icons/coffee.svg", 
    "/icons/cog.svg",
    "/icons/coin.svg", 
    "/icons/crown.svg", 
    "/icons/germ.svg", 
    "/icons/infor.svg",
    "/icons/key.svg", 
    "/icons/minimize.svg", 
    "/icons/monitor.svg", 
    "/icons/moon.svg",
    "/icons/phone.svg", 
    "/icons/plane.svg", 
    "/icons/pp.svg", 
    "/icons/send.svg",
    "/icons/siren.svg", 
    "/icons/skull.svg", 
    "/icons/sparkles.svg", 
    "/icons/speaker.svg",
    "/icons/up.svg", 
    "/icons/trash.svg"
  ], []);
  const [currentIcon, setCurrentIcon] = useState(customIcons[0]);

  useEffect(() => {
    if (!isVisible) return;

    // change random message and Icon
    const msgInterval = setInterval(() => {
      setMsgIndex((prev) => {
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * messages.length);
        } while (nextIndex === prev && messages.length > 1);
        return nextIndex;
      });
      setCurrentIcon(customIcons[Math.floor(Math.random() * customIcons.length)]);
    }, 600);

    // Simulate smooth flowing progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2.5; // Progress speed
      });
    }, 30);

    // Total loader duration before disappearing (Curtain Rise)
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearInterval(msgInterval);
      clearInterval(progressInterval);
      clearTimeout(timeout);
    };
  }, [isVisible, messages.length, customIcons]);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 300);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="startup-loader-canvas"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", // Curtain effect
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}

          style={{ 
            backgroundImage: "url('/bg.svg')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#F9F9F9' // Fallback color
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
        >

          {/* Subtle Grain Texture for premium feel */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          <div className="relative flex flex-col items-center">
            <motion.div>
          {/* Center Piece: The Bouncy Bbox 
          <div className="relative flex flex-col items-center">
            <motion.div
              animate={{
                scale: [0.9, 1, 1.15, 1, 0.9],
                rotate: [0, 10, -10, 5, 0],
                borderRadius: ["30%", "50%", "30%", "45%", "30%"],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-24 h-24 bg-[#2563eb] rounded-full shadow-2xl shadow-blue-300 flex items-center justify-center relative z-10"
            >*/}

            <svg 
                xmlns='http://www.w3.org/2000/svg' 
                viewBox='0 0 200 200'
                className="w-full h-full drop-shadow-xl"
              >
                <path 
                  fill='#f1f1f1' 
                  stroke='#e3242b' 
                  strokeWidth='9' 
                  transformOrigin='center' 
                  d='m148 84.7 13.8-8-10-17.3-13.8 8a50 50 0 0 0-27.4-15.9v-16h-20v16A50 50 0 0 0 63 67.4l-13.8-8-10 17.3 13.8 8a50 50 0 0 0 0 31.7l-13.8 8 10 17.3 13.8-8a50 50 0 0 0 27.5 15.9v16h20v-16a50 50 0 0 0 27.4-15.9l13.8 8 10-17.3-13.8-8a50 50 0 0 0 0-31.7Zm-47.5 50.8a35 35 0 1 1 0-70 35 35 0 0 1 0 70Z'
                >
                  <animateTransform 
                    type='rotate' 
                    attributeName='transform' 
                    calcMode='spline' 
                    dur='2' 
                    values='0;120' 
                    keyTimes='0;1' 
                    keySplines='0 0 1 1' 
                    repeatCount='indefinite' 
                  />
                </path>
              </svg>

              {/* Initial M that shakes along */}
              <span className="text-white text-6xl font-black tracking-tighter">Z</span>
              
              {/* Dancing Icon (Floating & Bouncing) */}
              <motion.div
                key={currentIcon}
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                className="absolute -top-4 -right-4 w-12 h-12"
              >
                <motion.img
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                  src={currentIcon}
                  alt="loading-icon"
                  className="w-full h-full object-contain drop-shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Subtle Shadow that follows squash & stretch */}
            <motion.div 
              animate={{ 
                scale: [1, 0.9, 0.7, 0.9, 1], 
                opacity: [0.15, 0.05, 0.2, 0.1, 0.15] 
              }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="w-16 h-3 bg-black/20 rounded-full blur-md mt-8"
            />
          </div>

          {/* Progressive Copywriting Section */}
          <div className="mt-14 text-center h-20 px-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={msgIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold text-zinc-900 tracking-tight"
              >
                {messages[msgIndex]}
              </motion.p>
            </AnimatePresence>
            <p className="text-red-500/60 font-bold text-xs mt-3 uppercase tracking-[0.4em]">
              Operational Check{dots}
            </p>
          </div>

          {/* Minimalist Pill Progress Bar */}
          <div className="absolute bottom-20 w-56 h-1.5 bg-zinc-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-[#F04E4C] rounded-full"
            />
          </div>

          {/* Branding Info */}
          <div className="absolute bottom-10 flex flex-col items-center gap-2 ">
            <div className="h-[2px] w-8 bg-[#e3242b] opacity-30" />
            <span className="text-[10px] font-black font-mono tracking-[0.5em] uppercase text-zinc-700">
              .MADMOFOZ
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StartupLoader;