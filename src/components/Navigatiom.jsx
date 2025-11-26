import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/Themecontext";

const Navigation = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <nav className={`navigation ${theme}`}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                 <li><Link to="/about">Posts</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"} mode
            </button>
        </nav>

    );

}
export default Navigation;
