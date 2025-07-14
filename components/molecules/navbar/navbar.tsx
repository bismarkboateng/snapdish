"use client"

import React, { useState } from "react";
import { links } from "./navbar.utils";

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <span className="text-[var(--color-orange-base)] font-bold text-xl">
            SnapDish
          </span>
        </div>

        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--color-text-primary)] hover:text-[var(--color-orange-dark)] font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-[var(--color-orange-base)] focus:outline-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-[var(--color-text-primary)] hover:text-[var(--color-orange-dark)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
