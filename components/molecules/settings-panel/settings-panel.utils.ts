import { User, Banana, GitPullRequest } from "lucide-react";
import { Donation } from "./my-donations-mock";

export const menuItems = [
  {
    href: "/dashboard/settings/profile",
    label: "My Profile",
    icon: User,
  },
  {
    href: "/dashboard/settings/my-donations",
    label: "My Donations",
    icon: Banana,
  },
  {
    href: "/dashboard/settings/my-requests",
    label: "My Requests",
    icon: GitPullRequest,
  },
];

export const getStatusColor = (status: Donation["status"]) => {
    switch (status) {
      case "active":
        return "bg-[var(--color-status-success)]/10 text-[var(--color-status-success)] border-[var(--color-status-success)]/20";
      case "claimed":
        return "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/20";
      case "expired":
        return "bg-[var(--color-text-muted)]/10 text-[var(--color-text-muted)] border-[var(--color-text-muted)]/20";
      case "requested":
        return "bg-[var(--color-status-warning)]/10 text-[var(--color-status-warning)] border-[var(--color-status-warning)]/20";
      default:
        return "bg-[var(--color-background)] text-[var(--color-text-muted)] border-[var(--color-border)]";
    }
  };

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
