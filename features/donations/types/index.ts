import { DonationFormData } from "@/components/organisms/donate-food/donate-food.types";
import { UseFormReturn } from "react-hook-form";
import { Models } from "node-appwrite";

export interface CreateDonationDTO {
  title: string;
  description: string;
  foodType: string;
  quantity: string;
  location: string;
  expiresAt: string;
  availablePickupTimes: string;
  contactMethod: "phone" | "email";
  phone?: string;
  email?: string;
  dietaryInfo: string[];
  specialInstructions?: string;
}

export interface DonationResponse extends CreateDonationDTO {
  donorId: string;
  createdAt: string;
  $id: string;
  $permissions: string[];
  $createdAt: string;
  $updatedAt: string;
  $sequence: number;
  $databaseId: string;
  $collectionId: string;
}

export interface AppwriteDonationsResponse {
  total: number;
  documents: Models.Document[];
}

export interface UseCreateDonationProps {
    form: UseFormReturn<DonationFormData>;
    setCurrentStep: (step: number) => void;
    setSubmitSuccess: (success: boolean) => void;
    setIsSubmitting: (isSubmitting: boolean) => void;
}