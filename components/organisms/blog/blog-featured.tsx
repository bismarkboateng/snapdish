import { Button } from "@/components/atoms/button/button";

const BlogFeatured = () => {
  return (
    <div className="mb-16">
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
        <div className="h-64 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
          <span className="text-white text-6xl">📸</span>
        </div>
        <div className="p-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm font-medium">
              Featured
            </span>
            <span className="text-[var(--color-text-secondary)] text-sm">
              December 15, 2024
            </span>
          </div>
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
            How One Restaurant Saved 1,000 Meals from Going to Waste
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-6">
            Meet Sarah&apos;s Kitchen, a local restaurant that partnered with
            SnapDish to donate their daily surplus food. In just three months,
            they&apos;ve made an incredible impact on their community while reducing
            their environmental footprint.
          </p>
          <Button className="px-6 py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300">
            Read Full Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogFeatured;
