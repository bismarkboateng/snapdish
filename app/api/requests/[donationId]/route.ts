import { NextRequest } from "next/server";
import { getRequestedUsersDetailsHandler } from "@/appwrite/requests/handlers/requested-user";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ donationId: string }> }
) {
  const { donationId } = await context.params;
  return await getRequestedUsersDetailsHandler(donationId);
}
