"use client";

import { motion } from "motion/react";
import { StatCardProps } from "./stat-card.types";
import { getChangeColor } from "./stat-card.utils";

export const StatCard = ({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  description,
  className = "",
}: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className={`bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col ${className}`}
    >
      <div className="flex items-start justify-between flex-1">
        <div className="flex-1 min-w-0 pr-3 flex flex-col justify-between h-full">
          <div>
            <p className="text-sm font-medium text-[#6e6e6e] mb-1 break-words line-clamp-2">{title}</p>
            <p className="text-xl sm:text-2xl xl:text-3xl font-bold text-[#1f1f1f] mb-2 break-words">{value}</p>
          </div>
          <div>
            {change && (
              <p className={`text-sm font-medium break-words line-clamp-1 ${getChangeColor(changeType)}`}>
                {change}
              </p>
            )}
            {description && (
              <p className="text-xs text-[#6e6e6e] mt-2 break-words line-clamp-2">{description}</p>
            )}
          </div>
        </div>
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f5fefe] rounded-xl flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#009379]" />
        </div>
      </div>
    </motion.div>
  );
};
