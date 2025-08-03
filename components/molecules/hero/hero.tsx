import React from "react";
import backgroundImg from "@/public/donation-hero.webp";
import Link from "next/link";
import HeroTrustIndicators from "./hero-trust-indicators";
import HeroPulsating from "./hero-pulsating";

export const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-gradient-to-br
    from-[var(--color-secondary-light)] via-[var(--color-background)]
     to-[var(--color-primary-light)]"
    />

    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
      style={{
        backgroundImage: `url(${backgroundImg.src})`,
      }}
    />

    <div
      className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/10
    via-transparent to-[var(--color-secondary)]/10 animate-pulse"
    />

    <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
      <div
        className="inline-flex items-center px-4 py-2 rounded-full
      bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]
      text-sm font-medium mb-8 shadow-[var(--shadow-default)]"
      >
        <span className="w-2 h-2 bg-[var(--color-success)] rounded-full mr-2 animate-pulse"></span>{" "}
        Connecting Communities Through Food
      </div>
      {" "}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
        <span
          className="bg-gradient-to-r from-[var(--color-primary)]
        via-[var(--color-primary-dark)] to-[var(--color-accent-orange)]
        bg-clip-text text-transparent"
        >
          Share Food,
        </span>
        <br />
        <span className="text-[var(--color-text-primary)]">Share Hope</span>
      </h1>
      <p
        className="text-xl md:text-2xl lg:text-3xl text-[var(--color-text-muted)]
      mb-12 max-w-4xl mx-auto leading-relaxed font-light"
      >
        Transform surplus into smiles. Connect with your community through our{" "}
        <span className="text-[var(--color-primary)] font-medium">
          secure platform
        </span>{" "}
        that makes food sharing simple, safe, and meaningful.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
        <Link
          href="/register"
          className="group relative inline-flex items-center justify-center
          px-8 py-4 text-lg font-semibold text-white rounded-2xl overflow-hidden
          transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{
            background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)`,
            boxShadow: "var(--shadow-default)",
          }}
        >
          <span className="relative z-10 flex items-center">
            🥗 Start Donating
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
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent
          via-white/20 to-transparent -translate-x-full group-hover:translate-x-full
          transition-transform duration-1000"
          ></div>
        </Link>

        <Link
          href="/register"
          className="group inline-flex items-center justify-center px-8 py-4
          text-lg font-semibold text-[var(--color-primary)] bg-[var(--color-surface)]
          rounded-2xl border-2 border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]
          transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <span className="flex items-center">
            🤝 Find Food Help
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
      <HeroTrustIndicators />
    </div>

    <HeroPulsating />
  </section>
);
