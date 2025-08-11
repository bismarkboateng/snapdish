import { motion } from "motion/react";
import { Input } from "@/components/atoms/input";
import { Textarea } from "@/components/atoms/textarea";
import { RatingField } from "./rating-field";
import { PhotoUploadField } from "./photo-upload-field";
import { FormActions } from "./form-actions";
import { CreatePostFormProps } from "./forum.types";

export const CreatePostForm = ({
  title,
  content,
  rating,
  isSubmitting,
  isFormValid,
  getRatingLabel,
  onSubmit,
  onTitleChange,
  onContentChange,
  onRatingChange,
  onClose,
}: CreatePostFormProps) => {
  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      onSubmit={onSubmit}
      className="p-6 space-y-6"
    >
      <RatingField
        rating={rating}
        onRatingChange={onRatingChange}
        getRatingLabel={getRatingLabel}
      />

      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-[#1f1f1f] mb-2"
        >
          Title
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="Give your review a title..."
          maxLength={100}
          required
          className="bg-white/50 backdrop-blur-sm border-white/20 focus:border-[#009379] focus:ring-[#009379]"
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-[#1f1f1f] mb-2"
        >
          Your experience
        </label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          placeholder="Tell us about your experience with the donation or request..."
          rows={4}
          maxLength={500}
          required
          className="resize-none bg-white/50 backdrop-blur-sm border-white/20 focus:border-[#009379] focus:ring-[#009379]"
        />
        <div className="text-xs text-[#6e6e6e] mt-1">
          {content.length}/500 characters
        </div>
      </div>

      <PhotoUploadField />

      <FormActions
        isSubmitting={isSubmitting}
        isFormValid={isFormValid}
        onClose={onClose}
      />
    </motion.form>
  );
};
