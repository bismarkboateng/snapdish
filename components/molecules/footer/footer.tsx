import React from "react";
import { footerSections } from "./footer.mock";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-text-strong)] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid gap-12 md:grid-cols-4">
        <div>
          <h3 className="text-2xl font-bold mb-4">SnapDish</h3>
          <p className="text-[var(--color-gray-neutral)]">
            Sharing surplus meals with communities who need them most.
          </p>
        </div>
        {footerSections.map((section, idx) => (
          <div key={idx}>
            <h4 className="text-xl font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a
                    href={link.href}
                    className="text-[var(--color-gray-soft)] hover:text-[var(--color-orange-accent)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center text-[var(--color-gray-neutral)] text-sm">
        © {new Date().getFullYear()} SnapDish. All rights reserved.
      </div>
    </footer>
  );
};
