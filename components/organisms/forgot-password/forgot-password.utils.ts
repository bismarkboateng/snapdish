import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.email("Enter a valid email"),
});

export const forgotPasswordInitialValues = {
  email: "",
};
