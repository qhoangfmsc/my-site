# 03 — Quy tắc viết Component

## Server vs Client Component

- **Mặc định Server Component.** Chỉ thêm `'use client'` khi cần hooks, browser APIs, event handlers, hoặc thư viện client-only (HeroUI interactive components).
- **Đẩy `'use client'` xuống thấp nhất** — tách phần interactive thành component riêng trong `components/`.

## Cấu trúc Component

```tsx
// 1. React/Next.js built-ins
// 2. Third-party (HeroUI, lucide-react, framer-motion)
// 3. Internal (@/...)
// 4. Relative (./)

import { type FC } from 'react';
import { Button, Card, CardBody, CardHeader } from '@heroui/react';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onPress?: () => void;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, onPress }) => {
  return (
    <Card className="border border-zinc-200 dark:border-zinc-800" isPressable onPress={onPress}>
      <CardHeader className="flex gap-3">
        <h3 className="text-lg font-semibold">{project.title}</h3>
      </CardHeader>
      <CardBody>
        <p className="text-zinc-500">{project.description}</p>
        <Button
          as="a"
          href={project.url}
          variant="secondary"
          size="sm"
        >
          View Project
          <ExternalLink size={14} />
        </Button>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
```

## HeroUI v3 Rules

### Import

```tsx
// ✅ Named import từ '@heroui/react'
import { Button, Input, Card, Modal, Table } from '@heroui/react';

// ❌ KHÔNG import path trực tiếp
import Button from '@heroui/button';
```

### Provider Setup

HeroUI v3 sử dụng `RouterProvider` (re-exported từ `react-aria-components`):

```tsx
// components/providers/Providers.tsx
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

> ⚠️ **KHÔNG dùng `HeroUIProvider`** — đã không còn tồn tại trong v3. Dùng `RouterProvider`.

### Button API

HeroUI v3 Button dùng `variant` thay vì `color`, children thay vì `startContent`/`endContent`:

```tsx
// ✅ HeroUI v3 — dùng variant
<Button variant="primary" size="lg">
  Submit
  <ArrowRight size={16} />
</Button>

// ❌ SAI — color và endContent không tồn tại trong v3
<Button color="primary" endContent={<ArrowRight />}>Submit</Button>
```

**Variants có sẵn:** `primary`, `secondary`, `tertiary`, `outline`, `ghost`, `danger`, `danger-soft`

**Sizes:** `sm`, `md`, `lg`

### Event Handlers

HeroUI dùng `onPress` thay `onClick` cho các interactive components (Button, Card, etc.):

```tsx
// ✅ HeroUI convention
<Button onPress={handleSubmit}>Submit</Button>

// ❌ Tránh onClick trên HeroUI components
<Button onClick={handleSubmit}>Submit</Button>
```

- **KHÔNG** override HeroUI internal styles bằng Tailwind `!important`.
- Tailwind cho layout, spacing. HeroUI cho interactive components.

## Export Convention

| Loại | Export |
|------|--------|
| Page & Layout | `export default function` |
| Component | `export default` (1 component/file) |
| Utilities/hooks | Named export |
| Types | `export type` / `export interface` |
