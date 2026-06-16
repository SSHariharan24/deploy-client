import React, { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

export const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="navbar fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl rounded-2xl glass-nav px-6 md:px-12 py-3 flex justify-between items-center z-50 shadow-lg border border-white/20 dark:border-white/10 transition-all duration-300"
      id="navbar"
    >
      {/* Brand Logo */}
      <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500 dark:from-indigo-400 dark:to-pink-400 tracking-tight">
        Hariharan
      </div>

      {/* Links for Desktop */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#Hero" className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
          Home
        </a>
        <a href="#About" className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
          About
        </a>
        <a href="#Service" className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
          Services
        </a>
        <a href="#Projects" className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
          Projects
        </a>
        <a href="#Contacts" className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
          Contact
        </a>
      </div>

      {/* Controls: Theme & Mobile Toggle */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/60 dark:hover:bg-slate-800 transition-all shadow-sm hover:scale-105 active:scale-95"
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <FaSun className="text-amber-500 text-lg animate-pulse" />
          ) : (
            <FaMoon className="text-indigo-600 text-lg" />
          )}
        </button>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[70px] left-0 w-full rounded-2xl glass-panel border border-white/20 dark:border-white/10 shadow-xl overflow-hidden transition-all duration-500 md:hidden ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-5 py-6 font-medium text-slate-700 dark:text-slate-200">
          <a
            href="#Hero"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-sm w-full text-center py-2"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#About"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-sm w-full text-center py-2"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#Service"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-sm w-full text-center py-2"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#Projects"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-sm w-full text-center py-2"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#Contacts"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-sm w-full text-center py-2"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
