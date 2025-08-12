import { createReviewHandler } from "@/appwrite/forum/handlers/create-review";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  return await createReviewHandler(request);
}
