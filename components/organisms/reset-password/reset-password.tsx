"use client"

import React, { useState } from "react";
import { ResetPasswordData } from "./reset-password.types";

export const ResetPasswordForm: React.FC = () => {
  const [formData, setFormData] = useState<ResetPasswordData>({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Resetting password with", formData);
    // here you would send new password + token from URL to your API
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* 🔥 Logo on top */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-[var(--color-orange-base)] rounded-full flex items-center justify-center shadow-md">
          <span className="text-white text-2xl font-bold">S</span>
        </div>
      </div>

      <form 
        onSubmit={handleSubmit}
        className="bg-[var(--color-surface)] p-8 rounded-xl shadow-md w-full"
      >
        <h2 className="text-2xl font-bold text-[var(--color-text-strong)] mb-4 text-center">
          Set New Password
        </h2>
        <p className="text-[var(--color-text-muted)] text-center mb-6">
          Please enter your new password below.
        </p>
        <div className="mb-4">
          <label className="block mb-2 text-[var(--color-text-primary)]">New Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-orange-base)]"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-[var(--color-text-primary)]">Confirm New Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full p-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-orange-base)]"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[var(--color-orange-base)] text-white font-semibold py-3 rounded-lg hover:bg-[var(--color-orange-dark)] transition-colors"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};
