import React from 'react'
import { motion } from "framer-motion";

import {fadeIn} from './variants.js'
const services = [
   
    {
      id: 1,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Developing robust server-side logic and databases.",
    },
    {
      id: 3,
      title: "Full-Stack Development",
      description: "Combining both frontend and backend development skills.",
    },
  ];


export const Service = () => {
  return (
    <div className='bg-black text-white py-20' id="Service">
    <div  className='container mx-auto px-8 md:px-16 lg:px-24'>
        <motion.h2
        variants={fadeIn("right",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
        className='text-4xl font-bold text-center mb-12'> My Services</motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map(service => (
              <motion.div 
              variants={fadeIn("right",0.2)}
        initial="hidden"
        whileInView={"show"}
        whileHover="newhover1"
        viewport={{once:false,amount:0.7}}
              key={service.id} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg 
              transform-transform duration-300 hover:scale-105'>

                {/* <div className='text-right text-2xl font-bold text-transparent bg-clip-text
                bg-gradient-to-r from-green-600 to-blue-400'>
                    {service.id}
                </div> */}
                
                <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500'>
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
              </motion.div>  
            ))}
        </div>
        </div>
        </div>
  )
}
