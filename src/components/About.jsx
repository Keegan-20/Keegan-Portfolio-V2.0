import { motion, useInView } from "framer-motion";
import { ABOUT_ME } from "../constants/index";
import { useRef } from "react";
import { Download } from "lucide-react";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { clipPath: "inset(0 50% 0 50%)" },
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white relative z-10 md:ml-16"
    >
      {/* mobile view header  */}
      <motion.h2
        className="md:hidden w-full text-4xl md:text-5xl font-medium tracking-tight mt-10 md:mt-3 ml-7"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        About Me
        <div className="h-1 w-28 mt-4 mb-8 bg-white"></div>
      </motion.h2>

      <motion.div
        className="w-full md:w-[45%] mt-4 p-4 md:p-8 order-1 md:order-2"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <motion.img
          src="/developer.gif"
          alt="developer illustration"
          className="w-56 h-auto md:w-[450px] md:h-[400px] rounded-2xl md:rounded-lg shadow-lg mx-auto md:mt-14"
        />
      </motion.div>

      <motion.div
        className="w-full md:w-[55%] p-4 md:p-10 order-2 md:order-1"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2
          className="hidden md:block w-full text-4xl md:text-5xl font-medium tracking-tight md:mt-3 -ml-4 md:-ml-24 text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
        About Me
        <div className="h-1 w-32 mt-4 mb-8 bg-white shadow-sm"></div>
      </motion.h2>

        <motion.p className="text-lg mb-5" variants={textVariants}>
          {ABOUT_ME.para1}
        </motion.p>
        <motion.p className="hidden md:inline-block text-lg mb-5" variants={textVariants}>
          {ABOUT_ME.para2}
        </motion.p>
        <motion.p className="text-lg mb-5" variants={textVariants}>
          {ABOUT_ME.para3}
        </motion.p>
        <motion.a
          className="inline-flex items-center gap-x-2 font-medium bg-pink-600 text-white p-3 lg:p-2 mt-4 rounded-xl animate-bounceEffect hover:animate-glow"
          href={ABOUT_ME.resumeLink}
          download
          rel="noopener noreferrer"
          variants={textVariants}
        >
          {ABOUT_ME.resumeLinkText}
          <Download className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
