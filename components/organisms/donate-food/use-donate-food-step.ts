import { useState } from "react";
import { getFieldsForStep, steps } from "./donate-food.utils";
import { UseFormReturn } from "react-hook-form";
import { DonationFormData } from "./donate-food.types";

interface UseDonateFoodStepsReturn {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  nextStep: () => Promise<void>;
  prevStep: () => void;
}

const useDonateFoodSteps = (
  form: UseFormReturn<DonationFormData>
): UseDonateFoodStepsReturn => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const nextStep = async (): Promise<void> => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid: boolean = await form.trigger(fieldsToValidate);

    if (isValid && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = (): void => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return {
    setCurrentStep,
    currentStep,
    nextStep,
    prevStep,
  };
};

export default useDonateFoodSteps;
