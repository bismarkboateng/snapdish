"use client";

import { useState } from "react";
import { faqData } from "./faq.mock";
import { AnimatePresence, motion } from "motion/react";

const FaqContent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="space-y-6 mb-16">
      {faqData.map((item, index) => (
        <motion.div
          key={item.question}
          className="group relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div
            className="bg-[var(--color-surface)] rounded-2xl shadow-[var(--shadow-default)] border border-[var(--color-border)]/50 overflow-hidden
              hover:shadow-xl transition-all duration-300 group-hover:border-[var(--color-primary)]/30"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left p-6 md:p-8 hover:bg-[var(--color-primary-light)]/20 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 flex-1">
                <div
                  className="w-8 h-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white rounded-full
                    flex items-center justify-center text-sm font-bold flex-shrink-0"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span
                  className="font-semibold text-lg md:text-xl text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)]
                    transition-colors duration-300"
                >
                  {item.question}
                </span>
              </div>

              <div className="ml-4 flex-shrink-0">
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center"
                >
                  <span className="text-[var(--color-primary-dark)] font-bold text-xl">
                    +
                  </span>
                </motion.div>
              </div>
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
                    paddingTop: "1.5rem",
                    paddingBottom: "2rem",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                  className="px-6 md:px-8 bg-gradient-to-r from-[var(--color-secondary-light)]/30 to-[var(--color-primary-light)]/20 border-t border-[var(--color-border)]/30"
                >
                  <div className="pl-12 md:pl-12">
                    <p className="text-[var(--color-text-muted)] leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FaqContent;
