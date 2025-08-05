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
  tags?: string[];
  recipient?: {
    name: string;
    avatar: string;
  };
}

export const mockDonations: Donation[] = [
  {
    id: "1",
    title: "Fresh Homemade Lasagna",
    description:
      "Delicious vegetarian lasagna made with fresh ingredients. Perfect for 4-6 people.",
    foodType: "Main Course",
    quantity: "6 servings",
    location: "Downtown Community Center",
    status: "claimed",
    createdAt: "2024-01-15T10:30:00Z",
    expiresAt: "2024-01-16T18:00:00Z",
    availablePickupTimes: "2 PM - 6 PM",
    contactMethod: "email",
    email: "donor1@example.com",
    dietaryInfo: ["Vegetarian", "Contains Dairy"],
    specialInstructions: "Please bring your own container.",
    donorId: "donor-1",
    receivers: null,
    isClaimed: true,
    
  },
  {
    id: "2",
    title: "Surplus Bread from Bakery",
    description:
      "Fresh bread from our bakery. Various types including sourdough and whole wheat.",
    foodType: "Bakery Items",
    quantity: "12 loaves",
    location: "Sunrise Bakery, Main St",
    status: "active",
    createdAt: "2024-01-14T08:00:00Z",
    expiresAt: "2024-01-15T20:00:00Z",
    availablePickupTimes: "8 AM - 6 PM",
    contactMethod: "phone",
    phone: "+233501234567",
    dietaryInfo: ["Contains Gluten"],
    specialInstructions: "Pickup from back entrance.",
    donorId: "donor-2",
    receivers: null,
    isClaimed: false,
   
  },
  {
    id: "3",
    title: "Organic Fruit Salad",
    description: "Freshly prepared fruit salad with seasonal organic fruits.",
    foodType: "Fresh Fruits",
    quantity: "8 portions",
    location: "Green Valley Market",
    status: "expired",
    createdAt: "2024-01-10T12:00:00Z",
    expiresAt: "2024-01-11T15:00:00Z",
    availablePickupTimes: "12 PM - 6 PM",
    contactMethod: "both",
    phone: "+233501234568",
    email: "greenvalleys@example.com",
    dietaryInfo: ["Vegan", "Gluten Free"],
    specialInstructions: "Keep refrigerated.",
    donorId: "donor-3",
    receivers: null,
    isClaimed: false,
  },
  {
    id: "4",
    title: "Restaurant Leftover Curry",
    description:
      "Authentic Indian curry with rice. Made fresh today at our restaurant.",
    foodType: "Main Course",
    quantity: "10 servings",
    location: "Spice Garden Restaurant",
    status: "active",
    createdAt: "2024-01-16T16:30:00Z",
    expiresAt: "2024-01-17T12:00:00Z",
    availablePickupTimes: "5 PM - 9 PM",
    contactMethod: "email",
    email: "spicegarden@example.com",
    dietaryInfo: ["Contains Dairy", "Spicy"],
    specialInstructions: "Please bring large containers.",
    donorId: "donor-4",
    receivers: null,
    isClaimed: false,
  },
];
