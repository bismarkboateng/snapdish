import { Button } from "@/components/atoms/button/button";
import { Input } from "@/components/atoms/input";
import React from "react";

const BlogNewsLetter = () => {
  return (
    <div className="text-center bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl p-12">
      <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
      <p className="text-white/90 mb-6 max-w-2xl mx-auto">
        Subscribe to our newsletter for the latest stories, tips, and updates
        from the SnapDish community.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
        />
        <Button className="px-6 py-3 bg-white text-[var(--color-primary)] font-semibold rounded-xl hover:scale-105 transition-all duration-300">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default BlogNewsLetter;
