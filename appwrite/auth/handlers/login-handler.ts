import { NextResponse } from "next/server";
import { account } from "@/appwrite/config";
import { loginInputSchema } from "../auth-schemas";
import { handleAppwriteError } from "../auth-handlers";

export async function loginUserHandler(
  request: Request
): Promise<NextResponse> {
  try {
    const body = await request.json();

    const result = loginInputSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { email, password } = result.data;

    const session = await account.createEmailPasswordSession(email, password);

    const response = NextResponse.json(
      { message: "Login successful", userId: session.userId },
      { status: 200 }
    );

    response.headers.set(
      "Set-Cookie",
      `a_session_${process.env.APPWRITE_PROJECT_ID}=${session.secret}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`
    );

    return response;
  } catch (error) {
    return handleAppwriteError(error);
  }
}
