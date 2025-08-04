import { z } from "zod";

export const donationSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  foodType: z.string().min(1, "Please select a food type"),
  quantity: z.string().min(1, "Please specify quantity"),
  location: z.string().min(5, "Please provide a detailed location"),
  expiresAt: z.string().min(1, "Please select an expiry date"),
  availablePickupTimes: z.string().min(1, "Please specify pickup times"),
  contactMethod: z.string().min(1, "Please select a contact method"),
  phone: z.string().optional(),
  email: z.email("Please enter a valid email").optional(),
  dietaryInfo: z.array(z.string()).optional(),
  specialInstructions: z.string().optional(),
});
