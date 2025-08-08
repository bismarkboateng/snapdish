import {
  getAuthenticatedUser,
  handleAppwriteError,
} from "@/appwrite/auth/auth-handlers";
import { databases } from "@/appwrite/config";
import { Query } from "node-appwrite";
import { NextRequest, NextResponse } from "next/server";

import { COLLECTIONS, DATABASE_ID } from "@/appwrite/const";

export async function updateNewUser(
  request: NextRequest
): Promise<NextResponse> {
  try {
    const userData = await request.json();
    const user = await getAuthenticatedUser();

    const userQuery = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.USERS,
      [Query.equal("id", user.$id)]
    );

    if (userQuery.total === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const userDocId = userQuery.documents[0].$id;

    const updatedUser = await databases.updateDocument(
      DATABASE_ID,
      COLLECTIONS.USERS,
      userDocId,
      userData
    );

    return NextResponse.json(
      { message: "User updated successfully", data: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    handleAppwriteError(error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}
