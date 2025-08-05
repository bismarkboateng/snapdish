import { NextRequest, NextResponse } from "next/server";
import {
  getAuthenticatedUser,
  handleAppwriteError,
} from "@/appwrite/auth/auth-handlers";
import { databases } from "@/appwrite/config";
import { COLLECTIONS, DATABASE_ID } from "@/appwrite/const";

import { DonationDocument } from "../types";

export async function requestDonationHandler(
  request: NextRequest
): Promise<NextResponse> {
  try {
    const { id } = await request.json();
    const user = await getAuthenticatedUser();
    const userId = user.$id;

    const doc = await databases.getDocument<DonationDocument>(
      DATABASE_ID,
      COLLECTIONS.DONATIONS,
      id
    );

    if (doc.donorId === userId) {
      return NextResponse.json(
        {
          success: false,
          message: "You cannot request your own donation.",
        },
        { status: 400 }
      );
    }

    const existing = Array.isArray(doc.receivers) ? doc.receivers : [];

    const updatedReceivers = existing.includes(userId)
      ? existing
      : [...existing, userId];

    await databases.updateDocument(DATABASE_ID, COLLECTIONS.DONATIONS, id, {
      receivers: updatedReceivers,
      status: "requested",
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          donatedItemId: id,
          userId,
          message: "Donation request successfully processed.",
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return handleAppwriteError(error);
  }
}
