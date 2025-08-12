export interface ReviewQueryParams {
  limit: number;
  offset: number;
  sortBy: string;
  rating?: string;
  search?: string;
}

export interface EnrichedReview {
  $id: string;
  title: string;
  content: string;
  rating: number;
  author: string;
  authorName: string;
  $createdAt: string;
  $updatedAt: string;
}

export interface UserData {
  $id: string;
  fullName: string;
}
