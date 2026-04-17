import type { Metadata } from "next";
import MuseumDivider from "../_internal/components/ui/MuseumDivider";
import SectionHeading from "../_internal/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Work",
  description:
    "The Workshop — projects, technologies, and the craft of building software.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="mb-20 text-center">
        <p
          className="text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: "#4A6FA5" }}
        >
          The Workshop
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
          Work
        </h1>
        <p className="mt-4 text-lg text-museum-muted">
          Where ideas become reality — the craft of building.
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
