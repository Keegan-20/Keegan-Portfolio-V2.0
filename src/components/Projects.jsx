import { motion } from "framer-motion";
import { PROJECTS } from "../constants/index";
import { RiGithubFill } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";
import { RiStarFill } from "@remixicon/react";

const Projects = () => {
  const projectVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -40,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <section className="px-6 py-8" id="work">
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight ">
        Work
      </h2>
      <div className="h-1 w-28 mt-4 mb-8 bg-white"></div>
      <div className="grid grid-cols-1 gap-6 md:gap-10 ">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="outer-container w-full md:w-3/4 m-auto relative transition transform flex items-center justify-center group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={projectVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="inner-container rounded-2xl overflow-hidden p-2 border-slate-50 bg-white/30 shadow-lg backdrop-blur-sm border border-white/18 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 w-full">
              <div className="image-container p-4 md:p-6 lg:p-8 rounded-2xl overflow-hidden shadow-md relative">
                
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    className="absolute top-1 left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <RiStarFill className="w-3 h-3" />
                    Featured
                  </motion.div>
                )}

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                  <h1 className="text-xl font-zodiak text-center md:text-3xl font-medium mb-2 sm:mb-0">
                    {project.name}
                  </h1>
                  <div className="flex gap-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center transition duration-300 hover:bg-[#811844] hover:scale-110"
                    >
                      <RiGithubFill size={20} className="cursor-pointer" />
                    </a>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/50 text-white rounded-full py-2 px-4 md:py-2.5 md:px-4 text-sm cursor-pointer hover:bg-[#811844] text-center inline-flex items-center gap-3 hover:scale-105 transition-transform"
                    >
                      <span className="font-medium">Visit</span>
                      <FiArrowUpRight size={20} className="cursor-pointer" />
                    </a>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * techIndex }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <p className="text-sm md:text-base leading-relaxed md:leading-loose shadow-sm py-3 mb-4">
                  {project.description}
                </p>
                
                {/* Image with hover effect */}
                <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      
                    >
                <div className="relative overflow-hidden rounded-lg group/image">
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="w-full object-cover rounded-lg transition-transform duration-500 group-hover/image:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-medium text-sm">Click to explore →</span>
                  </div>
                </div>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;