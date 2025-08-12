import BlogNewsLetter from "./blog-newsletter";
import BlogCategories from "./blog-categories";
import BlogFeatured from "./blog-featured";
import BlogSamples from "./blog-samples";

export const BlogPageContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[var(--color-background)] to-[var(--color-primary)]/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary)] bg-clip-text text-transparent mb-6">
            SnapDish Blog
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Stories, insights, and updates from our community of food sharers.
            Discover how people are making a difference, one meal at a time.
          </p>
        </div>

        <BlogFeatured />
        <BlogCategories />
        <BlogSamples />
        <BlogNewsLetter />
      </div>
    </div>
  );
};
