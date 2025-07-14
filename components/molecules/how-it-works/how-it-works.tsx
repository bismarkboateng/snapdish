import React from "react";
import { howItWorksData } from "./how-it-works.mock";

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--color-orange-light)]/10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-strong)] mb-12">
          How It Works
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          {howItWorksData.map((step, index) => (
            <div
              key={index}
              className="bg-[var(--color-surface)] p-8 rounded-xl shadow-md border border-[var(--color-border)] hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                {step.title}
              </h3>
              <p className="text-[var(--color-text-muted)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
