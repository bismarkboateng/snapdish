import { Donation } from "@/components/molecules/settings-panel/my-donations-mock";

export const filterDonations = (
  donations: Donation[],
  searchTerm: string,
  filterType: string
): Donation[] => {
  let filtered = donations;

  if (searchTerm.trim()) {
    const search = searchTerm.toLowerCase();
    filtered = filtered.filter(
      (donation) =>
        donation.title.toLowerCase().includes(search) ||
        donation.description.toLowerCase().includes(search) ||
        donation.foodType.toLowerCase().includes(search) ||
        donation.location.toLowerCase().includes(search) ||
        donation.tags?.some((tag) => tag.toLowerCase().includes(search))
    );
  }

  if (filterType && filterType !== "all") {
    filtered = filtered.filter((donation) => donation.foodType === filterType);
  }

  return filtered;
};

export const getStatusColor = (status: Donation["status"]): string => {
  const statusColors = {
    active: "text-[#3ec70b] bg-[#3ec70b]/10",
    claimed: "text-[#ffb84c] bg-[#ffb84c]/10",
    expired: "text-[#6e6e6e] bg-[#6e6e6e]/10",
  };

  return statusColors[status] || statusColors.active;
};

export const getStatusLabel = (status: Donation["status"]): string => {
  const statusLabels = {
    active: "Available",
    claimed: "Claimed",
    expired: "Expired",
  };

  return statusLabels[status] || "Available";
};

export const formatExpiryDate = (expiresAt: string): string => {
  const date = new Date(expiresAt);
  const now = new Date();
  const diffHours = Math.ceil(
    (date.getTime() - now.getTime()) / (1000 * 60 * 60)
  );

  if (diffHours < 24) {
    return `Expires in ${diffHours}h`;
  } else {
    const diffDays = Math.ceil(diffHours / 24);
    return `Expires in ${diffDays}d`;
  }
};

export const isExpiringSoon = (expiresAt: string): boolean => {
  const date = new Date(expiresAt);
  const now = new Date();
  const diffHours = (date.getTime() - now.getTime()) / (1000 * 60 * 60);

  return diffHours <= 24 && diffHours > 0;
};
