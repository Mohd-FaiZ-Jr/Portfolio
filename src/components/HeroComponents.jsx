import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const ProfileVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-80 h-80 md:w-96 md:h-96 flex-shrink-0"
    >
      {/* Soft Radial Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent blur-3xl"></div>

      {/* Single Subtle Ring */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.02, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute inset-0 border border-cyan-500/10 rounded-full"
      ></motion.div>

      {/* Glass Halo Effect */}
      <div className="absolute inset-6 rounded-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"></div>

      {/* Main Image Container */}
      <motion.div
        whileHover={{
          rotateY: 5,
          scale: 1.02,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ perspective: "1000px" }}
        className="absolute inset-8 rounded-full overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,229,255,0.08)] hover:shadow-[0_0_60px_rgba(0,229,255,0.12)] transition-shadow duration-700 bg-gradient-to-br from-gray-900 to-black"
      >
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full"
        >
          <img
            src="src/assets/Background Images/My-Pic.jpg"
            alt="Mohammad Faiz"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </motion.div>

      {/* Minimal Tech Marker */}
      <div className="absolute -top-2 right-8 bg-[#0a0a0a] px-2 py-1 border border-cyan-500/20 rounded text-cyan-500/60 text-[9px] font-orbitron tracking-[0.2em] z-20">
        ONLINE
      </div>
    </motion.div>
  );
};

const HeroContent = () => {
  return (
    <div className="flex-1 space-y-10 text-left">
      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
        </span>
        <span className="text-cyan-400/80 text-[10px] font-orbitron tracking-[0.25em] font-medium uppercase">
          Available for Work
        </span>
      </motion.div>

      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="space-y-3"
      >
        <h1 className="text-6xl md:text-7xl font-black font-orbitron text-white tracking-tight leading-[1.1]">
          MOHAMMAD{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 animate-gradient-slow">
            FAIZ
          </span>
        </h1>

        <p className="text-lg md:text-xl font-rajdhani font-medium text-gray-500 tracking-[0.25em] uppercase">
          Front-End <span className="text-cyan-400/70">Engineer</span>
        </p>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-rajdhani text-base md:text-lg text-gray-400/90 leading-relaxed max-w-[500px] opacity-80 hover:opacity-100 transition-opacity duration-500"
      >
        Crafting exceptional digital experiences through clean code and
        thoughtful design. Specialized in building modern, performant web
        applications with <span className="text-gray-300">React</span> and{" "}
        <span className="text-gray-300">Next.js</span>.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 pt-2"
      >
        <motion.button
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-exo font-semibold text-sm tracking-wider rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:shadow-[0_0_30px_rgba(0,229,255,0.25)] transition-all duration-300"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            View Projects
            <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>

        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group px-8 py-3.5 bg-transparent border border-white/10 text-gray-300 font-exo font-semibold text-sm tracking-wider rounded-xl hover:border-cyan-400/50 hover:bg-cyan-500/5 hover:text-cyan-400 transition-all duration-300"
        >
          <span className="flex items-center justify-center gap-2">
            Get in Touch
            <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export { ProfileVisual, HeroContent };
