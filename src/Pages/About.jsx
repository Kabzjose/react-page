import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/Themecontext";

const Posts = () => {
    const { theme } = useContext(ThemeContext);

    const [posts, setPosts] = useState([
        { id: 1, title: "First Post", likes: 45 },
        { id: 2, title: "Second Post", likes: 56 },
        { id: 3, title: "Third Post", likes: 5 }
    ]);

    useEffect(() => {
        document.title = `Posts - React Blog`;
    }, []);

    const like = (id) => {
        const updatedPosts = posts.map((post) =>
            post.id === id ? { ...post, likes: post.likes + 1 } : post
        );
        setPosts(updatedPosts);
    };

    return (
        <div className="container mt-5">
            {/* Dynamic Header Color */}
            <h1 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>Posts Page</h1>
            
            <div className="row">
                {posts.map((post) => (
                    <div className="col-md-4 mb-4" key={post.id}>
                        
                        {/* THE FIX IS HERE: Change Card Color based on Theme */}
                        <div className={`card shadow-sm h-100 ${theme === 'dark' ? 'bg-secondary text-white border-0' : ''}`}>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">Likes: {post.likes}</p>
                                <button
                                    className={`btn ${theme === 'dark' ? 'btn-light' : 'btn-primary'}`}
                                    onClick={() => like(post.id)}
                                >
                                    Like ❤️
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;