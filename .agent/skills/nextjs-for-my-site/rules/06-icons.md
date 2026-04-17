# 06 — Icons

## Thư viện: Lucide React

**Lucide React** là thư viện icon DUY NHẤT trong project.

```tsx
// ✅ Import từng icon cần dùng
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react';

// ❌ KHÔNG dùng thư viện icon khác
import { GithubOutlined } from '@ant-design/icons';
import { FaGithub } from 'react-icons/fa';
```

## Sử dụng

```tsx
// Size mặc định: 24px. Customize bằng size prop
<Github size={20} />
<Mail size={16} className="text-default-500" />

// Trong Button
<Button startContent={<Github size={18} />}>
  GitHub
</Button>

// Với color
<ExternalLink size={14} className="text-primary" />
```

## Quy tắc

1. **KHÔNG** dùng emoji làm icon trong UI.
2. **KHÔNG** dùng inline SVG thay Lucide — trừ khi icon custom không có trong Lucide.
3. **KHÔNG** dùng `@ant-design/icons`, `react-icons`, `heroicons` — chỉ Lucide React.
4. Tham khảo icon tại: https://lucide.dev/icons

## Icon Sizes

| Context | Size | Ví dụ |
|---------|------|-------|
| Inline text | 14–16px | Button icon, link icon |
| Standalone | 20–24px | Navigation, card icon |
| Hero/Feature | 32–48px | Feature section icons |
