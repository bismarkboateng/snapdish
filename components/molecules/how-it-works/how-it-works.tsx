import React from "react";
import { howItWorksData } from "./how-it-works.mock";
import Link from "next/link";

export const HowItWorks = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary-light)] via-[var(--color-background)]
      to-[var(--color-primary-light)]/30"
      />

      <div
        className="absolute top-20 left-20 w-32 h-32
      bg-[var(--color-secondary)]/20 rounded-full blur-2xl
      animate-pulse"
      />
      <div
        className="absolute bottom-20 right-20 w-40 h-40
      bg-[var(--color-primary)]/15 rounded-full blur-3xl animate-bounce"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center px-4 py-2
          rounded-full bg-[var(--color-primary-light)]
          text-[var(--color-primary-dark)] text-sm font-medium
          mb-6 shadow-[var(--shadow-default)]"
          >
            <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-2animate-pulse"></span>{" "}
            Simple Process
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span
              className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-dark)] 
            to-[var(--color-accent-orange)] bg-clip-text text-transparent"
            >
              How It
            </span>
            <br />
            <span className="text-[var(--color-text-primary)]">Works</span>
          </h2>

          <p className="text-xl md:text-2xl text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed">
            Three simple steps to transform your surplus food into meaningful
            impact for your community
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {howItWorksData.map((step, index) => (
            <div key={step.title} className="group relative">
              {index < howItWorksData.length - 1 && (
                <div
                  className="hidden md:block absolute top-20 left-1/2
                w-full h-0.5 bg-gradient-to-r from-[var(--color-primary)]/60
                to-[var(--color-primary)]/20 transform translate-x-1/2 z-0"
                >
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <svg
                      className="w-4 h-4 text-[var(--color-primary)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              )}

              <div
                className="relative bg-[var(--color-surface)] p-8 rounded-2xl
              shadow-[var(--shadow-default)]
              border border-[var(--color-border)]/50 hover:shadow-xl hover:scale-105
              transition-all duration-300 group-hover:border-[var(--color-primary)]/30 z-10"
              >
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white font-bold text-lg rounded-full flex items-center justify-center shadow-lg">
                  {index + 1}
                </div>

                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-secondary-light)] to-[var(--color-primary-light)] rounded-2xl flex items-center justify-center text-4xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                    {step.icon}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed text-lg">
                  {step.description}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] group-hover:w-full transition-all duration-500 rounded-b-2xl" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/register"
              className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)`,
                boxShadow: "var(--shadow-default)",
              }}
            >
              <span className="flex items-center">
                Get Started Today
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

            <span className="text-[var(--color-text-muted)] text-sm">
              Join thousands making a difference
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
