import { MapPin, Users, Package, Heart } from "lucide-react";
import { RequestFormData } from "./request-food.types";

export const foodTypes = [
  "Prepared Meals",
  "Fresh Vegetables",
  "Fresh Fruits",
  "Dairy Products",
  "Bread & Bakery",
  "Canned Goods",
  "Packaged Foods",
  "Beverages",
  "Baby Food",
  "Any Food",
];

export const dietaryRestrictions = [
  "Vegetarian",
  "Vegan",
  "Halal",
  "Kosher",
  "Gluten-Free",
  "Dairy-Free",
  "Nut-Free",
  "Low Sodium",
  "Diabetic-Friendly",
];

export const steps = [
  {
    title: "Request Details",
    description: "Tell us what food you need",
    icon: Package,
  },
  {
    title: "Location & Timeline",
    description: "Where and when do you need it",
    icon: MapPin,
  },
  {
    title: "Contact Information",
    description: "How should donors reach you",
    icon: Users,
  },
  {
    title: "Additional Information",
    description: "Any special requirements or notes",
    icon: Heart,
  },
];

export const getUrgencyColor = (urgency: string) => {
  switch (urgency) {
    case "high":
      return "text-[var(--color-status-error)]";
    case "medium":
      return "text-[var(--color-status-warning)]";
    case "low":
      return "text-[var(--color-status-info)]";
    default:
      return "text-[#6e6e6e]";
  }
};

export const getFieldsForStep = (step: number): (keyof RequestFormData)[] => {
  switch (step) {
    case 0:
      return [
        "title",
        "description",
        "requestedFoodTypes",
        "servings",
        "urgency",
      ];
    case 1:
      return ["location", "neededBy"];
    case 2:
      return ["contactMethod", "phone", "email"];
    case 3:
      return ["additionalNotes"];
    default:
      return [];
  }
};
