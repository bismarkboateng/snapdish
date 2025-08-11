import { useQuery } from "@tanstack/react-query";
import { StatCardData } from "../types";
import { getDashboardSummary } from "../services/get-dashboard-summary";

export const useGetDashboardSummary = () => {
  return useQuery<StatCardData[], Error>({
    queryKey: ["dashboardSummary"],
    queryFn: getDashboardSummary,
  });
};
