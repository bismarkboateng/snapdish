import { createDonationHandler } from "@/appwrite/donations/handlers/create-donation";

export async function POST(request: Request) {
  return await createDonationHandler(request);
}
