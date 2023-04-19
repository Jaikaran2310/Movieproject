import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './component/Footer';
import reportWebVitals from './reportWebVitals';
import Nav from './component/Navbar';
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Contact from './component/Contact';
import Home from './component/Home';
import About from './component/About';
import Error from './component/Error';
import Detail from './component/Detail';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <BrowserRouter>
  <Nav></Nav>
    <Routes>
    <Route path='/' element={  <Home />}/> 
    <Route path='/Home' element={<Home/>}/>     
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/detail/:id'element={<Detail/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>

 </>

);


reportWebVitals();
