import React from "react";
import "./sectiontwo.css";
import myvideo from "../../../assets/3769033-hd_1280_720_25fps.mp4";
import { SiOpenmediavault } from "react-icons/si";
import { TfiVideoClapper } from "react-icons/tfi";
import { RiAlarmWarningLine } from "react-icons/ri";

const SectionTwo = () => {
  return (
    <div className="sectiontwo">
      <div className="video-container">
        <div className="overlay"></div> {/* Background overlay */}
        <video autoPlay loop muted>
          <source src={myvideo} type="video/mp4" />
        </video>
        <h1>Feel the authentic & <br /> original taste from us</h1>
      </div>
      <div className="cards">
        <div className="card">
            <span className="icon"><SiOpenmediavault/></span>
            <div className="data">
                <h4>Multi Cuisine</h4>
                <p>In the new era of technology we look in the future with certainty life.</p>
            </div>
        </div>
        <div className="card">
            <span className="icon"><TfiVideoClapper/></span>
            <div className="data">
                <h4>Easy To Order</h4>
                <p>In the new era of technology we look in the future with certainty life.</p>
            </div>
        </div>
        <div className="card">
            <span className="icon"><RiAlarmWarningLine/></span>
            <div className="data">
                <h4>Fast Delivery</h4>
                <p>In the new era of technology we look in the future with certainty life.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
