import { Models } from "node-appwrite";

export interface DonationDocument extends Models.Document {
  receivers?: string[];
  donorId: string;
}