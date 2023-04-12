import React from "react";
import "./contact.css";
import contact from "./contact.png";

const Contact = () => {
  return (
    <div>
      <section className="contact">
      <div className="contact-form">
        <h1>
          Contact <span>Us</span>
        </h1>

        <p>Any questions or remarks? Just write us a message!</p>
        <form action="">
          <input type="" placeholder="Your Name" required />
          <input
            type="email"
            className="email"
            id=""
            placeholder="E-mail"
            required
          />
          <input type="" placeholder="Write a Subject" required />
          <textarea
            className=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <input type="Submit"  value="submit" className="btn" />
        </form>
        </div>
        <div className="contact-img">
          <img src={contact} alt="pic"/>
        </div>
      
      </section>
    </div>
  );
};

export default Contact;
