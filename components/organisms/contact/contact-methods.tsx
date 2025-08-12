const ContactMethods = () => {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
        Get in Touch
      </h2>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xl">📧</span>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
              Email Us
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              support@snapdish.com
            </p>
            <p className="text-[var(--color-text-secondary)] text-sm">
              We typically respond within 24 hours
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xl">📞</span>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
              Call Us
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              +1 (555) 123-4567
            </p>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Mon-Fri, 9 AM - 6 PM EST
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xl">💬</span>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
              Live Chat
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              Available on our platform
            </p>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Real-time support when you need it
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xl">📍</span>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
              Visit Us
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              123 Community Street
            </p>
            <p className="text-[var(--color-text-secondary)]">
              Food City, FC 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMethods;
