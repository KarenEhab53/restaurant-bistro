import React from "react";
import './contact.css'
const Contact = () => {
  return (
    <div className="contactus">
        <h1>Contact Us</h1>
        <p>We consider all the drivers of change gives you the components<br/> you need to change to create a truly happens.</p>
        <form >
            <div className="inputs">
                <div className="input">
                    <label>Name</label>
                    <input type="text" name="name" required />
                </div>
                <div className="input">
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
            </div>
            <div className="input">
                <label htmlFor="subjec">Subject:</label>
                <input type="text" id="subject" name="subject" required />
            </div>
            <div className="input">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required />
            </div>
            <button type="submit">Submit</button>
        </form>
        <div className="info">
            <div className="data"><p>Call Us:</p><span>+1-234-567-8900</span></div>
            <div className="data"><p>Hours:</p>
            <p>Mon-Fri: 11am - 8pm<br/> Sat, Sun: 9am - 10pm</p></div>
            <div className="data"><p>Our Location:</p>
            <p>123 Bridge Street Nowhere Land,<br/> LA 12345 United States</p></div>
        </div>
    </div>
  )
};

export default Contact;
