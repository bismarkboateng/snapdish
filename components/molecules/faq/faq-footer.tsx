import Link from "next/link";
import React from "react";

const FaqFooter = () => {
  return (
    <div className="text-center">
      <div className="bg-[var(--color-surface)] rounded-3xl p-8 md:p-12 shadow-[var(--shadow-default)] border border-[var(--color-border)]/50">
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
          Still have questions?
        </h3>
        <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto">
          Our community team is here to help. Reach out to us and we&apos;ll get back
          to you as soon as possible.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)`,
              boxShadow: "var(--shadow-default)",
            }}
          >
            <span className="flex items-center">
              Contact Support
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

          <Link
            href="/community"
            className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-2xl hover:bg-[var(--color-primary-light)]/80 transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center">
              Join Community
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
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V6a2 2 0 012-2h6a2 2 0 012 2v2z"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FaqFooter;
