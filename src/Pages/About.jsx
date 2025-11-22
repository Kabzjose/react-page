import React,{useContext,useEffect} from "react";

import { ThemeContext } from "../context/Themecontext";


const About = () => {
    const {theme} = useContext(ThemeContext);   
    useEffect(() => {
        document.title = `About Page`;
    }
    ,[]);
    return (
        <div className={`navigation ${theme}`}> 
            <h1>About Page</h1>
            <p>A dedicated software company aimimg to deliver the best software solutions to to your company</p>
        </div>
    );
}
export default About;