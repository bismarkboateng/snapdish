import { Button } from "@/components/atoms/button";

const BlogSamples = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <article className="bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:scale-105 transition-all duration-300">
        <div className="h-48 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] flex items-center justify-center">
          <span className="text-white text-4xl">🥘</span>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-3">
            <span className="px-2 py-1 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded text-sm">
              Food Tips
            </span>
            <span className="text-[var(--color-text-secondary)] text-sm">
              Dec 12, 2024
            </span>
          </div>
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
            5 Ways to Keep Food Fresh Longer
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Simple storage tips that can extend the life of your groceries and
            reduce household food waste.
          </p>
          <Button
            variant="link"
            className="text-[var(--color-primary)] font-medium hover:underline p-0"
          >
            Read More →
          </Button>
        </div>
      </article>

      <article className="bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:scale-105 transition-all duration-300">
        <div className="h-48 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] flex items-center justify-center">
          <span className="text-white text-4xl">🌟</span>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-3">
            <span className="px-2 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded text-sm">
              Success Stories
            </span>
            <span className="text-[var(--color-text-secondary)] text-sm">
              Dec 10, 2024
            </span>
          </div>
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
            Community Champion: Maria&apos;s Impact
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-4">
            How one dedicated volunteer helped connect 50+ families with
            nutritious meals in her neighborhood.
          </p>
          <Button
            variant="link"
            className="text-[var(--color-primary)] font-medium hover:underline p-0"
          >
            Read More →
          </Button>
        </div>
      </article>

      <article className="bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:scale-105 transition-all duration-300">
        <div className="h-48 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
          <span className="text-white text-4xl">🌱</span>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-3">
            <span className="px-2 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded text-sm">
              Sustainability
            </span>
            <span className="text-[var(--color-text-secondary)] text-sm">
              Dec 8, 2024
            </span>
          </div>
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
            The Environmental Impact of Food Sharing
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Understanding how sharing surplus food contributes to a more
            sustainable future for our planet.
          </p>
          <Button
            variant="link"
            className="text-[var(--color-primary)] font-medium hover:underline p-0"
          >
            Read More →
          </Button>
        </div>
      </article>

      <article className="bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:scale-105 transition-all duration-300">
        <div className="h-48 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] flex items-center justify-center">
          <span className="text-white text-4xl">👥</span>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-3">
            <span className="px-2 py-1 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded text-sm">
              Community
            </span>
            <span className="text-[var(--color-text-secondary)] text-sm">
              Dec 5, 2024
            </span>
          </div>
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
            Building Food Security Networks
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-4">
            How local communities are coming together to create resilient food
            distribution systems.
          </p>
          <Button
            variant="link"
            className="text-[var(--color-primary)] font-medium hover:underline p-0"
          >
            Read More →
          </Button>
        </div>
      </article>

      <article className="bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:scale-105 transition-all duration-300">
        <div className="h-48 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] flex items-center justify-center">
          <span className="text-white text-4xl">📱</span>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-3">
            <span className="px-2 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded text-sm">
              Tech Updates
            </span>
            <span className="text-[var(--color-text-secondary)] text-sm">
              Dec 3, 2024
            </span>
          </div>
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
            New Features: Enhanced Matching
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Our latest algorithm improvements make it easier to find the perfect
            food donations near you.
          </p>
          <Button
            variant="link"
            className="text-[var(--color-primary)] font-medium hover:underline p-0"
          >
            Read More →
          </Button>
        </div>
      </article>

      <article className="bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:scale-105 transition-all duration-300">
        <div className="h-48 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-secondary-dark)] flex items-center justify-center">
          <span className="text-white text-4xl">🍽️</span>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-3">
            <span className="px-2 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded text-sm">
              Food Tips
            </span>
            <span className="text-[var(--color-text-secondary)] text-sm">
              Dec 1, 2024
            </span>
          </div>
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
            Creative Recipes for Surplus Ingredients
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Transform common surplus ingredients into delicious meals with these
            easy recipes.
          </p>
          <Button
            variant="link"
            className="text-[var(--color-primary)] font-medium hover:underline p-0"
          >
            Read More →
          </Button>
        </div>
      </article>
    </div>
  );
};

export default BlogSamples;
