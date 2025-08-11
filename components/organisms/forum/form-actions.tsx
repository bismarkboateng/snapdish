import { motion } from "motion/react";
import { Button } from "@/components/atoms/button";
import { FormActionsProps } from "./forum.types";

export const FormActions = ({
  isSubmitting,
  isFormValid,
  onClose,
}: FormActionsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex gap-3 pt-4"
    >
      <Button
        type="button"
        variant="outline"
        onClick={onClose}
        disabled={isSubmitting}
        className="flex-1 bg-white/50 backdrop-blur-sm border-white/20 hover:bg-white/70"
      >
        Cancel
      </Button>
      <Button
        type="submit"
        disabled={isSubmitting || !isFormValid}
        className="flex-1 bg-[#009379] hover:bg-[#007A65] text-white shadow-lg"
      >
        {isSubmitting ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
            />
            Posting...
          </>
        ) : (
          "Post Review"
        )}
      </Button>
    </motion.div>
  );
};
