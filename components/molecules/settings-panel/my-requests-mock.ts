export interface FoodRequest {
  id: string;
  title: string;
  description: string;
  requestedFoodTypes: string[];
  servings: string;
  urgency: "low" | "medium" | "high";
  location: string;
  status: "open" | "fulfilled" | "cancelled";
  createdAt: string;
  neededBy: string;
  tags: string[];
  donor?: {
    name: string;
    avatar: string;
  };
  familySize?: number;
  dietaryRestrictions?: string[];
}

export const mockRequests: FoodRequest[] = [
  {
    id: "1",
    title: "Meals for Family of 5",
    description:
      "Looking for nutritious meals for my family. Any help would be greatly appreciated during this difficult time.",
    requestedFoodTypes: ["Main Course", "Vegetables", "Fruits"],
    servings: "5 people",
    urgency: "high",
    location: "Eastside Community, Block A",
    status: "fulfilled",
    createdAt: "2024-01-12T09:15:00Z",
    neededBy: "2024-01-14T18:00:00Z",
    tags: ["Family", "Nutritious", "Multiple Meals"],
    familySize: 5,
    dietaryRestrictions: ["No shellfish"],
    donor: {
      name: "Mike Chen",
      avatar: "/avatars/mike.jpg",
    },
  },
  {
    id: "2",
    title: "Fresh Produce for Elderly",
    description:
      "Seeking fresh fruits and vegetables for elderly residents in our care facility.",
    requestedFoodTypes: ["Fruits", "Vegetables", "Dairy"],
    servings: "20 people",
    urgency: "medium",
    location: "Sunset Senior Care Center",
    status: "open",
    createdAt: "2024-01-15T14:30:00Z",
    neededBy: "2024-01-18T12:00:00Z",
    tags: ["Elderly Care", "Fresh Produce", "Healthcare"],
    familySize: 20,
    dietaryRestrictions: ["Low sodium", "Diabetic friendly"],
  },
  {
    id: "3",
    title: "Emergency Food Support",
    description:
      "Recently lost job and need temporary food assistance for my children and myself.",
    requestedFoodTypes: ["Any non-perishable", "Snacks", "Breakfast items"],
    servings: "3 people",
    urgency: "high",
    location: "Westgate Apartments, Unit 205",
    status: "open",
    createdAt: "2024-01-16T11:45:00Z",
    neededBy: "2024-01-17T20:00:00Z",
    tags: ["Emergency", "Children", "Non-perishable"],
    familySize: 3,
    dietaryRestrictions: ["Nut allergies"],
  },
  {
    id: "4",
    title: "Community Event Catering",
    description:
      "Organizing a community gathering for homeless individuals. Any food donations welcome.",
    requestedFoodTypes: ["Main Course", "Snacks", "Beverages"],
    servings: "50+ people",
    urgency: "low",
    location: "Central Park Community Pavilion",
    status: "cancelled",
    createdAt: "2024-01-08T16:20:00Z",
    neededBy: "2024-01-20T17:00:00Z",
    tags: ["Community Event", "Large Group", "Homeless Support"],
    familySize: 50,
  },
  {
    id: "5",
    title: "Student Meal Support",
    description:
      "College student struggling with food costs. Looking for simple, healthy meals.",
    requestedFoodTypes: ["Quick meals", "Snacks", "Beverages"],
    servings: "1 person",
    urgency: "low",
    location: "University District, Pine St",
    status: "open",
    createdAt: "2024-01-14T19:10:00Z",
    neededBy: "2024-01-25T23:59:00Z",
    tags: ["Student", "Quick meals", "Budget-friendly"],
    familySize: 1,
    dietaryRestrictions: ["Vegetarian preferred"],
  },
];
