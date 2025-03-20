import React from "react";
import './sectionthree.css';
import food from '../../../assets/Image.png';
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

const SectionThree = () => {
  return (
    <motion.div 
      className="section-three"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="photo"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={food} alt="Food" />
        <div className="data">
          <h4>Come and visit us</h4>
          <p><span><MdOutlinePhoneEnabled/></span> (414) 857 - 0107</p>
          <p><span><CiMail/></span> happytumy@restaurant.com</p>
          <p><span><GrLocation/></span> 837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
        </div>
      </motion.div>
      
      <motion.div 
        className="info"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3>We provide healthy food for your family.</h3>
        <p>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
        <p className="text">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>More About Us</motion.button>
      </motion.div>
    </motion.div>
  );
};

export default SectionThree;
