"use client";

import { impactStats } from "./impact.mock";
import { useInView } from "./use-in-view";
import { ImpactCard } from "./impact-card";
import Link from "next/link";

export const Impact: React.FC = () => {
  const [sectionRef, isVisible] = useInView(0.2);

  return (
    <section id="impact" ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-secondary-light)]/30 to-[var(--color-primary-light)]/20" />

      <div className="absolute top-32 left-16 w-24 h-24 bg-[var(--color-primary)]/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-[var(--color-secondary)]/15 rounded-full blur-3xl animate-bounce" />
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-[var(--color-accent-orange)]/20 rounded-full blur-xl animate-ping" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-secondary-light)] text-[var(--color-primary-dark)] text-sm font-medium
          mb-6 shadow-[var(--shadow-default)]">
            <span className="w-2 h-2 bg-[var(--color-success)] rounded-full mr-2 animate-pulse"></span>{" "}
            Real Impact
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-[var(--color-text-primary)]">
              Together, We&apos;re
            </span>
            <br />
            <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[var(--color-accent-orange)] bg-clip-text text-transparent">
              Making Impact
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed">
            See the incredible difference our community is making, one shared
            meal at a time
          </p>
        </div>

        <div
          className={`grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16 ${
            isVisible
              ? "animate-in slide-in-from-bottom-10 duration-1000"
              : "opacity-0"
          }`}
        >
          {impactStats.map((stat, index) => (
            <ImpactCard
              key={stat.label}
              stat={stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6">
            <p className="text-lg text-[var(--color-text-muted)] max-w-md">
              Join our growing community and be part of something bigger
            </p>
            <Link
              href="/register"
              className="group inline-flex items-center px-6 py-3 md:px-7 md:py-3 lg:px-8 lg:py-4 text-base md:text-[1.05rem] lg:text-lg font-semibold text-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap"
              style={{
                background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)`,
                boxShadow: "var(--shadow-default)",
              }}
            >
              <span className="flex items-center">
                Start Making Impact
                <svg
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
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
        </div>
      </div>
    </section>
  );
};
