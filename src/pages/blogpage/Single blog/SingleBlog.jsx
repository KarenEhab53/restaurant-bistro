import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // ✅ Import Link
import "./singleblog.css";
import { BlogContext } from "../../../context/BlogContext";
import food from '../../../assets/food.png'
const SingleBlog = () => {
  const { blogs, fetchBlogs } = useContext(BlogContext);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  // Fetch blogs if not available
  useEffect(() => {
    if (blogs.length === 0) {
      fetchBlogs();
    }
  }, [blogs, fetchBlogs]);

  // Update blog when data is available
  useEffect(() => {
    const foundBlog = blogs.find((blog) => blog.id.toString() === id);
    if (foundBlog) {
      setBlog(foundBlog);
    }
  }, [blogs, id]);

  if (!blog) {
    return <h2>Loading blog...</h2>;
  }

  return (
    <div className="single-blog">
      <h1>{blog.title}</h1>
      <div className="blog">
        <img src={food} alt={blog.title} />
        <div className="data">
          <h2>{blog.title}</h2>
          <p className="blog-date">{blog.date}</p>
          <p className="blog-description">{blog.description}</p>
        </div>
      </div>

      {/* More Blogs Section */}
      <div className="more-blogs">
        <h2>Read More Articles</h2>
        <p>We consider all the drivers of change, giving you the components you need to create a truly great experience.</p>
        <div className="blogs">
        {blogs.length > 0 ? (
          blogs
            .filter((b) => b.id !== blog.id) // Exclude the current blog
            .slice(0, 4) // ✅ Show only 4 more blogs
            .map((blog) => (
              <Link to={`/blogs/${blog.id}`} key={blog.id} className="blog-link">
                <div className="blog">
                  <img src={food} alt={blog.title} className="blog-image" />
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
    </div>
  );
};

export default SingleBlog;
