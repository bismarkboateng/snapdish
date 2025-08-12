import { useState, useMemo } from "react";
import { useReviews } from "@/features/forum/hooks/use-reviews";
import { Review } from "@/features/forum/types";
import { ForumPost, ForumFilters } from "./forum.types";
import { filterPosts } from "./forum.utils";

const transformReviewToForumPost = (review: Review): ForumPost => ({
  id: review.$id,
  userId: review.author,
  userName: review.authorName,
  userAvatar: undefined,
  title: review.title,
  content: review.content,
  rating: review.rating,
  createdAt: review.$createdAt,
  updatedAt: review.$updatedAt,
  likesCount: 0,
  commentsCount: 0,
  isLiked: false,
});

export const useForumPosts = () => {
  const [filters, setFilters] = useState<ForumFilters>({
    sortBy: "newest",
    rating: undefined,
    searchQuery: "",
  });

  const {
    data: reviewsData,
    isLoading,
    refetch,
  } = useReviews({
    sortBy: filters.sortBy,
    rating: filters.rating?.toString(),
    search: filters.searchQuery,
    limit: 50,
  });

  const allPosts = useMemo(() => {
    if (!reviewsData?.data?.reviews) return [];
    return reviewsData.data.reviews.map(transformReviewToForumPost);
  }, [reviewsData]);

  const posts = useMemo(() => {
    return filterPosts(allPosts, filters);
  }, [allPosts, filters]);

  const toggleLike = (postId: string) => {
    console.log("Toggle like for post:", postId);
  };

  return {
    posts,
    isLoading,
    filters,
    setFilters,
    toggleLike,
    refetch,
  };
};
