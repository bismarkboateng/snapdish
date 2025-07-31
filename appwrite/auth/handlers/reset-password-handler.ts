import { NextResponse } from "next/server";
import { account } from "@/appwrite/config";
import { handleAppwriteError } from "../auth-handlers";
import { resetPasswordSchema } from "../auth-schemas";

export async function resetPasswordHandler(
  request: Request
): Promise<NextResponse> {
  try {
    const body = await request.json();
    const result = resetPasswordSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: "Validation failed", details: errors },
        { status: 400 }
      );
    }

    const { userId, secret, password } = result.data;

    await account.updateRecovery(userId, secret, password);

    return NextResponse.json(
      { message: "Password reset successful. Please log in." },
      { status: 200 }
    );
  } catch (error) {
    return handleAppwriteError(error);
  }
}
