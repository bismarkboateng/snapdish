import { useMutation } from "@tanstack/react-query";
import { RequestDonationDTO, RequestDonationResponse } from "../types";
import { requestDonation } from "../services";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useRequestDonation = (onClose: () => void) => {
  const router = useRouter();
  return useMutation<RequestDonationResponse, Error, RequestDonationDTO>({
    mutationFn: requestDonation,
    onSuccess: () => {
      toast.success("Donation request sent successfully!");
      onClose();
      router.push("/dashboard/settings/my-requests");
    },
    onError: (error) => {
      toast.error(`Requesting donation failed: ${error.message}`);
    },
  });
};
