import React from "react";
import backgroundImg from "@/public/donation-hero.webp"
import Link from "next/link";

export const Hero: React.FC = () => (
  <section
    className="relative bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `linear-gradient(
        rgba(255, 245, 233, 0.6),
        rgba(255, 245, 233, 0.6)
      ), url(${backgroundImg})`
    }}
  >
    <div className="max-w-5xl mx-auto px-4 py-32 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-text-strong)] mb-4">
        Share a Meal, Spread a Smile
      </h1>
      <p className="text-lg md:text-2xl text-[var(--color-text-muted)] mb-8 max-w-3xl mx-auto">
        Donate your surplus food or reach out for help — it&apos;s easy, safe, and meaningful.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/login"
          className="bg-[var(--color-orange-base)] hover:bg-[var(--color-orange-dark)] text-white font-semibold py-3 px-6 rounded-full transition-colors"
        >
          Donate Food
        </Link>
        <a
          href="/request"
          className="bg-[var(--color-orange-light)] hover:bg-[var(--color-orange-base)] text-[var(--color-text-primary)] font-semibold py-3 px-6 rounded-full transition-colors"
        >
          I Need Food
        </a>
      </div>
    </div>
  </section>
);
