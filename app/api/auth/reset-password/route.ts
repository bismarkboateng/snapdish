import { resetPasswordHandler } from "@/appwrite/auth/handlers/reset-password-handler";

export async function POST(request: Request) {
  return await resetPasswordHandler(request);
}
