"use client";

import React from "react";
import FaqFooter from "./faq-footer";
import FaqContent from "./faq-content";

export const Faq: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br
      from-[var(--color-background)] via-[var(--color-secondary-light)]/20 to-[var(--color-primary-light)]/10"
      />

      <div className="absolute top-20 left-16 w-28 h-28 bg-[var(--color-primary)]/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-16 w-36 h-36 bg-[var(--color-secondary)]/15 rounded-full blur-3xl animate-bounce" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-primary-light)]
          text-[var(--color-primary-dark)] text-sm font-medium mb-6 shadow-[var(--shadow-default)]"
          >
            <span className="w-2 h-2 bg-[var(--color-info)] rounded-full mr-2 animate-pulse"></span>{" "}
            Got Questions?
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-[var(--color-text-primary)]">
              Frequently Asked
            </span>
            <br />
            <span
              className="bg-gradient-to-r from-[var(--color-primary)]
            via-[var(--color-primary-dark)] to-[var(--color-accent-orange)] bg-clip-text text-transparent"
            >
              Questions
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about SnapDish and how we help
            reduce food waste
          </p>
        </div>
        <FaqContent />
        <FaqFooter />
      </div>
    </section>
  );
};
