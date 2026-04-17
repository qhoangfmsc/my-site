# 04 — Styling

## Thứ tự ưu tiên

1. **Tailwind CSS v4 utility classes** — layout, spacing, colors, typography
2. **HeroUI component props** — `size`, `variant`, `radius`, `fullWidth`
3. **HeroUI Theme (CSS variables)** — branding qua Tailwind + HeroUI theme
4. **CSS (globals.css)** — CHỈ cho `@keyframes`, `@theme`, custom animations

> ⚠️ **KHÔNG tạo CSS Module mới** (`.module.css`). Code mới dùng Tailwind.

## Tailwind CSS v4 + HeroUI

```css
/* globals.css */
@import "tailwindcss";
@import "@heroui/styles";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

## Kết hợp Tailwind + HeroUI

```tsx
// ✅ Tailwind cho layout, HeroUI cho interactive components
<div className="flex flex-col gap-6 p-8">
  <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
  <Card className="max-w-lg">
    <CardBody>
      <p className="text-zinc-500 dark:text-zinc-400">Content here</p>
    </CardBody>
  </Card>
</div>

// ❌ KHÔNG override HeroUI internals
<Button className="!bg-red-500">Delete</Button>

// ❌ KHÔNG dùng native HTML thay HeroUI component
<button className="px-4 py-2 bg-blue-500 rounded">Click</button>
// → Dùng <Button variant="primary"> thay thế
```

## HeroUI Theme Customization

Provider setup tập trung trong `components/providers/Providers.tsx`:

```tsx
'use client';
import { RouterProvider } from '@heroui/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter } from 'next/navigation';

export default function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <RouterProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </RouterProvider>
  );
}
```

- Thay đổi colors → chỉnh CSS variables trong `globals.css` hoặc HeroUI theme.
- HeroUI tự động hỗ trợ dark mode qua `next-themes`.
- **KHÔNG** override bằng CSS `!important`.

## KHÔNG dùng Inline Style

> ⚠️ **KHÔNG viết `style={{}}` trực tiếp trên JSX.** Ưu tiên Tailwind CSS tối đa.

### Nguyên tắc

1. **Tailwind là ưu tiên số 1** — tất cả spacing, color, font size, border, radius, layout... đều dùng Tailwind.
2. **HeroUI props** — dùng `variant`, `size`, `radius` trên HeroUI components.
3. **Dynamic values** — chỉ dùng `style={{}}` khi giá trị thực sự dynamic mà Tailwind không thể handle.

### Ví dụ

```tsx
// ❌ SAI — inline style cho static values
<p style={{ fontSize: 13, fontWeight: 600 }}>Hello</p>

// ✅ ĐÚNG — Tailwind classes
<p className="text-sm font-semibold">Hello</p>

// ✅ ĐÚNG — dynamic value từ data
<div style={{ background: item.gradient }}>...</div>
```

## Responsive

Dùng breakpoints Tailwind: `sm:640` `md:768` `lg:1024` `xl:1280` `2xl:1536`.

## Dark Mode

HeroUI + `next-themes` hỗ trợ dark mode tự động:

```tsx
// Tailwind dark: prefix
<div className="bg-white dark:bg-black">
  <p className="text-zinc-900 dark:text-zinc-100">Auto dark mode</p>
</div>

// HeroUI components tự động switch theme
<Card> {/* Tự động đổi style theo theme */}
  <CardBody>Content</CardBody>
</Card>
```
