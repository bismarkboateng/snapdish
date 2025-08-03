import { testimonials } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

const AuthSidePanel = () => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef.current) return;
    const el = listRef.current;
    el.innerHTML += el.innerHTML;
  }, []);

  return (
    <div className="hidden lg:flex lg:w-1/3 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30" />

      <div className="absolute top-20 right-16 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 left-16 w-40 h-40 bg-[var(--color-secondary)]/20 rounded-full blur-3xl animate-bounce" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/15 rounded-full blur-xl animate-ping" />

      <div className="absolute top-8 left-8 z-10">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
            <span className="text-white text-xl font-bold">S</span>
          </div>
          <span className="text-white text-2xl font-bold">SnapDish</span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-center px-8 py-16">
        <div className="mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            Share Food,
            <br />
            <span className="text-[var(--color-secondary)]">Share Hope</span>
          </h3>
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            Join thousands of community members making a difference through food
            sharing. Together, we&apos;re reducing waste and helping those in need.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-secondary)] mb-1">
                5,200+
              </div>
              <div className="text-white/80 text-sm">Meals Shared</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-secondary)] mb-1">
                480+
              </div>
              <div className="text-white/80 text-sm">Active Donors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-secondary)] mb-1">
                120+
              </div>
              <div className="text-white/80 text-sm">Communities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-secondary)] mb-1">
                300+
              </div>
              <div className="text-white/80 text-sm">Volunteers</div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden h-48">
          <div
            ref={listRef}
            className="animate-[scroll-up_25s_linear_infinite] flex flex-col gap-6"
          >
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-lg"
              >
                <p className="text-white/90 italic mb-4 text-sm leading-relaxed">
                  &quot;{item.quote}&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-[var(--color-primary-dark)] font-bold text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[var(--color-secondary)] font-semibold text-sm">
                      {item.name}
                    </p>
                    <p className="text-white/70 text-xs">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 Q25,0 50,10 T100,10 L100,20 L0,20 Z"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </div>
  );
};

export default AuthSidePanel;
