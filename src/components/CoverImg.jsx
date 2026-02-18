import React from "react";

const CoverImg = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Ambient Energy Particles */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(0,229,255,0.05)_0%,_transparent_50%)] animate-pulse"></div>

      {/* Hexagonal Grid Overlay (subtle) */}
      <div
        className="absolute w-full h-full opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%2300e5ff' fill='none'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7c4dff] rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00e5ff] rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
};

export default CoverImg;
