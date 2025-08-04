export interface Activity {
  id: string;
  type: "donation" | "request" | "fulfilled" | "expired";
  title: string;
  description: string;
  user: {
    name: string;
    avatar?: string;
  };
  location: string;
  timestamp: string;
  foodType?: string;
}

export interface RecentActivityProps {
  activities: Activity[];
  className?: string;
}
