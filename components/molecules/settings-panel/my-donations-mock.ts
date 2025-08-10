export interface Donation {
  id: string;
  title: string;
  description: string;
  foodType: string;
  quantity: string;
  location: string;
  expiresAt: string;
  availablePickupTimes: string;
  contactMethod: "email" | "phone" | "both";
  phone?: string;
  email?: string;
  dietaryInfo: string[];
  specialInstructions?: string;
  donorId: string;
  status: "requested" | "active" | "claimed" | "expired";
  receivers: string[] | null;
  createdAt: string;
  isClaimed: boolean;
  image?: string;
}