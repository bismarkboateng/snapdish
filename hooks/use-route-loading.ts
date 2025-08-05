"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface UseRouteLoadingReturn {
  isLoading: boolean;
  loadingMessage: string;
}

export function useRouteLoading(): UseRouteLoadingReturn {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const pathname = usePathname();

  useEffect(() => {
    const routeMessages: Record<string, string> = {
      "/": "Loading Home...",
      "/login": "Loading Login...",
      "/register": "Loading Registration...",
      "/forgot-password": "Loading Password Reset...",
      "/reset-password": "Loading Password Reset...",
      "/dashboard": "Loading Dashboard...",
      "/dashboard/donate-food": "Preparing Donation Form...",
      "/dashboard/request-food": "Loading Available Donations...",
      "/dashboard/settings": "Loading Settings...",
      "/dashboard/settings/profile": "Loading Profile...",
      "/dashboard/settings/my-donations": "Loading Your Donations...",
      "/dashboard/settings/my-requests": "Loading Your Requests...",
    };

    const message = routeMessages[pathname] || "Loading...";
    setLoadingMessage(message);
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return { isLoading, loadingMessage };
}
