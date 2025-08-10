import { approveDonationRequestHandler } from "@/appwrite/requests/handlers/approve-request";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  return await approveDonationRequestHandler(request);
}
