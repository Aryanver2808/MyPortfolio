import React from 'react'
import profilePic from '../assets/profile.jpg';
import { delay, motion } from 'framer-motion';
const About = () => {
  return (
    <div className='border-b pb-15 border-b-neutral-900'>
        <h2 className='-mt-10 text-4xl text-center my-15'>About <span className='text-neutral-500'>Me</span></h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:pb-8'>
            <motion.div
            whileInView={{x:0,opacity:1}}
            initial={{opacity:0,x:100}}
            tranistion={{duration:0.5,delay:1}}
            className='flex justify-center text-center'> <img src={profilePic} className="object-cover w-40 h-40 rounded-2xl lg:w-76 lg:h-76"/>
            </motion.div>
            </div>
             <div className='w-full lg:w-1/2'>
            <div className='flex flex-col justify-center -ml-20 lg:justify-start'>
                <motion.p 
                 whileInView={{x:0,opacity:1}}
            initial={{opacity:0,x:100}}
            tranistion={{duration:0.5,delay:1.4}}
            className='max-w-xl py-1 my-0 '>I'm a <span className='text-purple-700'>Frontend Developer</span> specializing in building sleek, responsive web interfaces using React and modern JavaScript frameworks.
                 </motion.p>
                <motion.p 
                  whileInView={{x:0,opacity:1}}
            initial={{opacity:0,x:100}}
            tranistion={{duration:0.5,delay:1.8}}
                className='max-w-xl py-1 my-0'>
                  I craft accessible, performant, and visually polished UIs using tools like <span className='text-purple-700'>React.Js</span> <span className='text-purple-700'>Tailwind CSS</span> and <span className='text-purple-700'>Next.Js</span>. I’m passionate about writing clean, maintainable code and turning complex problems into intuitive designs.
                </motion.p>
                <motion.p
                 whileInView={{x:0,opacity:1}}
            initial={{opacity:0,x:100}}
            tranistion={{duration:0.5,delay:2.2}}
             className='max-w-xl py-1 my-0'>
                  I've built multiple web apps, including an <span className='text-purple-700'>AI-powered resume analyzer</span> and a <span className='text-purple-700'>pathfinding visualizer</span>. I've also contributed to open-source projects and enjoy bringing creative ideas to life on the web.
                </motion.p>
                <motion.p
                 whileInView={{x:0,opacity:1}}
            initial={{opacity:0,x:100}}
            tranistion={{duration:0.5,delay:2.6}}
                className='max-w-xl py-1 my-0'>
                   Currently exploring TypeScript and animations with Framer Motion. I'm driven to create user-focused products and grow as a <span className='text-purple-700'>Full-Stack Developer</span> in the future.
                </motion.p>
                <motion.p
               whileInView={{x:0,opacity:1}}
            initial={{opacity:0,x:100}}
            tranistion={{duration:0.5,delay:3}}
                className='max-w-xl py-1 my-0'>
                  Outside of coding, I enjoy designing icons, solving algorithm challenges, and watching tech YouTubers.
                </motion.p>
                
            </div>
            </div>
        </div>
    </div>
  )
}
export default About
