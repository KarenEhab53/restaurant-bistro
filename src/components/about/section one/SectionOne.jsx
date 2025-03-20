import React from "react";
import './SectionOne.css'
import food from '../../../assets/food.png'
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
const SectionOne = () => {
  return(
    <div className="section-three">
        <div className="photo">
            <img src={food} alt="" />
            <div className="data">
                <h4>Come and visit us</h4>
                <p><span><MdOutlinePhoneEnabled/></span> (414) 857 - 0107</p>
                <p><span><CiMail/></span> happytumy@restaurant.com</p>
                <p><span><GrLocation/></span> 837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
            </div>
        </div>
        <div className="info">
    <h3>We provide healthy food for your family.</h3>
    <p>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
    <p className="text">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
        </div>
    </div>
      
  )
};

export default SectionOne;
