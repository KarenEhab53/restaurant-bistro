import React from "react";
import './sectionthree.css'
import chef from '../../../assets/chef.png'
const SectionThree = () => {
  return (
    <div className="sectionthree">
        <div className="data">
            <h1>A little information for our valuable guest</h1>
            <p>At place, we believe that dining is not just about food, but also about the<br/> overall experience. Our staff, renowned for their warmth and dedication, <br/>strives to make every visit an unforgettable event.</p>
            <div className="buttons">
                <div className="single">
                <button><h1>3</h1><span>Locations</span></button>
                <button><h1>1995</h1><span>Founded</span></button>
                </div>
                <div className="single">
                <button><h1>65+</h1><span>Staff Members</span></button>
                <button><h1>100%</h1><span>Satisfied Customers</span></button>
                </div>
            </div>
        </div>
        <div className="image">
            <img src={chef} alt="" />
        </div>
    </div>
  )
};

export default SectionThree;
