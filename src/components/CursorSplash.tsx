"use client";

import { useEffect, useRef, useState } from "react";

type Position = {
  x: number;
  y: number;
};

const CursorSplash = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const target = useRef<Position>({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      
      if (!isAnimating.current) {
        isAnimating.current = true;
        animate();
      }
    };

    const animate = () => {
      setPosition((prev) => {
        const lerp = 0.12;
        const dx = target.current.x - prev.x;
        const dy = target.current.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 0.1) {
          isAnimating.current = false;
          return prev;
        }

        const newX = prev.x + dx * lerp;
        const newY = prev.y + dy * lerp;
        return { x: newX, y: newY };
      });

      if (isAnimating.current) {
        rafId.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background: `radial-gradient(900px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.08), transparent 60%)`,
      }}
    />
  );
};

export default CursorSplash;


