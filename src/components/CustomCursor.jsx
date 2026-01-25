import { useState, useEffect, memo, useRef } from "react";
import { motion } from "framer-motion";

// Check if device supports hover (desktop)
const isDesktop = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    // Don't render on touch devices or mobile
    if (!isDesktop || window.innerWidth < 768) {
      return;
    }

    // Show cursor after a small delay to prevent flash
    const showTimer = setTimeout(() => setIsVisible(true), 100);

    const updateMousePosition = (e) => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Use RAF for smooth 60fps updates
      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button";
      
      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      clearTimeout(showTimer);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Don't render anything on mobile/touch devices
  if (!isDesktop || typeof window === 'undefined' || window.innerWidth < 768) {
    return null;
  }

  // Spring config optimized for performance
  const springConfig = {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 0.3,
  };

  return (
    <div 
      className={`transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ contain: 'layout style' }}
    >
      {/* Main cursor dot - reduced from 3 elements to 2 */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-pink-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ willChange: 'transform' }}
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={springConfig}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-purple-500 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{ willChange: 'transform' }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.6 : 1,
          opacity: isHovering ? 0.6 : 1,
        }}
        transition={{
          ...springConfig,
          stiffness: 200,
        }}
      />
    </div>
  );
};

export default memo(CustomCursor);

