"use client";

import { useRouteLoading } from "@/hooks/use-route-loading";
import { GlobalLoader } from "@/components/molecules/global-loader/global-loader";
import { LoadingWrapperProps } from "./loading-wrapper.types"

export function LoadingWrapper({ children }: Readonly<LoadingWrapperProps>) {
  const { isLoading, loadingMessage } = useRouteLoading();

  return (
    <>
      {children}
      <GlobalLoader isVisible={isLoading} message={loadingMessage} />
    </>
  );
}
