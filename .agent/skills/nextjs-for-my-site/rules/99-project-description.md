# 99 — Project Description

## Tổng quan

**my-site** là personal website dạng **viện bảo tàng ảo** — nơi khách tham quan "đi bộ" qua các phòng trưng bày, khám phá cuộc đời chủ nhân từ nhỏ đến hiện tại.

**Không phải portfolio** — đây là trang giới thiệu bản thân qua các khía cạnh: cuộc sống, công việc, âm nhạc, gaming.

## Kiến trúc Versioned

Mỗi version (`v1`, `v2`, ...) là submodule độc lập, không phụ thuộc nhau.

- `v1` — Theme: Museum exploration, 2D Framer Motion animations

## Mục tiêu

- **Premium museum aesthetic** — warm tones, gold accents, Playfair Display typography
- **Performance** — fast load, optimized images, minimal JS bundle
- **SEO** — meta tags, structured data per page
- **Accessible** — keyboard nav, screen reader support, color contrast
- **Dark mode** — "Night museum" theme via next-themes

## Pages (V1)

| Page | Route | Museum Name | Mô tả |
|------|-------|-------------|--------|
| Home | `/v1` | The Lobby | Entrance, wing previews, CTA to corridor |
| Corridor | `/v1/corridor` | The Corridor | Vertical scroll timeline — life journey |
| Life | `/v1/life` | The Living Room | Everyday moments, routines, hobbies |
| Work | `/v1/work` | The Workshop | Projects, tech stack, career |
| Music | `/v1/music` | The Sound Room | Artists, playlists, music journey |
| Gaming | `/v1/gaming` | The Arcade | Games, setup, gaming history |
| About | `/v1/curator` | Curator's Office | Personal story, values |
| Contact | `/v1/guestbook` | The Guestbook | Social links, contact info |

## Tech Stack

- **Next.js 16** — App Router, Server Components
- **React 19** — UI library
- **TypeScript 5** — Type safety
- **HeroUI v3** — Component library (React Aria + Tailwind)
- **Tailwind CSS v4** — Styling
- **Lucide React** — Icons
- **Framer Motion** — 2D animations, scroll reveals
- **Biome 2** — Linter + Formatter
- **Playfair Display** — Display serif font (museum headings)
- **date-fns** — Date utilities
