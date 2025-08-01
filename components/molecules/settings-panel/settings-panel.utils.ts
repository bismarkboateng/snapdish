import { User, Banana, GitPullRequest } from "lucide-react";

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
 