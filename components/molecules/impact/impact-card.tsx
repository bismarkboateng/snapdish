"use client";

import { icons } from "./impact-utils";
import { useCounter } from "./use-impact";
import { ImpactStat } from "./impact.types";

export const ImpactCard: React.FC<{
  stat: ImpactStat;
  index: number;
  isVisible: boolean;
}> = ({ stat, index, isVisible }) => {
  const numericValue = parseInt(stat.value.replace(/\D/g, ""));
  const count = useCounter(numericValue, 2500, isVisible);
  const hasPlus = stat.value.includes("+");

  return (
    <div
      className="group relative"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div
        className="relative bg-[var(--color-surface)] p-8 rounded-3xl
      shadow-[var(--shadow-default)] border border-[var(--color-border)]/50
      hover:shadow-xl hover:scale-105 transition-all duration-500
      group-hover:border-[var(--color-primary)]/30 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 
        via-transparent to-[var(--color-secondary)]/5 opacity-0 group-hover:opacity-100
        transition-opacity duration-500"
        />

        <div className="relative mb-6">
          <div
            className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary-light)]
          to-[var(--color-secondary-light)] rounded-2xl flex items-center justify-center
          text-3xl mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
          >
            {icons[index]}
          </div>
        </div>

        <div className="relative z-10 mb-4">
          <div
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r 
          from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[var(--color-accent-orange)]
          bg-clip-text text-transparent"
          >
            {count.toLocaleString()}
            {hasPlus ? "+" : ""}
          </div>
        </div>

        <p
          className="relative z-10 text-[var(--color-text-primary)]
        font-semibold text-lg group-hover:text-[var(--color-primary)]
        transition-colors duration-300"
        >
          {stat.label}
        </p>

        <div
          className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r
        from-[var(--color-primary)] to-[var(--color-primary-dark)] group-hover:w-full
        transition-all duration-700 rounded-b-3xl"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent
        via-white/10 to-transparent -translate-x-full group-hover:translate-x-full
        transition-transform duration-1000 ease-out"
        />
      </div>
    </div>
  );
};
