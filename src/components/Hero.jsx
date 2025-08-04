import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const Hero = () => {
  return (
    <div className="pb-12 -mt-10 border-b border-neutral-900 lg:mb-36">
        <div className="absolute w-96 h-96 bg-purple-600 blur-[120px] opacity-30 top-[-100px] left-[-100px] z-[-1]" />
      <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-start">
        {/* Text Section */}
        <div className="w-full px-6 lg:w-1/2 lg:px-0">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="mt-2 font-mono text-5xl tracking-tight text-center text-white lg:text-left lg:text-8xl"
            >
              Aryan Verma
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="mt-4 text-3xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
            >
              Frontend Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl mt-6 text-base font-light tracking-tight text-center text-neutral-300 lg:text-left"
            >
              Hi, I’m a dedicated Frontend Developer with a strong foundation in React.js, Tailwind CSS, and JavaScript. I specialize in crafting responsive, user-focused interfaces and building intuitive web experiences with clean, scalable code. Whether I’m designing dashboards, data visualizations, or interactive UI components, I focus on performance, accessibility, and modern best practices. I enjoy working on real-world problem-solving apps — from job trackers to pathfinding visualizers — and constantly push myself to learn and improve.
            </motion.p>
            <motion.a
  href="ARYAN_resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  variants={container(1.2)}
  initial="hidden"
  animate="visible"
  className="inline-block px-6 py-2 mt-4 text-sm font-medium text-purple-200 transition border border-purple-700 rounded hover:bg-purple-800 hover:text-white"
>
  View CV
</motion.a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full px-6 lg:w-1/2 lg:px-0">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center"
          >
            <img
              src={profilePic}
              alt="Aryan Verma"
             className="object-cover w-40 h-40 rounded-full shadow-lg sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
