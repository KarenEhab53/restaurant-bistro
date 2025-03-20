import React from "react";
import './book.css'
const Book = () => {
  return(
    <div className="booking">
        <h1>Book A Table</h1>
        <p>We consider all the drivers of change gives you the components<br/> you need to change to create a truly happens.</p>
        <form className="form">
            <div className="inputs">
                <div className="input">
                    <label for="date">Date:</label>
                    <input type="date" id="date" name="date"  required />
                </div>
                <div className="input">
                    <label for="time">Time:</label>
                    <input type="time" id="time" name="time" required />
                </div>
            </div>
            <div className="inputs">
                <div className="input">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
                </div>
                <div className="input">
                <label for="phone">Phone:</label>
                <input type="text" id="phone" name="phone" required />
    </div>
            </div>
            <div className="input">
                <label for="total">Total Person:</label>
                <input type="number" id="total" name="total" required />
            </div>
            <button>Book A Table</button>
            
        </form>
    </div>
  )
};

export default Book;
