"use client";

import React from "react";
import { motion } from "motion/react";
import { testimonials } from "./testimonials.mock";
import TestimonialsFooter from "./testimonials-footer";

export const Testimonials = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-pink)]/20 via-[var(--color-background)] to-[var(--color-secondary-light)]/40" />

      <div
        className="absolute top-20 right-20 w-40 h-40
         bg-[var(--color-secondary)]/20 rounded-full blur-3xl animate-pulse"
      />
      <div
        className="absolute bottom-32 left-16 w-32 h-32
        bg-[var(--color-primary)]/15 rounded-full blur-2xl animate-bounce"
      />
      <div
        className="absolute top-1/2 right-1/3 w-24 h-24
        bg-[var(--color-accent-pink)]/30 rounded-full blur-xl animate-ping"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-accent-pink)]
           text-[var(--color-primary-dark)] text-sm font-medium mb-6 shadow-[var(--shadow-default)]"
          >
            <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-2 animate-pulse"></span>{" "}
            Community Stories
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-[var(--color-text-primary)]">Hear From</span>
            <br />
            <span
              className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-dark)]
            to-[var(--color-accent-orange)] bg-clip-text text-transparent"
            >
              Our Community
            </span>
          </h2>

          <p
            className="text-xl md:text-2xl text-[var(--color-text-muted)] max-w-3xl 
          mx-auto leading-relaxed"
          >
            Real stories from real people making a difference in their
            communities
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[var(--color-primary)]
              to-[var(--color-primary-dark)] rounded-full flex items-center justify-center text-white text-2xl
              font-bold shadow-lg z-10"
              >
                &quot;
              </div>

              <div
                className="relative bg-[var(--color-surface)] p-8 pt-12 rounded-3xl shadow-[var(--shadow-default)] border
              border-[var(--color-border)]/50 hover:shadow-xl hover:scale-105 transition-all duration-500 group-hover:border-[var(--color-primary)]/30 overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-pink)]/5 via-transparent to-[var(--color-primary)]/5
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative z-10 mb-8">
                  <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed italic font-light">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>

                <div className="relative z-10 flex items-center space-x-4">
                  <div
                    className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-secondary-light)]
                  rounded-full flex items-center justify-center text-[var(--color-primary-dark)]
                  font-bold text-lg group-hover:scale-110 transition-transform duration-300"
                  >
                    {testimonial.name.charAt(0)}
                  </div>

                  <div className="flex-1">
                    <div
                      className="font-bold text-[var(--color-text-primary)] text-lg group-hover:text-[var(--color-primary)]
                    transition-colors duration-300"
                    >
                      {testimonial.name}
                    </div>
                    <div className="text-[var(--color-text-muted)] text-sm font-medium">
                      {testimonial.role}
                    </div>
                  </div>

                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={`star-${testimonial.name}-${i}`}
                        className="text-[var(--color-secondary-dark)] text-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.2 + i * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r
                from-[var(--color-primary)] to-[var(--color-primary-dark)] group-hover:w-full
                transition-all duration-700 rounded-b-3xl"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
        <TestimonialsFooter />
      </div>
    </section>
  );
};
