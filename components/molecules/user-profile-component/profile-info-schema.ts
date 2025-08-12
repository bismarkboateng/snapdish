import { z } from "zod";

export const profileUpdateSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^\+?\d{7,15}$/.test(val), {
      message: "Enter a valid phone number",
    }),
});

export const profileInfoSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email({ message: "Enter a valid email" }),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^\+?\d{7,15}$/.test(val), {
      message: "Enter a valid phone number",
    }),
});

export type ProfileFormValues = z.infer<typeof profileInfoSchema>;
export type ProfileUpdateValues = z.infer<typeof profileUpdateSchema>;

export const profileInfoInitialValues = {
  fullName: "",
  email: "",
  phone: "",
};
