import { CONTACT_CONTENT } from "../constants/index";
import { motion, useInView } from "framer-motion";
import Ksign from "../assets/Ksign.webp";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay,
    },
  }),
};
const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay,
    },
  }),
};

const illustrationVariants = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  visible: (delay = 0) => ({
    opacity: 1,
    rotate: -10,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay,
    },
  }),
};
const Contact = () => {
  return (
    <>
      <div className="border border-x-white dark:border-x-[#2f3136] w-full bg-white mb-8"></div>

      <motion.h2
        className="text-center font-zodiak text-[45px] animate-pulse py-3 "
        initial="hidden"
        whileInView="visible"
        custom={0.4}
        variants={textVariants}
      >
        {CONTACT_CONTENT.headline}
      </motion.h2>
      <section
        className=" flex flex-col my-8 md:flex-row items-center justify-between px-4  md:px-10"
        id="contact"
      >
        <div className="w-full md:w-1/2">
          <motion.p
            className="md:text-base md:leading-relaxed font-medium md:mx-auto  max-w-xl lg:max-w-[34rem] text-sm tracking-wider my-4"
            initial="hidden"
            whileInView="visible"
            custom={0.6}
            variants={textVariants}
          >
            {CONTACT_CONTENT.description}
          </motion.p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center mt-2">
          <motion.img
            src={Ksign}
            alt="Contact Illustration"
            className="w-3/4 md:w-auto max-w-xs md:max-w-md transition-transform duration-300 ease-in-out"
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            custom={0.9}
            variants={illustrationVariants}
          />
          <motion.h3
            className="py-5 font-zodiak font-responsive animate-pulse"
            initial="hidden"
            whileInView="visible"
            custom={1.2}
            variants={textVariants}
          >
            Get In Touch ( ) ;
          </motion.h3>
          
          <div className="flex justify-center space-x-6 ">
            {CONTACT_CONTENT.socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  initial="hidden"
                  whileInView="visible"
                  custom={1.0 + index * 0.2}
                  variants={iconVariants}
                  className="transition duration-300 hover:text-black"
                >
                  <Icon size={36} />
                </motion.a>
              );
            })}
          </div>

        </div>
      </section>


      <footer className="mt-14  py-4  text-center">
        <p className=" text-xl md:text-3xl font-semibold ">
          &copy; 2025{" "}
          <a
            href="https://www.linkedin.com/in/keegan-colaco20"
            target="_blank"
            className="hover:animate-pulse"
          >
            Keegan Colaco.{" "}
          </a>
          All Rights Reserved.
        </p>
        <p className="text-sm mx-14  md:text-base font-medium mt-3 tracking-[0.2px] text-gray-300">
          Made with Love and Espresso Coffee (No sugar, less ice).
        </p>
      </footer>
    </>
  );
};

export default Contact;
