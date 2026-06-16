import React from "react";
import { FaLinkedinIn, FaGithub, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-12 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Top Panel: Brand & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 mb-8 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500 dark:from-indigo-400 dark:to-pink-400">
              Hariharan s s
            </h3>
            <p className="text-slate-550 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
              Full-Stack Developer specializing in crafting high-performance, responsive web applications using the MERN stack.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <form className="flex w-full max-w-md bg-white dark:bg-slate-950 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all">
              <input
                type="email"
                required
                placeholder="Subscribe to my newsletter"
                className="w-full bg-transparent px-4 py-2 text-sm focus:outline-none text-slate-800 dark:text-slate-200"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-md transition-all duration-300 shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Panel: Copyright, Links & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-slate-500 dark:text-slate-400 text-sm order-3 md:order-1">
            &copy; {new Date().getFullYear()} Hariharan SS. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 order-1 md:order-2">
            <a
              href="https://www.linkedin.com/in/hariharan-ss-525aa7329/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn className="text-sm" />
            </a>
            <a
              href="https://github.com/SSHariharan24"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 hover:scale-105"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-sm" />
            </a>
          </div>

          {/* ScrollToTop Button Alignment */}
          <div className="flex items-center order-2 md:order-3">
            {/* Floating/fixed Scroll to Top Button */}
            <motion.a
              href="#"
              onClick={scrollToTop}
              initial={{ y: 0 }}
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="fixed right-6 bottom-6 w-11 h-11 bg-indigo-600 hover:bg-indigo-550 text-white rounded-full shadow-lg hover:shadow-indigo-600/30 flex items-center justify-center text-base z-40 cursor-pointer"
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </motion.a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;