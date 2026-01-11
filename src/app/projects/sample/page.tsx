"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, Github, Chrome } from 'lucide-react';

// --- Interfaces ---
interface MousePosition {
  x: number;
  y: number;
}

interface EyeProps {
  size?: string;
  pupilSize?: string;
  mousePos: MousePosition;
}

interface MonsterProps {
  mousePos: MousePosition;
}

// --- Eye Component ---
const TrackingEye: React.FC<EyeProps> = ({ size = "w-12 h-12", pupilSize = "w-5 h-5", mousePos }) => {
  const eyeRef = useRef<HTMLDivElement>(null);
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

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
      className={`${size} bg-white rounded-full border-2 border-slate-200 flex items-center justify-center relative overflow-hidden shadow-inner`}
    >
      <motion.div 
        style={{ x, y }}
        className={`${pupilSize} bg-slate-900 rounded-full`}
      />
    </div>
  );
};

// --- Character Components ---
const OrangeMonster: React.FC<MonsterProps> = ({ mousePos }) => (
  <motion.div 
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="absolute bottom-0 left-4 w-32 h-24 bg-orange-500 rounded-t-[60px] flex items-start justify-center pt-6 gap-2 z-30 shadow-lg"
  >
    <TrackingEye size="w-8 h-8" pupilSize="w-3 h-3" mousePos={mousePos} />
    <TrackingEye size="w-8 h-8" pupilSize="w-3 h-3" mousePos={mousePos} />
  </motion.div>
);

const PurpleMonster: React.FC<MonsterProps> = ({ mousePos }) => (
  <motion.div 
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="absolute bottom-0 left-28 w-20 h-56 bg-indigo-600 rounded-t-full flex flex-col items-center pt-10 z-20 shadow-lg"
  >
    <TrackingEye size="w-10 h-10" pupilSize="w-4 h-4" mousePos={mousePos} />
  </motion.div>
);

const YellowMonster: React.FC<MonsterProps> = ({ mousePos }) => (
  <motion.div 
    initial={{ y: 80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="absolute bottom-0 left-44 w-16 h-40 bg-yellow-400 rounded-t-full flex justify-center pt-8 z-10 shadow-lg"
  >
    <TrackingEye size="w-7 h-7" pupilSize="w-3 h-3" mousePos={mousePos} />
  </motion.div>
);

// --- Main App ---
export default function App() {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4 font-sans text-slate-900">
      <div className="w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row overflow-hidden border border-slate-100">
        
        {/* Left Visual Section */}
        <div className="w-full md:w-1/2 bg-[#f1f5f9] relative min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="relative w-72 h-72">
             <OrangeMonster mousePos={mousePos} />
             <PurpleMonster mousePos={mousePos} />
             <YellowMonster mousePos={mousePos} />
          </div>
          
          <div className="absolute top-10 left-10 w-4 h-4 bg-indigo-200 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-8 h-8 border-4 border-orange-200 rounded-lg rotate-12" />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">Welcome back!</h1>
            <p className="text-slate-500 text-lg">Please enter your details to sign in.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="email"
                  placeholder="name@company.com"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transform active:scale-[0.98] transition-all shadow-lg shadow-slate-200">
              Sign In
            </button>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors font-semibold">
                <Chrome size={20} /> Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors font-semibold">
                <Github size={20} /> GitHub
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-slate-600">
            Don't have an account? <button className="font-bold text-indigo-600 hover:text-indigo-700">Sign up free</button>
          </p>
        </div>
      </div>
    </div>
  );
}