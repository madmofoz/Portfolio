"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, Github, Chrome } from 'lucide-react';

// --- Types ---
interface MousePosition {
  x: number;
  y: number;
}

interface EyeProps {
  size?: string;
  pupilSize?: string;
  mousePos: MousePosition;
  isShy?: boolean;
}

interface MonsterProps {
  mousePos: MousePosition;
  isShy: boolean;
}

// --- Eye Component ---
const TrackingEye: React.FC<EyeProps> = ({ size = "w-12 h-12", pupilSize = "w-5 h-5", mousePos, isShy }) => {
  const eyeRef = useRef<HTMLDivElement>(null);
  
  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    if (!eyeRef.current) return;

    // If shy, look up and away or "close"
    if (isShy) {
      x.set(0);
      y.set(-15);
      return;
    }

    const rect = eyeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = mousePos.x - centerX;
    const deltaY = mousePos.y - centerY;
    
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const maxMove = rect.width / 4; 
    const angle = Math.atan2(deltaY, deltaX);
    
    const moveX = Math.cos(angle) * Math.min(distance / 12, maxMove);
    const moveY = Math.sin(angle) * Math.min(distance / 12, maxMove);

    x.set(moveX);
    y.set(moveY);
  }, [mousePos, isShy, x, y]);

  return (
    <div 
      ref={eyeRef}
      className={`${size} bg-white rounded-full border-2 border-slate-200 flex items-center justify-center relative overflow-hidden shadow-inner transition-all duration-300`}
    >
      {/* Eyelid animation when shy */}
      <motion.div 
        initial={false}
        animate={{ height: isShy ? '100%' : '0%' }}
        className="absolute top-0 left-0 right-0 bg-inherit z-10 border-b border-slate-200"
      />
      
      <motion.div 
        style={{ x, y }}
        animate={{ scale: isShy ? 0.5 : 1, opacity: isShy ? 0.3 : 1 }}
        className={`${pupilSize} bg-slate-950 rounded-full`}
      />
    </div>
  );
};

// --- Character Components ---
const OrangeMonster: React.FC<MonsterProps> = ({ mousePos, isShy }) => (
  <motion.div 
    animate={{ 
      y: isShy ? 5 : 0,
      scale: isShy ? 0.95 : 1
    }}
    className="absolute bottom-0 left-4 w-32 h-24 bg-orange-500 rounded-t-[60px] flex items-start justify-center pt-6 gap-2 z-30 shadow-lg border-t border-orange-400"
  >
    <TrackingEye size="w-8 h-8" pupilSize="w-4 h-4" mousePos={mousePos} isShy={isShy} />
    <TrackingEye size="w-8 h-8" pupilSize="w-4 h-4" mousePos={mousePos} isShy={isShy} />
  </motion.div>
);

const PurpleMonster: React.FC<MonsterProps> = ({ mousePos, isShy }) => (
  <motion.div 
    animate={{ 
      height: isShy ? '13rem' : '14rem',
      x: isShy ? -5 : 0 
    }}
    className="absolute bottom-0 left-28 w-20 h-56 bg-indigo-600 rounded-t-full flex flex-col items-center pt-10 z-20 shadow-lg border-t border-indigo-500"
  >
    <TrackingEye size="w-10 h-10" pupilSize="w-5 h-5" mousePos={mousePos} isShy={isShy} />
  </motion.div>
);

const YellowMonster: React.FC<MonsterProps> = ({ mousePos, isShy }) => (
  <motion.div 
    animate={{ 
      height: isShy ? '9rem' : '10rem',
      x: isShy ? 5 : 0 
    }}
    className="absolute bottom-0 left-44 w-16 h-40 bg-yellow-400 rounded-t-full flex justify-center pt-8 z-10 shadow-lg border-t border-yellow-300"
  >
    <TrackingEye size="w-7 h-7" pupilSize="w-3.5 h-3.5" mousePos={mousePos} isShy={isShy} />
  </motion.div>
);

// --- Main App ---
export default function App() {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center p-4 font-sans text-slate-900">
      <div className="w-full max-w-5xl bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col md:flex-row overflow-hidden border border-white">
        
        {/* Left Visual Section */}
        <div className="w-full md:w-1/2 bg-[#e2e8f0]/30 relative min-h-[450px] flex items-center justify-center overflow-hidden">
          <div className="relative w-80 h-80">
             <OrangeMonster mousePos={mousePos} isShy={isPasswordFocused} />
             <PurpleMonster mousePos={mousePos} isShy={isPasswordFocused} />
             <YellowMonster mousePos={mousePos} isShy={isPasswordFocused} />
          </div>
          
          {/* Subtle Floating Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-16 left-16 w-3 h-3 bg-indigo-300 rounded-full" 
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute bottom-24 right-16 w-6 h-6 border-2 border-orange-300 rounded-md" 
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-black tracking-tight mb-3 text-slate-900">Welcome back!</h1>
            <p className="text-slate-500 text-lg font-medium">Please enter your details to sign in.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="group space-y-2">
              <label className="text-sm font-bold text-slate-600 ml-1 transition-colors group-focus-within:text-indigo-600">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 transition-colors group-focus-within:text-indigo-500" />
                <input 
                  type="email"
                  placeholder="name@company.com"
                  className="w-full pl-14 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-[1.25rem] focus:bg-white focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 font-medium"
                />
              </div>
            </div>

            <div className="group space-y-2">
              <label className="text-sm font-bold text-slate-600 ml-1 transition-colors group-focus-within:text-indigo-600">Password</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 transition-colors group-focus-within:text-indigo-500" />
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  className="w-full pl-14 pr-14 py-4 bg-slate-50 border-2 border-transparent rounded-[1.25rem] focus:bg-white focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 font-medium"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded-lg border-slate-300 text-indigo-600 focus:ring-indigo-500 transition-all" />
                <span className="text-sm font-bold text-slate-500 group-hover:text-slate-900 transition-colors">Remember me</span>
              </label>
              <button type="button" className="text-sm font-black text-indigo-600 hover:text-indigo-700 transition-colors">Forgot password?</button>
            </div>

            <button className="w-full bg-slate-950 text-white py-4.5 rounded-[1.25rem] font-black text-lg hover:bg-indigo-600 active:scale-[0.97] transition-all shadow-xl shadow-indigo-100/50 flex items-center justify-center gap-2">
              Sign In
            </button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
              <div className="relative flex justify-center text-xs uppercase font-black tracking-widest"><span className="bg-white px-4 text-slate-300">Or continue with</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3.5 border-2 border-slate-100 rounded-[1.25rem] hover:bg-slate-50 transition-all font-bold text-slate-700">
                <Chrome size={20} /> Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3.5 border-2 border-slate-100 rounded-[1.25rem] hover:bg-slate-50 transition-all font-bold text-slate-700">
                <Github size={20} /> GitHub
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-slate-400 font-bold">
            Don't have an account? <button className="text-indigo-600 hover:text-indigo-700 transition-colors">Sign up free</button>
          </p>
        </div>
      </div>
    </div>
  );
}