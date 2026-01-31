import { useRef, useEffect } from "react";

const SHAPES = {
  code: [
    { x: -40, y: -20 }, { x: -40, y: 20 },
    { x: 40, y: -20 }, { x: 40, y: 20 },
  ],
  marketing: [
    { x: 0, y: -40 }, { x: -30, y: 20 }, { x: 30, y: 20 }
  ],
  tech: [
    { x: 0, y: -30 }, { x: -25, y: 10 }, { x: 25, y: 10 }, { x: 0, y: 40 }
  ]
};

const ParticleBackground = ({ onReveal }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const shapeKeys = Object.keys(SHAPES);
  let shapeIndex = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Create particles
    particles.current = Array.from({ length: 300 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      tx: 0,
      ty: 0,
    }));

    const setShape = () => {
      const shapeName = shapeKeys[shapeIndex % shapeKeys.length];
      onReveal?.(shapeName);

      const shape = SHAPES[shapeName];
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      particles.current.forEach((p, i) => {
        const target = shape[i % shape.length];
        p.tx = cx + target.x * 5;
        p.ty = cy + target.y * 5;
      });

      shapeIndex++;
    };

    setShape();
    const interval = setInterval(setShape, 3000);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach(p => {
        p.x += (p.tx - p.x) * 0.05;
        p.y += (p.ty - p.y) * 0.05;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(147,197,253,0.9)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, [onReveal]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticleBackground;
