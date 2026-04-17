import type { Metadata } from "next";
import MuseumDivider from "../_internal/components/ui/MuseumDivider";
import SectionHeading from "../_internal/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Gaming",
  description:
    "The Arcade — from pixel adventures to epic worlds, the games that shaped who I am.",
};

export default function GamingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="mb-20 text-center">
        <p
          className="text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: "#F15BB5" }}
        >
          The Arcade
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
          Gaming
        </h1>
        <p className="mt-4 text-lg text-museum-muted">
          From pixel adventures to epic worlds — the games that shaped who I am.
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
