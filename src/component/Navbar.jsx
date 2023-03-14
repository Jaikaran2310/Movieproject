import React from 'react'
import './App.css';
import { Navbar } from 'flowbite-react';
import { NavLink,Link } from 'react-router-dom';
import Contact from './Contact';
const Nav= () => {
 return (
    <Navbar
  fluid={true}
  rounded={true}
>

  <div className="flex md:order-2">
    
  </div>
  <Navbar.Collapse>
    <NavLink > 
    <Link to='/Contact'> CONTACT</Link>
     </NavLink>
  
   
  </Navbar.Collapse>
</Navbar>
  );
}

export default Nav