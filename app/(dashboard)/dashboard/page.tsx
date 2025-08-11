"use client";

import { motion } from "motion/react";
import { StatCard } from "@/components/molecules/stat-card/stat-card";
import { RecentActivity } from "@/components/molecules/recent-activity/recent-activity";
import { CustomLineChart } from "@/components/atoms/charts/line-chart";
import { Skeleton } from "@/components/atoms/skeleton";

import { CustomBarChart } from "@/components/atoms/charts/bar-chart";
import { CustomPieChart } from "@/components/atoms/charts/pie-chart";
import {
  donationTrends,
  foodTypesData,
  recentActivities,
  urgencyLevels,
} from "@/components/organisms/dashboard/dashboard-mock";

import DashboardFooter from "@/components/organisms/dashboard/dashboard-footer";
import DashboardBarPriorities from "@/components/organisms/dashboard/dashboard-bar-priorities";
import { useGetDashboardSummary } from "@/features/dashboard/hooks/use-get-dashboard-summary";
import { StatCardData } from "@/features/dashboard/types";
import { Heart, Users, Package, Clock, TrendingUp } from "lucide-react";

const iconMap = {
  Heart,
  Users,
  Package,
  Clock,
};

const UserDashboard = () => {
  const { data: stats, isPending } = useGetDashboardSummary();

  return (
    <div className="min-h-screen bg-[#f8fffe] p-2 sm:p-4 lg:p-6">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-2"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1f1f1f] break-words">
            Dashboard
          </h1>
          <p className="text-sm sm:text-base text-[#6e6e6e] break-words leading-relaxed">
            Welcome back! Here&apos;s what&apos;s happening in your community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {isPending
            ? Array.from({ length: 4 }).map((_, index) => (
                <motion.div
                  key={`skeleton-card-${index + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-6 shadow-sm h-full flex flex-col"
                >
                  <div className="flex items-start justify-between flex-1">
                    <div className="flex-1 min-w-0 pr-3 flex flex-col justify-between h-full">
                      <div>
                        <Skeleton className="h-4 w-24 mb-2" />
                        <Skeleton className="h-8 w-16 mb-2" />
                      </div>
                      <div>
                        <Skeleton className="h-3 w-12 mb-2" />
                        <Skeleton className="h-3 w-32" />
                      </div>
                    </div>
                    <Skeleton className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl shrink-0" />
                  </div>
                </motion.div>
              ))
            :
              stats?.map((stat: StatCardData, index: number) => {
                const IconComponent =
                  iconMap[stat.iconName as keyof typeof iconMap];

                return (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <StatCard
                      title={stat.title}
                      value={stat.value}
                      change={stat.change}
                      changeType={stat.changeType}
                      icon={IconComponent}
                      description={stat.description}
                    />
                  </motion.div>
                );
              })}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-6 overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2">
              <h3 className="text-base sm:text-lg font-semibold text-[#1f1f1f] break-words min-w-0">
                Donation Trends
              </h3>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#3ec70b] font-medium shrink-0">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                <span className="whitespace-nowrap">+23% this month</span>
              </div>
            </div>
            <div className="h-64 sm:h-auto">
              <CustomLineChart data={donationTrends} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl border border-[#e5e7eb] p-4 pb-10 overflow-hidden"
          >
            <h3 className="text-base sm:text-lg font-semibold text-[#1f1f1f] mb-6 sm:mb-8 break-words min-w-0">
              Food Types Distribution
            </h3>
            <CustomPieChart data={foodTypesData} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-6 overflow-hidden"
          >
            <h3 className="text-base sm:text-lg font-semibold text-[#1f1f1f] mb-4 sm:mb-6 break-words min-w-0">
              Request Urgency Levels
            </h3>
            <div className="h-40 lg:h-48 mb-4">
              <CustomBarChart
                data={urgencyLevels}
                fillColor="#009379"
                className="h-full"
              />
            </div>
            <DashboardBarPriorities />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-2"
          >
            <RecentActivity activities={recentActivities} />
          </motion.div>
        </div>

        <DashboardFooter />
      </div>
    </div>
  );
};

export default UserDashboard;
