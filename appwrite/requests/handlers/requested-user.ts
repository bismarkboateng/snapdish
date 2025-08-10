import { databases } from "@/appwrite/config";
import { Query } from "node-appwrite";
import { handleAppwriteError } from "@/appwrite/auth/auth-handlers";
import { NextResponse } from "next/server";
import { COLLECTIONS, DATABASE_ID } from "@/appwrite/const";

export async function getRequestedUsersDetailsHandler(donationId: string) {
  try {
    if (!donationId) {
      return NextResponse.json(
        { error: "Donation ID is required" },
        { status: 400 }
      );
    }

    const donation = await databases.getDocument(
      DATABASE_ID,
      COLLECTIONS.DONATIONS,
      donationId
    );

    if (!donation || !donation.receivers || donation.receivers.length === 0) {
      return NextResponse.json(
        { error: "No receivers found for this donation" },
        { status: 404 }
      );
    }

    const usersResult = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.USERS,
      [Query.equal("id", donation.receivers)]
    );

    const users = usersResult.documents.map((user) => ({
      id: user.id,
      fullName: user.fullName,
      email: user.email,
    }));

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return handleAppwriteError(error);
  }
}
