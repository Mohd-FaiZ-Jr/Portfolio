import React, { useMemo } from "react";
import Marquee from "react-fast-marquee";

const MARQUEE_ITEMS = [
    { src: "src/assets/Marquee Icons/html.png", width: 45, alt: "HTML5" },
    { src: "src/assets/Marquee Icons/css.png", width: 55, alt: "CSS3" },
    { src: "src/assets/Marquee Icons/js.png", width: 45, alt: "JavaScript" },
    // NEW
    { src: "src/assets/Marquee Icons/react.png", width: 48, alt: "React" },
    { src: "src/assets/Marquee Icons/figma.png", width: 45, alt: "Figma" },
    { src: "src/assets/Marquee Icons/tailwind.png", width: 45, alt: "Tailwind CSS" },
    // NEW
    { src: "src/assets/Marquee Icons/nodejs.png", width: 48, alt: "Node.js" },
    { src: "src/assets/Marquee Icons/github.png", width: 45, alt: "GitHub" },
    { src: "src/assets/Marquee Icons/vite.png", width: 45, alt: "Vite" },
    { src: "src/assets/Marquee Icons/vscode.png", width: 45, alt: "VS Code" },
    // NEW
    { src: "src/assets/Marquee Icons/mysql.png", width: 52, alt: "MySQL" },
    { src: "src/assets/Marquee Icons/python.png", width: 42, alt: "Python" },
    { src: "src/assets/Marquee Icons/social.png", width: 45, alt: "Social" },
];

const MarqueItem = () => {
  const { topRow, bottomRow } = useMemo(() => {
    const midpoint = Math.ceil(MARQUEE_ITEMS.length / 2);
    return {
      topRow: MARQUEE_ITEMS.slice(0, midpoint),
      bottomRow: MARQUEE_ITEMS.slice(midpoint),
    };
  }, []);

  return (
    <div className="w-full relative py-2 overflow-x-hidden overflow-y-hidden no-scrollbar max-h-fit">

      {/* TOP */}
      <Marquee
        autoFill
        pauseOnHover
        speed={30}
        gradient={false}
      >
        {topRow.map((item, index) => (
          <div
            key={`top-${index}`}
            className="mx-6 cursor-pointer group relative flex items-center justify-center"
          >
            <div className="
              absolute inset-0
              bg-cyan-400/20
              blur-xl
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-300
              rounded-full
            " />
            <img
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.width}
              loading="lazy"
              decoding="async"
              className="
                relative z-10
                opacity-60
                grayscale
                group-hover:grayscale-0
                group-hover:opacity-100
                transition-all duration-500
                transform group-hover:scale-110
              "
            />
          </div>
        ))}
      </Marquee>

      {/* BOTTOM */}
      <Marquee
        autoFill
        pauseOnHover
        direction="right"
        speed={25}
        gradient={false}
        className="mt-6"
      >
        {bottomRow.map((item, index) => (
          <div
            key={`bottom-${index}`}
            className="mx-6 cursor-pointer group relative flex items-center justify-center"
          >

            <div className="
              absolute inset-0
              bg-purple-400/20
              blur-xl
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-300
              rounded-full
            " />

            <img
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.width}
              loading="lazy"
              decoding="async"
              className="
                relative z-10
                opacity-60
                grayscale
                group-hover:grayscale-0
                group-hover:opacity-100
                transition-all duration-500
                transform group-hover:scale-110
              "
            />
          </div>
        ))}
      </Marquee>

    </div>
  );
};

export default MarqueItem;
