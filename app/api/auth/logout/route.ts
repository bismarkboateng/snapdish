import { NextRequest } from "next/server";
import { logoutHandler } from "@/appwrite/auth/handlers/logout-handler";

export async function POST(request: NextRequest) {
  return await logoutHandler(request);
}
