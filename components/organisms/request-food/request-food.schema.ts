import { z } from "zod";

export const requestSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  requestedFoodTypes: z
    .array(z.string())
    .min(1, "Please select at least one food type"),
  servings: z.string().min(1, "Please specify number of servings"),
  location: z.string().min(5, "Please provide a detailed location"),
  neededBy: z.string().min(1, "Please specify when you need the food"),
  urgency: z.enum(["low", "medium", "high"]),
  familySize: z.string().optional(),
  dietaryRestrictions: z.array(z.string()).optional(),
  contactMethod: z.string().min(1, "Please select a contact method"),
  phone: z.string().optional(),
  email: z.string().optional(),
  additionalNotes: z.string().optional(),
});

export const requestFormInitialValues = {
  title: "",
  description: "",
  requestedFoodTypes: [],
  servings: "",
  location: "",
  neededBy: "",
  urgency: "medium" as const,
  familySize: "",
  dietaryRestrictions: [],
  contactMethod: "",
  phone: "",
  email: "",
  additionalNotes: "",
};
