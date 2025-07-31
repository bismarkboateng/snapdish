import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "Health check passed" },
    { status: 200 }
  );
}
