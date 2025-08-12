import {
  getAuthenticatedUser,
  handleAppwriteError,
} from "@/appwrite/auth/auth-handlers";
import { databases } from "@/appwrite/config";
import { Query } from "node-appwrite";
import { NextRequest, NextResponse } from "next/server";
import { COLLECTIONS, DATABASE_ID } from "@/appwrite/const";

export async function getCurrentUserHandler(
  request: NextRequest
): Promise<NextResponse> {
  try {
    const user = await getAuthenticatedUser();

    const userQuery = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.USERS,
      [Query.equal("id", user.$id)]
    );

    if (userQuery.total === 0) {
      return NextResponse.json(
        { status: "error", message: "User not found" },
        { status: 404 }
      );
    }

    const userData = userQuery.documents[0];

    return NextResponse.json({
      status: "success",
      data: userData,
    });
  } catch (error) {
    handleAppwriteError(error);
    return NextResponse.json(
      { status: "error", message: "Failed to get user data" },
      { status: 500 }
    );
  }
}
