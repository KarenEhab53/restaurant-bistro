import React, { useState } from "react";
import './mainNav.css'
import { PiBowlFood } from "react-icons/pi";
import { MdOutlineRestaurant } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link, Links } from "react-router-dom";
const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [visible, setVisible] = useState(false);
  const closeSidebar = () => {
    setVisible(false);
  };
  const toggleSidebar = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="navbar-container">
      <div className="logo">
        <span><PiBowlFood /></span>
        <p>Bistro Bless</p>
      </div>
      <div className="data">
        <button className="click" onClick={toggleSidebar}>{visible ?<IoClose/>:<MdOutlineRestaurant />}</button>
        <div className={`sidebar-container ${visible ? "show" : ""}`}>
          <div className="link">
            <Link to="/"><button className={active === "home" ? "active" : ""} onClick={() => { setActive("home"); closeSidebar() }}>Home</button></Link>
            <Link to="/menu"><button className={active === "menu" ? "active" : ""} onClick={() => { setActive("menu"); closeSidebar() }}>Menu</button></Link>
            <Link to="/blogs"><button className={active === "Blogs" ? "active" : ""} onClick={() => { setActive("Blogs"); closeSidebar() }}>Blogs</button></Link>
            <Link to="/about"><button className={active === "about" ? "active" : ""} onClick={() => { setActive("about"); closeSidebar() }}>About</button></Link>
            <Link to="/contact"><button className={active === "contact" ? "active" : ""} onClick={() => { setActive("contact"); closeSidebar() }}>Contact</button></Link>

          </div>
          <div className="book"><Link to='/book'><button>Book A Table</button></Link></div>

        </div>
      </div>
    </div>
  )
};

export default MainNavbar;
