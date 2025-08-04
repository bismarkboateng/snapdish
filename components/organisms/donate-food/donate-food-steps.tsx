import React from "react";
import { motion } from "motion/react";
import { steps } from "./donate-food.utils";

const DonateFoodSteps = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-center">
            <motion.div
              initial={false}
              animate={{
                backgroundColor: index <= currentStep ? "#009379" : "#f5fefe",
                borderColor: index <= currentStep ? "#009379" : "#e5e7eb",
              }}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                index <= currentStep ? "text-white" : "text-[#6e6e6e]"
              }`}
            >
              <step.icon className="w-5 h-5" />
            </motion.div>
            {index < steps.length - 1 && (
              <motion.div
                initial={false}
                animate={{
                  backgroundColor:
                    index < currentStep
                      ? "var(--color-primary)"
                      : "var(--color-border)",
                }}
                className="w-20 h-0.5 mx-4 transition-all duration-300"
              />
            )}
          </div>
        ))}
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-[#1f1f1f]">
          {steps[currentStep].title}
        </h3>
        <p className="text-sm text-[#6e6e6e]">
          {steps[currentStep].description}
        </p>
      </div>
    </div>
  );
};

export default DonateFoodSteps;
