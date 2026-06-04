import type { Metadata } from "next";
import MuseumDivider from "../_internal/components/ui/MuseumDivider";
import SectionHeading from "../_internal/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Music",
  description:
    "The Sound Room — the soundtrack of my life, genres, artists, and playlists.",
};

export default function MusicPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <div className="mb-20 text-center">
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
          Music
        </h1>
        <p className="mt-4 text-lg text-museum-muted">
          The soundtrack of every chapter — artists, albums, and melodies that
          define me.
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
