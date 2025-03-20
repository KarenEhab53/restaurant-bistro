import React from "react";
import './sectionfive.css';
import img1 from '../../../assets/mid-shot-chef-holding-plate-with-pasta-making-ok-sign 1.png';
import img2 from '../../../assets/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food 1.png';
import img3 from '../../../assets/sadj-iron-pot-with-various-salads 1.png';
import { LuClock } from "react-icons/lu";
import { RiPriceTag2Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

const SectionFive = () => {
  return (
    <motion.div 
      className="section-five"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="photos"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={img1} alt="Food" />
        <div className="images">
          <img src={img2} alt="Dish 2" />
          <img src={img3} alt="Dish 3" />
        </div>
      </motion.div>

      <motion.div 
        className="data"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>Fastest Food <br/>Delivery in City</h2>
        <p>Our visual designer lets you quickly and of drag a down <br/> your way to customapps for both keep desktop.</p>
        <div className="info">
          <p><span><LuClock/></span>Delivery within 30 minutes</p>
          <p><span><RiPriceTag2Line/></span>Best Offer & Prices</p>
          <p><span><MdOutlineShoppingCart/></span>Online Services Available</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SectionFive;
