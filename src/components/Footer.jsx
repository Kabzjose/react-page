import React, { useContext } from "react";
import { ThemeContext } from "../context/Themecontext";

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    
    // Logic to switch footer colors based on theme
    const footerClass = theme === "light" ? "bg-light text-dark" : "bg-dark text-white";

    return (
        // Added 'mt-auto' to push footer to bottom if using flex column layout
        <footer className={`py-4 text-center mt-auto border-top ${footerClass}`}>
            <div className="container">
                <p className="mb-0">&copy; 2024 React Blog. All rights reserved.</p>
            </div>
            {/* The 'x' was removed here */}
        </footer>
    );
}
export default Footer;