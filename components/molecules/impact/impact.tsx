import React from "react";
import { impactStats } from "./impact.mock";

export const Impact: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--color-orange-light)]/50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-strong)] mb-12">
          Together, We&apos;re Making an Impact
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="bg-[var(--color-surface)] p-8 rounded-xl shadow-sm border border-[var(--color-border)]"
            >
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-orange-base)] mb-2">
                {stat.value}
              </div>
              <p className="text-[var(--color-text-primary)] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
