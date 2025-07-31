import { forgotPasswordHandler } from "@/appwrite/auth/handlers/forgot-password-handler";

export async function POST(request: Request) {
  return await forgotPasswordHandler(request);
}
