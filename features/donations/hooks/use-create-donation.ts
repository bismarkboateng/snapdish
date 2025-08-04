import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  return useMutation<DonationResponse, Error, CreateDonationDTO>({
    mutationFn: createDonation,
    onSuccess: () => {
      setSubmitSuccess(true);
      setIsSubmitting(false);

      setTimeout(() => {
        form.reset();
        setCurrentStep(0);
        setSubmitSuccess(false);
        router.push("/dashboard/my-donations");
      }, 2000);
    },
    onError: (error) => {
      setIsSubmitting(false);
      toast.error(`Failed to create donation: ${error.message}`);
    },
  });
};
