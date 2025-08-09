"use client";

import React, { useState } from "react";
import { links } from "./navbar.utils";
import { Menu, X } from "lucide-react";
import Logo from "@/components/molecules/logo/logo";

import Link from "next/link";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-surface)]/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-[var(--shadow-default)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 w-full">
          <Link href="/" className="flex items-center group">
            <Logo showText={true} size="w-10 h-10" />
          </Link>

          <div className="hidden md:flex items-center justify-end space-x-8 w-full">
            {links
              .filter(
                (link) => link.label !== "Home" && link.label !== "Sign In"
              )
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[var(--color-text-primary)] hover:text-[var(--color-primary)] font-medium transition-colors duration-200 group px-3 py-2"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary)] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            <Link
              href="/register"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group ml-4"
              style={{
                background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)`,
                boxShadow: "var(--shadow-default)",
              }}
            >
              <span className="flex items-center">
                Get Started
                <svg
                  className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <X className="w-7 h-7 transition-all duration-300" />
              ) : (
                <Menu className="w-7 h-7 transition-all duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 py-4 space-y-3 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-[var(--color-text-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] rounded-lg font-medium transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4 border-t border-[var(--color-border)] space-y-3">
            <Link
              href="/login"
              className="block px-4 py-3 text-[var(--color-text-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] rounded-lg font-medium transition-colors duration-200 text-center"
              onClick={() => setOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="block px-4 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-center"
              style={{
                background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)`,
              }}
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
