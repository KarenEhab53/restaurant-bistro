import React, { useContext } from "react";
import "./sectionseven.css";
import { BlogContext } from "../../../context/BlogContext";
import { Link } from "react-router-dom";
import img from "../../../assets/kebab-set-table 1.png";

const SectionSeven = () => {
  const { blogs } = useContext(BlogContext);

  if (!blogs || blogs.length === 0) {
    return <div className="section-seven">Loading blogs...</div>;
  }

  const featuredBlog = blogs[0]; 
  const smallBlogs = blogs.slice(1, 5); 

  return (
    <div className="section-seven">
      <div className="header">
        <h1>Our Blog & Articles</h1>
        <Link to="/blogs">
          <button>Read All Articles</button>
        </Link>
      </div>

      <div className="blogs">
        {/* ✅ Featured Blog */}
        <div className="featured-blog">
          
          <div className="image">
            <img src={img} alt="Featured Blog" />
          </div>
          <div className="content">
            <div className="date">{featuredBlog.date || "Unknown Date"}</div>
            <h3>{featuredBlog.title || "No Title Available"}</h3>
            <p>
              {featuredBlog.description ||
                "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."}
            </p>
          </div>
        </div>

        {/* ✅ Small Blogs */}
        <div className="small-blogs">
          {smallBlogs.map((blog) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id} className="blog-link">
              <div className="small-blog">
                <div className="image">
                  <img src={img} alt="Blog" />
                </div>
                <div className="content">
                  <div className="date">{blog.date || "Unknown Date"}</div>
                  <h3>{blog.title || "No Title Available"}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
