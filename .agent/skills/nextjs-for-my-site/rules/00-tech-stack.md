# 00 — Tech Stack & Versions

## Core Stack

| Package | Version | Vai trò |
|---------|---------|---------|
| Next.js | 16.x | React framework (App Router, Turbopack) |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| HeroUI | 3.x | UI component library (React Aria + Tailwind) |
| Tailwind CSS | v4 | Utility-first CSS |
| Lucide React | latest | Icon library (SVG, tree-shakable) |
| Biome | 2.x | Linter + formatter (thay ESLint/Prettier) |

## 3D & Animation

| Package | Vai trò |
|---------|---------|
| three | 3D rendering engine |
| @react-three/fiber | React renderer cho Three.js |
| @react-three/drei | Three.js helpers (Float, Stars, etc.) |
| framer-motion | Scroll animations, entrance effects, micro-interactions |
| next-themes | Dark mode toggle |

## Utilities

| Package | Vai trò |
|---------|---------|
| date-fns | Date formatting/parsing |

## Version Policy

- **KHÔNG** thêm package mới mà không ghi vào rule file.
- **KHÔNG** dùng Ant Design, Material UI, Chakra UI — chỉ HeroUI.
- **KHÔNG** dùng ESLint, Prettier — chỉ Biome.
- **KHÔNG** dùng dayjs, moment — chỉ date-fns.
- **KHÔNG** dùng `@ant-design/icons`, `react-icons` — chỉ Lucide React.
- **KHÔNG** dùng gsap, anime.js — chỉ framer-motion cho 2D animations.
- **KHÔNG** dùng raw Three.js API — dùng React Three Fiber declarative API.
- Package manager: **yarn** (ưu tiên) hoặc **bun**.
