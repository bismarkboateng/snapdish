import { requestDonationHandler } from "@/appwrite/donations/handlers/request-donation";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
    return await requestDonationHandler(request)
}