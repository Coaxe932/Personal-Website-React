import React, { useState } from 'react';
import '../CSS/Blog.css';

const Blog = () => {
    const samplePosts = [
        { _id: '1', title: 'First Blog Post', content: 'This is the content of the first blog post.', date: new Date() },
        { _id: '2', title: 'Second Blog Post', content: 'Content for the second blog post goes here.', date: new Date() },
    ];

    const [posts] = useState(samplePosts);

    return (
        <div className="blog-container">
            <aside className="blog-sidebar">
                <nav>
                    <ul className='Blog-UL'>
                        {posts.map(post => (
                            <li key={post._id} className="Blog-Link"><a href={`#post-${post._id}`}>{post.title}</a></li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <main className="blog-main">
                {posts.map(post => (
                    <div key={post._id} className="blog-post" id={`post-${post._id}`}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <small>Posted on: {post.date.toLocaleDateString()}</small>
                        <button className="post-button" onClick={() => window.location.href = `#post-${post._id}`}>Go to Post {post.title}</button>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Blog;

