import React from 'react'
import chatty from "../assets/chatty.jpg";
import foodcart from "../assets/food-cart.png";
import moviefinder from "../assets/movie-finder.png";
import weather from "../assets/weather-finder.png";
import qrcode from "../assets/qr-code.png";
import currency from "../assets/currency-convetor.png";
import pics from "../assets/img.jpg";
import { motion } from "framer-motion";
import {fadeIn} from './variants.js';
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from 'react-type-animation';
import { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";
import {
  SiCloudinary,
  SiRapid,
  SiReact,
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
    descriptions: "Developed a real-time communication platform supporting seamless messaging between users.",
    image: chatty,
    github: "https://github.com/SSHariharan24/RealTime-Chat-App.git",
  },

  {
    id: 2,
    name: "CRUD Operation",
    descriptions: "Implemented a secure sign-in and sign-up system with role-based redirection for admin and users Enabled CRUD operations ",
    stack: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Tailwindcss", icon: <SiTailwindcss /> },
    ],
    // technologies: "MERN USING JWT AUTH AND SIGNIN,SIGNUP,FORGET AND RESETPASSWORD",
    image: pics,
    github: "https://github.com/SSHariharan24/Jwt-auth-and-validation-using-Mern.git",
  },
    
    {
      id: 3,
      name: "Food-Cart",
      descriptions: "Built a recipe search web app using React, enabling users to find and view recipes with detailed instructions and ingredients.",
      stack: [
        { name: "React.js", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "RapidApi", icon: <SiRapid /> },
        // { name: "MongoDB", icon: <SiMongodb /> },
        { name: "CSS", icon: <SiCss3 /> },
      ],
      // technologies: "REACT JS",
      image: foodcart,
      github: "https://github.com/SSHariharan24/Food-Cart.git",
    },
    {
      id: 4,
      name: "Movie-Finder",
      descriptions: "Developed a movie search web app using React, allowing users to discover movies with detailed information,Integrated API for real-time movie data and optimized user interaction.",
      stack: [
        { name: "React.js", icon: <SiReact /> },
        // { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "RapidApi", icon: <SiRapid /> },
        // { name: "MongoDB", icon: <SiMongodb /> },
        { name: "CSS", icon: <SiCss3 /> },
      ],
      // technologies: "REACT JS",
      image: moviefinder,
      github: "https://github.com/SSHariharan24/movie-finder.git",
    },
    {
      id: 5,
      name: "Weather-Finder",
      descriptions: "Developed a weather finder web app using React, allowing users to check real-time weather updates by searching for any location. Integrated weather APIs for accurate forecasts and presented data in an easy-to-read, interactive interface.",
      stack: [
        { name: "React.js", icon: <SiReact /> },
        // { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "RapidApi", icon: <SiRapid /> },
        // { name: "MongoDB", icon: <SiMongodb /> },
        { name: "CSS", icon: <SiCss3 /> },
      ],
      // technologies: "REACT JS",
      image: weather,
      github: "https://github.com/SSHariharan24/weather-finder.git",
    },
    {
      id: 6,
      name: "QR-Code Generator",
      descriptions: "Created a QR code scanner web app using React, enabling users to scan and decode QR codes directly from their devices. Integrated real-time scanning functionality and displayed decoded information in an intuitive interface.",
      stack: [
        { name: "React.js", icon: <SiReact /> },
        // { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "RapidApi", icon: <SiRapid /> },
        // { name: "MongoDB", icon: <SiMongodb /> },
        { name: "CSS", icon: <SiCss3 /> },
      ],
      // technologies: "REACT JS",
      image: qrcode,
      github: "https://github.com/SSHariharan24/QR-Code.git",
    },
    {
      id: 7,
      name: "Currency-Convetor",
      descriptions: "Built a currency converter web app using React, enabling users to convert between multiple currencies in real-time. Integrated currency exchange rate APIs for accurate conversions and provided a simple, user-friendly interface.",
      stack: [
        { name: "React.js", icon: <SiReact /> },
        // { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "RapidApi", icon: <SiRapid /> },
        // { name: "MongoDB", icon: <SiMongodb /> },
        { name: "CSS", icon: <SiCss3 /> },
      ],
      // technologies: "REACT JS",
      image: currency,
      github: "https://github.com/SSHariharan24/currency-convertor.git",
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
    <div className='home_data  text-white dark:bg-black dark:text-white text-center py-28' id="Projects">
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <motion.h2 
        variants={fadeIn("right",0.2)}
        initial={{opacity:0}}
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
        className='text-4xl font-bold text-center mb-12'> My Projects</motion.h2>
        <div 
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' data-aos="fade-left">
        {projects.map((project) => (
            <motion.div
            variants={fadeIn("right",0.2)}
    initial={{opacity:0}}
    whileInView={"show"}
    whileHover="newhover1"
    viewport={{once:false,amount:0.7}}
            key={project.id} className="dark:bg-gray-700 bg-gray-300 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-0 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl text-black dark:text-white font-bold mb-2">{project.name}</h3>
              <div className="flex flex-wrap gap-2 my-2">
              {project.stack.map((tech, idx) => (
                <motion.span
                  key={idx}
                  className="bg-white text-gray-700 text-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech.icon} {tech.name}
                </motion.span>
              ))}
            </div>
              <p className="text-black dark:text-white mb-4">{project.descriptions}</p>
              <div className="flex justify-center gap-4">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-br from-pink-500 to-orange-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-br from-gray-500 to-gray-700 text-white font-semibold rounded-lg hover:from-gray-600 hover:to-gray-800 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <FaGithub /> GitHub
              </motion.a>
              </div>
              
            </motion.div>
          ))}
        </div>
        </div>
        </div>
  )
}
