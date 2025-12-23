import projects1 from "../assets/project1.webp";
import projects2 from "../assets/project2.webp";
import projects3 from "../assets/project3.webp";
import projects4 from "../assets/project4.webp";
import projects5 from "../assets/project5.webp";
import Figma from "../assets/figma.svg"
import Jest from "../assets/jest.svg"
import JavaScript from "../assets/javascript.svg"
import React from "../assets/react.svg"
import Git from "../assets/git.svg"
import Redux from "../assets/redux.svg"
import NextJs from "../assets/nextjs.svg"
import TailwindCSS from "../assets/tailwindcss.svg"
import { SiCalendly } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiTwitterXFill, RiGithubFill, RiLinkedinFill} from 'react-icons/ri';



export const LINKS = [
  { href: "#home", label: "Home"},
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export const ABOUT_ME = {
  About_me: "About Me",
  para1:
    "I’m Keegan, a creative frontend developer, crafting immersive and intuitive web experiences, I transform creative visions into seamless digital experiences, also i have a keen eye for design and user experience.I chose frontend development because it sits at the intersection of creative design and technical problem-solving.",

    para2:"I love the immediate visual feedback of my work and the challenge of creating interfaces that delight users while maintaining clean, efficient code.I thrive on crafting intuitive user interfaces that not only look beautiful but also solve real-world problems.",

    para3:" Let's connect and bring your vision to life through impactful web solutions.",

  resumeLinkText: "Download CV",
  resumeLink: "/Keegan_resume.pdf",
};

export const PROJECTS = [
  {
    name: "ImagiFix",
    description: "A feature-rich photo editing web app built with Vanilla JavaScript only, offering crop, rotate, flip, undo/redo, stunning filters, and offline-friendly PWA support!",
    image: projects1,
    githubLink:"https://github.com/Keegan-20/ImagiFix",
    link: "https://imagi-fix.vercel.app",
    techStack: ["JavaScript", "HTML5", "CSS3", "PWA"],
    featured: true,
  },
  {
    name: "YumBites Food",
    description: "A food ordering website built with swiggys live API, React, Redux toolkit, and Parcel, featuring search, filtering, dynamic cart, shimmer UI, and cutting-edge performance optimizations!",
    image: projects2,
    githubLink:"https://github.com/Keegan-20/YumBites-Food",
    link: "https://yumbites-food.vercel.app",
    techStack: ["React", "Redux", "Parcel", "API"],
    featured: true,
  },
  {
    name: "Saas Admin Dashboard",
    description: "A pixel-perfect, responsive admin dashboard built with React, featuring seamless design adherence, meaningful microinteractions, and optimized for all devices.",
    image: projects3,
    githubLink: "https://github.com/Keegan-20/Saas-admin-dashboard",
    link: "https://saas-admin-dashboard1.vercel.app",
    techStack: ["React", "TailwindCSS", "Responsive"],
    featured: false,
  },
  {
    name: "RecipeHaven",
    description:
      "A responsive recipe website built with HTML, CSS, and Vanilla JavaScript, featuring a search bar powered by TheMealDB API to explore dishes and view detailed recipes effortlessly.",
    image: projects4,
    githubLink: "https://github.com/Keegan-20/RecipeHaven",
    link: "https://recipe-haven.vercel.app",
    techStack: ["JavaScript", "API", "CSS3"],
    featured: false,
  },
  {
    name: "Modern Task Manager",
    description: "A sleek web app for efficient task management with features like drag-and-drop organization, customizable status columns, and task creation, editing, and deletion.",
    image: projects5,
    githubLink: "https://github.com/Keegan-20/modern-task-manager",
    link: "https://modern-tasks-manager.vercel.app",
    techStack: ["React", "Drag & Drop", "LocalStorage"],
    featured: false,
  },

];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.",
    "I specialize in using technologies like React, Next.js, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};

 export const SKILLS = [
  {
    imgSrc: Figma,
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: JavaScript,
    label: 'JavaScript',
    desc: 'Programming language'
  },

  {
    imgSrc: React,
    label: 'React',
    desc: 'Js library for UI'
  },
  {
    imgSrc: TailwindCSS,
    label: 'TailwindCSS',
    desc: 'CSS framework'
  },
  {
    imgSrc: Git,
    label: 'Git',
    desc: 'Version control system'
  },

  {
    imgSrc: Redux,
    label: 'Redux',
    desc: 'State management library'
  },
  {
    imgSrc: NextJs,
    label: 'NextJs',
    desc: 'React framework'
  },
 
  {
    imgSrc: Jest,
    label: 'Jest',
    desc: 'Testing Framework'
  },
];

export const CONTACT_CONTENT = {
  headline: `" Learning, Living and Leveling Up . "`,
  description:
    "Got an exciting project brewing? Let's talk! I love turning ideas into reality and am always eager to explore new collaborations.Whether you're looking to create something amazing together or just want to exchange ideas over virtual coffee, drop me a line via email or connect through my social channels.",

 socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/keegan-colaco20",
      ariaLabel: "Connect with me on LinkedIn",
      icon: RiLinkedinFill,
    },
    {
      platform: "GitHub",
      url: "https://github.com/Keegan-20 ",
      ariaLabel: "View my GitHub profile",
      icon: RiGithubFill,
        hoverColor: "hover:text-black", // GitHub black
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/Keegan_WebDev",
      ariaLabel: "Follow me on Twitter (X)",
      icon: RiTwitterXFill,
    },
    {
      platform: "Email",
      url: "mailto:keegancolaco201@gmail.com",
      ariaLabel: "Connect with me on Email",
      icon: MdOutlineMailOutline,
    },
    {
      platform: "Calendly",
      url: "https://calendly.com/keegancolaco201",
      ariaLabel: "Connect with me on Calendly:Schedule a meeting",
      icon:SiCalendly ,
    },
  ],
    
  footerText: `© ${new Date().getFullYear()} Keegan Colaco. All rights reserved.`,
};
