import { NextResponse } from "next/server";
import { ID } from "node-appwrite";
import { account } from "@/appwrite/config";
import { validateRegistrationInput } from "@/appwrite/auth/auth-validations";

import { handleAppwriteError } from "../auth-handlers";
import { createUserHandler } from "@/appwrite/users/handlers/create-user";

export async function registerUserHandler(
  request: Request
): Promise<NextResponse> {
  try {
    const body = await request.json();

    const result = validateRegistrationInput(body);

    if (!result.success) {
      const formattedErrors = result.error.format();
      return NextResponse.json(
        { error: "Validation failed", details: formattedErrors },
        { status: 400 }
      );
    }

    const { fullName, email, password } = result.data;

    const user = await account.create(ID.unique(), email, password, fullName);

    await createUserHandler({
      id: user.$id,
      fullName: user.name,
      email: user.email,
      phone: "",
    });

    return NextResponse.json(
      {
        message: "Registration successful",
        user: {
          id: user.$id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return handleAppwriteError(error);
  }
}
