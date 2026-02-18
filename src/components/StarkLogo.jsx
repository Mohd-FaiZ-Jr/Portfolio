import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function StarkLogo() {
  return (
    <Link to="/" className="flex items-center gap-3 group select-none">
      {/* Reactor Container */}
      <div className="relative w-11 h-11 flex items-center justify-center">
        {/* Outer HUD Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border border-cyan-400/20"
        >
          {/* Marker */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[2px] bg-cyan-400 rounded-full shadow-[0_0_6px_rgba(0,229,255,0.9)]" />
        </motion.div>

        {/* Inner Reactor Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[6px] rounded-full border border-cyan-400/10"
        />

        {/* Energy Pulse */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.1, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-6 h-6 rounded-full bg-cyan-400/10 blur-md"
        />

        {/* Reactor Core */}
        <motion.div
          whileHover={{ scale: 1.15 }}
          className="relative w-4 h-4 rounded-full 
          bg-gradient-to-br from-cyan-300 via-cyan-400 to-blue-600
          shadow-[0_0_18px_rgba(0,229,255,0.8)]
          flex items-center justify-center"
        >
          {/* Inner Core Detail */}
          <div className="w-2 h-2 rounded-full bg-white/80 blur-[1px]" />
        </motion.div>

        {/* Scan Sweep */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-cyan-400/10 to-transparent blur-[2px]" />
        </motion.div>
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col leading-none">
        {/* Main Logo Text */}
        <motion.span
          whileHover={{ letterSpacing: "0.18em" }}
          className="
          text-lg 
          font-orbitron 
          font-semibold 
          text-white 
          tracking-[0.14em]
          transition-all
          duration-300"
        >
          M<span className="text-cyan-400">O</span>
        </motion.span>

        {/* Subtext */}
        <span
          className="
          text-[9px]
          font-orbitron
          text-gray-500
          tracking-[0.28em]
          uppercase
          group-hover:text-cyan-400/70
          transition-colors
          duration-300"
        >
          Stark Systems
        </span>
      </div>
    </Link>
  );
}

export default React.memo(StarkLogo);
