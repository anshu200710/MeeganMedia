import { useState } from "react";
import ParticleBackground from "./particle/ParticleBackground";

const Hero = () => {
  const [activeShape, setActiveShape] = useState("code");

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <ParticleBackground onReveal={setActiveShape} />

      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-screen">
        <span className="text-sm uppercase tracking-widest text-blue-400 mb-4">
          Interactive Digital Canvas
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Code & Marketing
        </h1>

        <p className="text-gray-400 max-w-xl mb-8">
          Particles morphing into{" "}
          <span className="text-blue-300 font-semibold">
            {activeShape}
          </span>{" "}
          shapes in real time.
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full transition">
            Start Building
          </button>
          <button className="border border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition">
            View Examples
          </button>
        </div>
      </main>
    </div>
  );
};

export default Hero;
