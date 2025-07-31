import { NextResponse } from "next/server";
import { account } from "@/appwrite/config";
import { handleAppwriteError } from "../auth-handlers";
import { z } from "zod";
import { forgotPasswordSchema } from "../auth-schemas";

export async function forgotPasswordHandler(
  request: Request
): Promise<NextResponse> {
  try {
    const body = await request.json();

    const result = forgotPasswordSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: "Validation failed", details: errors },
        { status: 400 }
      );
    }

    const { email } = result.data;

    const appDomain = process.env.NEXT_PUBLIC_APP_DOMAIN!;
    const resetUrl = `${appDomain}/reset-password`;

    await account.createRecovery(email, resetUrl);

    return NextResponse.json(
      {
        message:
          "Password reset email sent successfully. Please check your inbox.",
      },
      { status: 200 }
    );
  } catch (error) {
    return handleAppwriteError(error);
  }
}
