import React,{useContext,useEffect} from "react";

import { ThemeContext } from "../context/Themecontext";


const Footer = () => {
    const {theme} = useContext(ThemeContext);   
   
    return (
        <div className={`navigation ${theme}`}> 
            <footer>
                <p>© 2024 React Blog. All rights reserved.</p>
            </footer>
            x
        </div> 
    );
}
export default Footer;