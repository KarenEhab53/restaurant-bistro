import React from "react";
import './sectionfour.css';
import img1 from '../../../assets/kebab-set-table 1.png';
import img2 from '../../../assets/charming-female-blowing-candles-birthday-cake-after-making-her-wish-party 1.png';
import img3 from '../../../assets/happy-man-wife-sunny-day 1.png';
import img4 from '../../../assets/group-friends-eating-restaurant 1.png';
import { motion } from "framer-motion"; // ✅ Import Framer Motion

const SectionFour = () => {
    return (
        <motion.div 
            className="section-four"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1>We also offer unique <br /> services for your events</h1>
            <div className="cards">
                {[ 
                    { img: img1, title: "Caterings" },
                    { img: img2, title: "Birthdays" },
                    { img: img3, title: "Weddings" },
                    { img: img4, title: "Events" }
                ].map((item, index) => (
                    <motion.div 
                        key={index} 
                        className="card"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }} // Stagger effect
                    >
                        <img src={item.img} alt={item.title} />
                        <h4>{item.title}</h4>
                        <p>In the new era of technology we look <br/> in the future with certainty for life.</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default SectionFour;
