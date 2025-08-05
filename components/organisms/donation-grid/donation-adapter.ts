import { Donation } from "@/components/molecules/settings-panel/my-donations-mock";
import { Models } from "node-appwrite";
import { DonationDocument } from "./donation-grid.types";

export function transformAppwriteDonation(doc: Models.Document): Donation {
  const donationDoc = doc as DonationDocument;

  const mapStatus = (apiStatus: string): "active" | "claimed" | "expired" => {
    switch (apiStatus) {
      case "available":
        return "active";
      case "claimed":
        return "claimed";
      case "expired":
        return "expired";
      default:
        return "active";
    }
  };

  return {
    id: donationDoc.$id,
    title: donationDoc.title,
    description: donationDoc.description,
    foodType: donationDoc.foodType,
    quantity: donationDoc.quantity,
    location: donationDoc.location,
    status: mapStatus(donationDoc.status || "available"),
    createdAt: donationDoc.$createdAt,
    expiresAt: donationDoc.expiresAt,
    availablePickupTimes: donationDoc.availablePickupTimes,
    contactMethod: donationDoc.contactMethod,
    email: donationDoc.email,
    phone: donationDoc.phone,
    dietaryInfo: donationDoc.dietaryInfo ?? [],
    specialInstructions: donationDoc.specialInstructions,
    donorId: donationDoc.donorId,
    receivers: donationDoc.receivers ?? null,
    isClaimed: donationDoc.isClaimed ?? false,
    image: donationDoc.image,
  };
}

export function transformAppwriteDonations(
  docs: Models.Document[]
): Donation[] {
  return docs.map(transformAppwriteDonation);
}
