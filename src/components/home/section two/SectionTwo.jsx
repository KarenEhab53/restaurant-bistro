import React from "react";
import { BsCupHot } from "react-icons/bs";
import { LuCakeSlice } from "react-icons/lu";
import { PiBowlFoodLight } from "react-icons/pi";
import { RiDrinksFill } from "react-icons/ri";
import './sectiontwo.css';
import { motion } from "framer-motion"; // ✅ Import Framer Motion

const SectionTwo = () => {
  return (
    <motion.div className="section-two" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1>Browse Our Menu</h1>
      <div className="cards">
        {[ 
          { icon: <BsCupHot/>, title: "Breakfast" },
          { icon: <PiBowlFoodLight/>, title: "Main Dishes" },
          { icon: <RiDrinksFill/>, title: "Drinks" },
          { icon: <LuCakeSlice/>, title: "Desserts" }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            className="card"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }} // Stagger effect
          >
            <span>{item.icon}</span>
            <h4>{item.title}</h4>
            <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Explore Menu</motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SectionTwo;