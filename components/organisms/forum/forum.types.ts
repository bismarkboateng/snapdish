export interface ForumPost {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  title: string;
  content: string;
  rating: number;
  donationId?: string;
  requestId?: string;
  images?: string[];
  createdAt: string;
  updatedAt: string;
  likesCount: number;
  commentsCount: number;
  isLiked: boolean;
}

export interface ForumComment {
  id: string;
  postId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  createdAt: string;
  likesCount: number;
  isLiked: boolean;
}

export interface CreatePostData {
  title: string;
  content: string;
  rating: number;
  donationId?: string;
  requestId?: string;
  images?: File[];
}

export type ForumSortBy = "newest" | "oldest" | "most_liked" | "most_commented";

export interface ForumFilters {
  rating?: number;
  sortBy: ForumSortBy;
  searchQuery?: string;
}

export interface ForumState {
  posts: ForumPost[];
  selectedPost?: ForumPost;
  comments: ForumComment[];
  isLoading: boolean;
  error?: string;
  filters: ForumFilters;
}

export interface CreatePostFormProps {
  title: string;
  content: string;
  rating: number;
  isSubmitting: boolean;
  isFormValid: boolean;
  getRatingLabel: () => string;
  onSubmit: (e: React.FormEvent) => void;
  onTitleChange: (title: string) => void;
  onContentChange: (content: string) => void;
  onRatingChange: (rating: number) => void;
  onClose: () => void;
}

export interface FormActionsProps {
  isSubmitting: boolean;
  isFormValid: boolean;
  onClose: () => void;
}

export interface ForumFiltersProps {
  searchQuery: string;
  sortBy: ForumSortBy;
  rating: number | undefined;
  onSearch: (query: string) => void;
  onSortChange: (sortBy: ForumSortBy) => void;
  onRatingFilter: (rating: string) => void;
}

export interface ForumPostCardProps {
  post: ForumPost;
  onToggleLike: () => void;
}

export interface ForumPostsListProps {
  posts: ForumPost[];
  isLoading: boolean;
  onToggleLike: (postId: string) => void;
}

export interface ForumStatsProps {
  totalPosts: number;
  totalLikes: number;
  averageRating: string;
}

export type PostData = Omit<
  ForumPost,
  "id" | "createdAt" | "updatedAt" | "likesCount" | "commentsCount" | "isLiked"
>;

export interface UseCreatePostModalProps {
  onClose: () => void;
  onSuccess?: () => void;
}
