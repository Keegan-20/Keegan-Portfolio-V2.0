import { memo } from "react";
import { motion } from "framer-motion";

const AvailabilityBadge = () => {
  return (
    <motion.div
      className="fixed top-24 right-4 md:top-28 md:right-8 z-40 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg border border-green-500/50 rounded-full px-4 py-2 shadow-lg"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <div className="relative flex h-4 w-4 items-center justify-center">
          {/* Outer pulsing circle with glow */}
          <div className="absolute h-4 w-4 animate-pulse rounded-full bg-[#B6E777] shadow-[0_0_8px_rgba(182,231,119,0.8),0_0_16px_rgba(182,231,119,0.6)] dark:shadow-[0_0_8px_rgba(182,231,119,0.8),0_0_16px_rgba(182,231,119,0.5),0_0_24px_rgba(182,231,119,0.3)]"></div>
          {/* Inner solid circle */}
          <div className="relative z-10 h-2 w-2 rounded-full bg-[#B6E777]"></div>
        </div>
        <span className="text-xs md:text-sm font-medium text-[#b2d87f]">
          Available for work
        </span>
      </div>
    </motion.div>
  );
};

export default memo(AvailabilityBadge);

