import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const StatsCard = ({ icon, value, label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, hasAnimated]);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, type: "spring", bounce: 0.4 }}
      onViewportEnter={() => setHasAnimated(true)}
    >
      <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 hover:-translate-y-2">
        <div className="flex flex-col items-center text-center space-y-3">
          <motion.div
            className="text-4xl"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <motion.div
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
            key={count}
          >
            {count}+
          </motion.div>
          <p className="text-sm md:text-base text-gray-300 font-medium">
            {label}
          </p>
        </div>
        
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-purple-500/20 to-pink-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
      </div>
    </motion.div>
  );
};

export default StatsCard;

