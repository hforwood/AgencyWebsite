"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

interface ShaderBackgroundProps {
  children: React.ReactNode;
}

export function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[calc(100svh-5.5rem)] w-full overflow-hidden bg-flooencer-black text-white"
    >
      <svg aria-hidden="true" className="absolute inset-0 h-0 w-0">
        <defs>
          <filter
            id="glass-effect"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className="absolute inset-0 h-full w-full"
        colors={["#0f0f0f", "#280752", "#6513D1", "#7755FA", "#CD9CEC"]}
        speed={isActive ? 0.38 : 0.24}
      />
      <MeshGradient
        className="absolute inset-0 h-full w-full opacity-40 mix-blend-screen"
        colors={["#280752", "#6513D1", "#CD9CEC", "#2FC12F", "#0f0f0f"]}
        speed={isActive ? 0.28 : 0.16}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,15,15,0.88)_0%,rgba(40,7,82,0.72)_48%,rgba(15,15,15,0.44)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,rgba(15,15,15,0)_0%,rgba(15,15,15,0.82)_100%)]" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
