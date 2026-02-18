import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import StarkLogo from "./StarkLogo";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Playground", path: "/playground" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => setScrolled(window.scrollY > 20), []);
  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  const navItems = NAV_ITEMS;
  const isActive = useCallback((path) => location.pathname === path, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 overflow-x-clip ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
          <div className="flex items-center justify-between h-16 sm:h-[68px] md:h-20">
            {/* Logo - Arc Reactor Style */}
            <StarkLogo />

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
              {navItems.map((item, index) => {
                const active = isActive(item.path);

                return (
                  <Link
                    key={index}
                    to={item.path}
                    className="relative group px-6 py-2.5"
                  >
                    {/* ACTIVE HUD CONTAINER */}
                    {active && (
                      <motion.div
                        layoutId="activeNav"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                        }}
                        className="
            absolute inset-0 
            rounded-lg 
            border border-cyan-400/30
            bg-cyan-400/5
            backdrop-blur-md
            shadow-[0_0_12px_rgba(0,229,255,0.15)]
            overflow-hidden
            "
                      >
                        {/* Scan Line */}
                        <motion.div
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="
              absolute inset-y-0 
              w-1/2
              bg-gradient-to-r 
              from-transparent 
              via-cyan-400/20 
              to-transparent
              blur-sm
              "
                        />
                      </motion.div>
                    )}

                    {/* TEXT */}
                    <span
                      className={`
          relative z-10 
          text-[13px]
          font-orbitron
          tracking-[0.18em]
          uppercase
          transition-all duration-300
          
          ${
            active ? "text-cyan-300" : "text-gray-500 group-hover:text-cyan-200"
          }
          `}
                    >
                      {item.name}
                    </span>

                    {/* HOVER REACTOR LINE */}
                    {!active && (
                      <span
                        className="
            absolute left-1/2 -translate-x-1/2 bottom-1
            h-[1px] w-0
            bg-gradient-to-r 
            from-transparent
            via-cyan-400
            to-transparent
            transition-all duration-400
            group-hover:w-4/5
            opacity-70
            "
                      />
                    )}

                    {/* MICRO GLOW DOT */}
                    {!active && (
                      <span
                        className="
            absolute -top-1 left-1/2 -translate-x-1/2
            w-1 h-1
            rounded-full
            bg-cyan-400
            opacity-0
            group-hover:opacity-80
            transition-opacity duration-300
            shadow-[0_0_6px_rgba(0,229,255,0.9)]
            "
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Empty div to balance layout */}
            <div className="hidden md:block w-[120px] lg:w-[160px] xl:w-[200px] 2xl:w-[240px] flex-shrink-0"></div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center flex-shrink-0"
            >
              {isOpen ? (
                <HiX className="text-2xl" />
              ) : (
                <HiMenu className="text-2xl" />
              )}
            </motion.button>
          </div>
        </div>

        {/* JARVIS Scan Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
fixed inset-0 z-[100] md:hidden
bg-[#06080f]/98
backdrop-blur-2xl
flex flex-col
overflow-y-auto
overflow-x-hidden
pt-safe
pb-safe
"

          >
            {/* Close Button */}
            <div className="absolute top-4 right-4 sm:top-5 sm:right-6">
              <button
                onClick={() => setIsOpen(false)}
                className="
          relative
          w-10 h-10
          flex items-center justify-center
          rounded-lg
          border border-cyan-400/20
          text-gray-400
          hover:text-cyan-300
          hover:border-cyan-400/40
          transition-all duration-300
          "
              >
                {/* subtle glow */}
                <div className="absolute inset-0 rounded-lg bg-cyan-400/10 opacity-0 hover:opacity-100 transition-opacity" />
                <HiX className="text-xl relative z-10" />
              </button>
            </div>

            {/* Navigation Center */}
            <div className="flex-1 flex items-center justify-center">
              <nav className="flex flex-col items-center gap-8">
                {navItems.map((item, index) => {
                  const active = isActive(item.path);

                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 40 }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.4,
                      }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="relative group"
                      >
                        {/* Active Reactor Indicator */}
                        {active && (
                          <motion.div
                            layoutId="mobileActive"
                            className="
                      absolute -inset-x-6 -inset-y-3
                      rounded-lg
                      border border-cyan-400/30
                      bg-cyan-400/5
                      shadow-[0_0_20px_rgba(0,229,255,0.15)]
                      "
                          />
                        )}
                        {/* Text */}
                        <span
                          className={`
                    relative z-10
                    font-orbitron
                    text-2xl
                    tracking-[0.25em]
                    uppercase
                    transition-all duration-300
                  
                    ${
                      active
                        ? "text-cyan-300"
                        : "text-gray-500 group-hover:text-cyan-200"
                    }
                    `}
                        >
                          {item.name}
                        </span>
                        {/* Hover Line */}
                        {!active && (
                          <span
                            className="
                      absolute left-1/2 -translate-x-1/2
                      -bottom-2
                      w-0 h-[1px]
                      bg-cyan-400
                      transition-all duration-300
                      group-hover:w-full
                      "
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
            {/* Background Grid */}
            <div
              className="
        absolute inset-0
        bg-[linear-gradient(to_right,#00e5ff_1px,transparent_1px),
        linear-gradient(to_bottom,#00e5ff_1px,transparent_1px)]
        bg-[size:3rem_3rem]
        opacity-[0.03]
        pointer-events-none
        "
            />
            {/* Subtle Reactor Glow */}
            <div
              className="
      absolute inset-0
      bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.08),transparent_60%)]
      pointer-events-none
      "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(NavBar);
