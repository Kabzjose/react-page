import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = `Contact Page`;
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl text-center border border-gray-100 dark:border-gray-700">
        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
          📞
        </div>
        <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          We are always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
        
        <div className="space-y-4 text-left max-w-sm mx-auto">
          <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <span className="text-xl">📱</span>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">Phone</p>
              <p className="font-medium">+254 718 047 199</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <span className="text-xl">📧</span>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">Email</p>
              <p className="font-medium">josekabz00@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;