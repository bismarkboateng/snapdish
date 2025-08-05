"use client";

import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/atoms/button";
import { Card } from "@/components/atoms/card";
import { ErrorStateProps } from "./error-state.types";
import { getVariantStyles } from "./error-state.utils";

export function ErrorState({
  title = "Something went wrong",
  message = "We encountered an error while loading this content.",
  showRetry = true,
  showHomeButton = false,
  onRetry,
  onGoHome,
  className = "",
  variant = "default",
}: Readonly<ErrorStateProps>) {
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome();
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`w-full ${className}`}
    >
      <Card
        className={`text-center bg-gradient-to-br from-red-50/50 to-orange-50/50 border-red-200/60 shadow-lg ${getVariantStyles(
          variant
        )}`}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <motion.div
            animate={{
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="mx-auto w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <AlertTriangle className="h-8 w-8 text-white" />
          </motion.div>

          <div className="space-y-3">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-semibold text-gray-900"
            >
              {title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 max-w-md mx-auto leading-relaxed"
            >
              {message}
            </motion.p>
          </div>

          {(showRetry || showHomeButton) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2"
            >
              {showRetry && (
                <Button
                  onClick={handleRetry}
                  className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0 shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 px-6"
                  size="default"
                >
                  <RefreshCw className="h-4 w-4" />
                  Try Again
                </Button>
              )}

              {showHomeButton && (
                <Button
                  onClick={handleGoHome}
                  variant="outline"
                  className="border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 hover:bg-gray-50 flex items-center gap-2 px-6"
                  size="default"
                >
                  <Home className="h-4 w-4" />
                  Go Home
                </Button>
              )}
            </motion.div>
          )}

          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-4 left-4 w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="absolute top-8 right-8 w-1 h-1 bg-orange-400 rounded-full"></div>
            <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-red-300 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-orange-300 rounded-full"></div>
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
}
