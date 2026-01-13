"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Loader = () => {
    const pathname = usePathname();

    const [isVisible, setIsVisible] = useState(true);
    const [lastPathname, setLastPathname] = useState(pathname);
    const [isReady, setIsReady] = useState(false);
    const [dots, setDots] = useState('');
    const [msgIndex, setMsgIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const messages = useMemo(() => [
        "Warming up the engines...",
        "Looking for that 10mm socket I just lost again...",
        "Waiting for the black coffee to hit my bloodstream...",
        "Calibrating the vibes...",
        "Lighting a cig, gimme a sec...",
        "Arguing with a <div> about its life choices...",
        "Oops, the crayon snapped...",
        "Drawing mustaches on the blueprints...",
        "Searching for my lost motivation...",
        "I have one bolt left over... wait, why?",
        "Negotiating with a bug to leave peacefully...",
        "Quick calisthenics break to avoid rusting...",
        "Arak Empire is currently restocking mood...",
        "Waiting for a divine sign to finish the CSS...",
        "Collecting my soul after a 3 AM grind...",
        "Sharpening a pencil with an angle grinder...",
        "Wait, did I leave the wrench inside the engine?",
        "Polishing the overkill energy...",
        "Wondering where I put that screwdriver...",
        "Toning down the chaos (just a little)...",
        "Brewing the second pot of coffee...",
        "Listening to the engine's life story...",
        "Asking the server nicely to cooperate...",
        "Replacing pixel juice...",
        "Teaching the AI some manners...",
        "Trying to find where I hid the secret sauce...",
        "Converting stress into syntax...",
        "Applying duct tape to the backend...",
        "Wondering if I should've been a farmer instead...",
        "Loading 1% of my overkill power...",
        "Bribing the GPU with virtual cookies...",
        "Updating my sense of humor... 404 not found.",
        "Overclocking my brain with another cigarette...",
        "Squashing bugs like it's a calisthenics workout...",
        "Polishing the 'Z' until it blinds you...",
        "Telling my laptop it's doing a great job...",
        "Pretending I know exactly what I'm doing...",
        "brew a coffee again...",
        "damn, i feel sleepy...",
        "Ignoring the 'low battery' warning of my soul..."
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

    // constant sync path
    if (pathname !== lastPathname) {
        setLastPathname(pathname);
        setIsVisible(true);
        setIsReady(false);
        setProgress(0);
    }

    useEffect(() => {
        if (!isVisible) return;
        const handleLoad = () => setIsReady(true);;

        if (document.readyState === 'complete') {
            setIsReady(true);
        } else {
            window.addEventListener('load', handleLoad);
        }
    }, [isVisible, pathname]);

    useEffect(() => {
        if (!isVisible) return;

        const msgInterval = setInterval(() => {
            setMsgIndex((prev) => {
                let nextIndex;
                do {
                    nextIndex = Math.floor(Math.random() * messages.length);
                } while (nextIndex === prev && messages.length > 1);
                return nextIndex;
            });
            setCurrentIcon(customIcons[Math.floor(Math.random() * customIcons.length)]);
        }, 850);

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 20) return prev + 1.5;
                if (isReady && prev < 100) return prev + 5;
                return prev;
            });
        }, 30);

        if (progress >= 100 && isReady) {
            const finishTimer = setTimeout(() => {
                setIsVisible(false);
            }, 500);
            return () => clearTimeout(finishTimer);
        }

    }, [isVisible, isReady, messages.length, customIcons]);
    
    // end logic
    useEffect(() => {
        if (progress >= 100 && isReady && isVisible) {
            const timer = setTimeout(() => setIsVisible(false), 600);
            return () => clearTimeout(timer);
        }
    }, [progress, isReady, isVisible]);
    
    //dot logic
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
                    key="loader-canvas"
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
                            <img src="/gear.svg" className="w-56 h-56 relative flex items-center justify-center"></img>

                            <motion.div
                                key={currentIcon}
                                initial={{ scale: 0, rotate: -30 }}
                                animate={{ scale: 1, rotate: 0 }}
                                className="absolute -top-4 -right-4 w-12 h-12"
                            >
                                <motion.img
                                    animate={{
                                        y: [0, -20, 0],
                                        rotate: [0, 20, -20, 0],
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
                            Wait{dots}
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

export default Loader;