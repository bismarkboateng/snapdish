import { NextResponse } from "next/server";
import { isAppwriteException, mapAppwriteCodeToStatus } from "./utils";

export function handleAppwriteError(error: unknown) {
  if (isAppwriteException(error)) {
    return NextResponse.json(
      { error: error.message },
      { status: mapAppwriteCodeToStatus(error.code) }
    );
  }

  return NextResponse.json({ error: "Internal server error" }, { status: 500 });
}
