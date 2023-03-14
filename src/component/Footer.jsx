import React ,{useState} from "react";
import './App.css';
function Footer () {
const [num ,setnum]= useState(0);
 function inc(){
    setnum(num + 1);
 }
  
  function dec(){
    setnum(num - 1);
  } 
  return(
  <div className="usestate">
    <h1 className="heading">Page Number = {num}</h1>
      <button className="btn2" onClick={dec}>&#8592;</button>
      <button className="btn1" onClick={inc}>&#8594;</button>  
      <p className="p">  REGISTERED	&copy; </p>
    </div>
    );
  }

export default Footer;
