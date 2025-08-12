import { Query } from "node-appwrite";
import { ReviewQueryParams } from "../types";

export const buildReviewQueries = (params: ReviewQueryParams): string[] => {
  const { limit, offset, sortBy, rating, search } = params;
  const queries: string[] = [Query.limit(limit), Query.offset(offset)];

  switch (sortBy) {
    case "newest":
      queries.push(Query.orderDesc("$createdAt"));
      break;
    case "oldest":
      queries.push(Query.orderAsc("$createdAt"));
      break;
    case "highest_rated":
      queries.push(Query.orderDesc("rating"));
      break;
    case "lowest_rated":
      queries.push(Query.orderAsc("rating"));
      break;
    case "most_liked":
      queries.push(Query.orderDesc("$createdAt"));
      break;
  }

  if (rating && rating !== "all") {
    queries.push(Query.equal("rating", parseInt(rating)));
  }

  if (search) {
    queries.push(Query.search("title", search));
  }

  return queries;
};

export const parseQueryParams = (
  searchParams: URLSearchParams
): ReviewQueryParams => {
  return {
    limit: parseInt(searchParams.get("limit") || "20"),
    offset: parseInt(searchParams.get("offset") || "0"),
    sortBy: searchParams.get("sortBy") || "newest",
    rating: searchParams.get("rating") || undefined,
    search: searchParams.get("search") || undefined,
  };
};
