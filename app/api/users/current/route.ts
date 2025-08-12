import { getCurrentUserHandler } from "@/appwrite/users/handlers/get-current-user";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return await getCurrentUserHandler(request);
}
