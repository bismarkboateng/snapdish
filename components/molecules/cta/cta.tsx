import React from "react";
import { ctaData } from "./cta.mock";

export const CTABanner: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)`
        }}
      />
      
      <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {ctaData.heading}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            {ctaData.subtext}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href={ctaData.primaryAction.href}
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold
            text-[var(--color-primary)] bg-white rounded-2xl hover:bg-[var(--color-secondary-light)]
            transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="flex items-center">
              {ctaData.primaryAction.text}
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          
          {ctaData.secondaryAction && (
            <a
              href={ctaData.secondaryAction.href}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-2xl
              hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center">
                {ctaData.secondaryAction.text}
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          )}
        </div>
        
        <div className="mt-12 flex justify-center items-center space-x-8 text-white/80">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-[var(--color-success)] rounded-full"></div>
            <span className="text-sm font-medium">Trusted by 500+ users</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-[var(--color-secondary)] rounded-full"></div>
            <span className="text-sm font-medium">5,200+ meals shared</span>
          </div>
        </div>
      </div>
    </section>
  );
};
