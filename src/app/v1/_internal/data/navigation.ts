import { V1_BASE } from "../lib/constants";
import type { NavItem, WingInfo } from "../types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Me", href: `${V1_BASE}/daily-life` },
  { label: "Work", href: `${V1_BASE}/work` },
  { label: "Music", href: `${V1_BASE}/music` },
  { label: "Gaming", href: `${V1_BASE}/gaming` },
];

export const WINGS: WingInfo[] = [
  {
    slug: "daily-life",
    title: "Daily Life",
    subtitle: "The Living Room",
    description:
      "A glimpse into everyday moments — routines, hobbies, and the small things that make life meaningful.",
    href: `${V1_BASE}/daily-life`,
    accentColor: "#6B8F71",
  },
  {
    slug: "work",
    title: "Work",
    subtitle: "The Workshop",
    description:
      "Where ideas become reality — projects, technologies, and the craft of building software.",
    href: `${V1_BASE}/work`,
    accentColor: "#4A6FA5",
  },
  {
    slug: "music",
    title: "Music",
    subtitle: "The Sound Room",
    description:
      "The soundtrack of my life — genres, artists, and playlists that define every chapter.",
    href: `${V1_BASE}/music`,
    accentColor: "#9B5DE5",
  },
  {
    slug: "gaming",
    title: "Gaming",
    subtitle: "The Arcade",
    description:
      "From pixel adventures to epic worlds — the games that shaped who I am.",
    href: `${V1_BASE}/gaming`,
    accentColor: "#F15BB5",
  },
];
