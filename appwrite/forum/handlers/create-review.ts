import {
  getAuthenticatedUser,
  handleAppwriteError,
} from "@/appwrite/auth/auth-handlers";
import { databases, ID } from "@/appwrite/config";
import { COLLECTIONS, DATABASE_ID } from "@/appwrite/const";
import { NextRequest, NextResponse } from "next/server";

import { reviewSchema } from "../schema";

export async function createReviewHandler(request: NextRequest) {
  try {
    const body = await request.json();

    const parsed = reviewSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { status: "error", message: parsed.error.issues },
        { status: 400 }
      );
    }

    const user = await getAuthenticatedUser();

    const payload = {
      ...parsed.data,
      author: user.$id,
    };

    const review = await databases.createDocument(
      DATABASE_ID,
      COLLECTIONS.REVIEWS,
      ID.unique(),
      payload
    );

    return NextResponse.json({ status: "success", data: review });
  } catch (error) {
    handleAppwriteError(error);
  }
}
