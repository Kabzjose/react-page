import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/Themecontext";

const Home = () => {
    const { theme } = useContext(ThemeContext);
    const [count, setCount] = useState(0);

    useEffect(() => { document.title = `Home Page`; });

    return (
        <div className="container mt-5">
            <div className="text-center">
                {/* Dynamic Title Color */}
                <h1 className={`display-4 fw-bold ${theme === 'dark' ? '' : 'text-dark'}`}>Home Page</h1>
                <p className={`lead ${theme === 'dark' ? '' : 'text-muted'}`}>Welcome to the Home Page</p>
                
                {/* Dynamic Card Box */}
                <div className={`card d-inline-block p-5 mt-4 shadow-lg ${theme === 'dark' ? 'bg-secondary text-white border-0' : 'bg-white'}`}>
                    <p className="fs-1 fw-bold mb-4">{count}</p>
                    
                    <div className="d-flex gap-2 justify-content-center">
                        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
                        <button className="btn btn-warning" onClick={() => setCount(count - 1)}>Decrement</button>
                        <button className="btn btn-danger" onClick={() => setCount(0)}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;