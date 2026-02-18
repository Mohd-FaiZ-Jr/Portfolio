import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  FaSpotify,
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
} from "react-icons/fa";

const TRACKS = [
  {
    title: "Quantum Flight Protocol",
    artist: "Helix Vanguard",
    image:
      "https://wallpapers.com/images/hd/black-aesthetic-background-wjo5qkh9n8nk5815.jpg",
    src: "/audio/hard-rock.mp3",
  },
  {
    title: "Arc Reactor Pulse",
    artist: "Nova Circuit",
    image:
      "https://i.pinimg.com/736x/e7/33/bd/e733bd3d71abd722c5469aea0c3a24fa.jpg",
    src: "/audio/electric-vibes.mp3",
  },
];

function AudioCard() {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  }, [isPlaying]);

  const nextTrack = useCallback(() => {
    setCurrentTrack((prev) => (prev + 1) % TRACKS.length);
  }, []);

  const prevTrack = useCallback(() => {
    setCurrentTrack((prev) => (prev === 0 ? TRACKS.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        playPause();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [playPause]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.load();
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  return (
    <motion.div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden group flex flex-col justify-between bg-[#1db954]/5 hover:bg-[#1db954]/10 transition-all duration-300 backdrop-blur-md">
      {/* Hidden Audio Element */}
      <audio ref={audioRef} loop>
        <source src={TRACKS[currentTrack].src} type="audio/mpeg" />
      </audio>

      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaSpotify size={20} className="text-[#1db954]" />
          <span className="text-[10px] font-orbitron text-gray-400 tracking-widest uppercase">
            Audio Feed
          </span>
        </div>

        {/* Equalizer */}
        <div className="flex gap-1 items-end h-4">
          {[0.2, 0.4, 0.6, 0.8].map((delay, i) => (
            <motion.div
              key={i}
              animate={
                isPlaying ? { height: [4, 16, 6, 18, 4] } : { height: 4 }
              }
              transition={{
                duration: 1.2,
                repeat: isPlaying ? Infinity : 0,
                delay: delay,
              }}
              className="w-1 bg-[#1db954] rounded-full"
            />
          ))}
        </div>
      </div>

      {/* Track Info */}
      <div className="flex gap-4 items-center my-6">
        <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg shadow-black/40">
          <img
            src={TRACKS[currentTrack].image}
            alt={TRACKS[currentTrack].title}
            loading="lazy"
            decoding="async"
            className="w-full h-full aspect-square object-cover shadow-[0_0_25px_rgba(0,229,255,0.3)]"
          />
        </div>
        <div className="overflow-hidden">
          <h4 className="text-white font-rajdhani font-bold text-sm truncate">
            {TRACKS[currentTrack].title}
          </h4>
          <p className="text-gray-500 text-xs truncate font-exo">
            {TRACKS[currentTrack].artist}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between text-[10px] font-orbitron text-gray-500">
        <span className="text-[#1db954]">
          {isPlaying ? "STREAMING..." : "PAUSED"}
        </span>

        <div className="flex gap-4 items-center text-white">
          <button
            onClick={prevTrack}
            className="hover:text-[#1db954] transition"
          >
            <FaStepBackward />
          </button>

          <button
            onClick={playPause}
            className="hover:text-[#1db954] transition text-lg"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <button
            onClick={nextTrack}
            className="hover:text-[#1db954] transition"
          >
            <FaStepForward />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default React.memo(AudioCard);
