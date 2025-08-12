import { http } from "@/lib/api/api-http-client";
import { apiRoutes } from "@/lib/api/api-routes";
import { CreateReviewDTO, CreateReviewResponse } from "../types";

export const createReview = async (data: CreateReviewDTO) => {
  try {
    const result = await http.post<CreateReviewDTO, CreateReviewResponse>(
      apiRoutes.forum.createReview,
      data
    );

    if ("data" in result) return result.data!;
    return Promise.reject(
      new Error(result.message ?? "Creating review failed")
    );
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unexpected error occurred while creating review");
  }
};
