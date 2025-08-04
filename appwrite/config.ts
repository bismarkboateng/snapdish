import { Client, Account, ID, Databases } from "node-appwrite";
import {
  APPWRITE_ENDPOINT,
  APPWRITE_PROJECT_ID,
  APPWRITE_SESSION_API_KEY,
} from "./const";

export const client = new Client();

client
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID)
  .setKey(APPWRITE_SESSION_API_KEY);

export const account = new Account(client);
export const databases = new Databases(client);
export { ID };
