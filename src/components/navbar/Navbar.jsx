import React from "react";
import './navcss.css'
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
const NavBar = () => {
  return (
    <div className="contact-info">
    <div className="contact">
    <p><MdOutlineCall/><span>(414) 857 - 0107</span></p>
    <p><MdOutlineEmail/><span>yummy@bistrobliss</span></p>
    </div>
     <div className="social-media">
    <button><FaTwitter/></button>
    <button><FaFacebook/></button>
    <button><FaInstagram/></button>
    <button><FaGithub/></button>
    </div>
        </div>
  )
};

export default NavBar;
