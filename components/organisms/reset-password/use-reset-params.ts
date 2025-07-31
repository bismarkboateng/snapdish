"use client";

import { useSearchParams } from "next/navigation";

export function useResetParams() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId") ?? "";
  const secret = searchParams.get("secret") ?? "";

  return { userId, secret };
}
