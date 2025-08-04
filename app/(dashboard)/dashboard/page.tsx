"use client";

import { motion } from "motion/react";
import { StatCard } from "@/components/molecules/stat-card/stat-card";
import { RecentActivity } from "@/components/molecules/recent-activity/recent-activity";
import { CustomLineChart } from "@/components/atoms/charts/line-chart";

import { CustomBarChart } from "@/components/atoms/charts/bar-chart";
import { CustomPieChart } from "@/components/atoms/charts/pie-chart";
import { TrendingUp } from "lucide-react";
import {
  donationTrends,
  foodTypesData,
  recentActivities,
  statsData,
  urgencyLevels,
} from "@/components/organisms/dashboard/dashboard-mock";

import DashboardFooter from "@/components/organisms/dashboard/dashboard-footer";
import DashboardBarPriorities from "@/components/organisms/dashboard/dashboard-bar-priorities";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f8fffe] p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-2"
        >
          <h1 className="text-3xl font-bold text-[#1f1f1f]">Dashboard</h1>
          <p className="text-[#6e6e6e]">
            Welcome back! Here&apos;s what&apos;s happening in your community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl border border-[#e5e7eb] p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-[#1f1f1f]">
                Donation Trends
              </h3>
              <div className="flex items-center gap-2 text-sm text-[#3ec70b] font-medium">
                <TrendingUp className="w-4 h-4" />
                <span>+23% this month</span>
              </div>
            </div>
            <CustomLineChart data={donationTrends} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl border border-[#e5e7eb] p-6"
          >
            <h3 className="text-lg font-semibold text-[#1f1f1f] mb-6">
              Food Types Distribution
            </h3>
            <CustomPieChart data={foodTypesData} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-2xl border border-[#e5e7eb] p-6"
          >
            <h3 className="text-lg font-semibold text-[#1f1f1f] mb-6">
              Request Urgency Levels
            </h3>
            <CustomBarChart
              data={urgencyLevels}
              fillColor="#009379"
              className="h-48"
            />

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
