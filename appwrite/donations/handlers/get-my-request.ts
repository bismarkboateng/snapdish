import {
  getAuthenticatedUser,
  handleAppwriteError,
} from "@/appwrite/auth/auth-handlers";
import { databases } from "@/appwrite/config";
import { COLLECTIONS, DATABASE_ID } from "@/appwrite/const";
import { NextRequest, NextResponse } from "next/server";

import { Query } from "node-appwrite";

export async function getMyRequestsHandler(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser();
    const userId = user.$id;

    const myRequests = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.DONATIONS,
      [Query.contains("receivers", userId)]
    );

    return NextResponse.json(
      {
        success: true,
        data: myRequests.documents,
      },
      { status: 200 }
    );
  } catch (error) {
    return handleAppwriteError(error);
  }
}
