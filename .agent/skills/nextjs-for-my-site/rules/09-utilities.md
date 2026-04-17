# 09 — Utilities

## date-fns

Xử lý ngày tháng dùng **date-fns**. KHÔNG dùng `dayjs`, `moment`, hay `Date` thủ công.

```tsx
// ✅ Import từng hàm
import { format, parseISO } from 'date-fns';

// ❌ KHÔNG import cả thư viện
import * as dateFns from 'date-fns';
```

### Patterns

```tsx
// Format hiển thị
format(parseISO(post.publishedAt), 'dd/MM/yyyy');

// Relative time
import { formatDistanceToNow } from 'date-fns';
formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true });
```

## Tóm tắt

| Việc | Dùng | KHÔNG dùng |
|------|------|-----------|
| Date format/parse | `date-fns` (named import) | `dayjs`, `moment`, manual `Date` |
