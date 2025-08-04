export interface Donation {
  id: string;
  title: string;
  description: string;
  foodType: string;
  quantity: string;
  location: string;
  status: "active" | "claimed" | "expired";
  createdAt: string;
  expiresAt: string;
  image: string;
  tags: string[];
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
    image: "/food-images/lasagna.jpg",
    tags: ["Vegetarian", "Homemade", "Italian"],
    recipient: {
      name: "Sarah Johnson",
      avatar: "/avatars/sarah.jpg",
    },
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
    image: "/food-images/bread.jpg",
    tags: ["Fresh", "Bakery", "Multiple Types"],
  },
  {
    id: "3",
    title: "Organic Fruit Salad",
    description: "Freshly prepared fruit salad with seasonal organic fruits.",
    foodType: "Dessert/Snack",
    quantity: "8 portions",
    location: "Green Valley Market",
    status: "expired",
    createdAt: "2024-01-10T12:00:00Z",
    expiresAt: "2024-01-11T15:00:00Z",
    image: "/food-images/fruit-salad.jpg",
    tags: ["Organic", "Healthy", "Fresh"],
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
    image: "/food-images/curry.jpg",
    tags: ["Indian", "Spicy", "Restaurant Quality"],
  },
];
