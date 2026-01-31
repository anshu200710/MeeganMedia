import { useState, useEffect } from "react";

const SHAPES = {
  code: "M8 18l-6-6 6-6M16 6l6 6-6 6M13 3l-2 18", // </> icon
  growth: "M23 6l-9.5 9.5-5-5L1 18m22-12h-6m6 0v6", // Chart arrow
};

export default function ShapeReveal({ mousePos }) {
  const [shape, setShape] = useState(SHAPES.code);

  // Randomly change the shape every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const keys = Object.keys(SHAPES);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      setShape(SHAPES[randomKey]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg className="absolute inset-0 z-5 pointer-events-none w-full h-full">
      <defs>
        <mask id="shapeMask">
          <rect width="100%" height="100%" fill="black" />
          <path
            d={shape}
            fill="white"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(4) translate(-12px, -12px)`,
              transition: "transform 0.1s ease-out",
            }}
          />
        </mask>
      </defs>
      
      {/* This color only shows through the moving mask */}
      <rect
        width="100%"
        height="100%"
        fill="rgba(79, 70, 229, 0.4)" // Indigo reveal color
        mask="url(#shapeMask)"
      />
    </svg>
  );
}