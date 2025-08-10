import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { approveDonationRequest, declineDonationRequest } from "../services";
import { toast } from "sonner";
import { DonationRequestActionResponse, ApproveDeclineRequestParams } from "../types";

export const useApproveDonationRequest = () => {
  return useMutation<
    DonationRequestActionResponse,
    Error,
    ApproveDeclineRequestParams,
    unknown
  >({
    mutationFn: ({ donationId, userId }) => approveDonationRequest(donationId, userId),
    onSuccess: () => {
      toast.success("Donation request approved successfully.");
    },
    onError: (error: Error) => {
      toast.error(`Failed to approve donation request: ${error.message}`);
    },
  } as UseMutationOptions<DonationRequestActionResponse, Error, ApproveDeclineRequestParams, unknown>);
};

export const useDeclineDonationRequest = () => {
  return useMutation<
    DonationRequestActionResponse,
    Error,
    ApproveDeclineRequestParams,
    unknown
  >({
    mutationFn: ({ donationId, userId }) => declineDonationRequest(donationId, userId),
    onSuccess: () => {
      toast.success("Donation request declined successfully.");
    },
    onError: (error: Error) => {
      toast.error(`Failed to decline donation request: ${error.message}`);
    },
  } as UseMutationOptions<DonationRequestActionResponse, Error, ApproveDeclineRequestParams, unknown>);
};