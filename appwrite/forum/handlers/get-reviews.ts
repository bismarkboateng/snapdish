import { NextRequest } from "next/server";
import { databases } from "@/appwrite/config";
import { COLLECTIONS, DATABASE_ID } from "@/appwrite/const";
import { parseQueryParams, buildReviewQueries } from "../lib/query-utils";

import { fetchUsersForReviews } from "../lib/user-utils";
import {
  enrichReviewsWithUserData,
  createSuccessResponse,
} from "../lib/response-utils";
import { handleAppwriteError } from "@/appwrite/auth/auth-handlers";

export async function getReviewsHandler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const queryParams = parseQueryParams(searchParams);
    const queries = buildReviewQueries(queryParams);

    const reviews = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.REVIEWS,
      queries
    );

    const userMap = await fetchUsersForReviews(reviews.documents);

    const enrichedReviews = enrichReviewsWithUserData(
      reviews.documents,
      userMap
    );

    return createSuccessResponse({
      reviews: enrichedReviews,
      total: reviews.total,
      hasMore: reviews.total > queryParams.offset + queryParams.limit,
    });
  } catch (error) {
    handleAppwriteError(error);
  }
}
