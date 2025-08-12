import React from "react";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import HelpContact from "./help-contact";

export const HelpPageContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[var(--color-background)] to-[var(--color-primary)]/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary)] bg-clip-text text-transparent mb-6">
            Help Center
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions and learn how to make the most of SnapDish. 
            We&apos;re here to help you share food safely and effectively.
          </p>
        </div>

        <div className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for help articles..."
                className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border border-white/20 rounded-2xl text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] text-center mb-12">Popular Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🆕</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">Getting Started</h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Learn how to create your account, set up your profile, and make your first donation or request.
              </p>
              <Button variant="link" className="text-[var(--color-primary)] font-medium hover:underline p-0">
                View Articles →
              </Button>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] rounded-2xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🥘</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">Food Donations</h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Guidelines for safe food sharing, what foods to donate, and how to package them properly.
              </p>
              <Button variant="link" className="text-[var(--color-primary)] font-medium hover:underline p-0">
                View Articles →
              </Button>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] rounded-2xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">Safety & Security</h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Tips for safe meetups, food safety guidelines, and protecting your personal information.
              </p>
              <Button variant="link" className="text-[var(--color-primary)] font-medium hover:underline p-0">
                View Articles →
              </Button>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">Community Guidelines</h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Our community standards, reporting guidelines, and how to be a good community member.
              </p>
              <Button variant="link" className="text-[var(--color-primary)] font-medium hover:underline p-0">
                View Articles →
              </Button>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-2xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">Account Settings</h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Manage your profile, notification preferences, privacy settings, and account security.
              </p>
              <Button variant="link" className="text-[var(--color-primary)] font-medium hover:underline p-0">
                View Articles →
              </Button>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] rounded-2xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">Troubleshooting</h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Solutions for common technical issues, app problems, and platform errors.
              </p>
              <Button variant="link" className="text-[var(--color-primary)] font-medium hover:underline p-0">
                View Articles →
              </Button>
            </div>
          </div>
        </div>

        <HelpContact />
      </div>
    </div>
  );
};
