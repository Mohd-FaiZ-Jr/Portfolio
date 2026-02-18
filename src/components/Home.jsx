import React from "react";
import Section from "./Section";
import BentoGrid from "./BentoGrid";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Section />

      {/* Content Section */}
      <div className="w-full bg-[#0a0a0a] px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Elegant Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative mb-20"
          >
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-500/40 rounded-full"></div>
          </motion.div>

          {/* Bento Grid */}
          <BentoGrid />
        </div>
      </div>
    </>
  );
};

export default Home;
