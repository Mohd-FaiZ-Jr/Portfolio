import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-[#0a0a0a] flex flex-col">
      {/* Background Grid - Subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.15] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative w-full flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] pt-16 md:pt-20">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-20 xl:px-28 2xl:px-32 relative z-20 pt-8 sm:pt-12 md:pt-16 lg:pt-0 pb-8 lg:pb-0 min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-5rem)] overflow-hidden">
          <div className="max-w-3xl space-y-8 md:space-y-10">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-950/10 backdrop-blur-md self-start"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
              </span>
              <span className="text-cyan-400/90 text-[10px] sm:text-xs font-orbitron tracking-[0.2em] font-semibold uppercase">
                Available for Projects
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3 sm:space-y-5"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black font-orbitron text-white tracking-tighter leading-[1.05]">
                MOHAMMAD
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-blue-500 animate-gradient-slow pb-2 block">
                  FAIZ
                </span>
              </h1>

              <div className="flex items-center gap-4 sm:gap-6">
                <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                <p className="text-lg sm:text-xl md:text-2xl font-rajdhani font-semibold text-gray-400 tracking-[0.2em] uppercase">
                  Front-End Engineer
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-400 font-rajdhani leading-relaxed max-w-xl"
            >
              Building modern, responsive web applications with a focus on clean code
              and seamless user experiences. Specialized in developing functional
              interfaces using{" "}
              <span className="text-cyan-400 font-semibold">React</span>,{" "}
              <span className="text-cyan-400 font-semibold">Recoil</span>, and{" "}
              <span className="text-cyan-400 font-semibold">Firebase</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{
                    y: -2,
                    boxShadow: "0 0 30px rgba(6,182,212,0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white whitespace-nowrap font-orbitron font-bold text-xs tracking-[0.2em] rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  View Projects
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform text-lg" />
                </motion.button>
              </Link>
              <motion.a
                href="mailto:mohdfaizofficial487@gmail.com"
                whileHover={{
                  y: -2,
                  borderColor: "rgba(6,182,212,0.5)",
                  backgroundColor: "rgba(6,182,212,0.05)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-gray-300 whitespace-nowrap font-orbitron font-bold text-xs tracking-[0.2em] rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                Contact Me
                <HiMail className="group-hover:scale-110 transition-transform text-lg text-cyan-400" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-6 pt-6 sm:pt-8"
            >
              <span className="text-[10px] font-orbitron text-gray-600 tracking-[0.3em] uppercase">
                Connect
              </span>
              <div className="flex gap-4">
                {[
                  { icon: BsGithub, href: "https://github.com/Mohd-FaiZ-Jr" },
                  {
                    icon: BsLinkedin,
                    href: "https://www.linkedin.com/in/mohammad-faiz-developer/",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, color: "#22d3ee" }}
                    className="w-11 h-11 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 bg-white/[0.02] hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen lg:h-auto lg:absolute lg:top-0 lg:right-0 lg:bottom-0 overflow-hidden">
          {/* Desktop Diagonal Cut */}
          <div
            className="absolute inset-0 z-10 hidden lg:block bg-[#0a0a0a]"
            style={{ clipPath: "polygon(0 0, 15% 0, 0 100%)" }}
          ></div>

          {/* Desktop Diagonal Cut Wrapper for Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute inset-0 lg:ml-[1%] lg:pl-0"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)" }}
          >
            <div className="relative w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-black">
              <img
                src="/mohammad-faiz.png"
                alt="Mohammad Faiz"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="w-full h-full object-cover object-center filter grayscale-[30%] contrast-[1.15] opacity-90 hover:grayscale-0 transition-all duration-1000"
              />

              {/* Advanced Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-cyan-900/10 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent"></div>

              {/* Tech Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20"></div>

              {/* Decorative Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-12 right-12 z-20 hidden md:flex flex-col items-end gap-1"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-orbitron text-cyan-400/80 tracking-widest uppercase font-bold">
                    System Status
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-cyan-500 rounded-sm animate-pulse"></div>
                    <div className="w-1 h-4 bg-cyan-500/50 rounded-sm"></div>
                    <div className="w-1 h-4 bg-cyan-500/30 rounded-sm"></div>
                  </div>
                </div>
                <div className="h-[1px] w-32 bg-gradient-to-l from-cyan-500 to-transparent"></div>
                <span className="text-[9px] font-rajdhani text-gray-400 uppercase tracking-wider">
                  Online // V 2.4.0
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile Gradient Overlay for better text readability if stacks change */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent lg:hidden pointer-events-none"></div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex-col items-center gap-4 pointer-events-none"
      >
        {/* Text */}
        <span className="font-orbitron text-[9px] text-gray-500/80 tracking-[0.35em] uppercase select-none">
          Initialize Scroll
        </span>
        {/* Line */}
        <div className="relative w-[1px] h-20 bg-gradient-to-b from-cyan-400/40 via-cyan-400/10 to-transparent overflow-hidden">
          {/* Moving Beam */}
          <motion.div
            animate={{
              y: ["-40%", "140%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="absolute left-1/2 -translate-x-1/2 w-[2px] h-10 bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-[0.5px] shadow-[0_0_8px_rgba(0,229,255,0.6)]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Section;
