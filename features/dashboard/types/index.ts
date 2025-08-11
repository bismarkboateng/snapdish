export interface StatCardData {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  iconName: string;
  description: string;
}

export interface DashboardSummaryResponse {
  status: "success";
  data: StatCardData[];
}
