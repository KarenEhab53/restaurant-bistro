import React, { useState } from "react";
import img1 from '../../../assets/Ellipse 19.png'
import img2 from '../../../assets/Image (1).png'
import './sectionsix.css'
const SectionSix = () => {
    
        const [review,setreview]=useState([
          {
            "title": "The best restaurant",
            "review": "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
            "author": {
              "name": "Sophie Robson",
              "location": "Los Angeles, CA"
            }
          },
          {
            "title": "Simply delicious",
            "review": "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
            "author": {
              "name": "Matt Cannon",
              "location": "San Diego, CA"
            }
          },
          {
            "title": "One of a kind restaurant",
            "review": "The culinary experience at place is first to none. The atmosphere is vibrant, the food – nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
            "author": {
              "name": "Andy Smith",
              "location": "San Francisco, CA"
            }
          }

    ])
    return (
        <div className="section-six">
            <h1>What Our Customers Say</h1>
            <div className="cards">
              {
                review.map((item,index) => (
                  <div className="card" key={index}>
                    <div className="review">
                        <h3>"{item.title}"</h3>
                      <p>{item.review}</p>
                    </div>
                    <div className="line"></div>
                    <div className="customer">
                      <img src={img1} alt="" />
                      <div>
                        <h5>{item.author.name}</h5>
                        <p>{item.author.location}</p>
                      </div>
                    </div>
                  </div>
                ))

                
              }
            </div>
        </div>
    )
};

export default SectionSix;
