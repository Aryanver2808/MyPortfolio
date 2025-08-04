import React from 'react'
import { motion } from 'framer-motion'
const Resume = () => {
  return (
    <>
           <motion.a
      href="/ARYAN_resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.3
      }}
       className="inline-block px-6 py-3 mt-4 text-lg font-medium text-white transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-gray-800 via-purple-800 to-indigo-900 hover:shadow-xl hover:from-indigo-800 hover:to-purple-900"
    >
      View Resume
    </motion.a>


    </>
  )
}

export default Resume