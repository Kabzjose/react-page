import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/Themecontext";

const About = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "About Page";
  }, []);

  return (
    <div className={`container mt-4 text-${theme === "light" ? "dark" : "light"}`}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h1 className="card-title mb-3">About Us</h1>
          <p className="card-text fs-5">
            A dedicated software company aiming to deliver the best software solutions for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
