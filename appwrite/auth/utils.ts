import { AppwriteException } from "node-appwrite";

export function isAppwriteException(err: unknown): err is AppwriteException {
  return (
    typeof err === "object" &&
    err !== null &&
    "message" in err &&
    "code" in err
  );
}

export function mapAppwriteCodeToStatus(code: number): number {
  switch (code) {
    case 409:
      return 409;
    case 401:
      return 401; 
    case 403:
      return 403;
    default:
      return 500;
  }
}
