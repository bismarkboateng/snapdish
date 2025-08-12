const PrivacyFourToFive = () => {
  return (
    <>
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
          4. Data Security
        </h2>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <p>
            We implement industry-standard security measures to protect your
            personal information, including encryption, secure servers, and
            regular security audits. However, no method of transmission over the
            Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Your Responsibilities
          </h3>
          <p>
            You are responsible for maintaining the security of your account
            credentials. Please use a strong, unique password and enable
            two-factor authentication when available.
          </p>
        </div>
      </div>

      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
          5. Your Rights and Choices
        </h2>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <p>
            You have the following rights regarding your personal information:
          </p>

          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></span>
              <span>
                <strong>Access:</strong> Request a copy of the personal
                information we hold about you
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></span>
              <span>
                <strong>Correction:</strong> Update or correct inaccurate
                information in your profile
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></span>
              <span>
                <strong>Deletion:</strong> Request deletion of your account and
                associated data
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></span>
              <span>
                <strong>Portability:</strong> Request your data in a
                machine-readable format
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></span>
              <span>
                <strong>Opt-out:</strong> Unsubscribe from marketing
                communications at any time
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PrivacyFourToFive;
