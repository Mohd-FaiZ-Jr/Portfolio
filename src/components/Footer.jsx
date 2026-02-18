import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
import StarkLogo from "./StarkLogo";

const NAV_LINKS = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Playground", path: "/playground" },
];

const SOCIAL_LINKS = [
    {
      icon: BsGithub,
      href: "https://github.com/Mohd-FaiZ-Jr",
      label: "GitHub",
      color: "hover:border-white",
    },
    {
      icon: BsLinkedin,
      href: "https://www.linkedin.com/in/mohammad-faiz-developer/",
      label: "LinkedIn",
      color: "hover:border-[#0077b5]",
    },
    {
      icon: HiMail,
      href: "mailto:mohdfaizofficial487@gmail.com",
      label: "Email",
      color: "hover:border-cyan-400",
    },
  ];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-32 relative">
      {/* Top Divider with Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>

      <div className="pt-16 pb-8 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Left - Branding */}
            <div className="space-y-4">
              <StarkLogo />
              {/* Stark Philosophy Badge */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-cyan-900/10 to-transparent border border-cyan-500/10 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-[2px] h-full bg-cyan-400/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
                 {/* <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                
                <div className="flex items-center gap-2 mb-2">
                  {/* <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse"></div> */}
                  <h5 className="font-orbitron text-[10px] text-cyan-300 tracking-widest uppercase">
                    Engineering Philosophy
                  </h5>
                </div>
                <p className="font-rajdhani text-xs text-gray-400 leading-relaxed italic">
                  "Part of the journey is the end. What matters is what we build along the way."
                </p>
              </div>
            </div>

            {/* Center - Quick Links */}
            <div className="space-y-4">
              <h4 className="font-orbitron text-xs text-gray-400 tracking-[0.2em] uppercase mb-4">
                Navigation
              </h4>
              <nav className="flex flex-col space-y-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-gray-500 hover:text-cyan-400 font-rajdhani text-sm transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right - Social & Status */}
            <div className="space-y-6">
              <h4 className="font-orbitron text-xs text-gray-400 tracking-[0.2em] uppercase">
                Connect
              </h4>

              {/* Social Icons */}
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2, scale: 1.05 }}
                    className={`w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white ${social.color} hover:bg-cyan-500/5 transition-all duration-300`}
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <span className="text-xs text-gray-500 font-rajdhani">
                  System Online • Available for Projects
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 text-[10px] text-gray-600 font-orbitron tracking-widest uppercase">
              <span>© {currentYear} Mohammad Faiz</span>
              <span className="hidden md:inline text-gray-800">•</span>
              <span className="text-gray-700">All Rights Reserved</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-orbitron text-gray-600 tracking-widest uppercase">
                Powered by
              </span>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                <span className="text-[10px] font-orbitron text-cyan-400 tracking-wider">
                  REACT
                </span>
                <span className="text-gray-700">×</span>
                <span className="text-[10px] font-orbitron text-blue-400 tracking-wider">
                  VITE
                </span>
              </div>
            </div>
          </div>

          {/* JARVIS-style Scan Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
          />
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
