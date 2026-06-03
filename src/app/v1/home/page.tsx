"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { WINGS } from "../_internal/data/navigation";
import ContactNexus from "./_component/sections/ContactNexus";
import { HeroShowcase } from "./_component/sections/HeroShowcase";
import { ReviewSection } from "./_component/sections/ReviewSection";
import { SingularityPortal } from "./_component/sections/SingularityPortal";
import { TreasureLine } from "./_component/TreasureLine";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- MAIN PAGE LAYOUT ---
export default function DeepReviewMuseumPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Optionally trigger entry animations or smooth scrolling setups here
    },
    { scope: pageRef },
  );

  return (
    <div
      ref={pageRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#242321] text-museum-text"
    >
      {/* Global ambient glow & artistic warm slate gradient (Significantly lighter than black) */}
      <div className="pointer-events-none fixed inset-0 z-0 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#52504b] via-[#3a3834] to-[#242321]" />
      <div className="pointer-events-none fixed inset-0 z-0 h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />

      {/* Treasure Map Curve Line */}
      <TreasureLine />

      {/* Part 1: Initial Showcase */}
      <HeroShowcase />

      {/* Part 2: SPACED DEEP REVIEWS */}
      <div className="relative z-10 w-full overflow-hidden">
        {WINGS.map((wing, index) => (
          <ReviewSection key={wing.slug} wing={wing} index={index} />
        ))}
      </div>

      {/* Part 3: Contact Section */}
      <ContactNexus />

      {/* Part 4: Cap-off Singularity Space */}
      <SingularityPortal />
    </div>
  );
}
