import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BsStack,
  BsLightningChargeFill,
  BsArrowRight,
} from "react-icons/bs";
import { FaGlobeAmericas, FaDatabase } from "react-icons/fa";
import {
  SiTailwindcss,
  SiReact,
  SiFirebase,
  SiJavascript,
} from "react-icons/si";
import { HiMail } from "react-icons/hi";
import MarqueItem from "./MarqueItem";
import AudioCard from "./AudioCard";

const CARD_VARIANTS = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

function BentoGrid() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 pb-20">
      {/* 1. ARSENAL (Tech Stack) - Large 2x1 */}
      <motion.div
        variants={CARD_VARIANTS}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="col-span-1 md:col-span-2 p-6 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden group flex flex-col justify-between"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.05)_0%,transparent_50%)]"></div>
        <div className="relative z-10 flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <BsStack size={20} />
            </div>
            <h3 className="font-orbitron font-bold text-white tracking-widest text-sm uppercase">
              Mark-85 Arsenal
            </h3>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="text-[10px] font-orbitron text-cyan-400 tracking-tighter uppercase">
              Fully Operational
            </span>
          </div>
        </div>
        <div className="relative z-10 flex-grow py-4">
          <MarqueItem />
        </div>
        <div className="relative z-10 mt-4 flex items-center gap-4">
          <div className="h-[1px] flex-grow bg-gradient-to-r from-cyan-500/20 to-transparent"></div>
          <p className="text-[10px] font-rajdhani text-gray-500 tracking-[0.3em] uppercase">
            Tech Stack Overview
          </p>
        </div>
      </motion.div>

      {/* 2. IRON MAN - 1x1 */}
      <motion.div
        variants={CARD_VARIANTS}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="col-span-1 md:col-span-1 min-h-[240px] rounded-2xl relative group overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(255,215,0,0.05)]"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
        <img
          src="https://images.hdqwalls.com/wallpapers/iron-man-the-power-of-a-rising-hero-zx.jpg"
          alt="Iron Man"
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          className="absolute inset-0 w-full h-full object-cover filter contrast-125 brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute bottom-4 left-4 z-20 pr-4">
          <div className="w-8 h-[2px] bg-yellow-400 mb-2"></div>
          <p className="font-rajdhani font-bold text-white text-lg leading-tight uppercase italic tracking-wide">
            "I am Iron Man."
          </p>
          <p className="text-yellow-400 text-[9px] font-orbitron tracking-[0.2em] mt-1 font-bold">
            TONY STARK
          </p>
        </div>
      </motion.div>

      {/* 3. LOCATION & TIME - 1x1 */}
      <motion.div
        variants={CARD_VARIANTS}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="col-span-1 md:col-span-1 p-6 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden group flex flex-col justify-between"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <FaGlobeAmericas
            size={80}
            className="group-hover:rotate-45 transition-transform duration-1000"
          />
        </div>
        <div>
          <p className="text-cyan-400 font-orbitron text-[10px] tracking-[0.2em] uppercase mb-1">
            Global Position
          </p>
          <h4 className="text-white font-rajdhani font-bold text-xl uppercase tracking-wider">
            Earth // India
          </h4>
        </div>
        <div className="mt-8">
          <p className="text-gray-500 font-orbitron text-[10px] tracking-[0.2em] uppercase mb-1">
            System Clock
          </p>
          <h2 className=" text-white font-orbitron font-bold text-2xl sm:text-3xl md:text-4xl tracking-[0.08em] tabular-nums leading-none whitespace-nowrap">
            {currentTime}
          </h2>
        </div>
      </motion.div>

      {/* 4. THANOS - 1x1 */}
      <motion.div
        variants={CARD_VARIANTS}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="col-span-1 md:col-span-1 min-h-[240px] rounded-2xl relative group overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.05)]"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
        <img
          src="https://images.hdqwalls.com/wallpapers/thanos-balance-of-the-universe-ex.jpg"
          alt="Thanos"
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
        />
        <div className="absolute bottom-4 right-4 z-20 text-right pl-4">
          <div className="w-8 h-[2px] bg-purple-500 mb-2 ml-auto"></div>
          <p className="font-rajdhani font-bold text-white text-lg leading-tight uppercase italic tracking-wide">
            "I am inevitable."
          </p>
          <p className="text-purple-400 text-[9px] font-orbitron tracking-[0.2em] mt-1 font-bold">
            THANOS
          </p>
        </div>
      </motion.div>

      {/* 5. FEATURED PROJECT - 2x1 */}
      <motion.div
        variants={CARD_VARIANTS}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="col-span-1 md:col-span-2 p-8 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden group flex flex-col justify-between min-h-[300px]"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[9px] font-orbitron tracking-widest uppercase font-bold">
              Project: MENUMATE Hub
            </span>
            <div className="p-2 rounded-full bg-yellow-400/10 text-yellow-400">
              <BsLightningChargeFill size={14} className="animate-pulse" />
            </div>
          </div>
          <h2 className="text-3xl font-orbitron font-bold text-white mb-3 tracking-tighter group-hover:text-cyan-400 transition-colors">
            MenuMate Ecosystem
          </h2>
          <p className="text-gray-400 font-rajdhani md:text-lg max-w-md leading-relaxed">
            A comprehensive student engagement platform currently serving real-time 
            hostel dining menus, blogs, and notifications for active student communities.
          </p>
        </div>
        <div className="relative z-10 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <SiReact className="text-blue-400" title="React" size={24} />
            <SiTailwindcss className="text-cyan-400" title="Tailwind" size={24} />
            <SiFirebase className="text-yellow-500" title="Firebase" size={24} />
            <SiJavascript className="text-yellow-400" title="Recoil/State" size={24} />
          </div>
          <Link to="/projects">
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-cyan-400 font-orbitron text-[10px] font-bold uppercase tracking-[0.2em] border-b border-cyan-400/30 pb-1"
            >
              Access Project Vault <BsArrowRight />
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* 6. CURRENTLY UPGRADING (Learning) - 1x1 */}
      <motion.div
        variants={CARD_VARIANTS}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="col-span-1 md:col-span-1 p-6 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden group"
      >
        <div className="absolute bottom-0 right-0 p-4 opacity-5">
          <FaDatabase size={80} />
        </div>
        <p className="text-cyan-400 font-orbitron text-[10px] tracking-[0.2em] uppercase mb-4">
          Neural Upgrades
        </p>
        <h3 className="text-white font-rajdhani font-bold text-xl uppercase mb-2">
          System Architecture
        </h3>
        <p className="text-gray-500 font-rajdhani text-sm leading-relaxed mb-6">
          Mastering distributed systems and edge computing protocols.
        </p>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "85%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.5)]"
          ></motion.div>
        </div>
        <div className="mt-2 flex justify-between items-center text-[9px] font-orbitron text-cyan-500/80 uppercase">
          <span>Processing</span>
          <span>85% Completed</span>
        </div>
      </motion.div>

      {/* 7. SPOTIFY/VIBE - 1x1 */}
      <AudioCard />

      {/* 8. INITIATE CONTACT - Large 2x1 */}
      <motion.div
        variants={CARD_VARIANTS}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="col-span-1 md:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 border border-white/10 relative overflow-hidden group flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
        <div className="relative z-10 max-w-md text-center md:text-left">
          <h3 className="font-orbitron font-bold text-3xl text-white mb-3 tracking-tighter uppercase italic">
            Secure Uplink
          </h3>
          <p className="text-gray-400 font-rajdhani text-base leading-relaxed">
            Establishing a direct communication channel for tactical alliances
            and project briefings. All transmissions are encrypted.
          </p>
        </div>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <motion.a
            href="mailto:mohdfaizofficial487@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-cyan-500 text-black font-orbitron font-bold text-xs tracking-[0.2em] rounded-lg shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_35px_rgba(0,229,255,0.5)] transition-all uppercase"
          >
            Send Signal <HiMail size={24} />
          </motion.a>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[9px] font-orbitron text-gray-500 tracking-widest uppercase">
              Link Stable
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default React.memo(BentoGrid);
