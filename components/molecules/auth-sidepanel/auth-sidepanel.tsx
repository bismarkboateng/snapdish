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
    <div className="hidden xl:flex xl:w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute top-8 left-8 z-10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[var(--color-orange-base)] rounded-lg flex items-center justify-center">
            <span className="text-white text-xl font-bold">S</span>
          </div>
          <span className="text-white text-xl font-semibold">SnapDish</span>
        </div>
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center px-8">
        <div
          ref={listRef}
          className="animate-[scroll-up_25s_linear_infinite] flex flex-col gap-14"
        >
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="w-full bg-white/10 rounded-lg backdrop-blur-md border border-white/20 shadow-md p-4 py-6"
            >
              <p className="text-sm text-white italic mb-3">&quot;{item.quote}&quot;</p>
              <p className="text-sm font-semibold text-[var(--color-orange-base)]">
                {item.name}
              </p>
              <p className="text-xs text-gray-300">{item.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-orange-base)]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-[var(--color-orange-accent)]/10 rounded-full blur-2xl"></div>
    </div>
  );
};

export default AuthSidePanel;
