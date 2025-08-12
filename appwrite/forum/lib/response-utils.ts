import { NextResponse } from "next/server";
import { EnrichedReview, UserData } from "../types";

export const enrichReviewsWithUserData = (
  reviews: any[],
  userMap: Map<string, UserData>
): EnrichedReview[] => {
  return reviews.map((review) => {
    const user = userMap.get(review.author);

    return {
      ...review,
      authorName: user?.fullName || "Anonymous User",
    };
  });
};

export const createSuccessResponse = (data: any) => {
  return NextResponse.json({
    status: "success",
    data,
  });
};

export const createErrorResponse = (message: string, status: number = 500) => {
  return NextResponse.json({ status: "error", message }, { status });
};
