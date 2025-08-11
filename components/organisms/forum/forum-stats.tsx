import { motion } from "motion/react";
import { Star, Heart, TrendingUp } from "lucide-react";
import { ForumStatsProps } from "./forum.types";

export const ForumStats = ({
  totalPosts,
  totalLikes,
  averageRating,
}: ForumStatsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl border border-[#e5e7eb] p-4 flex items-center gap-3"
      >
        <div className="w-10 h-10 bg-[#f0fdf4] rounded-lg flex items-center justify-center">
          <Star className="w-5 h-5 text-[#009379]" />
        </div>
        <div>
          <p className="text-lg font-semibold text-[#1f1f1f]">{totalPosts}</p>
          <p className="text-sm text-[#6e6e6e]">Total Reviews</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl border border-[#e5e7eb] p-4 flex items-center gap-3"
      >
        <div className="w-10 h-10 bg-[#fef3f2] rounded-lg flex items-center justify-center">
          <Heart className="w-5 h-5 text-[#f97316]" />
        </div>
        <div>
          <p className="text-lg font-semibold text-[#1f1f1f]">{totalLikes}</p>
          <p className="text-sm text-[#6e6e6e]">Total Likes</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl border border-[#e5e7eb] p-4 flex items-center gap-3"
      >
        <div className="w-10 h-10 bg-[#f0f9ff] rounded-lg flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-[#3b82f6]" />
        </div>
        <div>
          <p className="text-lg font-semibold text-[#1f1f1f]">
            {averageRating}
          </p>
          <p className="text-sm text-[#6e6e6e]">Avg Rating</p>
        </div>
      </motion.div>
    </div>
  );
};
