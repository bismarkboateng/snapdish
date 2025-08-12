import { Button } from "@/components/atoms/button";
import CareersCTA from "./careers-cta";
import CareersBenefit from "./careers-benefit";

export const CareersPageContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[var(--color-background)] to-[var(--color-primary)]/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary)] bg-clip-text text-transparent mb-6">
            Join Our Mission
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Help us build a world where no food goes to waste and no one goes
            hungry. We&apos;re looking for passionate individuals to join our
            growing team.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] text-center mb-12">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                Meaningful Impact
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Your work directly contributes to reducing food waste and
                fighting hunger in communities.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                Growth Opportunities
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Join a fast-growing startup with opportunities to learn, lead,
                and shape the future.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                Collaborative Culture
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Work with a diverse, passionate team that values creativity,
                innovation, and respect.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] text-center mb-12">
            Open Positions
          </h2>
          <div className="space-y-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-2">
                    Full Stack Developer
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Remote • Full-time
                  </p>
                </div>
                <Button className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                  Apply Now
                </Button>
              </div>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Join our engineering team to build scalable solutions that
                connect food donors with recipients. Experience with React,
                Node.js, and TypeScript preferred.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">
                  Node.js
                </span>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-2">
                    Community Manager
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Hybrid • Full-time
                  </p>
                </div>
                <Button className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                  Apply Now
                </Button>
              </div>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Help grow our community of food sharers and recipients. Build
                relationships with local organizations and develop engagement
                strategies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded-full text-sm">
                  Community Building
                </span>
                <span className="px-3 py-1 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded-full text-sm">
                  Social Media
                </span>
                <span className="px-3 py-1 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded-full text-sm">
                  Event Planning
                </span>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-2">
                    UX/UI Designer
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Remote • Contract
                  </p>
                </div>
                <Button className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                  Apply Now
                </Button>
              </div>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Design intuitive and accessible interfaces that make food
                sharing simple and enjoyable. Help us create experiences that
                drive positive social impact.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full text-sm">
                  Figma
                </span>
                <span className="px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full text-sm">
                  User Research
                </span>
                <span className="px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full text-sm">
                  Prototyping
                </span>
              </div>
            </div>
          </div>
        </div>
        <CareersBenefit />
        <CareersCTA />
      </div>
    </div>
  );
};
