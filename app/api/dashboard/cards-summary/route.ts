import { NextRequest } from "next/server";
import { getDashboardSummaryHandler } from "@/appwrite/dashboard/handlers/get-dashboard-summary";

export async function GET(request: NextRequest) {
  return await getDashboardSummaryHandler(request);
}
