import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/Themecontext";

const Contact = () => {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        document.title = `Contact Page`;
    }, []);

    const themeClass = theme === "light" ? "bg-white text-dark" : "bg-dark text-white border-secondary";

    return (
        <div className={`container mt-5`}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    
                    {/* Main Card */}
                    <div className={`card shadow-lg ${themeClass}`}>
                        <div className="card-header bg-primary text-white p-4">
                            <h2 className="mb-0">Contact Us</h2>
                            <p className="mb-0 opacity-75">We'd love to hear from you!</p>
                        </div>

                        <div className="card-body p-5">
                            <div className="row">
                                {/* Contact Details */}
                                <div className="col-md-6 mb-4">
                                    <h5 className="fw-bold text-primary">Get in Touch</h5>
                                    <p>Reach out using the details below:</p>
                                    
                                    <ul className="list-unstyled mt-4">
                                        <li className="mb-3">
                                            <strong>Phone:</strong><br/>
                                            <span className="opacity-75">+254 718 047 199</span>
                                        </li>
                                        <li className="mb-3">
                                            <strong>Email:</strong><br/>
                                            <span className="opacity-75">josekabz00@gmail.com</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Visual Decoration / Placeholder */}
                                <div className="col-md-6 d-flex align-items-center justify-content-center bg-secondary bg-opacity-10 rounded">
                                    <div className="text-center p-4">
                                        <h1 className="display-1">✉️</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;