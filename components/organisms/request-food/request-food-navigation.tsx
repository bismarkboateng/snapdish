import { Button } from "@/components/atoms/button";
import { steps } from "./request-food.utils";
import { RequestFoodNavigationProps } from "./request-food.types";
import { motion } from "motion/react";

const RequestFoodNavigation = ({
  currentStep,
  isSubmitting,
  nextStep,
  prevStep,
}: RequestFoodNavigationProps) => {
  return (
    <div className="flex justify-between">
      <Button
        type="button"
        variant="outline"
        onClick={prevStep}
        disabled={currentStep === 0}
        className="border-[#e5e7eb] hover:bg-[#f5fefe]"
      >
        Previous
      </Button>

      <div className="flex gap-3">
        {currentStep < steps.length - 1 ? (
          <Button
            type="button"
            onClick={nextStep}
            className="bg-[#009379] hover:bg-[#007566] text-white"
          >
            Next Step
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#009379] hover:bg-[#007566] text-white min-w-[120px]"
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              "Submit Request"
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default RequestFoodNavigation;
