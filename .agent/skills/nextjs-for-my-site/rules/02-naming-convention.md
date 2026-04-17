# 02 — Naming Convention

## Files & Directories

| Loại | Convention | Ví dụ |
|------|-----------|-------|
| Component | `PascalCase.tsx` | `Hero.tsx`, `ProjectCard.tsx` |
| Page / Layout | `page.tsx` / `layout.tsx` | Cố định bởi Next.js |
| Utility / lib | `kebab-case.ts` | `utils.ts`, `fonts.ts` |
| Hook | `usePascalCase.ts` | `useTheme.ts` |
| Type file | `kebab-case.ts` hoặc `index.ts` | `types/index.ts` |
| Data file | `kebab-case.ts` | `projects.ts` |

## Variables & Functions

| Loại | Convention | Ví dụ |
|------|-----------|-------|
| Variable | `camelCase` | `userName`, `isLoading` |
| Function | `camelCase` | `handleSubmit`, `formatDate` |
| Component | `PascalCase` | `ProjectCard` |
| Constant | `UPPER_SNAKE_CASE` | `SITE_URL`, `MAX_PROJECTS` |
| Boolean | `is/has/can/should` prefix | `isVisible`, `hasError` |
| Event handler | `handle` prefix | `handleClick` |
| Callback prop | `on` prefix | `onPress` |

## TypeScript

| Loại | Convention | Ví dụ |
|------|-----------|-------|
| Interface | `PascalCase` | `Project`, `Skill` |
| Type alias | `PascalCase` | `Theme`, `NavItem` |
| Enum | `PascalCase` (members UPPER_SNAKE) | `SkillLevel.ADVANCED` |
| Props | `ComponentNameProps` | `ProjectCardProps` |
| Generic | Single uppercase | `T`, `K` |

## Interface vs Type

- **Interface** → object shapes (extendable): `interface Project { ... }`
- **Type** → unions, intersections, computed: `type Theme = 'light' | 'dark'`
