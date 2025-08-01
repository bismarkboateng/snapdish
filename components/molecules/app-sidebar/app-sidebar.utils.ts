import { Calendar, Home, Inbox, Settings } from "lucide-react";

export const items = [
  {
    title: "Home",
    route: "/dashboard",
    icon: Home,
  },
  {
    title: "Donate Food",
    route: "#",
    icon: Inbox,
  },
  {
    title: "Request Food",
    route: "#",
    icon: Calendar,
  },
  {
    title: "Settings",
    route: "/dashboard/settings",
    icon: Settings,
  },
];
