import { ForumPost } from "./forum.types";

export interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: Omit<ForumPost, 'id' | 'createdAt' | 'updatedAt' | 'likesCount' | 'commentsCount' | 'isLiked'>) => void;
}
