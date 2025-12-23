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
        <motion.div
          className="w-2 h-2 bg-green-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <span className="text-xs md:text-sm font-medium text-green-400">
          Available for work
        </span>
      </div>
    </motion.div>
  );
};

export default AvailabilityBadge;

