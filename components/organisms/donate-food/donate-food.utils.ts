import { MapPin, Users, Package, Heart } from "lucide-react";
import { DonationFormData } from "./donate-food.types";

export const foodTypes = [
  "Fresh Vegetables",
  "Fresh Fruits",
  "Dairy Products",
  "Bread & Bakery",
  "Canned Goods",
  "Packaged Foods",
  "Beverages",
  "Other",
];

export const availableTags = [
  "Vegetarian",
  "Vegan",
  "Halal",
  "Kosher",
  "Gluten-Free",
  "Dairy-Free",
  "Nut-Free",
  "Fresh",
  "Cooked",
  "Raw",
  "Frozen",
  "Organic",
];

export const dietaryOptions = [
  "Contains Nuts",
  "Contains Dairy",
  "Contains Gluten",
  "Contains Eggs",
  "Contains Soy",
  "Spicy",
  "Low Sodium",
  "High Protein",
];

export const steps = [
  {
    title: "Food Details",
    description: "Tell us about the food you're donating",
    icon: Package,
  },
  {
    title: "Location & Timing",
    description: "Where and when can it be picked up",
    icon: MapPin,
  },
  {
    title: "Contact Information",
    description: "How should recipients contact you",
    icon: Users,
  },
  {
    title: "Additional Details",
    description: "Any special instructions or notes",
    icon: Heart,
  },
];

export const getFieldsForStep = (step: number): (keyof DonationFormData)[] => {
  switch (step) {
    case 0:
      return ["title", "description", "foodType", "quantity"];
    case 1:
      return ["location", "expiresAt", "availablePickupTimes"];
    case 2:
      return ["contactMethod", "phone", "email"];
    case 3:
      return ["specialInstructions"];
    default:
      return [];
  }
};
