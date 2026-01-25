import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Optimized circle variants with GPU-accelerated properties only (transform, opacity)
// Longer durations reduce CPU usage from animation calculations
const circleVariants = {
  animate1: {
    scale: [1, 1.15, 1],
    x: [0, 80, 0],
    y: [0, 40, 0],
    transition: {
      duration: 8, // Increased from 2s - smoother and less CPU intensive
      repeat: Infinity,
      ease: "linear", // Linear is more efficient than easing functions
    },
  },
  animate2: {
    scale: [1, 1.1, 1],
    x: [0, -70, 0],
    y: [0, -50, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  },
  animate3: {
    scale: [1, 1.2, 1],
    x: [0, 60, 0],
    y: [0, 60, 0],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Static version for reduced-motion preference
const staticStyle = {
  transform: 'translateZ(0)', // Force GPU layer
};

const BlurBackground = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Render static background for users who prefer reduced motion
  if (prefersReducedMotion) {
    return (
      <div 
        className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center filter blur-[120px] opacity-70"
        style={{ contain: 'strict' }}
      >
        <div className="bg-yellow-500/80 w-[300px] h-[200px] rounded-full absolute" style={staticStyle} />
        <div className="bg-purple-500/80 w-[320px] h-[220px] rounded-full absolute translate-x-10" style={staticStyle} />
        <div className="bg-pink-500/80 w-[340px] h-[240px] rounded-full absolute -translate-x-10" style={staticStyle} />
      </div>
    );
  }

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center filter blur-[120px] opacity-70"
      style={{ contain: 'strict' }} // CSS containment for performance
    >
      {/* Reduced to 3 circles with slower, more efficient animations */}
      <motion.div
        className="bg-yellow-500 w-[300px] h-[200px] rounded-full absolute"
        style={{ willChange: 'transform' }}
        variants={circleVariants}
        animate="animate1"
      />
      <motion.div
        className="bg-purple-500 w-[320px] h-[220px] rounded-full absolute"
        style={{ willChange: 'transform' }}
        variants={circleVariants}
        animate="animate2"
      />
      <motion.div
        className="bg-pink-500 w-[340px] h-[240px] rounded-full absolute"
        style={{ willChange: 'transform' }}
        variants={circleVariants}
        animate="animate3"
      />
    </div>
  );
};

export default memo(BlurBackground);
