import React,{useContext,useState,useEffect} from "react";

import { ThemeContext } from "../context/Themecontext";

const Contact = () => {
    const {theme} = useContext(ThemeContext);   
    useEffect(() => {
        document.title = `Contact Page`;
    }
    ,[]);
    return (
        <div className={`navigation ${theme}`}> 
            <h1>Contact Page</h1>
            <p>Contact us on :+254718047199 or email : josekabz00@gmail.com</p>
        </div>
    );
}
export default Contact;