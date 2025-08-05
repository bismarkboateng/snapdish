"use client";

import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { SplashLoader } from "@/components/molecules/splash-loader";
import { LoadingProviderProps, LoadingContextType } from "./loading-provider.types";

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: Readonly<LoadingProviderProps>) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = () => {
      const routeMessages: Record<string, string> = {
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
      }, 800);

      return () => clearTimeout(timer);
    };

    handleRouteChange();
  }, [pathname]);

  const contextValue = useMemo<LoadingContextType>(() => ({
    isLoading,
    setIsLoading,
    loadingMessage,
    setLoadingMessage,
  }), [isLoading, loadingMessage]);

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
      <SplashLoader 
        isVisible={isLoading} 
        message={loadingMessage}
        variant="default"
        showLogo={true}
      />
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
