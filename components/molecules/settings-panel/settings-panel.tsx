"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { menuItems } from "./settings-panel.utils";
import { ChevronRight } from "lucide-react";

const SettingsPanel = () => {
  const pathname = usePathname();

  return (
    <section className="bg-[var(--color-surface)] p-6 rounded-2xl shadow-[var(--shadow-card)] border border-[var(--color-border)] h-fit sticky top-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Settings
            </h3>
            <p className="text-sm text-[var(--color-text-muted)]">
              Manage your account preferences
            </p>
          </div>
        </div>
      </div>

      <nav className="space-y-2">
        {menuItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex items-center justify-between gap-3 px-4 py-2 rounded-xl transition-all duration-200 group relative",
                isActive
                  ? "bg-[#009379]/60 text-white shadow-lg"
                  : "text-[var(--color-text-primary)] hover:bg-[var(--color-background)] hover:text-[var(--color-primary)] hover:shadow-md"
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={clsx(
                    "p-2 rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/20"
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <span
                  className={clsx(
                    "font-medium text-sm transition-colors duration-200",
                    isActive
                      ? "text-white"
                      : "text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)]"
                  )}
                >
                  {label}
                </span>
              </div>

              <ChevronRight
                className={clsx(
                  "h-4 w-4 transition-all duration-200",
                  isActive
                    ? "text-white opacity-100"
                    : "text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                )}
              />

              {isActive && (
                <div className="absolute right-3 w-1.5 h-1.5 bg-white rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default SettingsPanel;
