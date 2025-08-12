import React from "react";
import PrivacyPagePartial from "./privacy-page.partial";

export const PrivacyPageContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[var(--color-background)] to-[var(--color-primary)]/5">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary)] bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mt-8">
            <p className="text-[var(--color-text-secondary)]">
              <strong>Last updated:</strong> Auguest 12, 2025
            </p>
          </div>
        </div>

        <PrivacyPagePartial />
      </div>
    </div>
  );
};
