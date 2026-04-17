import type { Metadata } from "next";
import MuseumFooter from "./_internal/components/layout/MuseumFooter";
import MuseumHeader from "./_internal/components/layout/MuseumHeader";

export const metadata: Metadata = {
  title: {
    template: "%s — The Museum of Quoc Hoang",
    default: "The Museum of Quoc Hoang",
  },
  description:
    "Step inside. Every room tells a story. A personal museum exploring life, work, music, and gaming.",
};

export default function V1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-museum-wall text-museum-text">
      <MuseumHeader />
      <main className="flex-1">{children}</main>
      <MuseumFooter />
    </div>
  );
}
