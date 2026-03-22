//import logo from './logo.svg';
import React from 'react';
import './App.css';
import'./images/Asset 1.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav } from 'react-bootstrap';


import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import logo from "./images/bad apple dark.png";
import brandname from "./images/Brand name.png";
//import Image from "./pages/VillainImage";





function App() {
  return (
    

    <div className="img-background">
    <BrowserRouter>
    
      

    
    

      <Nav defaultActiveKey="/" className="flex-column">
      
        <img src={brandname} className='brandimage'  alt='No image found/Error'/>
        <img src={logo} className='logoimage'  alt='No image found/Error'/>
      
  <Link to="/" style={{marginTop: "10px"}} ><button className="nav-name">Home</button></Link>
  <Link to="about"  ><button className="nav-name">About</button></Link>
  <Link to="contact" ><button className="nav-name">Contact</button></Link>
</Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      

       
    </BrowserRouter></div>
    
  );
}

export default App;
