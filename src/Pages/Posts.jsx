import React,{useContext,useState,useEffect} from "react";

import { ThemeContext } from "../context/Themecontext";

const Posts = () => {
    const {theme} = useContext(ThemeContext);
    const [posts, setPosts] = useState([
           {id: 1, title: "First Post",likes: 45},
           {id: 2, title: "Second Post",likes:56},
           {id: 3, title: "Third Post", likes:5}    ]);
    useEffect(() => {
        document.title = `Posts -React Blog`;
    }),[];

    const like = (id) => {
        const updatedPosts = posts.map(p => {
            if(p.id === id){
                return {...p, likes: p.likes + 1};
            }
            return p;
        });
        setPosts(updatedPosts);
    }
    return (
        <div className={`navigation ${theme}`}>
           
            <h1>Posts Page</h1>
            <p>Welcome to the Posts Page</p>
            <div>
                {posts.map(post => (
                    <div key={post.id} style={{marginBottom: "20px"}}>
                        <h3>{post.title}</h3>
                        <p>Likes: {post.likes}</p>
                        <button onClick={() => like(post.id)}>Like</button>
                    </div>
                ))}
            </div>
        </div>

    );

}
export default Posts;
