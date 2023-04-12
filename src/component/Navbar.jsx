import React from "react";
import "./App.css";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from './logo.png'
const Nav = () => {
  return (
    <>
      <nav>
        <li className="liststyle">
          <ul className="Nav">
            <NavLink>
              <Link to="/Home">
                <img className="logo"
                  src={logo}
                  alt="F"
                />
              </Link>
            </NavLink>
          </ul>
          <ul className="Nav">
            <NavLink>
              <Link to="/Home"> HOME</Link>
            </NavLink>
          </ul>

          <ul className="Nav">
            <NavLink>
              <Link to="/About"> ABOUT US</Link>
            </NavLink>
          </ul>
          <ul className="Nav">
            <NavLink>
              <Link to="/Contact"> CONTACT US</Link>
            </NavLink>
          </ul>
        </li>
      </nav>
    </>
  );
};

export default Nav;
