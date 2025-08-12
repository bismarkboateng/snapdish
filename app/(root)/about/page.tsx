const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[var(--color-background)] to-[var(--color-primary)]/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary)] bg-clip-text text-transparent mb-6">
            About SnapDish
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            We&apos;re on a mission to eliminate food waste while ensuring no one
            goes hungry. SnapDish connects communities through the simple act of
            sharing food.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">
              Our Mission
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Every day, millions of pounds of perfectly good food go to waste
              while many people struggle with food insecurity. We believe
              technology can bridge this gap by creating a platform where
              surplus food finds its way to those who need it most.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              SnapDish empowers individuals, restaurants, and organizations to
              make a meaningful impact in their communities by turning food
              waste into food security.
            </p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
              Our Impact
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[var(--color-text-secondary)]">
                  Meals Shared
                </span>
                <span className="text-2xl font-bold text-[var(--color-primary)]">
                  10,000+
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--color-text-secondary)]">
                  Food Saved (lbs)
                </span>
                <span className="text-2xl font-bold text-[var(--color-primary)]">
                  25,000+
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--color-text-secondary)]">
                  Communities Served
                </span>
                <span className="text-2xl font-bold text-[var(--color-primary)]">
                  50+
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                Community
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Building stronger communities through the universal language of
                food sharing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                Sustainability
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Reducing environmental impact by minimizing food waste and
                promoting conscious consumption.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                Compassion
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Acting with empathy and understanding to ensure everyone has
                access to nutritious food.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-6">
            Our Team
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            We&apos;re a passionate team of developers, designers, and community
            advocates working together to create a more sustainable and
            equitable food system. Every member of our team brings unique
            expertise and a shared commitment to making a positive impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
