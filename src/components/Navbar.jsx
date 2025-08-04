import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <>
    <nav className='flex items-center justify-between px-10 py-8 mb-20'>
   <div className="flex items-center gap-1 text-3xl font-bold text-white">
      <motion.span
        animate={{
          y: [0, -5, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="inline-block"
      >
        A
      </motion.span>
       <motion.span
        animate={{
          y: [0, 5, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="inline-block"
      >
        V
      </motion.span>
    </div>
    <div className='flex items-center flex-shrink-0 gap-4'>
   
    <motion.a 
    whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
           href='https://github.com/Aryanver2808'
             ><img src='https://img.icons8.com/?size=96&id=AZOZNnY73haj&format=png' className='size-5'></img></motion.a>
    <motion.a
    whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
           href='https://www.instagram.com/__a.ryann?igsh=MXNzYWNkemV5ZzVoNA=='
    ><img src='https://www.freepnglogos.com/uploads/instagram-logo-png/white-instagram-logo-black-and-white-icon--14.png' className='size-5'></img></motion.a>
    <motion.a
        whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
           href='https://www.linkedin.com/in/aryan-verma-561456257/'
   > <img src='https://img.icons8.com/?size=96&id=13930&format=png' className='size-5' ></img></motion.a>
    </div>
    </nav>
    </>
  )
  
}

export default Navbar