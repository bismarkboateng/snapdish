import { updateNewUser } from "@/appwrite/users/handlers/update-user";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  return await updateNewUser(request)
}