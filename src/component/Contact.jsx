import React, { useState } from "react";
import "./contact.css";
import contact from "./contact.png";

const Contact = () => {
  const [Name, setname] = useState("");
  const [Email, setemail] = useState("");
  const [Subject, setsubject] = useState("");
  const [Description, setdescription] = useState("");
  const [Data, setdata] = useState([]);
  const adddata = () => {
    setdata([...Data,{Name,Email,Subject,Description}])
  }
  console.log(adddata)
  

  return (
    <div>
      <section className="contact">
        <div className="contact-form">
          <h1>
            Contact <span>Us</span>
          </h1>

          <p>Any questions or remarks? Just write us a message!</p>
          <form action="">
            <input
              type=""
              value={Name}
              onChange={(event) => setname(event.target.value)}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              value={Email}
              onChange={(event) => setemail(event.target.value)}
              className="email"
              id=""
              placeholder="E-mail"
              required
            />
            <input type=""
            value={Subject}
            onChange={(event) => setsubject(event.target.value)}
             placeholder="Write a Subject" required />
            <textarea
              className=""
              value={Description}
              onChange={(event) => setdescription(event.target.value)}
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>
            <input type="Submit" value="submit" className="btn" />
          </form>
        </div>
        <div className="contact-img">
          <img src={contact} alt="pic" />
        </div>
      </section>
    </div>
  );
};

export default Contact;
