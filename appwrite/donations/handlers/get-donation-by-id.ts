import { NextResponse } from "next/server";
import { handleAppwriteError } from "@/appwrite/auth/auth-handlers";
import { databases } from "@/appwrite/config";
import { COLLECTIONS, DATABASE_ID } from "@/appwrite/const";

export async function getDonationByIdHandler(
  donationId: string
): Promise<NextResponse> {
  try {
    const donation = await databases.getDocument(
      DATABASE_ID,
      COLLECTIONS.DONATIONS,
      donationId
    );

    return NextResponse.json(
      {
        success: true,
        data: donation,
      },
      { status: 200 }
    );
  } catch (error) {
    return handleAppwriteError(error);
  }
}
