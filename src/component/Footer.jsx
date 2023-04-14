import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <h3>
            Filmy<span>World</span>
          </h3>
          <p className="footer-link">
            <Link to="home">Home </Link>
            <Link to="about">  About Us</Link>
            <Link to="contact">   Contact Us</Link>
          </p>
           </div>
          {/* <p className="footer-company-name">
            Copyright &C 2023<strong>Filmy World</strong> All rights reserved
  </p>*/}

          <div className="footer-center">
             <p>
              <p className="location">Location</p>
               Chandigarh,(U.T)
                India
                <p>+91-7986388207</p>
              <p>Jaikaransingh2310@gmail.com</p>
              </p>
              
              
            </div>
            
           
            
            <div className="footer-right">    
            <p className="margin">       
              <span className="about">About the company</span>
              <p>Filmy World</p> provide you true Review from user.
              </p>         
          </div> 
       
      </footer>
    </>
  );
}

export default Footer;
