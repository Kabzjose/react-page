import React, { useState, useEffect } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Home Page`;
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
        Welcome to the <span className="text-blue-500">Home Page</span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        This is a fully styled React application using Tailwind CSS. 
        Toggle the theme in the navbar to see the dark mode in action.
      </p>
      
      
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl max-w-sm mx-auto border border-gray-100 dark:border-gray-700">
        <p className="text-6xl font-bold mb-8 text-gray-800 dark:text-white">{count}</p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors shadow-lg shadow-red-500/30"
          >
            - 
          </button>
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors shadow-lg shadow-green-500/30"
          >
            + 
          </button>
        </div>
        <button 
          onClick={() => setCount(0)}
          className="mt-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm underline"
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
};

export default Home;