import type { Metadata } from "next";
import { ViewTransition } from "react";
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
    <div className="flex min-h-screen flex-col bg-museum-wall text-museum-text">
      <MuseumHeader />
      <ViewTransition enter="museum-enter" exit="museum-enter">
        <main className="min-h-screen flex-1">{children}</main>
      </ViewTransition>
      <MuseumFooter />
    </div>
  );
}

