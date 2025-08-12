import React from "react";
import { Input } from "@/components/atoms/input";
import FaqContact from "./faq-contact";
import FaqCategories from "./faq-categories";

export const FAQPageContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[var(--color-background)] to-[var(--color-primary)]/5">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary)] bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Find quick answers to common questions about SnapDish. If you can&apos;t
            find what you&apos;re looking for, don&apos;t hesitate to contact our support
            team.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Search frequently asked questions..."
              className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border border-white/20 rounded-2xl text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
            />
          </div>
        </div>

        <FaqCategories />

        <div className="space-y-4">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20">
            <button className="w-full px-8 py-6 text-left focus:outline-none">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] pr-4">
                  How do I get started with SnapDish?
                </h3>
                <span className="text-[var(--color-primary)] text-2xl flex-shrink-0">
                  +
                </span>
              </div>
            </button>
            <div className="px-8 pb-6">
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Getting started is easy! Simply download the SnapDish app or
                visit our website, create your free account, and complete your
                profile. You can then start donating surplus food or browsing
                available donations in your area. We recommend reading our
                safety guidelines and community standards before your first
                interaction.
              </p>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20">
            <button className="w-full px-8 py-6 text-left focus:outline-none">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] pr-4">
                  What types of food can I donate?
                </h3>
                <span className="text-[var(--color-primary)] text-2xl flex-shrink-0">
                  +
                </span>
              </div>
            </button>
            <div className="px-8 pb-6">
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                You can donate fresh fruits and vegetables, packaged
                non-perishables, baked goods, and properly stored leftovers that
                are still within safe consumption dates. We do not accept
                homemade items with raw eggs, unpasteurized dairy, or anything
                that has been sitting at room temperature for more than 2 hours.
                Always check our food safety guidelines for detailed
                information.
              </p>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20">
            <button className="w-full px-8 py-6 text-left focus:outline-none">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] pr-4">
                  How is my personal information protected?
                </h3>
                <span className="text-[var(--color-primary)] text-2xl flex-shrink-0">
                  +
                </span>
              </div>
            </button>
            <div className="px-8 pb-6">
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                We take your privacy seriously. Your personal information is
                encrypted and stored securely. We only share your location and
                contact details with verified users when you agree to a food
                exchange. You can control your privacy settings and choose what
                information to share. We never sell your data to third parties.
              </p>
            </div>
          </div>
        </div>

        <FaqContact />
      </div>
    </div>
  );
};
