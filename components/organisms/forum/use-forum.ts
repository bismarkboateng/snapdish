import { useState } from "react";
import { useForumPosts } from "./use-forum-posts";
import { ForumSortBy } from "./forum.types";

export const useForum = () => {
  const { posts, isLoading, filters, setFilters, toggleLike, refetch } =
    useForumPosts();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  };

  const handleSortChange = (sortBy: ForumSortBy) => {
    setFilters((prev) => ({ ...prev, sortBy }));
  };

  const handleRatingFilter = (rating: string) => {
    const ratingValue = rating === "all" ? undefined : parseInt(rating);
    setFilters((prev) => ({ ...prev, rating: ratingValue }));
  };

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  const handlePostCreated = () => {
    refetch();
  };

  const totalLikes = posts.reduce((sum, post) => sum + post.likesCount, 0);
  const averageRating =
    posts.length > 0
      ? (
          posts.reduce((sum, post) => sum + post.rating, 0) / posts.length
        ).toFixed(1)
      : "0.0";

  return {
    posts,
    isLoading,
    filters,
    isCreateModalOpen,
    searchQuery,

    totalLikes,
    averageRating,

    handleSearch,
    handleSortChange,
    handleRatingFilter,
    openCreateModal,
    closeCreateModal,
    toggleLike,
    handlePostCreated,
  };
};
