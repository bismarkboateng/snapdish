import { Home, Heart, HandHeart, MessageSquare, Settings } from "lucide-react";

export const items = [
  {
    title: "Dashboard",
    route: "/dashboard",
    icon: Home,
  },
  {
    title: "Donate Food",
    route: "/dashboard/donate-food",
    icon: Heart,
  },
  {
    title: "Request Food",
    route: "/dashboard/request-food",
    icon: HandHeart,
  },
  {
    title: "Forum",
    route: "/dashboard/forum",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    route: "/dashboard/settings",
    icon: Settings,
  },
];
