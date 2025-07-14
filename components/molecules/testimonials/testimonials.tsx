"use client"

import React from "react";
import { motion } from "motion/react";
import { testimonials } from "./testimonials.mock";

export const Testimonials: React.FC = () => {
  return (
    <section
      className="py-20 bg-gray-50/10"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-strong)] mb-12">
          Hear From Our Community
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-[var(--color-surface)] p-8 rounded-xl shadow-md border border-[var(--color-border)] flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="italic text-[var(--color-text-muted)] mb-6">
                “{t.quote}”
              </p>
              <div className="font-semibold text-[var(--color-text-primary)]">
                {t.name}
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">
                {t.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
