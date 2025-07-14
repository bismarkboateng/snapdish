import React from "react";
import { ctaData } from "./cta.mock";

export const CTABanner: React.FC = () => {
  return (
    <section className="py-16 bg-[var(--color-orange-base)] text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {ctaData.heading}
        </h2>
        <p className="text-lg md:text-xl mb-8">{ctaData.subtext}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={ctaData.primaryAction.href}
            className="bg-white text-[var(--color-orange-base)] font-semibold py-3 px-6 rounded-full hover:bg-[var(--color-orange-light)] transition-colors"
          >
            {ctaData.primaryAction.text}
          </a>
          {ctaData.secondaryAction && (
            <a
              href={ctaData.secondaryAction.href}
              className="border border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-[var(--color-orange-base)] transition-colors"
            >
              {ctaData.secondaryAction.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
