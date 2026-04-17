"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import type { WINGS } from "../../../_internal/data/navigation";
import {
  getArtifactRenderer,
  WorkThreeJSGeometry,
} from "../ArtifactDecorations";

export const ReviewSection = ({
  wing,
  index,
}: {
  wing: (typeof WINGS)[0];
  index: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Trigger as soon as the top of the section enters the bottom of the viewport
          end: "center center", // Animation finishes exactly when the user reaches the middle of the section
          scrub: 1,
        },
      });

      // Enter animation for the main artifact object
      tl.fromTo(
        ".review-artifact",
        {
          opacity: 0,
          x: isEven ? -150 : 150,
          z: -500,
          rotationY: isEven ? -45 : 45,
        },
        {
          opacity: 1,
          x: 0,
          z: 0,
          rotationY: 0,
          duration: 1,
          ease: "power2.out",
        },
      );

      // Fade in text info slightly delayed
      tl.fromTo(
        ".review-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5",
      );

      // Extra specific animations (e.g. popping supplementary objects)
      tl.fromTo(
        ".supplementary-item",
        { opacity: 0, scale: 0, rotation: gsap.utils.random(-45, 45) },
        {
          opacity: 1,
          scale: 1,
          rotation: gsap.utils.random(-15, 15),
          stagger: 0.2,
          duration: 0.8,
          ease: "back.out(1.5)",
        },
        "-=0.2",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[180vh] w-full flex-col items-center justify-center p-4 py-32 perspective-distant"
    >
      <div
        className={`sticky top-[20vh] flex w-full max-w-7xl flex-col items-center gap-16 lg:gap-24 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
      >
        {/* Core Artifact side */}
        <div className="review-artifact relative flex-1 flex w-full max-w-lg items-center justify-center pointer-events-auto z-20">
          {getArtifactRenderer(wing.slug)(wing)}

          {/* Supplementary decorations (mini albums or 3D canvas) */}
          {wing.slug === "daily-life" && (
            <>
              <div className="supplementary-item absolute -left-12 -top-12 h-32 w-24 bg-white/10 p-2 shadow-2xl backdrop-blur-sm transform rotate-[-20deg] border border-white/20" />
              <div className="supplementary-item absolute -right-8 -bottom-16 h-40 w-32 bg-white/10 p-2 shadow-2xl backdrop-blur-sm transform rotate-[15deg] border border-white/20" />
              <div className="supplementary-item absolute left-16 -bottom-12 h-20 w-32 bg-white/10 p-2 shadow-2xl backdrop-blur-sm transform rotate-[-5deg] border border-white/20" />
            </>
          )}

          {wing.slug === "work" && (
            <div className="supplementary-item absolute -inset-32 -z-10 translate-x-12 opacity-80 cursor-grab active:cursor-grabbing">
              <WorkThreeJSGeometry />
            </div>
          )}

          {wing.slug === "music" && (
            <div className="supplementary-item absolute -right-20 top-0 flex flex-col gap-4 opacity-50">
              <span className="font-display text-4xl font-black italic">
                BALLAD
              </span>
              <span className="font-display text-5xl font-black text-museum-gold">
                ROCK
              </span>
              <span className="font-display text-3xl font-black outline-text">
                INDIE
              </span>
            </div>
          )}
        </div>

        {/* Content info side */}
        <div className="review-content flex flex-1 flex-col justify-center items-center text-center lg:items-start lg:text-left p-8 bg-museum-surface/20 rounded-3xl backdrop-blur-md border border-museum-frame/10 z-10 pointer-events-auto shadow-2xl">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.4em]"
            style={{ color: wing.accentColor }}
          >
            Sector 0{index + 1}
          </p>
          <h2 className="mb-6 font-display text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-lg">
            {wing.title}.
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-museum-muted">
            {wing.description}{" "}
            {wing.subtitle &&
              `Focusing on ${wing.subtitle}, this domain is a testament to the shattered yet connected memories.`}
            We dive deeper into this specific sector, unpacking all 3D or visual
            milestones associated.
          </p>

          <Link
            href={wing.href}
            className="group relative flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 font-bold uppercase transition-all duration-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
          >
            <div className="absolute inset-0 w-0 bg-museum-gold/20 transition-all duration-500 ease-out group-hover:w-full mix-blend-overlay" />
            <span className="relative z-10 tracking-widest text-museum-gold/90 group-hover:text-museum-gold transition-colors duration-300">
              Enter {wing.title}
            </span>
            <ArrowRight
              size={18}
              className="relative z-10 text-museum-gold transition-transform duration-300 group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
