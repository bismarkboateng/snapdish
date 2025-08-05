import { NextRequest, NextResponse } from "next/server";
import {
  getAuthenticatedUser,
  handleAppwriteError,
} from "@/appwrite/auth/auth-handlers";
import { databases } from "@/appwrite/config";
import { COLLECTIONS, DATABASE_ID } from "@/appwrite/const";

import { Query } from "node-appwrite";

export async function getMyDonationsHandler(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser();
    const userId = user.$id;

    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.DONATIONS,
      [Query.equal("donorId", userId)]
    );

    return NextResponse.json(
      {
        success: true,
        data: response.documents,
      },
      { status: 200 }
    );
  } catch (error) {
    return handleAppwriteError(error);
  }
}
