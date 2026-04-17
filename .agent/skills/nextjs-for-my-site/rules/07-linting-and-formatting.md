# 07 — Linting & Formatting

## Công cụ: Biome 2

Config tại `biome.json`. KHÔNG dùng ESLint/Prettier.

## Formatting

| Rule | Giá trị |
|------|---------|
| Indent | **Tab** (width 2) |
| Line width | **100** |
| Quotes (JS) | **Single** `'...'` |
| Quotes (JSX) | **Double** `"..."` |
| Semicolons | **Always** |
| Trailing commas | **All** |
| Arrow parens | **Always** |

## Linting

- `recommended`: true
- `noUnusedVariables`: warn
- `noUnusedImports`: warn
- `useExhaustiveDependencies`: warn
- `noExplicitAny`: warn
- Domains: `next`, `react` — recommended

## Commands

```bash
yarn lint          # Check only
yarn lint:fix      # Check + auto fix
yarn format        # Format code
yarn check         # Check + fix + unsafe fixes
```

## Import Sorting

Biome tự organize (`organizeImports: "on"`):

1. Built-in (`react`, `next/...`)
2. External (`@heroui/react`, `lucide-react`, `framer-motion`)
3. Internal (`@/...`)
4. Relative (`./`, `../`)

> Chạy `yarn format` để Biome xử lý. KHÔNG sort thủ công.

## Quy tắc

1. Chạy `yarn lint:fix` trước khi commit.
2. KHÔNG disable lint rules bằng comment trừ khi có lý do — phải ghi chú.
3. KHÔNG dùng `any` — dùng `unknown` + type guard hoặc define type cụ thể.
4. Unused variables → xóa hoặc prefix `_`.
