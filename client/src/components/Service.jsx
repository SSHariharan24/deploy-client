import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "./variants.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode, FaServer, FaLaptopCode } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <FaCode className="text-indigo-500 dark:text-indigo-400" />,
    description: "Building fast, interactive, and responsive user interfaces with modern React practices.",
    fullDescription:
      "I create clean, robust layouts using Tailwind CSS and React JS. Focused on performance, design accuracy, and smooth transitions, I ensure a premium feel across all client screens.",
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <FaServer className="text-pink-500 dark:text-pink-400" />,
    description: "Developing robust server-side logic, secure RESTful APIs, and efficient databases.",
    fullDescription:
      "Using Express JS, Node JS, and MongoDB/MySQL, I build scalable server architectures. I focus on API response optimization, secure database queries, and clean middleware configuration.",
  },
  {
    id: 3,
    title: "MERN Stack Solutions",
    icon: <FaLaptopCode className="text-emerald-500 dark:text-emerald-400" />,
    description: "Designing and integrating end-to-end full-stack applications from scratch.",
    fullDescription:
      "Combining both frontend and backend skills, I deliver complete MERN stack platforms. I manage the application state, configure CORS/security policies, and bundle standard deployment configurations.",
  },
];

export const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [activeServiceId, setActiveServiceId] = useState(null);

  const toggleReadMore = (id, e) => {
    e.preventDefault();
    setActiveServiceId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div
      className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
      id="Service"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Title */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My <span className="text-gradient-primary">Services</span>
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {services.map((service) => (
            <motion.div
              key={service.id}
              data-aos="fade-up"
              whileHover={{ y: -6 }}
              className="glass-panel p-8 rounded-3xl border border-slate-200/40 dark:border-slate-800/30 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-indigo-400/30 shadow-md group relative overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div>
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/5 dark:bg-indigo-400/5 flex items-center justify-center text-3xl mb-6 border border-indigo-500/10 dark:border-indigo-400/10 transition-colors duration-300 group-hover:bg-indigo-500/10 dark:group-hover:bg-indigo-400/10">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Detailed description using Framer Motion AnimatePresence */}
                <AnimatePresence>
                  {activeServiceId === service.id && (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-4 pt-4 border-t border-slate-200/40 dark:border-slate-800/30 text-xs sm:text-sm text-slate-500 dark:text-slate-450"
                    >
                      {service.fullDescription}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Read More link */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-900/60">
                <a
                  href="#Service"
                  onClick={(e) => toggleReadMore(service.id, e)}
                  className="inline-flex items-center text-sm font-bold text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                >
                  {activeServiceId === service.id ? "Read Less" : "Read More"}
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeServiceId === service.id ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
