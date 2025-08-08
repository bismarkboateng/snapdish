import { handleAppwriteError } from "@/appwrite/auth/auth-handlers";
import { databases } from "@/appwrite/config";
import { COLLECTIONS, DATABASE_ID } from "@/appwrite/const";

import { ID } from "node-appwrite";
import { CreateUserHandlerProps } from "../types";

export async function createUserHandler(data: CreateUserHandlerProps) {
  try {
    const userDoc = await databases.createDocument(
      DATABASE_ID,
      COLLECTIONS.USERS,
      ID.unique(),
      {
        id: data.id,
        fullName: data.fullName,
        email: data.email,
        phone: "",
        profilePic: "",
        createdAt: new Date().toISOString(),
      }
    );

    return { success: true, data: userDoc };
  } catch (error) {
    handleAppwriteError(error);
  }
}
