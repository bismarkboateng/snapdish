import PrivacyFourToFive from "./privacy-four-to-five";
import PrivacyLocation from "./privacy-location";
import PrivacySixToNine from "./privacy-six-to-nine";

const PrivacyPagePartial = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
          1. Information We Collect
        </h2>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Personal Information
          </h3>
          <p>
            When you create an account with SnapDish, we collect basic
            information such as your name, email address, phone number, and
            location. This information is necessary to facilitate food sharing
            within your community and ensure safe, verified transactions.
          </p>

          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Usage Information
          </h3>
          <p>
            We automatically collect information about how you use our platform,
            including your donation history, pickup preferences, dietary
            restrictions, and interaction patterns. This helps us improve our
            service and provide better matching between food donors and
            recipients.
          </p>

          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Location Data
          </h3>
          <p>
            With your permission, we collect precise location data to show you
            nearby food donations and help donors find recipients in their area.
            You can control location sharing in your account settings at any
            time.
          </p>
        </div>
      </div>

      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
          2. How We Use Your Information
        </h2>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></span>
              <span>
                To connect food donors with recipients in their local community
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></span>
              <span>
                To send notifications about new donations, pickup reminders, and
                platform updates
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></span>
              <span>
                To verify user identity and prevent fraud or abuse of the
                platform
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></span>
              <span>
                To analyze usage patterns and improve our platform features
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></span>
              <span>
                To provide customer support and respond to your inquiries
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
          3. Information Sharing
        </h2>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <p>
            We do not sell your personal information to third parties. We may
            share your information only in the following circumstances:
          </p>

          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            With Other Users
          </h3>
          <p>
            When you post a food donation or request, your name and general
            location (neighborhood level) are visible to other users to
            facilitate pickups. We never share your exact address or contact
            information without your explicit consent.
          </p>

          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Service Providers
          </h3>
          <p>
            We work with trusted third-party services for hosting, payment
            processing, and communications. These providers are bound by strict
            confidentiality agreements and can only use your data to provide
            services to SnapDish.
          </p>

          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Legal Requirements
          </h3>
          <p>
            We may disclose your information if required by law, court order, or
            to protect the rights, property, or safety of SnapDish, our users,
            or the public.
          </p>
        </div>
      </div>

      <PrivacyFourToFive />
      <PrivacySixToNine />

      <PrivacyLocation />
    </div>
  );
};

export default PrivacyPagePartial;
