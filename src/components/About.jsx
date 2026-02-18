import React from "react";
import { motion } from "framer-motion";
import {
  BsLightningChargeFill,
  BsCodeSlash,
  BsCpu,
  BsGlobe,
} from "react-icons/bs";
import { FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiGit,
  SiFigma,
  SiReact,
  SiFramer,
  SiMysql,
} from "react-icons/si";
import { HiMail } from "react-icons/hi";
import Footer from "./Footer";

const SKILLS = {
    frontend: [
      { name: "React Intelligence", icon: SiReact, level: 94 },
      { name: "Tailwind UI", icon: SiTailwindcss, level: 96 },
      { name: "Next.js Core", icon: SiNextdotjs, level: 85 },
      { name: "State (Recoil)", icon: SiJavascript, level: 88 },
    ],
    backend: [
      { name: "Firebase Infrastructure", icon: SiFirebase, level: 90 },
      { name: "Python Engine (AI/OpenCV)", icon: FaPython, level: 82 },
      { name: "Node.js Logic", icon: FaNodeJs, level: 78 },
      { name: "MySQL Architectures", icon: SiMysql, level: 75 },
    ],
    tools: [
      { name: "Git Control", icon: SiGit },
      { name: "Figma Interface", icon: SiFigma },
      { name: "Motion Architecture", icon: SiFramer },
    ],
};

const MISSION_LOG = [
  {
    year: "2021",
    mission: "SYSTEM INITIALIZATION",
    description:
      "Built Python automation tools including WhatsApp Messenger (Tkinter) and established core programming and frontend fundamentals.",
    status: "complete",
  },
  {
    year: "2022",
    mission: "FRONTEND FOUNDATION",
    description:
      "Developed Personal Portfolio and NoteSpark while mastering HTML, CSS, and JavaScript, focusing on UI structure and logic building.",
    status: "complete",
  },
  {
    year: "2023",
    mission: "STUDENT PLATFORM ENGINEERING",
    description:
      "Created MenuMate and evolved it into a modern React + Tailwind platform with improved UX and real student adoption.",
    status: "complete",
  },
  {
    year: "2024",
    mission: "FULL-STACK ARCHITECTURE",
    description:
      "Transformed MenuMate into a full-stack ecosystem using Firebase and built FileNest, an automated academic file management system.",
    status: "complete",
  },
  {
    year: "2025",
    mission: "AI & IMMERSIVE SYSTEMS",
    description:
      "Designed DharmaVerse virtual monastery platform and architected AI-powered civic intelligence systems using computer vision and predictive analytics.",
    status: "active",
  },
];

const TACTICAL_STATS = [
    { label: "Deployment Count", value: "12+", icon: BsCodeSlash },
    { label: "Arsenal Modules", value: "18+", icon: BsCpu },
    { label: "Experience (Years)", value: "03", icon: BsLightningChargeFill },
    { label: "Current Sector", value: "IN", icon: BsGlobe },
];

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const ITEM_VARIANTS = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <div className="w-full min-h-screen pt-24 md:pt-28 lg:pt-32 pb-20 px-6 md:px-12 lg:px-16 relative overflow-hidden bg-[#0a0a0a]">
      {/* HUD Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/2 -translate-y-1/2"></div>{" "}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Personnel Dossier Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-white/10 pb-8 md:pb-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-md">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span>
                <span className="text-[9px] md:text-[10px] font-orbitron font-bold text-cyan-400 tracking-[0.2em] md:tracking-[0.3em] uppercase">
                  Security Level: Level-04 // M.O
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black font-orbitron text-white tracking-tighter leading-none">
                PERSONNEL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  DOSSIER
                </span>
              </h1>
            </div>
            <div className="flex flex-col items-start md:items-end text-left md:text-right space-y-1 md:space-y-2">
              <span className="text-[10px] font-orbitron text-gray-500 tracking-[0.2em] uppercase">
                Identification Code
              </span>
              <span className="text-xl md:text-2xl font-orbitron font-bold text-white tracking-widest text-cyan-400">
                MF-85-VANGUARD
              </span>
            </div>
          </div>
        </motion.div>{" "}
        {/* Tactical Stats Matrix */}
        <motion.div
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {TACTICAL_STATS.map((stat) => {
            const StatIcon = stat.icon;
            return (
            <motion.div
              key={stat.label}
              variants={ITEM_VARIANTS}
              className="relative group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
                <StatIcon size={40} />
              </div>
              <p className="text-[9px] font-orbitron text-gray-500 tracking-[0.2em] uppercase mb-1">
                {stat.label}
              </p>
              <h3 className="text-3xl font-orbitron font-bold text-white group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </h3>
            </motion.div>
            );
          })}
        </motion.div>{" "}
        {/* Main Biography & Skill Matrix Overlay */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          {/* Left - Identity Core */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-cyan-500"></div>
                <h2 className="text-2xl font-orbitron font-bold text-white tracking-widest uppercase italic">
                  Identity Core
                </h2>
              </div>
              <p className="text-xl font-rajdhani text-gray-300 leading-relaxed max-w-2xl italic">
                "Engineering intelligent digital landscapes through high-performance
                code, AI integration, and tactical frontend solutions. Specialized in
                React, Firebase, and Python automation."
              </p>
              <div className="space-y-4 text-gray-400 font-rajdhani text-lg leading-relaxed text-justify">
                <p>
                  As a Front-End Engineer based in India, I operate at the
                  intersection of aesthetic precision and technical excellence.
                  My methodology centers on building scalable, reliable, and
                  immersive web interfaces that push the boundaries of current
                  technological capabilities.
                </p>
                <p>
                  Following the{" "}
                  <span className="text-cyan-400">Mark-85 Standard</span>, all
                  projects are developed with strict adherence to performance
                  optimization, component isolation, and clean architecture
                  protocols.
                </p>
              </div>
            </div>{" "}
            {/* Tactical Tools Badge Selection */}
            <div className="pt-8">
              <h3 className="text-[10px] font-orbitron text-gray-500 tracking-[0.25em] uppercase mb-6">
                Secondary Arsenal
              </h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.tools.map((tool, index) => {
                  const ToolIcon = tool.icon;
                  return (
                  <div
                    key={tool.name}
                    className="px-5 py-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 flex items-center gap-3 transition-all"
                  >
                    <ToolIcon className="text-cyan-400" size={18} />
                    <span className="text-xs font-orbitron font-bold text-gray-400">
                      {tool.name}
                    </span>
                  </div>
                  );
                })}
              </div>
            </div>
          </motion.div>{" "}
          {/* Right - Skill Analysis HUD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-white/[0.03] border border-white/10 relative overflow-hidden"
          >
            {/* Skill HUD Scanline */}
            <motion.div
              animate={{ y: [0, 400, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-500/20 blur-sm pointer-events-none"
            >
            </motion.div>{" "}

            <div className="relative z-10 space-y-12">
              <section className="space-y-8">
                {" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <h3 className="font-orbitron text-[11px] sm:text-xs text-cyan-400 tracking-[0.25em] font-semibold uppercase">
                    Frontend Proficiency
                  </h3>{" "}
                  <span className="font-orbitron text-[9px] sm:text-[10px] text-cyan-400/70 tracking-[0.18em] uppercase tabular-nums">
                    HUD Status: Online
                  </span>{" "}
                </div>
                {/* Skills */}
                <div className="space-y-6">
                  {" "}
                  {SKILLS.frontend.map((skill, index) => (
                    <div key={index} className="space-y-2.5">
                      {" "}
                      {/* Label */}
                      <div className="flex justify-between items-center font-orbitron text-[9px] sm:text-[10px] text-gray-400 tracking-[0.18em] uppercase tabular-nums">
                        {" "}
                        <span className="text-gray-400">{skill.name}</span>{" "}
                        <span className="text-cyan-400 font-medium">
                          {skill.level}%
                        </span>{" "}
                      </div>
                      {/* Progress Bar */}
                      <div className="relative h-[4px] sm:h-[5px] w-full bg-white/[0.04] rounded-full overflow-hidden">
                        {" "}
                        {/* Fill */}
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                          viewport={{ once: true, amount: 0.1 }}
                          transition={{
                            duration: 1.5,
                            delay: 0.5 + index * 0.1,
                            ease: "circOut",
                          }}
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(0,229,255,0.4)] z-10"
                        />
                        {/* subtle scan overlay */}
                        <motion.div
                          animate={{ x: ["-120%", "120%"] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 pointer-events-none opacity-40">
                          <div className="h-full w-1/4 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent skew-x-[20deg] blur-[1px]"/>
                        </motion.div>{" "}
                      </div>{" "}
                    </div>
                  ))}{" "}
                </div>
              </section>

              {/* BACKEND */}
              <section className="space-y-8">
                {" "}
                <h3
                  className="font-orbitron text-[11px] sm:text-xs text-blue-400 tracking-[0.25em] font-semibold uppercase"
                >
                  Backend & Node Processing
                </h3>
                <div className="space-y-6">
                  {" "}
                  {SKILLS.backend.map((skill, index) => (
                    <div key={index} className="space-y-2.5">
                      {" "}
                      {/* Label */}
                      <div className="flex justify-between items-center font-orbitron text-[9px] sm:text-[10px] text-gray-400 tracking-[0.18em] uppercase tabular-nums">
                        {" "}
                        <span>{skill.name}</span>{" "}
                        <span className="text-blue-400 font-medium">
                          {skill.level}%
                        </span>{" "}
                      </div>
                      {/* Progress */}
                      <div className="relative h-[4px] sm:h-[5px] bg-white/[0.04] rounded-full overflow-hidden">
                        {" "}
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                          viewport={{ once: true, amount: 0.1 }}
                          transition={{
                            duration: 1.5,
                            delay: 0.7 + index * 0.1,
                            ease: "circOut",
                          }}
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_12px_rgba(59,130,246,0.4)] z-10"
                        />
                        {/* scanline */}
                        <motion.div
                          animate={{ x: ["-120%", "120%"] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 pointer-events-none opacity-40">
                          <div
                            className="h-full w-1/4 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent skew-x-[20deg] blur-[1px]"
                          />
                        </motion.div>{" "}
                      </div>{" "}
                    </div>
                  ))}{" "}
                </div>
              </section>
            </div>{" "}
          </motion.div>
        </div>{" "}
        {/* Mission History Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5"
        >
          <div className="flex items-center gap-4 mb-16">
            <div className="h-[2px] w-12 bg-cyan-500"></div>
            <h2 className="text-2xl font-orbitron font-bold text-white tracking-widest uppercase italic">
              Mission History
            </h2>
          </div>{" "}
          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0">
            {/* Desktop Vertical Dash Line */}
            <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent"></div>{" "}
            <div className="space-y-16">
              {MISSION_LOG.map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content Card */}
                  <div className="flex-1 md:w-1/2 w-full">
                    <div
                      className={`p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/20 transition-all text-left ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                      >
                        <span className="text-[10px] font-orbitron text-cyan-500 font-bold tracking-[0.2em]">
                          {log.year}
                        </span>
                        <div
                          className={`px-2 py-0.5 rounded text-[8px] font-orbitron font-bold uppercase transition-colors ${log.status === "active" ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-gray-800 text-gray-500 border border-white/5"}`}
                        >
                          {log.status}
                        </div>
                      </div>
                      <h4 className="text-xl font-orbitron font-bold text-white mb-3 tracking-wide">
                        {log.mission}
                      </h4>
                      <p className="text-gray-400 font-rajdhani text-base leading-relaxed">
                        {log.description}
                      </p>
                    </div>
                  </div>{" "}
                  {/* Center Node */}
                  <div className="absolute top-8 left-0 -translate-x-[22px] md:relative md:top-0 md:left-auto md:translate-x-0 z-20">
                    <div className="w-4 h-4 rounded-full bg-black border-2 border-cyan-500 shadow-[0_0_15px_rgba(0,229,255,0.6)]">
                      {log.status === "active" && (
                        <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-40"></div>
                      )}
                    </div>
                  </div>{" "}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>{" "}
        {/* Bottom Dossier Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 border border-white/10 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
          <div className="relative z-10 space-y-4 max-w-xl">
            <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-white tracking-tighter uppercase italic italic">
              Request <span className="text-cyan-400">Collaboration</span>
            </h3>
            <p className="text-gray-400 font-rajdhani text-lg leading-relaxed">
              Personnel is available for tactical deployment on high-priority
              development cycles. Synchronize communication to discuss mission
              objectives.
            </p>
          </div>{" "}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <motion.a
              href="mailto:mohdfaizofficial487@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-cyan-500 text-black font-orbitron font-bold text-xs tracking-[0.2em] rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_45px_rgba(0,229,255,0.5)] transition-all uppercase flex items-center gap-3"
            >
              Establish Link <HiMail size={20} />
            </motion.a>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-orbitron text-gray-500 tracking-[0.2em] uppercase font-bold">
                Encrypted Channel Established
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
