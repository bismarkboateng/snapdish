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
      className={`bg-white rounded-2xl border border-[#e5e7eb] p-6 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-[#6e6e6e] mb-1">{title}</p>
          <p className="text-3xl font-bold text-[#1f1f1f] mb-2">{value}</p>
          {change && (
            <p className={`text-sm font-medium ${getChangeColor(changeType)}`}>
              {change}
            </p>
          )}
          {description && (
            <p className="text-xs text-[#6e6e6e] mt-2">{description}</p>
          )}
        </div>
        <div className="w-12 h-12 bg-[#f5fefe] rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#009379]" />
        </div>
      </div>
    </motion.div>
  );
};
