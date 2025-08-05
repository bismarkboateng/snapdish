import { Models } from "node-appwrite";

export type DonationStatus = "active" | "claimed" | "expired" | "requested";
export type ContactMethod = "phone" | "email" | "both";

export interface Donation {
  id: string;
  title: string;
  description: string;
  foodType: string;
  quantity: string;
  location: string;
  status: DonationStatus;
  createdAt: string;
  expiresAt: string;
  availablePickupTimes: string;
  contactMethod: ContactMethod;
  phone?: string;
  email?: string;
  dietaryInfo: string[];
  specialInstructions?: string;
  donorId: string;
  receivers: string[] | null;
  isClaimed: boolean;
}

export interface RawDonation {
  $id: string;
  title: string;
  description: string;
  foodType: string;
  quantity: string;
  location: string;
  status: DonationStatus;
  createdAt?: string;
  $createdAt?: string;
  expiresAt: string;
  availablePickupTimes: string;
  contactMethod: ContactMethod;
  phone?: string;
  email?: string;
  dietaryInfo: string[];
  specialInstructions?: string;
  donorId: string;
  receivers: string[] | null;
  isClaimed: boolean;
}

export interface MyDonationDocument extends Models.Document {
  title: string;
  description: string;
  foodType: string;
  quantity: string;
  location: string;
  status: DonationStatus | "available";
  expiresAt: string;
  availablePickupTimes: string;
  contactMethod: ContactMethod;
  phone?: string;
  email?: string;
  dietaryInfo?: string[];
  specialInstructions?: string;
  donorId: string;
  receivers?: string[] | null;
  isClaimed?: boolean;
}
export interface MyDonationsSearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
}
