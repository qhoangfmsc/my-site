---
name: nextjs-for-my-site
description: Quy tắc và best practices cho dự án personal website Next.js. Đọc skill này trước khi tạo mới hoặc sửa đổi bất kỳ file nào trong project.
---

# Next.js Personal Website — Coding Standards

## Tech Stack

Chi tiết version và lý do chọn → xem `rules/00-tech-stack.md`

**Core**: Next.js 16 · React 19 · TypeScript 5 · HeroUI 3 · Tailwind CSS v4 · Lucide React · Framer Motion · Biome 2

**3D & Animation**: Three.js · React Three Fiber · Drei · Framer Motion · next-themes

## Rules

**BẮT BUỘC đọc tất cả rules trước khi code.**

| #   | File                                 | Chủ đề                                    |
| --- | ------------------------------------ | ----------------------------------------- |
| 00  | `rules/00-tech-stack.md`             | **Tech stack, versions & version policy** |
| 01  | `rules/01-project-structure.md`      | Cấu trúc thư mục                         |
| 02  | `rules/02-naming-convention.md`      | Đặt tên file, biến, hàm, type             |
| 03  | `rules/03-component-convention.md`   | Server vs Client Component, HeroUI       |
| 04  | `rules/04-styling.md`               | Tailwind CSS v4 + HeroUI theming         |
| 05  | `rules/05-design-system.md`         | Design system, Three.js & Motion rules   |
| 06  | `rules/06-icons.md`                 | Lucide React — icon duy nhất              |
| 07  | `rules/07-linting-and-formatting.md` | Biome config, import sorting              |
| 08  | `rules/08-error-handling.md`        | Error boundaries, 404                     |
| 09  | `rules/09-utilities.md`             | date-fns patterns                         |
| 10  | `rules/10-new-feature-checklist.md` | Checklist khi tạo feature mới             |
| 11  | `rules/11-responsive-and-ui-safety.md` | Responsive design & phòng lỗi UI      |
| 99  | `rules/99-project-description.md`   | Mô tả project & page overview            |

## Nguyên tắc

1. **Đọc rules trước, code sau.**
2. **Không tự ý thay đổi convention** — cập nhật rule file nếu cần.
3. **Consistency trên hết** — code mới phải tuân theo pattern đã có.
