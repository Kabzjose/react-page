import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = `About Page`;
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
           
           <div className="w-full h-64 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center text-white text-4xl font-bold opacity-90">
             About Us
           </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-6 relative">
            Who We Are
            <span className="block h-1 w-20 bg-blue-500 mt-2"></span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
            A dedicated software company aiming to deliver the best software solutions to your company. We specialize in building scalable, modern web applications that drive growth.
          </p>
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/30">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;