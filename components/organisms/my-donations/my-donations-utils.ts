import { DonationStatus } from "./my-donations.types";


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
