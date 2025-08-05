import { Models } from "node-appwrite";
import {
  Donation,
  MyDonationDocument,
  RawDonation,
} from "./my-donations.types";
import { mapStatus } from "./my-donations-utils";

export const adaptDonation = (donation: RawDonation): Donation => {
  return {
    id: donation?.$id ?? "",
    title: donation.title ?? "",
    description: donation.description ?? "",
    foodType: donation.foodType ?? "",
    quantity: donation.quantity ?? "",
    location: donation.location ?? "",
    status: donation.status ?? "active",
    createdAt: donation.createdAt ?? donation.$createdAt ?? "",
    expiresAt: donation.expiresAt ?? "",
    availablePickupTimes: donation.availablePickupTimes ?? "",
    contactMethod: donation.contactMethod ?? "phone",
    phone: donation.phone ?? "",
    email: donation.email ?? "",
    dietaryInfo: donation.dietaryInfo ?? [],
    specialInstructions: donation.specialInstructions ?? "",
    donorId: donation.donorId ?? "",
    receivers: donation.receivers ?? null,
    isClaimed: donation.isClaimed ?? false,
  };
};

export const adaptDonations = (donations: RawDonation[]): Donation[] => {
  return donations.map(adaptDonation);
};

export const adaptAppwriteDonation = (doc: Models.Document): Donation => {
  const donationDoc = doc as MyDonationDocument;

  const adaptedDonation = {
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
    phone: donationDoc.phone,
    email: donationDoc.email,
    dietaryInfo: donationDoc.dietaryInfo ?? [],
    specialInstructions: donationDoc.specialInstructions,
    donorId: donationDoc.donorId,
    receivers: donationDoc.receivers ?? null,
    isClaimed: donationDoc.isClaimed ?? false,
  };

  return adaptedDonation;
};

export const adaptAppwriteDonations = (docs: Models.Document[]): Donation[] => {
  const result = docs.map(adaptAppwriteDonation);
  return result;
};
