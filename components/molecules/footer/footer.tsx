import React from "react";
import { footerSections } from "./footer.mock";
import FooterSocialLinks from "./footer-social-links";
import FooterBottom from "./footer-bottom";

export const Footer = () => {
  return (
    <footer className="relative bg-[var(--color-text-primary)] text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br
      from-[var(--color-text-primary)] via-[var(--color-text-primary)]
      to-[var(--color-primary-dark)]/20"
      />

      <div className="absolute top-10 right-20 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-[var(--color-secondary)]/5 rounded-full blur-2xl" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-[var(--color-secondary)] bg-clip-text text-transparent mb-4">
                  SnapDish
                </h3>
                <p className="text-white/80 text-lg leading-relaxed max-w-md">
                  Connecting communities through food sharing. Reducing waste,
                  spreading hope, one meal at a time.
                </p>
              </div>

              <FooterSocialLinks />
            </div>

            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-xl font-semibold mb-6 text-white">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-[var(--color-secondary)] transition-colors duration-300 text-base"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h4 className="text-2xl font-bold text-white mb-2">
                  Stay Updated
                </h4>
                <p className="text-white/70 text-lg">
                  Get the latest updates on food sharing in your community
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                />
                <button
                  className="px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)`,
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};
