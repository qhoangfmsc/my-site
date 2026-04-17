# 10 — Checklist khi tạo Feature mới

## Trước khi code

- [ ] Đã đọc rules liên quan
- [ ] Xác định Server hay Client Component
- [ ] Xác định data source (static `src/data/` hay API)

## Tạo Page

- [ ] Route: `src/app/route-name/page.tsx`
- [ ] Metadata: title, description cho SEO
- [ ] Styling bằng Tailwind + HeroUI — KHÔNG CSS Module, KHÔNG inline style
- [ ] Responsive test: 375px → 768px → 1024px → 1440px
- [ ] Dark mode test: cả light và dark

## Tạo Component

- [ ] Đặt đúng folder: `components/ui/`, `components/sections/`, `components/layout/`, `components/three/`
- [ ] File name `PascalCase.tsx`
- [ ] Props interface: `ComponentNameProps`
- [ ] Chỉ `'use client'` khi thực sự cần
- [ ] `export default`

## Responsive & UI Safety (rule 11)

- [ ] Mobile-first: viết default → `md:` → `lg:` → `xl:`
- [ ] Không horizontal scroll trên 375px
- [ ] Text dài: `truncate` hoặc `line-clamp-*` hoặc `break-words`
- [ ] Padding: `px-4 md:px-6` — không quên padding mobile
- [ ] Max-width nhất quán: `max-w-7xl` cho content
- [ ] Touch targets ≥ 44×44px cho mobile
- [ ] Images: dùng `next/image` + `width` + `height` + `alt`
- [ ] Z-index: theo quy ước tầng (rule 11)
- [ ] Fixed/sticky: có offset content bên dưới (e.g. `pt-16`)

## UI/UX Checklist (rule 05)

- [ ] Hover states với transitions (150–300ms)
- [ ] `cursor-pointer` trên clickable elements
- [ ] Focus states visible cho keyboard nav
- [ ] Text contrast ≥ 4.5:1 (check cả light + dark mode)
- [ ] Không dùng emoji làm icon — dùng Lucide React
- [ ] `prefers-reduced-motion` respected

## 3D & Animation (nếu có) (rule 05)

- [ ] Three.js: `next/dynamic` + `ssr: false`
- [ ] Three.js: chỉ 1 Canvas trên trang
- [ ] Three.js Canvas: `aria-hidden="true"`
- [ ] Motion: `viewport={{ once: true }}` cho `whileInView`
- [ ] Motion: duration ≤ 0.8s, translate ≤ 50px
- [ ] Motion: hover scale ≤ 1.05

## Trước khi commit

- [ ] `yarn lint:fix`
- [ ] `yarn build` — không có errors
- [ ] Không có `console.log` trong production code
- [ ] Không có `any` types
- [ ] Không tạo CSS Module mới
- [ ] Icons dùng `lucide-react`
- [ ] DevTools: check 375px, 768px, 1024px, dark mode toggle
