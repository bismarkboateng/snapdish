import { Donation } from "@/components/molecules/settings-panel/my-donations-mock";
import { Models } from "node-appwrite";

export interface DonationGridProps {
  className?: string;
  onRequestFood?: (donation: Donation) => void;
}

export interface RequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  donation: Donation | null;
}

export interface UseDonationGridReturn {
  donations: Donation[];
  isLoading: boolean;
  error: string | null;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterType: string;
  setFilterType: (type: string) => void;
  filteredDonations: Donation[];
}

export interface NoDonationsProps {
  searchTerm: string;
  filterType: string;
}

export interface DonationDocument extends Models.Document {
  title: string;
  description: string;
  foodType: string;
  quantity: string;
  location: string;
  status: "active" | "claimed" | "expired" | "available";
  expiresAt: string;
  availablePickupTimes: string;
  contactMethod: "email" | "phone" | "both";
  email?: string;
  phone?: string;
  dietaryInfo?: string[];
  specialInstructions?: string;
  donorId: string;
  receivers?: string[] | null;
  isClaimed?: boolean;
  image?: string;
}
