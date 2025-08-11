"use client";

import { Heart, MessageCircle, Star, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { UserAvatar } from "@/components/atoms/user-avatar";
import {
  formatTimeAgo,
  getRatingColor,
  getRatingText,
  truncateContent,
} from "./forum.utils";
import { ForumPostCardProps } from "./forum.types";
import Image from "next/image";

export const ForumPostCard = ({ post, onToggleLike }: ForumPostCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-[#e5e7eb] p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <UserAvatar
            src={post.userAvatar}
            name={post.userName}
            size="md"
            variant="gradient"
            showBorder={true}
          />
          <div>
            <h3 className="font-medium text-[#1f1f1f]">{post.userName}</h3>
            <p className="text-sm text-[#6e6e6e]">
              {formatTimeAgo(post.createdAt)}
            </p>
          </div>
        </div>

        <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={`star-${post.id}-${i}`}
              className={`w-4 h-4 ${
                i < post.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className={`text-sm font-medium ${getRatingColor(post.rating)}`}>
          {getRatingText(post.rating)}
        </span>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-[#1f1f1f] mb-2">
          {post.title}
        </h2>
        <p className="text-[#6e6e6e] leading-relaxed">
          {truncateContent(post.content)}
        </p>
      </div>

      {post.images && post.images.length > 0 && (
        <div className="mb-4">
          <div className="grid grid-cols-2 gap-2">
            {post.images.slice(0, 4).map((image: string, index: number) => (
              <div key={`image-${post.id}-${index}`} className="relative">
                <Image
                  src={image}
                  alt=""
                  className="w-full h-24 object-cover rounded-lg"
                />
                {index === 3 && post.images!.length > 4 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                    <span className="text-white font-medium">
                      +{post.images!.length - 4}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-[#e5e7eb]">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleLike}
            className={`flex items-center gap-2 ${
              post.isLiked ? "text-red-500" : "text-[#6e6e6e]"
            }`}
          >
            <Heart
              className={`w-4 h-4 ${post.isLiked ? "fill-current" : ""}`}
            />
            <span>{post.likesCount}</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-[#6e6e6e]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{post.commentsCount}</span>
          </Button>
        </div>

        {(post.donationId || post.requestId) && (
          <div className="text-xs text-[#6e6e6e] bg-[#f8fffe] px-2 py-1 rounded">
            {post.donationId ? "Donation" : "Request"} Review
          </div>
        )}
      </div>
    </div>
  );
};
