"use client";

import AuthSidePanel from "@/components/molecules/auth-sidepanel/auth-sidepanel";
import ForgotPasswordForm from "./forgot-password-form";

export const ForgotPasswordContainer: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex">
      <AuthSidePanel />
      <div className="w-full xl:w-1/2 flex items-center justify-center px-6 lg:px-8 py-8 lg:py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-text-strong)] mb-2">
              Forgot Password
            </h2>
            <p className="text-sm lg:text-base text-[var(--color-text-muted)]">
              Enter your email address below and we will send you a link to reset your password.
            </p>
          </div>
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
};
