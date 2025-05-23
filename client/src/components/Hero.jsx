import React from 'react';
import HeroImage from '../assets/hero-images.jpg';
import { motion } from "framer-motion";
import { fadeIn } from './variants.js';
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineDownload } from "react-icons/ai";
import { useEffect } from "react";
export const Hero = () => {

  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        offset: 100, // Offset in px before animation triggers
        easing: "ease-in-out", // Type of animation easing
        once: true, // Animation triggers only once per scroll
    });
}, []);

const config = {
  myname:"Hariharan",
  subtitle: ', Full-Stack Developer',
  subtitle1:" I specialize in building modern and responsive web applications",
  social: {
      github: 'https://github.com/SSHariharan24',
      linkedin: 'https://www.linkedin.com/in/hariharan-ss-525aa7329/'
  },
  resume: 'https://drive.google.com/file/d/1SB34iI0oyTzd6vaEYUlbBXhygeMNcNwT/view?usp=drivesdk'
};

  return (
    <div className="dark:bg-black text-black  dark:text-white  text-center py-28" id="Hero">
      <motion.img
        variants={fadeIn("right", 0.2)}
        initial={{ opacity: 0 }}
        whileInView={"show"}
        whileHover="newhover"
        whileTap="tap"
        exit="exit"
        viewport={{ once: false, amount: 0.7 }}
        src={HeroImage}
        data-aos="fade-down"
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transition-transform duration-0 hover:scale-105"
      />
      <motion.h1

        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        whileTap="tap"
        exit="exit"
        viewport={{ once: false, amount: 0.7 }}
        className="text-4xl font-bold"
      >
        I'm {""}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        <TypeAnimation
                        sequence={[
                            config.myname,
                            130
                        ]}
                        wrapper="span"
                        speed={250}
                        cursor={true}
                        repeat={Infinity} // Ensures the animation restarts
                    />
        </span>
        <TypeAnimation
                        sequence={[
                          config.subtitle,
                            130
                        ]}
                        wrapper="span"
                        speed={250}
                        cursor={true}
                        repeat={Infinity} // Ensures the animation restarts
                    />
      </motion.h1>
      <motion.p
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        whileTap="tap"
        exit="exit"
        viewport={{ once: false, amount: 0.7 }}
        className="mt-4 text-lg text-black dark:text-gray-200"
      >
        {config.subtitle1}
      </motion.p>
      <motion.div
        // variants={fadeIn("right", 0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // whileTap="tap"
        // exit="exit"
        // viewport={{ once: false, amount: 0.7 }}
        className="mt-8 space-x-4"
      >
        <a
          href={config.social.linkedin}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          data-aos="zoom-in" data-aos-delay="500">
          
          Contact With Me
        </a>
        <a
          href={config.resume}
          download
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          data-aos="zoom-in" data-aos-delay="500">
            {/* <AiOutlineDownload className='mr-2' size={24} /> */}
          Resume
        </a>
      </motion.div>
    </div>
  );
};
