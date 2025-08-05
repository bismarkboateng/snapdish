import { mockDonations } from "@/components/molecules/settings-panel/my-donations-mock";
import { DonationStatus } from "./my-donations.types";

export const getStatusCount = (status: string) => {
  if (status === "all") return mockDonations.length;
  return mockDonations.filter((d) => d.status === status).length;
};

export const mapStatus = (apiStatus: string): DonationStatus => {
  switch (apiStatus) {
    case "available":
      return "active";
    case "claimed":
      return "claimed";
    case "expired":
      return "expired";
    case "requested":
      return "requested";
    default:
      return "active";
  }
};
