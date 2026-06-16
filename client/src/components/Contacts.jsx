import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaCopy, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "./variants.js";
import AOS from "aos";
import "aos/dist/aos.css";

export const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedText, setCopiedText] = useState(""); // Tracks which item was copied

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";
      const response = await axios.post(`${apiUrl}/api/sendEmail`, formData);

      if (response.status === 200) {
        setStatusMessage("Message sent successfully!");
        setStatusType("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage("Failed to send the message.");
        setStatusType("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("An error occurred. Please try again later.");
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
      id="Contacts"
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
            Contact <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Information cards */}
          <div
            data-aos="fade-right"
            className="lg:col-span-5 flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
                Let's Build Something Together
              </h3>
              <p className="text-slate-600 dark:text-slate-450 leading-relaxed text-sm sm:text-base">
                I'm open to discussing web development projects, internship opportunities, or full-time roles. Get in touch directly or use the form to drop a line!
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4 pt-4">
              
              {/* Email Card */}
              <div className="glass-panel p-4 rounded-2xl border border-slate-200/40 dark:border-slate-800/30 flex items-center justify-between shadow-sm relative group hover:border-indigo-400/30 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/5 dark:bg-indigo-400/5 border border-indigo-500/10 dark:border-indigo-400/10 flex items-center justify-center text-xl text-indigo-500 dark:text-indigo-400">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Email Address</span>
                    <a href="mailto:sshariharan24@gmail.com" className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                      sshariharan24@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard("sshariharan24@gmail.com", "email")}
                  className="w-9 h-9 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-all active:scale-90"
                  aria-label="Copy email"
                >
                  {copiedText === "email" ? <FaCheck className="text-emerald-500 text-sm" /> : <FaCopy className="text-sm" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="glass-panel p-4 rounded-2xl border border-slate-200/40 dark:border-slate-800/30 flex items-center justify-between shadow-sm relative group hover:border-indigo-400/30 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-xl bg-pink-500/5 dark:bg-pink-400/5 border border-pink-500/10 dark:border-pink-400/10 flex items-center justify-center text-xl text-pink-500 dark:text-pink-400">
                    <FaPhone />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Phone Number</span>
                    <a href="tel:+918870038771" className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
                      +91 88700 38771
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard("+918870038771", "phone")}
                  className="w-9 h-9 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-all active:scale-90"
                  aria-label="Copy phone number"
                >
                  {copiedText === "phone" ? <FaCheck className="text-emerald-500 text-sm" /> : <FaCopy className="text-sm" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="glass-panel p-4 rounded-2xl border border-slate-200/40 dark:border-slate-800/30 flex items-center justify-between shadow-sm relative group hover:border-indigo-400/30 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/5 dark:bg-emerald-400/5 border border-emerald-500/10 dark:border-emerald-400/10 flex items-center justify-center text-xl text-emerald-500 dark:text-emerald-400">
                    <FaMapMarkedAlt />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Location</span>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                      Madurai, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Contact Form panel */}
          <div
            data-aos="fade-left"
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/40 dark:border-slate-800/30 shadow-md space-y-5"
            >
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-900/60">
                Send a Message
              </h4>

              {statusMessage && (
                <div
                  className={`p-4 rounded-xl text-sm font-semibold border ${
                    statusType === "success"
                      ? "bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-950/30"
                      : "bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 border-red-100 dark:border-red-950/30"
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              {/* Name Field */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wide uppercase">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm bg-white/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400 text-slate-800 dark:text-slate-200 transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wide uppercase">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm bg-white/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400 text-slate-800 dark:text-slate-200 transition-all"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wide uppercase">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm bg-white/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400 text-slate-800 dark:text-slate-200 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/60 text-white font-semibold rounded-xl shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};
