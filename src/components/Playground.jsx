import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsLightningChargeFill,
  BsCpuFill,
  BsShieldShaded,
  BsGearFill,
} from "react-icons/bs";
import { FaRobot, FaAtom } from "react-icons/fa";

const EXPERIMENTS = [
    {
      id: "hud",
      title: "HUD OVERLAY",
      icon: BsShieldShaded,
      description: "Toggle JARVIS tactical head-up display interface",
      color: "cyan",
      interactive: true,
    },
    {
      id: "glitch",
      title: "NEURAL LINK",
      icon: BsLightningChargeFill,
      description: "Synchronize consciousness with Stark systems",
      color: "purple",
      interactive: true,
    },
    {
      id: "nanotech",
      title: "NANOTECH SIM",
      icon: FaAtom,
      description: "Visualize Mark-85 nanotech assembly protocols",
      color: "blue",
      interactive: true,
    },
    {
      id: "armor",
      title: "ARMOR COATING",
      icon: BsGearFill,
      description: "Select armor coloration and material properties",
      color: "pink",
      interactive: true,
    },
  ];

const CODE_SNIPPETS = [
    {
      title: "JARVIS Protocol",
      language: "javascript",
      code: `const useJarvis = () => {
  const [protocol, setProtocol] = useState('Standby');
  
  useEffect(() => {
    console.log("Welcome home, Sir.");
    setProtocol('Active');
  }, []);
  
  return { protocol };
};`,
    },
    {
      title: "Suit Diagnostics",
      language: "typescript",
      code: `interface SuitSystems {
  powerSource: 'Arc Reactor';
  integrity: number;
  flightReady: boolean;
}

const mark85: SuitSystems = {
  powerSource: 'Arc Reactor',
  integrity: 100,
  flightReady: true
};`,
    },
    {
      title: "HUD Interface",
      language: "css",
      code: `.hud-display {
  border: 1px solid rgba(0, 229, 255, 0.4);
  background: radial-gradient(
    circle, 
    rgba(0, 229, 255, 0.1), 
    transparent
  );
  backdrop-filter: blur(8px);
}`,
    },
  ];

const STARK_INTEL = [
    "🤖 JARVIS stands for 'Just A Rather Very Intelligent System'",
    "💡 The Arc Reactor was originally designed by Howard Stark",
    "🚀 The Mark I suit was built in a cave with a box of scraps!",
    "⚛️ Vibranium is the key element in Captain America's shield",
    "🦾 Tony Stark's first suit relied on a localized repulsor system",
    "🧬 Nanotechnology allows the Mark-85 to be stored in a chest unit",
  ];

const ARMOR_THEMES = {
    cyan: { primary: "#00e5ff", secondary: "#00bcd4", name: "STARK CLASSIC" },
    purple: { primary: "#7c4dff", secondary: "#651fff", name: "INFINITY CORE" },
    gold: { primary: "#ffd700", secondary: "#daa520", name: "AVENGER GOLD" },
    red: { primary: "#ff3d00", secondary: "#dd2c00", name: "HULKBUSTER" },
  };

const Playground = () => {
  const [activeExperiment, setActiveExperiment] = useState(null);
  const [hudActive, setHudActive] = useState(false);
  const [glitchText, setGlitchText] = useState("JARVIS");
  const [nanoLevel, setNanoLevel] = useState(20);
  const [markLevel, setMarkLevel] = useState("cyan");
  const [intelIndex, setIntelIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIntelIndex((prev) => (prev + 1) % STARK_INTEL.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const onExperimentClick = useCallback((id) => {
    setActiveExperiment((prev) => (prev === id ? null : id));
    if (id === "hud") setHudActive((prev) => !prev);
    else if (id === "glitch") {
      const texts = ["JARVIS", "STARK", "AVENGER", "IRON MAN", "PROTOCOL"];
      setGlitchText(texts[Math.floor(Math.random() * texts.length)]);
    }
  }, []);

  return (
    <div className="w-full min-h-screen pt-24 md:pt-28 lg:pt-32 pb-20 px-6 md:px-12 lg:px-16 relative overflow-hidden bg-[#0a0a0a]">
      {/* HUD Scan Line Overlay */}
      {hudActive && (
        <div className="fixed inset-0 pointer-events-none z-40 border-[20px] border-cyan-500/10">
          <motion.div
            animate={{ y: [0, window.innerHeight, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="h-[2px] w-full bg-cyan-400/30 blur-sm"
          />
          <div className="absolute top-10 left-10 flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-cyan-500 animate-pulse"></div>
              <span className="text-[10px] font-orbitron text-cyan-500">
                SYS_READY
              </span>
            </div>
            <div className="text-[10px] font-mono text-cyan-500/50">
              LNG: 40.7128° N
            </div>
            <div className="text-[10px] font-mono text-cyan-500/50">
              LAT: 74.0060° W
            </div>
          </div>
        </div>
      )}

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm mb-6">
            <BsCpuFill className="text-cyan-400 animate-spin-slow" />
            <span className="text-cyan-400/80 text-[10px] font-orbitron tracking-[0.25em] font-bold uppercase">
              STARK LABS // R&D DIVISION
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black font-orbitron text-white tracking-tighter leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
              {glitchText}
            </span>
          </h1>

          <p className="text-gray-400 font-rajdhani text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Authorized Personnel Only. Explore experimental suit components,
            JARVIS sub-routines, and nanotechnology assembly.
          </p>
        </motion.div>

        {/* Experimental Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {EXPERIMENTS.map((exp, index) => {
            const ExpIcon = exp.icon;
            return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => onExperimentClick(exp.id)}
              className={`p-8 rounded-2xl border cursor-pointer group relative overflow-hidden transition-all duration-300 ${
                activeExperiment === exp.id
                  ? "bg-cyan-500/10 border-cyan-500/40 shadow-[0_0_30px_rgba(0,229,255,0.15)]"
                  : "bg-white/[0.02] border-white/5 hover:border-white/20"
              }`}
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-${exp.color}-500/10 text-${exp.color}-400 group-hover:scale-110 transition-transform`}
                  >
                    <ExpIcon size={24} />
                  </div>
                  <h3 className="font-orbitron font-bold text-lg text-white mb-2 tracking-wide uppercase">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-rajdhani text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {activeExperiment === exp.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-cyan-400 font-orbitron font-bold tracking-widest">
                      PROTOCOL_ACTIVE
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
            );
          })}
        </div>

        {/* Interactive HUD Elements */}
        <AnimatePresence>
          {activeExperiment === "nanotech" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-10 rounded-3xl bg-white/[0.02] border border-white/10 mb-20 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-10">
                <h3 className="font-orbitron font-bold text-xl text-white tracking-widest uppercase">
                  Nanotech Assembly Grid
                </h3>
                <span className="text-[10px] font-orbitron text-cyan-400">
                  Mark-85 Standard
                </span>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between text-[10px] font-orbitron text-gray-500 mb-2 uppercase tracking-widest">
                    <span>Assembly Density</span>
                    <span>{nanoLevel}% Optic Mesh</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    value={nanoLevel}
                    onChange={(e) => setNanoLevel(e.target.value)}
                    className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                </div>
                <div className="grid grid-cols-4 md:grid-cols-10 gap-3">
                  {[...Array(parseInt(nanoLevel))].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: 45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-md"
                    ></motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeExperiment === "armor" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-10 rounded-3xl bg-white/[0.02] border border-white/10 mb-20 relative overflow-hidden"
            >
              <h3 className="font-orbitron font-bold text-xl text-white mb-10 tracking-widest uppercase">
                Armor Specification Hub
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {Object.entries(ARMOR_THEMES).map(([key, theme]) => (
                  <button
                    key={key}
                    onClick={() => setMarkLevel(key)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 bg-white/[0.03] ${
                      markLevel === key
                        ? "border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        : "border-white/5 hover:border-white/20"
                    }`}
                  >
                    <div
                      className="w-full h-24 rounded-xl mb-4 shadow-inner relative overflow-hidden"
                      style={{
                        background: `linear-gradient(to bottom right, ${theme.primary}, ${theme.secondary})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                    </div>
                    <p className="text-[10px] font-orbitron font-bold text-white tracking-widest uppercase">
                      {theme.name}
                    </p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Code Vault */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[2px] w-12 bg-cyan-500"></div>
            <h2 className="text-2xl font-orbitron font-bold text-white tracking-widest uppercase italic">
              Logic Vault
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CODE_SNIPPETS.map((snippet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/5 bg-[#0d0d0d] overflow-hidden group"
              >
                <div className="px-5 py-4 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-orbitron font-bold text-cyan-400 tracking-widest uppercase">
                    {snippet.title}
                  </span>
                  <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">
                    {snippet.language}
                  </span>
                </div>
                <pre className="p-6 text-xs font-mono text-gray-400 overflow-x-auto">
                  <code>{snippet.code}</code>
                </pre>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Intel Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-6 right-6 opacity-20">
            <FaAtom size={40} className="text-cyan-400 animate-spin-slow" />
          </div>
          <h3 className="text-[10px] font-orbitron font-bold text-gray-500 tracking-[0.3em] uppercase mb-4">
            Stark Intelligence Feed
          </h3>
          <AnimatePresence mode="wait">
            <motion.p
              key={intelIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-rajdhani text-white italic"
            >
              {STARK_INTEL[intelIndex]}
            </motion.p>
          </AnimatePresence>
          <div className="flex gap-2 mt-10">
            {STARK_INTEL.map((_, index) => (
              <div
                key={index}
                className={`h-[2px] flex-1 rounded-full transition-all duration-500 ${
                  index === intelIndex
                    ? "bg-cyan-500 shadow-[0_0_8px_rgba(0,229,255,0.8)]"
                    : "bg-gray-800"
                }`}
              ></div>
            ))}
          </div>
        </motion.div>

        {/* Final Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 border border-white/10 relative overflow-hidden group text-center"
        >
          <FaRobot className="text-6xl text-cyan-400 mx-auto mb-6 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
          <h3 className="text-3xl font-orbitron font-bold text-white mb-4 tracking-tighter uppercase italic">
            Next Gen <span className="text-cyan-400">Prototypes</span>
          </h3>
          <p className="text-gray-400 font-rajdhani text-lg leading-relaxed max-w-xl mx-auto mb-10">
            The laboratory is constantly synthesizing new interface protocols
            and logic constructs. Check back for upcoming Mark-series updates.
          </p>
          <div className="flex justify-center items-center gap-6">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-cyan-500/30"></div>
            <div className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping delay-100"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping delay-200"></div>
            </div>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-cyan-500/30"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Playground;
