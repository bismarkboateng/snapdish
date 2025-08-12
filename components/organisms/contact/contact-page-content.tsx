import React from "react";
import { Button } from "@/components/atoms/button";
import ContactMethods from "./contact-methods";
import ContactForm from "./contact-form";

export const ContactPageContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[var(--color-background)] to-[var(--color-primary)]/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary)] bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            We&apos;d love to hear from you! Whether you have questions, feedback, or
            need support, our team is here to help you make the most of
            SnapDish.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
              Send us a Message
            </h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <ContactMethods />

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
                Office Hours
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[var(--color-text-primary)] font-medium">
                    Monday - Friday
                  </span>
                  <span className="text-[var(--color-text-secondary)]">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--color-text-primary)] font-medium">
                    Saturday
                  </span>
                  <span className="text-[var(--color-text-secondary)]">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--color-text-primary)] font-medium">
                    Sunday
                  </span>
                  <span className="text-[var(--color-text-secondary)]">
                    Closed
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Quick Answers
              </h2>
              <p className="text-white/90 mb-6">
                Looking for immediate help? Check out our FAQ section for
                answers to common questions.
              </p>
              <Button className="px-6 py-3 bg-white text-[var(--color-primary)] hover:bg-white font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                Visit FAQ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
