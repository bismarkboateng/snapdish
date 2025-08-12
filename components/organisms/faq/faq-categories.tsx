import { Button } from "@/components/atoms/button";
import React from "react";

const FaqCategories = () => {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-4 justify-center">
        <Button className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-full font-medium hover:scale-105 transition-all duration-300">
          All Questions
        </Button>
        <Button
          variant="outline"
          className="px-6 py-2 bg-white/50 text-[var(--color-text-secondary)] rounded-full font-medium hover:bg-[var(--color-primary)]/10 transition-all duration-300"
        >
          Getting Started
        </Button>
        <Button
          variant="outline"
          className="px-6 py-2 bg-white/50 text-[var(--color-text-secondary)] rounded-full font-medium hover:bg-[var(--color-primary)]/10 transition-all duration-300"
        >
          Donations
        </Button>
        <Button
          variant="outline"
          className="px-6 py-2 bg-white/50 text-[var(--color-text-secondary)] rounded-full font-medium hover:bg-[var(--color-primary)]/10 transition-all duration-300"
        >
          Safety
        </Button>
        <Button
          variant="outline"
          className="px-6 py-2 bg-white/50 text-[var(--color-text-secondary)] rounded-full font-medium hover:bg-[var(--color-primary)]/10 transition-all duration-300"
        >
          Account
        </Button>
      </div>
    </div>
  );
};

export default FaqCategories;
