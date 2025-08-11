import { useState } from "react";
import { ForumPost, ForumFilters } from "./forum.types";
import { filterPosts } from "./forum.utils";

const mockPosts: ForumPost[] = [
  {
    id: "1",
    userId: "user1",
    userName: "John Doe",
    userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    title: "Amazing fresh fruits received!",
    content: "Just received a wonderful donation of fresh fruits from the community. The apples were crisp, bananas perfectly ripe, and everything was well-packaged. This really helped my family during a tough time. Thank you so much!",
    rating: 5,
    donationId: "don1",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    likesCount: 12,
    commentsCount: 3,
    isLiked: false
  },
  {
    id: "2",
    userId: "user2", 
    userName: "Sarah Wilson",
    userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1ef?w=40&h=40&fit=crop&crop=face",
    title: "Quick delivery and great quality",
    content: "The delivery was super fast and the food quality exceeded my expectations. Everything was fresh and the portions were generous. Highly recommend this donor!",
    rating: 4,
    requestId: "req1",
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    likesCount: 8,
    commentsCount: 1,
    isLiked: true
  },
  {
    id: "3",
    userId: "user3",
    userName: "Mike Johnson", 
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    title: "Good experience overall",
    content: "The food was good and the pickup process was smooth. Only minor issue was the timing - had to wait a bit longer than expected, but worth it!",
    rating: 3,
    donationId: "don2",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    likesCount: 5,
    commentsCount: 2,
    isLiked: false
  }
];

export const useForumPosts = () => {
  const [posts, setPosts] = useState<ForumPost[]>(mockPosts);
  const [isLoading] = useState(false);
  const [filters, setFilters] = useState<ForumFilters>({
    sortBy: 'newest'
  });

  const filteredPosts = filterPosts(posts, filters);

  const toggleLike = (postId: string) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likesCount: post.isLiked ? post.likesCount - 1 : post.likesCount + 1
          }
        : post
    ));
  };

  const addPost = (newPost: Omit<ForumPost, 'id' | 'createdAt' | 'updatedAt' | 'likesCount' | 'commentsCount' | 'isLiked'>) => {
    const post: ForumPost = {
      ...newPost,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      likesCount: 0,
      commentsCount: 0,
      isLiked: false
    };
    
    setPosts(prev => [post, ...prev]);
  };

  return {
    posts: filteredPosts,
    isLoading,
    filters,
    setFilters,
    toggleLike,
    addPost
  };
};
