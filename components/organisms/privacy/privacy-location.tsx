const PrivacyLocation = () => {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
        10. Contact Us
      </h2>
      <div className="space-y-4 text-[var(--color-text-secondary)]">
        <p>
          If you have any questions about this Privacy Policy or our privacy
          practices, please contact us:
        </p>

        <div className="space-y-2">
          <p>
            <strong>Email:</strong> privacy@snapdish.com
          </p>
          <p>
            <strong>Phone:</strong> 1-800-SNAPDISH
          </p>
          <p>
            <strong>Mail:</strong>
          </p>
          <p className="ml-4">
            SnapDish Privacy Team
            <br />
            123 Food Share Lane
            <br />
            Community City, CC 12345
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyLocation;
