"use client";

import { motion } from "motion/react";
import { Avatar } from "@/components/atoms/avatar";
import { Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/atoms/badge";

import { RecentActivityProps } from "./recent-activity.types";
import { getTypeColor, getTypeLabel } from "./recent-activity.utils";

export const RecentActivity = ({
  activities,
  className = "",
}: RecentActivityProps) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-[#e5e7eb] p-6 ${className}`}
    >
      <h3 className="text-lg font-semibold text-[#1f1f1f] mb-4">
        Recent Activity
      </h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#f5fefe] transition-colors duration-200"
          >
            <Avatar className="w-10 h-10">
              <div className="w-full h-full bg-[#009379] text-white rounded-full flex items-center justify-center text-sm font-medium">
                {activity.user.name.charAt(0).toUpperCase()}
              </div>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Badge
                  className={`text-xs px-2 py-1 ${getTypeColor(activity.type)}`}
                >
                  {getTypeLabel(activity.type)}
                </Badge>
                {activity.foodType && (
                  <Badge variant="outline" className="text-xs">
                    {activity.foodType}
                  </Badge>
                )}
              </div>

              <p className="font-medium text-[#1f1f1f] truncate">
                {activity.title}
              </p>
              <p className="text-sm text-[#6e6e6e] mb-2">
                {activity.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-[#6e6e6e]">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span className="truncate">{activity.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{activity.timestamp}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
