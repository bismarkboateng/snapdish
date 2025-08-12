import { z } from "zod";

export const reviewSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  content: z.string().trim().min(1, "Content is required"),
  rating: z
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating cannot be more than 5"),
});

export type ReviewData = z.infer<typeof reviewSchema>;
