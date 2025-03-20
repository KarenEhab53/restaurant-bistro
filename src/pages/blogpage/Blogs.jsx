import React, { useContext, useEffect } from "react";
import "./blog.css";
import { BlogContext } from "../../context/BlogContext";
import { Link } from "react-router-dom";
import img from '../../assets/eiliv-aceron-d5PbKQJ0Lu8-unsplash 1.png'
const Blogs = () => {
  const { blogs, fetchBlogs } = useContext(BlogContext);

  useEffect(() => {
    fetchBlogs(); // Fetch blogs when the component mounts
  }, []);

  return (
    <div className="blogs-container">
      <h1>Our Blog & Articles</h1>
      <p>
        We consider all the drivers of change to give you the components you need <br />
        to create a truly transformative experience.
      </p>

      <div className="blogs-list">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id} className="blog-link">
              <div className="blog">
                <img src={img} alt={blog.title} className="blog-image" />
                <div className="content">
                  <p className="blog-date">{blog.date}</p>
                  <h3 className="blog-title">{blog.title}</h3>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading blogs...</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
