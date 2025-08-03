import React from "react";

const HeroTrustIndicators = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-[var(--color-text-muted)]">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[var(--color-success)] rounded-full"></div>
        <span className="text-sm font-medium">100% Secure</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[var(--color-primary)] rounded-full"></div>
        <span className="text-sm font-medium">Community Verified</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[var(--color-accent-orange)] rounded-full"></div>
        <span className="text-sm font-medium">Always Free</span>
      </div>
    </div>
  );
};

export default HeroTrustIndicators;
