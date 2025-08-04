import { z } from "zod";
import { requestSchema } from "./request-food.schema";

export type RequestFormData = z.infer<typeof requestSchema>;

export interface UseRequestFoodReturn {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isSubmitting: boolean;
  submitSuccess: boolean;
  nextStep: () => Promise<void>;
  prevStep: () => void;
  setIsSubmitting: (isSubmitting: boolean) => void;
  setSubmitSuccess: (success: boolean) => void;
}

export interface RequestFoodNavigationProps {
  currentStep: number;
  isSubmitting: boolean;
  nextStep: () => void;
  prevStep: () => void;
}