import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    fullDescription:
      "Frontend Development focuses on building the user interface and experience using HTML, CSS, and JavaScript frameworks like React.",
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    fullDescription:
      "Backend Development handles server-side logic, databases, and API interactions using technologies like Node.js, Python, and databases like MongoDB.",
  },
  {
    id: 3,
    title: "MERN-Stack",
    description: "Combining both frontend and backend development skills.",
    fullDescription:
      "MERN stack uses MongoDB (database), Express.js (backend framework), React (frontend library), and Node.js (runtime) to build full-stack web applications. This stack is efficient for building modern, scalable apps.",
  },
];

export const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset in px before animation triggers
      easing: "ease-in-out", // Type of animation easing
      once: true, // Animation triggers only once per scroll
    });
  }, []);
  const [activeServiceId, setActiveServiceId] = useState(null);

  const toggleReadMore = (id) => {
    setActiveServiceId((prevId) => (prevId === id ? null : id)); // Toggle open/close for the clicked service
  };

  return (
    <div
      className="dark:bg-black  dark:text-white text-center py-24"
      id="Service"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2
          data-aos="fade-down"
          variants={fadeIn("right", 0.2)}
          initial={{ opacity: 0 }}
          whileInView="show"
          exit="exit"
          viewport={{ once: false, amount: 0.7 }}
          className="text-4xl font-bold text-center mb-28"
        >
          My Services
        </motion.h2>
        <motion.div
          data-aos="fade-left"
          variants={fadeIn("right", 0.5)}
          initial={{ opacity: 0.5 }}
          whileInView="show"
          exit="exit"
          viewport={{ once: false, amount: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeIn("up", 0.5)}
              initial={{ opacity: 0 }}
              whileInView="show"
              whileHover={{ scale: 1.05 }}
              exit="exit"
              viewport={{ once: false, amount: 0.7 }}
              className={`dark:bg-gray-800 bg-white border border-gray-200 dark:border-gray-700 
                          px-8 py-10 rounded-2xl shadow-md hover:shadow-xl 
                          transition-all duration-300 flex flex-col justify-between ${
                            activeServiceId === service.id
                              ? "expanded"
                              : "collapsed"
                          }`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                {service.description}
                {activeServiceId === service.id && (
                  <span className="dark:text-gray-300">
                    {" "}
                    {service.fullDescription}
                  </span>
                )}
              </p>
              <a
                href="#Service"
                onClick={() => toggleReadMore(service.id)}
                className="mt-6 inline-block text-green-500 hover:text-blue-500 font-semibold transition-colors duration-200"
              >
                {activeServiceId === service.id ? "Read Less" : "Read More"}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
