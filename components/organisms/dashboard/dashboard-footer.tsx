import { AlertTriangle, CheckCircle, MapPin } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const DashboardFooter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
    >
      <div className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-6 text-center overflow-hidden">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#3ec70b]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
          <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-[#3ec70b]" />
        </div>
        <h4 className="text-xl sm:text-2xl font-bold text-[#1f1f1f] mb-2">98%</h4>
        <p className="text-sm sm:text-base text-[#6e6e6e] break-words leading-tight">Successful fulfillment rate</p>
      </div>

      <div className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-6 text-center overflow-hidden">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#009379]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
          <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#009379]" />
        </div>
        <h4 className="text-xl sm:text-2xl font-bold text-[#1f1f1f] mb-2">24</h4>
        <p className="text-sm sm:text-base text-[#6e6e6e] break-words leading-tight">Communities served</p>
      </div>

      <div className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-6 text-center overflow-hidden">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#ffb84c]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
          <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-[#ffb84c]" />
        </div>
        <h4 className="text-xl sm:text-2xl font-bold text-[#1f1f1f] mb-2">45</h4>
        <p className="text-sm sm:text-base text-[#6e6e6e] break-words leading-tight">High priority requests</p>
      </div>
    </motion.div>
  );
};

export default DashboardFooter;
