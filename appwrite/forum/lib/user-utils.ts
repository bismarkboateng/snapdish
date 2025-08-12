import { databases } from "@/appwrite/config";
import { COLLECTIONS, DATABASE_ID } from "@/appwrite/const";
import { Query } from "node-appwrite";
import { UserData } from "../types";

export const fetchUserById = async (
  userId: string
): Promise<UserData | null> => {
  try {
    const userQuery = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.USERS,
      [Query.equal("id", userId)]
    );

    if (userQuery.total === 0) {
      return null;
    }

    const user = userQuery.documents[0];
    return {
      $id: user.$id,
      name: user.fullName || user.name || "Anonymous User",
    };
  } catch {
    return null;
  }
};

export const fetchUsersForReviews = async (
  reviews: any[]
): Promise<Map<string, UserData>> => {
  const userMap = new Map<string, UserData>();
  const uniqueUserIds = [...new Set(reviews.map((review) => review.author))];

  const userPromises = uniqueUserIds.map(async (userId) => {
    const userData = await fetchUserById(userId);
    if (userData) {
      userMap.set(userId, userData);
    }
    return userData;
  });

  await Promise.all(userPromises);
  return userMap;
};
