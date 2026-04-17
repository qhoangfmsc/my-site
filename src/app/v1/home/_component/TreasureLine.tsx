"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const TreasureLine = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useGSAP(
    () => {
      const path = pathRef.current;
      if (!path) return;

      // Use getTotalLength to set precise dash offsets for drawing
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            if (!dotRef.current) return;

            // SVG path point maps exactly to percentages since viewBox="0 0 100 100"
            const point = path.getPointAtLength(self.progress * length);
            gsap.set(dotRef.current, {
              left: `${point.x}%`,
              top: `${point.y}%`,
            });

            // Hide tooltip while scrolling
            if (tooltipRef.current) {
              gsap.set(tooltipRef.current, { opacity: 0, scale: 0.9, x: 10 });
            }

            // Debounce to show tooltip when scrolling stops
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
              if (tooltipRef.current) {
                gsap.to(tooltipRef.current, {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  duration: 0.4,
                  ease: "back.out(1.5)",
                });
              }
            }, 150);
          },
        },
      });

      // Cleanup timeout on unmount
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 50,4 C 50,12 15,15 15,25 C 15,35 85,35 85,45 C 85,55 15,55 15,65 C 15,75 85,75 85,85 C 85,87 50,88 50,89"
          fill="none"
          stroke="rgba(212,175,55,0.25)"
          strokeWidth="0.4"
          vectorEffect="non-scaling-stroke"
          pathLength="100"
          strokeDasharray="4 0.5"
        />

        <path
          ref={pathRef}
          d="M 50,4 C 50,12 15,15 15,25 C 15,35 85,35 85,45 C 85,55 15,55 15,65 C 15,75 85,75 85,85 C 85,87 50,88 50,89"
          fill="none"
          stroke="rgba(212,175,55,1)"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 12px rgba(212,175,55,1))" }}
        />
      </svg>

      {/* HTML Tracking Dot UI Overlay */}
      <div
        ref={dotRef}
        className="absolute z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{ left: "50%", top: "4%" }}
      >
        <div className="relative flex h-5 w-5 items-center justify-center">
          <div className="absolute h-full w-full animate-ping rounded-full bg-museum-gold/60" />
          <div className="z-10 h-3 w-3 rounded-full border-[1.5px] border-museum-gold bg-white shadow-[0_0_15px_rgba(212,175,55,1)]" />
        </div>
        <div
          ref={tooltipRef}
          className="absolute left-6 top-1/2 flex origin-left -translate-y-1/2 items-center gap-1.5 whitespace-nowrap opacity-0"
        >
          <div className="h-px w-6 bg-museum-gold/80" />
          <span className="rounded-sm border border-museum-gold/40 bg-[#121214]/90 px-3 py-1 font-display text-[10px] font-bold tracking-[0.25em] text-white shadow-2xl backdrop-blur-md">
            YOU ARE HERE
          </span>
        </div>
      </div>
    </div>
  );
};
