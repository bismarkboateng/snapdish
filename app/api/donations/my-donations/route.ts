import { getMyDonationsHandler } from "@/appwrite/donations/handlers/get-my-donations";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  return await getMyDonationsHandler(request);
}
