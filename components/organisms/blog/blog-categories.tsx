import { Button } from "@/components/atoms/button";

const BlogCategories = () => {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-4 justify-center">
        <Button className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-full font-medium hover:scale-105 transition-all duration-300">
          All Posts
        </Button>
        <Button
          variant="outline"
          className="px-6 py-2 bg-white/50 text-[var(--color-text-secondary)] rounded-full font-medium hover:bg-[var(--color-primary)]/10 transition-all duration-300"
        >
          Success Stories
        </Button>
        <Button
          variant="outline"
          className="px-6 py-2 bg-white/50 text-[var(--color-text-secondary)] rounded-full font-medium hover:bg-[var(--color-primary)]/10 transition-all duration-300"
        >
          Food Tips
        </Button>
        <Button
          variant="outline"
          className="px-6 py-2 bg-white/50 text-[var(--color-text-secondary)] rounded-full font-medium hover:bg-[var(--color-primary)]/10 transition-all duration-300"
        >
          Community
        </Button>
        <Button
          variant="outline"
          className="px-6 py-2 bg-white/50 text-[var(--color-text-secondary)] rounded-full font-medium hover:bg-[var(--color-primary)]/10 transition-all duration-300"
        >
          Sustainability
        </Button>
      </div>
    </div>
  );
};

export default BlogCategories;
