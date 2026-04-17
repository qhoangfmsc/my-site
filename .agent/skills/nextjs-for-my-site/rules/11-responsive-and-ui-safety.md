# 11 — Responsive Design & UI Safety

## Triết lý: Mobile-first, phòng hơn chữa

Viết mobile trước, mở rộng lên desktop. Mỗi component PHẢI hoạt động tốt trên 375px trước khi nghĩ đến desktop.

---

## Breakpoints

| Breakpoint | Tailwind | Thiết bị | Ưu tiên test |
|-----------|----------|----------|-------------|
| Default | (không prefix) | Mobile 375px | ⭐ BẮT BUỘC |
| `sm:` | 640px | Mobile landscape | |
| `md:` | 768px | Tablet | ⭐ BẮT BUỘC |
| `lg:` | 1024px | Desktop nhỏ | ⭐ BẮT BUỘC |
| `xl:` | 1280px | Desktop | |
| `2xl:` | 1536px | Desktop lớn | |

### Mobile-first pattern

```tsx
// ✅ ĐÚNG — viết mobile trước, thêm responsive sau
<h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="px-4 md:px-6 lg:px-8">

// ❌ SAI — viết desktop trước rồi override mobile
<h1 className="text-7xl sm:text-5xl md:text-3xl">
```

---

## Container & Layout

### Max-width nhất quán

```tsx
// ✅ Dùng 1 max-width pattern xuyên suốt
<div className="mx-auto max-w-7xl px-4 md:px-6">

// ❌ KHÔNG mix max-widths khác nhau giữa các sections
<section className="max-w-4xl">   {/* Section A */}
<section className="max-w-7xl">   {/* Section B — user cảm thấy layout nhảy */}
```

**Quy ước**: dùng `max-w-7xl` (`80rem` = `1280px`) cho content chính.

### Padding nhất quán

```tsx
// ✅ Padding responsive chuẩn
<div className="px-4 md:px-6 lg:px-8">

// ❌ KHÔNG quên padding trên mobile
<div className="px-8">  {/* Quá rộng trên 375px */}
<div className="">       {/* Không padding → text dính viền */}
```

---

## Tránh Overflow — Lỗi phổ biến nhất

### Horizontal scroll trên mobile

```tsx
// ✅ Chống overflow
<body className="overflow-x-hidden">
<div className="w-full max-w-full overflow-hidden">

// ❌ Nguyên nhân overflow thường gặp:
<div className="w-[800px]">           {/* Fixed width > viewport */}
<div className="flex gap-8 flex-nowrap">  {/* Flex không wrap */}
<pre className="whitespace-pre">       {/* Code block tràn */}
```

### Kiểm tra overflow

- Mọi element có `width` cố định (px, vw lớn) → PHẢI có `max-w-full` hoặc `overflow-hidden`.
- `flex` container → luôn xét `flex-wrap` trên mobile.
- Table/code block → wrap trong `overflow-x-auto`.

---

## Text — Tránh lỗi

### Truncation

```tsx
// ✅ Text dài → truncate hoặc line-clamp
<p className="truncate">Rất dài...</p>
<p className="line-clamp-2">Giới hạn 2 dòng...</p>

// ❌ Text dài không xử lý → tràn layout
<p>{veryLongString}</p>
```

### Word break

```tsx
// ✅ URLs, emails, paths có thể rất dài
<p className="break-words">{url}</p>
<code className="break-all">{longPath}</code>

// ❌ Từ dài không break → overflow container
```

### Font size trên mobile

```tsx
// ✅ Heading responsive — mobile nhỏ, desktop lớn
<h1 className="text-3xl md:text-5xl lg:text-7xl">

// ❌ Font quá lớn trên mobile
<h1 className="text-7xl">  {/* 72px trên 375px = 1-2 từ/dòng */}

// ❌ Font quá nhỏ cho body
<p className="text-xs">    {/* 12px — khó đọc */}
```

**Quy tắc**: body text tối thiểu `text-sm` (14px), heading mobile tối thiểu `text-2xl` (24px).

---

## Touch Targets — Tránh bấm nhầm trên mobile

```tsx
// ✅ Touch target tối thiểu 44x44px (WCAG 2.5.5)
<Button size="lg">Touch friendly</Button>
<a className="inline-flex items-center min-h-[44px] min-w-[44px] p-3">
  <Github size={20} />
</a>

// ❌ Touch target quá nhỏ
<button className="p-1 text-xs">×</button>  {/* ~20px — khó bấm */}
<a className="text-sm">Link</a>  {/* Chữ nhỏ, không padding */}
```

**Quy tắc**: mọi interactive element trên mobile PHẢI có vùng bấm ≥ 44×44px (bao gồm padding).

---

## Images & Media

### Responsive images

```tsx
// ✅ Next.js Image — auto responsive
import Image from 'next/image';
<Image
  src="/photo.jpg"
  alt="Mô tả nội dung"
  width={800}
  height={600}
  className="w-full h-auto rounded-lg"
/>

// ❌ KHÔNG dùng <img> tag — thiếu optimization
<img src="/photo.jpg" />

// ❌ KHÔNG quên alt text
<Image src="/photo.jpg" alt="" />
```

### Tránh layout shift (CLS)

```tsx
// ✅ Luôn set width + height hoặc aspect-ratio
<Image width={800} height={600} ... />
<div className="aspect-video bg-zinc-200 dark:bg-zinc-800">
  {/* Placeholder khi loading */}
</div>

// ❌ Image không có dimensions → layout nhảy khi load xong
```

---

## Z-index — Quy ước tầng

| Tầng | z-index | Dùng cho |
|------|---------|----------|
| Content | `z-0` | Nội dung bình thường |
| 3D Background | `-z-10` | Three.js Canvas (decorative) |
| Elevated | `z-10` | Hero text overlay trên 3D |
| Sticky | `z-30` | Sticky elements (section headers) |
| Navbar | `z-40` | Fixed/floating navbar |
| Overlay | `z-50` | Modal backdrop, drawer |
| Modal | `z-50` | Modal content |
| Toast | `z-[60]` | Toast notifications |

```tsx
// ✅ Dùng đúng quy ước
<div className="-z-10">  {/* 3D scene background */}
<nav className="z-40">   {/* Navbar */}
<Modal className="z-50"> {/* Modal */}

// ❌ KHÔNG dùng z-index random
<div className="z-[9999]">  {/* Z-index war */}
```

---

## Fixed / Sticky — Tránh đè content

### Navbar

```tsx
// ✅ Fixed navbar — reserve space cho content bên dưới
<nav className="fixed top-0 inset-x-0 h-16 z-40">
<main className="pt-16">  {/* Offset bằng chiều cao navbar */}

// ✅ Floating navbar (tốt hơn) — có margin từ cạnh
<nav className="fixed top-4 left-4 right-4 z-40 rounded-2xl backdrop-blur-lg">
<main className="pt-24">  {/* Offset = navbar height + top margin + extra space */}

// ❌ Content bị ẩn sau navbar
<nav className="fixed top-0 h-16 z-40">
<main>  {/* Không có padding-top → heading bị che */}
```

### Bottom elements trên mobile

```tsx
// ✅ Tránh đè safe area trên iPhone
<div className="fixed bottom-0 pb-safe">  {/* env(safe-area-inset-bottom) */}

// ❌ Button cố định ở bottom bị viền iPhone che
<button className="fixed bottom-0">
```

---

## Dark Mode — Tránh lỗi contrast

### Luôn define cả light và dark

```tsx
// ✅ Explicit cả 2 modes
<div className="bg-white dark:bg-zinc-900">
  <p className="text-zinc-900 dark:text-zinc-100">Visible cả 2</p>
  <p className="text-zinc-500 dark:text-zinc-400">Muted text</p>
  <div className="border-zinc-200 dark:border-zinc-800">
</div>

// ❌ Chỉ define 1 mode → invisible ở mode kia
<div className="bg-white">
  <p className="text-white">  {/* Ẩn trên light mode */}
</div>
```

### Contrast tối thiểu

| Element | Light mode | Dark mode | Ratio |
|---------|-----------|-----------|-------|
| Body text | `text-zinc-700` trên `bg-white` | `text-zinc-300` trên `bg-zinc-950` | ≥ 4.5:1 |
| Heading | `text-zinc-950` trên `bg-white` | `text-zinc-50` trên `bg-zinc-950` | ≥ 7:1 |
| Muted | `text-zinc-500` trên `bg-white` | `text-zinc-400` trên `bg-zinc-950` | ≥ 4.5:1 |
| Border | `border-zinc-200` | `border-zinc-800` | Visible |

---

## Hình dáng tổng quát — Quick Checks

Trước khi commit, mở DevTools, test nhanh:

1. **375px** — có horizontal scrollbar không? Text có bị tràn không?
2. **768px** — layout 2 columns hoạt động chưa?
3. **1024px** — layout desktop đúng chưa?
4. **Toggle dark mode** — tất cả text/border/bg có visible không?
5. **Zoom 200%** — layout có vỡ không?
6. **Thử bấm tất cả buttons/links** — touch target đủ lớn không?
