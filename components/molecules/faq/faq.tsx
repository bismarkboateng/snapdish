"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqData } from "./faq.mock";

export const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[var(--color-background)]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-strong)] mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-[var(--color-border)] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left p-4 bg-[var(--color-surface)] hover:bg-[var(--color-orange-light)] transition-colors"
              >
                <span className="font-medium text-[var(--color-text-primary)]">
                  {item.question}
                </span>
                <span className="text-[var(--color-text-muted)]">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{
                      opacity: 0,
                      height: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      paddingTop: "1rem",
                      paddingBottom: "1rem",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                    className="px-4 bg-[var(--color-orange-light)] text-[var(--color-text-muted)]"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
