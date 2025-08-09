import { motion } from "motion/react";
import { Utensils } from "lucide-react";

export const Logo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <motion.div
    animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    className={`relative ${className}`}
  >
    <div
      className="w-full h-full bg-gradient-to-br from-[#009379] to-[#007566] rounded-3xl
    flex items-center justify-center shadow-2xl"
    >
      <Utensils className="h-8 w-8 text-white" />
    </div>
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 bg-[#009379]/20 rounded-3xl blur-xl pointer-events-none"
    />
  </motion.div>
);

export default Logo;
