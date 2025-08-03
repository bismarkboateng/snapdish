"use client";

import AuthSidePanel from "@/components/molecules/auth-sidepanel/auth-sidepanel";
import React from "react";
import ResetPasswordForm from "./reset-password-form";

export const ResetPasswordContainer: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background)] flex">
      <AuthSidePanel />

      <div className="w-full lg:w-2/3 flex items-center justify-center px-6 lg:px-12 py-8 lg:py-12 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-[var(--color-secondary)]/15 rounded-full blur-3xl animate-bounce" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[var(--color-accent-orange)]/20 rounded-full blur-xl animate-ping" />

        <div className="w-full max-w-lg relative z-10">
          <div className="text-center mb-8 lg:mb-10">
            <div
              className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-secondary-light)]
            text-[var(--color-primary-dark)] text-sm font-medium mb-6 shadow-[var(--shadow-default)]"
            >
              <span className="w-2 h-2 bg-[var(--color-info)] rounded-full mr-2 animate-pulse"></span>
              <span> 🔒 Password Reset</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              <span
                className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-dark)]
              to-[var(--color-accent-orange)] bg-clip-text text-transparent"
              >
                Set New Password
              </span>
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
              Choose a strong password that&apos;s different from your previous ones
              to keep your account secure.
            </p>
          </div>

          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
};
