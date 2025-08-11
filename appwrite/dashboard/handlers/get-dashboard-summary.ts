import { NextRequest, NextResponse } from "next/server";
import {
  fetchDonations,
  filterDonationsByMonth,
  calcChange,
  getPopularFoodTypes,
  calculateDonationStats,
  getDateRanges,
} from "../lib/dashboard-summary-utils";
import {
  StatCardData,
  DashboardSummaryResponse,
} from "../types/dashboard-summary.types";
import { handleAppwriteError } from "@/appwrite/auth/auth-handlers";

export async function getDashboardSummaryHandler(request: NextRequest) {
  try {
    const { currentMonthStart, previousMonthStart, previousMonthEnd } =
      getDateRanges();

    const donations = await fetchDonations();
    const currentMonthDonations = filterDonationsByMonth(
      donations,
      currentMonthStart
    );
    const previousMonthDonations = filterDonationsByMonth(
      donations,
      previousMonthStart,
      previousMonthEnd
    );

    const currentStats = calculateDonationStats(currentMonthDonations);
    const previousStats = calculateDonationStats(previousMonthDonations);
    const popularFoodTypes = getPopularFoodTypes(currentMonthDonations);

    const statsData: StatCardData[] = [
      {
        title: "Total Donations",
        value: currentStats.total.toLocaleString(),
        ...calcChange(currentStats.total, previousStats.total),
        iconName: "Heart",
        description: "Food items donated this month",
      },
      {
        title: "Active Requests",
        value: currentStats.active.toLocaleString(),
        ...calcChange(currentStats.active, previousStats.active),
        iconName: "Users",
        description: "Current food requests pending",
      },
      {
        title: "Meals Served",
        value: currentStats.meals.toLocaleString(),
        ...calcChange(currentStats.meals, previousStats.meals),
        iconName: "Package",
        description: "Total meals provided to families",
      },
      {
        title: "Popular Food Types",
        value: popularFoodTypes.slice(0, 3).join(", "),
        change: "",
        changeType: "positive",
        iconName: "Clock",
        description: "Most donated food categories",
      },
    ];

    const response: DashboardSummaryResponse = {
      status: "success",
      data: statsData,
    };
    return NextResponse.json(response);
  } catch (error) {
    handleAppwriteError(error);
  }
}
