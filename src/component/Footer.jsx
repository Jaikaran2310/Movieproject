import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <h3>Filmy World</h3>
          <p>
            <div>Useful Link</div>
            <li>
              <ul>
                <Link to="/Home">Home</Link>
              </ul>
              <ul>
                <Link to="/About">About</Link>
              </ul>
              <ul>
                <Link to="/Contact">Contact</Link>
              </ul>
            </li>
          </p>
        </div>

        <div className="footer-bottom">
          <p>copyright &copy;2021 </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
