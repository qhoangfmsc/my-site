"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Landmark } from "lucide-react";
import { useRef } from "react";
import { WINGS } from "../../../_internal/data/navigation";
import { getArtifactRenderer } from "../ArtifactDecorations";

export const HeroShowcase = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Make the background artifacts float passively
      gsap.utils.toArray<HTMLElement>(".hero-floating-item").forEach((item) => {
        gsap.to(item, {
          y: `+=${gsap.utils.random(-30, 30)}`,
          x: `+=${gsap.utils.random(-30, 30)}`,
          rotation: gsap.utils.random(-15, 15),
          duration: gsap.utils.random(3, 5),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Fade out hero quietly when scrolling down deeply
      gsap.to(".hero-content-wrapper", {
        opacity: 0,
        scale: 0.9,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "bottom 90%",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-transparent perspective-distant"
    >
      {/* Decorative Background Items */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="hero-floating-item absolute left-[10%] top-[15%] w-48 opacity-30 blur-sm -rotate-12">
          {getArtifactRenderer("life")(WINGS[0])}
        </div>
        <div className="hero-floating-item absolute right-[15%] top-[20%] w-64 opacity-20 blur-md rotate-20">
          {getArtifactRenderer("work")(WINGS[1])}
        </div>
        <div className="hero-floating-item absolute left-[20%] bottom-[15%] w-56 opacity-40 blur-[2px] rotate-5">
          {getArtifactRenderer("music")(WINGS[2])}
        </div>
        <div className="hero-floating-item absolute right-[25%] bottom-[10%] w-40 opacity-25 blur-sm -rotate-25">
          {getArtifactRenderer("gaming")(WINGS[3])}
        </div>
      </div>

      {/* Main Intro Title */}
      <div className="hero-content-wrapper z-10 flex flex-col items-center text-center p-4">
        <Landmark
          size={56}
          className="mb-6 text-museum-gold opacity-90 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
        />
        <h1 className="mb-6 font-display text-6xl font-bold leading-tight tracking-tight text-white drop-shadow-2xl md:text-8xl">
          Curated
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-museum-white via-museum-gold to-museum-muted">
            Memories.
          </span>
        </h1>
        <p className="max-w-xl text-lg italic text-museum-muted font-light">
          A personal exhibition — scroll to explore each chapter.
        </p>
      </div>
    </section>
  );
};
