import React from 'react';

const Contact = () => {
  return (
    <div className="pb-16 border-b border-neutral-900">
      <h2 className="my-10 text-4xl text-center">
        Get <span className="text-neutral-500">In Touch</span>
      </h2>

      <div className="flex flex-col items-center space-y-4 text-center text-neutral-300">
        <p className="text-lg">📍 Uttar Pradesh, India</p>

        <a
          href="mailto:aryanver2808@gmail.com"
          className="text-lg underline transition duration-300 decoration-neutral-500 hover:decoration-purple-500"
        >
          aryanver2808@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
