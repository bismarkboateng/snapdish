import { getReviewsHandler } from "@/appwrite/forum/handlers/get-reviews";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return getReviewsHandler(request);
}
