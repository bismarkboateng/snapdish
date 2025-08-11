import { apiRoutes } from "@/lib/api/api-routes";
import { http } from "@/lib/api/api-http-client";
import { StatCardData, DashboardSummaryResponse } from "../types";

export const getDashboardSummary = async (): Promise<StatCardData[]> => {
  try {
    const result = await http.get<DashboardSummaryResponse>(
      apiRoutes.dashboard.cardsSummary
    );

    if ("data" in result && Array.isArray(result.data)) {
      return result.data;
    }
    return Promise.reject(new Error(result.message ?? "Failed to fetch dashboard summary"));
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unexpected error occurred while fetching dashboard summary");
  }
};