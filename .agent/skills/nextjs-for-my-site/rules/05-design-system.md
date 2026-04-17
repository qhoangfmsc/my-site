# 05 — Design System & UI/UX Guidelines

## Nguyên tắc thiết kế (từ UI/UX Pro Max Skill)

### Pre-Delivery Checklist

Mọi UI component/page PHẢI đạt các tiêu chuẩn sau trước khi merge:

- [ ] **Không dùng emoji làm icon** — chỉ dùng SVG: Lucide React
- [ ] **`cursor-pointer`** trên tất cả clickable elements
- [ ] **Hover states** với smooth transitions (150–300ms)
- [ ] **Text contrast** ≥ 4.5:1 (WCAG AA)
- [ ] **Focus states** visible cho keyboard navigation
- [ ] **`prefers-reduced-motion`** được respected
- [ ] **Responsive**: test tại 375px, 768px, 1024px, 1440px

### Anti-Patterns — TUYỆT ĐỐI TRÁNH

- ❌ Neon colors chói mắt trên light theme
- ❌ Animations quá nhanh (<100ms) hoặc quá chậm (>500ms)
- ❌ Thiếu spacing consistency
- ❌ Font size < 14px cho body text
- ❌ Quá nhiều font families (tối đa 2)
- ❌ Placeholder text thay cho real content
- ❌ 3D scene ở nhiều nơi — gây ngộp, chậm trang
- ❌ Scroll hijacking — KHÔNG chiếm quyền scroll của user
- ❌ Infinite decorative animations — CHỈ dùng cho loading indicators

---

## Three.js — Quy tắc sử dụng

### Triết lý: "1 wow focal point"

Three.js CHỈ được dùng tạo **1 điểm nhấn duy nhất** — thường là Hero section background. Toàn bộ phần còn lại dùng framer-motion 2D animations. Đây là cách Linear, Vercel, Stripe áp dụng: 1 focal point 3D ấn tượng + scroll animations tinh tế.

### Quy tắc bắt buộc

1. **Tối đa 1 Canvas trên toàn trang** — KHÔNG đặt nhiều Three.js scene trên cùng 1 page.
2. **Lazy load bắt buộc** — dùng `next/dynamic` + `ssr: false`. Three.js KHÔNG bao giờ render phía server.
3. **Subtlety > Spectacle** — scene phải nhẹ nhàng, tinh tế. KHÔNG chèn quá nhiều objects, particles, hay effects phức tạp.
4. **Mouse interaction nhẹ** — cho phép scene phản hồi cursor (gentle follow, parallax nhẹ), nhưng KHÔNG quá phô trương.
5. **Fallback trên mobile** — nếu scene nặng, giảm particle count hoặc thay bằng gradient/static image trên viewport < 768px.
6. **Fixed height cho container** — PHẢI set chiều cao cố định cho 3D container để tránh layout shift.

### Pattern chuẩn

```tsx
// components/three/HeroScene.tsx
'use client';

import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Geometric shapes — giữ đơn giản, tối đa 3-5 objects */}
        <mesh>
          <torusGeometry args={[1, 0.3, 16, 32]} />
          <meshStandardMaterial color="#2563EB" wireframe />
        </mesh>
      </Float>
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
```

```tsx
// Lazy load trong page
import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-zinc-950" />,
});
```

### Anti-Patterns cho 3D

- ❌ Multiple Canvas trên 1 page
- ❌ OrbitControls cho phép user xoay tự do (gây mất hướng)
- ❌ Quá nhiều particles (>500 trên mobile, >2000 trên desktop)
- ❌ Post-processing effects nặng (bloom, SSAO) trừ khi thực sự cần
- ❌ Import model 3D lớn (>1MB) mà không optimize
- ❌ Render Three.js phía server — PHẢI `ssr: false`

---

## Framer Motion — Quy tắc sử dụng

### Triết lý: "Tinh tế, có mục đích"

Mỗi animation PHẢI có lý do tồn tại: hướng dẫn mắt user, tạo cảm giác responsive, hoặc kể chuyện khi scroll. KHÔNG animate chỉ vì "cho đẹp".

### Patterns được phép

#### 1. Scroll Reveal — fade in khi scroll vào viewport

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  viewport={{ once: true, margin: '-50px' }}
>
  {/* Content */}
</motion.div>
```

- `viewport={{ once: true }}` — CHỈ animate 1 lần, KHÔNG lặp lại khi scroll lên xuống.
- `margin: '-50px'` — trigger sớm hơn 50px để cảm giác tự nhiên.

#### 2. Stagger Children — items xuất hiện lần lượt

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

<motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {/* Card */}
    </motion.div>
  ))}
</motion.div>
```

- Stagger delay: **0.08–0.15s** giữa các items. Quá nhanh → không thấy, quá chậm → user chờ lâu.

#### 3. Hover Micro-interaction — feedback khi hover

```tsx
<motion.div
  whileHover={{ scale: 1.02, y: -2 }}
  transition={{ duration: 0.2, ease: 'easeOut' }}
>
  <Card>...</Card>
</motion.div>
```

- Scale: **1.01–1.03**. KHÔNG vượt quá 1.05 — gây layout shift.
- Duration: **150–250ms**.

#### 4. Entrance Animation — lần đầu load page

```tsx
<motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
>
```

- Chỉ dùng cho Hero heading, CTA buttons. KHÔNG animate mọi thứ khi load.
- Delay lần lượt: heading → subtitle → buttons (mỗi delay thêm 0.1–0.2s).

### Anti-Patterns cho Motion

- ❌ `whileInView` mà KHÔNG có `viewport={{ once: true }}` — animate lại khi scroll lên
- ❌ Translate quá xa (>50px) — cảm giác giật
- ❌ Duration > 0.8s cho scroll reveal — user không chờ được
- ❌ Animate tất cả mọi thứ — chỉ animate elements quan trọng
- ❌ Spring animation với bounce cho text — gây khó đọc
- ❌ Scale > 1.05 khi hover — gây layout shift

### Reduced Motion

BẮT BUỘC respect `prefers-reduced-motion`:

```tsx
// Component wrapper reusable
'use client';
import { motion, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.div>
  );
}
```

---

## Design Tokens

### Color Palette (Monochrome + Blue Accent)

| Role | Light Mode | Dark Mode | Tailwind |
|------|-----------|-----------|----------|
| Background | `#FAFAFA` | `#09090B` | `bg-zinc-50` / `dark:bg-zinc-950` |
| Surface | `#FFFFFF` | `#18181B` | `bg-white` / `dark:bg-zinc-900` |
| Border | `#E4E4E7` | `#27272A` | `border-zinc-200` / `dark:border-zinc-800` |
| Text Primary | `#09090B` | `#FAFAFA` | `text-zinc-950` / `dark:text-zinc-50` |
| Text Secondary | `#71717A` | `#A1A1AA` | `text-zinc-500` / `dark:text-zinc-400` |
| Accent (CTA) | `#2563EB` | `#3B82F6` | `text-blue-600` / `dark:text-blue-500` |

### Spacing Scale

Dùng Tailwind spacing scale, KHÔNG tạo custom values trừ khi cần thiết:

```
4px (1), 8px (2), 12px (3), 16px (4), 20px (5), 24px (6), 32px (8), 40px (10), 48px (12), 64px (16), 80px (20), 96px (24)
```

### Typography Scale

```tsx
// Hero heading
<h1 className="text-5xl md:text-7xl font-bold tracking-tight">

// Section heading
<h2 className="text-3xl md:text-4xl font-bold">

// Sub heading
<h3 className="text-xl md:text-2xl font-semibold">

// Body text
<p className="text-base text-zinc-600 dark:text-zinc-400">

// Caption / label
<span className="text-sm text-zinc-500 dark:text-zinc-500">
```

---

## Component Design Guidelines

### Section Layout

```tsx
// ✅ Section layout chuẩn — dùng ScrollReveal wrapper
<section className="py-20 md:py-32">
  <div className="mx-auto max-w-7xl px-4 md:px-6">
    <ScrollReveal>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Section Title</h2>
      <p className="text-zinc-500 mb-12 max-w-2xl">Description</p>
    </ScrollReveal>
    {/* Content with stagger */}
  </div>
</section>
```

### Cards

```tsx
// ✅ Card với hover micro-interaction
<motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
  <Card isPressable className="border border-zinc-200 dark:border-zinc-800 transition-colors duration-200 hover:border-blue-500/50">
    ...
  </Card>
</motion.div>
```

### Gradient Text

```tsx
<span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
  Gradient Heading
</span>
```

---

## Accessibility

1. Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
2. Alt text cho images — mô tả nội dung, không phải "image of...".
3. HeroUI components đã accessible by default (React Aria) — KHÔNG override `aria-*` props trừ khi cần.
4. Skip-to-content link ở đầu page.
5. Color KHÔNG phải cách duy nhất truyền đạt thông tin.
6. Three.js Canvas: thêm `aria-hidden="true"` — decorative, screen reader bỏ qua.
7. `prefers-reduced-motion`: disable Three.js rotation + tất cả framer-motion animations.
