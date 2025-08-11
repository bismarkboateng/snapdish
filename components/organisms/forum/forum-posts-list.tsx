import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { ForumPostCard } from "./forum-post-card";
import { ForumPostsListProps } from "./forum.types";

export const ForumPostsList = ({
  posts,
  isLoading,
  onToggleLike,
}: ForumPostsListProps) => {
  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-[#6e6e6e]">Loading posts...</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12 bg-white rounded-xl border border-[#e5e7eb]"
      >
        <MessageCircle className="w-12 h-12 text-[#6e6e6e] mx-auto mb-4" />
        <p className="text-[#6e6e6e] text-lg mb-2">No posts found</p>
        <p className="text-[#6e6e6e] text-sm">
          Be the first to share your experience!
        </p>
      </motion.div>
    );
  }

  return (
    <>
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
        >
          <ForumPostCard
            post={post}
            onToggleLike={() => onToggleLike(post.id)}
          />
        </motion.div>
      ))}
    </>
  );
};
