import React ,{useState} from "react";
import logo from "./logo.png";
import "./About.css";

const About = () => {
  const [Read, setRead] = useState("Cinema is a major source of recreation in most countries of the world especially in India where the majority of people live below the poverty line. It provides us with entertainment and sometimes educates us too. Depending on the quality of films produced by the directors, one could label cinema as a curse or a boon.");

  function read() {
    return (
      setRead("Cinema is a major source of recreation in most countries of the world especially in India where the majority of people live below the poverty line. It provides us with entertainment and sometimes educates us too. Depending on the quality of films produced by the directors, one could label cinema as a curse or a boon. India is known to be the highest producer of movies in the world. Indian cinema provides us with a good view of the glamour and glitter of the affluent Indian society and also the poverty and misery in the slums of this country.Hence it, more or less, with a few exceptions, presents a fairly authentic picture of the lives of Indians. .")
      );
  }

  return (
    <div className="bg">
      <div className="heading">
        <h1>About <span className="us">Us</span></h1>
        </div>
      <section className="about-us">
        <img src={logo}  alt="logo"/>
        <div className="content">
          <h2>
            Filmy world provides you true review from user.
            As today's movies becomes the best source of entertainment... 
          </h2>
          <p>{Read}
           </p>
          <button className="read-me" onClick={read}>
            Read More
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
