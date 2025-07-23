import React from 'react';
import './footer.css';
import { PiBowlFoodBold } from 'react-icons/pi';
import img1 from '../../assets/pexels-steve-3789885 1.png'
import img2 from '../../assets/eiliv-aceron-d5PbKQJ0Lu8-unsplash 1.png'
import img3 from '../../assets/pexels-ella-olsson-1640772 1.png'
import img4 from '../../assets/pexels-ash-376464 1.png'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h1 ><span><PiBowlFoodBold/></span>Bistro Bliss</h1>
                    <p className="footer-description">
                    In the new era of technology we look a in the future with certainty and pride to for our company and.
                    </p>
                   <span className='icons'><BsTwitter/><BsFacebook/><BsInstagram/><BsGithub/></span>
                </div>

                <div className="footer-section">
                    <p className="footer-heading">Pages</p>
                    <ul className="footer-links">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Menu</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                        <li>Delivery</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <p className="footer-heading">Utility Pages</p>
                    <ul className="footer-links">
                        <li>Start Here</li>
                        <li>Styleguide</li>
                        <li>Password Protected</li>
                        <li>404 Not Found</li>
                        <li>Licenses</li>
                        <li>Changelog</li>
                        <li>View More</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <p className="footer-heading">Follow Us On Instagram</p>
                    <div className="footer-links">
                        <div className="img">
                            <img src={img1} alt="" />
                       <img src={img2} alt="" />
                        </div>
                       <div className="img">
                        <img src={img3} alt="" />
                       <img src={img4} alt="" />
                       </div>
                       
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <hr />
                <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
