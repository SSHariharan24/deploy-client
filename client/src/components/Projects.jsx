import React, { useEffect, useState } from "react";
import chats from "../assets/chats.png";
import blog from "../assets/blog.png";
import foodcart from "../assets/foods.png";
import moviefinder from "../assets/movie-img.png";
import weather from "../assets/weather-finder.png";
import qrcode from "../assets/qr-code.png";
import currency from "../assets/currency-convetor.png";
import pics from "../assets/img.jpg";
import imgs1 from "../assets/imgs1.png";
import imgs2 from "../assets/imgs2.png";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "./variants.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiCloudinary,
  SiRapid,
  SiReact,
  SiNuxtdotjs,
  SiNodedotjs,
  SiMongodb,
  SiBootstrap,
  SiCss3,
  SiTailwindcss,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    name: "Billing Invoice System",
    category: "Full-Stack",
    stack: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Tailwindcss", icon: <SiTailwindcss /> },
    ],
    descriptions: "Developed an enterprise billing application featuring dynamic invoicing calculations, secure client billing data persistence, and interactive report aggregates.",
    image: imgs1,
    hoverImage: imgs2,
    link: "",
    github: ""
  },
  {
    id: 2,
    name: "Real Time Chat-App",
    category: "Full-Stack",
    stack: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "RapidApi", icon: <SiRapid /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Tailwindcss", icon: <SiTailwindcss /> },
      { name: "Cloudinary", icon: <SiCloudinary /> },
    ],
    descriptions: "Developed a real-time communication platform supporting seamless messaging and image sharing.",
    image: chats,
    link: "https://chatty-app-delta.vercel.app",
    github: "https://github.com/SSHariharan24/RealTime-Chat-App.git",
  },
  {
    id: 3,
    name: "Secure CRUD with JWT",
    category: "Full-Stack",
    stack: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Tailwindcss", icon: <SiTailwindcss /> },
    ],
    descriptions: "Implemented secure user auth with role redirection, JWT verification, password reset, and full CRUD dashboard.",
    image: pics,
    link: "https://mern-deploy-client-q86t.onrender.com",
    github: "https://github.com/SSHariharan24/Jwt-auth-and-validation-using-Mern.git",
  },
  {
    id: 4,
    name: "Recipe Search Food-Cart",
    category: "Frontend",
    stack: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "RapidApi", icon: <SiRapid /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
    descriptions: "Built a food recipe discovery app displaying cooking instructions and ingredient cards via external APIs.",
    image: foodcart,
    link: "https://food-cart-seven-fawn.vercel.app/",
    github: "https://github.com/SSHariharan24/Food-Cart.git",
  },
  {
    id: 5,
    name: "Movie Finder Dashboard",
    category: "Frontend",
    stack: [
      { name: "React.js", icon: <SiReact /> },
      { name: "TMDB API", icon: <SiRapid /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
    descriptions: "Integrated TMDB database to discover and view detailed trending movies, ratings, and trailers dynamically.",
    image: moviefinder,
    link: "https://movie-app-new-wheat.vercel.app/",
    github: "https://github.com/SSHariharan24/Movie-App-New.git",
  },
  {
    id: 6,
    name: "Live Weather Tracker",
    category: "Frontend",
    stack: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Weather API", icon: <SiRapid /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
    descriptions: "Displays real-time weather stats, temperature forecast maps, and wind speed updates for searched locations.",
    image: weather,
    link: "https://sshariharan24.github.io/weather-finder/",
    github: "https://github.com/SSHariharan24/weather-finder.git",
  },
  {
    id: 7,
    name: "QR-Code Generator & Scanner",
    category: "Utility",
    stack: [
      { name: "React.js", icon: <SiReact /> },
      { name: "RapidApi", icon: <SiRapid /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
    descriptions: "Created scanner application utility allowing users to scan QR codes or download newly generated ones.",
    image: qrcode,
    link: "https://sshariharan24.github.io/QR-Code/",
    github: "https://github.com/SSHariharan24/QR-Code.git",
  },
  {
    id: 8,
    name: "Currency Converter Tool",
    category: "Utility",
    stack: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Exchange API", icon: <SiRapid /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
    descriptions: "Calculates exchange conversions in real-time using current international conversion rates.",
    image: currency,
    link: "https://sshariharan24.github.io/currency-convertor/",
    github: "https://github.com/SSHariharan24/currency-convertor.git",
  },
  {
    id: 9,
    name: "Nuxt.js Local Blog Engine",
    category: "Full-Stack",
    stack: [
      { name: "Nuxt.js", icon: <SiNuxtdotjs /> },
      { name: "Tailwindcss", icon: <SiTailwindcss /> },
      { name: "Cloudinary", icon: <SiCloudinary /> },
    ],
    descriptions: "A Vue/Nuxt.js blog setup utilizing local database configurations to create, list, edit, and filter articles.",
    image: blog,
    link: "https://blog-apps-d35q.onrender.com/",
    github: "https://github.com/SSHariharan24/Blog-Apps.git",
  },
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Full-Stack", "Frontend", "Utility"];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <div
      className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
      id="Projects"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Title */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My <span className="text-gradient-primary">Projects</span>
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border shadow-sm ${
                activeCategory === category
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-indigo-500/20 scale-105"
                  : "bg-white/50 dark:bg-slate-900/30 border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="glass-panel group rounded-3xl p-5 border border-slate-200/40 dark:border-slate-800/30 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-indigo-400/30 hover:-translate-y-1.5 shadow-md relative overflow-hidden"
              >
                <div>
                  {/* Project Image Panel */}
                  <div className="relative rounded-2xl overflow-hidden mb-5 aspect-video border border-slate-100 dark:border-slate-800/40">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
                      <span className="text-xs font-bold text-white tracking-wide uppercase">View Project Details</span>
                    </div>
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        project.hoverImage ? "group-hover:opacity-0" : "group-hover:scale-105"
                      }`}
                    />
                    {project.hoverImage && (
                      <img
                        src={project.hoverImage}
                        alt={`${project.name} Preview`}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                      />
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {project.name}
                  </h3>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-indigo-50/50 dark:bg-indigo-900/10 text-indigo-600 dark:text-indigo-400 text-[11px] font-bold px-2.5 py-1 rounded-xl flex items-center gap-1 border border-indigo-100/30 dark:border-indigo-950/20"
                      >
                        <span className="text-xs">{tech.icon}</span>
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-450 text-sm leading-relaxed mb-6">
                    {project.descriptions}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-900/50">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white text-sm font-semibold rounded-xl shadow-md transition-all duration-300 hover:scale-103 flex items-center justify-center gap-1.5"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:scale-103 flex items-center justify-center gap-1.5"
                    >
                      <FaGithub className="text-sm" /> GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
