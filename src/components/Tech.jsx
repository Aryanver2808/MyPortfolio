import React from 'react'
import { motion } from 'framer-motion'
const Tech = () => {

    const techMotion=(duration)=>({
        initial:{y:[-10,10]},
        animate:{
            y:10,
            transition:{
                ease:"linear",
                duration:duration,
                repeat:Infinity,
                repeatType:"reverse",
            },
        },
    })
  return (
    <div className='pb-24 border-b border-b-neutral-800'>
        <motion.h2
        whileInView={{y:0,opacity:1}}
                   initial={{opacity:0,y:-100}}
                   tranistion={{duration:1.5}}
         className='my-20 text-4xl text-center'>Technologies
         </motion.h2>
         
        <motion.div
       whileInView={{x:0,opacity:1}}
                   initial={{opacity:0,x:-100}}
                   tranistion={{duration:0.5}}
        
        className='flex flex-wrap items-center justify-center gap-8'> 
            <motion.div 
            variants={techMotion(2.5)}
            initial="initial"
            animate="animate"
            
            className='p-1 border-4 rounded-2xl border-neutral-800'>
                <img src='https://img.icons8.com/?size=96&id=20909&format=png'/>
            </motion.div>
             <motion.div 
              variants={techMotion(4.5)}
            initial="initial"
            animate="animate"
             className='p-1 border-4 rounded-2xl border-neutral-800'>
                <img src='https://img.icons8.com/?size=96&id=13679&format=png'/>
            </motion.div>
             <motion.div
              variants={techMotion(2.0)}
            initial="initial"
            animate="animate"
             className='p-1 border-4 rounded-2xl border-neutral-800'>
                <img src='https://img.icons8.com/?size=96&id=4PiNHtUJVbLs&format=png'/>
            </motion.div>
             <motion.div
              variants={techMotion(10)}
            initial="initial"
            animate="animate"
             className='p-1 border-4 rounded-2xl border-neutral-800'>
                <img src='https://img.icons8.com/?size=96&id=108784&format=png'/>
            </motion.div>
             <motion.div
              variants={techMotion(4)}
            initial="initial"
            animate="animate"
            className='p-1 border-4 rounded-2xl border-neutral-800'>
                <img src='https://img.icons8.com/?size=160&id=asWSSTBrDlTW&format=png' className='size-25'/>
            </motion.div>
           
    
        </motion.div>
    </div>
  )
}

export default Tech