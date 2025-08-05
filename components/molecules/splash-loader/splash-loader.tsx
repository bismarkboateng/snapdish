"use client";

import { motion, AnimatePresence } from "motion/react";
import { Loader2, Utensils } from "lucide-react";
import { SplashLoaderProps } from "./splash-loader.types";

export function SplashLoader({ 
  isVisible = false, 
  message = "Loading...",
  variant = "default",
  showLogo = true 
}: Readonly<SplashLoaderProps>) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#f8fffe] via-white to-[#f0fdf9]"
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-2 h-2 bg-[#009379] rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-32 w-1 h-1 bg-[#fddf89] rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-[#009379]/60 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-[#fddf89]/80 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-10 w-1 h-1 bg-[#009379]/40 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-10 w-1.5 h-1.5 bg-[#fddf89]/60 rounded-full animate-bounce"></div>
          </div>

          <div className="text-center space-y-8 relative">
            {showLogo && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.1 
                }}
                className="flex flex-col items-center space-y-4"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#009379] to-[#007566] rounded-2xl flex items-center justify-center shadow-2xl">
                    <Utensils className="h-10 w-10 text-white" />
                  </div>
                  
                  <motion.div 
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-[#009379]/20 rounded-2xl blur-xl"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-[#009379] to-[#007566] bg-clip-text text-transparent">
                    SnapDish
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">Food Donation Platform</p>
                </motion.div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: showLogo ? 0.5 : 0.1 }}
              className="space-y-6"
            >
              <div className="flex justify-center">
                {variant === "dots" ? (
                  <motion.div className="flex space-x-2">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [0, -20, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeInOut"
                        }}
                        className="w-3 h-3 bg-[#009379] rounded-full"
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  >
                    <Loader2 className="h-8 w-8 text-[#009379]" />
                  </motion.div>
                )}
              </div>

              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <p className="text-gray-600 font-medium">{message}</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mx-auto"
            >
              <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#009379] to-transparent"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{ 
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-8 left-8 w-8 h-8 border-2 border-[#009379]/20 rounded-lg"
          />
          
          <motion.div
            animate={{ 
              rotate: [360, 180, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-8 right-8 w-6 h-6 border-2 border-[#fddf89]/40 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
