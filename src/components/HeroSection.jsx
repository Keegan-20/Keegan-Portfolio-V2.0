import { useState, useEffect, useCallback, useRef, memo } from "react";
import { motion } from "framer-motion";

// Use optimized WebP image (35KB vs 6.7MB PNG - 99.5% reduction)
const mainProfileWebp = "/mainProfile.webp";
const mainProfileAvif = "/mainProfile.avif";

// Greetings array - defined outside component to prevent recreation
const greetings = [
  "Hey", // United States
  "नमस्ते", // India
  "Bonjour", // France
  "Sat Sri Akaal", // Punjab,India
  "Hola", // Spain, Latin America
  "Ciao", // Italy
  "Hallo", // Germany
  "Olá", // Brazil, Portugal
  "Konnichiwa", // Japan
  "Shalom", // Israel (Hebrew)
  "Privet", // Russia
  "Hallo", // Netherlands
  "Kia ora", // New Zealand (Māori)
];

const HeroSection = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const nameRef = useRef(null);
  
  const tagline = "Building Scalable,User-Focused Web Experiences ✨";

  // Optimized interval logic
  const updateGreetingIndex = useCallback(() => {
    setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(updateGreetingIndex, 2300);
    return () => clearInterval(interval);
  }, [updateGreetingIndex]);

  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= tagline.length) {
        setTypedText(tagline.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  // Magnetic effect for name - optimized with useCallback
  const handleMouseMove = useCallback((e) => {
    if (!nameRef.current) return;
    
    const rect = nameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const distance = Math.sqrt(x * x + y * y);
    const maxDistance = 100;
    
    if (distance < maxDistance) {
      const strength = (maxDistance - distance) / maxDistance;
      const moveX = (x / distance) * strength * 20;
      const moveY = (y / distance) * strength * 20;
      
      nameRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    } else {
      nameRef.current.style.transform = 'translate(0px, 0px)';
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (nameRef.current) {
      nameRef.current.style.transform = 'translate(0px, 0px)';
    }
  }, []);

  return (
    <section
      id="home"
      className="relative z-10 mt-24 md:mt-32 lg:mt-40 mx-6 md:mx-12 lg:mx-24 flex flex-col md:flex-row items-center justify-between text-white px-4 gap-8 md:gap-12"
    >
      {/* Left Content */}
      <div className="flex flex-col items-start w-full md:w-3/5">
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl font-mono mb-3"
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          {greetings[greetingIndex]}
          <span className="inline-block animate-wave">👋</span>, I&apos;m
        </motion.h1>

        <motion.h2
          ref={nameRef}
          className="w-fit text-4xl md:text-6xl lg:text-7xl font-zodiak font-bold mb-2 md:mb-4 py-2 bg-gradient-to-r from-pink-600 via-purple-500 to-pink-400 bg-400% bg-clip-text text-transparent animate-gradient cursor-pointer transition-transform duration-200 ease-out"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ 
            filter: 'drop-shadow(0 0 30px rgba(219, 39, 119, 0.3))',
          }}
        >
          Keegan Colaco.
        </motion.h2>

        {/* Fixed height container to prevent CLS during typing animation */}
        <motion.h3
          className="text-lg md:text-3xl lg:text-4xl font-mono font-bold md:mb-4 mt-1 min-h-[36px] md:min-h-[56px] lg:min-h-[64px] overflow-visible"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {typedText}
          {isTyping && <span className="animate-pulse">|</span>}
        </motion.h3>

        <motion.p
          className="text-xs md:text-base lg:text-lg font-medium pt-2 pb-4 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Transforming ideas into user-friendly web applications, driven by
          curiosity and attention to detail.
        </motion.p>

        <motion.button
          className="mt-4 px-5 py-3 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-700 shadow-lg text-white hover:from-pink-400 hover:to-purple-600 transition duration-300 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const section = document.querySelector("#contact");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Let&apos;s Talk!
        </motion.button>
      </div>

      {/* Right Image with Shadow Effect - Circular */}
      {/* Fixed container dimensions to prevent CLS */}
      <motion.div
        className="relative w-full md:w-2/5 flex justify-center items-center min-h-[320px] md:min-h-[400px] lg:min-h-[440px]"
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1, type: "spring", bounce: 0.4 }}
        style={{ contain: 'layout' }}
      >
        {/* Animated gradient background blob - simplified for performance */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-3xl opacity-25"
          style={{ willChange: 'transform' }}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10, // Slower animation = less CPU usage
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Main image container with shadow */}
        <motion.div
          className="relative z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Multiple shadow layers for depth - Circular */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-pink-600 rounded-full blur-2xl opacity-60 transform translate-x-4 translate-y-4" />
          <div className="absolute inset-0 bg-gradient-to-tl from-purple-600 via-pink-500 to-purple-400 rounded-full blur-xl opacity-40 transform -translate-x-2 -translate-y-2" />
          
          {/* Circular Image with border - Optimized for LCP and CLS */}
          {/* Fixed aspect-ratio container prevents CLS */}
          <div 
            className="relative rounded-full overflow-hidden border-4 border-white/20 shadow-2xl w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px]"
            style={{ aspectRatio: '1/1', contain: 'layout paint' }}
          >
            {/* Picture element for modern format support */}
            <picture>
              <source srcSet={mainProfileAvif} type="image/avif" />
              <source srcSet={mainProfileWebp} type="image/webp" />
              <motion.img
                src={mainProfileWebp}
                alt="Keegan Colaco"
                width={400}
                height={400}
                fetchpriority="high"
                decoding="async"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 15%' }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </picture>
            
            {/* Gradient overlay on hover */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-pink-500/30 via-transparent to-purple-500/30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full pointer-events-none"
            />
          </div>
          
          {/* Simplified floating accent elements - CSS only for better performance */}
          <div 
            className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-xl opacity-40 animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <div 
            className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full blur-xl opacity-40 animate-pulse"
            style={{ animationDuration: '5s' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default memo(HeroSection);
