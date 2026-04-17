# 08 — Error Handling & Logging

## Error Boundaries (Next.js)

```
app/
├── error.tsx          # Global error boundary ('use client')
├── not-found.tsx      # 404 page
└── loading.tsx        # Global loading UI
```

- `error.tsx` **phải** là Client Component, nhận `{ error: Error; reset: () => void }`.

```tsx
'use client';
import { Button } from '@heroui/react';
import { RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">Đã xảy ra lỗi</h2>
      <p className="text-zinc-500">{error.message}</p>
      <Button variant="primary" onPress={reset}>
        <RefreshCw size={16} />
        Thử lại
      </Button>
    </div>
  );
}
```

## 404 Page

```tsx
// app/not-found.tsx
import { Button } from '@heroui/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl text-zinc-500">Trang không tồn tại</p>
      <Button as={Link} href="/" variant="secondary">
        Về trang chủ
      </Button>
    </div>
  );
}
```

## Error Handling Patterns

```tsx
// Try/catch cho async operations
try {
  const data = await fetchData();
} catch (error) {
  console.error('Fetch failed:', error);
  // Show error UI hoặc fallback
}
```

**Quy tắc**: Luôn `try/catch` async operations. KHÔNG swallow errors silently.
