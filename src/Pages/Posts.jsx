import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "The Future of React", body: "React continues to evolve with server components and improved rendering patterns.", likes: 45, category: "Tech" },
    { id: 2, title: "Mastering Tailwind CSS", body: "Utility-first CSS frameworks allow for rapid prototyping and consistent design systems.", likes: 56, category: "Design" },
    { id: 3, title: "State Management 101", body: "Understanding Context, Redux, and local state is crucial for complex apps.", likes: 5, category: "Coding" },
    { id: 4, title: "Why Dark Mode Matters", body: "Accessibility and user preference make dark mode a requirement for modern apps.", likes: 12, category: "UX" },
  ]);

  useEffect(() => {
    document.title = `Posts - React Blog`;
  }, []);

  const like = (id) => {
    const updatedPosts = posts.map((p) => {
      if (p.id === id) {
        return { ...p, likes: p.likes + 1 };
      }
      return p;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Latest Posts</h1>
        <p className="text-gray-600 dark:text-gray-400">Read our latest thoughts on technology and design.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 flex flex-col"
          >
            <div className="p-6 flex-1">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full mb-4">
                {post.category}
              </span>
              <h3 className="text-xl font-bold mb-3 leading-tight">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                {post.body}
              </p>
            </div>
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                ❤️ {post.likes} Likes
              </span>
              <button 
                onClick={() => like(post.id)}
                className="text-blue-500 hover:text-blue-600 font-semibold text-sm hover:underline"
              >
                Like Post
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;