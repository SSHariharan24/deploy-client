import React, { useEffect } from "react";
import AboutImage from "../assets/hari.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "./variants.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaNetworkWired, FaRobot } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiGraphql,
  SiSocketdotio,
  SiJenkins,
  SiJira,
  SiGithub,
} from "react-icons/si";

export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const skills = [
    { name: "React JS", icon: <SiReact className="text-sky-400" />, level: "90%" },
    { name: "Node & Express", icon: <SiNodedotjs className="text-green-500" />, level: "75%" },
    { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" />, level: "80%" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: "80%" },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-600" />, level: "75%" },
    { name: "Socket.io", icon: <SiSocketdotio className="text-slate-500 dark:text-slate-300" />, level: "75%" },
    { name: "InversifyJS", icon: <FaNetworkWired className="text-indigo-400" />, level: "70%" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: "80%" },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" />, level: "80%" },
    { name: "HTML & CSS", icon: <SiHtml5 className="text-orange-500" />, level: "85%" },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: "85%" },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" />, level: "80%" },
  ];

  const tools = [
    { name: "Jenkins", icon: <SiJenkins className="text-orange-500" />, level: "70%" },
    { name: "Jira", icon: <SiJira className="text-blue-500" />, level: "80%" },
    { name: "GitHub", icon: <SiGithub className="text-slate-800 dark:text-white" />, level: "90%" },
    { name: "Antigravity", icon: <FaRobot className="text-violet-500 dark:text-violet-400 animate-pulse" />, level: "95%" },
  ];

  return (
    <div
      className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
      id="About"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Title */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Box 1: Bio (Spans 2 columns on desktop) */}
          <div
            data-aos="fade-right"
            className="md:col-span-2 bento-card flex flex-col sm:flex-row items-center gap-8"
          >
            {/* Image container */}
            <div className="relative w-40 h-48 sm:w-48 sm:h-56 shrink-0 rounded-2xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                src={AboutImage}
                alt="Hariharan Profile"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                Crafting High-Performance Digital Solutions
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                I am a dedicated full-stack developer specializing in the MERN Stack. 
                My focus lies in building clean, scalable APIs and modern, highly interactive frontends. 
                I strive to transform complex logic into intuitive and beautifully designed user experiences.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40">Full-Stack Development</span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900/40">Clean Code architecture</span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40">Responsive UI</span>
              </div>
            </div>
          </div>

          {/* Box 2: Stats (Spans 1 column on desktop) */}
          <div
            data-aos="fade-left"
            className="bento-card flex flex-col justify-center space-y-6 text-center"
          >
            {/* Stat Item 1 */}
            <div className="space-y-2">
              <h4 className="text-5xl font-black text-indigo-500 dark:text-indigo-400 tracking-tight">
                6+
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm font-semibold tracking-wide uppercase">
                Months Work Experience
              </p>
            </div>
            
            <hr className="border-slate-200 dark:border-slate-800/80 w-1/2 mx-auto" />

            {/* Stat Item 2 */}
            <div className="space-y-2">
              <h4 className="text-5xl font-black text-pink-500 dark:text-pink-400 tracking-tight">
                10+
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm font-semibold tracking-wide uppercase">
                Projects Completed
              </p>
            </div>
          </div>

          {/* Box 3: Skills & Tools (Spans all 3 columns on desktop) */}
          <div
            data-aos="fade-up"
            className="md:col-span-3 bento-card space-y-8"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                Technical Expertise
              </h3>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Hover for proficiency level</span>
            </div>

            {/* Core Development Grid */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                Languages & Frameworks
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/20 border border-slate-200/40 dark:border-slate-800/30 flex flex-col items-center justify-center text-center space-y-3 transition-all duration-300 hover:scale-105 hover:border-indigo-400/30 hover:bg-white dark:hover:bg-slate-900/60 shadow-sm group"
                  >
                    <div className="text-3xl transition-transform duration-300 group-hover:-translate-y-1">
                      {skill.icon}
                    </div>
                    <div className="space-y-1 w-full">
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-200 block truncate">
                        {skill.name}
                      </span>
                      {/* Tiny visual progress indicator */}
                      <div className="w-12 h-1 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms Grid */}
            <div className="space-y-4 pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
              <h4 className="text-sm font-bold uppercase tracking-wider text-pink-500 dark:text-pink-400">
                Tools & Platforms
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/20 border border-slate-200/40 dark:border-slate-800/30 flex flex-col items-center justify-center text-center space-y-3 transition-all duration-300 hover:scale-105 hover:border-pink-400/30 hover:bg-white dark:hover:bg-slate-900/60 shadow-sm group"
                  >
                    <div className="text-3xl transition-transform duration-300 group-hover:-translate-y-1">
                      {tool.icon}
                    </div>
                    <div className="space-y-1 w-full">
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-200 block truncate">
                        {tool.name}
                      </span>
                      {/* Tiny visual progress indicator */}
                      <div className="w-12 h-1 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full"
                          style={{ width: tool.level }}
                        ></div>
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {tool.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
