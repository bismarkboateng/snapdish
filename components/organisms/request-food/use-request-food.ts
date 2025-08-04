import { useState } from "react";
import { getFieldsForStep, steps } from "./request-food.utils";
import { UseFormReturn } from "react-hook-form";

import { RequestFormData, UseRequestFoodReturn } from "./request-food.types";

const useRequestFood = (
  form: UseFormReturn<RequestFormData>
): UseRequestFoodReturn => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fieldsToValidate);

    if (isValid && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return {
    currentStep,
    setCurrentStep,
    isSubmitting,
    submitSuccess,
    nextStep,
    prevStep,
    setIsSubmitting,
    setSubmitSuccess,
  };
};

export default useRequestFood;
