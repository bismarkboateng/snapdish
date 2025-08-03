import React from "react";

const HeroPulsating = () => {
  return (
    <>
      <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--color-secondary)]/30 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[var(--color-primary)]/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[var(--color-accent-orange)]/40 rounded-full blur-lg animate-ping"></div>
    </>
  );
};

export default HeroPulsating;
