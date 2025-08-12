import { useState } from "react";
import { useCreateReview } from "@/features/forum/hooks/use-create-review";
import { CreateReviewDTO } from "@/features/forum/types";
import { UseCreatePostModalProps } from "./forum.types";

export const useCreatePostModal = ({
  onClose,
  onSuccess,
}: UseCreatePostModalProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);

  const createReviewMutation = useCreateReview();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const reviewData: CreateReviewDTO = {
      title: title.trim(),
      content: content.trim(),
      rating,
    };

    await createReviewMutation.mutateAsync(reviewData);
    resetForm();
    onClose();
    onSuccess?.();
  };

  const handleClose = () => {
    if (!createReviewMutation.isPending) {
      resetForm();
      onClose();
    }
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setRating(5);
  };

  return {
    title,
    content,
    rating,
    setTitle,
    setContent,
    setRating,
    handleSubmit,
    handleClose,
    isSubmitting: createReviewMutation.isPending,
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
