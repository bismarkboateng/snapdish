"use client";

import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { CreatePostModalProps } from "./create-post-modal.types";
import { useCreatePostModal } from "./use-create-post-modal";
import { CreatePostForm } from "./create-post-form";

export const CreatePostModal = ({
  isOpen,
  onClose,
  onSubmit,
}: CreatePostModalProps) => {
  const {
    title,
    content,
    rating,
    isSubmitting,
    isFormValid,
    handleSubmit,
    handleClose,
    updateTitle,
    updateContent,
    updateRating,
    getRatingLabel,
  } = useCreatePostModal({ onClose, onSubmit });

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-md"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 0.3,
            }}
            className="relative bg-white/95 backdrop-blur-xl rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-between p-6 border-b border-white/10"
            >
              <h2 className="text-xl font-semibold text-[#1f1f1f]">
                Share Your Experience
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                disabled={isSubmitting}
                className="p-1 h-8 w-8 hover:bg-black/5 transition-colors"
              >
                <X className="w-4 h-4" />
              </Button>
            </motion.div>

            <CreatePostForm
              title={title}
              content={content}
              rating={rating}
              isSubmitting={isSubmitting}
              isFormValid={isFormValid}
              getRatingLabel={getRatingLabel}
              onSubmit={handleSubmit}
              onTitleChange={updateTitle}
              onContentChange={updateContent}
              onRatingChange={updateRating}
              onClose={handleClose}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
