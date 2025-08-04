import { NextResponse } from "next/server";
import { isAppwriteException, mapAppwriteCodeToStatus } from "./utils";
import { cookies } from "next/headers";
import { Account, Client } from "node-appwrite";
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID } from "../const";

export function handleAppwriteError(error: unknown) {
  if (isAppwriteException(error)) {
    return NextResponse.json(
      { error: error.message },
      { status: mapAppwriteCodeToStatus(error.code) }
    );
  }

  return NextResponse.json({ error: "Internal server error" }, { status: 500 });
}

export const getAuthenticatedUser = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get(
    `a_session_${process.env.APPWRITE_PROJECT_ID}`
  )?.value;

  if (!token) {
    throw new Error("User not authenticated");
  }

  const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

  client.setSession(token);

  const account = new Account(client);
  return await account.get();
};
