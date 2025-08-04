import { mockDonations } from "@/components/molecules/settings-panel/my-donations-mock";

export const getStatusCount = (status: string) => {
  if (status === "all") return mockDonations.length;
  return mockDonations.filter((d) => d.status === status).length;
};
