import chats from "../assets/chats.png";
import blog from "../assets/blog.png";
import foodcart from "../assets/foods.png";
import moviefinder from "../assets/movie-img.png";
import weather from "../assets/weather-finder.png";
import qrcode from "../assets/qr-code.png";
import currency from "../assets/currency-convetor.png";
import pics from "../assets/img.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "./variants.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";
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
    name: "Real Time Chat-App",
    stack: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "RapidApi", icon: <SiRapid /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Tailwindcss", icon: <SiTailwindcss /> },
      { name: "Cloudinary", icon: <SiCloudinary /> },
    ],
    // technologies: "MONGO-DB,EXPRESS-JS,REACT-JS,NODEJ-S,DAISY-UI,CLOUDINARY,SOCKET-IO",
    descriptions:
      "Developed a real-time communication platform supporting seamless messaging between users.",
    image: chats,
    link: "https://chatty-app-delta.vercel.app",
    github: "https://github.com/SSHariharan24/RealTime-Chat-App.git",
  },

  {
    id: 2,
    name: "CRUD Operation",
    descriptions:
      "Implemented a secure sign-in and sign-up system with role-based redirection for admin and users Enabled CRUD operations ",
    stack: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Tailwindcss", icon: <SiTailwindcss /> },
    ],
    // technologies: "MERN USING JWT AUTH AND SIGNIN,SIGNUP,FORGET AND RESETPASSWORD",
    image: pics,
    link: "https://mern-deploy-client-q86t.onrender.com",
    github:
      "https://github.com/SSHariharan24/Jwt-auth-and-validation-using-Mern.git",
  },

  {
    id: 3,
    name: "Food-Cart",
    descriptions:
      "Built a recipe search web app using React, enabling users to find and view recipes with detailed instructions and ingredients.",
    stack: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "RapidApi", icon: <SiRapid /> },
      // { name: "MongoDB", icon: <SiMongodb /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
    // technologies: "REACT JS",
    image: foodcart,
    link: "https://food-cart-seven-fawn.vercel.app/",
    github: "https://github.com/SSHariharan24/Food-Cart.git",
  },
  {
    id: 4,
    name: "Movie-Finder",
    descriptions:
      "Developed a movie search web app using React, allowing users to discover movies with detailed information,Integrated API for real-time movie data and optimized user interaction.",
    stack: [
      { name: "React.js", icon: <SiReact /> },
      // { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "TmdbApi", icon: <SiRapid /> },
      // { name: "MongoDB", icon: <SiMongodb /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
    // technologies: "REACT JS",
    image: moviefinder,
    link: "https://movie-app-new-wheat.vercel.app/",
    github: "https://github.com/SSHariharan24/Movie-App-New.git",
  },
  {
    id: 5,
    name: "Weather-Finder",
    descriptions:
      "Developed a weather finder web app using React, allowing users to check real-time weather updates by searching for any location. Integrated weather APIs for accurate forecasts and presented data in an easy-to-read, interactive interface.",
    stack: [
      { name: "React.js", icon: <SiReact /> },
      // { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "RapidApi", icon: <SiRapid /> },
      // { name: "MongoDB", icon: <SiMongodb /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
    // technologies: "REACT JS",
    image: weather,
    link: "https://sshariharan24.github.io/weather-finder/",
    github: "https://github.com/SSHariharan24/weather-finder.git",
  },
  {
    id: 6,
    name: "QR-Code Generator",
    descriptions:
      "Created a QR code scanner web app using React, enabling users to scan and decode QR codes directly from their devices. Integrated real-time scanning functionality and displayed decoded information in an intuitive interface.",
    stack: [
      { name: "React.js", icon: <SiReact /> },
      // { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "RapidApi", icon: <SiRapid /> },
      // { name: "MongoDB", icon: <SiMongodb /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
    // technologies: "REACT JS",
    image: qrcode,
    link: "https://sshariharan24.github.io/QR-Code/",
    github: "https://github.com/SSHariharan24/QR-Code.git",
  },
  {
    id: 7,
    name: "Currency-Convetor",
    descriptions:
      "Built a currency converter web app using React, enabling users to convert between multiple currencies in real-time. Integrated currency exchange rate APIs for accurate conversions and provided a simple, user-friendly interface.",
    stack: [
      { name: "React.js", icon: <SiReact /> },
      // { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "RapidApi", icon: <SiRapid /> },
      // { name: "MongoDB", icon: <SiMongodb /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
    // technologies: "REACT JS",
    image: currency,
    link: "https://sshariharan24.github.io/currency-convertor/",
    github: "https://github.com/SSHariharan24/currency-convertor.git",
  },
  {
    id: 8,
    name: "Blog-App",
    stack: [
      { name: "nuxt.js", icon: <SiNuxtdotjs /> },
      { name: "Tailwindcss", icon: <SiTailwindcss /> },
      { name: "Cloudinary", icon: <SiCloudinary /> },
    ],
    // technologies: "MONGO-DB,EXPRESS-JS,REACT-JS,NODEJ-S,DAISY-UI,CLOUDINARY,SOCKET-IO",
    descriptions:
      "A simple Nuxt.js Blog App to add, edit, delete, and list blog posts. Uses a local JSON file for data storage—no backend required. Built with Vue.js, HTML, CSS, and JavaScript to demonstrate CRUD operations in a fully frontend application.",
    image: blog,
    link: "https://blog-apps-d35q.onrender.com/",
    github: "https://github.com/SSHariharan24/Blog-Apps.git",
  },
];

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset in px before animation triggers
      easing: "ease-in-out", // Type of animation easing
      once: true, // Animation triggers only once per scroll
    });
  }, []);
  return (
    <div
      className="home_data text-white dark:bg-black dark:text-white text-center py-20"
      id="Projects"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial={{ opacity: 0 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white text-center mb-14"
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          data-aos="fade-left"
        >
          {projects.map((project) => (
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial={{ opacity: 0 }}
              whileInView={"show"}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: false, amount: 0.5 }}
              key={project.id}
              className="dark:bg-gray-800 bg-white border border-gray-200 dark:border-gray-700 
                     p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="rounded-xl mb-5 w-full h-52 object-cover shadow-sm"
              />

              {/* Project Title */}
              <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-3">
                {project.name}
              </h3>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-white 
                           text-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech.icon} {tech.name}
                  </motion.span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-6 line-clamp-4">
                {project.descriptions}
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-4 mt-auto">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold 
                         rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.07 }}
                >
                  <FaExternalLinkAlt /> Live Demo
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold 
                         rounded-lg hover:from-gray-700 hover:to-black transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.07 }}
                >
                  <FaGithub /> GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
