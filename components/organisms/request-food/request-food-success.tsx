import React from "react";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

const RequestFoodSuccess = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center min-h-[400px] text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-20 h-20 bg-[#3ec70b]/10 rounded-full flex items-center justify-center mb-6"
      >
        <CheckCircle className="w-10 h-10 text-[#3ec70b]" />
      </motion.div>
      <h2 className="text-2xl font-bold text-[#1f1f1f] mb-4">
        Request Submitted Successfully!
      </h2>
      <p className="text-[#6e6e6e] max-w-md">
        Your food request has been posted. We&apos;ll notify you when someone is able
        to help.
      </p>
    </motion.div>
  );
};

export default RequestFoodSuccess;
