# Snapdish

Snapdish is a full-stack web application for managing food donations, requests, and user profiles. Built with Next.js, TypeScript, Tailwind CSS, and Appwrite, it provides a modern, responsive dashboard for donors and recipients, with authentication, donation management, and real-time updates.

---

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Core Concepts](#core-concepts)
- [How It Works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **Authentication:** Register, login, password reset, and social login (Google).
- **Dashboard:** Personalized dashboard for donors and recipients.
- **Donation Management:** Create, view, approve, and decline donation requests.
- **Profile & Settings:** Manage user profile, preferences, and settings.
- **Responsive Design:** Optimized for desktop, tablet, and mobile.
- **Atomic UI:** Modular, reusable components for maintainability.
- **Appwrite Integration:** Secure backend for auth, donations, and users.

---

## Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   # or npm/yarn/bun
   ```
2. **Configure environment:**
   - Copy `.env.local.example` to `.env.local` and set your Appwrite credentials.
3. **Run development server:**
   ```bash
   pnpm dev
   # or npm run dev
   ```
4. **Open in browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

---

## Folder Structure
See `architecture.md` for a full breakdown.
- `app/` — Next.js routes and layouts
- `appwrite/` — Backend logic and integration
- `components/` — UI components (atoms, molecules, organisms)
- `features/` — Feature logic (auth, donations, users)
- `hooks/` — Custom React hooks
- `lib/` — Utilities and API clients
- `providers/` — React context providers
- `public/` — Static assets
- `styles/` — Global and modular CSS

---

## Core Concepts
- **Atomic Design:** UI is built from atoms (basic elements), molecules (composed elements), and organisms (complex structures).
- **Modular Routing:** Next.js app directory for file-based routing and layouts.
- **Appwrite Backend:** Handles authentication, user management, and donation logic securely.
- **React Context & Hooks:** State management and shared logic via providers and custom hooks.

---

## How It Works
1. **Authentication:**
   - Users register or login via email/password or Google.
   - Auth state is managed via Appwrite and React context.
2. **Dashboard:**
   - Users see personalized dashboard with donation stats, requests, and profile info.
   - Responsive sidebar and navigation for easy access.
3. **Donations:**
   - Donors can create new donations, view requests, and approve/decline them.
   - Recipients can request donations and track status.
4. **Profile & Settings:**
   - Users can update profile, change password, and manage preferences.
5. **Real-Time Updates:**
   - UI updates automatically on donation/request status changes.

---

## Contributing
1. Fork the repo and clone locally.
2. Create a new branch for your feature/fix.
3. Commit changes and push to your branch.
4. Open a pull request with a clear description.

---

## License
MIT

---

For a detailed architecture overview, see `architecture.md`. For questions or support, open an issue or contact the maintainers.
