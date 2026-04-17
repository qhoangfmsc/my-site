# 01 — Cấu trúc thư mục

## Cây thư mục chuẩn (Versioned Architecture)

```
src/
├── app/                            # App Router — pages, layouts
│   ├── layout.tsx                  # Root layout (fonts, providers, globals)
│   ├── globals.css                 # Tailwind + HeroUI + theme tokens
│   ├── page.tsx                    # Root → redirect to /v1
│   │
│   └── v1/                         # ═══ VERSION 1 SUBMODULE ═══
│       ├── layout.tsx              # V1 layout (Header, Footer)
│       ├── page.tsx                # V1 Home (Lobby)
│       │
│       ├── corridor/               # Page: The Corridor
│       │   └── page.tsx
│       ├── daily-life/             # Wing: Daily Life
│       │   └── page.tsx
│       ├── work/                   # Wing: Work
│       │   └── page.tsx
│       ├── music/                  # Wing: Music
│       │   └── page.tsx
│       ├── gaming/                 # Wing: Gaming
│       │   └── page.tsx
│       ├── curator/                # Page: About Me
│       │   └── page.tsx
│       ├── guestbook/              # Page: Contact
│       │   └── page.tsx
│       │
│       └── _internal/              # V1 non-route files (Next.js ignores _ prefix)
│           ├── components/
│           │   ├── layout/         # MuseumHeader, MuseumFooter
│           │   ├── museum/         # CorridorScene, ExhibitRoom, ArtifactFrame
│           │   ├── sections/       # LobbyHero, WingPreview
│           │   └── ui/             # ScrollReveal, SectionHeading, MuseumDivider
│           ├── data/               # navigation, social-links, timeline
│           ├── lib/                # constants, utils
│           ├── hooks/              # useHorizontalScroll, useMuseumTheme
│           └── types/              # V1 type definitions
│
└── _components/                    # Shared across versions
    └── providers/
        └── Providers.tsx
```

## Quy tắc

1. **Mặc định Server Component** — chỉ `'use client'` khi cần hooks/browser APIs.
2. **Đẩy `'use client'` xuống thấp nhất** — tách interactive thành component con.
3. **Không tạo `src/services/`** — data lấy từ static files hoặc fetch trực tiếp.
4. **Static data** → đặt trong `v1/_internal/data/`. KHÔNG hardcode trong component.
5. **1 component = 1 file** — tên file = tên component.
6. **Version isolation** — KHÔNG cross-import giữa v1 và v2. Mỗi version tự chứa.
7. **`_internal/` folder** — Next.js bỏ qua folder bắt đầu `_`, dùng cho non-route files.

## Import Rules

| Từ | Đến | Cách import |
|----|-----|-------------|
| V1 page → V1 _internal | `_internal/components/...` | Relative `./` hoặc `../` |
| V1 _internal → V1 _internal | Cùng submodule | Relative `../../` |
| Bất kỳ → shared | `@/_components/providers` | Absolute `@/` |
| V1 → V2 | **CẤM** | Không cross-import |

## Đặt tên thư mục

| Loại | Convention | Ví dụ |
|------|-----------|-------|
| Route folders | `kebab-case` | `daily-life/`, `corridor/` |
| Component folders | `kebab-case` | `ui/`, `layout/`, `museum/` |
| Component files | `PascalCase.tsx` | `MuseumHeader.tsx`, `ScrollReveal.tsx` |
| Utility files | `kebab-case.ts` | `constants.ts`, `utils.ts` |
| Data files | `kebab-case.ts` | `navigation.ts`, `social-links.ts` |
