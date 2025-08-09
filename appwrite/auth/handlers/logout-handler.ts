import { Client, Account } from "node-appwrite";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID } from "@/appwrite/const";

export async function logoutHandler(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(
      `a_session_${process.env.APPWRITE_PROJECT_ID}`
    )?.value;

    if (!token) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    const client = new Client()
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID)
      .setSession(token);

    const account = new Account(client);

    await account.deleteSession("current");

    const response = NextResponse.json(
      { message: "Logout successful" },
      { status: 200 }
    );
    response.headers.set(
      "Set-Cookie",
      `a_session_${process.env.APPWRITE_PROJECT_ID}=; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=Thu, 01 Jan 1970 00:00:00 GMT`
    );

    return response;
  } catch (error) {
    console.error("Logout failed:", error);
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}
