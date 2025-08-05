export interface ErrorStateProps {
  title?: string;
  message?: string;
  showRetry?: boolean;
  showHomeButton?: boolean;
  onRetry?: () => void;
  onGoHome?: () => void;
  className?: string;
  variant?: "default" | "compact" | "full";
}
