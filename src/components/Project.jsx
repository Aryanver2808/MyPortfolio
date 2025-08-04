import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Project = () => {
  const [project1] = useState(['React', 'Tailwind CSS', 'BFS', 'JavaScript']);
  const [project2] = useState(['React', 'Tailwind CSS', 'Fetch - API']);
  const [project3] = useState(['React', 'Tailwind CSS', 'React Router', 'Fetch - API']);

  const Button = ({ href, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-1 mt-3 mr-3 text-sm font-medium text-purple-200 transition border border-purple-800 rounded hover:bg-purple-800 hover:text-white"
    >
      {label}
    </a>
  );

  return (
    <div className="pb-16 border-b border-neutral-800">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center"
      >
        Projects
      </motion.h2>

      {/* Project 1 */}
      <div className="flex flex-wrap mb-16 lg:justify-center">
        <div className="flex justify-center w-full lg:w-1/4">
          <motion.img
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            src="https://img.icons8.com/?size=96&id=34SZF5Jbih3I&format=png"
            alt="Shortest Path Visualizer"
            className="mb-6 rounded h-25 w-25"
          />
        </div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-2 text-xl font-semibold">Shortest Path Visualizer</h6>
          <p className="mb-4 text-neutral-400">
            See a full-fledged React-based visualizer in action. It lets you move nodes, draw walls, and animate multiple algorithms.
          </p>
          {project1.map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 mb-2 mr-2 text-sm font-medium text-purple-800 rounded bg-neutral-900"
            >
              {tech}
            </span>
          ))}
          <div className="mt-2">
            <Button href="https://github.com/Aryanver2808/PATH--FINDER" label="GitHub" />
            <Button href="https://path-finder-rust.vercel.app" label="Live Demo" />
          </div>
        </motion.div>
      </div>

      {/* Project 2 */}
      <div className="flex flex-wrap mb-16 lg:justify-center">
        <div className="flex justify-center w-full lg:w-1/4">
          <motion.img
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            src="https://img.icons8.com/?size=160&id=115635&format=png"
            alt="AI Resume Analyzer"
            className="mb-6 rounded w-25 h-25"
          />
        </div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-2 text-xl font-semibold">AI Resume Analyzer</h6>
          <p className="mb-4 text-neutral-400">
            An intelligent tool that scans your resume using AI to suggest improvements based on job descriptions.
          </p>
          {project2.map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 mb-2 mr-2 text-sm font-medium text-purple-800 rounded bg-neutral-900"
            >
              {tech}
            </span>
          ))}
          <div className="mt-2">
            <Button href="https://github.com/Aryanver2808/ResumeAnalyzerwithAI" label="GitHub" />
            <Button href="https://resume-analyzerwith-ai.vercel.app" label="Live Demo" />
          </div>
        </motion.div>
      </div>

      {/* Project 3 */}
      <div className="flex flex-wrap mb-8 lg:justify-center">
        <div className="flex justify-center w-full lg:w-1/4">
          <motion.img
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            src="https://img.icons8.com/?size=96&id=RWH5eUW9Vr7f&format=png"
            alt="School Management System"
            className="mb-6 rounded w-25 h-25"
          />
        </div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-2 text-xl font-semibold">School Management System</h6>
          <p className="mb-4 text-neutral-400">
            A centralized platform to manage student records, attendance, classes, exams, and teacher workflows.
          </p>
          {project3.map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 mb-2 mr-2 text-sm font-medium text-purple-800 rounded bg-neutral-900"
            >
              {tech}
            </span>
          ))}
          <div className="mt-2">
            <Button href="https://github.com/yourusername/school-management" label="GitHub" />
            <Button href="https://school-manager.vercel.app" label="Live Demo" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
