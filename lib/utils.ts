import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const testimonials = [
  {
    quote: "SnapDish helped us donate leftover meals to families in need.",
    name: "Kwame Mensah",
    role: "Local Chef",
  },
  {
    quote: "I love how simple it is to support food drives with SnapDish.",
    name: "Ama Serwaa",
    role: "Donor",
  },
  {
    quote: "This app connects people through food and kindness.",
    name: "Yao Akoto",
    role: "Community Organizer",
  },
  {
    quote: "I hosted a food charity using SnapDish. Incredible experience!",
    name: "Nana Adjei",
    role: "Volunteer",
  },
  {
    quote: "SnapDish makes giving back feel personal and powerful.",
    name: "Esi Owusu",
    role: "NGO Worker",
  },
];
