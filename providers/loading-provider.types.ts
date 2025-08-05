import { ReactNode } from "react";

export interface LoadingProviderProps {
  children: ReactNode;
}

export interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  loadingMessage: string;
  setLoadingMessage: (message: string) => void;
}
