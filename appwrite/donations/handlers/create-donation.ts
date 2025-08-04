import { NextResponse } from "next/server";
import { donationSchema } from "../schemas";
import {
  getAuthenticatedUser,
  handleAppwriteError,
} from "@/appwrite/auth/auth-handlers";
import { databases, ID } from "@/appwrite/config";
import { COLLECTIONS, DATABASE_ID } from "@/appwrite/const";

export async function createDonationHandler(
  request: Request
): Promise<NextResponse> {
  try {
    const body = await request.json();
    const result = donationSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const authenticatedUser = await getAuthenticatedUser();
    const userId = authenticatedUser.$id;

    const donation = {
      ...result.data,
      donorId: userId,
      createdAt: new Date().toISOString(),
    };

    const response = await databases.createDocument(
      DATABASE_ID,
      COLLECTIONS.DONATIONS,
      ID.unique(),
      donation
    );

    return NextResponse.json(
      {
        success: true,
        data: response,
      },
      { status: 201 }
    );
  } catch (error) {
    return handleAppwriteError(error);
  }
}
