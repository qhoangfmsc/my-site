import type { Metadata } from "next";
import MuseumDivider from "../_internal/components/ui/MuseumDivider";
import SectionHeading from "../_internal/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Life",
  description:
    "The Living Room — a glimpse into everyday moments, routines, and the small things that matter.",
};

export default function DailyLifePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      {/* ── Wing Entrance ── */}
      <div className="mb-20 text-center">
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
          Life
        </h1>
        <p className="mt-4 text-lg text-museum-muted">
          Everyday rhythms, quiet routines, and the moments in between.
        </p>
      </div>

      <MuseumDivider />

      <section className="py-20">
        <SectionHeading
          title="Under Construction"
          subtitle="This wing is being curated. New exhibits arriving soon."
        />
      </section>
    </div>
  );
}
