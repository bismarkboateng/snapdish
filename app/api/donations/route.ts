import { getAllDonationsHandler } from "@/appwrite/donations/handlers/get-donations";

export async function GET() {
  return await getAllDonationsHandler();
}
