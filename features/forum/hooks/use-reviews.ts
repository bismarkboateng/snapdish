import { useQuery } from "@tanstack/react-query";
import { GetReviewsParams, ReviewsResponse } from "../types";

const fetchReviews = async (
  params: GetReviewsParams = {}
): Promise<ReviewsResponse> => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.append(key, value.toString());
    }
  });

  const response = await fetch(`/api/forum?${searchParams.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch reviews");
  }

  return response.json();
};

export const useReviews = (params: GetReviewsParams = {}) => {
  return useQuery({
    queryKey: ["reviews", params],
    queryFn: () => fetchReviews(params),
    staleTime: 5 * 60 * 1000,
  });
};
