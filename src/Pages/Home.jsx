import React,{useContext,useState,useEffect} from "react";

import { ThemeContext } from "../context/Themecontext";

const Home = () => {
    const {theme} = useContext(ThemeContext);
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Home Page`;
    })
    return (
        <div className={`navigation ${theme}`}>
           
            <h1>Home Page</h1>
            <p>Welcome to the Home Page</p>
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
                <button onClick={() => setCount(count - 1)}>Decrement Count</button>
                <button onClick={() => setCount(0)}>Reset</button>
                
            
            </div>
        </div>

    );

}
export default Home;
