import React from "react";
import TermsFiveToTwelve from "./terms-five-to-twelve"

export const TermsPageContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[var(--color-background)] to-[var(--color-primary)]/5">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary)] bg-clip-text text-transparent mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            These terms govern your use of SnapDish. By using our platform, you
            agree to these terms and conditions.
          </p>
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mt-8">
            <p className="text-[var(--color-text-secondary)]">
              <strong>Last updated:</strong> August 12, 2025
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
              1. Acceptance of Terms
            </h2>
            <div className="space-y-4 text-[var(--color-text-secondary)]">
              <p>
                By accessing or using SnapDish, you agree to be bound by these
                Terms of Service and all applicable laws and regulations. If you
                do not agree with any of these terms, you are prohibited from
                using or accessing this platform.
              </p>

              <p>
                These terms may be updated from time to time, and your continued
                use of the platform after such updates constitutes acceptance of
                the modified terms.
              </p>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
              2. Description of Service
            </h2>
            <div className="space-y-4 text-[var(--color-text-secondary)]">
              <p>
                SnapDish is a community-driven platform that connects people who
                have excess food with those who need it. Our service facilitates
                food sharing, reduces waste, and strengthens local communities.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                Platform Features
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></span>
                  <span>Food donation listings and requests</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></span>
                  <span>Location-based matching system</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></span>
                  <span>User verification and rating system</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></span>
                  <span>Community forums and communication tools</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
              3. User Accounts and Registration
            </h2>
            <div className="space-y-4 text-[var(--color-text-secondary)]">
              <p>
                To use certain features of SnapDish, you must register for an
                account. You agree to provide accurate, current, and complete
                information during registration and to update such information
                as necessary.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                Account Security
              </h3>
              <p>
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You must notify us immediately of any unauthorized use
                of your account.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                Account Verification
              </h3>
              <p>
                We may require identity verification for safety and security
                purposes. Providing false information or creating multiple
                accounts to circumvent platform restrictions is prohibited.
              </p>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
              4. User Conduct and Responsibilities
            </h2>
            <div className="space-y-4 text-[var(--color-text-secondary)]">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                Food Safety
              </h3>
              <p>
                Users are solely responsible for ensuring the safety and quality
                of food they share. You must follow local food safety guidelines
                and accurately describe food items, including expiration dates,
                storage conditions, and any allergen information.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                Prohibited Activities
              </h3>
              <p>You agree not to:</p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                  <span>Share unsafe, expired, or contaminated food</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                  <span>
                    Use the platform for commercial purposes without
                    authorization
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                  <span>
                    Harass, abuse, or discriminate against other users
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                  <span>Post false or misleading information</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                  <span>Violate any applicable laws or regulations</span>
                </li>
              </ul>
            </div>
          </div>

          <TermsFiveToTwelve />

          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
              13. Contact Information
            </h2>
            <div className="space-y-4 text-[var(--color-text-secondary)]">
              <p>
                If you have any questions about these Terms of Service, please
                contact us:
              </p>

              <div className="space-y-2">
                <p>
                  <strong>Email:</strong> legal@snapdish.com
                </p>
                <p>
                  <strong>Phone:</strong> 1-800-SNAPDISH
                </p>
                <p>
                  <strong>Mail:</strong>
                </p>
                <p className="ml-4">
                  SnapDish Legal Department
                  <br />
                  123 Food Share Lane
                  <br />
                  Community City, CC 12345
                  <br />
                </p>
              </div>

              <div className="mt-8 p-4 bg-[var(--color-primary)]/10 rounded-lg">
                <p className="text-sm">
                  <strong>Effective Date:</strong> These Terms of Service are
                  effective as of Auguest 12, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
