import { ForumPost, ForumFilters } from "./forum.types";

export const formatTimeAgo = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);
  const diffInMinutes = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60)
  );

  if (diffInMinutes < 1) return "Just now";
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d ago`;

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) return `${diffInWeeks}w ago`;

  return date.toLocaleDateString();
};

export const getRatingColor = (rating: number): string => {
  if (rating >= 4) return "text-green-600";
  if (rating >= 3) return "text-yellow-600";
  return "text-red-600";
};

export const getRatingText = (rating: number): string => {
  const ratings = {
    1: "Poor experience",
    2: "Fair experience",
    3: "Good experience",
    4: "Great experience",
    5: "Excellent experience",
  };
  return ratings[rating as keyof typeof ratings] || "No rating";
};

export const filterPosts = (
  posts: ForumPost[],
  filters: ForumFilters
): ForumPost[] => {
  let filtered = [...posts];

  if (filters.rating) {
    filtered = filtered.filter((post) => post.rating === filters.rating);
  }

  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    filtered = filtered.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.userName.toLowerCase().includes(query)
    );
  }

  switch (filters.sortBy) {
    case "newest":
      filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      break;
    case "oldest":
      filtered.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      break;
    case "most_liked":
      filtered.sort((a, b) => b.likesCount - a.likesCount);
      break;
    case "most_commented":
      filtered.sort((a, b) => b.commentsCount - a.commentsCount);
      break;
  }

  return filtered;
};

export const truncateContent = (
  content: string,
  maxLength: number = 150
): string => {
  if (content.length <= maxLength) return content;
  return content.substring(0, maxLength) + "...";
};
