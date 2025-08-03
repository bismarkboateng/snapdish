import React from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { SuccessMessageProps } from "./success.types";

export const SuccessMessage: React.FC<SuccessMessageProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background)] flex items-center justify-center px-6 py-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[var(--color-status-success)]/20 to-[var(--color-secondary-base)]/20 rounded-full blur-sm animate-pulse" />
        <div className="absolute top-1/3 right-16 w-32 h-32 bg-gradient-to-br from-[var(--color-secondary-base)]/20 to-[var(--color-status-success)]/20 rounded-full blur-md animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-[var(--color-primary-base)]/20 to-[var(--color-status-success)]/20 rounded-full blur-sm animate-pulse delay-500" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[var(--color-status-success)]/5 to-[var(--color-primary-base)]/5
        rounded-full blur-3xl animate-pulse delay-300" />
      </div>

      <div className="w-full max-w-lg mx-auto text-center relative z-10">
        <div className="bg-[var(--color-surface)] rounded-3xl p-10 lg:p-12 shadow-2xl border border-[var(--color-border)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-status-success)]/5 to-transparent rounded-3xl" />
          
          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-[var(--color-status-success)] to-[var(--color-status-success-dark)] rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-[var(--color-secondary-base)] animate-pulse" />
                <Sparkles className="absolute -bottom-1 -left-3 h-4 w-4 text-[var(--color-status-success)] animate-pulse delay-500" />
              </div>
            </div>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[var(--color-status-success)]/10 to-[var(--color-secondary-base)]/10
            text-[var(--color-status-success)] text-sm font-medium mb-6">
              ✨ Success!
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[var(--color-primary-base)] to-[var(--color-primary-dark)] bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            
            <p className="text-lg text-[var(--color-text-muted)] mb-10 leading-relaxed max-w-md mx-auto">
              {description}
            </p>

            <Link
              href={buttonLink}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--color-primary-base)] to-[var(--color-primary-dark)]
              hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary-base)] text-white font-semibold 
              px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              <span>{buttonText}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <div className="flex justify-center gap-2 mt-8">
              <div className="w-2 h-2 bg-[var(--color-status-success)] rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-[var(--color-secondary-base)] rounded-full animate-pulse delay-200" />
              <div className="w-2 h-2 bg-[var(--color-primary-base)] rounded-full animate-pulse delay-400" />
            </div>
          </div>
        </div>

        <p className="text-sm text-[var(--color-text-muted)] mt-6 opacity-75">
          You&apos;ll be redirected automatically, or click the button above to continue.
        </p>
      </div>
    </div>
  );
};
