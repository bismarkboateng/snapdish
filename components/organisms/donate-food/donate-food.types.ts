import { donationSchema } from "./donate-food.schema";
import { z } from "zod";

export type DonationFormData = z.infer<typeof donationSchema>;
