import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("INITIALIZING");
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Smooth progress simulation
    const totalDuration = 2200; // slightly longer than 2s for smoothness
    const intervalTime = 30;
    const steps = totalDuration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progressValue = Math.min(100, (currentStep / steps) * 100);
      
      // Non-linear progress for realism
      const easedProgress = 100 * (1 - Math.pow(1 - progressValue / 100, 3)); 
      
      setProgress(Math.round(easedProgress));

      // Text updates based on progress
      if (progressValue < 30) setLoadingText("INITIALIZING CORE SYSTEMS...");
      else if (progressValue < 60) setLoadingText("LOADING NEURAL INTERFACE...");
      else if (progressValue < 90) setLoadingText("ESTABLISHING SECURE CONNECTION...");
      else setLoadingText("ACCESS GRANTED");

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsExiting(true);
        setTimeout(onFinish, 800); // Wait for exit animation
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinish]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
          className="fixed inset-0 z-[9999] bg-[#05070d] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Grid - Subtle Movement */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#00e5ff_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff_1px,transparent_1px)] bg-[size:4rem_4rem]">
            <motion.div 
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            />
          </div>

          {/* Central Reactor Loader */}
          <div className="relative mb-12">
            {/* Outer Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 rounded-full border border-cyan-500/30 border-t-cyan-400 border-r-transparent border-b-cyan-400 border-l-transparent"
            />
            
            {/* Inner Counter-Rotating Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border border-cyan-500/20 border-t-transparent border-r-cyan-400 border-b-transparent border-l-cyan-400"
            />

            {/* Core Pulse */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 m-auto w-16 h-16 bg-cyan-500/10 rounded-full blur-md"
            />
            
            <div className="absolute inset-0 m-auto w-20 h-20 bg-cyan-500/5 rounded-full shadow-[0_0_30px_rgba(0,229,255,0.2)]" />
            
            {/* Center Logo/Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
               <motion.div 
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ type: "spring", stiffness: 200, damping: 20 }}
                 className="w-8 h-8 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(0,229,255,0.8)]"
               />
            </div>
          </div>

          {/* Text & Progress */}
          <div className="w-64 space-y-4">
            {/* Loading Text with Glitch Effect simulation via rapid opacity changes is overkill, keep it clean */}
            <motion.div 
              className="h-6 flex items-center justify-center overflow-hidden"
            >
               <motion.span 
                 key={loadingText}
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: -20, opacity: 0 }}
                 transition={{ duration: 0.2 }}
                 className="text-cyan-400/80 font-orbitron text-[10px] tracking-[0.2em] font-bold uppercase truncate"
               >
                 {loadingText}
               </motion.span>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="h-[2px] w-full bg-gray-800 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.05 }} // almost instant update to match state
                className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(0,229,255,0.8)]"
              />
              {/* Scanning Head */}
              <motion.div 
                animate={{ left: ["0%", "100%"] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-10 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 opacity-50"
              />
            </div>

            <div className="flex justify-between items-center text-[9px] font-orbitron text-gray-500 font-medium tracking-widest">
              <span>SYSTEM_CHECK</span>
              <span className="text-cyan-500">{progress}%</span>
            </div>
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-cyan-500/20 rounded-tl-xl" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-cyan-500/20 rounded-br-xl" />
          
          {/* Version */}
          <div className="absolute bottom-8 left-8">
             <span className="text-[9px] font-orbitron text-gray-600 tracking-[0.2em]">V 2.5.0 // STARK_OS</span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
