import Link from "next/link";
import { motion } from "motion/react";

const TestimonialsFooter = () => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="inline-flex flex-col sm:flex-row items-center gap-6 mb-8">
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full border-2 border-[var(--color-surface)] flex items-center justify-center text-white font-bold text-sm"
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
            <div className="w-10 h-10 bg-[var(--color-text-muted)] rounded-full border-2 border-[var(--color-surface)] flex items-center justify-center text-white font-bold text-xs">
              +100
            </div>
          </div>
          <span className="text-[var(--color-text-muted)] font-medium">
            Join 500+ happy community members
          </span>
        </div>
      </div>

      <Link
        href="/register"
        className="ml-3 group inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
        style={{
          background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)`,
          boxShadow: "var(--shadow-default)",
        }}
      >
        <span className="flex items-center">
          Share Your Story
          <svg
            className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
};

export default TestimonialsFooter;
