import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './component/Footer';
import reportWebVitals from './reportWebVitals';
import Heading from './component/Heading';
import Slider from './component/Slider';
import Nav from './component/Navbar';

import { Movie } from './Movie';
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Contact from './component/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
{/* <BrowserRouter>
  
   
  

 </BrowserRouter> */}
  <BrowserRouter>
  <Nav></Nav>
  <Heading />
    <Slider />
    <Routes>
      <Route path='/' element={  <Movie />}/> 
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>

 </>

);


reportWebVitals();
