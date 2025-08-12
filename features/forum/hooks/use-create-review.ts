import { useMutation } from "@tanstack/react-query";
import { CreateReviewDTO, CreateReviewResponse } from "../types";
import { createReview } from "../services";
import { toast } from "sonner";

export const useCreateReview = () => {
  return useMutation<CreateReviewResponse, Error, CreateReviewDTO>({
    mutationFn: createReview,
    onSuccess: () => {
      toast.success(`Review created successfully!`);
    },
    onError: (error) => {
      toast.error(`Failed to create review: ${error.message}`);
    },
  });
};
