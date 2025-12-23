import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiSunFill, RiMoonFill } from "@remixicon/react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    
    // Update CSS variables for smooth transition
    if (!newTheme) {
      document.documentElement.style.setProperty('--bg-color', '#ffffff');
      document.documentElement.style.setProperty('--text-color', '#0e0d0d');
    } else {
      document.documentElement.style.setProperty('--bg-color', '#0e0d0d');
      document.documentElement.style.setProperty('--text-color', '#ffffff');
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 group"
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <RiSunFill className="w-6 h-6 text-yellow-300" />
        ) : (
          <RiMoonFill className="w-6 h-6 text-indigo-900" />
        )}
      </motion.div>
      
      {/* Tooltip */}
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {isDark ? "Light Mode" : "Dark Mode"}
      </span>
    </motion.button>
  );
};

export default ThemeToggle;

