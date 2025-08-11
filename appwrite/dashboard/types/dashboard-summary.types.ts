
export type StatChangeType = "positive" | "negative" | "neutral";

export interface StatCardData {
  title: string;
  value: string;
  change: string;
  changeType: StatChangeType;
  iconName: string;
  description: string;
}

export interface DashboardSummaryResponse {
  status: "success" | "error";
  data: StatCardData[];
  message?: string;
}

export interface Donation {
  $id: string;
  title: string;
  description: string;
  foodType: string;
  quantity: string;
  location: string;
  expiresAt: string;
  availablePickupTimes: string;
  contactMethod: string;
  phone?: string;
  email?: string;
  dietaryInfo?: string[];
  specialInstructions?: string;
  donorId: string;
  createdAt: string;
  status: string;
  receivers?: string[];
  isClaimed: boolean;
  receivedBy?: string;
}

export interface DonationStats {
  total: number;
  active: number;
  meals: number;
}
