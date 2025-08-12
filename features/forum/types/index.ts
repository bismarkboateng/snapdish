import { Models } from "node-appwrite";

export interface CreateReviewDTO {
  title: string;
  content: string;
  rating: number;
}

export interface CreateReviewResponse {
    status: string;
    data?: Models.Document;
}

export interface Review extends Models.Document {
  title: string;
  content: string;
  rating: number;
  author: string;
  authorName: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewsResponse {
  status: string;
  data: {
    reviews: Review[];
    total: number;
    hasMore: boolean;
  };
}

export interface GetReviewsParams {
  limit?: number;
  offset?: number;
  sortBy?: string;
  rating?: string;
  search?: string;
}