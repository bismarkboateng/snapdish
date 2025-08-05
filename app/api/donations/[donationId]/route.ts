import { NextResponse } from "next/server";
import { getDonationByIdHandler } from "@/appwrite/donations/handlers/get-donation-by-id";

export async function GET(
  request: Request,
  context: { params: Promise<{ donationId: string }> }
): Promise<NextResponse> {
  const { donationId } = await context.params;
  return await getDonationByIdHandler(donationId);
}
