import { Models } from "node-appwrite";

export interface UpdateUserData {
  fullName: string;
  phone?: string;
}

export interface UserProfileData extends Models.Document {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  createdAt: string;
}

export interface GetUserResponse {
  status: string;
  data?: UserProfileData;
}

export interface UpdateUserDTO extends UpdateUserData {}

export interface UpdateUserResponse {
  message: string;
  data?: Models.Document;
}
