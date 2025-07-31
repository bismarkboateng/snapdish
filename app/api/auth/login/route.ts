import { loginUserHandler } from "@/appwrite/auth/handlers/login-handler";

export async function POST(request: Request) {
  return await loginUserHandler(request);
}
