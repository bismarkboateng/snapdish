import { handleAppwriteError } from "@/appwrite/auth/auth-handlers";
import { NextRequest, NextResponse } from "next/server";
import { databases } from "@/appwrite/config";
import { COLLECTIONS, DATABASE_ID } from "@/appwrite/const";

export async function approveDonationRequestHandler(request: NextRequest) {
  try {
    const { userId, donationId } = await request.json();

    if (!userId || !donationId) {
      return NextResponse.json(
        { message: "userId and donationId are required" },
        { status: 400 }
      );
    }

    const donation = await databases.getDocument(
      DATABASE_ID,
      COLLECTIONS.DONATIONS,
      donationId
    );

    if (!donation) {
      return NextResponse.json(
        { message: "Donation not found" },
        { status: 404 }
      );
    }

    const updatedDonation = await databases.updateDocument(
      DATABASE_ID,
      COLLECTIONS.DONATIONS,
      donationId,
      {
        receivedBy: userId,
        isClaimed: true,
        status: "claimed",
      }
    );

    return NextResponse.json(
      { message: "Donation request approved", data: updatedDonation },
      { status: 200 }
    );
  } catch (error) {
    return handleAppwriteError(error);
  }
}
