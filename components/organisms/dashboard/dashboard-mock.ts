
export const recentActivities = [
  {
    id: "1",
    type: "donation" as const,
    title: "Fresh Vegetables Donated",
    description: "Sarah M. donated 15kg of fresh vegetables",
    user: { name: "Sarah Martinez" },
    location: "Downtown Community Center",
    timestamp: "2 hours ago",
    foodType: "Vegetables",
  },
  {
    id: "2",
    type: "fulfilled" as const,
    title: "Family Request Fulfilled",
    description: "Emergency food request for family of 4 completed",
    user: { name: "Mike Johnson" },
    location: "Riverside District",
    timestamp: "4 hours ago",
    foodType: "Prepared Meals",
  },
  {
    id: "3",
    type: "request" as const,
    title: "Urgent Food Request",
    description: "Single mother needs groceries for 2 children",
    user: { name: "Lisa Chen" },
    location: "Eastside Neighborhood",
    timestamp: "6 hours ago",
    foodType: "Groceries",
  },
  {
    id: "4",
    type: "donation" as const,
    title: "Restaurant Surplus",
    description: "Local restaurant donated 50 prepared meals",
    user: { name: "Green Leaf Bistro" },
    location: "Central District",
    timestamp: "8 hours ago",
    foodType: "Prepared Meals",
  },
  {
    id: "5",
    type: "expired" as const,
    title: "Request Expired",
    description: "Food request automatically closed after 7 days",
    user: { name: "System" },
    location: "North Valley",
    timestamp: "1 day ago",
    foodType: "Any Food",
  },
];

export const donationTrends = [
  { name: "Jan", value: 1200 },
  { name: "Feb", value: 1900 },
  { name: "Mar", value: 1600 },
  { name: "Apr", value: 2200 },
  { name: "May", value: 2800 },
  { name: "Jun", value: 2400 },
  { name: "Jul", value: 2847 },
];

export const foodTypesData = [
  { name: "Fresh Vegetables", value: 680, color: "#009379" },
  { name: "Prepared Meals", value: 520, color: "#3ec70b" },
  { name: "Dairy Products", value: 380, color: "#53b6ff" },
  { name: "Bread & Bakery", value: 290, color: "#fddf89" },
  { name: "Canned Goods", value: 240, color: "#ffb84c" },
  { name: "Others", value: 180, color: "#e5e7eb" },
];

export const urgencyLevels = [
  { name: "High", value: 45, color: "#e02e2e" },
  { name: "Medium", value: 89, color: "#ffb84c" },
  { name: "Low", value: 22, color: "#53b6ff" },
];