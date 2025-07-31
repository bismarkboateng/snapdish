"use client";

import AuthSidePanel from "@/components/molecules/auth-sidepanel/auth-sidepanel";
import React from "react";
import ResetPasswordForm from "./reset-password-form";

export const ResetPasswordContainer: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex">
      <AuthSidePanel />
      <div className="w-full xl:w-1/2 flex items-center justify-center px-6 lg:px-8 py-8 lg:py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-text-strong)] mb-2">
              Set your new password
            </h2>
            <p className="text-sm lg:text-base text-[var(--color-text-muted)]">
              Your new password should be different from the passwords previously used.            </p>
          </div>
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
};
