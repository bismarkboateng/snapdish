# Snapdish Architecture

This document provides a comprehensive overview of the folder and file structure of the Snapdish codebase, describing the purpose and relationships of each major part of the application. This is intended to help new contributors, maintainers, and reviewers understand the architecture and organization of the project.

---

## Root Directory
- `.env.local` — Environment variables for local development.
- `.git/` — Git version control folder.
- `.gitignore` — Files and folders to ignore in git.
- `.next/` — Next.js build output.
- `README.md` — Main project documentation.
- `components.json` — Component registry/configuration.
- `eslint.config.mjs` — ESLint configuration for code linting.
- `next-env.d.ts` — Next.js TypeScript environment declarations.
- `next.config.ts` — Next.js configuration.
- `package.json` — Project dependencies and scripts.
- `pnpm-lock.yaml` — Dependency lock file for pnpm.
- `postcss.config.mjs` — PostCSS configuration.
- `tsconfig.json` — TypeScript configuration.

---

## Main Folders

### `app/`
- Contains all Next.js application routes and layouts, organized by feature and route group.
  - `(auth)/` — Auth-related pages (login, register, forgot/reset password, success).
  - `(dashboard)/` — Dashboard and settings pages.
  - `(root)/` — Root landing page and layout.
  - `api/` — API route handlers for auth, donations, health, users.

### `appwrite/`
- Appwrite backend integration and configuration.
  - `auth/` — Auth logic, handlers, schemas, validations, and utilities.
  - `config.ts` — Appwrite configuration.
  - `const.ts` — Appwrite constants.
  - `donations/` — Donation-related backend logic.
  - `users/` — User-related backend logic.

### `components/`
- Reusable UI components, organized by atomic design principles.
  - `atoms/` — Basic UI elements (button, input, checkbox, etc.).
  - `molecules/` — Composed UI elements (sidebar, navbar, footer, etc.).
  - `organisms/` — Complex UI structures (dashboard, donation grid, forms, etc.).

### `features/`
- Application features, hooks, services, and types.
  - `auth/` — Authentication feature logic.
  - `donations/` — Donation feature logic.
  - `users/` — User feature logic.

### `hooks/`
- Custom React hooks for shared logic (e.g., mobile detection, route loading).

### `lib/`
- Utility functions and API clients.
  - `api/` — HTTP client, API routes/types.
  - `utils.ts` — General utilities.

### `providers/`
- React context providers (e.g., loading state, react-query).

### `public/`
- Static assets (images, fonts, etc.).

### `styles/`
- Global and modular CSS files (animations, colors, base styles).

---

## Example Deep Structure

### `components/atoms/`
- `avatar.tsx`, `badge.tsx`, `button.tsx`, `checkbox.tsx`, etc.
- `button/` — Button variants and logic.
- `charts/` — Chart components.

### `components/molecules/`
- `app-sidebar/` — Sidebar logic and types.
- `auth-sidepanel/` — Auth panel UI.
- `cta/`, `faq/`, `footer/`, `google-button/`, `hero/`, `how-it-works/`, `impact/`, `navbar/`, `settings-panel/`, etc.

### `components/organisms/`
- `dashboard/`, `donate-food/`, `donation-grid/`, `forgot-password/`, `login/`, `my-donations/`, `my-requests/`, `register/`, `request-food/`, `reset-password/`

---

## Routing & Feature Structure
- Next.js app directory routing is used for modular, file-based routing.
- Features are separated for maintainability and scalability.
- UI follows atomic design: atoms → molecules → organisms.
- Backend logic is separated in `appwrite/` for clear API/service boundaries.
