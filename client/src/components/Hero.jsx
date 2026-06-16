import React, { useEffect } from "react";
import HeroImage from "../assets/hero-images.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "./variants.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineDownload } from "react-icons/ai";

export const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const config = {
    myname: "Hariharan",
    subtitle: "Full-Stack Developer",
    description: "I specialize in crafting high-performance, visually stunning MERN stack web applications with a focus on modern user experiences.",
    social: {
      github: "https://github.com/SSHariharan24",
      linkedin: "https://www.linkedin.com/in/hariharan-ss-525aa7329/",
    },
    resume: "https://drive.google.com/file/d/1SB34iI0oyTzd6vaEYUlbBXhygeMNcNwT/view?usp=drivesdk",
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
      id="Hero"
    >
      {/* Background Aurora Glows */}
      <div className="aurora-blur aurora-1"></div>
      <div className="aurora-blur aurora-2"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center space-y-6">
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold text-xs tracking-wider uppercase border border-indigo-500/20 w-fit"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>Available for Freelance & Full-time</span>
            </motion.div>

            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
            >
              Hey, I'm{" "}
              <span className="text-gradient-primary">
                {config.myname}
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-300">
                <TypeAnimation
                  sequence={[
                    "A Full-Stack Developer", 1800,
                    "A MERN Stack Specialist", 1800
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
            >
              {config.description}
            </motion.p>

            {/* CTA & Social Buttons */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4 items-center pt-2"
            >
              <a
                href={config.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-2xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                Hire Me
              </a>
              <a
                href={config.resume}
                download
                className="px-6 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <AiOutlineDownload className="text-xl" />
                Resume
              </a>

              {/* Social Icons */}
              <div className="flex items-center space-x-3 ml-2">
                <a
                  href={config.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <AiOutlineGithub className="text-xl" />
                </a>
                <a
                  href={config.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <AiOutlineLinkedin className="text-xl" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Image/Graphic Column */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
            >
              {/* Spinning/pulsing background glows */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>

              {/* Image Frame Container */}
              <div className="w-full h-full rounded-full p-2 border-2 border-dashed border-indigo-500/50 dark:border-indigo-400/40 relative animate-[spin_40s_linear_infinite]"></div>

              {/* Real Profile Image Overlay */}
              <img
                src={HeroImage}
                alt={config.myname}
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] rounded-full object-cover shadow-2xl border-4 border-white dark:border-slate-900"
              />

              {/* Floating Badge 1 - MERN */}
              <div className="absolute top-10 -left-6 bg-white dark:bg-slate-900 px-4 py-2 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center space-x-2 animate-float">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">MERN Developer</span>
              </div>

              {/* Floating Badge 2 - Experience */}
              <div className="absolute bottom-12 -right-6 bg-white dark:bg-slate-900 px-4 py-2 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center space-x-2 animate-float [animation-delay:2s]">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">FULL STACK DEVELOPER</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};
