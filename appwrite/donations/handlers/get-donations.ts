import { NextResponse } from "next/server";
import { handleAppwriteError } from "@/appwrite/auth/auth-handlers";
import { databases } from "@/appwrite/config";
import { COLLECTIONS, DATABASE_ID } from "@/appwrite/const";

export async function getAllDonationsHandler(): Promise<NextResponse> {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.DONATIONS
    );
    return NextResponse.json(
      {
        success: true,
        data: response,
      },
      { status: 200 }
    );
  } catch (error) {
    return handleAppwriteError(error);
  }
}
