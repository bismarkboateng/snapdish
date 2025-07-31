import { registerUserHandler } from "@/appwrite/auth/handlers/register-handler";

export async function POST(request: Request) {
  return await registerUserHandler(request);
}
