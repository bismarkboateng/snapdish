import { getMyRequestsHandler } from "@/appwrite/donations/handlers/get-my-request";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  return getMyRequestsHandler(request);
}
