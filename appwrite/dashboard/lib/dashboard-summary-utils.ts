import { databases } from "@/appwrite/config";
import { COLLECTIONS, DATABASE_ID } from "@/appwrite/const";
import { Donation, DonationStats } from "../types/dashboard-summary.types";

export async function fetchDonations(): Promise<Donation[]> {
  const donationsRes = await databases.listDocuments(
    DATABASE_ID,
    COLLECTIONS.DONATIONS
  );
  return donationsRes.documents as unknown as Donation[];
}

export function filterDonationsByMonth(donations: Donation[], start: Date, end?: Date): Donation[] {
  return donations.filter((d) => {
    const createdAt = new Date(d.createdAt);
    if (end) {
      return createdAt >= start && createdAt <= end;
    }
    return createdAt >= start;
  });
}

export function calcChange(current: number, prev: number) {
  if (prev === 0 && current > 0)
    return { change: "+100%", changeType: "positive" as const };
  if (prev === 0 && current === 0)
    return { change: "0%", changeType: "positive" as const };

  const diff = current - prev;
  const percent = ((diff / prev) * 100).toFixed(1);
  return {
    change: `${diff >= 0 ? "+" : ""}${percent}%`,
    changeType: diff >= 0 ? ("positive" as const) : ("negative" as const),
  };
}

export function getPopularFoodTypes(donations: Donation[]): string[] {
  const foodTypeCount: Record<string, number> = {};
  donations.forEach((d) => {
    if (d.foodType) {
      foodTypeCount[d.foodType] = (foodTypeCount[d.foodType] || 0) + 1;
    }
  });
  return Object.entries(foodTypeCount)
    .sort((a, b) => b[1] - a[1])
    .map(([type]) => type);
}

export function calculateDonationStats(donations: Donation[]): DonationStats {
  return {
    total: donations.length,
    active: donations.filter((d) => d.status === "active").length,
    meals: donations
      .filter((d) => d.status === "claimed" || d.isClaimed === true)
      .reduce((sum, d) => sum + (parseInt(d.quantity) || 0), 0),
  };
}

export function getDateRanges() {
  const now = new Date();
  return {
    currentMonthStart: new Date(now.getFullYear(), now.getMonth(), 1),
    previousMonthStart: new Date(now.getFullYear(), now.getMonth() - 1, 1),
    previousMonthEnd: new Date(now.getFullYear(), now.getMonth(), 0),
  };
}
