"use client";

import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { useForum } from "./use-forum";
import { CreatePostModal } from "./create-post-modal";
import { ForumStats } from "./forum-stats";
import { ForumFilters } from "./forum-filters";
import { ForumPostsList } from "./forum-posts-list";

export const Forum = () => {
  const {
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
    addPost
  } = useForum();

  return (
    <div className="min-h-screen bg-[#f8fffe] p-2 sm:p-4 lg:p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#1f1f1f] break-words">
                Community Forum
              </h1>
              <p className="text-sm sm:text-base text-[#6e6e6e] break-words leading-relaxed">
                Share your experiences and connect with the community
              </p>
            </div>
            <Button
              onClick={openCreateModal}
              className="bg-[#009379] hover:bg-[#007A65] text-white flex items-center gap-2 shrink-0"
            >
              <Plus className="w-4 h-4" />
              Share Experience
            </Button>
          </div>

          <ForumStats
            totalPosts={posts.length}
            totalLikes={totalLikes}
            averageRating={averageRating}
          />
        </motion.div>

        <ForumFilters
          searchQuery={searchQuery}
          sortBy={filters.sortBy}
          rating={filters.rating}
          onSearch={handleSearch}
          onSortChange={handleSortChange}
          onRatingFilter={handleRatingFilter}
        />

        <div className="space-y-4">
          <ForumPostsList
            posts={posts}
            isLoading={isLoading}
            onToggleLike={toggleLike}
          />
        </div>

        <CreatePostModal
          isOpen={isCreateModalOpen}
          onClose={closeCreateModal}
          onSubmit={addPost}
        />
      </div>
    </div>
  );
};
