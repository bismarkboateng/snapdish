import React from "react";
import Link from "next/link";
import { SuccessMessageProps } from "./success.types";

export const SuccessMessage: React.FC<SuccessMessageProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="w-full max-w-md mx-auto text-center bg-[var(--color-surface)] p-10 rounded-xl shadow-md">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-[var(--color-success)] rounded-full flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-[var(--color-text-strong)] mb-4">
        {title}
      </h2>
      <p className="text-[var(--color-text-muted)] mb-8">{description}</p>
      <Link
        href={buttonLink}
        className="inline-block bg-[var(--color-orange-base)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-orange-dark)] transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  );
};
