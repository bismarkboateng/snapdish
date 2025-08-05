import { useMutation } from "@tanstack/react-query";
import {
  CreateDonationDTO,
  DonationResponse,
  UseCreateDonationProps,
} from "../types";
import { createDonation } from "../services";
import { toast } from "sonner";

export const useCreateDonation = ({
  form,
  setCurrentStep,
  setSubmitSuccess,
  setIsSubmitting,
}: UseCreateDonationProps) => {
  return useMutation<DonationResponse, Error, CreateDonationDTO>({
    mutationFn: createDonation,
    onSuccess: () => {
      setSubmitSuccess(true);
      setIsSubmitting(false);
    },
    onError: (error) => {
      setIsSubmitting(false);
      toast.error(`Failed to create donation: ${error.message}`);
    },
  });
};
