import React from "react";
import './sectionone.css';
import hero from '../../../assets/hero.png';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SectionOne = () => {
  return (
    <motion.div className="section-one" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <img src={hero} alt="" />
      <div className="data">
        <h1>Best food for <br/>your taste</h1>
        <p>Discover delectable cuisine and unforgettable moments <br/> in our welcoming, culinary haven.</p>
        <div className="buttons">
          <Link to='/book'>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Book A Table
            </motion.button>
          </Link>
          <Link to='/menu'>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Explore Menu
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionOne;
