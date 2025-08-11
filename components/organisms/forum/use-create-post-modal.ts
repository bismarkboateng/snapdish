import { useState } from "react";
import { PostData, UseCreatePostModalProps } from "./forum.types";

export const useCreatePostModal = ({
  onClose,
  onSubmit,
}: UseCreatePostModalProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setIsSubmitting(true);

    const newPost: PostData = {
      userId: "current-user",
      userName: "Current User",
      userAvatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      title: title.trim(),
      content: content.trim(),
      rating,
    };

    onSubmit(newPost);

    resetForm();
    setIsSubmitting(false);
    onClose();
  };

  const handleClose = () => {
    if (!isSubmitting) {
      resetForm();
      onClose();
    }
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setRating(5);
  };

  const updateTitle = (newTitle: string) => setTitle(newTitle);
  const updateContent = (newContent: string) => setContent(newContent);
  const updateRating = (newRating: number) => setRating(newRating);

  return {
    title,
    content,
    rating,
    isSubmitting,

    handleSubmit,
    handleClose,
    updateTitle,
    updateContent,
    updateRating,

    isFormValid: !!(title.trim() && content.trim()),
    getRatingLabel: () => {
      switch (rating) {
        case 1:
          return "Poor";
        case 2:
          return "Fair";
        case 3:
          return "Good";
        case 4:
          return "Great";
        case 5:
          return "Excellent";
        default:
          return "";
      }
    },
  };
};
