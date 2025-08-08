import { Models } from "node-appwrite";
export interface UpdateUserData {
  fullName: string;
  email: string;
  phone?: string;
}
export interface UpdateUserDTO extends UpdateUserData {}

export interface UpdateUserResponse {
  message: string;
  data?: Models.Document;
}
