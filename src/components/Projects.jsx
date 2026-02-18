import React, { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsGithub, BsBoxArrowUpRight, BsArrowRight } from "react-icons/bs";
import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiGooglemaps,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiNextdotjs,
} from "react-icons/si";
import { HiMail, HiX } from "react-icons/hi";

const ICON_MAP = {
  react: SiReact,
  tailwind: SiTailwindcss,
  firebase: SiFirebase,
  python: SiPython,
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  maps: SiGooglemaps,
};

const PROJECTS_DATA = [
  {
    id: 1,
    title: "MENUMATE",
    category: "fullstack",
    description:
      "A full-stack hostel dining and student engagement platform used by real students. Features include mess menu, blogs, contests, explore section, and notifications. Built and continuously improved based on student feedback.",
    image:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&q=80",
    tags: ["React", "Tailwind", "Firebase", "Recoil"],
    icons: ["react", "tailwind", "firebase"],
    github: "https://github.com/Mohd-FaiZ-Jr/Menu-Mate",
    demo: "https://menumate.live",
    status: "active",
    featured: true,
  },
  {
    id: 2,
    title: "DHARMAVERSE",
    category: "web",
    description:
      "Virtual tourism platform for monasteries of Sikkim with 360° tours, AR overlays, interactive maps, and multilingual narration.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    tags: ["React", "Tailwind", "AR", "WebXR"],
    icons: ["react", "tailwind"],
    github: "https://github.com/Mohd-FaiZ-Jr/DharmaVerse",
    demo: "https://dharmaverse.vercel.app",
    status: "active",
    featured: true,
  },
  // {
  //   id: 3,
  //   title: "CAMPUSNEST",
  //   category: "fullstack",
  //   description:
  //     "Student-focused rental housing platform helping students find affordable homes and giving property owners online visibility.",
  //   image:
  //     "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  //   tags: ["React", "Tailwind"],
  //   icons: [SiReact, SiTailwindcss],
  //   github: "https://github.com",
  //   demo: "https://example.com",
  //   status: "development",
  //   featured: true,
  // },
  {
    id: 4,
    title: "FILENEST",
    category: "fullstack",
    description:
      "Automated File Management System that organizes academic files using image processing and content analysis.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    tags: ["React", "Tailwind", "Python", "Automation"],
    icons: ["react", "tailwind", "python"],
    github: "https://github.com/Mohd-FaiZ-Jr/FileNest",
    demo: "",
    status: "development",
    featured: false,
  },
  {
    id: 5,
    title: "PARKINGMITRA",
    category: "concept",
    description:
      "AI-powered parking system using computer vision (YOLO) to monitor parking alignment and assist drivers in real-time.",
    image:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80",
    tags: ["Python", "Computer Vision"],
    icons: ["python"],
    github: "",
    demo: "",
    status: "concept",
    featured: false,
    briefing: {
      objective:
        "To eliminate parking inefficiencies in dense urban areas using edge AI and real-time vision processing.",
      techStack: "Python, YOLOv8, OpenCV, Raspberry Pi",
      challenges:
        "Processing high-resolution video streams on low-power edge devices while maintaining sub-second latency for alignment detection.",
      solutions:
        "Implemented quantized YOLO models and frame-skipping algorithms to optimize processing speed without sacrificing accuracy.",
      timeline: "Phase 1: Alignment Detection (Q4 2024)",
      vision:
        "A fully autonomous parking lot manager that communicates directly with smart vehicle HUDs to guide drivers to the most optimal spot.",
    },
  },
  {
    id: 6,
    title: "NOTESPARK",
    category: "web",
    description:
      "Note-taking web application with add, edit, delete, and clear functionality built while learning JavaScript.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
    icons: ["html", "css", "javascript"],
    github: "",
    demo: "https://notespark.netlify.app/",
    status: "active",
    featured: false,
  },
  {
    id: 7,
    title: "PERSONAL PORTFOLIO",
    category: "web",
    description:
      "Personal portfolio website built during early learning phase to practice frontend development.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
    icons: ["html", "css", "javascript"],
    github: "",
    demo: "https://mohdfaizportfolio.netlify.app",
    status: "active",
    featured: false,
  },
  {
    id: 8,
    title: "WHATSAPP MESSENGER",
    category: "desktop",
    description:
      "Desktop messaging application built with Python Tkinter as a Class 12 board project.",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
    tags: ["Python", "Tkinter"],
    icons: ["python"],
    github: "https://github.com/Mohd-FaiZ-Jr/whatsapp-message-scheduler",
    demo: "",
    status: "completed",
    featured: false,
  },
  {
    id: 9,
    title: "CITY DATA OVERLOAD",
    category: "concept",
    description:
      "AI-powered civic intelligence platform that transforms scattered city data into organized, predictive, and actionable insights using Gemini and Vertex AI. Features live map visualization, anomaly prediction, and automatic escalation tracking.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    tags: ["AI", "Gemini", "Vertex AI", "Google Maps", "Firebase", "CivicTech"],
    icons: ["react", "firebase", "maps"],
    github: "",
    demo: "",
    status: "concept",
    featured: true,
    briefing: {
      objective:
        "Synthesize city-wide data streams into a unified tactical dashboard for decision makers using advanced LLMs.",
      techStack:
        "React, Firebase, Gemini 1.5 Pro, Vertex AI, Google Maps Platform",
      challenges:
        "Aggregating highly inconsistent data formats from legacy government systems and sensors into a clean, uniform intelligence stream.",
      solutions:
        "Leveraging Gemini's multimodal capabilities to parse unstructured documents/reports and transform them into structured GIS data.",
      timeline: "R&D Prototype Phase",
      vision:
        "Predicting civic infrastructure failures before they occur through multimodal AI analysis and automatic multi-agency coordination.",
    },
  },
];

const FILTERS = [
  { id: "all", label: "Global Systems" },
  { id: "web", label: "Web Intelligence" },
  { id: "fullstack", label: "Full-Stack Node" },
  { id: "desktop", label: "Desktop" },
  { id: "concept", label: "Concept" },
];

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const ITEM_VARIANTS = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
};

const LAYOUT_TRANSITION = {
  type: "spring",
  damping: 25,
  stiffness: 120,
  mass: 1,
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
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
  }, [selectedProject]);

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  const handleFilterClick = useCallback((e, filterId) => {
    setActiveFilter(filterId);
    const container = e.currentTarget.closest(".filter-container");
    if (container) {
      const button = e.currentTarget;
      container.scrollTo({
        left:
          button.offsetLeft -
          container.clientWidth / 2 +
          button.clientWidth / 2,
        behavior: "smooth",
      });
    }
  }, []);

  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <div className="w-full min-h-screen pt-24 md:pt-28 lg:pt-32 pb-20 px-6 md:px-12 lg:px-16 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background HUD Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none -z-10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-radial from-cyan-500/5 via-transparent to-transparent blur-3xl pointer-events-none -z-10"></div>{" "}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-400/80 text-[10px] font-orbitron tracking-[0.25em] font-bold uppercase">
              Operational Missions
            </span>
          </div>{" "}
          <h1 className="text-5xl md:text-7xl font-black font-orbitron text-white tracking-tight leading-[1.1] mb-6">
            PROJECT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 animate-gradient-slow">
              ARCHIVES
            </span>
          </h1>{" "}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <p className="text-gray-400 font-rajdhani text-lg md:text-xl max-w-2xl leading-relaxed">
              A high-precision catalog of tactical digital solutions engineered
              for performance, security, and exceptional user experience.
            </p>{" "}
            {/* Filter Selection */}
            <div className="w-full md:w-auto overflow-x-auto no-scrollbar py-1.5 sm:py-2 filter-container max-w-full">
              <div className="inline-flex items-center bg-white/[0.02] p-[3px] sm:p-1 rounded-lg sm:rounded-xl border border-white/5 backdrop-blur-md min-w-max md:min-w-0">
                {FILTERS.map((filter) => {
                  const isActive = activeFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      onClick={(e) => handleFilterClick(e, filter.id)}
                      className="relative px-4 sm:px-6 py-1.5 sm:py-2 outline-none group whitespace-nowrap transform-gpu"
                    >
                      {/* Active Background */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          transition={{
                            type: "spring",
                            bounce: 0.1,
                            duration: 0.4,
                          }}
                          className="absolute inset-0 bg-cyan-500/10 border border-cyan-400/30 rounded-md sm:rounded-lg shadow-[0_0_10px_rgba(0,229,255,0.12)] transform-gpu"
                        />
                      )}

                      {/* Scanline - Precise fit for selected option, mobile only */}
                      {isActive && (
                        <motion.div
                          animate={{ x: ["-120%", "120%"] }}
                          transition={{
                            duration: 2.8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 overflow-hidden rounded-md sm:rounded-lg pointer-events-none md:hidden"
                        >
                          <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent skew-x-[20deg] blur-[1px] will-change-transform transform-gpu" />
                        </motion.div>
                      )}

                      {/* Text content with orbitron font */}
                      <span
                        className={`relative z-10 font-orbitron text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] sm:tracking-[0.22em] uppercase transition-all duration-300 ${
                          isActive
                            ? "text-cyan-300"
                            : "text-gray-500 group-hover:text-gray-300"
                        }`}
                      >
                        {filter.label}
                      </span>

                      {/* Tactical HUD micro-corners */}
                      {isActive && (
                        <>
                          <div className="absolute top-0 left-0 w-[2px] h-[2px] border-t border-l border-cyan-400/50" />
                          <div className="absolute bottom-0 right-0 w-[2px] h-[2px] border-b border-r border-cyan-400/50" />
                        </>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>{" "}
        {/* Projects Grid */}
        <motion.div
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={ITEM_VARIANTS}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={LAYOUT_TRANSITION}
                className={`relative group group/card transform-gpu will-change-transform ${project.featured ? "md:col-span-2" : ""}`}
              >
                <div className="absolute -inset-[1px] bg-gradient-to-br from-white/10 to-transparent group-hover:from-cyan-500/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>{" "}
                <div className="relative h-full bg-[#0d0d0d] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent z-10"></div>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover filter grayscale contrast-125 opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />{" "}
                    {/* HUD Status Label */}
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${project.status === "active" ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" : "bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]"} animate-pulse`}
                      ></div>
                      <span className="text-[9px] font-orbitron text-gray-300 font-bold uppercase tracking-widest">
                        {project.status}
                      </span>
                    </div>{" "}
                    {/* Tech Badge Overlay */}
                    <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                      {project.icons.map((iconName, idx) => {
                        const Icon = ICON_MAP[iconName];
                        return (
                          <div
                            key={idx}
                            className="p-2 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 text-white hover:text-cyan-400 transition-colors"
                          >
                            <Icon key={idx} size={14} />
                          </div>
                        );
                      })}
                    </div>
                  </div>{" "}
                  {/* Content Section */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-orbitron font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>{" "}
                    <p className="text-gray-400 font-rajdhani text-base leading-relaxed line-clamp-2">
                      {project.description}
                    </p>{" "}
                    {/* Tags Section */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-white/5 text-[9px] font-orbitron font-bold text-gray-500 tracking-wider uppercase rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>{" "}
                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ y: -2 }}
                          className="flex-1 py-3 border border-white/10 rounded-lg flex items-center justify-center gap-2 text-[10px] font-orbitron font-bold text-gray-400 tracking-[0.2em] uppercase hover:bg-white/5 hover:border-white/20 hover:text-white transition-all"
                        >
                          <BsGithub size={14} /> Data Loop
                        </motion.a>
                      )}

                      {project.status === "concept" ? (
                        <motion.button
                          onClick={() => setSelectedProject(project)}
                          type="button"
                          whileHover={{ y: -2 }}
                          className="flex-1 py-3 bg-[#1e1e1e] border border-cyan-400/30 rounded-lg flex items-center justify-center gap-2 text-[10px] font-orbitron font-bold text-cyan-400 tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(0,229,255,0.05)] hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all"
                        >
                          Strategic Briefing <BsArrowRight size={14} />
                        </motion.button>
                      ) : (
                        project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ y: -2 }}
                            className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center gap-2 text-[10px] font-orbitron font-bold text-white tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(0,229,255,0.15)] hover:shadow-[0_0_25px_rgba(0,229,255,0.25)] transition-all"
                          >
                            Deploy Hub <BsBoxArrowUpRight size={12} />
                          </motion.a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>{" "}
        {/* Bottom Stark CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 border border-white/10 relative overflow-hidden group text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
          <div className="relative z-10 space-y-4 max-w-xl">
            <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-white tracking-tighter uppercase italic">
              Ready for Next <span className="text-cyan-400">Assignment?</span>
            </h3>
            <p className="text-gray-400 font-rajdhani text-lg leading-relaxed">
              Establishing a direct tactical uplink for new technological
              ventures. My processing cores are ready for complex engineering
              challenges.
            </p>
          </div>{" "}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <motion.a
              href="mailto:mohdfaizofficial487@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-cyan-500 text-black font-orbitron whitespace-nowrap font-bold text-xs tracking-[0.2em] rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_45px_rgba(0,229,255,0.5)] transition-all uppercase flex items-center gap-3"
            >
              Initiate Core Link <HiMail size={20} />
            </motion.a>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[9px] font-orbitron text-gray-500 tracking-[0.2em] uppercase font-bold">
                Secure Connection Stable
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Strategic Briefing Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0d0d0d] border border-cyan-400/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.1)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-[10px] font-orbitron text-gray-400 uppercase tracking-[0.3em] ml-4">
                    Stark Strategic Terminus // Concept Briefing
                  </span>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <HiX size={20} />
                </button>
              </div>

              <div className="flex flex-col md:flex-row h-[70vh] md:h-[600px]">
                {/* Briefing Sidebar */}
                <div className="w-full md:w-1/3 border-r border-white/5 p-6 space-y-8 overflow-y-auto bg-black/20">
                  <div>
                    <h4 className="text-[10px] font-orbitron font-bold text-cyan-400 uppercase tracking-widest mb-4">
                      Project Status
                    </h4>
                    <div className="p-3 rounded-lg border border-yellow-500/20 bg-yellow-500/5 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                      <span className="text-xs font-rajdhani text-yellow-500 font-bold uppercase tracking-wider">
                        R&D Conceptualization
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-orbitron font-bold text-cyan-400 uppercase tracking-widest mb-4">
                      Tech Stack Matrix
                    </h4>
                    <div className="flex flex-wrap gap-2 text-xs font-rajdhani text-gray-400">
                      {selectedProject.briefing?.techStack}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-orbitron font-bold text-cyan-400 uppercase tracking-widest mb-4">
                      Intelligence ID
                    </h4>
                    <div className="font-orbitron text-[10px] text-gray-500 tracking-tighter">
                      SEC-PRJ-00{selectedProject.id}-X
                    </div>
                  </div>
                </div>

                {/* Main Intel Content */}
                <div className="flex-1 p-8 overflow-y-auto custom-scrollbar space-y-10">
                  <header>
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="h-[2px] w-20 bg-cyan-500 shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
                  </header>

                  <section className="space-y-4">
                    <h5 className="flex items-center gap-2 text-xs font-orbitron font-bold text-cyan-400 uppercase tracking-widest">
                      <div className="w-1 h-3 bg-cyan-500" /> Executive
                      Objective
                    </h5>
                    <p className="text-gray-300 font-rajdhani text-lg leading-relaxed md:pr-10">
                      {selectedProject.briefing?.objective ||
                        selectedProject.description}
                    </p>
                  </section>

                  {selectedProject.briefing?.challenges && (
                    <section className="space-y-4">
                      <h5 className="flex items-center gap-2 text-xs font-orbitron font-bold text-cyan-400 uppercase tracking-widest">
                        <div className="w-1 h-3 bg-cyan-500" /> Core Challenges
                      </h5>
                      <p className="text-gray-300 font-rajdhani text-base leading-relaxed md:pr-10">
                        {selectedProject.briefing.challenges}
                      </p>
                    </section>
                  )}

                  {selectedProject.briefing?.solutions && (
                    <section className="space-y-4">
                      <h5 className="flex items-center gap-2 text-xs font-orbitron font-bold text-cyan-400 uppercase tracking-widest">
                        <div className="w-1 h-3 bg-cyan-500" /> Tactical
                        Solutions
                      </h5>
                      <p className="text-gray-300 font-rajdhani text-base leading-relaxed md:pr-10">
                        {selectedProject.briefing.solutions}
                      </p>
                    </section>
                  )}

                  <section className="space-y-4">
                    <h5 className="flex items-center gap-2 text-xs font-orbitron font-bold text-cyan-400 uppercase tracking-widest">
                      <div className="w-1 h-3 bg-cyan-500" /> Strategic Vision
                    </h5>
                    <p className="text-gray-400 font-rajdhani text-base italic border-l-2 border-white/10 pl-6 py-2">
                      "{selectedProject.briefing?.vision}"
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h5 className="flex items-center gap-2 text-xs font-orbitron font-bold text-cyan-400 uppercase tracking-widest">
                      <div className="w-1 h-3 bg-cyan-500" /> Phase Timeline
                    </h5>
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-sm font-rajdhani text-gray-400">
                      {selectedProject.briefing?.timeline}
                    </div>
                  </section>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="px-8 py-4 bg-[#0a0a0a] border-t border-white/10 flex items-center justify-between">
                <span className="text-[9px] font-orbitron text-cyan-400/50 animate-pulse uppercase tracking-[0.2em]">
                  Encrypted Stark-Link Stabilized
                </span>
                <div className="flex gap-4">
                  <motion.button
                    type="button"
                    onClick={closeModal}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-cyan-500 text-black font-orbitron font-bold text-[10px] tracking-widest uppercase rounded shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                  >
                    Acknowledge
                  </motion.button>
                </div>
              </div>

              {/* Scan Line Animation Overlay */}
              <motion.div
                animate={{ y: ["0%", "1000%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-[100px] bg-gradient-to-b from-transparent via-cyan-400/[0.03] to-transparent pointer-events-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
